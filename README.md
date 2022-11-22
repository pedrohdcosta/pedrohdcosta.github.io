# pedrohdcosta.github.io

Atividade Projetos e Arquitetura de Software

Grupo: Pedro Henrique Dias da Costa, Gustavo Rodrigues


----------------------------------------------------------------------------------------------------------------------------------------------------------------

Documentaçao API

Essa API tem uma premissa muito simples, uma API faz uma comunicaçao entre o usuario e programa, onde o programa realiza uma pergunta, sendo essa "PING OU PONG"
e solicita uma resposta do usuario e de acordo com a resposta do usuario, o programa tem um tipo de resposta.

A API que desenvolvemos ultiliza o conceito DOM, onde ultilizamos da linguagem JavaScript para comunicar com uma pagina HTML, e realiza alteraçoes na mesma, e 
o serviço GitHub Pages, para termos acesso via web desse projeto.

----------------------------------------------------------------------------------------------------------------------------------------------------------------

Funcionalidade:

Essa API trabalha com 2 funcoes:

A funçao "pingpongAPI": essa funçao funciona de maneira simples, uma variavel é criada e recebe uma resposta que é obtida atraves de um prompt, e ultilizando
estruturas condicionais obtemos a resposta desejada, a qual posteriormente vai ser inserida, por meio de um DOM, dentro de uma pagina HTML.

-E chamada pela funcao body.

Funçao "tryAgain": é a funçao responsavel para fazer a recarga da pagina, por meio do metodo reload.

-Esta localizada na tag button.


----------------------------------------------------------------------------------------------------------------------------------------------------------------

Pagina WEB:

A pagina WEB foi construida ultilizando a estrutura HTML.

-A tag body é responsavel por chamar a funçao principal, a qual é chamada por meio de um evento "onload", significando que toda a vez que a pagina for carregada
essa funçao sera chamada novamente.

-A tag p, com um Id de "main" é a tag que vai escrever a resposta da funçao principal, onde podemos ver a açao efetiva da estrutura DOM, a qual tera alteraçao 
por meio da resposta do usuario.

-A tag button que, por meio de um evento "onclick", chama a funçao para recarregar a pagina, por meio de um botao.

-A tag script é a que recebe o src do javaScript com as funçoes.

---------------------------------------------------------------------------------------------------------------------------------------------------------------
