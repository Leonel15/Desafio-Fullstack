import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import {HttpClient} from '@angular/common/http';

@Component({
  templateUrl: 'tasks.component.html'
})

export class TasksComponent {
  dataSource: any;
  produtoAdd: {nome: string, descricao: string} = {nome: null, descricao: null};

  constructor(private http: HttpClient) {
    this.getProdutos();
    this.dataSource = [];
  }

  adicionaProduto(): void {
    let url = '/produto/add';
    this.http.post(url, this.produtoAdd)
      .subscribe(payload => {
        this.produtoAdd = {nome: null, descricao: null};
        this.getProdutos();
      });
  }
  getProdutos(): void {
    let url = '/produto/list-all';
    this.http.get(url)
      .subscribe(payload => {
        this.dataSource = payload;
      });
  }

  apagarLista(): void {
    let url = '/produto/truncate';
    this.http.delete(url)
      .subscribe(payload => this.dataSource = []);
  }

  addLista(): void {
    let url = 'produto/add-list';
    this.http.post(url, [
      {
        "nome": "Kuat",
        "descricao": "Refrigerante"
      },
      {
        "nome": "Pepsi",
        "descricao": "Refrigerante"
      }])
      .subscribe(paylod => {
        this.getProdutos();
      });
  }
}
