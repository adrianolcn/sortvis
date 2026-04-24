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

### Visualizador retro de algoritmos de ordenação com JavaScript puro, Canvas, estética CRT e execução passo a passo.

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

<a href="#-demo">Demo</a> •
<a href="#-preview">Preview</a> •
<a href="#-sobre-o-projeto">Sobre</a> •
<a href="#-algoritmos">Algoritmos</a> •
<a href="#-como-executar">Executar</a> •
<a href="#-testes-e-qualidade">Testes</a> •
<a href="#-deploy-no-github-pages">Deploy</a>

</div>

---

## 🎬 Demo

<div align="center">

https://github.com/user-attachments/assets/docs/demo/sortvis-demo.mp4

</div>

> O arquivo de demonstração também pode ficar no repositório em `docs/demo/sortvis-demo.mp4`.  
> Para o GitHub exibir vídeo diretamente no README, a forma mais confiável é arrastar o `.mp4` em uma issue, PR ou release, copiar o link gerado `https://github.com/user-attachments/assets/...` e substituir o placeholder acima.

---

## 🖼️ Preview

<div align="center">

## 🌍 Interface Preview

<p>
  <img src="docs/screenshots/sortvis-preview-en.png" alt="SORT//VIS - English UI" width="49%" />

  <img src="docs/screenshots/sortvis-preview-ptbr.png" alt="SORT//VIS - PT-BR UI" width="49%" />
</p>

<p>
  <em>🇺🇸 English</em> &nbsp;&nbsp;•&nbsp;&nbsp; <em>🇧🇷 Português (Brasil)</em>
</p>

</div>
---

## 🧠 Sobre o projeto

O **SORT//VIS** é uma aplicação front-end de página única criada para visualizar algoritmos de ordenação em tempo real, com uma estética inspirada em monitores antigos, terminais retrô e interfaces CRT.

A proposta não é apenas mostrar barras se movendo. O projeto funciona como um laboratório visual de algoritmos, permitindo observar comparações, trocas, leituras, escritas, tempo de execução, progresso e comportamento interno de cada estratégia de ordenação.

Ele foi desenvolvido com foco em:

- execução didática dos algoritmos;
- responsividade para desktop e mobile;
- controles reais de execução;
- internacionalização entre inglês e português;
- validação automatizada e CI.

---

## ✨ Destaques

<table>
  <tr>
    <td><strong>🟢 Visual CRT</strong></td>
    <td>Interface inspirada em terminais antigos, com glow, scanlines, HUD e aparência de laboratório retro.</td>
  </tr>
  <tr>
    <td><strong>🧮 13 algoritmos</strong></td>
    <td>Inclui algoritmos simples, avançados, comparativos, de divisão e conquista e de distribuição.</td>
  </tr>
  <tr>
    <td><strong>⏭️ Step-by-step</strong></td>
    <td>Permite iniciar, pausar, avançar uma operação por vez, interromper e resetar a execução.</td>
  </tr>
  <tr>
    <td><strong>📊 Telemetria</strong></td>
    <td>Exibe comparações, trocas, leituras, escritas, tempo decorrido, progresso e posições ordenadas.</td>
  </tr>
  <tr>
    <td><strong>🌐 i18n</strong></td>
    <td>Alternância de idioma entre inglês e português do Brasil com persistência local.</td>
  </tr>
  <tr>
    <td><strong>🧪 Testes</strong></td>
    <td>Inclui validação estrutural, testes E2E com Playwright e pipeline com GitHub Actions.</td>
  </tr>
  <tr>
    <td><strong>⚡ Zero build</strong></td>
    <td>Projeto estático em HTML, CSS e JavaScript puro. Sem framework, sem bundler, sem etapa de build.</td>
  </tr>
</table>

---

## 🎮 Controles

| Controle | Função |
|---|---|
| **Start** | Inicia a execução do algoritmo selecionado. |
| **Pause** | Pausa a execução atual sem perder o estado. |
| **Step** | Avança uma única operação do algoritmo. |
| **Halt** | Interrompe a execução em andamento. |
| **Reset** | Gera novamente o conjunto de dados. |

### ⌨️ Atalhos

