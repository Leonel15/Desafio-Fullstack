import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import { HttpClient } from '@angular/common/http';
import { Produto } from "../../model/produto";

@Component({
  templateUrl: 'listar.component.html'
})

export class ListarComponent {
  dataSource;
  produtoAdd: Produto = new Produto();

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
