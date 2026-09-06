const ACCOUNTS_KEY = "bjjlingo_accounts";
const SESSION_KEY = "bjjlingo_session";
const LEGACY_KEY = "bjjlingo_v1";

const GOOGLE_CLIENT_ID = "470545192889-b6gq29mat02rhgqfi29e9doa74gi4fte.apps.googleusercontent.com";

const DEFAULT_STATE = {
    profile: { name: "Aluno", professor: "Professor", days: [1, 3, 6], isJuvenil: false, belt: null, soloTraining: false, disclaimerSeen: false },
    hearts: 5,
    maxHearts: 5,
    xp: 0,
    log: [],
    lessonsDone: {},
    aiConversations: 0
};

const BELTS_ADULT = [
    { label: "Branca", color: "#ffffff", text: "#3b3b3b" },
    { label: "Azul", color: "#2f6fed", text: "#ffffff" },
    { label: "Roxa", color: "#7c3aed", text: "#ffffff" },
    { label: "Marrom", color: "#92400e", text: "#ffffff" },
    { label: "Preta", color: "#1f2937", text: "#ffffff" }
];

const BELTS_JUVENIL = [
    { label: "Branca", color: "#ffffff", text: "#3b3b3b" },
    { label: "Cinza-Branca", color: "#e5e7eb", text: "#3b3b3b" },
    { label: "Cinza", color: "#9ca3af", text: "#3b3b3b" },
    { label: "Cinza-Preta", color: "#6b7280", text: "#ffffff" },
    { label: "Amarela", color: "#facc15", text: "#3b3b3b" },
    { label: "Amarela-Preta", color: "#eab308", text: "#3b3b3b" },
    { label: "Laranja", color: "#fb923c", text: "#3b3b3b" },
    { label: "Laranja-Preta", color: "#f97316", text: "#ffffff" },
    { label: "Verde", color: "#22c55e", text: "#3b3b3b" },
    { label: "Verde-Preta", color: "#16a34a", text: "#ffffff" }
];

const UNITS = [
    {
        title: "Montada",
        icon: "&#128081;",
        color: "#ff4b4b",
        lessons: [
            { id: "mount1", title: "Posicionamento na Montada", desc: "Controle completo da posicao superior: posicionamento, distribuicao de peso e dominancia.", videoId: "TBM7bnCT4kg" },
            { id: "mount2", title: "Manter a Montada", desc: "Dicas do lendario Jean Jacques Machado para segurar a montada e impedir fugas.", videoId: "HfGbR0oTGQY" },
            { id: "mount3", title: "Arm-lock da Montada", desc: "Aprenda o arm-lock classico direto da montada, passo a passo.", videoId: "iUap4TaYVQc" }
        ]
    },
    {
        title: "Guarda Fechada",
        icon: "&#128737;&#65039;",
        color: "#2b8a3e",
        lessons: [
            { id: "guard1", title: "Guarda Fechada para Iniciantes", desc: "A guarda fechada e a posicao mais importante do iniciante. Entenda os fundamentos.", videoId: "sEzqfr2FGGM" },
            { id: "guard2", title: "Fundamentos da Guarda", desc: "Controle, postura e ataques basicos do guard fechado.", videoId: "z0bOvViHp-Q" },
            { id: "guard3", title: "Tecnicas do Guard", desc: "Uma serie de tecnicas completas para atacar a partir da guarda fechada.", videoId: "RYn7Th3aGgw" }
        ]
    },
    {
        title: "Lateral (100kg)",
        icon: "&#128238;",
        color: "#3373cc",
        lessons: [
            { id: "side1", title: "Guia Completo da Lateral", desc: "Guia definitivo de controle lateral e transicoes.", videoId: "v5-bylGlnQA" },
            { id: "side2", title: "Escapar da Lateral", desc: "As duas principais fugas que todo faixa-branca precisa dominar.", videoId: "kLygTlvevuQ" },
            { id: "side3", title: "Americana da Lateral", desc: "Segredos para uma americana devastadora direto da lateral.", videoId: "_XjAAnIBlhA" }
        ]
    },
    {
        title: "Costas (Katagatame)",
        icon: "&#127891;",
        color: "#f2a007",
        lessons: [
            { id: "back1", title: "Controle das Costas", desc: "Posicionamento, ganchos e principios de controle da posicao de costas.", videoId: "iIVXVKAvk_Y" },
            { id: "back2", title: "Ganhar as Costas", desc: "Pegue as costas do adversario direto da lateral, como um faixa-branca.", videoId: "ROKKtEdFOGU" },
            { id: "back3", title: "Mata-leao (Rear Naked Choke)", desc: "O estrangulamento mais temido do jiu-jitsu, ensinado passo a passo.", videoId: "KW2RvtWgBxU" }
        ]
    },
    {
        title: "Meia Guarda",
        icon: "&#8536;&#65039;",
        color: "#7d3cb5",
        lessons: [
            { id: "half1", title: "Dominando a Meia Guarda", desc: "Controle, seguranca e raspagens da meia guarda explicadas.", videoId: "LkeRE8pZE5M" },
            { id: "half2", title: "Raspagem da Meia Guarda", desc: "Uma raspagem eficiente que funciona contra adversarios maiores e mais fortes.", videoId: "pehyN1TcawE" }
        ]
    },
    {
        title: "Joelho na Barriga",
        icon: "&#129458;",
        color: "#e06a00",
        lessons: [
            { id: "knee1", title: "Joelho na Barriga", desc: "Sistema completo de controle e finalizacoes com o joelho no abdomen.", videoId: "wh0ArrZsTwo" },
            { id: "knee2", title: "Ataques do Joelho na Barriga", desc: "Muitas opcoes de ataque e finalizacao da posicao.", videoId: "3p-6MUsIy90" }
        ]
    }
];

const SOLO_UNITS = [
    {
        title: "Movimento Basico",
        icon: "&#128095;",
        color: "#e11d48",
        lessons: [
            { id: "solo1", title: "5 Movimentos Solo", desc: "Treino versatil: movimentos fundamentais para treinar sem parceiro, ensinado por Stephan Kesting.", videoId: "GyQo5xhhNtw" },
            { id: "solo2", title: "3 Drills Solo (BJJ e Judo)", desc: "Tres drills simples de solo que melhoram sua movimentacao em jiujitsu e judo.", videoId: "Pk47adzLzfc" },
            { id: "solo3", title: "10 Solo Drills p/ Iniciantes", desc: "Dez series praticas de treino solo para quem esta comecando.", videoId: "B1teX9V_Vyc" }
        ]
    },
    {
        title: "Drills Essenciais",
        icon: "&#127919;",
        color: "#16a34a",
        lessons: [
            { id: "solo4", title: "5 Drills de Faixa-Branca", desc: "Cinco drills essenciais que todo faixa-branca precisa treinar sozinho.", videoId: "ZeKrDaaUaus" },
            { id: "solo5", title: "Melhores Drills Solo", desc: "Os melhores drills de solo para evoluir seu jiujitsu, com Will Brooks.", videoId: "exVaTCEVEF0" },
            { id: "solo6", title: "Drills que Estudam Jiujitsu", desc: "Os melhores drills de solo para melhorar seu jiujitsu, com Jordan Teaches Jiujitsu.", videoId: "SeKq9JEYzh0" }
        ]
    },
    {
        title: "Treino em Casa",
        icon: "&#127968;",
        color: "#ea580c",
        lessons: [
            { id: "solo7", title: "Treinar Jiujitsu em Casa", desc: "Como treinar jiujitsu em casa sem parceiro: drills de solo completos.", videoId: "ED5gdG_iipM" },
            { id: "solo8", title: "Treino Sozinho em Casa", desc: "Treine grappling sozinho em casa, sem parceiro e sem academia.", videoId: "DNxwgwv3MaM" },
            { id: "solo9", title: "10 Solo Drills (Basicos e Kids)", desc: "Dez drills de solo com certeza para iniciantes e para a garotada.", videoId: "HdcFfsemuoE" }
        ]
    },
    {
        title: "Com Equipamentos",
        icon: "&#127907;",
        color: "#7c3aed",
        lessons: [
            { id: "solo10", title: "10 Drills c/ Saco de Pancadas", desc: "Dez drills de jiujitsu solo usando um saco pesado, com Chewjitsu.", videoId: "IRUtpYQ0c6E" },
            { id: "solo11", title: "11 Drills c/ Bola de Estabilidade", desc: "Onze drills de jiujitsu solo usando uma bola de estabilidade.", videoId: "H4luaFHs7O4" },
            { id: "solo12", title: "Top 25 Bag Drills", desc: "Os 25 melhores drills de jiujitsu solo com saco, de Miami.", videoId: "Ho87HU2vhlQ" }
        ]
    },
    {
        title: "Guarda e Defesa",
        icon: "&#128737;&#65039;",
        color: "#2563eb",
        lessons: [
            { id: "solo13", title: "8 Drills de Guard Retention", desc: "Oito drills basicos de guarda para treinar sozinho, com Cobrinha.", videoId: "4yJBduVVSBo" }
        ]
    }
];

/* ---------- TRILHA 2 (TEORIA) ---------- */

function FIG(color, x, y, sc) {
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + sc + ')" fill="' + color + '">' +
        '<circle cx="30" cy="14" r="10"/>' +
        '<rect x="21" y="26" width="18" height="30" rx="8"/>' +
        '<path d="M21 34 L12 52 M39 34 L48 52" stroke="' + color + '" stroke-width="6" stroke-linecap="round" fill="none"/>' +
        '<path d="M27 54 L22 86 M33 54 L38 86" stroke="' + color + '" stroke-width="7" stroke-linecap="round" fill="none"/>' +
        '</g>';
}

function SCENE(soft, extra) {
    return '<svg viewBox="0 0 340 230" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="332" height="222" rx="18" fill="' + soft + '"/>' + extra + '</svg>';
}

function THTEXT(paras) {
    return paras;
}

