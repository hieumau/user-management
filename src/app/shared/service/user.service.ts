import {HttpParams} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {ApiService} from "../../core/service/api.service";
import {PageData} from "../model/page-data";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) {
  }

  baseUrl: string = environment.apiUrl + 'users'

  getListUser(perPage: number, page: number): Promise<PageData<User>> {
    return new Promise((resolve, reject) => {
      let params = new HttpParams()
      params = params.set('page', page)
      params = params.set('per_page', perPage)
      this.apiService.get(this.baseUrl, null, params).subscribe((value: any) => {
          resolve(value)
        },
        error => {
          reject(error)
        })
    })
  }

}
