// ============================================================
// ARQUIVO DE CONFIGURAÇÃO DO CONVITE
// Altere aqui todos os textos, fotos e dados do evento.
// Nenhuma outra parte do código precisa ser tocada para
// personalizar o convite.
// ============================================================

export const invitationData = {
  graduate: {
    name: "Geovanna Gomes",
    course: "Bacharelado em Farmácia",
    institution: "NOME DA INSTITUIÇÃO",
    classYear: "2026",
  },

  texts: {
    slideHint: "Deslize para conhecer esta história",

    openingQuote:
      "O diploma marca o fim de uma etapa, mas a verdadeira conquista foi seguir em frente mesmo quando pensei que não conseguiria.",
    openingQuoteHighlights: ["fim de uma etapa", "verdadeira conquista"],

    journeyTitle: "Uma história construída com coragem",
    journeyText:
      "Entre desafios, escolhas, renúncias e aprendizados, esta conquista foi sendo construída um dia de cada vez.",

    parentsTitle: "Aos meus pais",
    parentsMessage:
      "Se hoje posso celebrar a realização deste sonho, é porque, antes de tudo, eu tive pais que me deram o suporte necessário para acreditar que ele era possível. Vocês não apenas seguraram a minha mão nos momentos de incerteza, mas construíram a base sólida que me permitiu voar alto. Este diploma é o resultado de cada renúncia de vocês, de cada palavra de incentivo e do amor incondicional que transformou os meus maiores objetivos em realidade. Obrigada por me permitirem sonhar e, acima de tudo, por estarem ao meu lado na hora de realizar.",

    motherTitle: "À minha mãe",
    motherQuote:
      "Todas as vezes, minha mãe, que alguém me disse não, você disse sim pro meu coração.",
    motherMessage:
      "Olhar para este diploma é sentir uma gratidão que não cabe em palavras. Eu sei que cada conquista desta graduação traz consigo um pedaço do seu esforço, das suas orações e das suas próprias renúncias. Nos dias mais difíceis da faculdade, quando o cansaço parecia vencer, o seu suporte incondicional foi o meu combustível para continuar. Minha eterna gratidão a você, mãe, por ter sido a base de tudo, por me permitir sonhar tão alto e por me dar as ferramentas para realizar este grande sonho. Essa vitória é inteiramente nossa!",

    sonTitle: "Ao meu filho",
    sonMessage:
      "O nascimento do meu filho redesenhou a minha vida e me deu a força que eu nem sabia que tinha; tudo o que fiz e enfrentei nesta faculdade foi pensando em garantir o futuro dele. No entanto, eu jamais teria cruzado a linha de chegada se não fossem os meus pais, que abriram mão da própria rotina para cuidar do meu pequeno com tanto amor enquanto eu assistia às aulas. Este diploma pertence a nós três. Aos meus pais, obrigada por protegerem o meu bem mais precioso; ao meu filho, tudo o que conquistei é por você.",
    sonHighlights: [
      "me deu a força que eu nem sabia que tinha",
      "Este diploma pertence a nós três",
      "tudo o que conquistei é por você",
    ],

    grandmotherTitle: "À minha vó",
    grandmotherMessage:
      "Minha avó sempre esteve na primeira fileira de todas as minhas formaturas, do pré-escolar ao ensino médio, me dando o apoio necessário para chegar até aqui. Infelizmente, ela partiu antes de me ver conquistar o diploma do ensino superior. Embora sua cadeira esteja vazia hoje, sinto que sua torcida e sua bênção me acompanham do céu. Vó, a sua menina conseguiu. Essa vitória também é sua!",
    grandmotherHighlights: [
      "sua torcida e sua bênção me acompanham do céu",
      "Vó, a sua menina conseguiu",
      "Essa vitória também é sua",
    ],

    centralMessage:
      "Mais do que uma formatura, este convite celebra uma vida transformada pela perseverança. Cada obstáculo fortaleceu meus passos, cada lágrima teve um propósito e cada pessoa que caminhou comigo faz parte desta conquista.",
    centralHighlights: [
      "uma vida transformada pela perseverança",
      "Cada obstáculo fortaleceu meus passos",
      "cada lágrima teve um propósito",
      "cada pessoa que caminhou comigo",
    ],

    transitionText: "Agora é hora de celebrar.",

    countdownTitle: "Falta pouco para este momento",
    countdownTitleToday: "Hoje é o grande dia!",

    buttonsTitle: "Informações para o grande dia",

    finalQuote: "Esta conquista também pertence a vocês.",
    finalMessage:
      "Espero por vocês para celebrarmos juntos o encerramento de uma etapa e o início de uma nova história.",
    finalSignatureQuote: "A felicidade só é completa quando compartilhada.",
    confirmationButton: "Confirmar presença",
    confirmationMessage:
      "Olá! Confirmo minha presença e estou muito feliz por celebrar este momento tão especial com você. Até lá!",
  },

  event: {
    title: "Cerimônia de Formatura",
    date: "2026-08-08",
    startTime: "19:00",
    endTime: "22:00",
    weekday: "Sábado",
    venue: "Auditório ATM",
    address: "",
    city: "Palmas - TO",
    mapsUrl: "https://maps.app.goo.gl/Ero8pZR5o4JSjCbe6",
    whatsapp: "556384407251",
  },

  timeline: {
    enabled: false,
    items: [
      { time: "18:30", title: "Recepção dos convidados" },
      { time: "19:00", title: "Início da cerimônia" },
      { time: "21:00", title: "Encerramento" },
      { time: "22:00", title: "Celebração" },
    ],
  },

  photos: {
    cover: "/images/capa-geovanna.jpeg",
    graduatePortrait: "/images/capa-geovanna.jpeg",
    parents: "/images/geovanna-com-pais.jpeg",
    mother: "/images/geovanna-com-mae.jpeg",
    son: "/images/geovanna-com-filho.jpeg",
    grandmother: "/images/geovanna-com-avo.jpeg",
    transition: "/images/capa-geovanna.jpeg",
    final: "/images/geovanna-com-pais.jpeg",
    gallery: [
      "/images/galeria-geovanna-01.jpeg",
      "/images/galeria-geovanna-02.jpeg",
      "/images/galeria-geovanna-03.jpeg",
      "/images/galeria-geovanna-04.jpeg",
      "/images/galeria-geovanna-05.jpeg",
      "/images/galeria-geovanna-06.jpeg",
      "/images/galeria-geovanna-07.jpeg",
      "/images/galeria-geovanna-08.jpeg",
      "/images/galeria-geovanna-09.jpeg",
      "/images/galeria-geovanna-10.jpeg",
    ],
  },

  // object-position individual por foto, caso alguma imagem precise
  // de reposicionamento para evitar cortes indevidos de rosto/mãos.
  photoPositions: {
    cover: "center top",
    graduatePortrait: "center center",
    parents: "center center",
    mother: "center center",
    son: "center center",
    grandmother: "center center",
    transition: "center center",
    final: "center center",
  },
};

export default invitationData;
