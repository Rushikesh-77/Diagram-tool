const circuitLibrary = [
  {
    id: '9',
    type: 'circleNode',
    data: { label: 'LIDAR', properties: ['Integrity'], color: 'blue' },
    position: { x: 0, y: 0 },
    defaultNodes: [
      { id: 'node1', type: 'rectangleNode', data: { label: 'Sensor', properties: ['Integrity'], color: 'blue' }, position: { x: 100, y: 100 } },
      { id: 'node2', type: 'circleNode', data: { label: 'Processor', properties: ['Availability'], color: 'green' }, position: { x: 300, y: 100 } },
      { id: 'node3', type: 'squareNode', data: { label: 'Controller', properties: ['Confidentiality'], color: 'red' }, position: { x: 200, y: 200 } }
    ],
    defaultEdges: [
      { id: 'e1', source: 'node1', target: 'node2', type: 'smoothstep' },
      { id: 'e2', source: 'node2', target: 'node3', type: 'straight' },
    ]
  },
  {
    id: '10',
    type: 'rectangleNode',
    data: { label: 'Imaging', properties: ['Integrity'], color: 'red' },
    position: { x: 0, y: 0 },
    defaultNodes: [
      { id: 'node1', type: 'rectangleNode', data: { label: 'Camera', properties: ['Integrity'], color: 'red' }, position: { x: 100, y: 100 } },
      { id: 'node2', type: 'circleNode', data: { label: 'Memory', properties: ['Availability'], color: 'yellow' }, position: { x: 300, y: 100 } },
      { id: 'node3', type: 'squareNode', data: { label: 'Display', properties: ['Confidentiality'], color: 'purple' }, position: { x: 200, y: 200 } }
    ],
    defaultEdges: [
      { id: 'e1', source: 'node1', target: 'node2', type: 'smoothstep' },
      { id: 'e2', source: 'node2', target: 'node3', type: 'step' },
    ]
  },
  {
    id: '11',
    type: 'rectangleNode',
    data: { label: 'Image Sensor', properties: ['Integrity', 'Availability'], color: 'pink' },
    position: { x: 0, y: 0 },
    defaultNodes: [
      { id: 'node1', type: 'rectangleNode', data: { label: 'Lens', properties: ['Confidentiality'], color: 'purple' }, position: { x: 150, y: 150 } },
      { id: 'node2', type: 'circleNode', data: { label: 'Shutter', properties: ['Availability'], color: 'blue' }, position: { x: 350, y: 150 } },
      { id: 'node3', type: 'squareNode', data: { label: 'Sensor Array', properties: ['Integrity'], color: 'orange' }, position: { x: 250, y: 250 } }
    ],
    defaultEdges: [
      { id: 'e1', source: 'node1', target: 'node2', type: 'smoothstep' },
      { id: 'e2', source: 'node2', target: 'node3', type: 'straight' },
    ]
  },
  {
    id: '12',
    type: 'rectangleNode',
    data: { label: 'System', properties: ['Non-repudiation'], color: 'green' },
    position: { x: 0, y: 0 },
    defaultNodes: [
      { id: 'node1', type: 'circleNode', data: { label: 'Power Module', properties: ['Integrity'], color: 'orange' }, position: { x: 120, y: 220 } },
      { id: 'node2', type: 'squareNode', data: { label: 'Control Unit', properties: ['Confidentiality'], color: 'teal' }, position: { x: 320, y: 220 } },
      { id: 'node3', type: 'rectangleNode', data: { label: 'Backup Unit', properties: ['Availability'], color: 'brown' }, position: { x: 220, y: 320 } }
    ],
    defaultEdges: [
      { id: 'e1', source: 'node1', target: 'node2', type: 'step' },
      { id: 'e2', source: 'node2', target: 'node3', type: 'straight' },
    ]
  },
  {
    id: '13',
    type: 'rectangleNode',
    data: { label: 'Imaging 1', properties: ['Integrity', 'Non-repudiation'], color: 'orange' },
    position: { x: 0, y: 0 },
    defaultNodes: [
      { id: 'node1', type: 'squareNode', data: { label: 'Processor', properties: ['Integrity'], color: 'purple' }, position: { x: 200, y: 100 } },
      { id: 'node2', type: 'circleNode', data: { label: 'Memory Unit', properties: ['Availability'], color: 'pink' }, position: { x: 400, y: 100 } },
      { id: 'node3', type: 'rectangleNode', data: { label: 'Display', properties: ['Confidentiality'], color: 'yellow' }, position: { x: 300, y: 200 } }
    ],
    defaultEdges: [
      { id: 'e1', source: 'node1', target: 'node2', type: 'smoothstep' },
      { id: 'e2', source: 'node2', target: 'node3', type: 'smoothstep' },
    ]
  },
  {
    id: '14',
    type: 'circleNode',
    data: { label: 'RADAR1', properties: ['Authorization', 'Availability'], color: 'brown' },
    position: { x: 0, y: 0 },
    defaultNodes: [
      { id: 'node1', type: 'circleNode', data: { label: 'Transmitter', properties: ['Integrity'], color: 'red' }, position: { x: 100, y: 150 } },
      { id: 'node2', type: 'rectangleNode', data: { label: 'Receiver', properties: ['Confidentiality'], color: 'blue' }, position: { x: 300, y: 150 } },
      { id: 'node3', type: 'squareNode', data: { label: 'Processor', properties: ['Availability'], color: 'green' }, position: { x: 200, y: 250 } }
    ],
    defaultEdges: [
      { id: 'e1', source: 'node1', target: 'node2', type: 'smoothstep' },
      { id: 'e2', source: 'node2', target: 'node3', type: 'step' },
    ]
  },
  {
    id: '15',
    type: 'circleNode',
    data: { label: 'RADAR', properties: ['Integrity', 'Authorization'], color: 'grey' },
    position: { x: 0, y: 0 },
    defaultNodes: [
      { id: 'node1', type: 'rectangleNode', data: { label: 'Amplifier', properties: ['Integrity'], color: 'grey' }, position: { x: 150, y: 150 } },
      { id: 'node2', type: 'squareNode', data: { label: 'Signal Processor', properties: ['Authorization'], color: 'black' }, position: { x: 350, y: 150 } },
      { id: 'node3', type: 'circleNode', data: { label: 'Feedback Controller', properties: ['Integrity'], color: 'blue' }, position: { x: 250, y: 250 } }
    ],
    defaultEdges: [
      { id: 'e1', source: 'node1', target: 'node2', type: 'straight' },
      { id: 'e2', source: 'node2', target: 'node3', type: 'smoothstep' },
    ]
  },
  {
    id: '16',
    type: 'rectangleNode',
    data: { label: 'Signal Processor', properties: ['Confidentiality', 'Integrity'], color: 'purple' },
    position: { x: 0, y: 0 },
    defaultNodes: [
      { id: 'node1', type: 'circleNode', data: { label: 'Mixer', properties: ['Integrity'], color: 'pink' }, position: { x: 120, y: 220 } },
      { id: 'node2', type: 'squareNode', data: { label: 'Filter', properties: ['Availability'], color: 'yellow' }, position: { x: 320, y: 220 } },
      { id: 'node3', type: 'circleNode', data: { label: 'Amplifier', properties: ['Confidentiality'], color: 'blue' }, position: { x: 220, y: 320 } }
    ],
    defaultEdges: [
      { id: 'e1', source: 'node1', target: 'node2', type: 'smoothstep' },
      { id: 'e2', source: 'node2', target: 'node3', type: 'straight' },
    ]
  },
  // {
  //   id: '17',
  //   type: 'rectangleNode',
  //   data: { label: 'Antenna Array', properties: ['Availability'], color: 'cyan' },
  //   position: { x: 0, y: 0 },
  //   defaultNodes: [
  //     { id: 'node1', type: 'rectangleNode', data: { label: 'Antenna', properties: ['Availability'], color: 'cyan' }, position: { x: 200, y: 100 } },
  //     { id: 'node2', type: 'squareNode', data: { label: 'Splitter', properties: ['Integrity'], color: 'pink' }, position: { x: 400, y: 100 } },
  //     { id: 'node3', type: 'circleNode', data: { label: 'Combiner', properties: ['Confidentiality'], color: 'orange' }, position: { x: 300, y: 200 } }
  //   ],
  //   defaultEdges: [
  //     { id: 'e1', source: 'node1', target: 'node2', type: 'smoothstep' },
  //     { id: 'e2', source: 'node2', target: 'node3', type: 'step' },
  //   ]
  // },
  // {
  //   id: '18',
  //   type: 'circleNode',
  //   data: { label: 'Communication Module', properties: ['Integrity', 'Non-repudiation'], color: 'magenta' },
  //   position: { x: 0, y: 0 },
  //   defaultNodes: [
  //     { id: 'node1', type: 'rectangleNode', data: { label: 'Transceiver', properties: ['Integrity'], color: 'magenta' }, position: { x: 120, y: 220 } },
  //     { id: 'node2', type: 'squareNode', data: { label: 'Antenna', properties: ['Availability'], color: 'cyan' }, position: { x: 320, y: 220 } },
  //     { id: 'node3', type: 'circleNode', data: { label: 'Decoder', properties: ['Confidentiality'], color: 'lime' }, position: { x: 220, y: 320 } }
  //   ],
  //   defaultEdges: [
  //     { id: 'e1', source: 'node1', target: 'node2', type: 'smoothstep' },
  //     { id: 'e2', source: 'node2', target: 'node3', type: 'straight' },
  //   ]
  // }
];

export default circuitLibrary;
