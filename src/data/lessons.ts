import type { Module, Achievement, LevelConfig, ScienceBranch } from '@/types';

// ===========================================
// BIOLOGY MODULES
// ===========================================

const BIOLOGY_CELLS: Module = {
  id: 'bio-cells',
  name: 'La Celula',
  description: 'Descubre el mundo microscopico de las celulas',
  branch: 'biology',
  icon: '🔬',
  color: '#22c55e',
  difficulty: 'beginner',
  requiredXP: 0,
  lessons: [
    {
      id: 'bio-cells-1',
      title: 'Que es una Celula?',
      description: 'La unidad basica de la vida',
      branch: 'biology',
      type: 'lesson',
      difficulty: 'beginner',
      xp: 50,
      duration: 10,
      icon: '🧫',
      theory: 'Las celulas son las unidades mas pequenas de la vida. Todos los seres vivos estan formados por celulas, desde las bacterias hasta los humanos.',
      facts: [
        'Tu cuerpo tiene aproximadamente 37 billones de celulas',
        'La celula mas grande es el huevo de avestruz',
        'Las celulas fueron descubiertas por Robert Hooke en 1665',
        'Las celulas nerviosas pueden medir hasta 1 metro de largo',
      ],
    },
    {
      id: 'bio-cells-2',
      title: 'Partes de la Celula',
      description: 'Nucleo, membrana y citoplasma',
      branch: 'biology',
      type: 'lesson',
      difficulty: 'beginner',
      xp: 60,
      duration: 15,
      icon: '🫁',
      theory: 'Cada celula tiene tres partes principales: la membrana celular (proteccion), el citoplasma (donde ocurren las reacciones) y el nucleo (el cerebro de la celula).',
      facts: [
        'El nucleo contiene el ADN con toda la informacion genetica',
        'La membrana celular decide que entra y sale de la celula',
        'El citoplasma es como una gelatina llena de organelos',
        'Las mitocondrias producen la energia de la celula',
      ],
      simulation: 'microscope',
    },
    {
      id: 'bio-cells-3',
      title: 'Celula Animal vs Vegetal',
      description: 'Diferencias entre tipos de celulas',
      branch: 'biology',
      type: 'experiment',
      difficulty: 'beginner',
      xp: 80,
      duration: 20,
      icon: '🌱',
      steps: [
        {
          id: 'step-1',
          title: 'Observa la celula animal',
          instruction: 'Usa el microscopio virtual para observar una celula animal. Nota su forma redonda.',
          expectedResult: 'Celula redonda sin pared celular',
        },
        {
          id: 'step-2',
          title: 'Observa la celula vegetal',
          instruction: 'Ahora observa una celula vegetal. Nota su forma rectangular.',
          expectedResult: 'Celula rectangular con pared celular y cloroplastos',
        },
        {
          id: 'step-3',
          title: 'Identifica las diferencias',
          instruction: 'Anota 3 diferencias entre ambas celulas.',
          expectedResult: 'Pared celular, cloroplastos, vacuola central',
        },
      ],
      simulation: 'microscope',
    },
    {
      id: 'bio-cells-4',
      title: 'Quiz: La Celula',
      description: 'Pon a prueba tus conocimientos',
      branch: 'biology',
      type: 'quiz',
      difficulty: 'beginner',
      xp: 100,
      duration: 10,
      icon: '❓',
      questions: [
        {
          id: 'q1',
          question: 'Cual es la funcion del nucleo?',
          options: ['Producir energia', 'Almacenar el ADN', 'Proteger la celula', 'Realizar fotosintesis'],
          correctIndex: 1,
          explanation: 'El nucleo almacena el ADN, que contiene toda la informacion genetica de la celula.',
        },
        {
          id: 'q2',
          question: 'Que organelo produce energia?',
          options: ['Ribosoma', 'Vacuola', 'Mitocondria', 'Cloroplasto'],
          correctIndex: 2,
          explanation: 'Las mitocondrias son las "centrales electricas" de la celula.',
        },
        {
          id: 'q3',
          question: 'Que tienen las celulas vegetales que NO tienen las animales?',
          options: ['Nucleo', 'Mitocondrias', 'Pared celular', 'Membrana'],
          correctIndex: 2,
          explanation: 'Solo las celulas vegetales tienen pared celular y cloroplastos.',
        },
      ],
    },
  ],
};