const THEORY_UNIT = {
    title: "Trilha 2 - Teoria das Posicoes",
    icon: "&#128214;",
    color: "#7c3aed",
    lessons: [
        {
            id: "th-mount",
            title: "Montada",
            icon: "&#128081;",
            color: "#dc2626",
            photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Fm3-25-150combativesfig3-2frontmount.png?width=640",
            img: SCENE("#ffe0e0",
                '<circle cx="52" cy="190" r="13" fill="#8b93a3"/>' +
                '<rect x="70" y="180" width="135" height="24" rx="12" fill="#8b93a3"/>' +
                '<path d="M205 186 L252 172 M205 194 L254 200" stroke="#8b93a3" stroke-width="9" stroke-linecap="round"/>' +
                '<path d="M96 180 L82 142 M130 180 L142 140" stroke="#8b93a3" stroke-width="8" stroke-linecap="round"/>' +
                FIG("#dc2626", 116, 60, 1) +
                '<path d="M137 94 L116 156 M165 94 L184 154" stroke="#dc2626" stroke-width="8" stroke-linecap="round"/>'),
            text: THTEXT("A Montada e a posicao mais dominante do jiu-jitsu. Voce fica por cima, com seu peso sobre o abdomen do adversario, controlando o ritmo, a respiracao e todas as opcoes de ataque.\n\nO segredo esta no controle: quadril baixo, joelhos bem abertos e o peso encaixado na frontal do quadril, sobre o tronco do adversario. Com esse controle, ele gasta muita energia para tentar escapar e abre espaco para finalizacoes como o arm-lock e os estrangulamentos.\n\nErro comum: sentar afastado, aliviando o peso e devolvendo liberdade ao adversario. O peso da montada precisa ficar no tronco dele, nao nos seus joelhos."),
            tips: ["Mantenha os pes apoiados nas costas dele, nao no chao.", "Quadril baixo: o peso sobre o abdomen, nao sobre os joelhos.", "Controle os bracos antes de tentar finalizar.", "Ao escapar, faca por lados: crie a ponte e o espaco de um lado so."]
        },
        {
            id: "th-guard",
            title: "Guarda Fechada",
            icon: "&#128737;&#65039;",
            color: "#2b8a3e",
            photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Brazilian_Jiu-jitsu-Closed_guard.jpg?width=640",
            img: SCENE("#e2f2de",
                '<circle cx="64" cy="186" r="13" fill="#8b93a3"/>' +
                '<rect x="82" y="176" width="130" height="24" rx="12" fill="#8b93a3"/>' +
                '<path d="M96 176 L84 138 M136 176 L148 136" stroke="#8b93a3" stroke-width="8" stroke-linecap="round"/>' +
                '<path d="M150 184 C148 140 122 130 100 150 M180 176 C188 140 214 134 236 150" stroke="#8b93a3" stroke-width="9" stroke-linecap="round" fill="none"/>' +
                FIG("#2b8a3e", 168, 60, 1) +
                '<path d="M189 96 L156 128 M207 96 L238 122" stroke="#2b8a3e" stroke-width="8" stroke-linecap="round"/>'),
            text: THTEXT("A Guarda Fechada e a posicao em que voce, por baixo, fecha as pernas na cintura do adversario. E a base de todo o jiu-jitsu: de la voce ataca, defende e derruba sem dar espaco.\n\nAs maos controlam as mangas ou o pescoco, e o quadril fica sempre ativo. Quando ele tentar ficar em pe, puxe com as pernas e desequilibre. Ninguem passa a guarda fechada sem abri-la primeiro - e abrir ja e abrir espaco para o seu ataque.\n\nErro comum: guarda passiva, apenas segurando com as pernas. A guarda e agressiva: puxe, desequilibre e ataque assim que sentir o adversario se mover."),
            tips: ["Puxe o quadril dele para perto do seu peito.", "Braco preso entre as pernas? Ataque kimura ou armlock.", "Controle a postura puxando o pescoco para baixo.", "Cuide do espaco: bracos entre o corpo dele e o seu."]
        },
        {
            id: "th-side",
            title: "Lateral (100kg)",
            icon: "&#128238;",
            color: "#3373cc",
            photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Royce_Gracie_Demonstration_09.jpg?width=640",
            img: SCENE("#dbe9fb",
                '<circle cx="44" cy="188" r="13" fill="#8b93a3"/>' +
                '<rect x="62" y="178" width="150" height="24" rx="12" fill="#8b93a3"/>' +
                '<path d="M212 184 L258 198 M212 192 L256 210" stroke="#8b93a3" stroke-width="9" stroke-linecap="round"/>' +
                '<path d="M76 178 L60 140 M120 178 L132 140" stroke="#8b93a3" stroke-width="8" stroke-linecap="round"/>' +
                FIG("#3373cc", 132, 88, 1) +
                '<path d="M153 124 L132 176 M183 124 L204 178" stroke="#3373cc" stroke-width="8" stroke-linecap="round"/>' +
                '<path d="M145 156 L110 200 M175 156 L212 200" stroke="#3373cc" stroke-width="9" stroke-linecap="round"/>'),
            text: THTEXT("A Lateral (cem kilos) e o controle em que voce pressiona o peito do adversario contra o chao, com seu corpo atravessado sobre o dele. Passou a guarda e chegou na lateral? Voce esta na frente do jogo.\n\nO cerebro da lateral e a pressao: seu pescoco encostado nele, o peito por cima do peito e o quadril baixo. Com um braco, controle o bracaco dele; com o outro, a cabeca. De la saem transicoes para a montada, para as costas e finalizacoes como a americana.\n\nErro comum: deixar espaco entre o seu corpo e o do adversario. Espaco na lateral significa fuga."),
            tips: ["Peso sobre o peito dele, nao sobre os joelhos.", "Controle a cabeca e o braco mais proximo de voce.", "Joelho de tres pontos para bloquear a fuga.", "Quando ele virar de lado, suba para a montada."]
        },
        {
            id: "th-back",
            title: "Costas (Katagatame)",
            icon: "&#127891;",
            color: "#f2a007",
            photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Back_mount.jpg?width=640",
            img: SCENE("#fdf0d0",
                '<circle cx="150" cy="92" r="13" fill="#8b93a3"/>' +
                '<rect x="148" y="106" width="46" height="58" rx="11" fill="#8b93a3"/>' +
                '<path d="M148 116 L112 146 M194 116 L230 146" stroke="#8b93a3" stroke-width="8" stroke-linecap="round"/>' +
                '<path d="M160 162 L152 208 M182 162 L190 208" stroke="#8b93a3" stroke-width="9" stroke-linecap="round"/>' +
                FIG("#f2a007", 108, 44, 0.85) +
                '<path d="M128 74 C150 62 158 76 148 88 M122 74 C102 62 100 78 106 90" stroke="#f2a007" stroke-width="7" stroke-linecap="round" fill="none"/>' +
                '<path d="M120 118 L96 196 M132 118 L146 198" stroke="#f2a007" stroke-width="8" stroke-linecap="round"/>'),
            text: THTEXT("As Costas (tambem chamadas de katagatame pelos faixas-brancas) e a posicao em que voce fica nas costas do adversario, com os calcanhares encaixados nos quadris dele: os ganchos.\n\nQuem tem as costas tem o controle total: o adversario nao te ve, nao consegue usar o peso contra voce e os dois braco proximos do pescoco dele estao prontos para o mata-leao. As costas sao uma das posicoes mais seguras e mais demoradas do jiu-jitsu.\n\nErro comum: deixar os calcanhares caidos. Sem os ganchos grudados no quadril, o adversario escapa com facilidade."),
            tips: ["Um braco passa por baixo do bracaco dele, do outro lado.", "Calcanhares sempre grudados no quadril dele.", "Controle cabeca e quadril antes de tentar finalizar.", "Se ele conseguir virar, recolha os ganchos e recoloque."]
        },
        {
            id: "th-half",
            title: "Meia Guarda",
            icon: "&#8536;&#65039;",
            color: "#7d3cb5",
            photo: "https://en.wikipedia.org/wiki/Special:FilePath/Half_guard_in_Brazilian_Jiu-Jitsu.jpg?width=640",
            img: SCENE("#efe4fa",
                '<circle cx="60" cy="188" r="13" fill="#8b93a3"/>' +
                '<rect x="78" y="178" width="140" height="24" rx="12" fill="#8b93a3"/>' +
                '<path d="M92 178 L80 140" stroke="#8b93a3" stroke-width="8" stroke-linecap="round"/>' +
                '<path d="M104 176 C96 130 116 120 140 138" stroke="#8b93a3" stroke-width="9" stroke-linecap="round" fill="none"/>' +
                '<path d="M218 182 L268 194" stroke="#8b93a3" stroke-width="9" stroke-linecap="round"/>' +
                FIG("#7d3cb5", 156, 66, 1) +
                '<path d="M177 102 L146 128 M199 102 L230 120" stroke="#7d3cb5" stroke-width="8" stroke-linecap="round"/>' +
                '<path d="M178 132 L196 200 M160 132 L138 200" stroke="#7d3cb5" stroke-width="6" stroke-linecap="round"/>'),
            text: THTEXT("A Meia Guarda e onde boa parte dos rolos acontece: voce esta por baixo com uma perna dele presa entre as suas pernas. Nem passou, nem passou - quem passa a perna e quem mantem a perna presa disputa cada segundo.\n\nPor baixo, o objetivo e ganhar a guarda fechada, buscar uma raspagem ou virar para cima. Por cima, o plano e libertar a perna presa e passar, ou congelar o adversario com pressao ate ele errar.\n\nErro comum: apertar a perna do adversario so com as coxas e esquecer o quadril. E o quadril que gira, desequilibra e gera a raspagem."),
            tips: ["Trabalhe para recolocar a guarda fechada.", "Quadril ativo: quem gira com ele controla o ritmo.", "Por cima, nao force a perna: primeiro libere o joelho.", "Por baixo, mantenha o pescoco da linha do quadril dele."]
        },
        {
            id: "th-knee",
            title: "Joelho na Barriga",
            icon: "&#129458;",
            color: "#e06a00",
            photo: "https://commons.wikimedia.org/wiki/Special:FilePath/Image943-knee_mount.jpg?width=640",
            img: SCENE("#ffead3",
                '<circle cx="56" cy="188" r="13" fill="#8b93a3"/>' +
                '<rect x="74" y="178" width="140" height="24" rx="12" fill="#8b93a3"/>' +
                '<path d="M88 178 L74 138 M130 178 L142 134" stroke="#8b93a3" stroke-width="8" stroke-linecap="round"/>' +
                '<path d="M214 184 L264 176 M214 192 L262 198" stroke="#8b93a3" stroke-width="9" stroke-linecap="round"/>' +
                FIG("#e06a00", 138, 84, 1) +
                '<path d="M159 120 L132 150 M195 120 L212 144" stroke="#e06a00" stroke-width="8" stroke-linecap="round"/>' +
                '<circle cx="132" cy="158" r="11" fill="#e06a00"/>' +
                '<path d="M136 168 L128 208" stroke="#e06a00" stroke-width="9" stroke-linecap="round"/>' +
                '<path d="M196 138 L218 206" stroke="#e06a00" stroke-width="9" stroke-linecap="round"/>'),
            text: THTEXT("O Joelho na Barriga e um controle de transicao bastante poderoso: uma canela atravessada no abdomen do adversario enquanto voce controla a cabeca e o braco dele.\n\nDesconfortavel, essa posicao obriga o adversario a reagir - e e exatamente essa reacao que voce usa para trocar de controle. Dali surgem montadas, laterais e finalizacoes.\n\nErro comum: deixar o joelho escorregar para fora da linha do abdome. O joelho precisa ficar pressionado na regiao do estomago, controlando para onde ele vai se mover."),
            tips: ["Joelho na linha do umbigo, nao no peito.", "Controle cabeca e braco com a mao livre.", "Use a reacao dele para trocar para outra posicao.", "Quando sentir o quadril dele abrir, suba para a montada."]
        }
    ]
};

function theoryDone() {
    return THEORY_UNIT.lessons.filter(function(l) { return state.lessonsDone[l.id]; }).length;
}

function isTrail1Done() {
    const s = allLessonsDone();
    return s.total > 0 && s.done === s.total;
}

/* ---------- GLOSSARIO (BUSCA) ---------- */

const CAT_COLORS = { "Guarda": "#2b8a3e", "Posicao": "#3373cc", "Finalizacao": "#dc2626", "Passagem": "#b45309", "Raspagem": "#7d3cb5", "Conceito": "#0e7490", "Treino": "#64748b" };

function catColor(cat) {
    return CAT_COLORS[cat] || "#64748b";
}

