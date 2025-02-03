import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface
import { IKnowledgeInterface } from '../../interface/IKnowledgeInterface.interface';

@Component({
  selector: 'app-knowledge',
  imports: [CommonModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge: IKnowledgeInterface[] = [
    { src: 'assets/knowledge/html5.svg', alt: 'Html 5' },
    { src: 'assets/knowledge/css.svg', alt: 'Css 3' },
    { src: 'assets/knowledge/javascript.svg', alt: 'Javascript' },
    { src: 'assets/knowledge/sass.svg', alt: 'Sass' },
    { src: 'assets/knowledge/csharp.svg', alt: 'C#' },
    { src: 'assets/knowledge/python.svg', alt: 'Python' },
    { src: 'assets/knowledge/java.svg', alt: 'Java' }
  ];

  ngOnInit() {

  }
}
