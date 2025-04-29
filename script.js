// Dados das seções e funcionários
var secoes = [
    {
        nome: "Seção 1",
        funcionarios: [
            { nome: "João Silva", posto: "Analista", graduacao: "Júnior" },
            { nome: "Maria Oliveira", posto: "Coordenador", graduacao: "Pleno" },
            { nome: "Carlos Souza", posto: "Gerente", graduacao: "Sênior" }
        ]
    },
    {
        nome: "Seção 2",
        funcionarios: [
            { nome: "Ana Costa", posto: "Analista", graduacao: "Júnior" },
            { nome: "Pedro Rocha", posto: "Coordenador", graduacao: "Pleno" },
            { nome: "Fernanda Lima", posto: "Gerente", graduacao: "Sênior" }
        ]
    },
    {
        nome: "Seção 3",
        funcionarios: [
            { nome: "Lucas Almeida", posto: "Analista", graduacao: "Júnior" },
            { nome: "Juliana Santos", posto: "Coordenador", graduacao: "Pleno" },
            { nome: "Rafael Pereira", posto: "Gerente", graduacao: "Sênior" }
        ]
    }
];

// Opções de motivo de ausência
var opcoesAusencia = ["Médico", "Escala", "Férias", "Viagem a serviço"];

// Função para criar as seções e funcionários
function criarSecoes() {
    var containerSecoes = document.getElementById("secoes");

    for (var i = 0; i < secoes.length; i++) {
        var secao = secoes[i];

        var secaoDiv = document.createElement("div");
        secaoDiv.className = "secao";
        secaoDiv.innerHTML = "<h2>" + secao.nome + "</h2>";

        for (var j = 0; j < secao.funcionarios.length; j++) {
            var funcionario = secao.funcionarios[j];

            var funcionarioDiv = document.createElement("div");
            funcionarioDiv.className = "funcionario";
            funcionarioDiv.innerHTML = `
                <label>${funcionario.nome} (${funcionario.posto} - ${funcionario.graduacao}):</label>
                <select class="status">
                    <option value="presente">Presente</option>
                    <option value="ausente">Ausente</option>
                    <option value="Demitido">Demitido</option>
                </select>
                <select class="motivo" style="display: none;">
                    <option value="">Selecione o motivo</option>
                    ${opcoesAusencia.map(opcao => `<option value="${opcao}">${opcao}</option>`).join("")}
                </select>
            `;

            secaoDiv.appendChild(funcionarioDiv);
        }

        containerSecoes.appendChild(secaoDiv);
    }
}

// Função para mostrar/esconder o campo de motivo
function configurarMotivo() {
    var containerSecoes = document.getElementById("secoes");

    containerSecoes.addEventListener("change", function(event) {
        if (event.target.classList.contains("status")) {
            var motivoSelect = event.target.parentElement.querySelector(".motivo");
            if (event.target.value === "ausente") {
                motivoSelect.style.display = "inline";
            } else {
                motivoSelect.style.display = "none";
            }
        }
    });
}

// Função para gerar o relatório em HTML como uma string
function gerarRelatorio() {
    var relatorioHTML = '<div class="relatorio">';
    relatorioHTML += '<h1>Relatório de Chamada - TTC</h1>';

    for (var i = 0; i < secoes.length; i++) {
        var secao = secoes[i];

        relatorioHTML += '<div class="secao">';
        relatorioHTML += '<h2>' + secao.nome + '</h2>';

        for (var j = 0; j < secao.funcionarios.length; j++) {
            var funcionario = secao.funcionarios[j];

            var status = document.querySelectorAll(".status")[i * secoes[i].funcionarios.length + j].value;
            var motivo = document.querySelectorAll(".motivo")[i * secoes[i].funcionarios.length + j].value;

            relatorioHTML += '<div class="funcionario">';
            relatorioHTML += '<strong>' + funcionario.nome + ' (' + funcionario.posto + ' - ' + funcionario.graduacao + '):</strong> ';
            relatorioHTML += status;
            if (status === "ausente" && motivo) {
                relatorioHTML += ' (Motivo: ' + motivo + ')';
            }           
            relatorioHTML += '</div>';
        }

        relatorioHTML += '</div>';
    }

    relatorioHTML += '</div>';

    // Abre uma nova janela com o relatório
    var novaJanela = window.open("", "_blank");
    novaJanela.document.write(`
        <html>
            <head>
                <title>Relatório de Chamada - TTC</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                    }
                    h1 {
                        text-align: center;
                        font-size: 24px;
                    }
                    .secao {
                        margin-bottom: 20px;
                    }
                    .funcionario {
                        margin: 10px 0;
                        font-size: 14px;
                    }
                    @media print {
                        body {
                            margin: 0;
                            padding: 0;
                        }
                        .secao {
                            page-break-inside: avoid;
                        }
                    }
                </style>
            </head>
            <body>
                ${relatorioHTML}
            </body>
        </html>
    `);
    novaJanela.document.close();

    // Abre a janela de impressão
    novaJanela.print();
}

// Configurações iniciais
criarSecoes();
configurarMotivo();

document.getElementById("gerarRelatorio").addEventListener("click", gerarRelatorio);