# Projeto nodejs com mysql e docker
Esse desafio aplicado pela Fullcycle propõem a criação de um projeto onde o usuário fará uma requisição para uma aplicação node, cujo servidor será gerenciaodo pelo nginx. Essa aplicação deverá receber uma requisição POST cujo payload deverá conter em seu payload o atributo name. O backend deverá receber esse nome, adicionar no banco de dados mysql e retornar uma listagem com todos os nomes cadastrados.

<h3>Para subir a aplicação faça:</h3>

<h4>1. Faça o build das imagens: </h4>
<i>docker-compose build</i>

<h4>2. Configurando o banco de dados:</h4>
<ul>
    <li>
      Subir container do banco de dados: <br>  
      <i>docker-compose up db-desafio</i>
    </li>
    <li>
      Entrar no container: <br>
      <i>docker exec -it db-desafio /bin/bash</i>  
    </li>
    <li>
       Logar no cli do mysql:<br>
       <i>mysql -uroot -p</i>,
      em seguida será solicitado a senha do banco.<br>
    </li>
    <li>
      Conectado no banco de dados, rode o script abaixo para criar a tabela que será utilizada pela aplicação:<br>
      <i>CREATE TABLE people (id INT AUTO_INCREMENT, name VARCHAR(255) NOT NULL, PRIMARY KEY(id));</i>
    </li>
</ul>

<h4>3. Rodando o projeto:</h4>
<i>docker-compose up</i> 
  
<h4>4. Testando a aplicação:</h4>
Para testar envie uma requisição POST com um atributo name, pode ser um nome fictício. O retorno esperado é uma mensagem "Full Cycle Rocks!" seguido de uma listagem dos nomes cadastrados no banco de dados.