function norm(s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const GLOSSARY = [
    { name: "Guarda", icon: "&#128737;", cat: "Guarda",
        tags: ["guarda", "baixo", "defesa", "base", "por baixo"],
        text: "A guarda e a posicao em que voce esta por baixo, com as pernas trabalhando entre o seu corpo e o do adversario. E da guarda que nascem as raspagens, as finalizacoes e as principais defesas do jiu-jitsu.\n\nCada variante de guarda resolve um problema diferente: umas controlam a distancia, outras o quadril, outras os bracos. Quanto mais guardas voce conhece, mais opcoes tem por baixo.",
        related: ["Guarda Fechada", "Meia Guarda", "Guarda De La Riva", "Guarda Borboleta", "Guarda de Aranha", "X-Guard"] },
    { name: "Guarda Fechada", icon: "&#128274;", cat: "Guarda", theoryId: "th-guard",
        tags: ["guarda", "fechada", "fechado", "baixo", "base"],
        related: ["Triangulo", "Arm-lock", "Guarda"] },
    { name: "Meia Guarda", icon: "&#9986;", cat: "Guarda", theoryId: "th-half",
        tags: ["guarda", "meia", "half", "baixo"],
        related: ["Meia Guarda Dominada", "Guarda", "Raspagem da Meia Guarda"] },
    { name: "Meia Guarda Dominada", icon: "&#129354;", cat: "Guarda",
        tags: ["guarda", "meia", "dominada", "half", "baixo"],
        text: "A meia guarda dominada (deep half) e a variante em que voce passa a cabeca por baixo da perna do adversario e trabalha por dentro do quadril dele.\n\nDe la, as opcoes principais sao a raspagem de profundidade e o giro para as costas, quando o adversario reage para frente.",
        related: ["Meia Guarda", "Raspagem da Meia Guarda", "Costas"] },
    { name: "Guarda De La Riva", icon: "&#9889;", cat: "Guarda",
        tags: ["guarda", "de la riva", "dlr", "perna", "baixo", "grip"],
        text: "A guarda de la riva usa uma perna enganchada por dentro da perna da frente do adversario, abaixando o quadro dele e criando desequilibrio.\n\nE uma guarda muito usada em campeonatos: de la saem raspagens, pegadas nas costas e varridoes de cintura quando ele tenta passar de pe.",
        related: ["Guarda", "Raspagem da Meia Guarda", "Costas", "X-Guard"] },
    { name: "Guarda de Aranha", icon: "&#128375;", cat: "Guarda",
        tags: ["guarda", "aranha", "spider", "pernas", "manga", "baixo"],
        text: "Na guarda de aranha (spider guard), os pes ficam apoiados nos bracos do adversario enquanto suas maos seguram as mangas dele, controlando a distancia e criando garras de pressao.\n\nOs bracos esticados e os pes no quadril dele geram desequilibrio constante, abrindo espaco para raspagens e pegadas fortes.",
        related: ["Guarda", "Guarda Fechada", "Raspagem de Guarda Fechada"] },
    { name: "Guarda Borboleta", icon: "&#129419;", cat: "Guarda",
        tags: ["guarda", "borboleta", "butterfly", "baixo", "gancho"],
        text: "Na guarda borboleta (butterfly), os dois pes ficam enganchados por dentro das pernas do adversario, com os quadris muito ativos.\n\nE a guarda preferida de quem gosta de jogo no ar: de la saem raspagens dinamicas e o balancao para as costas.",
        related: ["Guarda", "Gancho de Quadril", "Raspagem da Meia Guarda"] },
    { name: "X-Guard", icon: "&#10007;", cat: "Guarda",
        tags: ["guarda", "x guard", "baixo", "pernas", "derrubada"],
        text: "O X-guard coloca as duas pernas enganchadas e cruzadas sob o adversario, levantando o quadril dele e tirando toda a base.\n\nDe la, as raspagens e derrubadas sao quase maquina: o adversario desequilibra para todos os lados enquanto voce escolhe para onde vai.",
        related: ["Guarda", "Guarda De La Riva", "Guarda Borboleta"] },
    { name: "Guarda 50/50", icon: "&#9878;&#65039;", cat: "Guarda", tags: ["guarda", "50", "cinquenta", "pernas", "travas"],
        text: "Na guarda 50/50, as duas pernas de cada lutador ficam enganchadas uma dentro da outra, criando um jogo simetrico de ataques e travamentos.\n\nE uma posicao defensiva e calculista, muito usada para controlar lutadores explosivos e trabalhar finalizacoes de perna.",
        related: ["Guarda", "X-Guard", "Triangulo"] },
    { name: "Guarda Meia-Perna", icon: "&#127744;", cat: "Guarda", tags: ["guarda", "meia perna", "perna", "reversa", "baixo"],
        text: "A guarda meia-perna (tambem chamada de guarda reversa de de la riva) trabalha com a perna enganchada por fora, pressionando o quadril do adversario para dentro.\n\nE uma guarda de defesa agressiva, cheia de opcoes para pegar as costas e raspar lutadores grandes.",
        related: ["Guarda", "Guarda De La Riva", "Costas"] },
    { name: "Montada", icon: "&#128081;", cat: "Posicao", theoryId: "th-mount",
        tags: ["montada", "cima", "dominancia", "por cima"],
        related: ["Lateral", "Arm-lock", "Ponte"] },
    { name: "Lateral", icon: "&#128238;", cat: "Posicao", theoryId: "th-side",
        tags: ["lateral", "100kg", "cem kilos", "controle", "cima"],
        related: ["Montada", "Americana", "Kimura"] },
    { name: "Costas", icon: "&#127891;", cat: "Posicao", theoryId: "th-back",
        tags: ["costas", "katagatame", "ganchos", "cima", "atras"],
        related: ["Mata-leao", "Gancho de Quadril", "Ponte"] },
    { name: "Joelho na Barriga", icon: "&#129458;", cat: "Posicao", theoryId: "th-knee",
        tags: ["joelho", "barriga", "joelho na barriga", "transicao", "cima"],
        related: ["Montada", "Lateral", "Passagem por cima"] },
    { name: "Passagem por Cima", icon: "&#11014;", cat: "Passagem", tags: ["passagem", "guarda", "cima", "controle"],
        text: "Passar a guarda por cima e o objetivo de quem esta por cima: superar as pernas do adversario e chegar na lateral ou em uma posicao de controle.\n\nOs pilares sao a postura, o controle das pernas e o quadril baixo. Comecando pelo joelho pressionado, o caminho para a lateral fica aberto.",
        related: ["Lateral", "Montada", "Passagem da Meia Guarda"] },
    { name: "Passagem Toreando", icon: "&#128668;", cat: "Passagem", tags: ["passagem", "guarda", "toreando", "joelhos", "cima"],
        text: "A passagem toreando usa as duas maos segurando os joelhos do adversario, jogando ambos para o mesmo lado para abrir a guarda.\n\nE uma das passagens mais classicas do jiu-jitsu: simples, segura e eficiente em qualquer level.",
        related: ["Passagem por Cima", "Lateral", "Passagem da Meia Guarda"] },
    { name: "Passagem da Meia Guarda", icon: "&#10145;", cat: "Passagem", tags: ["passagem", "meia", "guarda", "smoosh", "cima"],
        text: "Quando o adversario fecha a meia guarda, a passagem precisa liberar a perna presa sem criar espaco: pressao com o quadril e giro do joelho.\n\nCom o peso esmagando o quadril dele e a cabeca vencendo a linha, a perna se libera e a lateral chega naturalmente.",
        related: ["Meia Guarda", "Lateral", "Passagem Toreando"] },
    { name: "Passagem de Fundo", icon: "&#128682;", cat: "Passagem", tags: ["passagem", "guarda", "fundo", "backstep", "costas"],
        text: "A passagem de fundo (backstep) joga o corpo para tras, passando por baixo da guarda aberta e terminando ao lado do quadril adversario.\n\nE moderna e veloz: quando o adversario reage para proteger a passagem por cima, as costas dele ficam expostas.",
        related: ["Passagem por Cima", "Costas", "Guarda Borboleta"] },
    { name: "Raspagem de Guarda Fechada", icon: "&#11015;&#65039;", cat: "Raspagem", tags: ["raspagem", "guarda", "fechada", "cima", "baixo"],
        text: "A raspagem de guarda fechada comeca com o adversario tentando passar o quadril para o lado: voce gira junto e usa a perna como alavanca para derruba-lo.\n\nQuando ele se projetar para frente na tentativa de passar, a raspagem de quadril transforma a forca dele em desequilibrio a seu favor.",
        related: ["Guarda Fechada", "Lateral", "Montada"] },
    { name: "Raspagem da Meia Guarda", icon: "&#11015;&#65039;", cat: "Raspagem", tags: ["raspagem", "meia", "guarda", "baixo", "cima"],
        text: "Da meia guarda, a raspagem classica usa o gancho na perna de tras e o controle do braco para derrubar o adversario para o lado.\n\nQuando ele apoiar o joelho para passar, o gancho puxa e o controle do braco projeta: voce termina por cima na lateral.",
        related: ["Meia Guarda", "Lateral", "Gancho de Quadril"] },
    { name: "Raspagem com Tripe", icon: "&#11015;&#65039;", cat: "Raspagem", tags: ["raspagem", "tripe", "tripod", "de pe"],
        text: "A raspagem com tripe acontece quando o adversario fica de pe: uma perna puxa a dele e a outra derruba pela perna de tras.\n\nAlem da perna, as maos seguram uma manga e nao se larga: o adversario cai e voce acompanha direto para o controle.",
        related: ["Guarda", "X-Guard", "Lateral"] },
    { name: "Raspagem Leva-e-Traz", icon: "&#11015;&#65039;", cat: "Raspagem", tags: ["raspagem", "leva", "traz"],
        text: "A raspagem leva-e-traz usa um balanco de lado com o adversario de joelhos ou agachado, alternando o quadril para desequilibra-lo.\n\nE uma raspagem dinamica de pressao: ao balancar, voce comanda o ritmo e encontra o momento de projetar.",
        related: ["Guarda Borboleta", "Lateral", "Raspagem de Guarda Fechada"] },
    { name: "Arm-lock", icon: "&#128170;", cat: "Finalizacao", tags: ["armlock", "chave", "braco", "cotovelo", "finalizacao"],
        text: "O arm-lock (chave de braco) estica o cotovelo do adversario contra a articulacao, usando seu corpo como ponto de apoio.\n\nDa montada, da lateral e da guarda fechada ha versoes: o principio e sempre o mesmo, isolar o braco, apertar as coxas e esticar o cotovelo.",
        related: ["Montada", "Guarda Fechada", "Triangulo"] },
    { name: "Kimura", icon: "&#129421;", cat: "Finalizacao", tags: ["kimura", "chave", "braco", "ombro", "finalizacao", "garra"],
        text: "A kimura e uma chave de ombro feita com as duas maos trancadas (a garra kimura), girando o braco do adversario para tras das costas.\n\nAlem de finalizar, e uma arma de controle e transicao: de qualquer posicao por cima ela ameaca e abre caminho para montada e costas.",
        related: ["Lateral", "Americana", "Costas"] },
    { name: "Americana", icon: "&#128170;", cat: "Finalizacao", tags: ["americana", "chave", "braco", "ombro", "finalizacao"],
        text: "A americana pressiona o braco do adversario dobrado contra o proprio corpo, forcando o ombro na direcao errada.\n\nDa lateral e da montada, ela aparece quando o adversario comeca a defender: segura o punho, abre o braco e gira o ombro.",
        related: ["Lateral", "Montada", "Kimura"] },
    { name: "Mata-leao", icon: "&#129409;", cat: "Finalizacao", tags: ["mata leao", "rear naked", "choke", "pescoco", "estrangulamento", "costas"],
        text: "O mata-leao (rear naked choke) estrangula o pescoco do adversario por tras, com um braco pressionando cada lado do pescoco.\n\nE a finalizacao mais famosa do MMA e do jiu-jitsu: da posicao de costas, um braco passa por cima do bracaco dele e o outro sela o estrangulamento.",
        related: ["Costas", "Estrangulamento", "Gancho de Quadril"] },
    { name: "Triangulo", icon: "&#128208;", cat: "Finalizacao", tags: ["triangulo", "triangle", "pernas", "guarda", "estrangulamento"],
        text: "O triangulo usa as duas pernas cruzadas ao redor do pescoco e de um braco do adversario, estrangulando pelas laterais do pescoco.\n\nDa guarda fechada, ele e finalizacao e transicao ao mesmo tempo: quando o adversario defende o braco, chave de braco aparece.",
        related: ["Guarda Fechada", "Arm-lock", "Guarda 50/50"] },
    { name: "Omoplata", icon: "&#128641;", cat: "Finalizacao", tags: ["omoplata", "chave", "ombro", "guard", "finalizacao"],
        text: "A omoplata trava o braco do adversario com as pernas e os quadris, girando o ombro dele ao contrario do movimento.\n\nE uma finalizacao de surpresa: sai da guarda e de transicoes, e quando o adversario roda para fugir, ele devolve as costas.",
        related: ["Guarda", "Costas", "Triangulo"] },
    { name: "Guilhotina", icon: "&#9995;", cat: "Finalizacao", tags: ["guilhotina", "guillotine", "pescoco", "estrangulamento", "de pe"],
        text: "A guilhotina estrangula o pescoco com o braco ao redor, seja de pe, no solo ou em quedas de dupla.\n\nA chave esta no encaixe: a lateral do pescoco na dobra do cotovelo, a cintura alta e o quadril fechando o estrangulamento.",
        related: ["Estrangulamento", "Raspagem com Tripe", "Costas"] },
    { name: "Choke de Gola", icon: "&#128085;", cat: "Finalizacao", tags: ["choke", "gola", "lapel", "gi", "kimono", "estrangulamento"],
        text: "O choke de gola usa a lapela do kimono do adversario para estrangular em varias direcoes, como o arco e flecha e a cruzada.\n\nCom a gola na mao, cada movimento do adversario vira alavanca: e por isso o gi muda tanto o jogo de finalizacoes.",
        related: ["Mata-leao", "Guilhotina", "Gi"] },
    { name: "Estrangulamento", icon: "&#128168;", cat: "Conceito", tags: ["estrangulamento", "choke", "pescoco", "finalizacao", "conceito"],
        text: "Estrangulamento e a finalizacao que corta a circulacao do sangue no pescoco, fazendo o adversario dormir se nao bater.\n\nE a finalizacao mais segura e eficiente do jiu-jitsu: funciona em qualquer tamanho e pressiona o pescoco, nunca a traqueia.",
        related: ["Mata-leao", "Guilhotina", "Triangulo"] },
    { name: "Ponte", icon: "&#127760;", cat: "Conceito", tags: ["ponte", "upa", "escapada", "fuga", "quadril", "montada"],
        text: "A ponte (upa) e o movimento base da escapada: empurra no chao, levanta o quadril e desequilibra o adversario para o lado.\n\nE a base de quase todas as fugas de baixo. Sem quadril ativo da ponte, nao existe escape de montada nem abertura de espaco.",
        related: ["Fuga de Quadril", "Montada", "Postura"] },
    { name: "Fuga de Quadril", icon: "&#129424;", cat: "Conceito", tags: ["fuga", "quadril", "shrimp", "escapada", "velocidade"],
        text: "A fuga de quadril (shrimping) move o quadril para o lado enquanto o corpo fica em arvore, criando espaco mesmo com o adversario em cima.\n\nCombinada com a ponte, ela reconstroi a guarda ou escapa de posicoes ruins. E o fundamento mais treinado de todos.",
        related: ["Ponte", "Guarda Fechada", "Postura"] },
    { name: "Postura", icon: "&#128100;", cat: "Conceito", tags: ["postura", "upright", "cima", "base", "fator"],
        text: "Postura e o controle da posicao de quem esta por cima: peito erguido, coluna forte e peso distribuido na base.\n\nQuem domina a postura domina o ritmo: o adversario acha horas de passagem, mas a postura concede e desce na medida.",
        related: ["Passagem por Cima", "Base", "Montada"] },
    { name: "Base", icon: "&#129521;", cat: "Conceito", tags: ["base", "equilibrio", "centro", "estabilidade", "conceito"],
        text: "Base e a distribuicao do peso no seu centro de gravidade, criando estabilidade para atacar e defendendo-se de derrubadas.\n\nQuem tem base nao cai sozinho: seja em pe, de joelhos ou embaixo, a base e o primeiro fundamento de tudo.",
        related: ["Postura", "Controle", "Desequilibrio"] },
    { name: "Gancho de Quadril", icon: "&#129457;", cat: "Conceito", tags: ["gancho", "hooks", "quadril", "pernas", "controle"],
        text: "Os ganchos de quadril sao as pernas enganchadas no adversario: nem de pe nem pasando, eles controlam o caminho da guarda.\n\nDos ganchos nascem a borboleta, o x-guard e metade das raspagens: a perna vira um leme do quadril.",
        related: ["Guarda Borboleta", "X-Guard", "Costas"] },
    { name: "Controle", icon: "&#127919;", cat: "Conceito", tags: ["controle", "dominancia", "peso", "base"],
        text: "Controle e a posicao em que voce usa peso, base e pressao para limitar os movimentos do adversario e fazer o jogo acontecer.\n\nE mais importante que a finalizacao: controle total no tempo certo abre a porta para qualquer ataque.",
        related: ["Base", "Postura", "Lateral"] },
    { name: "Desequilibrio", icon: "&#128171;", cat: "Conceito", tags: ["desequilibrio", "kuzushi", "quebrar", "quadril"],
        text: "Desequilibrio (kuzushi) e mover o centro de gravidade do adversario: puxar, girar ou elevar o quadril dele fora da base.\n\nToda tecnica de jiu-jitsu encaixa melhor quando o adversario esta desequilibrado, antes ou durante o movimento.",
        related: ["Raspagem com Tripe", "Raspagem de Guarda Fechada", "Passagem por Cima"] },
    { name: "Jiu-Jitsu", icon: "&#129355;", cat: "Conceito", tags: ["jiu jitsu", "bjj", "arte suave", "grappling", "luta"],
        text: "O jiu-jitsu brasileiro e uma arte marcial focada em controle, posicao e finalizacao, onde tamanho pode ser superado por tecnica.\n\nDiferente da forca bruta, o jiu-jitsu premia quem pensa: cada posicao e um xadrez do corpo contra o chao.",
        related: ["Faixa", "Gi", "Rolo"] },
    { name: "Faixa", icon: "&#127942;", cat: "Conceito", tags: ["faixa", "belt", "graduacao", "cor", "ranking"],
        text: "A faixa marca a evolucao no jiu-jitsu: da branca a preta, cada grau representa tempo, treino e conhecimento acumulado.\n\nAs cores mudam, mas a filosofia continua: a faixa e um lembrete de que o jiu-jitsu e uma jornada, nao um destino.",
        related: ["Jiu-Jitsu", "Treino", "Rolo"] },
    { name: "Gi / Kimono", icon: "&#128085;", cat: "Treino", tags: ["gi", "kimono", "uniforme", "gola", "manga", "treino"],
        text: "O gi (ou kimono) e o uniforme tradicional do jiu-jitsu: suas golas e mangas viram ferramentas de pegada e finalizacao.\n\nTreinar no gi desenvolve controle fino: cada grip, gola e manga e uma alavanca para quem sabe usar.",
        related: ["Choke de Gola", "Jiu-Jitsu", "Treino"] },
    { name: "No-Gi", icon: "&#129340;", cat: "Treino", tags: ["no gi", "sem gi", "rashguard", "agarra", "edicao"],
        text: "No-gi e o jiu-jitsu sem kimono: a pegada muda para o corpo, o pescoco e os bracos, e o jogo fica mais rapido e escorregadio.\n\nSem gola para segurar, o controle depende mais do quadril e da base, mantendo a essencia da luta.",
        related: ["Jiu-Jitsu", "Guarda Fechada", "Treino"] },
    { name: "Treino", icon: "&#128170;", cat: "Treino", tags: ["treino", "aula", "drill", "exercicio", "academia"],
        text: "O treino e onde tudo acontece: aquecimento, drills, posicoes e o rolo final que transforma repertorio em instinto.\n\nTreinar com constancia vale mais que treinar pesado um dia na semana: o corpo e a memoria constroem juntos.",
        related: ["Aquecimento", "Drill", "Rolo"] },
    { name: "Aquecimento", icon: "&#128293;", cat: "Treino", tags: ["aquecimento", "warmup", "alongar", "prevenir", "lesao"],
        text: "Aquecer prepara o corpo para o treino: eleva a temperatura, lubrifica as articulacoes e reduz o risco de lesao.\n\nCinco a dez minutos de alongamento e mobilidade antes do rolo fazem toda a diferenca para o dia seguinte.",
        related: ["Treino", "Fuga de Quadril", "Drill"] },
    { name: "Drill", icon: "&#128260;", cat: "Treino", tags: ["drill", "repeticao", "movimento", "solo", "pratica"],
        text: "Drill e a repeticao de um movimento ate ele virar reflexo: o caminho mais rapido para uma tecnica nova parar de 'sair' no rolo.\n\nNos drills, menos foco em velocidade e mais em posicao: o joelho certo, o quadril certo, mil vezes.",
        related: ["Treino", "Aquecimento", "Rolo"] },
    { name: "Rolo", icon: "&#129340;", cat: "Treino", tags: ["rolo", "sparring", "roll", "luta livre", "treino"],
        text: "Rolo e a parte do treino em que voce luta de verdade, testando tecnicas contra a resistencia total do adversario.\n\nE onde o jiu-jitsu vira jogo: errar no rolo e coletar dados, ganhar e consequencia da evolucao.",
        related: ["Treino", "Jiu-Jitsu", "Faixa"] }
];

function searchGlossary(q) {
    const tokens = norm(q).split(/\s+/).filter(function(t) { return t.length > 1; });
    if (!tokens.length) return [];
    const items = [];
    GLOSSARY.forEach(function(g) {
        const hay1 = norm(g.name + " " + (g.tags || []).join(" ") + " " + g.cat);
        if (!tokens.every(function(t) { return hay1.indexOf(t) !== -1; })) return;
        let score = 0;
        const hayName = norm(g.name);
        const hayTags = norm((g.tags || []).join(" "));
        tokens.forEach(function(t) {
            if (norm(g.cat) === t || norm(g.cat).indexOf(t) === 0) score += 200;
            if (hayName === t) score += 80;
            else if (hayName.indexOf(t) === 0) score += 45;
            else if (hayName.indexOf(t) !== -1) score += 25;
            if (hayTags.indexOf(t) !== -1) score += 12;
        });
        items.push({ g: g, s: score });
    });
    items.sort(function(a, b) { return b.s - a.s || norm(a.g.name).localeCompare(norm(b.g.name)); });
    return items.map(function(i) { return i.g; });
}

function renderSearch(q) {
    const box = document.getElementById("searchResults");
    if (!box) return;
    const qn = norm(q);
    if (!qn) {
        box.innerHTML = "";
        box.style.display = "none";
        return;
    }
    const res = searchGlossary(q);
    let html = "<div class='search-title'>Resultados para \"" + q + "\"" + (res.length ? " (" + res.length + ")" : "") + "</div>";
    if (!res.length) {
        html += "<div class='search-empty'>Nenhum resultado. Tente: <span class='search-sug' data-q='guarda'>guarda</span> <span class='search-sug' data-q='montada'>montada</span> <span class='search-sug' data-q='raspagem'>raspagem</span> <span class='search-sug' data-q='finalizacao'>finalizacao</span></div>";
    } else {
        html += "<div class='search-list'>";
        res.forEach(function(g) {
            html += "<div class='search-row' data-name='" + g.name + "'><span class='search-ic' style='--sc:" + catColor(g.cat) + "'>" + g.icon + "</span><div class='search-info'><strong>" + g.name + "</strong><span>" + g.cat + "</span></div><span class='lesson-check'>&#128214;</span></div>";
        });
        html += "</div>";
    }
    box.innerHTML = html;
    box.style.display = "block";
    box.querySelectorAll(".search-row").forEach(function(row) {
        row.addEventListener("click", function() {
            const g = GLOSSARY.filter(function(x) { return x.name === row.dataset.name; })[0];
            if (g) openLookup(g);
        });
    });
    box.querySelectorAll(".search-sug").forEach(function(sug) {
        sug.addEventListener("click", function() {
            document.getElementById("searchInput").value = sug.dataset.q;
            renderSearch(sug.dataset.q);
        });
    });
}

function openLookup(entry) {
    if (entry.theoryId) {
        const lesson = THEORY_UNIT.lessons.filter(function(l) { return l.id === entry.theoryId; })[0];
        if (lesson) { openTheoryLesson(lesson); return; }
    }
    document.getElementById("theoryUnitTitle").textContent = entry.cat;
    document.getElementById("theoryTitle").textContent = entry.name;
    document.getElementById("theoryIcon").innerHTML = entry.icon;
    const imgEl = document.getElementById("theoryImg");
    if (entry.img) { imgEl.innerHTML = entry.img; imgEl.style.display = "flex"; }
    else { imgEl.innerHTML = ""; imgEl.style.display = "none"; }
    const textEl = document.getElementById("theoryText");
    textEl.innerHTML = "";
    String(entry.text || "Registro do glossario.").split("\n\n").forEach(function(p) {
        const par = document.createElement("p");
        par.textContent = p;
        textEl.appendChild(par);
    });
    const tips = entry.related || [];
    const block = document.getElementById("theoryBlock");
    const label = document.getElementById("theoryBlockLabel");
    const tipsEl = document.getElementById("theoryTips");
    tipsEl.innerHTML = "";
    if (tips.length) {
        label.textContent = "Relacionados:";
        tips.forEach(function(name) {
            const li = document.createElement("li");
            li.textContent = name;
            tipsEl.appendChild(li);
        });
        block.style.display = "block";
    } else {
        block.style.display = "none";
    }
    const btn = document.getElementById("btnCompleteTheory");
    btn.textContent = "Fechar";
    btn.onclick = closeTheoryLesson;
    document.getElementById("theoryModal").classList.add("open");
}

const DAY_NAMES = ["Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"];
const DAY_NAMES_SHORT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

let state = loadState();
let aiFlow = null;
let ob = { age: null, belt: null, mode: null, step: 1 };
let pendingLesson = null;

/* ---------- CONTAS ---------- */

function getAccount(username) {
    try {
        const accounts = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "{}");
        return accounts[username];
    } catch (e) { return undefined; }
}

