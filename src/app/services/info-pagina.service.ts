import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info:InfoPagina;//para usar esto primero tiene que crear su interfas
  cargada:boolean=false;
  constructor(private http:HttpClient) {//con el servicio en el constructor puedo realizar pedido a servidores externos y mas
    console.log('servicio de info pagina listo');


    //Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp:InfoPagina)=>{
        this.cargada=true;
        this.info=resp;
        console.log(resp);
      });//recibe una respuesta
      //para recuperar la respuesta solo un atributo resp.twitter
      //resolver el error si solo ponemos para sacar el dato (resp:any)=>{col.log(res.twitter)}
      //resolver el error si solo ponemos para sacar el dato console.log(resp['twitter'])
  }
}