const BIOLOGY_BODY: Module = {
  id: 'bio-body',
  name: 'El Cuerpo Humano',
  description: 'Explora los sistemas del cuerpo',
  branch: 'biology',
  icon: '🫀',
  color: '#ef4444',
  difficulty: 'intermediate',
  requiredXP: 200,
  lessons: [
    {
      id: 'bio-body-1',
      title: 'Sistema Circulatorio',
      description: 'El corazon y la sangre',
      branch: 'biology',
      type: 'lesson',
      difficulty: 'intermediate',
      xp: 70,
      duration: 15,
      icon: '❤️',
      theory: 'El sistema circulatorio transporta sangre por todo el cuerpo. El corazon bombea la sangre a traves de arterias y venas.',
      facts: [
        'El corazon late 100,000 veces al dia',
        'Tienes 96,000 km de vasos sanguineos',
        'La sangre tarda 20 segundos en recorrer todo el cuerpo',
        'Los globulos rojos viven solo 120 dias',
      ],
      simulation: 'anatomy',
    },
    {
      id: 'bio-body-2',
      title: 'Sistema Respiratorio',
      description: 'Como respiramos',
      branch: 'biology',
      type: 'lesson',
      difficulty: 'intermediate',
      xp: 70,
      duration: 15,
      icon: '🫁',
      theory: 'Los pulmones extraen oxigeno del aire y expulsan dioxido de carbono. Este intercambio es vital para la vida.',
      facts: [
        'Respiramos 20,000 veces al dia',
        'Los pulmones tienen 300 millones de alveolos',
        'El pulmon derecho es mas grande que el izquierdo',
        'Podemos vivir minutos sin oxigeno, pero dias sin agua',
      ],
      simulation: 'anatomy',
    },
    {
      id: 'bio-body-3',
      title: 'Sistema Digestivo',
      description: 'De la boca al intestino',
      branch: 'biology',
      type: 'experiment',
      difficulty: 'intermediate',
      xp: 90,
      duration: 20,
      icon: '🍎',
      steps: [
        {
          id: 'step-1',
          title: 'La boca',
          instruction: 'Observa como los dientes trituran el alimento y la saliva comienza la digestion.',
          expectedResult: 'El alimento se convierte en bolo alimenticio',
        },
        {
          id: 'step-2',
          title: 'El estomago',
          instruction: 'Sigue el recorrido al estomago donde los acidos descomponen la comida.',
          expectedResult: 'El bolo se convierte en quimo',
        },
        {
          id: 'step-3',
          title: 'Los intestinos',
          instruction: 'Observa la absorcion de nutrientes en el intestino delgado.',
          expectedResult: 'Nutrientes absorbidos, desechos al intestino grueso',
        },
      ],
      simulation: 'anatomy',
    },
    {
      id: 'bio-body-4',
      title: 'Sistema Nervioso',
      description: 'El cerebro y los nervios',
      branch: 'biology',
      type: 'lesson',
      difficulty: 'intermediate',
      xp: 80,
      duration: 15,
      icon: '🧠',
      theory: 'El sistema nervioso controla todo el cuerpo. El cerebro procesa informacion y envia senales a traves de los nervios.',
      facts: [
        'El cerebro tiene 86 mil millones de neuronas',
        'Las senales nerviosas viajan a 400 km/h',
        'El cerebro usa 20% de la energia del cuerpo',
        'Generamos nuevas neuronas toda la vida',
      ],
    },
    {
      id: 'bio-body-5',
      title: 'Quiz: Cuerpo Humano',
      description: 'Demuestra lo aprendido',
      branch: 'biology',
      type: 'quiz',
      difficulty: 'intermediate',
      xp: 120,
      duration: 15,
      icon: '❓',
      questions: [
        {
          id: 'q1',
          question: 'Cuantas veces late el corazon por dia?',
          options: ['10,000', '50,000', '100,000', '1,000,000'],
          correctIndex: 2,
          explanation: 'El corazon late aproximadamente 100,000 veces cada dia.',
        },
        {
          id: 'q2',
          question: 'Donde se absorben los nutrientes?',
          options: ['Estomago', 'Intestino delgado', 'Intestino grueso', 'Esofago'],
          correctIndex: 1,
          explanation: 'El intestino delgado es donde se absorben la mayoria de los nutrientes.',
        },
        {
          id: 'q3',
          question: 'Que porcentaje de energia usa el cerebro?',
          options: ['5%', '10%', '20%', '50%'],
          correctIndex: 2,
          explanation: 'Aunque el cerebro es solo 2% del peso corporal, usa 20% de la energia.',
        },
      ],
    },
  ],
};

const BIOLOGY_ECOSYSTEMS: Module = {
  id: 'bio-eco',
  name: 'Ecosistemas',
  description: 'La vida en la naturaleza',
  branch: 'biology',
  icon: '🌳',
  color: '#16a34a',
  difficulty: 'intermediate',
  requiredXP: 400,
  lessons: [
    {
      id: 'bio-eco-1',
      title: 'Que es un Ecosistema?',
      description: 'Seres vivos y su ambiente',
      branch: 'biology',
      type: 'lesson',
      difficulty: 'intermediate',
      xp: 60,
      duration: 12,
      icon: '🏞️',
      theory: 'Un ecosistema es un sistema formado por seres vivos (bioticos) y elementos no vivos (abioticos) que interactuan entre si.',
      facts: [
        'Chile tiene 9 ecosistemas terrestres diferentes',
        'La selva amazonica produce 20% del oxigeno mundial',
        'El desierto de Atacama es el mas seco del mundo',
        'Los arrecifes de coral albergan 25% de las especies marinas',
      ],
    },
    {
      id: 'bio-eco-2',
      title: 'Cadenas Alimenticias',
      description: 'Quien come a quien',
      branch: 'biology',
      type: 'experiment',
      difficulty: 'intermediate',
      xp: 85,
      duration: 20,
      icon: '🔗',
      steps: [
        {
          id: 'step-1',
          title: 'Productores',
          instruction: 'Coloca las plantas que producen su propio alimento mediante fotosintesis.',
          expectedResult: 'Plantas como base de la cadena',
        },
        {
          id: 'step-2',
          title: 'Consumidores primarios',
          instruction: 'Agrega los herbivoros que comen plantas.',
          expectedResult: 'Conejos, vacas, insectos',
        },
        {
          id: 'step-3',
          title: 'Consumidores secundarios',
          instruction: 'Agrega los carnivoros que comen herbivoros.',
          expectedResult: 'Zorros, serpientes, aves',
        },
        {
          id: 'step-4',
          title: 'Descomponedores',
          instruction: 'Completa el ciclo con los descomponedores.',
          expectedResult: 'Hongos y bacterias reciclan nutrientes',
        },
      ],
      simulation: 'ecosystem',
    },
    {
      id: 'bio-eco-3',
      title: 'Ecosistemas de Chile',
      description: 'Desierto, bosque y mar',
      branch: 'biology',
      type: 'lesson',
      difficulty: 'intermediate',
      xp: 75,
      duration: 15,
      icon: '🇨🇱',
      theory: 'Chile tiene ecosistemas unicos debido a su geografia. Desde el desierto de Atacama hasta los bosques patagonicos.',
      facts: [
        'El bosque valdiviano es uno de los 25 hotspots de biodiversidad',
        'El huemul y el condor son simbolos nacionales',
        'La corriente de Humboldt hace rico el mar chileno',
        'El altiplano tiene flamencos y vicunas',
      ],
    },
  ],
};

// ===========================================
// CHEMISTRY MODULES
// ===========================================

