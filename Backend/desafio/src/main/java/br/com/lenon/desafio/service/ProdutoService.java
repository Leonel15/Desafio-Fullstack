package br.com.lenon.desafio.service;

import br.com.lenon.desafio.model.Produto;
import br.com.lenon.desafio.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> list() {
        return produtoRepository.findAll();
    }

    public void add(Produto produto) {
        produtoRepository.save(produto);
    }

    public void addList(List<Produto> produtos) {
        for (Produto produto : produtos) {
            add(produto);
        }
    }

    public void delete(Integer id) {
        produtoRepository.deleteById(id);
    }

    public void truncate() {
        produtoRepository.deleteAll();
    }

//    public Produto findByName(String nameParams) {
//        produtoRepository.findName(nameParams);
//    }
}
