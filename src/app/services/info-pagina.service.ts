import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { Equipo } from '../interfaces/equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info:InfoPagina;//para usar esto primero tiene que crear su interfas
  cargada:boolean=false;
  equipo:Equipo;
  constructor(private http:HttpClient) {//con el servicio en el constructor puedo realizar pedido a servidores externos y mas
    //console.log('servicio de info pagina listo');
    this.cargarInfo();
    this.cargarEquipo();
    
  }

  private cargarInfo(){
    //Leer el archivo JSON que esta en la carpeta assest en el proyecto
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

  private cargarEquipo(){
    //Leer el archivo json desde la api firebase de google
     this.http.get('https://angular-html-acbee.firebaseio.com/equipo.json')
      .subscribe((resp:Equipo)=>{
        this.equipo=resp;
        this.cargada=true;
        console.log(resp);
      });
  }
}
