<h1 align="center">Valoriza</h1>

![SCREENS](./screens/capa.png)

# 💻 Project
<p>Valoriza é uma plataforma para promover o reconhecimento entre companheiros de equipe</p>

##  ✨ Technologies used
  - [Node](https://nodejs.org)
  - [Typescript](https://www.typescriptlang.org)
  - [Express](https://expressjs.com)
  - [Typeorm](https://typeorm.io)
  - [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)

# 🚀 How to run
## Install dependencies
  yarn install

## create the tables in the database
  yarn typeorm migration:run

## Run the app
  yarn dev

### Request

<p>Create a new user</p>

```bash
POST /users
```

<p>Login</p>

```bash
POST /login
```

#### Authenticated Routes
<p>List users</p>

```bash
GET /users
```

<p>Create and list tags</p>

```bash
POST /tags
```

```bash
GET /tags
```

<p>Create compliments and list compliments</p>

```bash
POST /compliments
```

```bash
GET /compliments/users/compliments/receiver
```

```bash
GET /compliments/users/compliments/send
```

## 📄 Licença

This project is under the MIT license. See the file [LICENSE](LICENSE.md) for more details
