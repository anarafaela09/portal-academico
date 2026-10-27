import { Component } from '@angular/core';

interface Curso {
  nome: string;
  descricao: string;
  cargaHoraria: number;
  situacao: 'Ativo' | 'Inativo';
  detalhes: string;
}

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css'
})
export class Cursos {
  cursos: Curso[] = [
    { nome: 'Informática para Internet', descricao: 'Criação de sites e aplicações web.', cargaHoraria: 1200, situacao: 'Ativo', detalhes: 'Curso voltado ao desenvolvimento de páginas, sistemas web e aplicações para internet.' },
    { nome: 'Desenvolvimento de Sistemas', descricao: 'Programação e criação de sistemas.', cargaHoraria: 1200, situacao: 'Ativo', detalhes: 'Estudo de lógica, programação, banco de dados e desenvolvimento de sistemas.' },
    { nome: 'Redes de Computadores', descricao: 'Instalação e manutenção de redes.', cargaHoraria: 1000, situacao: 'Ativo', detalhes: 'Aprendizado de infraestrutura, configuração e segurança de redes.' },
    { nome: 'Design Gráfico', descricao: 'Criação visual e comunicação digital.', cargaHoraria: 800, situacao: 'Inativo', detalhes: 'Fundamentos de composição visual, identidade gráfica e ferramentas de design.' }
  ];
  cursoSelecionado: Curso | null = null;

  verDetalhes(curso: Curso) {
    this.cursoSelecionado = this.cursoSelecionado?.nome === curso.nome ? null : curso;
  }
}
