
import { Component, OnInit ,} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Bouquet } from "src/app/models/bouquet.model";
import { Category } from "src/app/models/category.models";
import { ResultAPI } from "src/app/models/resultapi.model";
import { BouquetSerice } from "src/app/service/bouquet.service";
import { CategoryService } from "src/app/service/cateogry.service";

@Component({
    selector:'app-root',
    templateUrl:'./bouquet.component.html',

})

//interface laf implements
export class EditBouquetComponnent implements OnInit{
  editFromBouquet!: FormGroup;
  bouquet!: Bouquet;
  category: Category[];
  constructor(
    private formBuilder: FormBuilder,
    private bouquetService: BouquetSerice,
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }
    ngOnInit() {

       this.categoryService.findAll().then(
        result => {
          this.category = result as Category[];
        },
        err => {
          console.log(err);
        }
      )

      this.activatedRoute.paramMap.subscribe(p=>{
        var bouquetId = p.get('bouquetId');
        console.log(bouquetId);
        this.bouquetService.findById(bouquetId!).then(
          result => {
            this.bouquet = result as Bouquet;
            console.log(this.bouquet);
            this.editFromBouquet = this.formBuilder.group({
                bouquetId: this.bouquet.bouquetId,
                bouquetName: this.bouquet.bouquetName,
                description: this.bouquet.description,
                price: this.bouquet.price,
                quantity: this.bouquet.quantity,
                categoryId: this.bouquet.categoryId,
                categoryName: this.bouquet.categoryName,
                status: this.bouquet.status,
                secondPrice: this.bouquet.secondPrice,
                eventPrice: this.bouquet.eventPrice,
                created:this.bouquet.created
            })
          },
          err => {
            console.log(err);
          }
        )
      })

    }
    save(){
    console.log('Information bouquet');
    var bouquet: Bouquet = this.editFromBouquet.value as Bouquet;
    bouquet.bouquetId = this.bouquet.bouquetId;
    console.log(bouquet);
    this.bouquetService.update(bouquet).then(
      result => {
        console.log(result);
        var resultAPI: ResultAPI = result as ResultAPI;
        if (resultAPI.result) {
          // sử dụng router để redirect về
          alert('Success');
          this.router.navigate(['/admin/bouquet']);
        } else {
          alert('Failed');
        }
      },
      err => {
        console.log(err);
      }
    );
    }
}
