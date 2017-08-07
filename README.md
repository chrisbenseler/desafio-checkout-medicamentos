# README

Backend
=======

- é uma aplicação simples NodeJS que provê uma API a ser usada pelo frontend
- fica na pasta ./backend
- deve rodar 'npm install' dentro dela para instalar as dependências
- para rodar o serviço, 'nodemon index.js'; o serviço irá pro ar em http://localhost:3001
- pode ainda, ser usado qualquer outro runner de node

Frontend
========

- é uma aplicação Angular 4
- fica na pasta ./frontend
- deve rodar 'npm install' dentro dela para instalar as dependências
- para rodar o serviço em tempo de desenvolvimento, 'ng serve'; o serviço irá pro ar em http://localhost:4200 (padrão do Angular CLI)
- para rodar o serviço em tempo de produção, é só servir o conteúdo da pasta frontend/dist embaixo de um webserver. Exemplo, usando um sistama unix, pode ser rodado (após navegar pela CLI para a pasta indicada) 'python -m SimpleHTTPServer 8000'. Um serviço de webserver do python subirá, na porta 8000, servindo o conteúdo dessa pasta. A sugestão do [SimpleHTTPServer](https://docs.python.org/2/library/simplehttpserver.html) do Python é devido à facilidade, mas pode ser usado qualquer outro webserver. Abrir o index.html de dentro da pasta e servir no browser com file:// não funcionará.

Observações: para facilitar a avaliação do projeto, não foram criadas chaves de configuração, como por exemplo a porta em que o serviço da API (backend) vai subir. Ainda nesse aspecto de facilidade, a pasta frontend/dist foi adicionada ao repositório, o que não é indicado (pois ela é regerada a cada processo de build do angular-cli). Aproveitando, dentro da pasta frontend/ foi mantido o README padrão de projetos Angular; ele possui um passo-a-passo bem detalhado, caso necessário.