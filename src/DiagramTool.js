// import React, { useState } from "react";
// import ReactFlow, {
//   ReactFlowProvider,
//   useNodesState,
//   useEdgesState,
//   addEdge,
//   Controls,
//   Background,
//   MiniMap // Import MiniMap
// } from "react-flow-renderer";
// import {
//   AppBar,
//   Toolbar,
//   Button,
//   Dialog,
//   TextField,
//   Checkbox,
//   ListItemText,
//   Select,
//   MenuItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   Box
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// function DiagramTool() {
//   const [open, setOpen] = useState(false);
//   const [name, setName] = useState("");
//   const [properties, setProperties] = useState([]);

//   const propertyOptions = [
//     "Confidentiality",
//     "Integrity",
//     "Authenticity",
//     "Authorization",
//     "Non-repudiation",
//     "Availability"
//   ];

//   const initialNodes = [
//     {
//       id: "1",
//       data: { label: "Memory", properties: ["Confidentiality", "Integrity"] },
//       position: { x: 750, y: 200 }
//     },
//     {
//       id: "2",
//       data: {
//         label: "Microcontroller",
//         properties: ["Authenticity", "Authorization"]
//       },
//       position: { x: 850, y: 350 }
//     }
//   ];

//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);

//   const handleCreateComponent = () => {
//     // Clear form fields
//     setName("");
//     setProperties([]);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSubmit = () => {
//     if (name.trim() === "" || properties.length === 0) {
//       return; // Prevent adding if name or properties are empty
//     }

//     const newNode = {
//       id: String(nodes.length + 1),
//       data: { label: name, properties: properties },
//       position: { x: Math.random() * 250, y: Math.random() * 250 }
//     };
//     setNodes(nds => nds.concat(newNode));
//     setOpen(false);
//   };

//   const handleDeleteNode = (id) => {
//     setNodes(nds => nds.filter(node => node.id !== id));
//   };

//   const onConnect = params => setEdges(eds => addEdge(params, eds));

//   return (
//     <div>
//       <AppBar position="static">
//         <Toolbar>
//           <h1>TesT</h1>
//         </Toolbar>
//       </AppBar>
//       <Box display="flex" height="74vh">
//         <Box
//           width="250px"
//           p={2}
//           bgcolor="grey.200"
//           style={{ textAlign: "center" }}
//         >
//           <h2>Model View</h2>
//           {nodes.map(node =>
//             <Box key={node.id} style={{ padding: "10px", fontSize: "18px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               {node.data.label}
//               <IconButton onClick={() => handleDeleteNode(node.id)} size="small">
//                 <DeleteIcon />
//               </IconButton>
//             </Box>
//           )}
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleCreateComponent}
//           >
//             CREATE COMPONENT
//           </Button>
//         </Box>
//         <Box flexGrow={1} bgcolor="grey.100" position="relative">
//           <ReactFlow
//             nodes={nodes}
//             edges={edges}
//             onNodesChange={onNodesChange}
//             onEdgesChange={onEdgesChange}
//             onConnect={onConnect}
//             style={{ width: "100%", height: "100%" }}
//           >
//             <MiniMap
//               nodeColor={node => {
//                 switch (node.type) {
//                   case 'input': return 'red';
//                   case 'output': return 'blue';
//                   default: return '#00ff00';
//                 }
//               }}
//               nodeStrokeWidth={3}
//               // Optional: Add more props as needed
//             />
//             <Controls />
//             <Background />
//           </ReactFlow>
//         </Box>
//       </Box>
//       <TableContainer
//         component={Paper}
//         style={{ maxHeight: "153px", overflowY: "auto" }}
//       >
//         <Table stickyHeader aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell style={{ backgroundColor: "black", color: "white" }}>
//                 Name
//               </TableCell>
//               <TableCell style={{ backgroundColor: "black", color: "white" }}>
//                 Properties
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {nodes.map(node =>
//               <TableRow key={node.id}>
//                 <TableCell>
//                   {node.data.label}
//                 </TableCell>
//                 <TableCell>
//                   {node.data.properties.join(" ")}
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Dialog open={open} onClose={handleClose}>
//         <Box p={2}>
//           <TextField
//             label="Component Name"
//             value={name}
//             onChange={e => setName(e.target.value)}
//             fullWidth
//           />
//           <Select
//             multiple
//             value={properties}
//             onChange={e => setProperties(e.target.value)}
//             renderValue={selected => selected.join(", ")}
//             fullWidth
//           >
//             {propertyOptions.map(property =>
//               <MenuItem key={property} value={property}>
//                 <Checkbox checked={properties.indexOf(property) > -1} />
//                 <ListItemText primary={property} />
//               </MenuItem>
//             )}
//           </Select>
//           <Box mt={2} display="flex" justifyContent="flex-end">
//             <Button onClick={handleClose} color="secondary" style={{ marginRight: "8px" }}>
//               Cancel
//             </Button>
//             <Button
//               onClick={handleSubmit}
//               color="primary"
//               disabled={name.trim() === "" || properties.length === 0}
//             >
//               Add Component
//             </Button>
//           </Box>
//         </Box>
//       </Dialog>
//     </div>
//   );
// }

// export default DiagramTool;









import React, { useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
  MiniMap
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

const propertyOptions = [
  "Confidentiality",
  "Integrity",
  "Authenticity",
  "Authorization",
  "Non-repudiation",
  "Availability"
];

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
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [properties, setProperties] = useState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const handleCreateComponent = () => {
    setName("");
    setProperties([]);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    if (name.trim() === "" || properties.length === 0) return;

    const newNode = {
      id: String(nodes.length + 1),
      data: { label: name, properties },
      position: { x: Math.random() * 250, y: Math.random() * 250 }
    };
    setNodes(nds => [...nds, newNode]);
    handleClose();
  };

  const handleDeleteNode = id => {
    setNodes(nds => nds.filter(node => node.id !== id));
  };

  const onConnect = params => setEdges(eds => addEdge(params, eds));

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <h1>TesT</h1>
        </Toolbar>
      </AppBar>
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
                  default: return '#00ff00';
                }
              }}
              nodeStrokeWidth={3}
            />
            <Controls />
            <Background />
          </ReactFlow>
        </Box>
      </Box>
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
            <MenuItem disabled value="">
              <em>Select Properties</em>
            </MenuItem>
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
              disabled={name.trim() === "" || properties.length === 0}
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
