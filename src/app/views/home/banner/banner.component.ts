import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public textOne!: string;
  public textTwo!: string;
  public textTree!: string;

  classToDiv = {}

  constructor() { 
    this.classToDiv = {
      'text-success': true
    }
  }

  ngOnInit(): void {
    this.textOne! = "Game Mania mais pertinho de você!";
    this.textTwo! = "Conecte-se para ver o melhor do mundo gamer!";
    this.textTree! = "Você foca em um objetivo, e o nosso é ajudar você a chegar ao seu objetivo!";
  }

}
