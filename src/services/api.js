export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1'],
          user: 'https://formiguinhadocaria.com.br/admin/assets/avatars/profile-pic.jpg'
        },
        {
          id: 2,
          content: 'Desenvolver o clone da interface do Pipefy',
          labels: ['#7159c1'],
          user: 'https://formiguinhadocaria.com.br/admin/assets/avatars/profile-pic.jpg'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          user: 'https://formiguinhadocaria.com.br/admin/assets/avatars/profile-pic.jpg'
        },
        {
          id: 4,
          content: 'Estuda objetos e arrays em Javascript',
          labels: ['#54e1f7'],
          user: 'https://formiguinhadocaria.com.br/admin/assets/avatars/profile-pic.jpg'
        },
        {
          id: 5,
          content: 'Estudar deploy em ReactJS',
          labels: ['#54e1f7'],
          user: 'https://formiguinhadocaria.com.br/admin/assets/avatars/profile-pic.jpg'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'https://formiguinhadocaria.com.br/admin/assets/avatars/profile-pic.jpg'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Assistir curso sobre Axios no Youtube',
          labels: ['#7159c1'],
          user: 'https://formiguinhadocaria.com.br/admin/assets/avatars/profile-pic.jpg'
        },
        {
          id: 8,
          content: 'Responder os comentários do Linkedin',
          labels: ['#54e1f7'],
          user: 'https://formiguinhadocaria.com.br/admin/assets/avatars/profile-pic.jpg'
        },
        {
          id: 9,
          content: 'Concluir o curso de UI',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Realizar os desafios propostos no trabalho',
          labels: [],
        },
        {
          id: 12,
          content: 'Criar aplicativo de cálculo de IMC',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Assistir vídeos sobre novas tecnologias',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
};