const CHEMISTRY_MATTER: Module = {
  id: 'chem-matter',
  name: 'La Materia',
  description: 'Estados y cambios de la materia',
  branch: 'chemistry',
  icon: '⚗️',
  color: '#8b5cf6',
  difficulty: 'beginner',
  requiredXP: 0,
  lessons: [
    {
      id: 'chem-matter-1',
      title: 'Estados de la Materia',
      description: 'Solido, liquido y gas',
      branch: 'chemistry',
      type: 'lesson',
      difficulty: 'beginner',
      xp: 50,
      duration: 10,
      icon: '🧊',
      theory: 'La materia existe en tres estados principales: solido (forma fija), liquido (fluye) y gas (se expande). El estado depende de la energia de las moleculas.',
      facts: [
        'El agua es la unica sustancia comun en los 3 estados en la Tierra',
        'El plasma es el cuarto estado de la materia',
        'A -273°C las moleculas dejan de moverse completamente',
        'El helio liquido puede trepar paredes',
      ],
    },
    {
      id: 'chem-matter-2',
      title: 'Cambios de Estado',
      description: 'Fusion, evaporacion y mas',
      branch: 'chemistry',
      type: 'experiment',
      difficulty: 'beginner',
      xp: 75,
      duration: 18,
      icon: '🌡️',
      steps: [
        {
          id: 'step-1',
          title: 'Fusion',
          instruction: 'Calienta el hielo y observa como se convierte en agua (fusion).',
          expectedResult: 'Hielo se derrite a 0°C',
        },
        {
          id: 'step-2',
          title: 'Evaporacion',
          instruction: 'Continua calentando hasta que el agua hierva (evaporacion).',
          expectedResult: 'Agua hierve a 100°C',
        },
        {
          id: 'step-3',
          title: 'Condensacion',
          instruction: 'Enfria el vapor y observa como vuelve a ser liquido.',
          expectedResult: 'Vapor se condensa en gotas',
        },
        {
          id: 'step-4',
          title: 'Solidificacion',
          instruction: 'Enfria el agua hasta que se congele.',
          expectedResult: 'Agua se congela a 0°C',
        },
      ],
      simulation: 'chemical-reaction',
    },
    {
      id: 'chem-matter-3',
      title: 'Atomos y Moleculas',
      description: 'Los bloques de la materia',
      branch: 'chemistry',
      type: 'lesson',
      difficulty: 'beginner',
      xp: 65,
      duration: 15,
      icon: '⚛️',
      theory: 'Todo esta hecho de atomos. Los atomos se unen para formar moleculas. Por ejemplo, el agua (H2O) tiene 2 atomos de hidrogeno y 1 de oxigeno.',
      facts: [
        'Hay 118 elementos en la tabla periodica',
        'El atomo mas pequeno es el hidrogeno',
        'Tu cuerpo tiene 7 octillones de atomos',
        'El oro, la plata y el cobre son los mejores conductores',
      ],
    },
    {
      id: 'chem-matter-4',
      title: 'Quiz: La Materia',
      description: 'Evalua tu conocimiento',
      branch: 'chemistry',
      type: 'quiz',
      difficulty: 'beginner',
      xp: 90,
      duration: 10,
      icon: '❓',
      questions: [
        {
          id: 'q1',
          question: 'A que temperatura hierve el agua?',
          options: ['50°C', '80°C', '100°C', '120°C'],
          correctIndex: 2,
          explanation: 'El agua hierve a 100°C al nivel del mar.',
        },
        {
          id: 'q2',
          question: 'Como se llama el paso de solido a liquido?',
          options: ['Evaporacion', 'Condensacion', 'Fusion', 'Sublimacion'],
          correctIndex: 2,
          explanation: 'La fusion es el cambio de estado de solido a liquido.',
        },
        {
          id: 'q3',
          question: 'Cuantos atomos de hidrogeno tiene el agua?',
          options: ['1', '2', '3', '4'],
          correctIndex: 1,
          explanation: 'El agua (H2O) tiene 2 atomos de hidrogeno y 1 de oxigeno.',
        },
      ],
    },
  ],
};

const CHEMISTRY_REACTIONS: Module = {
  id: 'chem-reactions',
  name: 'Reacciones Quimicas',
  description: 'Transformaciones de la materia',
  branch: 'chemistry',
  icon: '🧪',
  color: '#a855f7',
  difficulty: 'intermediate',
  requiredXP: 250,
  lessons: [
    {
      id: 'chem-react-1',
      title: 'Que es una Reaccion?',
      description: 'Reactivos y productos',
      branch: 'chemistry',
      type: 'lesson',
      difficulty: 'intermediate',
      xp: 60,
      duration: 12,
      icon: '💥',
      theory: 'Una reaccion quimica ocurre cuando sustancias (reactivos) se transforman en otras diferentes (productos). Los enlaces se rompen y forman nuevos.',
      facts: [
        'La oxidacion del hierro es una reaccion lenta',
        'La combustion es una reaccion con oxigeno',
        'Tu cuerpo realiza miles de reacciones por segundo',
        'Los fuegos artificiales son reacciones quimicas coloridas',
      ],
    },
    {
      id: 'chem-react-2',
      title: 'Acidos y Bases',
      description: 'La escala pH',
      branch: 'chemistry',
      type: 'experiment',
      difficulty: 'intermediate',
      xp: 85,
      duration: 20,
      icon: '🍋',
      steps: [
        {
          id: 'step-1',
          title: 'Prepara el indicador',
          instruction: 'Usa jugo de repollo morado como indicador de pH.',
          expectedResult: 'Liquido morado listo',
        },
        {
          id: 'step-2',
          title: 'Prueba un acido',
          instruction: 'Agrega limon al indicador y observa el color.',
          expectedResult: 'Se vuelve rojo/rosado (acido)',
        },
        {
          id: 'step-3',
          title: 'Prueba una base',
          instruction: 'Agrega bicarbonato al indicador.',
          expectedResult: 'Se vuelve verde/azul (basico)',
        },
        {
          id: 'step-4',
          title: 'Neutralizacion',
          instruction: 'Mezcla el acido con la base.',
          expectedResult: 'Reaccion con burbujas, pH neutro',
        },
      ],
      simulation: 'chemical-reaction',
    },
    {
      id: 'chem-react-3',
      title: 'Combustion',
      description: 'Fuego y energia',
      branch: 'chemistry',
      type: 'lesson',
      difficulty: 'intermediate',
      xp: 70,
      duration: 15,
      icon: '🔥',
      theory: 'La combustion es una reaccion entre un combustible y el oxigeno que libera calor y luz. Necesita tres cosas: combustible, oxigeno y calor.',
      facts: [
        'El triangulo del fuego: combustible, oxigeno, calor',
        'El CO2 de los autos contribuye al cambio climatico',
        'Las velas queman cera vaporizada, no liquida',
        'Sin oxigeno, el fuego se apaga inmediatamente',
      ],
    },
  ],
};

// ===========================================
// PHYSICS MODULES
// ===========================================

