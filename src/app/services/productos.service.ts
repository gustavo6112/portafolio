import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  producto:Producto[]=[];
  cargando:boolean=true;

  constructor(private http:HttpClient) { 
    this.cargarProductos();
  }

 private cargarProductos(){
   this.http.get('https://angular-html-acbee.firebaseio.com/productos_idx.json')
   .subscribe((resp:Producto[])=>{
    
    console.log(resp);
    this.producto=resp;
    
    this.cargando=false;  
    /*
    setTimeout(() => {
      this.cargando=false;  
    }, 2000);
    */
   });
 }
}
