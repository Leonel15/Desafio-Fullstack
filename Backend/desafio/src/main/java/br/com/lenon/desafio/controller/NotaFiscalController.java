package br.com.lenon.desafio.controller;

import br.com.lenon.desafio.model.NotaFiscal;
import br.com.lenon.desafio.service.NotaFiscalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/nota-fiscal")
public class NotaFiscalController {

    @Autowired
    private NotaFiscalService notaFiscalService;

    @PostMapping("/add")
    public void add(@RequestBody NotaFiscal notaFiscal) {
        notaFiscalService.add(notaFiscal);
    }

}