const PHYSICS_FORCES: Module = {
  id: 'phys-forces',
  name: 'Fuerzas y Movimiento',
  description: 'Las leyes de Newton',
  branch: 'physics',
  icon: '🚀',
  color: '#3b82f6',
  difficulty: 'beginner',
  requiredXP: 0,
  lessons: [
    {
      id: 'phys-force-1',
      title: 'Que es una Fuerza?',
      description: 'Empujar y jalar',
      branch: 'physics',
      type: 'lesson',
      difficulty: 'beginner',
      xp: 50,
      duration: 10,
      icon: '💪',
      theory: 'Una fuerza es un empujon o tiron que puede cambiar el movimiento de un objeto. Se mide en Newtons (N).',
      facts: [
        'La gravedad es una fuerza que atrae todo hacia el centro de la Tierra',
        'La friccion es una fuerza que frena el movimiento',
        'Los imanes ejercen fuerza sin tocar',
        'Un Newton es la fuerza para acelerar 1kg a 1m/s2',
      ],
    },
    {
      id: 'phys-force-2',
      title: 'Primera Ley de Newton',
      description: 'Inercia',
      branch: 'physics',
      type: 'lesson',
      difficulty: 'beginner',
      xp: 60,
      duration: 12,
      icon: '🎱',
      theory: 'Un objeto en reposo permanece en reposo, y uno en movimiento sigue moviendose, a menos que una fuerza actue sobre el. Esto es la inercia.',
      facts: [
        'Por eso usamos cinturon de seguridad',
        'Un objeto en el espacio se moveria para siempre',
        'Mas masa = mas inercia',
        'Newton descubrio esto observando una manzana caer',
      ],
    },
    {
      id: 'phys-force-3',
      title: 'Segunda Ley de Newton',
      description: 'F = m x a',
      branch: 'physics',
      type: 'experiment',
      difficulty: 'beginner',
      xp: 80,
      duration: 18,
      icon: '📐',
      steps: [
        {
          id: 'step-1',
          title: 'Configura el experimento',
          instruction: 'Coloca un carrito en una rampa con diferentes masas.',
          expectedResult: 'Carrito listo para empujar',
        },
        {
          id: 'step-2',
          title: 'Misma fuerza, diferente masa',
          instruction: 'Empuja carritos con diferente masa con la misma fuerza.',
          expectedResult: 'El mas liviano acelera mas',
        },
        {
          id: 'step-3',
          title: 'Diferente fuerza, misma masa',
          instruction: 'Empuja el mismo carrito con diferente fuerza.',
          expectedResult: 'Mas fuerza = mas aceleracion',
        },
      ],
      simulation: 'physics-simulation',
    },
    {
      id: 'phys-force-4',
      title: 'Tercera Ley de Newton',
      description: 'Accion y reaccion',
      branch: 'physics',
      type: 'lesson',
      difficulty: 'beginner',
      xp: 60,
      duration: 12,
      icon: '🔄',
      theory: 'Para cada accion hay una reaccion igual y opuesta. Si empujas una pared, la pared te empuja a ti.',
      facts: [
        'Los cohetes funcionan por accion-reaccion',
        'Caminar es posible gracias a esta ley',
        'Los pajaros vuelan empujando el aire hacia abajo',
        'Nadar tambien usa accion-reaccion',
      ],
    },
    {
      id: 'phys-force-5',
      title: 'Quiz: Fuerzas',
      description: 'Prueba tu conocimiento',
      branch: 'physics',
      type: 'quiz',
      difficulty: 'beginner',
      xp: 100,
      duration: 12,
      icon: '❓',
      questions: [
        {
          id: 'q1',
          question: 'Que ley explica por que usamos cinturon?',
          options: ['Primera (Inercia)', 'Segunda (F=ma)', 'Tercera (Accion-Reaccion)', 'Ninguna'],
          correctIndex: 0,
          explanation: 'La inercia hace que tu cuerpo siga moviendose cuando el auto frena.',
        },
        {
          id: 'q2',
          question: 'Si duplicas la fuerza, la aceleracion...',
          options: ['Se reduce a la mitad', 'Se mantiene igual', 'Se duplica', 'Se cuadruplica'],
          correctIndex: 2,
          explanation: 'Segun F=ma, si F se duplica y m es constante, a se duplica.',
        },
        {
          id: 'q3',
          question: 'Como funcionan los cohetes?',
          options: ['Empujan el aire', 'Accion-reaccion', 'Gravedad', 'Magnetismo'],
          correctIndex: 1,
          explanation: 'Los cohetes expulsan gas hacia atras, y la reaccion los empuja hacia adelante.',
        },
      ],
    },
  ],
};

const PHYSICS_ENERGY: Module = {
  id: 'phys-energy',
  name: 'Energia',
  description: 'Formas y transformaciones',
  branch: 'physics',
  icon: '⚡',
  color: '#eab308',
  difficulty: 'intermediate',
  requiredXP: 300,
  lessons: [
    {
      id: 'phys-energy-1',
      title: 'Tipos de Energia',
      description: 'Cinetica, potencial y mas',
      branch: 'physics',
      type: 'lesson',
      difficulty: 'intermediate',
      xp: 65,
      duration: 15,
      icon: '🔋',
      theory: 'La energia es la capacidad de realizar trabajo. Existe como energia cinetica (movimiento), potencial (almacenada), termica (calor), electrica, y mas.',
      facts: [
        'La energia no se crea ni se destruye, solo se transforma',
        'El Sol produce energia por fusion nuclear',
        'Un rayo tiene suficiente energia para tostar 100,000 panes',
        'Tu cuerpo convierte comida en energia quimica',
      ],
    },
    {
      id: 'phys-energy-2',
      title: 'Energia Cinetica y Potencial',
      description: 'Movimiento y altura',
      branch: 'physics',
      type: 'experiment',
      difficulty: 'intermediate',
      xp: 90,
      duration: 20,
      icon: '🎢',
      steps: [
        {
          id: 'step-1',
          title: 'Montana rusa virtual',
          instruction: 'Observa el carrito en lo alto de la montana rusa. Tiene energia potencial maxima.',
          expectedResult: 'Energia potencial = altura x masa x gravedad',
        },
        {
          id: 'step-2',
          title: 'Bajando la pendiente',
          instruction: 'Suelta el carrito. La energia potencial se convierte en cinetica.',
          expectedResult: 'Velocidad maxima en el punto mas bajo',
        },
        {
          id: 'step-3',
          title: 'Subiendo de nuevo',
          instruction: 'El carrito sube y la energia cinetica vuelve a ser potencial.',
          expectedResult: 'Llega casi a la misma altura (menos friccion)',
        },
      ],
      simulation: 'physics-simulation',
    },
    {
      id: 'phys-energy-3',
      title: 'Circuitos Electricos',
      description: 'Corriente y voltaje',
      branch: 'physics',
      type: 'experiment',
      difficulty: 'intermediate',
      xp: 95,
      duration: 22,
      icon: '💡',
      steps: [
        {
          id: 'step-1',
          title: 'Circuito simple',
          instruction: 'Conecta una bateria, un cable y una ampolleta.',
          expectedResult: 'La ampolleta se enciende',
        },
        {
          id: 'step-2',
          title: 'Circuito en serie',
          instruction: 'Agrega otra ampolleta en serie.',
          expectedResult: 'Ambas brillan menos',
        },
        {
          id: 'step-3',
          title: 'Circuito en paralelo',
          instruction: 'Conecta las ampolletas en paralelo.',
          expectedResult: 'Ambas brillan con intensidad normal',
        },
        {
          id: 'step-4',
          title: 'Agrega un interruptor',
          instruction: 'Coloca un interruptor para controlar el circuito.',
          expectedResult: 'El interruptor controla el flujo',
        },
      ],
      simulation: 'circuit',
    },
  ],
};

