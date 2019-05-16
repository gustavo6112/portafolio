import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  //propiedades
producto:ProductoDescripcion;//una forma de utilizar esto ya que js marca error
productoId:string;

  constructor(private route:ActivatedRoute,
    public productoService:ProductosService) { }//para leer el url solo el id enviado 
//obteniendo los datos para el item
  ngOnInit() {
    this.route.params
    .subscribe(parametros=>{
     // console.log(parametros['id']);
      this.productoService.getProducto(parametros['id'])
      .subscribe((producto:ProductoDescripcion)=> {
        this.productoId=parametros['id'];
        //console.log(producto);
        this.producto=producto;
      });
    }); //este va estar pendiente con los parametros url que estamos resiviendo{parametros}
    //sin corchete lo envia como json si le ponemos corchetes enviamos solo el id ['id']
  }

}
