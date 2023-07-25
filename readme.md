# Sistema PDV do teste que foi passado

Sistema criado com base no desafio passado e as regras informadas, ainda em desenvolvimento devido a pouca disponibilizade de horário que tenho, mas que já pode ajudar bastante para ser finalizado as demais funcionálidades, que a aplicação foi desenvolvida promeiramente utilizando o asyncStorageLocal para teste e depois sendo convertido para a API. Espero que goste da aplicação. 

## Tech Utilizadas:

### Frontend

React/Next.js => Utilizado para o desenvolvimento da interface com agilidade e garantir a performance já que o next armazena os dados em cache, isso deixa a página mais fluida e com uma ótima experiência de usuário. Vale resaltar a facilidade de reutilização do código, onde podemos fragmentar em um arquivo separado e reeutilizar o memso código em vários lugares da aplicação.

Typescript => Utilizado para tipar os dados e garantir uma segurança nos dados passados e previnir futuros erros na produção, com typescript eu consigo realizar essa verificação no ambiente de desenvolvimento previnir futuros erros.

Axios => Utilizado para realizar as requisições HTTP GET, POST, DELETE e PUT.

Zod => Utilizado para a validação dos dados atravéz do sistemas de Schemas.

Chacra Ui => Biblioteca de estilização baseada em components e interface declarativa, já que o Chacra Ui vez com components prontos, ajuda a reduzir o tempo de desenvolvimento e garantir a mesma qualidade que uma aplicação onde teria que ser criado um component manualmente, principalemente em casos quando se tem pouco tempo para desenvolvimento e disponibilidade de horário.

EsLint => serve para ajudar a padronizar nosso código, e ao sair desse padrão ele aponta erros para serem corrigidos, deixando assim o nosso código de uma forma mais simples de trablhar em equipes.

---

### Backend

Node.js => Foi utilizado o Node.js para desenvolver as rotas e o nosso server.

Fastify => Assim como o React/Next.js o Fastify foi utilizado para facilitar a manipulação de informações no backend facilitando o desenvolvimento e agilizando os processo.

Axios => Utilizado para realizar as requisições HTTP GET, POST, DELETE e PUT.

Zod => Utilizado para a validação dos dados atravéz do sistemas de Schemas.



## O que é preciso para fazer o projeto funcionar?

[ ] Ter a versão mais recente do Node.js versão LTS de preferência. SITE: https://nodejs.org/en

[ ] Ter o NPM instalado no sistema.(Ao instalar o node já é instalado automaticamente)

[ ] Uma IDE que tenha terminar integrado para executar o servidor frontend e backend.

[ ] Ter um Brower ou IDE de teste de API de sua prefência para executar a aplicação. 

## Como utilizar: 

Após baixar o projeto abra o terminal e execute:

```
npm install
```
Esse comando irá baixar as dependências do projeto. Após executar o comando de depêndencias acesse as pastas e rode os seguintes comando:
<br>
<br>
<br>

para acessar as pastas:
```
cd <caminho da pasta>
```
Para rodas o Frontend:
```
npm run dev
```
Para Rodar o Backend:
```
npm run dev
```

lembrando que para cada ambiente que você iniciar o servidor deverar ter um terminal aberto, ou seja, vai precisar de um terminal para o front end e um terminal para o backend.

Após iniciar os servidores de desenvolvimento acesse as rotas de do frontend e o backend no seu browser ou IDE de testes de API como por exemplo o insôminia.

*Front-end:* 
<br>
http://localhost:3000
<br>
<br>
*Back-end:* 
<br>
http://localhost:3333/product<br>
http://localhost:3333/sales<br>
http://localhost:3333/stock<br><br><br>

## Modo de uso

No Frontend haverá uma página para cadastrar novos produtos no sistema, outra para dar entrada na quantidade de produtos, uma para dar saída na quantidade de produtos e outra para ver o relatório desses protudos.

Atualmente a página de adicionar novas vendas e relatório de vendas ainda não foram desenvolvidas, mas em breve desejo acrescentar.
-
No Backend você pode testar as rotas com as URLs bases

### Rota dos produtos:

Listar produtos: http://localhost:3333/product<br>
Listar produto pelo id: http://localhost:3333/product/:id<br>
Criar novo produto: http://localhost:3333/product/post<br>
Atualizar um produto: http://localhost:3333/product/:id<br>
Deletar um produto: http://localhost:3333/product/:id

### Rota do estoque:

Listar estoque: http://localhost:3333/product<br>
Listar estoque pelo id: http://localhost:3333/product/:id<br>
Criar novo estoque: http://localhost:3333/product/post<br>
Atualizar um estoque: http://localhost:3333/product/:id<br>
Deletar um estoque: http://localhost:3333/product/:id

### Rota das vendas:

Listar vendas: http://localhost:3333/product<br>
Listar venda pelo id: http://localhost:3333/product/:id<br>
Criar nova venda: http://localhost:3333/product/post<br>
Atualizar uma venda: http://localhost:3333/product/:id<br>
Deletar uma venda: http://localhost:3333/product/:id

cadas uma dessas rotas foram criadas com base no retorno da API com a pacao=teste e cada metodo recebe seu sua pacao corespondente.

## Dicas de imprementações futuras:

[ ] Adicionar um middleware.

[ ] Adicionar um Usuário e Autenticação.

[ ] Adicionar JTW para armagenar informações e melhorar a experiência de usuário.

[ ] Utilizar o Prisma para a criação do banco de dados, facilitando no desenvolvimento de uma aplicação backend que terá mais fácilidade de se conectar com qualquer tipo de banco de dados seja ele, SQl, MySql, PostgreSql e outros.

[ ] Transformar a aplicação em PWA facilitando a instalação de uma aplicação WEB ser instalado no dispositivo do usuário, dando uma experiência mais fluída e imersiva como se estivesse com  um aplicativo nativo so dispositivo.
