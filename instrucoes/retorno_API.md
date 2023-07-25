EXCLUIU TODAS AS TABELAS <br><br>
ok inclui 1 PRODUTOS
<br><br>
ok alterou 1 PRODUTOS
<br><br>
ok inclui 1 ESTOQUES PARA O PRODUTO 1
<br><br>
ok alterou 1 ESTOQUES
<br><br>
ok inclui 1 VENDAS EM 12/08/2020 PARA O CODIGO 1 QUANTIDADE 10 VALOR UNITARIO 25
<br><br>
##### Dados do produto:
[{"id":"1","descricao":"TESTE PRODUTO ALTERADO","preco":"222"}] 
<br><br>
##### Dados do Estoque:
{"id":"1","estoque":"1100"}
<br><br>
##### Dados da venda de um produto:
[{"id":"1","descricao":"TESTE PRODUTO ALTERADO","preco":"25", "quantidade":10,"cpf":"171.47.128-09"}]


<h1>EXEMPLOS DAS CHAMADAS</h1>
<br><br>
<br>https://owa.arcossp.com.br/arcos_novo/ws.coviduana?pacao=incluir-produto&pcodigo=1&pdescricao=TESTEPRODUTO&ppreco=12,34
<br>https://owa.arcossp.com.br/arcos_novo/ws.coviduana?pacao=alterar-produto&pcodigo=1&pdescricao=TESTEPRODUTOALTERADO&ppreco=222
<br>https://owa.arcossp.com.br/arcos_novo/ws.coviduana?pacao=incluir-estoque&pcodigo=1&pquantidade=1000
<br>https://owa.arcossp.com.br/arcos_novo/ws.coviduana?pacao=alterar-estoque&pcodigo=1&pquantidade=1100&ppreco=12,34
<br>https://owa.arcossp.com.br/arcos_novo/ws.coviduana?pacao=incluir-venda&pdata=12/08/2020&pcodigo=1&pquantidade=10&ppreco=25,pcpf=171.47.128-09
<br>https://owa.arcossp.com.br/arcos_novo/ws.coviduana?pacao=listar-produtos
<br>https://owa.arcossp.com.br/arcos_novo/ws.coviduana?pacao=ler-estoque&pcodigo=1
<br>https://owa.arcossp.com.br/arcos_novo/ws.coviduana?pacao=listar-vendas&pdata=12/08/2020
<br>https://owa.arcossp.com.br/arcos_novo/ws.coviduana?pacao=excluir-venda&pdata=12/08/2020&pcodigo=1
<br>https://owa.arcossp.com.br/arcos_novo/ws.coviduana?pacao=excluir-estoque&pcodigo=1
<br>https://owa.arcossp.com.br/arcos_novo/ws.coviduana?pacao=excluir-produto&pcodigo=1
