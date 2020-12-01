package br.com.lenon.desafio.repository;

import br.com.lenon.desafio.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer> {
//    Produto findName(String nameParams);
}
