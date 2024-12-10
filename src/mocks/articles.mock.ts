export const articlesMock = [
  {
    id: '1',
    category: { id: '2', name: 'biologia', color: '#5E1B99' },
    teacher: {
      id: '1',
      name: 'Ana Lima',
      avatarImageUrl: 'https://picsum.photos/seed/pessoa/42/42',
    },
    article: {
      title: 'Estrutura Celular',
      slug: 'estrutura-celular',
      summary:
        'Aprenda sobre a estrutura básica das células e sua finalidade e desempenho nos organismos vivos. Além disso, explore uma nova sequência de artigos sobre citologia e tudo sobre o mundo microscópico.',
      readingTime: 85,
      content: `
        <h2>Componentes da Célula</h2>
        <p>A célula é a unidade fundamental da vida e possui várias organelas:</p>
        <ul>
          <li>Núcleo</li>
          <li>Mitocôndrias</li>
          <li>Ribossomos</li>
        </ul>
        <img src="https://picsum.photos/seed/celula/600/480" alt="Estrutura Celular" />
        <p>O núcleo contém o material genético, enquanto as mitocôndrias são responsáveis pela produção de energia.</p>
      `,
      highlightImageUrl: 'https://picsum.photos/seed/biologia/1600/640',
      publishedLastDate: new Date('2023-10-30T14:30:00Z'),
      isPublished: true,
      createdAt: new Date('2023-10-30T14:30:00Z'),
      updatedAt: new Date('2023-10-30T14:30:00Z'),
      createdBy: '2',
      updatedBy: '1',
    },
  },
  {
    id: '2',
    category: { id: '1', name: 'português', color: '#991B1E' },
    teacher: { id: '2', name: 'Mariana Costa' },
    article: {
      title: 'Concordância Verbal',
      slug: 'concordancia-verbal',
      summary: 'Entenda as regras da concordância verbal na língua portuguesa.',
      readingTime: 88,
      content: `
## Regras Básicas

A concordância verbal é a harmonia entre o sujeito e o verbo em número e pessoa. Isso é essencial para garantir a fluidez e a correção da linguagem.
![Concordância Verbal](https://picsum.photos/seed/portugues/600/480)

[teste link](www.google.com.br)

> Citação de exemplo

*teste italico*

\`<p class="test">Teste</p>\`

\`<pre>Teste pre<pre>\`


### Exemplo 1: Concordância com Sujeito no Singular

Quando o sujeito está no **singular**, o verbo também deve estar no **singular**.

- **O aluno** estuda. (singular)
- **A criança** brinca no parque. (singular)

### Exemplo 2: Concordância com Sujeito no Plural

Quando o sujeito está no **plural**, o verbo deve ser conjugado no **plural**.

- **Os alunos** estudam. (plural)
- **As crianças** brincam no parque. (plural)

> **Dica:** Para identificar se o sujeito está no singular ou plural, observe o número do sujeito (se é um ou mais) e faça a concordância com o verbo de acordo.

### Regras Importantes

1. Quando o sujeito é composto, o verbo deve concordar com o **núcleo** do sujeito.

   - **O aluno e a professora** explicam a lição. (plural)
   - **A professora e o aluno** explicam a lição. (plural)

2. Em alguns casos, o verbo concorda com o sujeito mais próximo, especialmente quando o sujeito é composto por substantivos de gêneros diferentes.
      `,
      highlightImageUrl: '',
      publishedLastDate: new Date('2024-02-13T14:30:00Z'),
      isPublished: true,
      createdAt: new Date('2023-10-29T14:30:00Z'),
      updatedAt: new Date('2023-10-29T14:30:00Z'),
      createdBy: '3',
      updatedBy: '1',
    },
  },
  {
    id: '3',
    category: { id: '5', name: 'matemática', color: '#1B6099' },
    teacher: { id: '3', name: 'Frederico de Souza' },
    article: {
      title: 'Geometria: Círculo e suas Propriedades',
      slug: 'geometria-circulo',
      summary: 'Conheça as propriedades do círculo na geometria.',
      readingTime: 18,
      content: `
        <h2>Propriedades do Círculo</h2>
        <p>O círculo é uma figura geométrica com diversas propriedades importantes:</p>
        <ul>
          <li>Raio: distância do centro até a borda.</li>
          <li>Diâmetro: duas vezes o raio.</li>
          <li>Área: π vezes o raio ao quadrado.</li>
        </ul>
        <img src="https://picsum.photos/seed/circulo/600/480" alt="Círculo" />
      `,
      highlightImageUrl: 'https://picsum.photos/seed/matematica/600/480',
      publishedLastDate: new Date('2023-10-28T14:30:00Z'),
      isPublished: true,
      createdAt: new Date('2023-10-28T14:30:00Z'),
      updatedAt: new Date('2023-10-28T14:30:00Z'),
      createdBy: '4',
      updatedBy: '1',
    },
  },
  {
    id: '4',
    category: { id: '4', name: 'história', color: '#99561B' },
    teacher: { id: '4', name: 'Carlos Mendes' },
    article: {
      title: 'A Independência do Brasil',
      slug: 'independencia-do-brasil',
      summary: 'Compreenda o processo de independência do Brasil em 1822.',
      readingTime: 20,
      content: `
        <h2>Contexto Histórico</h2>
        <p>A independência do Brasil foi proclamada em 7 de setembro de 1822.</p>
        <img src="https://picsum.photos/seed/historia/600/480" alt="Independência do Brasil" />
        <p>Principais eventos:</p>
        <ol>
          <li>Chegada da Família Real ao Brasil.</li>
          <li>Conflitos com as autoridades portuguesas.</li>
          <li>Proclamação da independência por Dom Pedro I.</li>
        </ol>
      `,
      highlightImageUrl: 'https://picsum.photos/seed/historia/600/480',
      publishedLastDate: new Date('2023-10-27T14:30:00Z'),
      isPublished: true,
      createdAt: new Date('2023-10-27T14:30:00Z'),
      updatedAt: new Date('2023-10-27T14:30:00Z'),
      createdBy: '5',
      updatedBy: '1',
    },
  },
  {
    id: '5',
    category: { id: '2', name: 'biologia', color: '#5E1B99' },
    teacher: { id: '1', name: 'Ana Lima' },
    article: {
      title: 'Fotossíntese',
      slug: 'fotossintese',
      summary: 'O processo de fotossíntese nas plantas.',
      readingTime: 14,
      content: `
        <h2>O que é Fotossíntese?</h2>
        <p>A fotossíntese é o processo pelo qual as plantas produzem alimento usando luz solar.</p>
        <img src="https://picsum.photos/seed/fotossintese/600/480" alt="Fotossíntese" />
        <p>Reações envolvidas:</p>
        <ul>
          <li>Absorção de luz solar.</li>
          <li>Uso de água e dióxido de carbono.</li>
          <li>Produção de glicose e oxigênio.</li>
        </ul>
      `,
      highlightImageUrl: 'https://picsum.photos/seed/biologia/600/480',
      publishedLastDate: new Date('2023-10-26T14:30:00Z'),
      isPublished: true,
      createdAt: new Date('2023-10-26T14:30:00Z'),
      updatedAt: new Date('2023-10-26T14:30:00Z'),
      createdBy: '6',
      updatedBy: '1',
    },
  },
  {
    id: '6',
    category: { id: '2', name: 'biologia', color: '#5E1B99' },
    teacher: { id: '5', name: 'Roberta Santos' },
    article: {
      title: 'Evolução das Espécies',
      slug: 'evolucao-das-especies',
      summary: 'Compreenda o conceito de evolução e seleção natural.',
      readingTime: 16,
      content: `
        <h2>Teoria da Evolução</h2>
        <p>A evolução das espécies é o processo pelo qual os organismos se transformam ao longo do tempo.</p>
        <img src="https://picsum.photos/seed/evolucao/600/480" alt="Evolução" />
        <p>Principais pontos da teoria:</p>
        <ul>
          <li>Seleção Natural</li>
          <li>Mutação</li>
          <li>Adaptação ao meio ambiente</li>
        </ul>
      `,
      highlightImageUrl: 'https://picsum.photos/seed/biologia/600/480',
      publishedLastDate: new Date('2024-02-12T14:30:00Z'),
      isPublished: true,
      createdAt: new Date('2023-10-30T14:30:00Z'),
      updatedAt: new Date('2023-10-30T14:30:00Z'),
      createdBy: '2',
      updatedBy: '1',
    },
  },
  {
    id: '7',
    category: { id: '1', name: 'português', color: '#991B1E' },
    teacher: { id: '2', name: 'Mariana Costa' },
    article: {
      title: 'Figuras de Linguagem',
      slug: 'figuras-de-linguagem',
      summary:
        'Explore as principais figuras de linguagem da língua portuguesa.',
      readingTime: 14,
      content: `
        <h2>Principais Figuras de Linguagem</h2>
        <p>As figuras de linguagem enriquecem a comunicação. Algumas delas são:</p>
        <img src="https://picsum.photos/seed/linguagem/600/480" alt="Figuras de Linguagem" />
        <ol>
          <li>Metáfora</li>
          <li>Comparação</li>
          <li>Metonímia</li>
        </ol>
        <p>Exemplo de metáfora: "A vida é uma viagem."</p>
      `,
      highlightImageUrl: 'https://picsum.photos/seed/portugues/600/480',
      publishedLastDate: new Date('2021-08-10T11:30:00Z'),
      isPublished: true,
      createdAt: new Date('2023-10-29T14:30:00Z'),
      updatedAt: new Date('2023-10-29T14:30:00Z'),
      createdBy: '3',
      updatedBy: '1',
    },
  },
  {
    id: '8',
    category: { id: '5', name: 'matemática', color: '#1B6099' },
    teacher: { id: '3', name: 'Frederico de Souza' },
    article: {
      title: 'Estatística: Média, Mediana e Moda',
      slug: 'estatistica-media-mediana-moda',
      summary: 'Entenda os conceitos de média, mediana e moda.',
      readingTime: 19,
      content: `
        <h2>Conceitos Estatísticos</h2>
        <p>Esses três conceitos são fundamentais na análise de dados:</p>
        <img src="https://picsum.photos/seed/estatistica/600/480" alt="Estatística" />
        <ul>
          <li><strong>Média</strong>: soma dos valores dividida pela quantidade.</li>
          <li><strong>Mediana</strong>: valor central em uma lista ordenada.</li>
          <li><strong>Moda</strong>: valor que mais se repete.</li>
        </ul>
      `,
      highlightImageUrl: 'https://picsum.photos/seed/matematica/600/480',
      publishedLastDate: new Date('2023-10-28T14:30:00Z'),
      isPublished: true,
      createdAt: new Date('2023-10-28T14:30:00Z'),
      updatedAt: new Date('2023-10-28T14:30:00Z'),
      createdBy: '4',
      updatedBy: '1',
    },
  },
  {
    id: '9',
    category: { id: '4', name: 'história', color: '#99561B' },
    teacher: { id: '4', name: 'Carlos Mendes' },
    article: {
      title: 'As Guerras Mundiais',
      slug: 'guerras-mundiais',
      summary: 'Analise os principais eventos das Guerras Mundiais.',
      readingTime: 25,
      content: `
        <h2>Primeira e Segunda Guerra Mundial</h2>
        <p>As Guerras Mundiais foram conflitos que moldaram a história moderna.</p>
        <img src="https://picsum.photos/seed/guerras/600/480" alt="Guerras Mundiais" />
        <p>Principais características:</p>
        <ol>
          <li>Primeira Guerra (1914-1918): Envolveu muitas nações e resultou na queda de impérios.</li>
          <li>Segunda Guerra (1939-1945): Conflito global que resultou em grandes perdas humanas e mudanças políticas.</li>
        </ol>
      `,
      highlightImageUrl: 'https://picsum.photos/seed/historia/600/480',
      publishedLastDate: new Date('2023-10-27T14:30:00Z'),
      isPublished: true,
      createdAt: new Date('2023-10-27T14:30:00Z'),
      updatedAt: new Date('2023-10-27T14:30:00Z'),
      createdBy: '5',
      updatedBy: '1',
    },
  },
  {
    id: '10',
    category: { id: '2', name: 'biologia', color: '#5E1B99' },
    teacher: { id: '5', name: 'Roberta Santos' },
    article: {
      title: 'Biodiversidade e Ecossistemas',
      slug: 'biodiversidade-ecossistemas',
      summary: 'Entenda a importância da biodiversidade nos ecossistemas.',
      readingTime: 20,
      content: `
        <h2>Importância da Biodiversidade</h2>
        <p>A biodiversidade é crucial para a estabilidade dos ecossistemas.</p>
        <img src="https://picsum.photos/seed/biodiversidade/600/480" alt="Biodiversidade" />
        <p>Fatores que afetam a biodiversidade:</p>
        <ul>
          <li>Desmatamento</li>
          <li>Poluição</li>
          <li>Mudanças Climáticas</li>
        </ul>
      `,
      highlightImageUrl: 'https://picsum.photos/seed/biologia/600/480',
      publishedLastDate: new Date('2023-10-26T14:30:00Z'),
      isPublished: true,
      createdAt: new Date('2023-10-26T14:30:00Z'),
      updatedAt: new Date('2023-10-26T14:30:00Z'),
      createdBy: '6',
      updatedBy: '1',
    },
  },
  {
    id: '11',
    category: { id: '2', name: 'biologia', color: '#5E1B99' },
    teacher: { id: '5', name: 'Roberta Santos' },
    article: {
      title: 'Cadeias Alimentares',
      slug: 'cadeias-alimentares',
      summary:
        'Entenda como funcionam as cadeias alimentares nos ecossistemas.',
      readingTime: 17,
      content: `
        <h2>Estrutura das Cadeias Alimentares</h2>
        <p>A cadeia alimentar descreve a transferência de energia entre os organismos.</p>
        <img src="https://picsum.photos/seed/cadeia/600/480" alt="Cadeia Alimentar" />
        <p>Exemplos de níveis tróficos:</p>
        <ul>
          <li>Produtores (plantas)</li>
          <li>Consumidores primários (herbívoros)</li>
          <li>Consumidores secundários (carnívoros)</li>
        </ul>
      `,
      highlightImageUrl: 'https://picsum.photos/seed/biologia/600/480',
      publishedLastDate: new Date('2023-10-30T14:30:00Z'),
      isPublished: true,
      createdAt: new Date('2023-10-30T14:30:00Z'),
      updatedAt: new Date('2023-10-30T14:30:00Z'),
      createdBy: '2',
      updatedBy: '1',
    },
  },
  {
    id: '12',
    category: { id: '1', name: 'português', color: '#991B1E' },
    teacher: { id: '2', name: 'Mariana Costa' },
    article: {
      title: 'Crase: Uso e Dicas',
      slug: 'crase-uso-e-dicas',
      summary: 'Aprenda quando usar a crase na língua portuguesa.',
      readingTime: 12,
      content: `
        <h2>Quando Usar a Crase</h2>
        <p>A crase é a fusão de duas vogais idênticas. Geralmente ocorre:</p>
        <img src="https://picsum.photos/seed/crase/600/480" alt="Crase" />
        <ul>
          <li>Antes de palavras femininas: "Vou à escola."</li>
          <li>Em locuções: "À medida que..."</li>
        </ul>
      `,
      highlightImageUrl: 'https://picsum.photos/seed/portugues/600/480',
      publishedLastDate: new Date('2024-04-06T14:30:00Z'),
      isPublished: true,
      createdAt: new Date('2024-04-06T14:30:00Z'),
      updatedAt: new Date('2024-04-06T14:30:00Z'),
      createdBy: '3',
      updatedBy: '1',
    },
  },
  {
    id: '13',
    category: { id: '5', name: 'matemática', color: '#1B6099' },
    teacher: { id: '3', name: 'Frederico de Souza' },
    article: {
      title: 'Equações do Primeiro Grau',
      slug: 'equacoes-primeiro-grau',
      summary: 'Aprenda a resolver equações do primeiro grau.',
      readingTime: 18,
      content: `
        <h2>O que são Equações do Primeiro Grau?</h2>
        <p>Equações do primeiro grau têm a forma ax + b = 0.</p>
        <img src="https://picsum.photos/seed/equacao/600/480" alt="Equação" />
        <p>Exemplo:</p>
        <p>Resolva 2x + 3 = 0:</p>
        <ol>
          <li>2x = -3</li>
          <li>x = -3/2</li>
        </ol>
      `,
      highlightImageUrl: 'https://picsum.photos/seed/matematica/600/480',
      publishedLastDate: new Date('2023-10-28T14:30:00Z'),
      isPublished: true,
      createdAt: new Date('2023-10-28T14:30:00Z'),
      updatedAt: new Date('2023-10-28T14:30:00Z'),
      createdBy: '4',
      updatedBy: '1',
    },
  },
  {
    id: '14',
    category: { id: '4', name: 'história', color: '#99561B' },
    teacher: { id: '4', name: 'Carlos Mendes' },
    article: {
      title: 'A Revolução Francesa',
      slug: 'revolucao-francesa',
      summary: 'Entenda as causas e consequências da Revolução Francesa.',
      readingTime: 22,
      content: `
        <h2>Causas da Revolução</h2>
        <p>A Revolução Francesa, iniciada em 1789, teve diversas causas sociais e políticas.</p>
        <img src="https://picsum.photos/seed/revolucao/600/480" alt="Revolução Francesa" />
        <p>Consequências:</p>
        <ul>
          <li>Fim da monarquia absolutista.</li>
          <li>Declaração dos Direitos do Homem e do Cidadão.</li>
        </ul>
      `,
      highlightImageUrl: 'https://picsum.photos/seed/historia/600/480',
      publishedLastDate: new Date('2024-06-11T10:30:00Z'),
      isPublished: true,
      createdAt: new Date('2023-10-27T14:30:00Z'),
      updatedAt: new Date('2023-10-27T14:30:00Z'),
      createdBy: '5',
      updatedBy: '1',
    },
  },
  {
    id: '15',
    category: { id: '2', name: 'biologia', color: '#5E1B99' },
    teacher: { id: '5', name: 'Roberta Santos' },
    article: {
      title: 'Ciclo da Água',
      slug: 'ciclo-da-agua',
      summary: 'Aprenda sobre o ciclo da água e sua importância.',
      readingTime: 15,
      content: `
        <h2>Etapas do Ciclo da Água</h2>
        <p>O ciclo da água é essencial para a vida na Terra.</p>
        <img src="https://picsum.photos/seed/cicloagua/600/480" alt="Ciclo da Água" />
        <p>Principais etapas:</p>
        <ul>
          <li>Evaporação</li>
          <li>Condensação</li>
          <li>Precipitação</li>
        </ul>
      `,
      highlightImageUrl: 'https://picsum.photos/seed/biologia/600/480',
      publishedLastDate: new Date('2024-09-08T14:35:00Z'),
      isPublished: true,
      createdAt: new Date('2023-10-26T14:30:00Z'),
      updatedAt: new Date('2023-10-26T14:30:00Z'),
      createdBy: '6',
      updatedBy: '1',
    },
  },
  {
    id: '16',
    category: { id: '1', name: 'português', color: '#991B1E' },
    teacher: { id: '2', name: 'Mariana Costa' },
    article: {
      title: 'Gêneros Textuais',
      slug: 'generos-textuais',
      summary: 'Explore os diferentes gêneros textuais e suas características.',
      readingTime: 13,
      content: `
        <h2>Tipos de Gêneros Textuais</h2>
        <p>Os gêneros textuais são classificados em diversas categorias.</p>
        <img src="https://picsum.photos/seed/generos/600/480" alt="Gêneros Textuais" />
        <p>Exemplos:</p>
        <ul>
          <li>Artigo de opinião</li>
          <li>Crônica</li>
          <li>Conto</li>
        </ul>
      `,
      highlightImageUrl: 'https://picsum.photos/seed/portugues/600/480',
      publishedLastDate: new Date('2020-12-24T15:30:00Z'),
      isPublished: true,
      createdAt: new Date('2023-10-29T14:30:00Z'),
      updatedAt: new Date('2023-10-29T14:30:00Z'),
      createdBy: '3',
      updatedBy: '1',
    },
  },
];
