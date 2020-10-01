<h1 align="center" >
  <img src="https://ik.imagekit.io/ik54mxkwpj/logoAuthNotify_6zwto07QZ.png" />
</h1>

## 📋 Sobre

O projeto **AuthNotify** é uma aplicação para controle de sessão do usuário com Login de e-mail e senha. Ele também conta com a implementação de envio de e-mail, dando uma breve messagem de Bem-Vindo ao sistema e também notifica dentro do sistema quando o usuário faz sua primeira sessão!!

[**Link para o Frontend:**](https://github.com/CarlosAugusto2128/authenticated-notify-frontend)

---

## 💡 Tecnologias Utilizadas

O backend do projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Node.JS](https://nodejs.org/en/)
- [Bee Queue](https://github.com/bee-queue/bee-queue)
- [Nodemailer](https://nodemailer.com/about/)
- [Sucrase](https://github.com/alangpierce/sucrase)
- [Nodemon](https://nodemon.io/)

### 🗃 **Database**:

- [Docker](https://www.docker.com/)
- [Sequelize](https://sequelize.org/)
- [Postgres](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [Mongo](https://www.mongodb.com/)

---

## ⚙ Como configurar a Database

```bash
  $ docker run --name [nomedocontainer] -e POSTGRES_PASSWORD=[senha] -p 5432:[5432 ou porta livre] -d postgres

  $ docker run --name [nomedocontainer] -p 27017:[27017 ou porta livre] -d -t mongo

   $ docker run --name [nomedocontainer] -p 6379:[6379 ou porta livre] -d -t redis:alpine

```

### Inicializando os containers do Docker:

```bash
  $ docker start [nomedocontainer]
```

---

## 📦 Como baixar o projeto

```bash

  # Clonar o repositório
  $ git clone https://github.com/CarlosAugusto2128/authenticated-notify-backend

  # Entrar no diretório
  $ cd authenticated-notify-backend

  # Instalar as dependências
  $ yarn install

  # Iniciar o backend
  $ yarn dev

  #Iniciar o Queue
  $ yarn queue
```

---

Desenvolvido 😎 por Carlos Augusto Silva Santos
