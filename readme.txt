📋 Pré-requisitos
Antes de começar, certifique-se de ter instalado:

Node.js (versão recomendada LTS)
Visual Studio Code (VS Code)
Git (opcional, mas recomendado)
📂 Estrutura do Projeto
lua
Copiar
Editar
/projeto
│-- /src
│   ├── app.js
│-- server.js
│-- package.json
│-- package-lock.json (gerado automaticamente)
🚀 Como rodar o projeto
1️⃣ Clonar o repositório (opcional)
Se você estiver usando Git, pode clonar este repositório com:

sh
Copiar
Editar
git clone https://github.com/AlainDiego/Arquitetura-de-Software
cd seu-repositorio
Caso contrário, copie os arquivos manualmente para uma pasta.

2️⃣ Instalar as dependências
No terminal do VS Code, dentro da pasta do projeto, execute:

sh
Copiar
Editar
npm install
Isso instalará todas as bibliotecas necessárias (como o Express).

3️⃣ Iniciar o servidor
Execute o seguinte comando:

sh
Copiar
Editar
node server.js
Ou, se quiser usar Nodemon (para reiniciar automaticamente em cada alteração):

sh
Copiar
Editar
npx nodemon server.js
Se tudo estiver certo, verá a mensagem:

nginx
Copiar
Editar
Servidor na escuta!
📌 Rotas Disponíveis
Método	Rota	Descrição
GET	/	Página inicial da API
GET	/posts	Retorna todos os posts
GET	/posts/:id	Retorna um post específico por ID
POST	/posts	Cria um novo post
PUT	/posts/:id	Atualiza um post por ID
DELETE	/posts/:id	Deleta um post por ID
🛠 Tecnologias Utilizadas
Node.js
Express.js
Nodemon (opcional para desenvolvimento)