// ===========================================
// EARTH SCIENCE MODULES
// ===========================================

const EARTH_PLANET: Module = {
  id: 'earth-planet',
  name: 'Nuestro Planeta',
  description: 'Estructura y movimientos de la Tierra',
  branch: 'earth-science',
  icon: '🌍',
  color: '#06b6d4',
  difficulty: 'beginner',
  requiredXP: 0,
  lessons: [
    {
      id: 'earth-planet-1',
      title: 'Capas de la Tierra',
      description: 'Corteza, manto y nucleo',
      branch: 'earth-science',
      type: 'lesson',
      difficulty: 'beginner',
      xp: 55,
      duration: 12,
      icon: '🥚',
      theory: 'La Tierra tiene capas como una cebolla: la corteza (donde vivimos), el manto (roca caliente) y el nucleo (hierro solido y liquido).',
      facts: [
        'La corteza tiene solo 30km de espesor promedio',
        'El nucleo esta a 5000°C, tan caliente como el Sol',
        'El manto se mueve lentamente, moviendo los continentes',
        'Chile esta en el Cinturon de Fuego del Pacifico',
      ],
    },
    {
      id: 'earth-planet-2',
      title: 'Placas Tectonicas',
      description: 'Por que hay terremotos',
      branch: 'earth-science',
      type: 'lesson',
      difficulty: 'beginner',
      xp: 65,
      duration: 15,
      icon: '🗺️',
      theory: 'La corteza terrestre esta dividida en placas que flotan sobre el manto. Cuando chocan o se separan, causan terremotos y volcanes.',
      facts: [
        'Hay 15 placas tectonicas principales',
        'Chile tiene el terremoto mas grande registrado (9.5 en 1960)',
        'Los Andes se formaron por el choque de placas',
        'Las placas se mueven 2-10 cm por año',
      ],
    },
    {
      id: 'earth-planet-3',
      title: 'Volcanes',
      description: 'Montanas de fuego',
      branch: 'earth-science',
      type: 'experiment',
      difficulty: 'beginner',
      xp: 80,
      duration: 18,
      icon: '🌋',
      steps: [
        {
          id: 'step-1',
          title: 'Estructura del volcan',
          instruction: 'Explora las partes de un volcan: camara magmatica, chimenea, crater.',
          expectedResult: 'Identificar partes del volcan',
        },
        {
          id: 'step-2',
          title: 'Acumulacion de presion',
          instruction: 'Observa como el magma sube por presion.',
          expectedResult: 'Presion aumenta bajo el volcan',
        },
        {
          id: 'step-3',
          title: 'Erupcion',
          instruction: 'Simula una erupcion volcanica.',
          expectedResult: 'Lava, ceniza y gases expulsados',
        },
      ],
      simulation: 'physics-simulation',
    },
    {
      id: 'earth-planet-4',
      title: 'Quiz: La Tierra',
      description: 'Pon a prueba tu conocimiento',
      branch: 'earth-science',
      type: 'quiz',
      difficulty: 'beginner',
      xp: 85,
      duration: 10,
      icon: '❓',
      questions: [
        {
          id: 'q1',
          question: 'Cual es la capa mas externa de la Tierra?',
          options: ['Nucleo', 'Manto', 'Corteza', 'Atmosfera'],
          correctIndex: 2,
          explanation: 'La corteza es la capa solida externa donde vivimos.',
        },
        {
          id: 'q2',
          question: 'Que causa los terremotos?',
          options: ['El viento', 'Las mareas', 'Movimiento de placas', 'La Luna'],
          correctIndex: 2,
          explanation: 'Los terremotos ocurren cuando las placas tectonicas se mueven.',
        },
        {
          id: 'q3',
          question: 'Donde esta el Cinturon de Fuego?',
          options: ['Atlantico', 'Pacifico', 'Indico', 'Artico'],
          correctIndex: 1,
          explanation: 'El Cinturon de Fuego rodea el Oceano Pacifico, incluyendo Chile.',
        },
      ],
    },
  ],
};

