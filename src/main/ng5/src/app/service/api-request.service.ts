import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest,  HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import { UserInfoService, LoginInfoInStorage} from './user-info.service';


@Injectable()
export class ApiRequestService {

    constructor(
        private http: HttpClient,
        private router:Router,
        private userInfoService:UserInfoService
    ) {}

    /**
     * This is a Global place to add all the request headers for every REST calls
     */
    getHeaders():HttpHeaders {
        let headers = new HttpHeaders();
        let token = this.userInfoService.getStoredToken();
        headers = headers.append('Content-Type', 'application/json');
        if (token !== null) {
            headers = headers.append("Authorization", token);
        }
        return headers;
    }

    get(url:string, urlParams?:HttpParams):Observable<any>{
        let me = this;
        return this.http.get(url, {headers:this.getHeaders(),  params:urlParams} )
            .catch(function(error:any){
                console.log("Some error in catch");
                if (error.status === 401 || error.status === 403){
                    me.router.navigate(['/logout']);
                }
                return Observable.throw(error || 'Server error')
            });
    }

    post(url:string, body:Object):Observable<any>{
        let me = this;
        return this.http.post(url, JSON.stringify(body), { headers:this.getHeaders()})
            .catch(function(error:any){
                if (error.status === 401){
                    me.router.navigate(['/logout']);
                }
                return Observable.throw(error || 'Server error')
            });
    }

    put(url:string, body:Object):Observable<any>{
        let me = this;
        return this.http.put(url, JSON.stringify(body), { headers:this.getHeaders()})
            .catch(function(error:any){
                if (error.status === 401){
                    me.router.navigate(['/logout']);
                }
                return Observable.throw(error || 'Server error')
            });
    }

    delete(url:string):Observable<any>{
        let me = this;
        return this.http.delete(url, { headers:this.getHeaders()})
            .catch(function(error:any){
                if (error.status === 401){
                    me.router.navigate(['/logout']);
                }
                return Observable.throw(error || 'Server error')
            });
    }

}
