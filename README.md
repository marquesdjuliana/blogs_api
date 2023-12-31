
**Olá, olá!** Bem-vinda(o) ao repositório do projeto **Blogs API**.

Este é um projeto desenvolvido durante o módulo de Back-End, na **Trybe**. **Blogs API** é uma **API REST** e um banco de dados para a produção de conteúdo para um blog, seguindo as melhores práticas de desenvolvimento de software!

## Funcionalidades

O projeto **Blogs API** oferece as seguintes funcionalidades:

- Migrações de Tabelas: Criação das tabelas essenciais para o funcionamento do sistema, incluindo usuários, categorias e posts de blog.
- Autenticação de Usuários: Possibilidade de login seguro para os usuários, garantindo o acesso a recursos protegidos.
- Cadastro de Usuários: Registro de novos usuários com informações pessoais e opção de imagem de perfil.
- Listagem de Usuários: Visualização de todos os usuários cadastrados.
- Detalhes de Usuário por ID: Exibição das informações detalhadas de um usuário com base no seu ID.
- Criação de Categorias: Adição de novas categorias para organizar os posts de blog.
- Listagem de Categorias: Listagem de todas as categorias disponíveis.
- Criação de Posts de Blog: Publicação de novos posts de blog, associados a categorias específicas.
- Listagem de Posts de Blog: Visualização de todos os posts de blog com detalhes, incluindo o autor e as categorias associadas.
- Atualização de Posts de Blog: Possibilidade de editar títulos e conteúdos dos posts de blog existentes.

Essas funcionalidades tornam o projeto **Blogs API** uma solução completa para gerenciar blogs, permitindo aos usuários autenticados criar, editar e organizar conteúdo de forma eficiente.


## Habilidades Desenvolvidas

**Hard Skills** desenvolvidas:

- Node.js
- Sequelize
- Conceito de Migrations, Model, Seeders
- ORM - Interface da aplicação com o banco de dados
- ORM - Associations N:N e Transactions
- ORM - Associations 1:1 e 1:N

**Soft Skills** desenvolvidas:

Além das habilidades técnicas, este projeto também proporcionou o desenvolvimento de habilidades de soft skills, incluindo:

- Gerenciamento de Tempo: foi necessário definir prioridades e cumprir prazos no projeto.

## Instalação
Se deseja experimentar o projeto em sua máquina local, siga estas etapas:

1. Clone o repositório:
```sh
git clone git@github.com:marquesdjuliana/blogs_api.git
```
2. Entre na pasta do repositório:
```sh
cd blogs_api 
```
3. Agora que está na raiz do projeto execute o seguinte comando para iniciar os serviços do Docker e, em seguida, para instalar as dependências com o npm i:
```sh
docker-compose up -d --build && docker exec -it blogs_api npm i
```
4. A partir daqui você pode rodar o container blogs_api via CLI ou abri-lo no VS Code.
Rode o comando para criar o banco de dados, as tabelas que serão utilizadas e populá-las:
```sh
npm run db:reset
```
   
Sinta-se à vontade para explorar este projeto, acompanhar meu crescimento e contribuir, se desejar. Se você tiver alguma sugestão, feedback ou quiser trocar conhecimentos, será um prazer conectar com você no LinkedIn!

