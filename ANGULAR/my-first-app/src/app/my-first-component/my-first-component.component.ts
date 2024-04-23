import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})
export class MyFirstComponentComponent implements OnInit {
  animais = [
    { name: 'DOGS',
    image:'../../assets/fotos-cachorros/maia.jpg'
      
    },
    { name: 'CATS',
    image: '../../assets/fotos-gatos/juma.jpeg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