const EARTH_WEATHER: Module = {
  id: 'earth-weather',
  name: 'Clima y Tiempo',
  description: 'Atmosfera y fenomenos meteorologicos',
  branch: 'earth-science',
  icon: '🌤️',
  color: '#0ea5e9',
  difficulty: 'intermediate',
  requiredXP: 350,
  lessons: [
    {
      id: 'earth-weather-1',
      title: 'La Atmosfera',
      description: 'Capas del aire',
      branch: 'earth-science',
      type: 'lesson',
      difficulty: 'intermediate',
      xp: 60,
      duration: 12,
      icon: '🌫️',
      theory: 'La atmosfera es la capa de gases que rodea la Tierra. Tiene capas: troposfera (donde vivimos), estratosfera (capa de ozono), y mas.',
      facts: [
        'El 78% del aire es nitrogeno, 21% oxigeno',
        'La troposfera tiene solo 12km de altura',
        'La capa de ozono nos protege de rayos UV',
        'Sin atmosfera, la Tierra seria como la Luna',
      ],
    },
    {
      id: 'earth-weather-2',
      title: 'El Ciclo del Agua',
      description: 'Evaporacion, condensacion, precipitacion',
      branch: 'earth-science',
      type: 'experiment',
      difficulty: 'intermediate',
      xp: 85,
      duration: 20,
      icon: '💧',
      steps: [
        {
          id: 'step-1',
          title: 'Evaporacion',
          instruction: 'El sol calienta el agua del oceano, que se evapora.',
          expectedResult: 'Vapor de agua sube a la atmosfera',
        },
        {
          id: 'step-2',
          title: 'Condensacion',
          instruction: 'El vapor se enfria y forma nubes.',
          expectedResult: 'Gotas de agua forman nubes',
        },
        {
          id: 'step-3',
          title: 'Precipitacion',
          instruction: 'Las gotas se hacen grandes y caen como lluvia.',
          expectedResult: 'Lluvia, nieve o granizo',
        },
        {
          id: 'step-4',
          title: 'Escorrentia',
          instruction: 'El agua fluye de vuelta al oceano.',
          expectedResult: 'Rios llevan agua al mar',
        },
      ],
      simulation: 'weather',
    },
    {
      id: 'earth-weather-3',
      title: 'Cambio Climatico',
      description: 'El calentamiento global',
      branch: 'earth-science',
      type: 'lesson',
      difficulty: 'intermediate',
      xp: 75,
      duration: 18,
      icon: '🌡️',
      theory: 'El cambio climatico es el aumento de temperatura global causado por gases de efecto invernadero como el CO2. Afecta el clima, los glaciares y los ecosistemas.',
      facts: [
        'La temperatura ha subido 1.1°C desde 1880',
        'Los glaciares de Chile estan retrocediendo',
        'El nivel del mar sube 3mm por año',
        'Chile se comprometio a ser carbono neutral para 2050',
      ],
    },
  ],
};

