import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Aluno {
  nome: string;
  matricula: string;
  email: string;
  curso: string;
}

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alunos.html',
  styleUrl: './alunos.css'
})
export class Alunos {
  nome = '';
  matricula = '';
  email = '';
  curso = '';

  alunos: Aluno[] = [
    { nome: 'Ana Souza', matricula: '2026001', email: 'ana@email.com', curso: 'Informática para Internet' },
    { nome: 'Carlos Lima', matricula: '2026002', email: 'carlos@email.com', curso: 'Desenvolvimento de Sistemas' }
  ];

  cadastrarAluno() {
    if (!this.nome.trim() || !this.matricula.trim() || !this.email.trim() || !this.curso.trim()) {
      alert('Preencha todos os campos.');
      return;
    }
    if (this.alunos.some(aluno => aluno.matricula === this.matricula.trim())) {
      alert('Essa matrícula já está cadastrada.');
      return;
    }
    this.alunos.push({ nome: this.nome.trim(), matricula: this.matricula.trim(), email: this.email.trim(), curso: this.curso.trim() });
    this.nome = '';
    this.matricula = '';
    this.email = '';
    this.curso = '';
  }

  excluirAluno(matricula: string) {
    this.alunos = this.alunos.filter(aluno => aluno.matricula !== matricula);
  }
}
