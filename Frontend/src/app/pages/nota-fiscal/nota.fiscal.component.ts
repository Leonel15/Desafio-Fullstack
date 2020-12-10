import { Component, OnInit } from '@angular/core';
import { NotaFiscal } from '../../model/notaFiscal';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  templateUrl: './nota.fiscal.component.html',
})

export class NotaFiscalComponent implements OnInit {

  model: NotaFiscal = new NotaFiscal();
  private url = '/api/nota-fiscal/';
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.model.itens = [];
    this.activatedRoute.paramMap.subscribe((params: ParamMap) =>  {
      console.log('Mudei de rota!');
      this.getNotaFiscalById(params.get('id'));
    });
  }

  adicionaNotaFiscal(): void {
    this.http.post<NotaFiscal>(this.url + 'add', this.model)
      .subscribe(payload => {
        this.model = payload;
      });
  }

  getNotaFiscalById(id: string): void {
    this.http.get<NotaFiscal>(this.url + id)
      .subscribe(payload => {
        this.model = payload;
      });
  }
}
