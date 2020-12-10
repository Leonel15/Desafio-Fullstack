import { Item } from './Item';

export class NotaFiscal {
   id: number;
   numero: number;
   fornecedor: string;
   data: Date;
   itens: Item[];
}
