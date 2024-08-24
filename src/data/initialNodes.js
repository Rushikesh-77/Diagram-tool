const initialNodes = [
  {
    id: '1',
    type: 'rectangleNode',
    data: {
      label: 'Power Manage',
      properties: ['Confidentiality', 'Integrity'],
      color: 'yellow'
    },
    position: { x: 250, y: 100 }
  },
  {
    id: '2',
    type: 'rectangleNode',
    data: {
      label: 'MCU',
      properties: ['Authenticity', 'Authorization'],
      color: 'aqua'
    },
    position: { x: 150, y: 350 }
  },
  {
    id: '3',
    type: 'rectangleNode',
    data: {
      label: 'PHY',
      properties: ['Confidentiality', 'Integrity'],
      color: 'green'
    },
    position: { x: 450, y: 400 }
  },
  {
    id: '4',
    type: 'rectangleNode',
    data: {
      label: 'Receiver',
      properties: ['Authenticity', 'Authorization'],
      color: 'blue'
    },
    position: { x: 620, y: 200 }
  },
  {
    id: '5',
    type: 'rectangleNode',
    data: {
      label: 'Transceiver',
      properties: ['Authenticity', 'Authorization'],
      color: 'black'
    },
    position: { x: 650, y: 550 }
  },
  {
    id: '6',
    type: 'circleNode',
    data: {
      label: 'Transmitter',
      properties: ['Confidentiality', 'Integrity'],
      color: 'deeppink'
    },
    position: { x: 800, y: 400 }
  },
  {
    id: '7',
    type: 'rectangleNode',
    data: {
      label: 'Circuit',
      properties: ['Authenticity', 'Authorization'],
      color: 'red'
    },
    position: { x: 1000, y: 490 }
  }
]
  
  export default initialNodes;
  