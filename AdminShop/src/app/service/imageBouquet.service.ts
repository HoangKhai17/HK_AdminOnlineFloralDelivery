import { Injectable } from "@angular/core";
import { BaseURLService } from "./baseurl.service";
import {HttpClient} from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { Imagebouquet } from "../models/imageboquet.model";

@Injectable()
export class ImageBouquetService{

 constructor(
  private baseURLService: BaseURLService,
  private httpClient: HttpClient
 ){}

 async created(imageBouquet: Imagebouquet){
  return await lastValueFrom(this.httpClient.post(this.baseURLService.getBaseUrl()+'image/created',imageBouquet));
}


// async findAll(){
//   // tra ve duong dan goc http://localhost:5182/api/
//   return await lastValueFrom(this.httpClient.get(this.baseURLService.getBaseUrl()+'category/findAllCategories'));
// }
// async findbyid(id: string){
//   // tra ve duong dan goc http://localhost:5182/api/
//   return await lastValueFrom(this.httpClient.get(this.baseURLService.getBaseUrl()+'category/findbyid/'+id));
// }

}
