import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  producto:Producto[]=[];
  cargando:boolean=true;
  productoFiltrado:Producto[]=[];

  constructor(private http:HttpClient) { 
    this.cargarProductos();
  }

 private cargarProductos(){
//para que se ejecute primero esto antes de aser la busqueda al recargar la pagina
  return new Promise((resolve,reject)=>{
    this.http.get('https://angular-html-acbee.firebaseio.com/productos_idx.json')
   .subscribe((resp:Producto[])=>{
    
    //console.log(resp);
    this.producto=resp;
    
    this.cargando=false;  
    resolve();
    /*
    setTimeout(() => {
      this.cargando=false;  
    }, 2000);
    */
   });
  });
   
 }

 //mostrar el producto o el item 
 getProducto(id:string){//utilizando backtic este caracter"``"" nos permite utilizar template literales poner 
  return this.http.get(`https://angular-html-acbee.firebaseio.com/productos/${id}.json`);//sin subcrite nesecitamos todo el objeto para que me pueda subcribe
 }

 //buscar el producto
 buscarProducto(valor:string){

  if(this.producto.length===0){
    //Cargar productos
    this.cargarProductos().then(()=>{
      //ejecutar despues de tener los productos
      //aplicar filtro
      this.filtrarProductos(valor);
    })
  }else{
    //aplicar filtro
    this.filtrarProductos(valor);
  }
  /*this.productoFiltrado=this.producto.filter(producto=>{
    return true;
  });
  console.log(this.productoFiltrado);*/
 }

 private filtrarProductos(valor:string){//para el componenete search
  //console.log(this.producto);
  this.productoFiltrado=[];

  valor=valor.toLocaleLowerCase();

  this.producto.forEach(prod=>{

    const tituloLower=prod.titulo.toLocaleLowerCase();

    if(prod.categoria.indexOf(valor)>=0 || tituloLower.indexOf(valor)>=0){
      this.productoFiltrado.push(prod);
    }
  });

 }
}
