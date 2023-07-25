Faça um sistema para um camelô empreendedor
Ele vende máscaras de COVID e muambas do Paraguai.

O nome do seu cliente é Coviduana.

O sistema precisará de cadastros básicos e de 2 relatórios apenas.
Tudo vai funcionar on-line, ou seja, não precisa se preocupar em salvar localmente off-line
Sistema será web
Salve e leia os dados submetendo um post ajax para o endereço abaixo. É uma API simples que criei somente para esse teste.
https://owa.arcossp.com.br/arcos_novo/ws.coviduana com os seguintes parâmetros:

pacao       
pcodigo     
pdescricao  
ppreco      
pquantidade 
pdata       
pcpf        

Sendo que:
pacao recebe os seguintes comandos:
incluir-produto
incluir-estoque
incluir-venda

excluir-produto
excluir-estoque
excluir-venda

alterar-produto
alterar-estoque

ler-produto
ler-estoque

listar-produtos
listar-vendas


CRUD DE PRODUTOS recebe o pacao correspondente e os campos:
pcodigo
pdescricao
ppreco

CRUD DE ESTOQUES recebe o pacao correspondente e os campos:
pcodigo
pquantidade

CRUD DE VENDAS recebe o pacao correspondente e os campos:
pcodigo
pdata
pquantidade
pcpf

PARA RECEBER A LISTA DE PRODUTOS CADASTRADOS
chame com pacao=listar-produtos

PARA RECEBER A LISTA DE VENDAS CADASTRADAS
chame com pacao=listar-vendas e passe o parâmetro pdata

PARA RECEBER A DESCRIÇÃO E O PREÇO DE PRODUTOS
chame com ler-produto e passe o parametro pcodigo

PARA RECEBER A QUANTIDADE EM ESTOQUE DE UM PRODUTO
chame com ler-estoque e passe o parametro pcodigo

Observações:
Sempre chame através de uma requisição ajax
Pegue o retorno da chamada para dar continuidade, portanto essa chamada deve ser síncrona
Alguns retornos são JSON
Para testar todos os retornos chame assim:
https://owa.arcossp.com.br/arcos_novo/ws.coviduana?pacao=teste
ATENÇÃO: ESSA CHAMADA EXCLUI TODAS AS TABELAS QUE VOCÊ POSSA TER INCLUÍDO, PORTANTO PODE USAR ESSA CHAMADA SE QUISER REINICIAR O SEU BD
DICA: Comece chamando essa url pra ver o que te mostra!

Não existe nenhuma consistência na API e todos os dados são varchar2
Faça as consistências antes de submeter o formulário
No banco de dados só existe Primary Key para PRODUTOS e ESTOQUES, faça as consistências do lado do cliente mesmo
Cadastros foram limitados a 100 registros por tabela porque esse cliente não pagou a licença premium 😝 rsrs


Nosso cliente precisa das seguintes funções, portanto desenhe as telas para elas:

1)	Cadastro de produtos
a.	Atributos
i.	Código
ii.	Descrição
iii.Preço

2)	Cadastro de Estoque
a.	Atributos
i.	Código do Produto
ii.	Quantidade

3)	Cadastro de Vendas
a.	Atributos
i.	Data
ii.	Código do Produto
iii.	Quantidade
iv.	Preço Unitário
v.	CPF (opcional)

4)	Relatório de Produtos cadastrados
a.	Lay-Out
i.	Código
ii.	Descrição
iii.Quantidade em Estoque

5)	Relatório de Vendas
a.	Filtro de Data
b.	Lay-Out
i.	Código
ii.	Descrição
iii.Quantidade Vendida




Junto com o código é necessário entregar uma documentação que contenha os itens abaixo:
- Como usar os serviços
- Quais ferramentas foram usadas (e porque essas foram as escolhidas)
- Qualquer infraestrutura adicional necessária para executar, testar, empacotar e entregar seu projeto

Pode pesquisar à vontade na internet, mas tente fazer sozinho.
Dúvidas sobre o documento pode me mandar um e-mail.
Você tem uma semana para me entregar o código e a documentação no github

Boa sorte

