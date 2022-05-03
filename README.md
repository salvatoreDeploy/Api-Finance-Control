## Projeto Api Finaças

# Requisitos Funcionais:

- Deve haver login e logout do usuário na plataforma
- O usuário deve poder criar uma conta que irá conter seus ganhos e gastos.
- Haverão 5 áreas de gastos: Entretenimento, Alimentação, Educação, Saúde e Transporte.
- Deve ser possível adicionar, remover, atualizar e listar os gastos e ganhos.
- O usuário deve conseguir ter uma visão geral da sua saúde financeira a qualquer momento. para isso, gere um extrato financeiro mostrando todos os gastos (seguindo as 5 áreas supracitadas), seus ganhos e o saldo de sua carteira.

## Como executar

1. Faça o clone do projeto na sua máquina `git@github.com:salvatoreDeploy/Api-finance-control.git`
2. Na raiz do projeto, execute o comando `yarn` para baixar as dependências;
3. Execute `docker-compose up` para rodar o Docker e ele fazer a instalação das imagens do DockerFile e o Docker-compose.yml para subir a aplicção em node e o database do postrgres, e assim ja startar o servidor e database da aplicação;
4. Execute `yarn typeorm migration:run` para rodar as migrations construir as tabelas dentro do banco de dados;
5. Execute `yarn seed:categories` para rodar a seed que vai inserir as categorias pré-estabelecidas;

# Rotas e serviços:

- [x] Cadastrar Usuario;
- [x] Autenticação do Usuario;
- [x] Criar Categorias de gastos;
- [x] CRUD para gastos;
- [x] CRUD para ganhos;
- [x] Extrato de todos os gastos, ganhos e saldo na carteira;
- [x] Extrato de gastos por tipo de gastos;
- [x] Extrato de todos os gastos;
- [x] Extrato de todos os ganhos;

## Mapeamento de trabalhos:

- [x] Infraestrutura com Docker;
- [x] Estrutura de init de projeto;
- [x] Estrutura do projeto;
- [x] Modelagem do banco e migrations;
- [x] Rota de Cadastro de Usuario, Controller, Model;
- [x] Rota de Autenticação do Usuario, Controller, Model;

- [x] Rota de Carteira do Usuario, Controller, Model;
- [x] Rota de Operaçoes gastos, Controller, Model;
- [x] Rota de Operaçoes ganhos, Controller, Model;
- [x] Rota de Extratos, Controller, Model;

- [x] Documentação

## Documentação Postman:

https://documenter.getpostman.com/view/14241427/UyrHftE6#intro
