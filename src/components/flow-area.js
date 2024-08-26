import React, { useState, useRef } from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer';
import { Box, Button, AppBar, Toolbar, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { toPng } from 'html-to-image';

const FlowArea = ({ nodes, edges, onNodesChange, onEdgesChange, onConnect, nodeTypes, circuitLibrary, setCircuitLibrary }) => {
  const [currentNode, setCurrentNode] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [labelName, setLabelName] = useState('');
  const reactFlowWrapper = useRef(null);
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState('');

  const handleNodeClick = (event, node) => {
    setCurrentNode(node.data.label || 'Unnamed Node');
  };

  const handleSave = () => {
    setOpenDialog(true);
  };

  const handleSaveDialogClose = () => {
    setOpenDialog(false);
  };

  const handleLabelChange = (event) => {
    setLabelName(event.target.value);
  };

  const handleSaveSubmit = () => {
    const newCircuit = {
      id: `${circuitLibrary.length + 1}`,
      type: 'customNode',
      data: { label: labelName, properties: [], color: 'blue' },
      position: { x: 0, y: 0 },
      defaultNodes: nodes.map(node => ({ ...node })),
      defaultEdges: edges.map(edge => ({ ...edge })),
    };

    setCircuitLibrary([...circuitLibrary, newCircuit]);
    handleSaveDialogClose();

    const newNode = {
      id: `${nodes.length + 1}`,
      data: { label },
      position: { x: 250, y: 250 },
      type: 'default',
    };
    const updatedNodes = [...nodes, newNode];
    const newEdges = [...edges];

    setOpen(false);
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
          <Button onClick={handleSave} color="primary" sx={{
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

      <Dialog open={openDialog} onClose={handleSaveDialogClose}>
        <DialogTitle>Save Circuit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Circuit Label"
            fullWidth
            value={labelName}
            onChange={handleLabelChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSaveDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default FlowArea;
