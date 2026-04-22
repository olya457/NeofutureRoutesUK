import { QuizLevel } from '../types/quiz';

export const QUIZ_LEVELS: QuizLevel[] = [
  {
    id: 1,
    title: 'Core Signals',
    subtitle: 'Fundamental concepts',
    emoji: '📡',
    questions: [
      {
        id: 1,
        question: 'What does a radio telescope detect?',
        answers: [
          { text: 'Heat waves', correct: false },
          { text: 'Light reflections', correct: false },
          { text: 'Radio waves from space', correct: true },
          { text: 'Sound vibrations', correct: false },
        ],
      },
      {
        id: 2,
        question: 'What is the main function of a power station?',
        answers: [
          { text: 'Store energy', correct: false },
          { text: 'Generate electricity', correct: true },
          { text: 'Produce fuel', correct: false },
          { text: 'Filter air', correct: false },
        ],
      },
      {
        id: 3,
        question: 'What is a synchrotron used for?',
        answers: [
          { text: 'Building satellites', correct: false },
          { text: 'Studying atomic structures', correct: true },
          { text: 'Generating sound waves', correct: false },
          { text: 'Weather forecasts', correct: false },
        ],
      },
      {
        id: 4,
        question: 'What does a fusion reactor attempt to replicate?',
        answers: [
          { text: 'Ocean currents', correct: false },
          { text: 'The Sun\u2019s energy process', correct: true },
          { text: 'Earth\u2019s core', correct: false },
          { text: 'Wind patterns', correct: false },
        ],
      },
      {
        id: 5,
        question: 'What is a data center mainly used for?',
        answers: [
          { text: 'Data processing and storage', correct: true },
          { text: 'Food storage', correct: false },
          { text: 'Water supply', correct: false },
          { text: 'Transport control', correct: false },
        ],
      },
      {
        id: 6,
        question: 'What is infrastructure in a city?',
        answers: [
          { text: 'Tourist attractions', correct: false },
          { text: 'Core systems supporting operations', correct: true },
          { text: 'Decoration', correct: false },
          { text: 'Entertainment zones', correct: false },
        ],
      },
      {
        id: 7,
        question: 'Why are large scientific facilities restricted?',
        answers: [
          { text: 'They are private houses', correct: false },
          { text: 'They are abandoned', correct: false },
          { text: 'Safety and sensitive equipment', correct: true },
          { text: 'They are unfinished', correct: false },
        ],
      },
      {
        id: 8,
        question: 'What is renewable energy?',
        answers: [
          { text: 'Stored electricity', correct: false },
          { text: 'Nuclear waste', correct: false },
          { text: 'Reusable natural energy source', correct: true },
          { text: 'Limited resource', correct: false },
        ],
      },
      {
        id: 9,
        question: 'What does a control center do?',
        answers: [
          { text: 'Builds structures', correct: false },
          { text: 'Stores materials', correct: false },
          { text: 'Manages systems in real time', correct: true },
          { text: 'Creates designs', correct: false },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Systems & Flow',
    subtitle: 'How things move',
    emoji: '🌀',
    questions: [
      {
        id: 1,
        question: 'What is the purpose of a wind turbine?',
        answers: [
          { text: 'Convert wind into electricity', correct: true },
          { text: 'Store energy', correct: false },
          { text: 'Generate heat', correct: false },
          { text: 'Pump water', correct: false },
        ],
      },
      {
        id: 2,
        question: 'What is a tunnel-boring machine used for?',
        answers: [
          { text: 'Building roads', correct: false },
          { text: 'Lifting structures', correct: false },
          { text: 'Digging underground tunnels', correct: true },
          { text: 'Producing concrete', correct: false },
        ],
      },
      {
        id: 3,
        question: 'What does the Thames Barrier protect against?',
        answers: [
          { text: 'Air pollution', correct: false },
          { text: 'Flooding', correct: true },
          { text: 'Traffic', correct: false },
          { text: 'Heat loss', correct: false },
        ],
      },
      {
        id: 4,
        question: 'What is the main role of a railway network like HS2?',
        answers: [
          { text: 'Energy storage', correct: false },
          { text: 'Fast transportation between cities', correct: true },
          { text: 'Water supply', correct: false },
          { text: 'Data transfer', correct: false },
        ],
      },
      {
        id: 5,
        question: 'Why are underground systems used in cities?',
        answers: [
          { text: 'Reduce population', correct: false },
          { text: 'Save space and improve efficiency', correct: true },
          { text: 'Increase noise', correct: false },
          { text: 'Lower temperatures', correct: false },
        ],
      },
      {
        id: 6,
        question: 'What does a power grid do?',
        answers: [
          { text: 'Stores energy', correct: false },
          { text: 'Distributes electricity', correct: true },
          { text: 'Produces fuel', correct: false },
          { text: 'Filters water', correct: false },
        ],
      },
      {
        id: 7,
        question: 'What is Crossrail designed for?',
        answers: [
          { text: 'Cargo shipping', correct: false },
          { text: 'Urban high-capacity transport', correct: true },
          { text: 'Energy storage', correct: false },
          { text: 'Water transport', correct: false },
        ],
      },
      {
        id: 8,
        question: 'What is the role of a bridge like Severn Bridge?',
        answers: [
          { text: 'Generate power', correct: false },
          { text: 'Transport connection', correct: true },
          { text: 'Store vehicles', correct: false },
          { text: 'Control weather', correct: false },
        ],
      },
      {
        id: 9,
        question: 'What does offshore infrastructure refer to?',
        answers: [
          { text: 'Land-based systems', correct: false },
          { text: 'Systems built at sea', correct: true },
          { text: 'Underground tunnels', correct: false },
          { text: 'City networks', correct: false },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Innovation & Tech',
    subtitle: 'Where ideas happen',
    emoji: '💡',
    questions: [
      {
        id: 1,
        question: 'What is an innovation hub?',
        answers: [
          { text: 'A museum', correct: false },
          { text: 'A place for tech collaboration', correct: true },
          { text: 'A transport station', correct: false },
          { text: 'A storage facility', correct: false },
        ],
      },
      {
        id: 2,
        question: 'What is AI mainly used for?',
        answers: [
          { text: 'Painting', correct: false },
          { text: 'Machine decision systems', correct: true },
          { text: 'Building roads', correct: false },
          { text: 'Cooking', correct: false },
        ],
      },
      {
        id: 3,
        question: 'What happens in robotics labs?',
        answers: [
          { text: 'Farming', correct: false },
          { text: 'Creating autonomous systems', correct: true },
          { text: 'Printing books', correct: false },
          { text: 'Managing traffic', correct: false },
        ],
      },
      {
        id: 4,
        question: 'What defines a tech district like Canary Wharf?',
        answers: [
          { text: 'Old buildings', correct: false },
          { text: 'Finance and technology concentration', correct: true },
          { text: 'Tourism', correct: false },
          { text: 'Agriculture', correct: false },
        ],
      },
      {
        id: 5,
        question: 'What is a science park?',
        answers: [
          { text: 'A park for relaxation', correct: false },
          { text: 'Research and development area', correct: true },
          { text: 'Entertainment zone', correct: false },
          { text: 'Industrial plant', correct: false },
        ],
      },
      {
        id: 6,
        question: 'What is data in modern systems?',
        answers: [
          { text: 'Optional', correct: false },
          { text: 'Core resource for decisions', correct: true },
          { text: 'Visual element', correct: false },
          { text: 'Backup only', correct: false },
        ],
      },
      {
        id: 7,
        question: 'Why are modern labs highly secured?',
        answers: [
          { text: 'Reduce noise', correct: false },
          { text: 'Protect research and equipment', correct: true },
          { text: 'Hide workers', correct: false },
          { text: 'Save space', correct: false },
        ],
      },
      {
        id: 8,
        question: 'What is a key feature of modern architecture?',
        answers: [
          { text: 'Random design', correct: false },
          { text: 'Smart and efficient systems', correct: true },
          { text: 'Small size', correct: false },
          { text: 'Bright colors', correct: false },
        ],
      },
      {
        id: 9,
        question: 'What connects tech companies in clusters?',
        answers: [
          { text: 'Distance', correct: false },
          { text: 'Fast collaboration and shared resources', correct: true },
          { text: 'Tourism', correct: false },
          { text: 'Entertainment', correct: false },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Deep Systems',
    subtitle: 'Beyond the surface',
    emoji: '🔭',
    questions: [
      {
        id: 1,
        question: 'What is fusion energy?',
        answers: [
          { text: 'Chemical reaction', correct: false },
          { text: 'Nuclear process like in the Sun', correct: true },
          { text: 'Wind energy', correct: false },
          { text: 'Stored electricity', correct: false },
        ],
      },
      {
        id: 2,
        question: 'What is a major challenge of fusion?',
        answers: [
          { text: 'Too cheap', correct: false },
          { text: 'Containing extreme temperatures', correct: true },
          { text: 'Too slow', correct: false },
          { text: 'Too simple', correct: false },
        ],
      },
      {
        id: 3,
        question: 'What does a synchrotron reveal?',
        answers: [
          { text: 'Weather', correct: false },
          { text: 'Atomic structures', correct: true },
          { text: 'Sound waves', correct: false },
          { text: 'Light only', correct: false },
        ],
      },
      {
        id: 4,
        question: 'Why are observatories placed far from cities?',
        answers: [
          { text: 'Cheaper land', correct: false },
          { text: 'Less interference', correct: true },
          { text: 'More space', correct: false },
          { text: 'Better roads', correct: false },
        ],
      },
      {
        id: 5,
        question: 'What is infrastructure in tech context?',
        answers: [
          { text: 'Design', correct: false },
          { text: 'Core systems supporting operations', correct: true },
          { text: 'Decoration', correct: false },
          { text: 'Interface', correct: false },
        ],
      },
      {
        id: 6,
        question: 'What is the purpose of a nuclear plant?',
        answers: [
          { text: 'Store energy', correct: false },
          { text: 'Generate electricity through atomic reactions', correct: true },
          { text: 'Heat water only', correct: false },
          { text: 'Build fuel', correct: false },
        ],
      },
      {
        id: 7,
        question: 'What is the role of data in science?',
        answers: [
          { text: 'Secondary', correct: false },
          { text: 'Central to research and operations', correct: true },
          { text: 'Decorative', correct: false },
          { text: 'Optional', correct: false },
        ],
      },
      {
        id: 8,
        question: 'What makes a location future-focused?',
        answers: [
          { text: 'Size', correct: false },
          { text: 'Innovation and active research', correct: true },
          { text: 'Age', correct: false },
          { text: 'Popularity', correct: false },
        ],
      },
      {
        id: 9,
        question: 'What is the main idea behind these locations?',
        answers: [
          { text: 'Tourism only', correct: false },
          { text: 'Real systems shaping the future', correct: true },
          { text: 'Entertainment', correct: false },
          { text: 'Shopping', correct: false },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Energy Logic',
    subtitle: 'Power in motion',
    emoji: '⚡',
    questions: [
      {
        id: 1,
        question: 'What does a turbine do in a power system?',
        answers: [
          { text: 'Stores energy', correct: false },
          { text: 'Converts motion into electricity', correct: true },
          { text: 'Filters air', correct: false },
          { text: 'Controls pressure', correct: false },
        ],
      },
      {
        id: 2,
        question: 'What is the main advantage of wind energy?',
        answers: [
          { text: 'Unlimited storage', correct: false },
          { text: 'Renewable source', correct: true },
          { text: 'High temperature output', correct: false },
          { text: 'Low cost equipment', correct: false },
        ],
      },
      {
        id: 3,
        question: 'What does a transformer do?',
        answers: [
          { text: 'Generates electricity', correct: false },
          { text: 'Changes voltage levels', correct: true },
          { text: 'Stores power', correct: false },
          { text: 'Produces heat', correct: false },
        ],
      },
      {
        id: 4,
        question: 'Why are offshore wind farms built at sea?',
        answers: [
          { text: 'Less space on land', correct: false },
          { text: 'Stronger and consistent winds', correct: true },
          { text: 'Lower costs', correct: false },
          { text: 'Easier maintenance', correct: false },
        ],
      },
      {
        id: 5,
        question: 'What is the function of a battery storage system?',
        answers: [
          { text: 'Produce electricity', correct: false },
          { text: 'Store excess energy', correct: true },
          { text: 'Increase voltage', correct: false },
          { text: 'Reduce noise', correct: false },
        ],
      },
      {
        id: 6,
        question: 'What is nuclear fission?',
        answers: [
          { text: 'Combining atoms', correct: false },
          { text: 'Splitting atoms to release energy', correct: true },
          { text: 'Heating water', correct: false },
          { text: 'Creating plasma', correct: false },
        ],
      },
      {
        id: 7,
        question: 'What controls energy flow in a grid?',
        answers: [
          { text: 'Roads', correct: false },
          { text: 'Control systems', correct: true },
          { text: 'Buildings', correct: false },
          { text: 'Pipelines', correct: false },
        ],
      },
      {
        id: 8,
        question: 'What is a smart grid?',
        answers: [
          { text: 'Manual system', correct: false },
          { text: 'Automated and responsive energy network', correct: true },
          { text: 'Storage unit', correct: false },
          { text: 'Power station', correct: false },
        ],
      },
      {
        id: 9,
        question: 'Why is energy infrastructure critical?',
        answers: [
          { text: 'Decoration', correct: false },
          { text: 'Supports all modern systems', correct: true },
          { text: 'Only for industry', correct: false },
          { text: 'Temporary use', correct: false },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Underground Systems',
    subtitle: 'Beneath the city',
    emoji: '🛤️',
    questions: [
      {
        id: 1,
        question: 'Why are tunnels built deep underground?',
        answers: [
          { text: 'For design', correct: false },
          { text: 'To avoid surface disruption', correct: true },
          { text: 'To reduce cost', correct: false },
          { text: 'For storage', correct: false },
        ],
      },
      {
        id: 2,
        question: 'What is ventilation used for in tunnels?',
        answers: [
          { text: 'Lighting', correct: false },
          { text: 'Air circulation and safety', correct: true },
          { text: 'Noise control', correct: false },
          { text: 'Water flow', correct: false },
        ],
      },
      {
        id: 3,
        question: 'What is a bunker designed for?',
        answers: [
          { text: 'Entertainment', correct: false },
          { text: 'Protection and survival', correct: true },
          { text: 'Transport', correct: false },
          { text: 'Storage', correct: false },
        ],
      },
      {
        id: 4,
        question: 'What does Mail Rail transport?',
        answers: [
          { text: 'People', correct: false },
          { text: 'Mail and packages', correct: true },
          { text: 'Water', correct: false },
          { text: 'Fuel', correct: false },
        ],
      },
      {
        id: 5,
        question: 'Why are underground systems automated?',
        answers: [
          { text: 'Reduce costs', correct: false },
          { text: 'Increase efficiency and reliability', correct: true },
          { text: 'Add complexity', correct: false },
          { text: 'Improve design', correct: false },
        ],
      },
      {
        id: 6,
        question: 'What is a deep-level tunnel?',
        answers: [
          { text: 'Surface tunnel', correct: false },
          { text: 'Tunnel far below ground level', correct: true },
          { text: 'Water tunnel', correct: false },
          { text: 'Open structure', correct: false },
        ],
      },
      {
        id: 7,
        question: 'What is a key challenge underground?',
        answers: [
          { text: 'Sunlight', correct: false },
          { text: 'Pressure and stability', correct: true },
          { text: 'Noise', correct: false },
          { text: 'Color', correct: false },
        ],
      },
      {
        id: 8,
        question: 'Why are some tunnels abandoned?',
        answers: [
          { text: 'Too small', correct: false },
          { text: 'No longer needed or outdated', correct: true },
          { text: 'Too expensive', correct: false },
          { text: 'Too visible', correct: false },
        ],
      },
      {
        id: 9,
        question: 'What is the benefit of underground logistics?',
        answers: [
          { text: 'Slower delivery', correct: false },
          { text: 'Faster and uninterrupted flow', correct: true },
          { text: 'More traffic', correct: false },
          { text: 'Higher costs', correct: false },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Urban Tech',
    subtitle: 'Cities of tomorrow',
    emoji: '🏙️',
    questions: [
      {
        id: 1,
        question: 'What defines a smart city?',
        answers: [
          { text: 'Old infrastructure', correct: false },
          { text: 'Use of data and technology', correct: true },
          { text: 'Large population', correct: false },
          { text: 'Tourism', correct: false },
        ],
      },
      {
        id: 2,
        question: 'What is urban data used for?',
        answers: [
          { text: 'Decoration', correct: false },
          { text: 'Improving city systems', correct: true },
          { text: 'Entertainment', correct: false },
          { text: 'Storage only', correct: false },
        ],
      },
      {
        id: 3,
        question: 'What is a digital district?',
        answers: [
          { text: 'Industrial zone', correct: false },
          { text: 'Area with tech companies and infrastructure', correct: true },
          { text: 'Residential area', correct: false },
          { text: 'Park', correct: false },
        ],
      },
      {
        id: 4,
        question: 'What is a key feature of modern buildings?',
        answers: [
          { text: 'Size', correct: false },
          { text: 'Smart systems integration', correct: true },
          { text: 'Color', correct: false },
          { text: 'Shape', correct: false },
        ],
      },
      {
        id: 5,
        question: 'Why are tech hubs important?',
        answers: [
          { text: 'Reduce population', correct: false },
          { text: 'Accelerate innovation', correct: true },
          { text: 'Lower costs', correct: false },
          { text: 'Increase noise', correct: false },
        ],
      },
      {
        id: 6,
        question: 'What connects modern urban systems?',
        answers: [
          { text: 'Roads only', correct: false },
          { text: 'Data networks', correct: true },
          { text: 'Buildings', correct: false },
          { text: 'Water', correct: false },
        ],
      },
      {
        id: 7,
        question: 'What is automation in cities?',
        answers: [
          { text: 'Manual work', correct: false },
          { text: 'Systems operating independently', correct: true },
          { text: 'Design', correct: false },
          { text: 'Transport only', correct: false },
        ],
      },
      {
        id: 8,
        question: 'What improves transport efficiency?',
        answers: [
          { text: 'More cars', correct: false },
          { text: 'Integrated systems', correct: true },
          { text: 'Larger roads', correct: false },
          { text: 'Less data', correct: false },
        ],
      },
      {
        id: 9,
        question: 'What is a core goal of urban tech?',
        answers: [
          { text: 'Decoration', correct: false },
          { text: 'Efficiency and optimization', correct: true },
          { text: 'Size', correct: false },
          { text: 'Complexity', correct: false },
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'Advanced Systems',
    subtitle: 'Beyond automation',
    emoji: '🧠',
    questions: [
      {
        id: 1,
        question: 'What is a control system?',
        answers: [
          { text: 'Storage unit', correct: false },
          { text: 'System that manages operations', correct: true },
          { text: 'Building', correct: false },
          { text: 'Power source', correct: false },
        ],
      },
      {
        id: 2,
        question: 'What is real-time data?',
        answers: [
          { text: 'Old data', correct: false },
          { text: 'Instant information updates', correct: true },
          { text: 'Stored data', correct: false },
          { text: 'Delayed input', correct: false },
        ],
      },
      {
        id: 3,
        question: 'Why are systems monitored continuously?',
        answers: [
          { text: 'For design', correct: false },
          { text: 'To ensure stability and safety', correct: true },
          { text: 'For storage', correct: false },
          { text: 'For speed', correct: false },
        ],
      },
      {
        id: 4,
        question: 'What is scalability in systems?',
        answers: [
          { text: 'Size only', correct: false },
          { text: 'Ability to grow and adapt', correct: true },
          { text: 'Shape', correct: false },
          { text: 'Speed', correct: false },
        ],
      },
      {
        id: 5,
        question: 'What is redundancy in infrastructure?',
        answers: [
          { text: 'Extra design', correct: false },
          { text: 'Backup systems for reliability', correct: true },
          { text: 'Decoration', correct: false },
          { text: 'Cost increase', correct: false },
        ],
      },
      {
        id: 6,
        question: 'What is a network in tech context?',
        answers: [
          { text: 'Building', correct: false },
          { text: 'Connected systems and nodes', correct: true },
          { text: 'Road', correct: false },
          { text: 'Machine', correct: false },
        ],
      },
      {
        id: 7,
        question: 'What is system optimization?',
        answers: [
          { text: 'Adding complexity', correct: false },
          { text: 'Improving efficiency and performance', correct: true },
          { text: 'Slowing processes', correct: false },
          { text: 'Reducing size', correct: false },
        ],
      },
      {
        id: 8,
        question: 'What is predictive analysis?',
        answers: [
          { text: 'Guessing', correct: false },
          { text: 'Using data to forecast outcomes', correct: true },
          { text: 'Storage', correct: false },
          { text: 'Design', correct: false },
        ],
      },
      {
        id: 9,
        question: 'What defines advanced infrastructure?',
        answers: [
          { text: 'Size', correct: false },
          { text: 'Integration, automation, and intelligence', correct: true },
          { text: 'Age', correct: false },
          { text: 'Cost', correct: false },
        ],
      },
    ],
  },
  {
    id: 9,
    title: 'Materials & Structures',
    subtitle: 'Engineering in detail',
    emoji: '🏗️',
    questions: [
      {
        id: 1,
        question: 'What is reinforced concrete used for?',
        answers: [
          { text: 'Decoration', correct: false },
          { text: 'Strong structural support', correct: true },
          { text: 'Data storage', correct: false },
          { text: 'Energy generation', correct: false },
        ],
      },
      {
        id: 2,
        question: 'Why is steel widely used in infrastructure?',
        answers: [
          { text: 'Cheap color', correct: false },
          { text: 'High strength and flexibility', correct: true },
          { text: 'Easy to paint', correct: false },
          { text: 'Lightweight only', correct: false },
        ],
      },
      {
        id: 3,
        question: 'What does insulation do in systems?',
        answers: [
          { text: 'Increases heat loss', correct: false },
          { text: 'Reduces energy transfer', correct: true },
          { text: 'Produces electricity', correct: false },
          { text: 'Controls sound only', correct: false },
        ],
      },
      {
        id: 4,
        question: 'What is a load-bearing structure?',
        answers: [
          { text: 'Decorative element', correct: false },
          { text: 'Supports weight of a system', correct: true },
          { text: 'Energy system', correct: false },
          { text: 'Data unit', correct: false },
        ],
      },
      {
        id: 5,
        question: 'Why are materials tested in labs?',
        answers: [
          { text: 'For design only', correct: false },
          { text: 'To ensure performance and safety', correct: true },
          { text: 'For color selection', correct: false },
          { text: 'To reduce cost', correct: false },
        ],
      },
      {
        id: 6,
        question: 'What is corrosion?',
        answers: [
          { text: 'Energy loss', correct: false },
          { text: 'Material degradation over time', correct: true },
          { text: 'Heat transfer', correct: false },
          { text: 'Data failure', correct: false },
        ],
      },
      {
        id: 7,
        question: 'What improves durability in infrastructure?',
        answers: [
          { text: 'Thin materials', correct: false },
          { text: 'Strong design and maintenance', correct: true },
          { text: 'Color coating', correct: false },
          { text: 'Speed', correct: false },
        ],
      },
      {
        id: 8,
        question: 'What is a composite material?',
        answers: [
          { text: 'Single element', correct: false },
          { text: 'Combination of materials for better performance', correct: true },
          { text: 'Liquid structure', correct: false },
          { text: 'Energy source', correct: false },
        ],
      },
      {
        id: 9,
        question: 'Why are structures designed with tolerance?',
        answers: [
          { text: 'For design', correct: false },
          { text: 'To handle stress and variation', correct: true },
          { text: 'To reduce size', correct: false },
          { text: 'To improve color', correct: false },
        ],
      },
    ],
  },
  {
    id: 10,
    title: 'Transport Systems',
    subtitle: 'People and goods on the move',
    emoji: '🚄',
    questions: [
      {
        id: 1,
        question: 'What defines high-speed rail?',
        answers: [
          { text: 'Large trains', correct: false },
          { text: 'Fast intercity travel systems', correct: true },
          { text: 'Underground tunnels', correct: false },
          { text: 'Cargo transport', correct: false },
        ],
      },
      {
        id: 2,
        question: 'What is a signaling system in transport?',
        answers: [
          { text: 'Lighting', correct: false },
          { text: 'Controls movement and safety', correct: true },
          { text: 'Storage', correct: false },
          { text: 'Communication only', correct: false },
        ],
      },
      {
        id: 3,
        question: 'Why are tunnels used in rail systems?',
        answers: [
          { text: 'For design', correct: false },
          { text: 'To bypass obstacles and cities', correct: true },
          { text: 'To reduce cost', correct: false },
          { text: 'For storage', correct: false },
        ],
      },
      {
        id: 4,
        question: 'What is a transport hub?',
        answers: [
          { text: 'Storage area', correct: false },
          { text: 'Connection point for multiple routes', correct: true },
          { text: 'Parking space', correct: false },
          { text: 'Control system', correct: false },
        ],
      },
      {
        id: 5,
        question: 'What improves transport efficiency?',
        answers: [
          { text: 'More stops', correct: false },
          { text: 'Integrated systems and planning', correct: true },
          { text: 'Larger vehicles', correct: false },
          { text: 'Slower speed', correct: false },
        ],
      },
      {
        id: 6,
        question: 'What is automation in transport?',
        answers: [
          { text: 'Manual control', correct: false },
          { text: 'Self-operating systems', correct: true },
          { text: 'Design', correct: false },
          { text: 'Speed increase only', correct: false },
        ],
      },
      {
        id: 7,
        question: 'What does capacity mean in transport?',
        answers: [
          { text: 'Speed', correct: false },
          { text: 'Number of users or volume handled', correct: true },
          { text: 'Cost', correct: false },
          { text: 'Distance', correct: false },
        ],
      },
      {
        id: 8,
        question: 'Why are underground rail systems important?',
        answers: [
          { text: 'Decoration', correct: false },
          { text: 'Save space and reduce congestion', correct: true },
          { text: 'Increase cost', correct: false },
          { text: 'Add complexity', correct: false },
        ],
      },
      {
        id: 9,
        question: 'What is real-time tracking used for?',
        answers: [
          { text: 'Design', correct: false },
          { text: 'Monitoring movement instantly', correct: true },
          { text: 'Storage', correct: false },
          { text: 'Speed control', correct: false },
        ],
      },
    ],
  },
  {
    id: 11,
    title: 'Data & Control',
    subtitle: 'Digital backbone',
    emoji: '🧬',
    questions: [
      {
        id: 1,
        question: 'What is a sensor?',
        answers: [
          { text: 'Storage device', correct: false },
          { text: 'Device that detects changes or inputs', correct: true },
          { text: 'Energy system', correct: false },
          { text: 'Structure', correct: false },
        ],
      },
      {
        id: 2,
        question: 'What is automation based on?',
        answers: [
          { text: 'Manual input', correct: false },
          { text: 'Data and control systems', correct: true },
          { text: 'Design', correct: false },
          { text: 'Storage', correct: false },
        ],
      },
      {
        id: 3,
        question: 'What is a feedback loop?',
        answers: [
          { text: 'Data storage', correct: false },
          { text: 'System adjusting based on output', correct: true },
          { text: 'Transport system', correct: false },
          { text: 'Structure', correct: false },
        ],
      },
      {
        id: 4,
        question: 'What is cloud computing?',
        answers: [
          { text: 'Weather system', correct: false },
          { text: 'Remote data processing and storage', correct: true },
          { text: 'Physical server only', correct: false },
          { text: 'Energy system', correct: false },
        ],
      },
      {
        id: 5,
        question: 'Why is data important in infrastructure?',
        answers: [
          { text: 'Decoration', correct: false },
          { text: 'Decision-making and optimization', correct: true },
          { text: 'Storage only', correct: false },
          { text: 'Design', correct: false },
        ],
      },
      {
        id: 6,
        question: 'What is system latency?',
        answers: [
          { text: 'Speed increase', correct: false },
          { text: 'Delay in response time', correct: true },
          { text: 'Data storage', correct: false },
          { text: 'Energy flow', correct: false },
        ],
      },
      {
        id: 7,
        question: 'What is cybersecurity?',
        answers: [
          { text: 'Physical security', correct: false },
          { text: 'Protection of digital systems', correct: true },
          { text: 'Energy safety', correct: false },
          { text: 'Transport safety', correct: false },
        ],
      },
      {
        id: 8,
        question: 'What is a network node?',
        answers: [
          { text: 'Storage', correct: false },
          { text: 'Connection point in a network', correct: true },
          { text: 'Device only', correct: false },
          { text: 'Signal', correct: false },
        ],
      },
      {
        id: 9,
        question: 'What does monitoring ensure?',
        answers: [
          { text: 'Design', correct: false },
          { text: 'Stability and performance', correct: true },
          { text: 'Size', correct: false },
          { text: 'Cost', correct: false },
        ],
      },
    ],
  },
  {
    id: 12,
    title: 'Future Systems',
    subtitle: 'Where tech is going',
    emoji: '🚀',
    questions: [
      {
        id: 1,
        question: 'What is sustainable infrastructure?',
        answers: [
          { text: 'Temporary systems', correct: false },
          { text: 'Long-term efficient and eco-friendly systems', correct: true },
          { text: 'Large systems', correct: false },
          { text: 'Cheap systems', correct: false },
        ],
      },
      {
        id: 2,
        question: 'What is smart energy?',
        answers: [
          { text: 'Manual systems', correct: false },
          { text: 'Adaptive and efficient energy management', correct: true },
          { text: 'Storage only', correct: false },
          { text: 'Production only', correct: false },
        ],
      },
      {
        id: 3,
        question: 'What is autonomous technology?',
        answers: [
          { text: 'Manual control', correct: false },
          { text: 'Self-operating systems without human input', correct: true },
          { text: 'Energy system', correct: false },
          { text: 'Storage', correct: false },
        ],
      },
      {
        id: 4,
        question: 'What is digital twin technology?',
        answers: [
          { text: 'Copy of building', correct: false },
          { text: 'Virtual model of real system', correct: true },
          { text: 'Storage', correct: false },
          { text: 'Design', correct: false },
        ],
      },
      {
        id: 5,
        question: 'What is resilience in infrastructure?',
        answers: [
          { text: 'Design', correct: false },
          { text: 'Ability to withstand disruptions', correct: true },
          { text: 'Size', correct: false },
          { text: 'Speed', correct: false },
        ],
      },
      {
        id: 6,
        question: 'What is green energy?',
        answers: [
          { text: 'Stored energy', correct: false },
          { text: 'Environmentally friendly energy sources', correct: true },
          { text: 'Nuclear only', correct: false },
          { text: 'Gas', correct: false },
        ],
      },
      {
        id: 7,
        question: 'What is system integration?',
        answers: [
          { text: 'Separation', correct: false },
          { text: 'Connecting multiple systems to work together', correct: true },
          { text: 'Storage', correct: false },
          { text: 'Design', correct: false },
        ],
      },
      {
        id: 8,
        question: 'What defines future-ready systems?',
        answers: [
          { text: 'Size', correct: false },
          { text: 'Adaptability and innovation', correct: true },
          { text: 'Cost', correct: false },
          { text: 'Age', correct: false },
        ],
      },
      {
        id: 9,
        question: 'What is the main goal of advanced infrastructure?',
        answers: [
          { text: 'Decoration', correct: false },
          { text: 'Efficiency, sustainability, and control', correct: true },
          { text: 'Size', correct: false },
          { text: 'Speed', correct: false },
        ],
      },
    ],
  },
];

export const getLevelById = (id: number) => QUIZ_LEVELS.find(l => l.id === id);
