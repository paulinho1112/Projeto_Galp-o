import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-devolucoes',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './devolucoes.html',
  styleUrl: './devolucoes.css'
})
export class Devolucoes {
  telefoneBusca = '';
  livrosEmprestados: any[] = [];
  mostrarLivros = false;
  mensagem = '';

  buscarLivros() {
    if (!this.telefoneBusca.trim()) {
      this.mensagem = 'Por favor, digite um número de WhatsApp';
      this.mostrarLivros = false;
      return;
    }

    // Busca empréstimos no localStorage
    const emprestimos = JSON.parse(localStorage.getItem('emprestimos') || '[]');
    this.livrosEmprestados = emprestimos.filter((emp: any) => 
      emp.telefone === this.telefoneBusca
    );

    if (this.livrosEmprestados.length === 0) {
      this.mensagem = 'Nenhum livro foi encontrado para este número';
      this.mostrarLivros = false;
    } else {
      this.mensagem = `${this.livrosEmprestados.length} livro(s) encontrado(s)!`;
      this.mostrarLivros = true;
    }
  }

  devolverLivro(livro: any) {
    // Remove o livro da lista de empréstimos
    const emprestimos = JSON.parse(localStorage.getItem('emprestimos') || '[]');
    const emprestimosAtualizados = emprestimos.filter((emp: any) => emp.id !== livro.id);
    localStorage.setItem('emprestimos', JSON.stringify(emprestimosAtualizados));
    
    // Atualiza a lista local
    this.livrosEmprestados = this.livrosEmprestados.filter(l => l.id !== livro.id);
    
    if (this.livrosEmprestados.length === 0) {
      this.mostrarLivros = false;
      this.mensagem = 'Todos os livros foram devolvidos!';
    }
    
    alert('Livro devolvido com sucesso!');
  }
}