function saveAccounts(accounts) {
    try { localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts)); } catch (e) {}
}

function getSession() { return localStorage.getItem(SESSION_KEY); }

function isLoggedIn() { return !!getSession() && !!getAccount(getSession()); }

function dataKey() { return "bjjlingo_data_" + (getSession() || "guest"); }

function login(username, password) {
    const account = getAccount(username);
    if (!account) return "Conta nao encontrada. Crie uma conta nova.";
    if (account !== password) return "Senha incorreta. Tente de novo.";
    localStorage.setItem(SESSION_KEY, username);
    aiFlow = null;
    state = loadState();
    return null;
}

function createAccount(username, password) {
    const accounts = JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "{}");
    if (accounts[username]) return "Ja existe uma conta com esse nome.";
    if (!username || username.length < 2) return "Escolha um nome de usuario com pelo menos 2 letras.";
    if (!password || password.length < 3) return "A senha precisa ter pelo menos 3 caracteres.";
    accounts[username] = password;
    saveAccounts(accounts);
    localStorage.setItem(SESSION_KEY, username);
    aiFlow = null;
    migrateLegacy(username);
    state = loadState();
    return null;
}

function migrateLegacy(username) {
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (!legacy) return;
    if (localStorage.getItem(dataKey())) return;
    try {
        localStorage.setItem(dataKey(), legacy);
    } catch (e) {}
}

