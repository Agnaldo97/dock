# Dock

> Esse projeto tem como finalidade criar registros de novas contas, transações e pessoas!

## O que foi feito:

Foi criado apenas uma rota, como não há necessidade de login ou algo do tipoo, não foi utilizado tokens. Porém da forma a qual foi arquitetado o projeto, seria facilmente implementado.

O fluxo básico da aplicação é o seguinte:
Criar Pessoa > Criar Conta > Criar Transação

## Validações 

Foram criadas validações para diferentes cenários:
1 - Não é possível fazer transações com uma conta bloqueda
2 - Não é possível sacar um valor maior do que o saldo em conta
3 - Sempre a válidado se o número da conta informada é existente ou não
4 - O valor de um transação não pode ser maior que o saldo em conta
5 - Todo endpoint tem um validator 

## Endpoints:

Foram criados 10 endpoonts:

* /api/account - POST
 - Cria uma nova conta

* /api/person - POST
 - Cria um registro de um nova pessoa

* /api/transaction - POST
 - Cria uma nova transação

* /api/account/balance/{idAccount} - GET
 - Consulta o valor em conta

* /api/status- GET
 - Verifica se a aplicação de está OK

* /api/transaction/{idAccount} - GET 
- Busca todas as transções de uma conta

* /api/transaction/{startDate}/{endDate} - GET
 - Busca todas as transções de um período espeficico

* /api/account/draft - PUT
 - Simula a ação de um saque de uma conta

* /api/account/deposit- PUT
 - Simula a ação de um deposito de uma conta

*  /api/account/active - PUT
 - Simula a ação de bloqueio ou desbloqueio de uma conta

## Exemplo Postman:

* Foi anexado uma collection no projeto para consulta dos endpoints e eventuais testes

## Inicializar e Testar:

1 - Faça um clone desse projeto em sua máquina
2 - Abra a pasta db e rode o seguinte comando: docker-compose -f postgre.yml  up
3 - Volte a raiz do projeto e digite npm i & npm start
4 - Importe a collection citada acima em seu postman, nela terá exemplos de todos os endpoints


## Possíveis dúvidas

Por quê não usou container em tudo?
Apenas quis mostrar que é simples usar o container, seria rápido criar o DockerFile da aplicação para integrar com o Jenkins, mas não foi minha abordagem.

Foi feito teste?
Sim, para rodá-los basta executar o seguinte comando: npm run test
Os testes não cobrem todos o cenários de erros, porém utilizei libs para tornar os teste mais "reais" possíveis.

Cadê o Script do banco?
Não é necessário, utilizei o ORM Sequelize e dou um sync nas tabelas assim que crio meu projeto.
Foi criado também um endpoint para criação de novas pessoas

Obs: Mas se houver necessidade, os scripts podem ser incluidos na pasta /db e executados na inicialização do container