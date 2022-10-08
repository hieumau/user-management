import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
  }


  // public get<T>(url: string, item?: string, params?: HttpParams): Observable<ApiResponse<T>> {
  //   if (item) {
  //     url += `/${item}`;
  //   }
  //   return this.httpClient.get<ApiResponse<T>>(url, {params: params});
  // }
  //
  // public post<T>(url: string, item: any): Observable<ApiResponse<T>> {
  //   return this.httpClient.post<ApiResponse<T>>(url, item);
  // }
  //
  // public put<T>(url: string, item: T): Observable<ApiResponse<T>> {
  //   return this.httpClient.put<ApiResponse<T>>(url, item);
  // }
  //
  // public delete<T>(url: string, itemId: string): Observable<ApiResponse<T>> {
  //   url += `/${itemId}`;
  //   return this.httpClient.delete<ApiResponse<T>>(url);
  // }
  //
  // public getHttpClient(): HttpClient {
  //   return this.httpClient;
  // }
}