const EARTH_SPACE: Module = {
  id: 'earth-space',
  name: 'Sistema Solar',
  description: 'Explora el Sol, los 8 planetas, lunas, asteroides y la exploracion espacial',
  branch: 'earth-science',
  icon: '🪐',
  color: '#6366f1',
  difficulty: 'intermediate',
  requiredXP: 450,
  lessons: [
    // Leccion 1: Introduccion al Sistema Solar
    {
      id: 'earth-space-1',
      title: 'Que es el Sistema Solar?',
      description: 'Nuestro vecindario cosmico',
      branch: 'earth-science',
      type: 'lesson',
      difficulty: 'intermediate',
      xp: 50,
      duration: 10,
      icon: '🌌',
      theory: 'El Sistema Solar es nuestra familia cosmica: el Sol, 8 planetas, lunas, asteroides y cometas. Todo orbita alrededor del Sol por su enorme gravedad. Se formo hace 4.6 mil millones de años de una nube de gas y polvo.',
      facts: [
        'El Sistema Solar tiene 4.6 mil millones de años',
        'Pluton fue reclasificado como planeta enano en 2006',
        'El Sistema Solar viaja a 828,000 km/h alrededor de la galaxia',
        'Hay mas de 200 lunas conocidas en el Sistema Solar',
      ],
    },
    // Leccion 2: El Sol
    {
      id: 'earth-space-2',
      title: 'El Sol: Nuestra Estrella',
      description: 'El motor del Sistema Solar',
      branch: 'earth-science',
      type: 'lesson',
      difficulty: 'intermediate',
      xp: 60,
      duration: 12,
      icon: '☀️',
      theory: 'El Sol es una estrella de tamaño mediano. Produce energia por fusion nuclear, convirtiendo hidrogeno en helio. Sin el Sol, no habria luz, calor ni vida en la Tierra.',
      facts: [
        'El Sol contiene 99.86% de toda la masa del Sistema Solar',
        'Cabrian 1.3 millones de Tierras dentro del Sol',
        'La luz del Sol tarda 8 minutos en llegar a la Tierra',
        'La temperatura del nucleo es 15 millones de grados Celsius',
        'El Sol tiene manchas solares que pueden ser mas grandes que la Tierra',
      ],
    },
    // Leccion 3: Planetas Rocosos
    {
      id: 'earth-space-3',
      title: 'Planetas Rocosos',
      description: 'Mercurio, Venus, Tierra y Marte',
      branch: 'earth-science',
      type: 'experiment',
      difficulty: 'intermediate',
      xp: 75,
      duration: 18,
      icon: '🪨',
      steps: [
        {
          id: 'step-1',
          title: 'Mercurio: El Mensajero',
          instruction: 'Explora Mercurio, el planeta mas cercano al Sol. Observa sus crateres y temperaturas extremas.',
          expectedResult: 'Pequeño, lleno de crateres, sin atmosfera, -180°C a 430°C',
        },
        {
          id: 'step-2',
          title: 'Venus: El Gemelo Infernal',
          instruction: 'Visita Venus, casi del tamaño de la Tierra pero con un efecto invernadero extremo.',
          expectedResult: 'Nubes de acido sulfurico, 465°C, presion aplastante',
        },
        {
          id: 'step-3',
          title: 'Tierra: Nuestro Hogar',
          instruction: 'Observa la Tierra desde el espacio. Es el unico planeta con agua liquida y vida conocida.',
          expectedResult: 'Oceanos azules, continentes verdes, atmosfera respirable',
        },
        {
          id: 'step-4',
          title: 'Marte: El Planeta Rojo',
          instruction: 'Explora Marte con sus volcanes gigantes y canales secos.',
          expectedResult: 'Rojo por oxido de hierro, Monte Olimpo (el volcan mas grande), polos de hielo',
        },
      ],
      simulation: 'solar-system',
    },
    // Leccion 4: Planetas Gigantes
    {
      id: 'earth-space-4',
      title: 'Planetas Gigantes',
      description: 'Jupiter, Saturno, Urano y Neptuno',
      branch: 'earth-science',
      type: 'experiment',
      difficulty: 'intermediate',
      xp: 80,
      duration: 20,
      icon: '🪐',
      steps: [
        {
          id: 'step-1',
          title: 'Jupiter: El Rey',
          instruction: 'Explora Jupiter, el planeta mas grande. Observa la Gran Mancha Roja, una tormenta de 400 años.',
          expectedResult: 'Gigante gaseoso, 79+ lunas, bandas de nubes, campo magnetico enorme',
        },
        {
          id: 'step-2',
          title: 'Saturno: El Senor de los Anillos',
          instruction: 'Admira los espectaculares anillos de Saturno, hechos de hielo y roca.',
          expectedResult: 'Anillos de 282,000 km de ancho pero solo 10 metros de grosor',
        },
        {
          id: 'step-3',
          title: 'Urano: El Planeta Inclinado',
          instruction: 'Observa Urano, que rota de lado como una pelota rodando.',
          expectedResult: 'Azul-verde, inclinado 98°, 27 lunas, anillos tenues',
        },
        {
          id: 'step-4',
          title: 'Neptuno: El Gigante Azul',
          instruction: 'Visita Neptuno, el planeta mas ventoso con vientos de 2,100 km/h.',
          expectedResult: 'Azul intenso, vientos supersónicos, Gran Mancha Oscura',
        },
      ],
      simulation: 'solar-system',
    },
    // Leccion 5: Lunas, Asteroides y Cometas
    {
      id: 'earth-space-5',
      title: 'Lunas, Asteroides y Cometas',
      description: 'Los otros habitantes del Sistema Solar',
      branch: 'earth-science',
      type: 'lesson',
      difficulty: 'intermediate',
      xp: 65,
      duration: 15,
      icon: '☄️',
      theory: 'Ademas de planetas, el Sistema Solar tiene lunas (satelites naturales), asteroides (rocas entre Marte y Jupiter) y cometas (bolas de hielo y polvo con colas brillantes).',
      facts: [
        'La Luna de la Tierra se formo de un impacto gigante hace 4.5 mil millones de años',
        'Europa (luna de Jupiter) tiene un oceano bajo su hielo que podria tener vida',
        'Titan (luna de Saturno) tiene lagos de metano liquido',
        'El cinturon de asteroides contiene millones de rocas espaciales',
        'Los cometas vienen de la Nube de Oort, a 1 año luz de distancia',
        'El cometa Halley pasa cada 76 años (proximo en 2061)',
      ],
    },
    // Leccion 6: Exploracion Espacial
    {
      id: 'earth-space-6',
      title: 'Exploracion Espacial',
      description: 'La humanidad conquista el cosmos',
      branch: 'earth-science',
      type: 'lesson',
      difficulty: 'intermediate',
      xp: 70,
      duration: 15,
      icon: '🚀',
      theory: 'Desde 1957, hemos enviado naves a todos los planetas. El primer satelite fue Sputnik (1957), el primer humano en el espacio fue Yuri Gagarin (1961), y Neil Armstrong piso la Luna en 1969.',
      facts: [
        'Voyager 1 es el objeto humano mas lejano, a 24 mil millones de km',
        'El rover Perseverance busca vida antigua en Marte',
        'La Estacion Espacial Internacional tiene astronautas desde el año 2000',
        'SpaceX y NASA planean enviar humanos a Marte en los 2030s',
        'El telescopio James Webb puede ver galaxias formandose hace 13 mil millones de años',
        'Chile tiene los mejores observatorios del mundo por su cielo despejado',
      ],
    },
    // Leccion 7: Quiz Final
    {
      id: 'earth-space-7',
      title: 'Quiz: Sistema Solar Completo',
      description: 'Demuestra tu conocimiento espacial',
      branch: 'earth-science',
      type: 'quiz',
      difficulty: 'intermediate',
      xp: 100,
      duration: 15,
      icon: '🏆',
      questions: [
        {
          id: 'q1',
          question: 'Cual es el planeta mas grande del Sistema Solar?',
          options: ['Saturno', 'Jupiter', 'Urano', 'Neptuno'],
          correctIndex: 1,
          explanation: 'Jupiter es el planeta mas grande, 11 veces el diametro de la Tierra y 318 veces su masa.',
        },
        {
          id: 'q2',
          question: 'Cuanto tarda la luz del Sol en llegar a la Tierra?',
          options: ['1 segundo', '8 minutos', '1 hora', '1 dia'],
          correctIndex: 1,
          explanation: 'La luz viaja a 300,000 km/s y tarda 8 minutos en recorrer los 150 millones de km.',
        },
        {
          id: 'q3',
          question: 'Que planeta tiene los anillos mas espectaculares?',
          options: ['Jupiter', 'Urano', 'Saturno', 'Neptuno'],
          correctIndex: 2,
          explanation: 'Saturno tiene los anillos mas grandes y visibles, aunque Jupiter, Urano y Neptuno tambien tienen anillos.',
        },
        {
          id: 'q4',
          question: 'Cual es el planeta mas caliente?',
          options: ['Mercurio', 'Venus', 'Marte', 'Jupiter'],
          correctIndex: 1,
          explanation: 'Venus es el mas caliente (465°C) por su efecto invernadero extremo, aunque Mercurio esta mas cerca del Sol.',
        },
        {
          id: 'q5',
          question: 'Que luna de Jupiter podria tener vida?',
          options: ['Io', 'Ganimedes', 'Europa', 'Calisto'],
          correctIndex: 2,
          explanation: 'Europa tiene un oceano de agua liquida bajo su corteza de hielo, un ambiente prometedor para la vida.',
        },
        {
          id: 'q6',
          question: 'Quien fue el primer humano en pisar la Luna?',
          options: ['Yuri Gagarin', 'Buzz Aldrin', 'Neil Armstrong', 'John Glenn'],
          correctIndex: 2,
          explanation: 'Neil Armstrong piso la Luna el 20 de julio de 1969 durante la mision Apollo 11.',
        },
        {
          id: 'q7',
          question: 'Que porcentaje de la masa del Sistema Solar tiene el Sol?',
          options: ['50%', '75%', '90%', '99.86%'],
          correctIndex: 3,
          explanation: 'El Sol contiene el 99.86% de toda la masa del Sistema Solar. Los 8 planetas juntos son solo 0.14%.',
        },
      ],
    },
  ],
};

// ===========================================
// ALL MODULES
// ===========================================

export const ALL_MODULES: Module[] = [
  // Biology
  BIOLOGY_CELLS,
  BIOLOGY_BODY,
  BIOLOGY_ECOSYSTEMS,
  // Chemistry
  CHEMISTRY_MATTER,
  CHEMISTRY_REACTIONS,
  // Physics
  PHYSICS_FORCES,
  PHYSICS_ENERGY,
  // Earth Science
  EARTH_PLANET,
  EARTH_WEATHER,
  EARTH_SPACE,
];

// ===========================================
// ACHIEVEMENTS
// ===========================================

