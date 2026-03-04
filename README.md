# 📚 CursoinWeb

O **CursoInWeb** é uma plataforma web desenvolvida com foco social, cujo objetivo é democratizar o acesso ao aprendizado em programação para estudantes que não possuem condições financeiras de investir em cursos pagos ou graduação.

A aplicação permite que usuários se cadastrem, gerenciem seus dados e tenham acesso a conteúdos gratuitos voltados ao desenvolvimento de software.

---

<h2>🎯 Objetivo do Projeto</h2>
O projeto foi idealizado com a missão de

- Oferecer acesso gratuito ao aprendizado de programação
- Simular um ambiente real de autenticação e gerenciamento de usuários
- Aplicar conceitos práticos de desenvolvimento frontend com TypeScript
- Implementar operações CRUD completas
- Utilizar persistência de dados com json-server

---

<h2>🛠️ Tecnologias Utilizadas</h2>

- TypeScript
- HTML5
- CSS3
- json-server
- LocalStorage (armazenamento de sessão/autenticação)

---

<h2>⚙️ Arquitetura e Funcionamento</h2>
O sistema funciona da seguinte maneira:

1. O usuário realiza um cadastro.
2. Os dados são armazenados no json-server (simulando uma API REST).
3. Após autenticação, o usuário ativo é salvo no localStorage.
4. O localStorage é utilizado para:
    - Validar sessão ativa
    - Controlar acesso a páginas restritas
    - Manter o estado de login

---

<h2>🔄 Funcionalidades (CRUD Completo)</h2>
O projeto utiliza o json-server para simular um backend RESTful.

Estrutura básica da API:

- GET  alunos.ts/getAlunoByEmail → Listar usuários
- POST alunos.ts/cadastrar → Criar novo usuário
- PUT  alunos.ts/editar → Atualizar usuário
- DELETE  alunos.ts/excluir → Remover usuário

---

<h2>🧠 Conceitos Aplicados</h2>

- Programação Orientada a Objetos com TypeScript
- Manipulação do DOM
- Consumo de API REST
- Armazenamento local com LocalStorage
- Controle de sessão
- Separação de responsabilidades

<h2>👨‍💻 Autor</h2>

Desenvolvido por **Enrique**

Projeto criado na universidade SENAC com foco em aprendizado prático e impacto sucial através da tecnologia 