function logout() {
    localStorage.removeItem(SESSION_KEY);
    const app = document.getElementById("app");
    const loginScreen = document.getElementById("loginScreen");
    loginScreen.style.display = "flex";
    app.style.display = "none";
}

/* ---------- GOOGLE LOGIN ---------- */

function getAccountsObj() {
    try { return JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "{}"); }
    catch (e) { return {}; }
}

function decodeJwt(token) {
    try {
        const payload = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
        const json = decodeURIComponent(atob(payload).split("").map(function(c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
        return JSON.parse(json);
    } catch (e) { return {}; }
}

function loadScript(src, cb) {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = cb;
    document.head.appendChild(s);
}

function setupGoogleButton() {
    if (!GOOGLE_CLIENT_ID) return;
    loadScript("https://accounts.google.com/gsi/client", function() {
        if (typeof google === "undefined" || !google.accounts) { showToast("Nao foi possivel carregar o login do Google"); return; }
        google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: handleGoogleCredential, ux_mode: "popup" });
        document.getElementById("googleButton").style.display = "block";
        google.accounts.id.renderButton(document.getElementById("googleButton"), {
            theme: "outline", size: "large", width: 348, text: "continue_with", shape: "pill"
        });
        document.getElementById("btnGoogle").style.display = "none";
        google.accounts.id.prompt();
    });
}

function handleGoogleClick() {
    if (!GOOGLE_CLIENT_ID) { showGoogleSetupModal(); return; }
    setupGoogleButton();
}

function handleGoogleCredential(response) {
    const profile = decodeJwt(response.credential);
    const email = (profile.email || "").toLowerCase();
    if (!email) { showToast("Nao foi possivel identificar o email"); return; }
    const accounts = getAccountsObj();
    if (!accounts[email]) {
        accounts[email] = "google";
        saveAccounts(accounts);
        migrateLegacy(email);
    }
    localStorage.setItem(SESSION_KEY, email);
    aiFlow = null;
    state = loadState();
    document.getElementById("loginUser").value = "";
    document.getElementById("loginPass").value = "";
    document.getElementById("loginError").textContent = "";
    const isNew = !state.profile.belt;
    showLoginScreen();
    render();
    if (isNew) {
        ob = { age: null, belt: null, mode: null, step: 1 };
        renderObBelts();
        document.getElementById("onboardModal").classList.add("open");
    } else {
        showToast("Bem-vindo de volta, " + (state.profile.name || email) + "!");
        if (state.hearts <= 0) setTimeout(function() { openAiModal(); }, 800);
    }
}

function showGoogleSetupModal() {
    document.getElementById("googleSetupModal").classList.add("open");
}

function showLoginScreen() {
    const app = document.getElementById("app");
    const loginScreen = document.getElementById("loginScreen");
    if (isLoggedIn() && state.profile.belt) {
        loginScreen.style.display = "none";
        app.style.display = "block";
    } else if (isLoggedIn()) {
        loginScreen.style.display = "none";
        app.style.display = "block";
        document.getElementById("onboardModal").classList.add("open");
    } else {
        loginScreen.style.display = "flex";
        app.style.display = "none";
    }
}

/* ---------- ESTADO ---------- */

function loadState() {
    try {
        const raw = localStorage.getItem(dataKey());
        if (raw) return Object.assign({}, JSON.parse(JSON.stringify(DEFAULT_STATE)), JSON.parse(raw));
    } catch (e) {}
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState() {
    try { localStorage.setItem(dataKey(), JSON.stringify(state)); } catch (e) {}
}

function belts() { return state.profile.isJuvenil ? BELTS_JUVENIL : BELTS_ADULT; }

function activeUnits() { return state.profile.soloTraining ? SOLO_UNITS : UNITS; }

function todayStr() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function todayDayIndex() { return new Date().getDay(); }

function isClassDay(dayIdx) { return state.profile.days.includes(dayIdx); }

function alreadyMarkedToday() {
    const t = todayStr();
    return state.log.some(function(e) { return e.date === t && (e.type === "went" || e.type === "missed"); });
}

function countClassEntries() {
    return state.log.filter(function(e) { return e.type === "went" || e.type === "missed"; });
}

function computeStreak() {
    let streak = 0;
    const entries = countClassEntries();
    for (let i = entries.length - 1; i >= 0; i--) {
        if (entries[i].type === "went") streak++;
        else break;
    }
    return streak;
}

function allLessonsDone() {
    let total = 0, done = 0;
    activeUnits().forEach(function(u) {
        u.lessons.forEach(function(l) {
            total++;
            if (state.lessonsDone[l.id]) done++;
        });
    });
    return { total: total, done: done };
}

function getNextLesson() {
    for (let ui = 0; ui < activeUnits().length; ui++) {
        for (let li = 0; li < activeUnits()[ui].lessons.length; li++) {
            const l = activeUnits()[ui].lessons[li];
            if (!state.lessonsDone[l.id]) return { unit: activeUnits()[ui], lesson: l };
        }
    }
    if (isTrail1Done()) {
        for (let li = 0; li < THEORY_UNIT.lessons.length; li++) {
            const l = THEORY_UNIT.lessons[li];
            if (!state.lessonsDone[l.id]) return { unit: THEORY_UNIT, lesson: l, theory: true };
        }
    }
    return null;
}

/* ---------- RENDER ---------- */

function setPage(pageId) {
    document.querySelectorAll(".page").forEach(function(p) { p.classList.remove("active"); });
    document.getElementById("page" + pageId.charAt(0).toUpperCase() + pageId.slice(1)).classList.add("active");
    document.querySelectorAll(".nav-btn").forEach(function(b) { b.classList.toggle("active", b.dataset.page === pageId); });
    render();
    window.scrollTo({ top: 0 });
}

function avatarInit(name) {
    const n = (name || "A").trim();
    return n.charAt(0).toUpperCase();
}

function applyTheme(t) {
    try { localStorage.setItem("bjjlingo_theme", t === "dark" ? "dark" : "light"); } catch (e) {}
    document.body.classList.toggle("dark", t === "dark");
    const seg = document.querySelectorAll("#setTheme .seg-btn");
    seg.forEach(function(b) { b.classList.toggle("active", b.dataset.val === (t === "dark" ? "dark" : "light")); });
}

function renderHearts() {
    const el = document.getElementById("hearts");
    const h = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
    let html = "";
    for (let i = 0; i < state.maxHearts; i++) {
        html += "<span class='heart" + (i < state.hearts ? "" : " lost") + "'>" + h + "</span>";
    }
    el.innerHTML = html;
}

function renderPath() {
    const container = document.getElementById("learningPath");
    if (!container) return;
    const units = activeUnits();
    const next = getNextLesson();
    const stats = allLessonsDone();
    let html = "";
    units.forEach(function(u) {
        const done = u.lessons.filter(function(l) { return state.lessonsDone[l.id]; }).length;
        const allDone = done === u.lessons.length;
        const isNow = next && next.unit === u;
        const cls = allDone ? "done" : (isNow ? "now" : "");
        html += "<div class='path-chip " + cls + "'><span class='path-ic'>" + u.icon + "</span><span class='path-seed'>" + done + "/" + u.lessons.length + "</span></div>";
    });
    container.innerHTML = html;
    container.querySelectorAll(".path-chip").forEach(function(chip) {
        chip.addEventListener("click", function() { setPage("learn"); });
    });
    const countEl = document.getElementById("pathCount");
    if (countEl) countEl.textContent = stats.done + "/" + stats.total;
}

function renderHome() {
    const name = state.profile.name || "Aluno";
    document.getElementById("userName").textContent = "Oi, " + name + "!";
    document.getElementById("homeAvatar").textContent = avatarInit(name);
    document.getElementById("xpCount").textContent = state.xp;
    document.getElementById("streakCount").textContent = computeStreak();

    const beltRow = document.getElementById("beltRow");
    if (state.profile.belt) {
        const b = state.profile.belt;
        beltRow.innerHTML = "<span class='belt-badge' style='background:" + b.color + ";color:" + b.text + "'>" + b.label + "</span>" + (state.profile.isJuvenil ? "<span class='juvenil-tag'>Juvenil</span>" : "");
    } else {
        beltRow.innerHTML = "<span class='no-belt'>Sem faixa definida - ajuste nos Ajustes.</span>";
    }

    const stats = allLessonsDone();
    const attended = state.log.filter(function(e) { return e.type === "went"; }).length;
    const missed = state.log.filter(function(e) { return e.type === "missed"; }).length;
    document.getElementById("statLessons").textContent = stats.done;
    document.getElementById("statAttended").textContent = attended;
    document.getElementById("statMissed").textContent = missed;
    document.getElementById("statStreak").textContent = computeStreak();

    const todayCard = document.getElementById("todayCard");
    const title = document.getElementById("todayTitle");
    const sub = document.getElementById("todaySub");
    const actions = document.getElementById("todayActions");

    const dayIdx = todayDayIndex();
    todayCard.style.display = "flex";
    if (isClassDay(dayIdx)) {
        title.textContent = "Hoje tem aula!";
        if (alreadyMarkedToday()) {
            const entry = state.log.filter(function(e) { return e.date === todayStr() && (e.type === "went" || e.type === "missed"); })[0];
            sub.textContent = entry.type === "went" ? "Registrado como presenca. Boa aula!" : "Ja registrado como falta. Forca na proxima!";
            actions.style.display = "none";
        } else {
            sub.textContent = "Aula com " + state.profile.professor + ". Como foi?";
            actions.style.display = "flex";
        }
    } else {
        title.textContent = "Hoje e dia de descanso";
        const next = nextClassDay(dayIdx);
        sub.textContent = "Sua proxima aula e " + DAY_NAMES[next] + ". Aproveite para revisar as posicoes!";
        actions.style.display = "none";
    }

    const pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
    document.getElementById("homeProgressFill").style.width = pct + "%";
    document.getElementById("homeProgressText").textContent = pct + "%";
    const label = document.getElementById("homeProgressLabel");
    if (label) label.textContent = state.profile.soloTraining ? "Treino solo" : "Curso de posicoes";

    const next = getNextLesson();
    const progressBar = document.getElementById("continueProgress");
    const doneCheck = document.getElementById("continueCheck");
    if (progressBar && next) {
        const doneInUnit = next.unit.lessons.filter(function(l) { return state.lessonsDone[l.id]; }).length;
        progressBar.style.width = Math.round((doneInUnit / next.unit.lessons.length) * 100) + "%";
    }
    if (next) {
        document.getElementById("nextLessonTitle").textContent = next.unit.title;
        document.getElementById("nextLessonText").textContent = next.lesson.title;
        document.getElementById("btnContinue").textContent = "Comecar licao";
        if (doneCheck) doneCheck.style.display = "none";
    } else {
        document.getElementById("nextLessonTitle").textContent = "Tudo concluido!";
        document.getElementById("nextLessonText").textContent = "Voce completou todas as " + (state.profile.soloTraining ? "licoes de treino solo" : "posicoes") + "!";
        document.getElementById("btnContinue").textContent = "Treinar de novo";
        if (doneCheck) doneCheck.style.display = "flex";
    }

    renderPath();
}

function nextClassDay(fromIdx) {
    for (let i = 1; i <= 7; i++) {
        const d = (fromIdx + i) % 7;
        if (isClassDay(d)) return d;
    }
    return fromIdx;
}

function renderUnits() {
    const container = document.getElementById("unitsContainer");
    const units = activeUnits();
    document.getElementById("learnTitle").innerHTML = units === SOLO_UNITS ? "Treino Solo <span>&#127968;</span>" : "Posicoes <span>&#129718;</span>";
    document.getElementById("learnSub").textContent = units === SOLO_UNITS ? "Treine sozinho em casa com drills de Jiu-Jitsu" : "Aprimore suas posicoes e complete as licoes";

    let html = "";
    if (units === SOLO_UNITS) {
        html += "<div class='solo-banner'><strong>&#127968; Modo Treino Solo</strong><span>Aqueça bem, respeite seus limites e treine num espaco seguro e livre.</span></div>";
    }
    const next = getNextLesson();
    units.forEach(function(unit, ui) {
        const doneCount = unit.lessons.filter(function(l) { return state.lessonsDone[l.id]; }).length;
        html += "<div class='unit-card'><div class='unit-head'><div class='unit-icon' style='background:" + unit.color + "22'>" + unit.icon + "</div><div><div class='unit-title'>" + unit.title + "</div><div class='unit-progress'>" + doneCount + "/" + unit.lessons.length + " licoes</div></div></div><div class='unit-lessons'>";
        unit.lessons.forEach(function(lesson, li) {
            const done = !!state.lessonsDone[lesson.id];
            const isNext = next && next.lesson.id === lesson.id;
            html += "<div class='lesson-row" + (done ? " completed" : "") + (isNext ? " next" : "") + "' data-unit='" + ui + "' data-lesson='" + li + "'>";
            html += "<div class='lesson-num'>" + (done ? "&#10003;" : (li + 1)) + "</div>";
            html += "<div class='lesson-info'><strong>" + lesson.title + "</strong><span>" + lesson.desc + "</span></div>";
            html += "<span class='lesson-check'>" + (done ? "&#10004;&#65039;" : "&#9654;&#65039;") + "</span>";
            html += "</div>";
        });
        html += "</div></div>";
    });

    /* Trilha 2 (teoria) */
    const t1stats = allLessonsDone();
    const t1Done = isTrail1Done();
    const tDone = theoryDone();
    const t1pct = t1stats.total ? Math.round((t1stats.done / t1stats.total) * 100) : 0;
    if (t1Done) {
        html += "<div class='theory-head'><div class='unit-icon unit-icon-lg' style='background:" + THEORY_UNIT.color + "22'>" + THEORY_UNIT.icon + "</div><div><div class='unit-title'>" + THEORY_UNIT.title + "</div><div class='unit-progress'>" + tDone + "/" + THEORY_UNIT.lessons.length + " teorias concluidas</div></div></div><div class='theory-grid'>";
        THEORY_UNIT.lessons.forEach(function(lesson, li) {
            const done = !!state.lessonsDone[lesson.id];
            const isNext = next && next.theory && next.lesson.id === lesson.id;
            html += "<div class='theory-card" + (done ? " completed" : "") + (isNext ? " next" : "") + "' data-theory='" + li + "'><div class='theory-card-ic' style='--tc:" + lesson.color + "'>" + lesson.icon + "</div><div class='theory-card-body'><strong>" + lesson.title + "</strong><span>" + (done ? "Concluida" : "Posicao +10 XP") + "</span></div><span class='lesson-check'>" + (done ? "&#10004;&#65039;" : "&#128214;") + "</span></div>";
        });
        html += "</div>";
    } else {
        html += "<div class='theory-locked'><div class='locked-ic'>&#128274;</div><div><div class='unit-title'>" + THEORY_UNIT.title + "</div><div class='unit-progress'>Complete as " + t1stats.total + " licoes para desbloquear" + (t1stats.done > 0 ? " (" + t1pct + "%)" : "") + "</div><div class='theory-lock-bar'><div class='theory-lock-fill' style='width:" + t1pct + "%'></div></div></div></div>";
    }

    container.innerHTML = html;

    container.querySelectorAll(".lesson-row").forEach(function(row) {
        row.addEventListener("click", function() {
            const ui = parseInt(row.dataset.unit, 10);
            const li = parseInt(row.dataset.lesson, 10);
            const unit = units[ui];
            const lesson = unit.lessons[li];
            openLesson(unit, lesson);
        });
    });

    container.querySelectorAll(".theory-card").forEach(function(card) {
        card.addEventListener("click", function() {
            const li = parseInt(card.dataset.theory, 10);
            openTheoryLesson(THEORY_UNIT.lessons[li]);
        });
    });
}

function renderHistory() {
    const list = document.getElementById("historyList");
    const empty = document.getElementById("historyEmpty");
    if (state.log.length === 0) {
        list.innerHTML = "";
        empty.style.display = "block";
        return;
    }
    empty.style.display = "none";
    const sorted = state.log.slice().reverse();
    let html = "";
    sorted.forEach(function(entry) {
        let icon, flag, label, cls;
        if (entry.type === "went") { icon = "&#9989;"; flag = "Presenca"; label = "Aula com " + state.profile.professor; cls = "went"; }
        else if (entry.type === "missed") { icon = "&#10060;"; flag = "Falta"; label = "Faltou a aula"; cls = "missed"; }
        else { icon = "&#10024;"; flag = "Recuperado"; label = "Vidas restauradas pela Coach IA"; cls = "recover"; }
        const dateLabel = formatDate(entry.date);
        html += "<div class='history-item " + cls + "'><div class='history-icon'>" + icon + "</div><div class='history-info'><strong>" + flag + "</strong><span>" + label + "</span></div><div class='history-flag'>" + dateLabel + "</div></div>";
    });
    list.innerHTML = html;
}

function formatDate(dateStr) {
    const parts = dateStr.split("-");
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    return DAY_NAMES_SHORT[d.getDay()] + " " + parts[2] + "/" + parts[1];
}

function beltChips(beltList, selectedLabel, containerId) {
    const container = document.getElementById(containerId);
    let html = "";
    beltList.forEach(function(b) {
        html += "<div class='belt-chip" + (b.label === selectedLabel ? " active" : "") + "' style='--belt-color:" + b.color + ";--belt-text:" + b.text + "' data-label='" + b.label + "'><span class='belt-chip-dot'></span>" + b.label + "</div>";
    });
    container.innerHTML = html;
    container.querySelectorAll(".belt-chip").forEach(function(chip) {
        chip.addEventListener("click", function() {
            container.querySelectorAll(".belt-chip").forEach(function(c) { c.classList.remove("active"); });
            chip.classList.add("active");
            const b = beltList.filter(function(x) { return x.label === chip.dataset.label; })[0];
            state.profile.belt = { label: b.label, color: b.color, text: b.text };
            saveState();
            renderHome();
        });
    });
}

function renderSettings() {
    document.getElementById("settingsAvatar").textContent = avatarInit(state.profile.name);
    document.getElementById("settingsProfileName").textContent = state.profile.name || "Aluno(a)";
    const b = state.profile.belt;
    document.getElementById("settingsProfileBelt").textContent = b ? b.label + (state.profile.isJuvenil ? " (Juvenil)" : "") : "Sem faixa definida";

    applyTheme((function() { try {
        const v = localStorage.getItem("bjjlingo_theme");
        if (v === "dark") return "dark";
        return "light";
    } catch (e) { return "light"; } })());

    document.getElementById("setName").value = state.profile.name;
    document.getElementById("setProf").value = state.profile.professor;

    const juv = document.querySelectorAll("#setJuvenil .seg-btn");
    juv.forEach(function(b) { b.classList.toggle("active", parseInt(b.dataset.val, 10) === (state.profile.isJuvenil ? 1 : 0)); });
    const mode = document.querySelectorAll("#setMode .seg-btn");
    mode.forEach(function(b) { b.classList.toggle("active", b.dataset.val === (state.profile.soloTraining ? "solo" : "partner")); });

    beltChips(belts(), state.profile.belt ? state.profile.belt.label : "", "setBelt");

    const sel = document.getElementById("daysSelector");
    let html = "";
    DAY_NAMES_SHORT.forEach(function(name, i) {
        const on = state.profile.days.includes(i);
        html += "<div class='day-chip" + (on ? " on" : "") + "' data-day='" + i + "'>" + name + "</div>";
    });
    sel.innerHTML = html;
    sel.querySelectorAll(".day-chip").forEach(function(chip) {
        chip.addEventListener("click", function() {
            const day = parseInt(chip.dataset.day, 10);
            const idx = state.profile.days.indexOf(day);
            if (idx >= 0) {
                if (state.profile.days.length > 1) state.profile.days.splice(idx, 1);
                else { showToast("Precisa de pelo menos 1 dia de aula"); return; }
                chip.classList.remove("on");
            } else {
                state.profile.days.push(day);
                state.profile.days.sort(function(a, b) { return a - b; });
                chip.classList.add("on");
            }
            saveState();
        });
    });
}

function render() {
    renderHearts();
    renderHome();
    renderUnits();
    renderHistory();
    renderSettings();
}

/* ---------- PRESENCA ---------- */

function markWent() {
    state.log.push({ date: todayStr(), type: "went", day: todayDayIndex() });
    state.xp += 20;
    if (state.hearts < state.maxHearts) state.hearts++;
    saveState();
    render();
    showToast("Presenca registrada! +20 XP" + (state.hearts < 5 ? " e +1 vida" : ""));
    setTimeout(function() { window.scrollTo({ top: 0, behavior: "smooth" }); }, 50);
}

function markMissed() {
    state.log.push({ date: todayStr(), type: "missed", day: todayDayIndex() });
    state.hearts--;
    saveState();
    render();

    if (state.hearts <= 0) {
        showToast("Quebra total! A Coach IA quer falar com voce...");
        document.getElementById("todayCard").classList.add("shake");
        setTimeout(function() {
            document.getElementById("todayCard").classList.remove("shake");
            openAiModal();
        }, 600);
    } else {
        showToast("Falta registrada! -1 vida");
        document.getElementById("hearts").classList.add("shake");
        setTimeout(function() { document.getElementById("hearts").classList.remove("shake"); }, 500);
    }
}

/* ---------- LICAO + AVISO ---------- */

function openLesson(unit, lesson) {
    if (!state.profile.disclaimerSeen) {
        pendingLesson = { unit: unit, lesson: lesson };
        document.getElementById("disclaimerModal").classList.add("open");
        return;
    }
    openLessonContent(unit, lesson);
}

function openLessonContent(unit, lesson) {
    document.getElementById("lessonIcon").innerHTML = unit.icon;
    document.getElementById("lessonUnitTitle").textContent = unit.title;
    document.getElementById("lessonTitle").textContent = lesson.title;
    document.getElementById("lessonDesc").textContent = lesson.desc;

    const videoWrapper = document.getElementById("videoWrapper");
    const note = document.getElementById("videoNote");
    const done = !!state.lessonsDone[lesson.id];

    videoWrapper.innerHTML = '<div class="video-placeholder" id="videoPlaceholder"><div class="play-btn">&#9654;&#65039;</div><div class="vid-title">Assistir: ' + lesson.title + '</div><div class="vid-sub">Video do YouTube</div></div>';
    document.getElementById("videoPlaceholder").addEventListener("click", function() {
        videoWrapper.innerHTML = '<iframe src="https://www.youtube.com/embed/' + lesson.videoId + '?autoplay=1" title="' + lesson.title + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    });

    note.style.display = done ? "none" : "block";
    note.innerHTML = 'Assista ao video abaixo e depois marque como concluida. <span style="display:block;margin-top:6px"><a class="video-action-btn youtube" href="https://www.youtube.com/watch?v=' + lesson.videoId + '" target="_blank" rel="noopener">&#9654;&#65039; Abrir no YouTube</a></span>';

    const btn = document.getElementById("btnCompleteLesson");
    btn.textContent = done ? "Ja concluida - Fechar" : "Concluir licao (+10 XP)";
    btn.onclick = function() {
        if (!state.lessonsDone[lesson.id]) {
            state.lessonsDone[lesson.id] = true;
            state.xp += 10;
            saveState();
            render();
            showToast("Licao concluida! +10 XP");
        }
        closeLesson();
    };

    document.getElementById("lessonModal").classList.add("open");
}

function closeLesson() {
    document.getElementById("lessonModal").classList.remove("open");
}

function openTheoryLesson(item) {
    const lesson = item.unit ? item.lesson : item;
    const unit = item.unit ? item.unit : THEORY_UNIT;
    document.getElementById("theoryUnitTitle").textContent = unit.title;
    document.getElementById("theoryTitle").textContent = lesson.title;
    document.getElementById("theoryIcon").innerHTML = lesson.icon;
    const imgEl = document.getElementById("theoryImg");
    imgEl.innerHTML = lesson.photo
        ? "<img class='tb-photo' src='" + lesson.photo + "' alt='" + lesson.title + "' loading='lazy'>" + lesson.img + "<p class='tb-credit'>Foto: Wikipedia / Wikimedia Commons (CC BY-SA)</p>"
        : lesson.img;
    const textEl = document.getElementById("theoryText");
    textEl.innerHTML = "";
    String(lesson.text).split("\n\n").forEach(function(p) {
        const par = document.createElement("p");
        par.textContent = p;
        textEl.appendChild(par);
    });
    const tipsEl = document.getElementById("theoryTips");
    tipsEl.innerHTML = "";
    lesson.tips.forEach(function(tip) {
        const li = document.createElement("li");
        li.textContent = tip;
        tipsEl.appendChild(li);
    });
    const block = document.getElementById("theoryBlock");
    if (block) {
        document.getElementById("theoryBlockLabel").textContent = "Dicas para lembrar no treino:";
        block.style.display = "block";
    }
    const btn = document.getElementById("btnCompleteTheory");
    const done = !!state.lessonsDone[lesson.id];
    btn.textContent = done ? "Ja concluida - Fechar" : "Concluir teoria (+10 XP)";
    btn.onclick = function() {
        if (!state.lessonsDone[lesson.id]) {
            state.lessonsDone[lesson.id] = true;
            state.xp += 10;
            saveState();
            render();
            showToast("Teoria concluida! +10 XP");
        }
        closeTheoryLesson();
    };
    document.getElementById("theoryModal").classList.add("open");
}

function closeTheoryLesson() {
    document.getElementById("theoryModal").classList.remove("open");
}

function showToast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._timer);
    t._timer = setTimeout(function() { t.classList.remove("show"); }, 2600);
}

