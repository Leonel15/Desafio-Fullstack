import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import {HttpClient} from '@angular/common/http';
import {Produto} from "../../model/produto";

@Component({
  templateUrl: 'cadastrar.component.html'
})

export class  CadastrarComponent {

  produtoAdd: Produto = new Produto();

  constructor(private http: HttpClient) {
  }

  adicionaProduto(): void {
    let url = '/api/produto/add';
    this.http.post(url, this.produtoAdd)
      .subscribe(payload => {
        this.produtoAdd = new Produto();
      });
  }
}
