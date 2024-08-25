import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const Sidebar = ({
  library,
  onCreateComponent,
  onDeleteLibrary
}) =>
  <Box width="250px" p={2} bgcolor="grey.200" sx={{ textAlign: "center" }}>
    <h2>Libraries</h2>
    {library.map(item =>
      <Box
        key={item.id}
        draggable
        onDragStart={event =>
          event.dataTransfer.setData(
            "application/reactflow",
            JSON.stringify(item)
          )}
        sx={{
          padding: 2,
          fontSize: 18,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "5px",
          boxShadow: `0px 2px 5px 1px rgba(0, 0, 0, 0.1)`
        }}
      >
        {item.data.label}
        <IconButton onClick={() => onDeleteLibrary(item.id)} size="small">
          <DeleteIcon />
        </IconButton>
      </Box>
    )}
    <Button variant="contained" color="primary" onClick={onCreateComponent}>
      CREATE COMPONENT
    </Button>
  </Box>;

export default Sidebar;
