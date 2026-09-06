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
    const h = '<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
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
        if (next) openLesson(next.unit, next.lesson);
        else showToast("Parabens! Voce dominou tudo!");
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