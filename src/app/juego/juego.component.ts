import { Component, OnInit } from '@angular/core';
import { Configuracion } from '../modelos/configuración';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  public config : Array<Configuracion>;
  public nombre : string ="";
  public apellido : string ="";
  public rango : number = 0;
  public intentos : number = 0;
  public numeroG : number = 0;
  public numero : number = 0;
  public total : number[] = [];
  public resultado : string = "";
  public act:number = 0;
  constructor() { 

    this.config=[];

  }

  ngOnInit(): void {
  }

  getConf():void{
    if (this.nombre == ""||this.apellido==""||this.rango==0||this.intentos==0){
      alert ("tienes campos vacíos rellenalos")
    }else{
    this.config.push(new Configuracion(this.nombre,this.apellido,this.rango,this.intentos))
    this.numeroG = this.random();
    }
  }
random () {
  
    return Math.floor((Math.random() * (this.rango - 0 + 1)) + 0);
}
  getJug():void{
      
      if (this.config[0].intentos == 0 || this.act == 1){

      }else{
        if (this.numero == this.numeroG ){
          this.resultado= "Si";
          this.act = 1;
          this.total.push(this.numero);
        }else{
        this.config[0].intentos --;
        this.resultado= "No";
        this.total.push(this.numero);
      }
      }

    
  }

}
