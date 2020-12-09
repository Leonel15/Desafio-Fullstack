package br.com.lenon.desafio.service;

import br.com.lenon.desafio.model.NotaFiscal;
import br.com.lenon.desafio.repository.NotaFiscalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NotaFiscalService {

    @Autowired
    private NotaFiscalRepository notaFiscalRepository;

    public void add(NotaFiscal notaFiscal) {
        notaFiscalRepository.save(notaFiscal);
    }

}
