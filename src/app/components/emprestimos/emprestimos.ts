import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emprestimos',
  standalone:true,
  imports: [RouterLink, FormsModule],
  templateUrl: './emprestimos.html',
  styleUrl: './emprestimos.css'
})
export class Emprestimos {
  emprestimo: Emprestimo = {
    nome: '',
    telefone: '',
    titulo: '',
    autor: ''
  };

  emprestarLivro() {
    // Salva no localStorage
    const emprestimos = JSON.parse(localStorage.getItem('emprestimos') || '[]');
    const novoEmprestimo = {
      ...this.emprestimo,
      dataEmprestimo: new Date().toLocaleDateString('pt-BR'),
      id: Date.now()
    };
    
    emprestimos.push(novoEmprestimo);
    localStorage.setItem('emprestimos', JSON.stringify(emprestimos));
    
    // Limpa o formulário
    this.emprestimo = { nome: '', telefone: '', titulo: '', autor: '' };
    
    alert('Livro emprestado com sucesso!');
  }
}

interface Emprestimo {
  nome: string;
  telefone: string;
  titulo: string;
  autor: string;
}


