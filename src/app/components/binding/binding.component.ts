import { Component } from '@angular/core';
//import { Usuario } from '../usuario';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {

  public edadUno : number =0 ;
  public edadDos : number =0;
  public promedio :number =0;
  public suma :number =0;


  public onClick(event: any): void{
    this.suma = parseFloat(this.edadUno.toString())+ parseFloat(this.edadDos.toString());
    this.promedio = this.suma / 2
  }

  public limpiarValores(){
    this.edadUno=0;
    this.edadDos=0;
    this.promedio=0;
    this.suma=0;
  }



  
}
