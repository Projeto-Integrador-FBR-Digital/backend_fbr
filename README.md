
# FBR Digital - Cadastro de Provedores
Descrição
O Cadastro de Provedores da FBR Digital é uma aplicação que visa facilitar o cadastro e homologação de provedores de internet na base da FBR Digital. A plataforma permite o registro detalhado dos provedores, incluindo informações de infraestrutura, área de cobertura e serviços oferecidos, proporcionando maior visibilidade para a geração de novas demandas de serviços.

## Objetivo
O objetivo principal é garantir que os provedores de internet tenham seus cadastros completos, permitindo a homologação e visualização de demandas de serviços de acordo com a área de cobertura cadastrada.

## Funcionalidades Principais
- Cadastro de Provedores: Registro de informações corporativas como CNPJ, Nome Fantasia, Endereço e Contatos.
- Cadastro de Áreas de Cobertura: Definição das áreas onde o provedor opera, com a possibilidade de upload via CSV ou KMZ.
- Cadastro de Infraestrutura: Detalhamento da infraestrutura, incluindo ASN, participação em PTTs e operadoras de backbone.
- Cadastro de Serviços: Registro dos planos oferecidos, velocidade de conexão, SLA e preços.
- Sistema de Ranking: Ranking dos serviços baseado na razão preço/velocidade.
- Apresentação de Demandas: Exibição de demandas recebidas através de um painel que permite envio de propostas.

## Tecnologias Utilizadas
- Backend: NestJS
- Banco de Dados: MySQL
- ORM: TypeORM
- Linguagem: TypeScript
- Banco de dados em desenvolvimento: Docker com MySQL

## Instalação e Configuração
- Pré-requisitos
- Node.js (>= 14.x)
- Docker
- Docker Compose
- MySQL

## Passos para rodar o projeto localmente
#### Clone o repositório:

    git clone https://github.com/seu-usuario/fbr-digital-provedores.git
#### Acesse o diretório do projeto:

    cd fbr-digital-provedores
#### Instale as dependências:

    npm install
#### Configure as variáveis de ambiente no arquivo .env:

    DB_HOST=localhost
    DB_PORT=3306
    DB_USERNAME=root
    DB_PASSWORD=sua_senha
    DB_DATABASE=fbr_digital
#### Suba o container do MySQL com Docker Compose:

    docker-compose up -d
#### Rode as migrations para criar as tabelas no banco de dados:

    npm run typeorm migration:run
#### Inicie o servidor de desenvolvimento:

    npm run start:dev
#### O projeto estará rodando em:
    http://localhost:4000.

## Endpoints
### Provedores
- GET /provedores: Retorna todos os provedores cadastrados.
- POST /provedores: Cadastra um novo provedor.
- GET /provedores/:id: Retorna detalhes de um provedor específico.
- PUT /provedores/:id: Atualiza as informações de um provedor.
- DELETE /provedores/:id: Remove um provedor.
### Áreas de Cobertura
- GET /areas-cobertura: Retorna todas as áreas de cobertura cadastradas.
- POST /areas-cobertura: Cadastra uma nova área de cobertura.
### Infraestrutura
- GET /infraestrutura: Retorna a infraestrutura de um provedor.
- POST /infraestrutura: Cadastra informações de infraestrutura de um provedor.
### Serviços
- GET /servicos: Retorna todos os serviços cadastrados.
- POST /servicos: Cadastra um novo serviço.
- GET /servicos/:id: Retorna detalhes de um serviço específico.
- PUT /servicos/:id: Atualiza as informações de um serviço.
- DELETE /servicos/:id: Remove um serviço.
## Sistema de Ranking

Os serviços são automaticamente ranqueados com base na razão entre velocidade/preço. A lógica de cálculo do ranking é a seguinte:


    ranking = velocidade / preco
Serviços com maior velocidade e menor preço terão um ranking mais alto.

## Contribuição
- Faça um fork do projeto.
- Crie uma branch para sua nova funcionalidade (git checkout -b feature/nova-funcionalidade).
- Faça commit das suas alterações (git commit -m 'Adiciona nova funcionalidade').
- Envie para o repositório remoto (git push origin feature/nova-funcionalidade).
- Crie um pull request.
## Licença
Este projeto é licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Contato
Para maiores informações ou sugestões, entre em contato:

* Equipe: projetofbr@gmail.com
