import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private httpHeaders = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Accept', 'application/json');
  private httpToolHeaders = new HttpHeaders()
    .append('Content-Type', 'application/json');
  // .append('Access-Control-Allow-Origin', '*');
  constructor(private http: HttpClient) {
  }
  createPostRequest(url: string, body: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post<HttpResponse<any>>(environment.apiServer + url, body, { headers: this.httpHeaders })
        .subscribe((returnDatas: any) => {
          console.log(returnDatas);
          resolve(returnDatas);
        },
          (error) => {
            console.error(error);
            reject();
          });
    });
  }

  createToolPostRequest(url: string, body: any) {
    return new Promise<any>((resolve, reject) => {
      this.http.post(environment.toolApiServer + url, body, { headers: this.httpToolHeaders })
        .subscribe((returnDatas: any) => {
          console.log(returnDatas);
          resolve(returnDatas);
        },
          (error) => {
            console.error(error);
            reject();
          });
    });
  }


  createPutRequest(url: string, body: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.put<HttpResponse<any>>(url, body, { headers: this.httpHeaders })
        .subscribe((returnDatas: any) => {
          console.log(returnDatas);
          resolve(returnDatas);
        },
          (error) => {
            console.error(error);
            reject();
          });
    });
  }

  createGetRequest(url: string) {
    return new Promise<any>((resolve, reject) => {
      this.http.get(environment.apiServer + url, { headers: this.httpHeaders })
        .subscribe((returnDatas: any) => {
          console.log(returnDatas);
          resolve(returnDatas);
        },
          (error) => {
            console.error(error);
            reject();
          });
    });
  }

  createGetToolRequest(url: string) {
    return new Promise<any>((resolve, reject) => {
      this.http.get(environment.toolApiServer + url, { headers: this.httpHeaders })
        .subscribe((returnDatas: any) => {
          console.log(returnDatas);
          resolve(returnDatas);
        },
          (error) => {
            console.error(error);
            reject();
          });
    });
  }

  createGetAllRequest(url: string, options) {
  }
}
