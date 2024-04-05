$(document).ready(function () {

    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            }
        },
        messages: {
            nome: "Por favor, informe o seu nome",
            telefone: "Insira um número de telefone válido (xx xxxx-xxxx)",
            email: "Insira um e-mail válido",
            veiculointeresse: "Selecione qual é o veículo de sua preferência",
            mensagem: "Escreva uma breve descrição do que você precisa"
        },
        submitHandler: function (form) {
            console.log(form);
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert("Existem " + camposIncorretos + " campo(s) incorreto(s). Por favor, verifique os dados");
            }
        }

    });

    /*outros testes*/
    $(".formulario").submit(function(e) {
        e.preventDefault();
    
        const nome = $("#nome").val();
        const email = $("#email").val();
        const telefone = $("#telefone").val();
        const cpf = $("#cpf").val();
        const endereco = $("#endereco").val();
        const cep = $("#cep").val();
    
        console.log({
          nome,
          email,
          telefone,
          cpf,
          endereco,
          cep,
        });

      });



});