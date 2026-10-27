import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

interface ResultadoNota {
  nome: string;
  disciplina: string;
  nota1: number;
  nota2: number;
  media: number;
  situacao: 'Aprovado' | 'Reprovado';
}

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './notas.html',
  styleUrl: './notas.css'
})
export class Notas {
  nome = '';
  disciplina = '';
  nota1: number | null = null;
  nota2: number | null = null;
  resultado: ResultadoNota | null = null;
  historico: ResultadoNota[] = [];

  calcularMedia() {
    if (!this.nome.trim() || !this.disciplina.trim() || this.nota1 === null || this.nota2 === null || this.nota1 < 0 || this.nota1 > 10 || this.nota2 < 0 || this.nota2 > 10) {
      alert('Preencha todos os campos. As notas devem estar entre 0 e 10.');
      return;
    }
    const media = (Number(this.nota1) + Number(this.nota2)) / 2;
    this.resultado = {
      nome: this.nome.trim(), disciplina: this.disciplina.trim(), nota1: Number(this.nota1), nota2: Number(this.nota2),
      media, situacao: media >= 7 ? 'Aprovado' : 'Reprovado'
    };
    this.historico.unshift(this.resultado);
  }
}
