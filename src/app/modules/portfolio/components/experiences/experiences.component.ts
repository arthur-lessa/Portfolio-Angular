import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { IExperienceInterface } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperienceInterface[]>([
    {
      summary: {
        strong: 'Estágio em desenvolvimento de software - Fullstack/Testes Automatizados PlayWright',
        p: 'Black101 | Mai 2024 - Atual'
      },
      text: '<p>Desde maio de 2024, atuo como estagiário em desenvolvimento de software, contribuindo ativamente para a implementação de novas funcionalidades utilizando Angular, juntamente com TypeScript, HTML e SCSS. Além disso, também tive a oportunidade de atuar no desenvolvimento da API da empresa com C# .NET, manipulando bancos de dados e utilizando diversos frameworks auxiliares. Durante esse período, desenvolvi testes automatizados com Playwright, um framework para C# .NET que permite a simulação do uso de aplicações web.</p>'
    },
    {
      summary: {
        strong: 'Desenvolvimento de aplicações web - Fullstack',
        p: 'IFSP | 2023 - Atual'
      },
      text: '<p>Durante meu curso no Instituto Federal de Ciências e Tecnologias de São Paulo, no Câmpus São Paulo, pude usufruir significativamente de diversos conhecimentos, que me permitiram participar e colaborar no desenvolvimento de aplicações, fossem elas focadas em Backend, ou então Frontend. Participei do desenvolvimento de aplicações utilizando:</p> <ul><li>Frontend: HTML, Css, Javascript, Typescript, Angular</li> <li>Backend: Java, Python, MySQL (Banco de dados)</li></ul>'
    }
  ]);
}
