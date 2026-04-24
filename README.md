<div align="center">

# 🟢 SORT//VIS

<pre>
+--------------------------------------------------------------+
|              SORT//VIS :: RETRO SORTING LAB                  |
| STATUS  : ONLINE                                             |
| STACK   : HTML / CSS / JAVASCRIPT                            |
| MODE    : ZERO BUILD STEP                                    |
| DISPLAY : CRT-STYLE CANVAS VISUALIZER                        |
| CONTROL : START / PAUSE / STEP / HALT / RESET                |
+--------------------------------------------------------------+
</pre>

### 🧠 Retro sorting visualizer built with Vanilla JS, Canvas and step-by-step execution.

![HTML5](https://img.shields.io/badge/HTML5-111?style=for-the-badge&logo=html5&logoColor=E34F26)
![CSS3](https://img.shields.io/badge/CSS3-111?style=for-the-badge&logo=css3&logoColor=1572B6)
![JavaScript](https://img.shields.io/badge/JavaScript-111?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Canvas](https://img.shields.io/badge/Canvas-111?style=for-the-badge&logo=javascript&logoColor=39FF14)
![Playwright](https://img.shields.io/badge/Playwright-111?style=for-the-badge&logo=playwright&logoColor=45BA4B)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-111?style=for-the-badge&logo=githubactions&logoColor=2088FF)

![License](https://img.shields.io/badge/License-MIT-39FF14?style=flat-square)
![Status](https://img.shields.io/badge/status-online-39FF14?style=flat-square)
![Build](https://img.shields.io/badge/build-zero_step-00E5FF?style=flat-square)
![Portfolio](https://img.shields.io/badge/portfolio-ready-FFB700?style=flat-square)
![i18n](https://img.shields.io/badge/i18n-EN%20%7C%20PT--BR-FF5CF0?style=flat-square)

</div>

---

## 🖼️ Preview

<div align="center">

<img src="docs/screenshots/sortvis-preview-en.png" width="100%" />

<p><em>🇺🇸 English interface</em></p>

<br/>

<img src="docs/screenshots/sortvis-preview-ptbr.png" width="100%" />

<p><em>🇧🇷 Interface em português do Brasil</em></p>

<br/>

<p>
<strong>🌐 Built-in Internationalization (i18n)</strong><br/>
Dynamic language switching with instant UI updates and local persistence.
</p>

</div>

---

## 🧠 Sobre o projeto

SORT//VIS é um laboratório visual de algoritmos de ordenação com estética CRT.

Mais do que animação, ele expõe:

- comparações
- trocas
- leituras/escritas
- tempo de execução
- comportamento interno dos algoritmos

---

## ✨ Destaques

- 🟢 UI estilo terminal CRT
- 🧮 13 algoritmos
- ⏭️ Execução passo a passo
- 📊 Telemetria completa
- 🌐 i18n integrado
- 🧪 Testes automatizados
- ⚡ Zero build

---

## 🌐 Arquitetura de Internacionalização (i18n)

Sistema leve e sem dependências externas.

### Estrutura

```javascript
const I18N = {
  en: {...},
  pt: {...}
}
```

### Troca de idioma

```javascript
function setLocale(locale) {
  currentLocale = locale;
  localStorage.setItem('sortvis-locale', locale);
  updateStaticText();
}
```

### Persistência

```javascript
localStorage.setItem('sortvis-locale', locale);
```

### UI reativa

- Atualização dinâmica via DOM
- Sem reload
- Telemetria sincronizada

### Traduções dinâmicas

```javascript
function localizePhrase(message) {
  // suporte a textos dinâmicos
}
```

### Decisões

- Sem libs externas
- Performance previsível
- Controle total

---

## 🚀 Executar

```bash
npm install
node scripts/ci-check.js
npm run test:e2e
```

ou:

```bash
open index.html
```

---

## 📄 Licença

MIT
