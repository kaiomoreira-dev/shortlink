<p align="center">
  <a href="https://fastify.dev/" target="blank"><img src="https://media.licdn.com/dms/image/v2/D5612AQEUFADeYMSkBg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1689705931627?e=1735776000&v=beta&t=y2cJsJ-8EOmUhtHvQSOAJ685A7le0DJLKXvmUVBfbZk" width="400" alt="Nestjs Logo" /></a>
</p>

<h1 align="center"> Short Link API </h1>

## Description
* Aplicação para encurtar link 

## Features
* Implementar uma arquitetura de microsserviços: Separar o sistema em serviços independentes permite escalar componentes específicos conforme a necessidade, além de facilitar a manutenção e o desenvolvimento de novas funcionalidades sem afetar o sistema como um todo.

* Adotar uma camada de cache distribuído: Utilizar um cache distribuído para armazenar dados de acesso frequente, como links encurtados mais acessados, alivia a carga no banco de dados e melhora o tempo de resposta para os usuários.

* Incorporar filas para processamento assíncrono de cliques: Usar filas de mensagens para contabilizar cliques de forma assíncrona permite lidar com um volume alto de acessos sem impactar a performance do sistema principal, aumentando a capacidade de processamento.

## Node Version
* '>=v18 <=v22'

## Docker
* No diretório raiz, execute o Docker Compose para levantar todos os serviços:
  
```bash
$ docker compose up -d
```

## Dependecy Installation
```bash
$ cd user
$ npm install

$ cd shortlink
$ npm install
```

## Migrations
```bash
$ cd user
$ npx prisma migrate dev

$ cd shortlink
$ npx prisma migrate dev
```
## Running the app

```bash
# watch mode
$ cd user
$ npm run start:dev

$ cd user
# production mode
$ npm run start:prod

# watch mode
$ cd shortlink
$ npm run start:dev

$ cd shortlink
# production mode
$ npm run start:prod
```
## Test

```bash
# test units
$ cd user
$ npm run test

$ cd shortlink
$ npm run test
```

