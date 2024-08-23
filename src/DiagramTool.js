import React, { useState } from "react";
import ReactFlow, {
  ReactFlowProvider,  // Provides context for React Flow components
  useNodesState,     // Custom hook to manage nodes state
  useEdgesState,     // Custom hook to manage edges state
  addEdge,           // Helper function to add an edge between nodes
  Controls,          // UI controls for zooming and panning
  Background,        // Background grid for the canvas
  MiniMap            // MiniMap component for overview of the graph
} from "react-flow-renderer";
import {
  AppBar,
  Toolbar,
  Button,
  Dialog,
  TextField,
  Checkbox,
  ListItemText,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// Define the options for component properties
const propertyOptions = [
  "Confidentiality",
  "Integrity",
  "Authenticity",
  "Authorization",
  "Non-repudiation",
  "Availability"
];

// Initial nodes to be displayed in the React Flow diagram
const initialNodes = [
  {
    id: "1",
    data: { label: "Memory", properties: ["Confidentiality", "Integrity"] },
    position: { x: 750, y: 200 }
  },
  {
    id: "2",
    data: { label: "Microcontroller", properties: ["Authenticity", "Authorization"] },
    position: { x: 850, y: 350 }
  }
];

function DiagramTool() {
  // State hooks to manage dialog visibility, component name, and selected properties
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [properties, setProperties] = useState([]);

  // React Flow hooks to manage nodes and edges
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Handle opening the dialog for creating a new component
  const handleCreateComponent = () => {
    setName("");  // Clear the name field
    setProperties([]);  // Clear the properties selection
    setOpen(true);  // Open the dialog
  };

  // Handle closing the dialog
  const handleClose = () => setOpen(false);

  // Handle form submission for creating a new component
  const handleSubmit = () => {
    if (name.trim() === "" || properties.length === 0) return;  // Validate form

    // Create a new node with the entered name and selected properties
    const newNode = {
      id: String(nodes.length + 1),
      data: { label: name, properties },
      position: { x: Math.random() * 250, y: Math.random() * 250 }  // Random position
    };
    setNodes(nds => [...nds, newNode]);  // Add the new node to the state
    handleClose();  // Close the dialog
  };

  // Handle deleting a node by its ID
  const handleDeleteNode = id => {
    setNodes(nds => nds.filter(node => node.id !== id));  // Remove node from state
  };

  // Handle connecting nodes with an edge
  const onConnect = params => setEdges(eds => addEdge(params, eds));

  return (
    <div>
      {/* App bar with a title */}
      <AppBar position="static">
        <Toolbar>
          <h1>TesT</h1>
        </Toolbar>
      </AppBar>

      {/* Main container with a side panel and the React Flow diagram */}
      <Box display="flex" height="74vh">
        <Box
          width="250px"
          p={2}
          bgcolor="grey.200"
          sx={{ textAlign: "center" }}
        >
          <h2>Model View</h2>
          {nodes.map(node => (
            <Box
              key={node.id}
              sx={{ padding: 1, fontSize: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              {/* Display each node's label and a delete button */}
              {node.data.label}
              <IconButton onClick={() => handleDeleteNode(node.id)} size="small">
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateComponent}
          >
            CREATE COMPONENT
          </Button>
        </Box>

        {/* React Flow diagram area */}
        <Box flexGrow={1} bgcolor="grey.100" position="relative">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            style={{ width: "100%", height: "100%" }}
          >
            <MiniMap
              nodeColor={node => {
                switch (node.type) {
                  case 'input': return 'red';
                  case 'output': return 'blue';
                  default: return '#00ff00';  // Default color for other nodes
                }
              }}
              nodeStrokeWidth={3}
            />
            <Controls />
            <Background />
          </ReactFlow>
        </Box>
      </Box>

      {/* Table displaying the nodes' labels and properties */}
      <TableContainer
        component={Paper}
        sx={{ maxHeight: 153, overflowY: "auto" }}
      >
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Name
              </TableCell>
              <TableCell sx={{ backgroundColor: "black", color: "white" }}>
                Properties
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nodes.map(node => (
              <TableRow key={node.id}>
                <TableCell>{node.data.label}</TableCell>
                <TableCell>{node.data.properties.join(" ")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for creating a new component */}
      <Dialog open={open} onClose={handleClose}>
        <Box p={2}>
          <TextField
            label="Component Name"
            value={name}
            onChange={e => setName(e.target.value)}
            fullWidth
          />
          <Select
            multiple
            value={properties}
            onChange={e => setProperties(e.target.value)}
            renderValue={selected => selected.join(", ")}
            displayEmpty
            fullWidth
            sx={{ mt: 1 }}
          >
            {/* Placeholder item for properties selection */}
            <MenuItem disabled value="">
              <em>Select Properties</em>
            </MenuItem>
            {/* List of selectable properties */}
            {propertyOptions.map(property => (
              <MenuItem key={property} value={property}>
                <Checkbox checked={properties.includes(property)} />
                <ListItemText primary={property} />
              </MenuItem>
            ))}
          </Select>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button onClick={handleClose} color="secondary" sx={{ marginRight: 1 }}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              color="primary"
              disabled={name.trim() === "" || properties.length === 0}  // Disable if name or properties are empty
            >
              Add Component
            </Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}

export default DiagramTool;
