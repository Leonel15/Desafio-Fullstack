package br.com.lenon.desafio.controller;

import br.com.lenon.desafio.model.Produto;
import br.com.lenon.desafio.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController

@RequestMapping(path = "/produto")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;


    @PostMapping("/add")
    public void add(@RequestBody Produto produto) {

        produtoService.add(produto);
    }

    @PostMapping("/add-list")
    public void add(@RequestBody List<Produto> produtos) {

        produtoService.addList(produtos);
    }

    @GetMapping("/list-all")
    public List<Produto> listAll() {
        return produtoService.list();
    }

    @DeleteMapping("/{id}/delete")
    public void delete(@PathVariable("id") Integer id) {
        produtoService.delete(id);
    }

    @DeleteMapping("/truncate")
    public void truncate() {
        produtoService.truncate();
    }

//    @GetMapping("/find-by-name/{nome}")
//    public Produto findByName(@PathParam("nome") String nome) {
//        return produtoService.findByName(nome);
//    }
}



