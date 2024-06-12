import { Component, ElementRef, ViewChild } from '@angular/core';
import { PolizzaService } from '../services/polizza.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  tipologia="tutte";
  listaSettore : any;
  listaTipologie : any;
  toggle !: any;
  @ViewChild('elementiCanvas') elementiCanvas !: ElementRef;
  constructor(private service : PolizzaService){}

  ngOnInit(){
   

    this.service.visualizzaTipologia().subscribe(
      {next: (data:any)=> this.listaTipologie=data}
    )
  }
  cercaPolizza(tipologia : any, index : number){
    this.tipologia=tipologia.nome;

    if(this.toggle==undefined){
    this.elementiCanvas.nativeElement.childNodes[index].classList.add('tipologia-focus');
    this.toggle=index;
  }
  else{
    this.elementiCanvas.nativeElement.childNodes[this.toggle].classList.remove('tipologia-focus');
    this.elementiCanvas.nativeElement.childNodes[index].classList.add('tipologia-focus');
    this.toggle=index
    }
    this.service.visualizzaSettore(tipologia.id).subscribe(
      {next: (data:any)=>{
        this.listaSettore=data;}}
    )
    console.log(this.listaSettore);
  }

  visualizzaPolizza(){}
}
