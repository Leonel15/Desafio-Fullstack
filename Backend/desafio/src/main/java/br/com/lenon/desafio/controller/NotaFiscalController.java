package br.com.lenon.desafio.controller;

import br.com.lenon.desafio.model.NotaFiscal;
import br.com.lenon.desafio.service.NotaFiscalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/nota-fiscal")
public class NotaFiscalController {

    @Autowired
    private NotaFiscalService notaFiscalService;

    @PostMapping("/add")
    public NotaFiscal add(@RequestBody NotaFiscal notaFiscal) {
        return notaFiscalService.add(notaFiscal);
    }

    @GetMapping("/listar")
    public List<NotaFiscal> listar() {
        return notaFiscalService.listar();
    }


    @GetMapping("/{id}")
    public NotaFiscal findById(@PathVariable("id") Long id) {
        return notaFiscalService.findById(id);
    }

}