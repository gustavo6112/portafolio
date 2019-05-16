import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              public productoService:ProductosService) { }

  ngOnInit() {
    //recivimmos el parametro de url para la busqueda
    this.route.params.subscribe(params=>{
      //console.log(params['valor']);
      this.productoService.buscarProducto(params['valor'])
    })
  }

}
