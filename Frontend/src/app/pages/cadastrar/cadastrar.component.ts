import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import {HttpClient} from '@angular/common/http';

@Component({
  templateUrl: 'cadastrar.component.html'
})

export class CadastrarComponent {
  dataSource: any;
  produtoAdd: {nome: string, descricao: string} = {nome: null, descricao: null};

  constructor(private http: HttpClient) {
    this.dataSource = [];
  }

  adicionaProduto(): void {
    let url = '/produto/add';
    this.http.post(url, this.produtoAdd)
      .subscribe(payload => {
        this.produtoAdd = {nome: null, descricao: null};
      });
  }
}