/* ---------- ONBOARDING ---------- */

function renderOnboard() {
    document.querySelectorAll(".ob-step").forEach(function(s) {
        s.classList.toggle("active", parseInt(s.dataset.step, 10) === ob.step);
    });
    document.querySelectorAll(".ob-pane").forEach(function(p) {
        p.classList.toggle("active", parseInt(p.dataset.pane, 10) === ob.step);
    });
    const btn = document.getElementById("btnOnboardNext");
    if (ob.step === 4) btn.textContent = "Finalizar";
    else if (ob.step === 2 || ob.step === 3) btn.textContent = "Continuar";
    else btn.textContent = "Continuar";
}

function onboardAdvance() {
    if (ob.step === 1) {
        ob.step = 2;
    } else if (ob.step === 2) {
        if (!ob.age) { showToast("Escolha: voce e juvenil ou adulto?"); return; }
        renderObBelts();
        ob.step = 3;
    } else if (ob.step === 3) {
        if (!ob.belt) { showToast("Selecione sua faixa"); return; }
        ob.step = 4;
    } else if (ob.step === 4) {
        if (!ob.mode) { showToast("Escolha como voce vai treinar"); return; }
        state.profile.name = document.getElementById("obName").value.trim() || "Aluno";
        state.profile.professor = document.getElementById("obProf").value.trim() || "Professor";
        state.profile.isJuvenil = ob.age === "juvenil";
        state.profile.belt = ob.belt;
        state.profile.soloTraining = ob.mode === "solo";
        saveState();
        document.getElementById("onboardModal").classList.remove("open");
        render();
        showToast("Bem-vindo, " + state.profile.name + "! Bora treinar!");
        if (state.hearts <= 0) setTimeout(function() { openAiModal(); }, 800);
        return;
    }
    renderOnboard();
}

