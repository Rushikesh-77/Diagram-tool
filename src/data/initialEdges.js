const initialEdges = [
    { id: 'e8-1', source: '1', target: '2', type: 'smoothstep' }, // Power Manage -> MCU
    { id: 'e8-1', source: '1', target: '4', type: 'smoothstep' }, // Power Manage -> Receiver
    { id: 'e9-2', source: '2', target: '3', type: 'smoothstep' }, // MCU -> PHY
    { id: 'e11-3', source: '3', target: '5', type: 'smoothstep' }, // Receiver -> transmitter
    { id: 'e10-4', source: '4', target: '5', type: 'smoothstep' }, // PHY -> transceiver
    { id: 'e13-4', source: '4', target: '6', type: 'smoothstep' }, // transceiver -> transmitter
    { id: 'e14-6', source: '6', target: '7', type: 'smoothstep' } // transmitter -> Vehicle
  ]
  
  export default initialEdges;
  