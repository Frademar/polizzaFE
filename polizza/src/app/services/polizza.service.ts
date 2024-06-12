import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolizzaService {

  constructor(private http : HttpClient) { }

  visualizzaTipologia(){
    return this.http.get("http://localhost:8080/api/tipologia/prelevaTipologia");
  }

  visualizzaSettore(id : number){
    // L'intestazione "Content-Type" è un elemento fondamentale nelle richieste HTTP, in quanto specifica la natura dei dati inviati dal client al server
    return this.http.get(`http://localhost:8080/api/settore/prelevaSettore/${id}`,{headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })});
  }

  visualizzaPolizza(settore : string){
    return this.http.get(`http://localhost:8080/api/polizza/prelevaPolizza/${settore}`,{headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })});
  }
}