function renderObBelts() {
    const list = ob.age === "juvenil" ? BELTS_JUVENIL : BELTS_ADULT;
    const container = document.getElementById("obBelts");
    let html = "";
    list.forEach(function(b) {
        html += "<div class='belt-chip' style='--belt-color:" + b.color + ";--belt-text:" + b.text + "' data-label='" + b.label + "'><span class='belt-chip-dot'></span>" + b.label + "</div>";
    });
    container.innerHTML = html;
    container.querySelectorAll(".belt-chip").forEach(function(chip) {
        chip.addEventListener("click", function() {
            container.querySelectorAll(".belt-chip").forEach(function(c) { c.classList.remove("active"); });
            chip.classList.add("active");
            const b = list.filter(function(x) { return x.label === chip.dataset.label; })[0];
            ob.belt = { label: b.label, color: b.color, text: b.text };
        });
    });
}

function bindOnboardOption(btn) {
    btn.addEventListener("click", function() {
        const sel = btn.closest(".big-options");
        sel.querySelectorAll(".big-opt").forEach(function(o) { o.classList.remove("selected"); });
        btn.classList.add("selected");
        if (btn.dataset.age) ob.age = btn.dataset.age;
        if (btn.dataset.mode) ob.mode = btn.dataset.mode;
    });
}

/* ---------- AI CHAT ---------- */

function openAiModal() {
    aiFlow = { step: 0 };
    const body = document.getElementById("chatBody");
    body.innerHTML = "";
    document.getElementById("aiModal").classList.add("open");
    const name = state.profile.name || "campeao";
    const missedCount = state.log.filter(function(e) { return e.type === "missed"; }).length;
    aiSay("Ei, " + name + "... percebi que voce faltou " + missedCount + " vez(es) nas aulas. Tudo bem? O que aconteceu com voce?", [
        "Fiquei doente",
        "Trabalho / estudo",
        "Cansado, sem energia",
        "Aconteceu algo pessoal"
    ]);
}

