import React from 'react';
import { Box, Button } from '@mui/material';

const Sidebar = ({ library, onCreateComponent, onCreateNode }) => (
  <Box width='250px' p={2} bgcolor='grey.200' sx={{ textAlign: 'center' }}>
    <h2>Libraries</h2>
    {library.map(item => (
      <Box
        key={item.id}
        draggable
        onDragStart={event =>
          event.dataTransfer.setData('application/reactflow', JSON.stringify(item))
        }
        sx={{
          padding: 2,
          fontSize: 18,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {item.data.label}
      </Box>
    ))}
    <Button variant='contained' color='primary' onClick={onCreateComponent}>
      CREATE COMPONENT
    </Button>
  </Box>
);

export default Sidebar;
