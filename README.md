# 🎬 MovieMatch

MovieMatch é um aplicativo inovador que recomenda filmes personalizados de acordo com os estilos que você curte. O backend é construído com Django, utilizando autenticação segura com JWT, e o frontend é desenvolvido em React com TypeScript e estilizado com Tailwind CSS para uma experiência moderna e responsiva.

---

## 🚀 Funcionalidades

- 🔐 Cadastro e login com autenticação JWT segura  
- 🎨 Interface dinâmica e responsiva com React, TypeScript e Tailwind CSS  
- 🎯 Recomendações inteligentes baseadas nos estilos de filmes curtidos  
- 🔄 Comunicação eficiente entre frontend e backend via APIs REST protegidas  
- 👤 Perfis personalizados e histórico de preferências

---

## 🛠 Tecnologias Utilizadas

**Backend:**  
- Django  
- Django REST Framework  
- Django REST Framework JWT (JWT para autenticação)  
- Banco de dados relacional (PostgreSQL, SQLite etc.)

**Frontend:**  
- React  
- TypeScript  
- Tailwind CSS  
- Axios ou fetch para consumo da API

---

## ⚙️ Instalação & Setup

### Requisitos

- Python 3.8+  
- Node.js 14+  
- npm ou yarn

### Backend

1. Clone o repositório  
2. Acesse a pasta do backend  
3. Crie e ative ambiente virtual:

    ```bash
    python -m venv env
    source env/bin/activate  # Linux/Mac
    env\Scripts\activate     # Windows
    ```

4. Instale dependências:

    ```bash
    pip install -r requirements.txt
    ```

5. Configure variáveis de ambiente para JWT e banco de dados  
6. Execute as migrações:

    ```bash
    python manage.py migrate
    ```

7. Inicie o servidor Django:

    ```bash
    python manage.py runserver
    ```

### Frontend

1. Acesse a pasta do frontend  
2. Instale as dependências:

    ```bash
    npm install
    # ou
    yarn install
    ```

3. Inicie o servidor de desenvolvimento React:

    ```bash
    npm start
    # ou
    yarn start
    ```

---

## 📖 Uso

- Acesse a aplicação pelo navegador (normalmente em `http://localhost:3000`)  
- Cadastre-se ou faça login  
- Curta filmes e receba recomendações baseadas em seus gostos  
- Descubra e explore novos títulos

---

## 🔒 Segurança

- Autenticação via tokens JWT garantem acesso seguro às APIs  
- Frontend armazena e envia tokens com segurança nas requisições  
- Backend valida tokens e gerencia permissões com Django REST Framework

---

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, abra issues para bugs ou melhorias e envie pull requests.

---

## 📄 Licença

Projeto licenciado sob MIT License. Veja o arquivo LICENSE para mais detalhes.

---

Obrigado por usar MovieMatch! Aproveite e descubra filmes incríveis alinhados ao seu gosto. 🎥✨
