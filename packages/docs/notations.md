**Frontend**
- install next in /apps > npx create-next-app@latest frontend
- layout.tsx > trocar a fonte e configs de idioma
- work on Logo component
- interface de convidado e evento
- arquivos index.ts para importar os arquivos de @core no futuro mais facilmente
- componentes Id, Alias, Senha, Data e index para exportar
- rotas (dev) e (paginas)
- iremos adotar a separacao entre components(jsx) e hooks(estado, funcoes)
- biblioteca para QRCode(https://www.npmjs.com/package/react-qr-code)

**Backend**
- install nest in /apps > npm i -g @nestjs/cli
- create new project > nest new backend
- install prisma orm > npm install prisma --save-dev
- install bd prisma > npx prisma init --datasource-provider sqlite
- create migration prisma > npx prisma migrate dev
- reset migration prisma > npx prisma migrate reset
- help nest > nest --help

**Config de inicializacao para rodar o dois ambientes do projeto**
- inicializar o projeto na pasta raiz eventos > npm init -y
- instalar a biblioteca npm run all > npm i npm-run-all
- configurar o package json principal 
  ```
  "scripts": {
		"dev": "run-p packages:* apps:*",
		"apps:frontend": "cd apps/frontend && npm run dev",
		"apps:backend": "cd apps/backend && npm run dev",
    "packages:core": "cd packages/core && npm run dev"
	},
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
  ```

**Configurando a pasta core**
- iniciar um projeto node em packages/core > npm init -y
- instalar tsup > npm i -D tsup (compila o typescript para js)
- em seguida npm i uuid e npm i -D @types/uuid
- configurar o package json
  ```
  "scripts": {
    "dev": "tsup src/index.ts --dts --watch",
    "build": "tsup src/index.ts --dts --minify"
  },
  ```

**melhorias**
- salvar um token de validacao para o evento, para confirmar que o convidado foi realmente convidado antes de se cadastrar no evento.
