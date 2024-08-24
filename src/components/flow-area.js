import React, { useState, useRef } from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer';
import { Box, Button, AppBar, Toolbar } from '@mui/material';
import { toPng } from 'html-to-image';

const FlowArea = ({ nodes, edges, onNodesChange, onEdgesChange, onConnect, nodeTypes }) => {
  const [setCurrentNode] = useState(null);
  const reactFlowWrapper = useRef(null);

  const handleNodeClick = (event, node) => {
    setCurrentNode(node.data.label || 'Unnamed Node');
  };

  const handleSave = () => {
    const flowData = JSON.stringify({ nodes, edges }, null, 2);
    const blob = new Blob([flowData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'flow-data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadImage = () => {
    if (reactFlowWrapper.current === null) {
      return;
    }

    toPng(reactFlowWrapper.current)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'react-flow-diagram.png';
        link.click();
      })
      .catch((err) => {
        console.error('Could not generate image', err);
      });
  };

  return (
    <Box flexGrow={1} bgcolor="grey.100" position="relative">
      <AppBar position="static" color="default">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Button onClick={handleSave} color="primary"sx={{
              '&:hover': {
                backgroundColor: 'primary.dark',
                color: 'white',
              },
            }}>
            Save
          </Button>
          <Button onClick={handleDownloadImage} color="primary" sx={{
              '&:hover': {
                backgroundColor: 'secondary.dark',
                color: 'white',
              },
            }}>
            Download Image
          </Button>
        </Toolbar>
      </AppBar>

      <div ref={reactFlowWrapper} style={{ width: '100%', height: 'calc(100% - 64px)' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={handleNodeClick}
          style={{ width: '100%', height: '100%' }}
          nodeTypes={nodeTypes}
        >
          <MiniMap nodeColor={(node) => node.data.color || '#00ff00'} nodeStrokeWidth={3} />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </Box>
  );
};

export default FlowArea;
