import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.css']
})
export class WhoWeAreComponent {

  imagewho: string = "";
  identificadorTiempoDeEspera: any;
  async ngOnInit() {

    this.imagewho = this.showGreetings();
  }

  showGreetings(): string {
    
    return "../../../assets/img/img2.jpg";
  }

}
