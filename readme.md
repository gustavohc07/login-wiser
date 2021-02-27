#Projeto Login Wiser

Desafio frontend utilizando React, Nextjs, TDD e arquitetura limpa.

O funcionamento é bem simples. O usuário deve ser capaz de entrar na página de login, digitar um email e senha
válidos e ser notificado de que o login foi realizado com sucesso.

Deve-se ficar atento a responsividade, possuindo layouts diferentes para desktop, tablets e mobile.

## Tecnologias Utilizadas

- Typescript;
- React;
- NextJS;
- Jest;
- Husky;
- Linter;
- Hooks;
- Styled Components;
- Axios;
- Conventional Commits

## Como rodar o Projeto?

Para rodar o projeto, basta rodar o comanda `npm run dev` a acessar localhost:3000.

Pode-se [clicar aqui](https://wiser-login-page.herokuapp.com/) para acessar o site com o deploy realizado no heroku.

Para rodar os testes, pode-se executar os seguintes comandos:

- `npm run test`

- `npm run test:ci` - Mostra o Coverage do projeto

## Outras informações

Foi utilizado o [mockapi.io](https://mockapi.io/projects) para mockar a requisição de autenticação. Vale ressaltar que qualquer email e senha, desde 
que validados, irão disparar que o login foi efetuado.

Foi respeitado os layouts estipulados de responsividade, atendendo mobile, tablet e desktop.

Ao clicar no botão de login e realizar a autenticação, é salvo, também, em localStorage o token de acesso do usuário para permissão de acesso dentro da futura plataforma.