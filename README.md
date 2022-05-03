## Projeto Api Finaças

Em geral, ter uma boa visão dos seus ganhos e gastos é um ótimo "Primeiro Passo" para alcançar uma melhor saúde financeira. Dessa forma, você deverá desenvolver uma API de controle financeiro, para auxiliar aqueles que desejam melhorar o relacionamento com o seu "bolso".

# Requisitos Funcionais:

- Deve haver login e logout do usuário na plataforma
- O usuário deve poder criar uma conta que irá conter seus ganhos e gastos.
- Haverão 5 áreas de gastos: Entretenimento, Alimentação, Educação, Saúde e Transporte.
- Deve ser possível adicionar, remover, atualizar e listar os gastos e ganhos.
- O usuário deve conseguir ter uma visão geral da sua saúde financeira a qualquer momento. para isso, gere um extrato financeiro mostrando todos os gastos (seguindo as 5 áreas supracitadas), seus ganhos e o saldo de sua carteira.

## Como executar

1. Faça o clone do projeto na sua máquina `git@github.com:salvatoreDeploy/Api-finance-control.git`
2. Na raiz do projeto, execute o comando `yarn` para baixar as dependências;
3. Execute `docker-compose up` para rodar o Docker e ele fazer a instalação das imagens do DockerFile e o Docker-compose para subir a aplicação em node e o database do postrgres, e assim ja startar o servidor e database da aplicação;
4. Execute `yarn typeorm migration:run` para rodar as migrations construir as tabelas dentro do banco de dados;
5. Execute `yarn seed:categories` para rodar a seed que vai inserir as categorias pré-estabelecidas;

# Rotas da Aplicação:

# User:

- **`POST /users`**: Criação do Usuario.
- **`POST /login`**: Login do Usuario.

# Invoice:
- **`POST /invoice/receita`**: Lançamento de uma nova receita passando os parametros `user_id, categorie_id, descriptio, type, value`, atraves do `body`da `request`.
- **`POST /invoice/despesa`**: Lançamento de uma nova despesa passando os parametros `user_id, categorie_id, descriptio, type, value`, atraves do `body`da `request`.
- **`GET /invoice/list/invoiceexpense/:user_id`**: Listagem de trasações do tipo Expense por usuario, passando o id do usuario como parametro na rota.
- **`GET /invoice/list/invoiceincome/:user_id`**: Listagem de trasações do tipo Income por usuario, passando o id do usuario como parametro na rota.
- **`GET /invoice/list/invoiceall/:user_id`**: Listagem de todas as trasações por usuario, passando o id do usuario como parametro na rota.
- **`GET /invoice/list/balanceinvoice/:user_id`**: Extrato de todas as trasações e Balanço geral por usuario, passando o id do usuario como parametro na rota.
- **`PUT /invoice/update/receita/:id`**: Alteração no lançamento de recita passando os parametros `description`, `type`, `value` pelo `body` da `request`, e o `id` da receita em questão no corpo do url.
- **`PUT /invoice/update/despesa/:id`**: Alteração no lançamento da despesa passando os parametros `description`, `type`, `value` pelo `body` da `request`, e o `id` da despesa em questão no corpo do url.
- **`DELETE /invoice/update/receita/:id`**: Deleção de uma receita, passando o id da mesma no corpo da url.
- **`DELETE /invoice/update/despesa/:id`**: Deleção de uma despesa, passando o id da mesma no corpo da url.

## Documentação Postman:

https://documenter.getpostman.com/view/14241427/UyrHftE6#intro
