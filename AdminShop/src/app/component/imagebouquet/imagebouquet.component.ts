import { Component, OnInit ,} from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Bouquet } from "src/app/models/bouquet.model";
import { Category } from "src/app/models/category.models";
import { Imagebouquet } from "src/app/models/imageboquet.model";
import { BouquetSerice } from "src/app/service/bouquet.service";
import { CategoryService } from "src/app/service/cateogry.service";
import { ImageBouquetService } from "src/app/service/imageBouquet.service";

@Component({
    selector:'app-root',
    templateUrl:'./imagebouquet.component.html',

})

//interface laf implements
export class BouquetComponnent implements OnInit{

  imageBouquet?: Imagebouquet[];
  constructor(
    private formBuilder: FormBuilder,
    private bouquetService: BouquetSerice,
    private imageService: ImageBouquetService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }
    ngOnInit() {
      
    }


}