function aiSay(text, chips) {
    const body = document.getElementById("chatBody");
    const typing = document.createElement("div");
    typing.className = "msg ai typing";
    typing.innerHTML = "<span></span><span></span><span></span>";
    body.appendChild(typing);
    body.scrollTop = body.scrollHeight;

    const renderMsg = function() {
        typing.remove();
        const msg = document.createElement("div");
        msg.className = "msg ai pop-in";
        msg.textContent = text;
        body.appendChild(msg);
        body.scrollTop = body.scrollHeight;
        if (chips && chips.length) {
            const chipRow = document.createElement("div");
            chipRow.className = "chips";
            chips.forEach(function(c) {
                const b = document.createElement("button");
                b.className = "chip-btn";
                b.textContent = c;
                b.addEventListener("click", function() { handleNext(c); });
                chipRow.appendChild(b);
            });
            body.appendChild(chipRow);
            body.scrollTop = body.scrollHeight;
        }
    };

    setTimeout(renderMsg, 900 + Math.min(700, text.length * 12));
}

function userSay(text) {
    const body = document.getElementById("chatBody");
    document.querySelectorAll(".chips").forEach(function(c) { c.remove(); });
    const msg = document.createElement("div");
    msg.className = "msg user pop-in";
    msg.textContent = text;
    body.appendChild(msg);
    body.scrollTop = body.scrollHeight;
}

function classify(text) {
    const t = text.toLowerCase();
    if (t.indexOf("doente") >= 0 || t.indexOf("gripe") >= 0 || t.indexOf("febre") >= 0 || t.indexOf("ruim") >= 0) return "sick";
    if (t.indexOf("les") >= 0 || t.indexOf("joelho") >= 0 || t.indexOf("dor") >= 0 || t.indexOf("machuc") >= 0) return "injury";
    if (t.indexOf("trabalho") >= 0 || t.indexOf("facul") >= 0 || t.indexOf("estudo") >= 0 || t.indexOf("prova") >= 0 || t.indexOf("servico") >= 0 || t.indexOf("emprego") >= 0) return "work";
    if (t.indexOf("cansa") >= 0 || t.indexOf("pregui") >= 0 || t.indexOf("sem energia") >= 0 || t.indexOf("sem vontade") >= 0 || t.indexOf("desmotiv") >= 0) return "lazy";
    if (t.indexOf("familia") >= 0 || t.indexOf("filho") >= 0 || t.indexOf("pessoal") >= 0 || t.indexOf("problema") >= 0 || t.indexOf("aconteceu") >= 0) return "personal";
    return "other";
}

function userReply(text) {
    userSay(text);
    const reason = classify(text);

    setTimeout(function() {
        let msg1 = "";
        if (reason === "sick") msg1 = "Nossa, sinto muito! Sua saude vem primeiro, e meus amigos jiu-jiteiros que faltaram por doenca sempre voltaram com tudo. Espero que voce melhore rapido!";
        else if (reason === "injury") msg1 = "Lesao e serio, hein. Nada de voltar antes da hora. No jiu-jitsu quem respeita o corpo dura mais no esporte.";
        else if (reason === "work") msg1 = "Te entendo! Correria de trabalho/estudo derruba a energia de qualquer um. A dica e marcar a aula como prioridade na agenda, tipo um compromisso sagrado.";
        else if (reason === "lazy") msg1 = "Isso e normal, todo mundo tem dias de falta de energia. O segredo e nem pensar: coloca o kimono e vai. Depois da primeira chamada de calor, a energia volta.";
        else if (reason === "personal") msg1 = "Forca! A vida acontece e o importante e nunca desistir de voce mesmo. O tatame vai estar aqui te esperando quando voce estiver pronto.";
        else msg1 = "Te entendo... e super valido dar um tempo quando a cabeca ta cheia. Pode desabafar comigo, estou aqui pra isso.";

        aiSay(msg1, ["Vou voltar essa semana", "Preciso de um tempo", "To precisando de motivacao"]);
        aiFlow.step = 1;
    }, 700 + Math.random() * 500);
}

function finishAi() {
    if (aiFlow && aiFlow.done) return;
    aiFlow.done = true;
    const name = state.profile.name || "campeao";
    aiSay("Beleza, " + name + "! Ninguem merece treinar de vidas zeradas. Vou te dar uma forca: restaurei suas 5 vidas. Vai com calma, um passo de cada vez. Eu acredito em voce!");
    setTimeout(function() {
        state.hearts = state.maxHearts;
        state.aiConversations++;
        state.log.push({ date: todayStr(), type: "recover" });
        saveState();
        render();
        setTimeout(function() {
            document.getElementById("aiModal").classList.remove("open");
            showToast("Vidas restauradas! A Coach IA acredita em voce");
        }, 1400);
    }, 1200 + Math.random() * 600);
}

function handleNext(text) {
    if (!aiFlow) return;
    if (aiFlow.step === 1) {
        const reason2 = classify(text);
        let msg2 = "";
        if (reason2 === "lazy") msg2 = "Entao bora quebrar esse gelo! Uma dica de ouro: viu o dia de aula no calendario? Ja marca treino. Depois que a rotina pega, a vontade vem junto.";
        else if (reason2 === "personal") msg2 = "Respira fundo. O tatame faz milagres pela cabeca. Quando estiver pronto pra voltar, eu te espero com as vidas cheias. Fechado?";
        else msg2 = "Pode contar comigo! Combinado entao: sem pressao, um passo de cada vez. O importante e nao desistir.";
        aiSay(msg2);
        aiFlow.step = 2;
        finishAi();
    } else if (aiFlow.step === 0) {
        userReply(text);
    } else {
        finishAi();
    }
}

/* ---------- INICIALIZACAO ---------- */

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".nav-btn").forEach(function(btn) {
        btn.addEventListener("click", function() { setPage(btn.dataset.page); });
    });

    document.getElementById("btnWent").addEventListener("click", markWent);
    document.getElementById("btnMissed").addEventListener("click", markMissed);
    document.getElementById("btnContinue").addEventListener("click", function() {
        const next = getNextLesson();
        if (!next) showToast("Parabens! Voce dominou tudo!");
        else if (next.theory) openTheoryLesson(next);
        else openLesson(next.unit, next.lesson);
    });

    /* Login */
    document.getElementById("btnLogin").addEventListener("click", function() {
        const user = document.getElementById("loginUser").value.trim();
        const pass = document.getElementById("loginPass").value;
        const err = login(user, pass);
        const errorEl = document.getElementById("loginError");
        if (err) { errorEl.textContent = err; return; }
        errorEl.textContent = "";
        document.getElementById("loginUser").value = "";
        document.getElementById("loginPass").value = "";
        state = loadState();
        showLoginScreen();
        render();
        if (state.hearts <= 0) setTimeout(function() { openAiModal(); }, 800);
    });

    document.getElementById("btnCreateAccount").addEventListener("click", function() {
        const user = document.getElementById("loginUser").value.trim();
        const pass = document.getElementById("loginPass").value;
        const err = createAccount(user, pass);
        const errorEl = document.getElementById("loginError");
        if (err) { errorEl.textContent = err; return; }
        errorEl.textContent = "";
        document.getElementById("loginUser").value = "";
        document.getElementById("loginPass").value = "";
        state = loadState();
        ob = { age: null, belt: null, mode: null, step: 1 };
        renderOnboard();
        renderObBelts();
        document.getElementById("onboardModal").classList.add("open");
    });

    document.getElementById("loginPass").addEventListener("keydown", function(e) {
        if (e.key === "Enter") document.getElementById("btnLogin").click();
    });

    document.getElementById("btnGoogle").addEventListener("click", handleGoogleClick);
    document.getElementById("btnGoogleSetupClose").addEventListener("click", function() {
        document.getElementById("googleSetupModal").classList.remove("open");
    });
    document.getElementById("btnGoogleSetupOk").addEventListener("click", function() {
        document.getElementById("googleSetupModal").classList.remove("open");
    });

    /* Onboarding */
    document.getElementById("btnOnboardNext").addEventListener("click", onboardAdvance);
    document.querySelectorAll(".big-opt").forEach(bindOnboardOption);

    /* Aviso de seguranca */
    document.getElementById("btnDisclaimerOk").addEventListener("click", function() {
        state.profile.disclaimerSeen = true;
        saveState();
        document.getElementById("disclaimerModal").classList.remove("open");
        if (pendingLesson) {
            const p = pendingLesson;
            pendingLesson = null;
            openLessonContent(p.unit, p.lesson);
        }
    });

    /* Lessons modal */
    document.getElementById("btnLessonClose").addEventListener("click", closeLesson);
    document.getElementById("lessonModal").addEventListener("click", function(e) { if (e.target === this) closeLesson(); });

    /* Theory modal */
    document.getElementById("btnTheoryClose").addEventListener("click", closeTheoryLesson);
    document.getElementById("theoryModal").addEventListener("click", function(e) { if (e.target === this) closeTheoryLesson(); });

    /* Busca */
    document.getElementById("searchInput").addEventListener("input", function() {
        renderSearch(this.value.trim());
    });

    /* Settings */
    document.getElementById("btnSaveSettings").addEventListener("click", function() {
        state.profile.name = document.getElementById("setName").value.trim() || "Aluno";
        state.profile.professor = document.getElementById("setProf").value.trim() || "Professor";
        saveState();
        render();
        showToast("Configuracao salva!");
    });

    document.getElementById("btnLogout").addEventListener("click", logout);

    document.getElementById("btnReset").addEventListener("click", function() {
        if (confirm("Tem certeza que quer zerar todo o progresso?")) {
            const keepProfile = state.profile;
            state = JSON.parse(JSON.stringify(DEFAULT_STATE));
            state.profile = keepProfile;
            saveState();
            render();
            showToast("Progresso zerado");
        }
    });

    document.getElementById("setJuvenil").addEventListener("click", function(e) {
        const btn = e.target.closest(".seg-btn");
        if (!btn) return;
        state.profile.isJuvenil = parseInt(btn.dataset.val, 10) === 1;
        if (state.profile.belt && !belts().some(function(b) { return b.label === state.profile.belt.label; })) {
            state.profile.belt = { label: belts()[0].label, color: belts()[0].color, text: belts()[0].text };
        }
        saveState();
        render();
    });

    document.getElementById("setMode").addEventListener("click", function(e) {
        const btn = e.target.closest(".seg-btn");
        if (!btn) return;
        state.profile.soloTraining = btn.dataset.val === "solo";
        saveState();
        render();
        showToast(state.profile.soloTraining ? "Modo Treino Solo ativado" : "Modo Treino com Parceiro ativado");
    });

    document.getElementById("setTheme").addEventListener("click", function(e) {
        const btn = e.target.closest(".seg-btn");
        if (!btn) return;
        applyTheme(btn.dataset.val);
        renderSettings();
        showToast(btn.dataset.val === "dark" ? "Modo escuro ativado" : "Modo claro ativado");
    });

    /* AI chat */
    document.getElementById("btnChatSend").addEventListener("click", function() {
        const input = document.getElementById("chatInput");
        const text = input.value.trim();
        if (!text) return;
        input.value = "";
        handleNext(text);
    });

    document.getElementById("chatInput").addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            const text = this.value.trim();
            if (!text) return;
            this.value = "";
            handleNext(text);
        }
    });

    state = loadState();
    renderOnboard();
    showLoginScreen();
    render();
    setupGoogleButton();

    if (isLoggedIn() && state.hearts <= 0) {
        setTimeout(function() { openAiModal(); }, 800);
    }
});