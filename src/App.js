import React from 'react';
import { ReactFlowProvider } from 'react-flow-renderer';
import DiagramTool from './DiagramTool';

function App() {
  return (
    <ReactFlowProvider>
      <DiagramTool />
    </ReactFlowProvider>
  );
}

export default App;