export const ACHIEVEMENTS: Achievement[] = [
  // Lessons
  { id: 'first-lesson', name: 'Primer Paso', description: 'Completa tu primera leccion', icon: '🎯', type: 'lessons', requirement: 1, isUnlocked: false },
  { id: 'lessons-5', name: 'Estudiante Curioso', description: 'Completa 5 lecciones', icon: '📚', type: 'lessons', requirement: 5, isUnlocked: false },
  { id: 'lessons-15', name: 'Explorador Cientifico', description: 'Completa 15 lecciones', icon: '🔬', type: 'lessons', requirement: 15, isUnlocked: false },
  { id: 'lessons-30', name: 'Maestro del Conocimiento', description: 'Completa 30 lecciones', icon: '🎓', type: 'lessons', requirement: 30, isUnlocked: false },

  // Experiments
  { id: 'first-exp', name: 'Primer Experimento', description: 'Completa tu primer experimento', icon: '🧪', type: 'experiments', requirement: 1, isUnlocked: false },
  { id: 'exp-5', name: 'Cientifico Junior', description: 'Completa 5 experimentos', icon: '⚗️', type: 'experiments', requirement: 5, isUnlocked: false },
  { id: 'exp-10', name: 'Investigador', description: 'Completa 10 experimentos', icon: '🔭', type: 'experiments', requirement: 10, isUnlocked: false },

  // Streak
  { id: 'streak-3', name: 'Constancia', description: 'Mantén una racha de 3 dias', icon: '🔥', type: 'streak', requirement: 3, isUnlocked: false },
  { id: 'streak-7', name: 'Dedicacion', description: 'Mantén una racha de 7 dias', icon: '⚡', type: 'streak', requirement: 7, isUnlocked: false },
  { id: 'streak-30', name: 'Imparable', description: 'Mantén una racha de 30 dias', icon: '💎', type: 'streak', requirement: 30, isUnlocked: false },

  // XP
  { id: 'xp-500', name: 'Acumulador', description: 'Gana 500 XP', icon: '⭐', type: 'xp', requirement: 500, isUnlocked: false },
  { id: 'xp-2000', name: 'Experimentado', description: 'Gana 2000 XP', icon: '🌟', type: 'xp', requirement: 2000, isUnlocked: false },
  { id: 'xp-5000', name: 'Leyenda', description: 'Gana 5000 XP', icon: '💫', type: 'xp', requirement: 5000, isUnlocked: false },

  // Level
  { id: 'level-5', name: 'Ascenso', description: 'Alcanza nivel 5', icon: '📈', type: 'level', requirement: 5, isUnlocked: false },
  { id: 'level-10', name: 'Veterano', description: 'Alcanza nivel 10', icon: '🏆', type: 'level', requirement: 10, isUnlocked: false },

  // Branch specific
  { id: 'bio-master', name: 'Biologo', description: 'Completa todas las lecciones de Biologia', icon: '🧬', type: 'branch', requirement: 12, branch: 'biology', isUnlocked: false },
  { id: 'chem-master', name: 'Quimico', description: 'Completa todas las lecciones de Quimica', icon: '⚗️', type: 'branch', requirement: 7, branch: 'chemistry', isUnlocked: false },
  { id: 'phys-master', name: 'Fisico', description: 'Completa todas las lecciones de Fisica', icon: '⚛️', type: 'branch', requirement: 8, branch: 'physics', isUnlocked: false },
  { id: 'earth-master', name: 'Geologo', description: 'Completa todas las lecciones de Ciencias de la Tierra', icon: '🌍', type: 'branch', requirement: 11, branch: 'earth-science', isUnlocked: false },
];

// ===========================================
// LEVELS
// ===========================================

export const LEVELS: LevelConfig[] = [
  { level: 1, name: 'Curioso', xpRequired: 0, icon: '🌱', color: '#22c55e' },
  { level: 2, name: 'Aprendiz', xpRequired: 100, icon: '📖', color: '#84cc16' },
  { level: 3, name: 'Estudiante', xpRequired: 250, icon: '✏️', color: '#eab308' },
  { level: 4, name: 'Explorador', xpRequired: 450, icon: '🔍', color: '#f97316' },
  { level: 5, name: 'Investigador', xpRequired: 700, icon: '🔬', color: '#ef4444' },
  { level: 6, name: 'Cientifico Jr', xpRequired: 1000, icon: '🧪', color: '#ec4899' },
  { level: 7, name: 'Cientifico', xpRequired: 1400, icon: '⚗️', color: '#d946ef' },
  { level: 8, name: 'Experto', xpRequired: 1900, icon: '🎯', color: '#a855f7' },
  { level: 9, name: 'Maestro', xpRequired: 2500, icon: '🎓', color: '#8b5cf6' },
  { level: 10, name: 'Sabio', xpRequired: 3200, icon: '📚', color: '#6366f1' },
  { level: 11, name: 'Genio', xpRequired: 4000, icon: '🧠', color: '#3b82f6' },
  { level: 12, name: 'Visionario', xpRequired: 5000, icon: '🔭', color: '#0ea5e9' },
  { level: 13, name: 'Pionero', xpRequired: 6200, icon: '🚀', color: '#06b6d4' },
  { level: 14, name: 'Nobel', xpRequired: 7500, icon: '🏅', color: '#14b8a6' },
  { level: 15, name: 'Einstein', xpRequired: 10000, icon: '⚛️', color: '#ffd700' },
];

// ===========================================
// HELPER FUNCTIONS
// ===========================================

export function getModulesByBranch(branch: ScienceBranch): Module[] {
  return ALL_MODULES.filter(m => m.branch === branch);
}

export function getLevelByXP(xp: number): LevelConfig {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].xpRequired) {
      return LEVELS[i];
    }
  }
  return LEVELS[0];
}

export function getNextLevel(currentLevel: number): LevelConfig | null {
  const idx = LEVELS.findIndex(l => l.level === currentLevel);
  if (idx >= 0 && idx < LEVELS.length - 1) {
    return LEVELS[idx + 1];
  }
  return null;
}

export function getBranchInfo(branch: ScienceBranch) {
  const info = {
    biology: { name: 'Biologia', icon: '🧬', color: '#22c55e', description: 'La ciencia de la vida' },
    chemistry: { name: 'Quimica', icon: '⚗️', color: '#8b5cf6', description: 'La ciencia de la materia' },
    physics: { name: 'Fisica', icon: '⚛️', color: '#3b82f6', description: 'La ciencia del movimiento y energia' },
    'earth-science': { name: 'Ciencias de la Tierra', icon: '🌍', color: '#06b6d4', description: 'Nuestro planeta y el universo' },
  };
  return info[branch];
}
