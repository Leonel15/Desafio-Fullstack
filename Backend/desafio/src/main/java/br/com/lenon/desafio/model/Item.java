package br.com.lenon.desafio.model;

import javax.persistence.*;

@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "nota")
    private NotaFiscal nota;

    private String item;

    private float valor;


    public Item(){

    }

    public Item(long id, String item, Float valor) {
        this.item = item;
        this.valor = valor;
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public float getValor() {
        return valor;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }

    public NotaFiscal getNota() {
        return nota;
    }

    public void setNota(NotaFiscal nota) {
        this.nota = nota;
    }
}