| Tecla | Ação |
|---|---|
| `Space` | Iniciar ou pausar |
| `S` | Avançar um passo |
| `H` | Interromper execução |
| `Esc` | Interromper execução |
| `R` | Resetar dataset |

---

## 🧩 Algoritmos

| Algoritmo | Categoria | Tempo | Espaço | Estável |
|---|---:|---:|---:|---:|
| Bubble Sort | Troca | O(n²) | O(1) | Sim |
| Cocktail Shaker Sort | Troca bidirecional | O(n²) | O(1) | Sim |
| Selection Sort | Seleção | O(n²) | O(1) | Não |
| Insertion Sort | Inserção | O(n²) | O(1) | Sim |
| Gnome Sort | Troca | O(n²) | O(1) | Sim |
| Comb Sort | Troca com gap | O(n²) médio | O(1) | Não |
| Merge Sort | Divisão e conquista | O(n log n) | O(n) | Sim |
| Quick Sort | Divisão e conquista | O(n log n) médio | O(log n) | Não |
| Heap Sort | Heap | O(n log n) | O(1) | Não |
| Shell Sort | Inserção com gap | O(n log² n) | O(1) | Não |
| Odd-Even Sort | Troca paralelizável | O(n²) | O(1) | Sim |
| Counting Sort | Distribuição | O(n + k) | O(k) | Sim |
| Radix Sort (LSD) | Distribuição | O(d · (n + b)) | O(n + b) | Sim |

---

## 📦 Datasets disponíveis

O visualizador permite testar os algoritmos em diferentes cenários:

- **Random** — valores distribuídos aleatoriamente;
- **Nearly Sorted** — vetor quase ordenado;
- **Reversed** — vetor em ordem inversa;
- **Few Unique** — poucos valores únicos repetidos;
- **Organ Pipe** — valores crescem até o centro e depois decrescem;
- **Sawtooth** — padrão repetitivo em formato de serra.

---

## 🌐 Internacionalização

O SORT//VIS possui alternância de idioma integrada:

- 🇺🇸 English
- 🇧🇷 Português do Brasil

A preferência do usuário é armazenada localmente com `localStorage`, permitindo que o idioma escolhido seja preservado ao reabrir a aplicação.

---

## 🛠️ Tecnologias

```text
HTML5
CSS3
JavaScript
Canvas API
Playwright
GitHub Actions
GitHub Pages
```

---

## 🚀 Como executar

```bash
npm install
node scripts/ci-check.js
npm run test:e2e
```

Para abrir diretamente no navegador:

```bash
open index.html
```

No Windows, você também pode abrir o arquivo `index.html` com duplo clique ou usar:

```bash
start index.html
```

---

## 🧪 Testes e qualidade

O repositório inclui:

- validação estrutural em `scripts/ci-check.js`;
- testes smoke E2E com Playwright;
- fluxo de CI com GitHub Actions;
- verificação de controles principais;
- checagem de metadados dos algoritmos;
- guardrails de layout mobile;
- interação real em navegador desktop e mobile.

---

## 🌍 Deploy no GitHub Pages

Este projeto é estático e pode ser publicado diretamente no GitHub Pages:

1. Faça push do repositório para o GitHub.
2. Acesse **Settings > Pages**.
3. Selecione a branch que contém o `index.html`.
4. Publique a partir da raiz do repositório.

---

## 📁 Estrutura sugerida

```text
SORT-VIS/
├── index.html
├── README.md
├── docs/
│   ├── demo/
│   │   └── sortvis-demo.mp4
│   └── screenshots/
│       ├── sortvis-preview-en.png
│       └── sortvis-preview-ptbr.png
├── scripts/
│   └── ci-check.js
├── tests/
│   └── smoke.spec.js
└── .github/
    └── workflows/
        └── ci.yml
```

---

## 💡 Descrição curta para o GitHub

```text
Retro sorting visualizer built with vanilla JS, Canvas, CRT aesthetics, i18n, telemetry and step-by-step execution controls.
```

---

## 📄 Licença

Distribuído sob licença **MIT**.

<div align="center">

---

<strong>SORT//VIS</strong> — feito para transformar algoritmos em experiência visual.

</div>
