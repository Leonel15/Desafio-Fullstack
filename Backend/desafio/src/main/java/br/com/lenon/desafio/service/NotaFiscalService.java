package br.com.lenon.desafio.service;

import br.com.lenon.desafio.model.NotaFiscal;
import br.com.lenon.desafio.repository.NotaFiscalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotaFiscalService {

    @Autowired
    private NotaFiscalRepository notaFiscalRepository;

    public NotaFiscal add(NotaFiscal notaFiscal) {
        return notaFiscalRepository.save(notaFiscal);
    }

    public List<NotaFiscal> listar() {
        return notaFiscalRepository.findAll();
    }

    public NotaFiscal findById(Long id) {
        return notaFiscalRepository.findById(id).get();
    }
}
