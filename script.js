const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Você sabia que Graffiti tambem é um arte muitoo conseituado nos dias atuis porem tambem é mal visto por muitas pessos atualmente o que você acha obre isto ?",
        alternativas: [
            {
                texto: "Isto é uma bobeira de adolecente!",
                afirmacao: "Não acho que Graffiti é um estilo artistico. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Não sabi que essas palvrs pela cidade eram arte."
            }
        ]
    },
    {
        enunciado: " Graffiti é um estilo artistico abordado em diversos locais principalmente em colegios como incentivo de motrar uma cultura da periferia para mostrar que não esta tudo bem com as pessoas q sofrem de baixa renda seu(a) Professor de artes pede para você fazer ou pequizar sobre Graffiti. Qual atitude você toma?",
        alternativas: [
            {
                texto: " Se recusa a fazer o trabalho porque isto apenas um noegocio de vagabundo.",
                afirmacao: " Graffiti não é arte."
            },
            {
                texto: " Faz o trabalho pesquisando e aprendendo sobre os vario estilos diferentes.",
                afirmacao: " Graffiti é um estilo de arte."
            }
        ]
    },
    {
        enunciado: " Apos a realização do trabalho seu(a) professor faz um debate sobre este estilo artistico presente na sociedade atual",
        alternativas: [
            {
                texto: "Defende a ideia de que graffiti não é um estilo artistico nem uma manifestação da sociedade.",
                afirmacao: " Graffiti não é arte."
            },
            {
                texto: " Defende a ideia de que é art.",
                afirmacao: " Graffiti é arte."
            }
        ]
    },
    {
        enunciado: " Seu(a) professor pede para que você crie um desenho no estilo street valendo nota oque você faz? ",
        alternativas: [
            {
                texto: " Faz o trabalho o trablho só para conseguir nota .",
                afirmacao: " Só faz o desenho por conta da nota facil ."
            },
            {
                texto: "Criar uma arte afim de buscar o conhecimento.",
                afirmacao: " Faz o desenho afim de conseguir conhecimento"
            }
        ]
    },
    {
        enunciado: " O(a) Professor recolhe os desenhos e faz uma exposição e seu denho e tido como o melhor dentre todos  ",
        alternativas: [
            {
                texto: " Simplesmente aceita porem não se orgunlha disso.",
                afirmacao: " Sente que não é algo de grande impotancia ."
            },
            {
                texto: " Fica estremamente feliz com o ocorrido .",
                afirmacao: "Esta feliz por ter resebido elogios . "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
