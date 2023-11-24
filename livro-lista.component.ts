import { Component, OnInit } from '@angular/core';
import { Livro } from './livro';
import { Editora } from './editora';
import { ControleLivrosService } from './controle-livros.service';
import { ControleEditoraService } from './controle-editora.service';

@Component({
    selector: 'app-livro-lista',
    templateUrl: './livro-lista.component.html',
    styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
    editoras: Editora[] = [];
    livros: Livro[] = [];

    constructor(private servEditora: ControleEditoraService, private serLivros: ControleLivrosService) { }

    ngOnInit(): void {
        this.editoras = this.servEditora.getEditoras();
        this.livros = this.servLivros.obterLivros();
    }

    excluir(codigo: number): void {
        this.servLivros.excluir(codigo);
        this.livros = this.servLivros.obterLivros();
    }

    obterNome(codEditora: number): string {
        return this.servEditora.getNomeEditora(codEditora);
    }
}

