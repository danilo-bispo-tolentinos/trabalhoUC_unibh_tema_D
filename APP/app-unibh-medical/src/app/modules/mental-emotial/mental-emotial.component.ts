import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mental-emotial',
  templateUrl: './mental-emotial.component.html',
  styleUrls: ['./mental-emotial.component.scss'],
})
export class MentalEmotialComponent implements OnInit {

  arrayImages = [
    {
      link: '',
      image: 'https://www.nucleode-stress.com.br/wp-content/uploads/2020/10/dia-mundial-da-saude-mental.png'
    },
  ]

  constructor() { }

  ngOnInit() { }

}
