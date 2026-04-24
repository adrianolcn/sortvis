# <div align="center">🟢 SORT//VIS</div>

<div align="center">

```text
+--------------------------------------------------------------+
| SORT//VIS :: RETRO SORTING LAB                               |
| STATUS  : ONLINE                                             |
| STACK   : HTML / CSS / JAVASCRIPT                            |
| MODE    : ZERO BUILD STEP                                    |
| DISPLAY : CRT-STYLE CANVAS VISUALIZER                        |
| CONTROL : START / PAUSE / STEP / HALT / RESET                |
+--------------------------------------------------------------+
```

### Visualizador retro de algoritmos de ordenação com JavaScript puro, Canvas, estética CRT e execução passo a passo.

<br />

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

<br />

<a href="#-demo">Demo</a> •
<a href="#-sobre-o-projeto">Sobre</a> •
<a href="#-algoritmos">Algoritmos</a> •
<a href="#-como-executar">Executar</a> •
<a href="#-testes-e-qualidade">Testes</a> •
<a href="#-deploy-no-github-pages">Deploy</a>

</div>

---

## 🎬 Demo

> Coloque aqui um GIF curto mostrando a execução do projeto.
>
> Sugestão de nome: `docs/demo/sortvis-demo.gif`

<div align="center">

<!-- Substitua o caminho abaixo pelo GIF real do projeto -->
<img src="docs/demo/sortvis-demo.gif" alt="Demonstração do SORT//VIS" width="900" />

</div>

> Caso ainda não tenha o GIF, você pode manter essa seção e adicionar o arquivo depois.
> O README continuará funcionando normalmente, apenas a imagem não será exibida até o GIF existir.

---

## 🧠 Sobre o projeto

O **SORT//VIS** é uma aplicação front-end de página única criada para visualizar algoritmos de ordenação em tempo real, com uma estética inspirada em monitores antigos, terminais retrô e interfaces CRT.

A proposta não é apenas mostrar barras se mexendo. O projeto funciona como um pequeno laboratório visual de algoritmos, permitindo observar comparações, trocas, leituras, escritas, tempo de execução, progresso e comportamento interno de cada estratégia de ordenação.

Ele foi desenvolvido com foco em:

- visual forte para portfólio;
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

## 🖼️ Preview

<div align="center">

<!-- Substitua pelas screenshots reais do projeto -->
<img src="docs/screenshots/desktop-preview.png" alt="Preview desktop do SORT//VIS" width="900" />

<br />
<br />

<img src="docs/screenshots/mobile-preview.png" alt="Preview mobile do SORT//VIS" width="280" />

</div>

> Sugestão de estrutura para imagens:
>
> ```text
> docs/
> ├── demo/
> │   └── sortvis-demo.gif
> └── screenshots/
>     ├── desktop-preview.png
>     └── mobile-preview.png
> ```

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

O projeto foi construído com **JavaScript puro**, sem frameworks e sem dependência de etapa de build.

---

## 🚀 Como executar

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
cd SEU-REPOSITORIO
```

Instale as dependências:

```bash
npm install
```

Execute as validações:

```bash
node scripts/ci-check.js
```

Execute os testes E2E:

```bash
npm run test:e2e
```

Para abrir diretamente no navegador:

```bash
open index.html
```

No Windows, você também pode simplesmente dar duplo clique no arquivo `index.html`.

---

## 🧪 Testes e qualidade

O repositório inclui controles de qualidade para garantir que a aplicação continue funcionando corretamente.

### Validações atuais

- sintaxe JavaScript embutida no `index.html`;
- presença dos controles principais;
- consistência dos metadados dos algoritmos;
- guardrails de layout mobile;
- smoke tests em desktop e mobile;
- execução em CI com GitHub Actions.

### Comandos principais

```bash
node scripts/ci-check.js
npm run test:e2e
```

---

## 📁 Estrutura sugerida

```text
SORT-VIS/
├── .github/
│   └── workflows/
│       └── ci.yml
├── docs/
│   ├── demo/
│   │   └── sortvis-demo.gif
│   └── screenshots/
│       ├── desktop-preview.png
│       └── mobile-preview.png
├── scripts/
│   └── ci-check.js
├── tests/
│   └── sortvis.spec.js
├── index.html
├── package.json
└── README.md
```

---

## 🌍 Deploy no GitHub Pages

Este projeto é estático e pode ser publicado diretamente no GitHub Pages.

1. Faça push do projeto para o GitHub.
2. Acesse **Settings**.
3. Vá em **Pages**.
4. Em **Build and deployment**, selecione a branch principal.
5. Escolha a pasta raiz do repositório.
6. Clique em **Save**.

Depois disso, o GitHub irá gerar uma URL pública para acessar o projeto.

---

## 🧭 Roadmap

- [x] Visualizador em Canvas
- [x] Interface CRT retro
- [x] 13 algoritmos de ordenação
- [x] Execução passo a passo
- [x] Telemetria em tempo real
- [x] Responsividade mobile
- [x] Internacionalização EN/PT-BR
- [x] Testes E2E com Playwright
- [x] CI com GitHub Actions
- [ ] Comparação de algoritmos lado a lado
- [ ] Entrada manual de arrays
- [ ] Exportação da execução em GIF ou vídeo
- [ ] Modo educacional com explicações durante a execução
- [ ] Toggle de acessibilidade para reduzir efeitos CRT
- [ ] Página de documentação dos algoritmos

---

## 💡 Ideias futuras

Algumas evoluções possíveis para tornar o projeto ainda mais robusto:

- modo professor, explicando cada operação em linguagem natural;
- comparação simultânea entre dois ou mais algoritmos;
- benchmark visual entre estratégias diferentes;
- suporte a arrays personalizados;
- exportação da execução como imagem, vídeo ou GIF;
- gráfico de evolução das operações;
- painel teórico explicando Big-O, estabilidade e uso de memória;
- melhorias de acessibilidade visual para usuários sensíveis a brilho, flicker ou efeitos CRT.

---

## 🤝 Contribuição

Contribuições são bem-vindas.

Para contribuir:

1. Faça um fork do projeto.
2. Crie uma branch:

```bash
git checkout -b feature/minha-melhoria
```

3. Faça suas alterações.
4. Rode os testes.
5. Envie um Pull Request.

---

## 📄 Licença

Este projeto está sob a licença **MIT**.

---

<div align="center">

```text
SYSTEM MESSAGE :: SORTING COMPLETE
STATUS         :: PORTFOLIO READY
SIGNAL         :: GREEN
```

### Feito com JavaScript puro, paciência algorítmica e estética de terminal retro.

</div>
