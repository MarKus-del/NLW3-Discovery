# Happy - Trilha discovery

## Sobre a NLW



Este projeto foi desenvolvido durante a terceira versão da NLW (next level week) evento online e gratuito da RocketSeat, que tem como objetivo de ensinar a como criar uma aplicação do zero para devs iniciante na trilha discovery ou apresentar novas tecnologias utilizadas no mercado para quem já tem experiencia em desenvolvimento na trilha omnistack.

## Sobre o Happy 


Nesta terceira versão do NLW foi desenvolvido a aplicação Happy criada para aproximar orfanatos para pessoas que queiram ajudar em trabalhos comunitarios prestando auxilio para crianças orfas indo visita-las,
neste app será possivel cadastrar o orfanato e oferecer sua localização para qualquer pessoa que acesse ver seus horarios de atendimento para agendarem sua visita

## O que eu aprendi?


+ day 1
    + Pratica em html e css
    + primeiro contato com animações em css utilizando @key-frames e a propriedade animation   
+ day 2
    + Grid e clamp em css
    + utilizar a biblioteca de mapas leaftlet
+ day 3
    + manipular a pagina com js
+ day 4
    + criar server com node.js, express e nodemon
    + usar o template engine handlebars.js para deixar as paginas html mais dinamicas
+ day 5
    + adiciona o banco de dados relacional sqlite
    + comandos basicos de sql

## Desafios

 * [X] aprender operador ternario

    ~~~js
     orphanage.open_on_weekends = (orphanage.open_on_weekends == "0")? false: true;
    ~~~

 * [X] validar campo de localização

    ~~~js
    function validate(event){
    const lat = document.querySelector('[name=lat]').value;
    const lng = document.querySelector('[name=lng]').value;

    //validar se lat e lng estâo preenchidos
    const needsLatAndLng = (lat=="" || lng=="")? true: false;

        if(needsLatAndLng){
            
            const map = document.querySelector('.map-container');
            const spanError = document.querySelector('.msg-erro');

            map.classList.add('erro')
            spanError.classList.remove("off")
            spanError.classList.add("on")

            event.preventDefault();
        }
    }
    
