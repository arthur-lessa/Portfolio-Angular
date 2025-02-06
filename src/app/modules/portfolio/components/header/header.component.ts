import { Component } from '@angular/core';  
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  imports: [MatTooltipModule, MatTooltip],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  imgSrc = 'assets/img/Arthur2.png'

  public FirstAboutMeText = 'Olá, meu nome é Arthur. Sou desenvolvedor em formação, com experiência em testes automatizados, frontend e boas práticas de código. Trabalho com C#, Angular, HTML, TypeScript, SCSS e Playwright, buscando sempre soluções eficientes. Também tenho conhecimento em MySQL/DBeaver e controle de versão com Git e GitKraken.';
  public SecondAboutMeText = 'Atualmente, foco no desenvolvimento frontend e na criação de interfaces dinâmicas. Também aprofundo meus conhecimentos em APIs com ASP.NET em C#, explorando boas práticas para desempenho e segurança. Gosto de resolver problemas de forma prática e aprender novas tecnologias constantemente.';
  public ThirdAboutMeText = 'Se quiser trocar uma ideia sobre desenvolvimento web, APIs ou boas práticas de programação, estou sempre aberto a conversas!';
}
