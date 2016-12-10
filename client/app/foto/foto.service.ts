import { Http, Headers } from '@angular/http';
import { FotoComponent } from './foto.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class FotoService {

  http: Http;
  headers: Headers;
  url: string = 'v1/fotos';

  constructor(http: Http) {

    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  list(): Observable<FotoComponent[]> {
    return this.http.get(this.url).map(res => res.json());
  }

  insert(foto: FotoComponent): Observable<registerMsg> {
    if(foto._id) {
      return this.http
            .put(this.url+'/'+foto._id, JSON.stringify(foto), { headers: this.headers})
            .map(() => new registerMsg('Foto alterada com sucesso!', false));
    } else {
      return this.http
            .post(this.url, JSON.stringify(foto), { headers: this.headers})
            .map(() => (new registerMsg('Foto incluida com sucesso!', true));
    }
  }

  remove(foto: FotoComponent): Observable<Response> {
    return this.http.delete(this.url+'/'+foto._id);
  }

  getById(id: string): Observable<FotoComponent> {
    return this.http.get(this.url+'/'+id).map(res => res.json());
  }

}

export class registerMsg {
  mensagem: string;
  inclusao: boolean;

  constructor(mensagem: string, inclusao: boolean) {
    this.mensagem = mensagem;
    this.inclusao = inclusao;
  }
}
