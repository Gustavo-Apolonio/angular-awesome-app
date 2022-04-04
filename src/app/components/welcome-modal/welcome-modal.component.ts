import { Component, OnInit } from '@angular/core';

export interface ISlideWelcome {
  title: string;
  description: string;
  index: number;
  icon: string;
}

@Component({
  selector: 'app-welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.scss'],
})
export class WelcomeModalComponent implements OnInit {
  open: boolean = true;

  bannerIndex: number = 1;

  slides: ISlideWelcome[] = [
    {
      title: 'Nova experiência de Abertura de Conta PJ',
      description:
        'Conheça as novas funcionalidades e veja como é simples realizar uma Abertura de Conta PJ.',
      index: 0,
      icon: '',
    },
    {
      title: 'Jornada unificada',
      description:
        'Agora toda a jornada de abertura de conta PJ será feita através do HUB, facilitando o preenchimento e acompanhamento.',
      index: 1,
      icon: '',
    },
    {
      title: 'Autopreenchimento',
      description:
        'Informações básicas e quadro de estrutura societária já vem preenchidos automaticamente com dados da Receita!',
      index: 2,
      icon: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleIsOpen(open: boolean) {
    this.open = open;
  }
}
