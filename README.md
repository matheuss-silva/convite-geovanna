# convite-geovanna

Convite digital de formatura em Vue 3 + Vite. Página vertical, mobile-first,
com fundo preto, tipografia editorial (Cormorant Garamond, Montserrat e
Allura) e detalhes dourados. Sem backend — tudo roda no navegador.

## Instalação e execução

Pré-requisito: Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Acesse o endereço exibido no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview   # opcional, para conferir o build localmente
```

O build final fica na pasta `dist/`.

## Onde alterar os dados

**Tudo** — nome da formanda, curso, textos das homenagens, data/local do
evento, WhatsApp, programação e caminhos das fotos — está centralizado em:

```
src/config/invitation.js
```

Basta editar os valores desse arquivo. Nenhum componente precisa ser tocado
para personalizar o convite.

### Trocando as fotografias

Substitua os arquivos dentro de `public/images/` (mantendo os mesmos nomes,
ou ajustando os caminhos em `invitation.js`):

| Chave em `photos` | Uso |
|---|---|
| `cover` | Foto de capa (tela de abertura) |
| `graduatePortrait` | Retrato individual (primeira foto da galeria) |
| `parents` | Formanda com pai e mãe |
| `mother` | Geovanna com a mãe |
| `son` | Formanda com o filho |
| `grandmother` | Geovanna ainda criança com a avó |
| `transition` | Foto de transição antes das informações do evento |
| `final` | Foto da seção de mensagem final |
| `gallery` | Array de fotos da galeria/carrossel |

As fotografias de Geovanna usam nomes descritivos dentro de `public/images/`.
Ao substituí-las, prefira imagens em proporção retrato (4:5 ou 3:4).

### Ajustando o enquadramento das fotos

Se algum rosto ou detalhe importante for cortado, ajuste o objeto
`photoPositions` em `invitation.js` (usa a sintaxe de `object-position`,
ex.: `"center 20%"`).

## Funcionalidades

- **Contagem regressiva** até a data/hora definidas em `event.date` e
  `event.startTime`.
- **Confirmar presença**: abre uma mensagem pronta para o WhatsApp definido
  em `event.whatsapp` (formato internacional, ex.: `5563999999999`).
- **Localização**: abre o Google Maps (`event.mapsUrl`) em nova aba.
- **Galeria**: carrossel com swipe no celular e grade editorial no desktop.
- **Programação (timeline)**: pode ser ocultada definindo
  `timeline.enabled: false` em `invitation.js`.

## Publicação

O projeto é 100% estático após `npm run build` (pasta `dist/`). Pode ser
publicado em qualquer hospedagem de arquivos estáticos:

- **Vercel**: importe o repositório, framework preset "Vite", sem
  configuração adicional.
- **Netlify**: comando de build `npm run build`, diretório de publicação
  `dist`.
- **GitHub Pages / servidor próprio**: rode `npm run build` e faça upload do
  conteúdo de `dist/`.

## Estrutura do projeto

```
src/
  assets/styles/     estilos globais (variáveis, base, animações)
  components/         todos os componentes Vue da página
  composables/         useCountdown e useScrollAnimation
  config/invitation.js  dados e textos do convite (edite aqui)
  utils/                helpers (destaque de texto, gerador de .ics)
  views/InvitationView.vue  monta a página completa
public/images/         fotografias do convite
```

## Acessibilidade e performance

- HTML semântico, `alt` descritivo em todas as imagens, `aria-label` em
  botões de ícone.
- Animações respeitam `prefers-reduced-motion`.
- Apenas a imagem de capa é carregada com prioridade; as demais usam
  `loading="lazy"`.
