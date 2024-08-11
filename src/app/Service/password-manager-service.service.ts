import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environment/environment';
@Injectable({
  providedIn: 'root'
})
export class PasswordManagerServiceService {

  constructor(private http: HttpClient) { }

    apiurl = environment.apiUrl;
    public Get(api_url:any)
    {
      api_url = this.apiurl+api_url
      return this.http.get<any>(api_url).pipe(
        map(response => {
          return response; 
        })
      );
    }

    public Delete(api_url:any)
    {
      api_url = this.apiurl+api_url
      return this.http.delete<any>(api_url).pipe(
        map(response => {
          return response;
        })
      );
    }

    public Post(data:any ,api_url:any)
    {
      api_url = this.apiurl+api_url
      return this.http.post<any>(api_url,data).pipe(
        map(response => {
          return response;
        })
      );
    }

    public Put(data:any,api_url:any)
    {
      api_url = this.apiurl+api_url
      return this.http.put<any>(api_url,data).pipe(
        map(response => {
          return response;
        })
      );
    }
  
}
