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

**aws**
- criar chave de segurança para acesso via SSH
- criar nova instancia EC2
- conectar instancia via SSH
  -acessar pasta local aws e executar
  - sudo ssh -i "convite-digital-backend.pem" ec2-user@ec2-15-228-79-232.sa-east-1.compute.amazonaws.com
- update ec2 > sudo yum update
- install git > sudo install git
- install node > sudo yum nodejs
- gerar chave ssh para a instancia ec2 acessar o github
  - acessar past > cd .ssh/
  - ssh-keygen -t ed25519 -C "seuemail@email.com"
- acessar o arquivo config do ec2 
  - colar a config abaixo e salvar
  ```
  Host github.com
   IgnoreUnknown UseKeychan
   AddKeysToAgent yes
   UseKeychan yes
   IdentifyFile ~/.ssh/git
  ```
- acessar o github e criar um chave ssh do github
  - repositorio > settings > deploy keys > add deploy keys 
- clonar o repositorio na maquina via ssh

- criar banco de dados usando amazon RDS
- banco postgres, simples, gratuito, conectar com estancia ec2 exitente
- em banco de dados, copiar endpoint
- acessar instancia ec2 via terminal, instalar dependencias > npm i
- preparar string de conexao com o banco, usando endpoint fornecido pela aws e uma senha forte gerada em qualquer gerador de senha.
  - arquivo .env do backend
  - DATABASE_URL=postgresql://postgres:PASSWORD@HOST:5432/convite-digital?schema=public
- na instancia ec2 acessar, 
  - apps/backend
    - criar arquivo .env e colar a string de conexao do bd(nano)
    - acessar a pasta prisma e o arquivo schema.prisma(nano)
      - mudar o valor de datasource db > provider > 'postgres'
    - na pasta apps/backend/prisma, apagar o arquivo de migrations > rm -rf migrations
    - rodar as migrations > npx prisma migrations dev
- na pasta principal eventos > rodar npm run dev pra builder o projeto
- voltar em apps/backend e rodar npx prisma db seed
 
**pm2**
- install > npm install pm2@latest -g
- sudo su > apps/backend
  - pm2 start dist/src/main.js --name backend
- mais infos no site do pm2

**aws-certificado**
- dominio comprado no godaddy
- AWS certificate manager(ACM)
- solicitar > digitar dominio > solicitar
- copiar Nome CNAME e Valor CNAME 
- colar na GoDaddy

**aws-load-balancer**
- Grupo de destino
  - novo > instancias
  - nome > destino-backend-convite-digital
  - protocolo HTTP
  - porta 4000
  - verificação de indentidade > /ping
  - incluir
- Load Balancer
  - nome > lb-convite-digital
  - application load balancer
  - zona disponibilidade > selecionar as 3
  - grupo seguranca padrao
  - protocolo HTTPS > 443
  - selecionjar grupo de destino criado anteriormente
  - do ACM > selecionar
  - acompanhar no menu mapa de recurso


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
