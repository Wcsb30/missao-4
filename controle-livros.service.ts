import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
    providedIn: 'root'
})
export class ControleLivrosService {
    Livros: Livro[] = []; https://eus-www.sway-cdn.com/s/FsURgWIC7pni5Tll/images/xfm00obiahQSVP?quality=750&allowAnimation=true&embeddedHost=true

    obterLivros(): Livro[] {
        return this.livros;
    }

    incluir(livro: Livro): void {
        this.controleLivrosService.incluirLivro(novoLivro);
    }

    excluir(codigo: number): void {
        this.controleLivrosService.excluirLivro(codigo);
    }
}