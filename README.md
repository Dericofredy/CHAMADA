# Sistema de Chamada - TTC

Este projeto é um sistema simples de gerenciamento de presença e ausência de funcionários, organizados por seções. Ele permite registrar o status de cada funcionário (presente, ausente ou demitido) e, no caso de ausência, selecionar um motivo. O sistema também gera um relatório em HTML que pode ser impresso.

🔗 **Link do Projeto:** [https://dericofredy.github.io/CHAMADA/](https://dericofredy.github.io/CHAMADA/)

---

## Funcionalidades

- **Listagem de Seções e Funcionários:**
  - As seções e seus respectivos funcionários são exibidos em uma interface simples e intuitiva.
  - Cada funcionário tem um campo para selecionar o status (Presente, Ausente ou Demitido).

- **Motivo de Ausência:**
  - Quando um funcionário está ausente, um campo adicional é exibido para selecionar o motivo (Médico, Escala, Férias ou Viagem a serviço).

- **Geração de Relatório:**
  - O sistema gera um relatório em HTML com o status de todos os funcionários.
  - O relatório pode ser visualizado em uma nova janela e impresso diretamente.

- **Design Responsivo:**
  - A interface é simples e funcional, com estilos CSS para melhorar a apresentação.

---

## Versão

**Versão 1.0.0** (Lançamento Inicial)
- Funcionalidades básicas de gerenciamento de presença e ausência.
- Geração de relatório em HTML.
- Interface simples e funcional.

---

## Como Usar

1. **Acesse o Projeto:**
   - Abra o link [https://dericofredy.github.io/CHAMADA/](https://dericofredy.github.io/CHAMADA/) no seu navegador.

2. **Selecione o Status dos Funcionários:**
   - Para cada funcionário, selecione o status no menu suspenso:
     - **Presente**
     - **Ausente** (será solicitado o motivo)
     - **Demitido**

3. **Gere o Relatório:**
   - Clique no botão **"Gerar Relatório"** para abrir uma nova janela com o relatório de chamada.
   - O relatório pode ser impresso diretamente da janela aberta.

---

## Estrutura do Código

O projeto é composto por:

- **HTML:** Estrutura básica da página.
- **CSS:** Estilos para a interface e o relatório.
- **JavaScript:** Lógica para:
  - Criar dinamicamente as seções e funcionários.
  - Gerenciar a exibição do campo de motivo de ausência.
  - Gerar o relatório em HTML.

### Arquivos Principais

- `index.html`: Contém a estrutura HTML da página.
- `style.css`: Define os estilos da interface e do relatório.
- `script.js`: Implementa a lógica do sistema.

---

## Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/dericofredy/CHAMADA.git

2. Navegue até o diretório do projeto:
    cd CHAMADA

3. Abra o arquivo index.html no seu navegador:
    Você pode arrastar o arquivo para o navegador ou usar um servidor local (como o Live Server do VS Code).
    
## Melhorias Futuras
1. Adicionar validação para garantir que o motivo de ausência seja preenchido.
2. Implementar um sistema de salvamento dos dados (localStorage ou backend).
3. Adicionar funcionalidade para adicionar/remover seções e funcionários dinamicamente.
4. Melhorar o design da interface com um framework como Bootstrap ou Tailwind CSS.

## Contribuição
    Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um Fork do Repositório:
    Clique no botão "Fork" no canto superior direito da página do repositório no GitHub.

2. Clone o Repositório:

bash
Copy
git clone https://github.com/seu-usuario/CHAMADA.git
Crie uma Branch para sua Feature:

bash
Copy
git checkout -b feature/nova-feature
Faça as Alterações Necessárias:

3. Adicione novas funcionalidades, corrija bugs ou melhore a documentação.

## Commit e Push das Alterações:

bash
Copy
git add .
git commit -m "Adiciona nova feature"
git push origin feature/nova-feature
Abra um Pull Request:

Vá até a página do repositório no GitHub e clique em "New Pull Request".

Descreva suas alterações e envie o PR para revisão.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](https://github.com/Dericofredy/CHAMADA/blob/main/License.md) para mais detalhes.

Agradecimentos
Agradeço a todos que contribuíram para este projeto.

Inspiração e suporte da comunidade de desenvolvedores.

## Contato
Autor: Frederico Caldeira

GitHub: dericofredy

Projeto: https://dericofredy.github.io/CHAMADA/

Histórico de Versões
Versão 1.0.0 (Lançamento Inicial)

Funcionalidades básicas de gerenciamento de presença e ausência.

Geração de relatório em HTML.

Interface simples e funcional.

## Exemplo de Uso
    Aqui está um exemplo de como o sistema funciona:

    1. Acesse o link do projeto.
    2. Selecione o status de cada funcionário.
    3. Clique em "Gerar Relatório" para visualizar e imprimir o relatório.

## Tecnologias Utilizadas
    HTML5
    CSS3
    JavaScript
