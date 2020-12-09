package br.com.lenon.desafio.repository;

import br.com.lenon.desafio.model.NotaFiscal;
import br.com.lenon.desafio.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotaFiscalRepository extends JpaRepository<NotaFiscal, Long> {
}
