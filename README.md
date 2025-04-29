# 📋 Sistema de Chamada - TTC

Este projeto é um sistema simples para registrar a presença, ausência e motivo de ausência de funcionários, organizados por seções. A ferramenta gera um relatório em HTML para visualização e impressão.

🔗 **Projeto Online:** [https://dericofredy.github.io/CHAMADA/](https://dericofredy.github.io/CHAMADA/)

---

## ✨ Funcionalidades

- ✅ Listagem automática de seções e funcionários.
- ✅ Registro de status: **Presente**, **Ausente** ou **Demitido**.
- ✅ Seleção de motivo de ausência quando aplicável.
- ✅ Geração de **relatório em HTML** para impressão.
- ✅ Interface simples e responsiva (CSS básico incluído).

---

## 🚀 Como Usar

1. Acesse: [https://dericofredy.github.io/CHAMADA/](https://dericofredy.github.io/CHAMADA/)
2. Selecione o status de cada funcionário.
3. Se marcado como "Ausente", selecione o motivo.
4. Clique em **"Gerar Relatório"** para visualizar e imprimir.

---

## 🧠 Exemplo de Uso

1. João Silva está **presente**.  
2. Maria Oliveira está **ausente** por **Férias**.  
3. Carlos Souza está **demitido**.  

Ao clicar no botão, um relatório é gerado automaticamente em uma nova janela com essas informações formatadas.

---

## 📁 Estrutura do Projeto

CHAMADA/ │ ├── index.html → Estrutura HTML da página principal ├── style.css → Estilo visual (layout, tipografia, responsividade) ├── script.js → Lógica JS (criação dinâmica, eventos, geração do relatório) └── README.md → Este arquivo

yaml
Copiar
Editar

---

## 💻 Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/dericofredy/CHAMADA.git

# Acesse o diretório
cd CHAMADA

# Abra o arquivo no navegador
start index.html

📌 Versão
v1.0.0 — Lançamento Inicial (Abril de 2025)

Funcionalidades
Estrutura de seções e funcionários fixa no JS.

Registro de presença/ausência/demissão.

Campo condicional de motivo para ausências.

Relatório HTML para nova aba e impressão.

📅 Histórico de Versões

Versão	Data	Alterações
1.0.0	2025-04-28	Lançamento inicial com funcionalidades básicas e geração de relatório HTML
📈 Planejamento Futuro
 Validação de motivo obrigatório para ausência.

 Salvamento de status no localStorage.

 Exportar relatório para PDF (via html2pdf.js).

 Adicionar/remover seções e funcionários via interface.

 Melhorar a interface com Bootstrap ou Tailwind.

🤝 Contribuindo
Contribuições são bem-vindas!

Faça um fork do projeto.

Crie uma branch para sua feature:

bash
Copiar
Editar
git checkout -b feature/minha-feature
Commit suas alterações:

bash
Copiar
Editar
git commit -m "feat: adiciona nova funcionalidade"
Dê push na branch:

bash
Copiar
Editar
git push origin feature/minha-feature
Abra um Pull Request e descreva sua contribuição.

📜 Licença
Este projeto está licenciado sob a Licença MIT.
Consulte o arquivo LICENSE para mais detalhes.

👤 Autor
Frederico Caldeira
GitHub: @dericofredy
Projeto: https://dericofredy.github.io/CHAMADA/

🧰 Tecnologias Utilizadas
HTML5

CSS3

JavaScript (puro)