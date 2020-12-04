import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import {HttpClient} from '@angular/common/http';

@Component({
  templateUrl: 'listar.component.html'
})

export class ListarComponent {
  dataSource: any;
  produtoAdd: {nome: string, descricao: string} = {nome: null, descricao: null};

  constructor(private http: HttpClient) {
    this.getProdutos();
    this.dataSource = [];
  }

  getProdutos(): void {
    let url = '/api/produto/list-all';
    this.http.get(url)
      .subscribe(payload => {
        this.dataSource = payload;
      });
  }
}
