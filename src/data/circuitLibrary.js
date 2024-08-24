const circuitLibrary = [
    {
      id: '9',
      type: 'circleNode',
      data: { label: 'LIDAR', properties: ['Integrity'], color: 'blue' },
      position: { x: 0, y: 0 }
    },
    {
      id: '10',
      type: 'rectangleNode',
      data: { label: 'Imaging', properties: ['Integrity'], color: 'red' },
      position: { x: 0, y: 0 }
    },
    {
      id: '11',
      type: 'rectangleNode',
      data: {
        label: 'Image sensor',
        properties: ['Integrity', 'Availability'],
        color: 'pink'
      },
      position: { x: 0, y: 0 }
    },
    {
      id: '12',
      type: 'rectangleNode',
      data: {
        label: 'System',
        properties: ['Non-repudiation'],
        color: 'green'
      },
      position: { x: 0, y: 0 }
    },
    {
      id: '13',
      type: 'rectangleNode',
      data: {
        label: 'Imaging 1',
        properties: ['Integrity', 'Non-repudiation'],
        color: 'orange'
      },
      position: { x: 0, y: 0 }
    },
    {
      id: '14',
      type: 'circleNode',
      data: {
        label: 'RADAR1',
        properties: ['Authorization', 'Availability'],
        color: 'brown'
      },
      position: { x: 0, y: 0 }
    },
    {
      id: '15',
      type: 'circleNode',
      data: {
        label: 'RADAR',
        properties: ['Integrity', 'Authorization'],
        color: 'grey'
      },
      position: { x: 0, y: 0 }
    }
  ]
  
  export default circuitLibrary;
  