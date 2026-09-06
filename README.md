<div align="center">

# 🥋 BJJLingo

### Seu Duolingo de Jiu-Jitsu Brasileiro

Um aplicativo web para estudar Jiu-Jitsu com lições em vídeo, sistema de vidas, XP
e um coach pessoal que não te deixa desistir — mesmo quando a vida zerar.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

**Status:** 📡 No ar pelo GitHub Pages

> ### ⚠️ Versão de Teste
> Este app está em **fase de testes** e evolução constante. Se encontrar algum
> problema ou tiver uma sugestão, sua ajuda é muito bem-vinda!

> ### 🧠 Como este projeto foi feito
> O BJJLingo teve **grande parte do desenvolvimento feita com ajuda de IA**,
> mas também teve bastante trabalho manual meu: idealização, decisões de
> funcionalidades, escolha das posições e lições, conteúdo e acompanhamento
> de todo o processo de criação e publicação.

---

## 🤝 Ajude o projeto

> **Sobre o desenvolvedor:** Sou **estudante** e estou desenvolvendo o BJJLingo
> para aprender e criar algo útil para a comunidade do Jiu-Jitsu. Toda ajuda
> financeira é usada para manter o projeto no ar e evoluir o app.

🔗 **Link da vaquinha:** *em breve (aguardando configuração)*

---

## 🚀 Acesso rápido

Abra no seu celular ou computador:

```
https://bfdbdbdbd.github.io/bjjlingo/
```

</div>

---

## ✨ Funcionalidades

<table>
<tr>
<td>

- 🎬 **Lições em vídeo** — posições reais (montada, guarda, lateral, costas, meia-guarda, joelho na barriga) com vídeos do YouTube
- ❤️ **Sistema de vidas** — 5 corações estilo Duolingo; falte à aula e perca vidas
- 🤖 **Coach IA** — quando as vidas zeram, um coach pessoal conversa com você e dá um incentivo (e restaura suas vidas)
- ⚡ **XP e sequência** — pontos por lição e por presença, com streak de foguinho

</td>
<td>

- 🏠 **Modo Treino Solo** — treine sozinho em casa com drills de Jiu-Jitsu
- 🥋 **Níveis e faixas** — escolha entre faixas de juvenil e adulto (IBJJF)
- 📅 **Controle de presenças** — marque "fui à aula" ou "faltei" nos dias de treino
- 🔐 **Login** — crie conta por usuário/senha ou conecte com sua conta Google
- ⚠️ **Aviso de segurança** — lembrete importante na primeira lição

</td>
</tr>
</table>

---

## 📂 Estrutura do projeto

```
bjjlingo/
├── index.html        → estrutura do app (telas, modais, login)
├── styles.css        → tema claro estilo Duolingo
├── script.js         → toda a lógica (estado, lições, chat IA, contas)
├── privacidade.html  → política de privacidade (requisito do Google OAuth)
└── termos.html       → termos de serviço (requisito do Google OAuth)
```

---

## 🛠️ Como rodar localmente

Nada de instalação. Você só precisa de um navegador:

```bash
# opção 1: abra direto o index.html
index.html

# opção 2: sirva com um servidor simples (recomendado p/ login Google)
python -m http.server 8000
# depois abra http://localhost:8000
```

---

## 👨‍👩‍👧 Créditos dos vídeos

As lições usam vídeos educativos de canais respeitados da comunidade de BJJ,
como Stephan Kesting, Chewjitsu, Cobrinha e outros. Todos os créditos vão para
os criadores originais no YouTube.

---

## 🔒 Privacidade

Seus dados de progresso ficam **somente no seu navegador** (localStorage) e não
são enviados para nenhum servidor. Saiba mais:

- [Política de Privacidade](https://bfdbdbdbd.github.io/bjjlingo/privacidade.html)
- [Termos de Serviço](https://bfdbdbdbd.github.io/bjjlingo/termos.html)

---

<div align="center">

**Oss!** 🥋 *Programado com disciplina, como Jiu-Jitsu.*

</div>