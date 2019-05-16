import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //navegar desde el componente con router
  constructor(public infoPaginaService:InfoPaginaService,
    private router:Router) { }

  ngOnInit() {
  }

  buscarProducto(valor:string){
    //validacion
    if(valor.length <1){
      return;
    }
    this.router.navigate(['/search',valor]);
    //console.log(valor);
  }

}
