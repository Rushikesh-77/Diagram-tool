import React from 'react';
import { Dialog, TextField, Button, Select, MenuItem, Checkbox, ListItemText, Box, Autocomplete } from '@mui/material';
import { CirclePicker } from 'react-color';

const DialogBox = ({ open, onClose, name, setName, properties, setProperties, shapeType, setShapeType, color, setColor, onSubmit, isComponent, previousNames }) => {
  const handleNameChange = (event, value) => {
    setName(value || '');
  };

  const isButtonDisabled = () => {
    console.log('Name:', name, 'Properties:', properties);
    return name.trim() === '' || properties.length === 0;
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <div style={{ padding: '13px 20px 0', fontSize: '1.5rem' }}>Add New</div>
      <Box p={2} sx={{ width: '450px' }}>
        <Autocomplete
          freeSolo
          options={previousNames}
          value={name}
          onChange={handleNameChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label={isComponent ? 'Component Name' : 'Node Name'}
              fullWidth
            />
          )}
        />
        <p style={{margin: '7px', fontSize: '12px', opacity: '0.7'}}>Please press enter after filling {isComponent ? 'Component' : 'Node'} Name in the textbox, else you'll not be able to add.</p>
        <Select
          multiple
          value={properties}
          onChange={e => setProperties(e.target.value)}
          renderValue={selected =>
            selected.length > 0 ? selected.join(', ') : 'Select Properties'
          }
          displayEmpty
          fullWidth
          sx={{ mt: 1 }}
        >
          <MenuItem disabled value=''>
            <em>Select Properties</em>
          </MenuItem>
          {['Confidentiality', 'Integrity', 'Authenticity', 'Authorization', 'Non-repudiation', 'Availability'].map(property => (
            <MenuItem key={property} value={property}>
              <Checkbox checked={properties.includes(property)} />
              <ListItemText primary={property} />
            </MenuItem>
          ))}
        </Select>
        <Select
          label='Shape Type'
          value={shapeType}
          onChange={e => setShapeType(e.target.value)}
          fullWidth
          sx={{ mt: 1 }}
        >
          <MenuItem value='rectangle'>Rectangle</MenuItem>
          <MenuItem value='circle'>Circle</MenuItem>
          <MenuItem value='square'>Square</MenuItem>
        </Select>
        <Box mt={2} sx={{ width: '100%'}}>
          <div style={{ padding: '0px 0px 15px 0px', fontSize: '1rem', fontWeight: '400' }}>Choose Node Color : </div>
          <CirclePicker color={color} onChangeComplete={color => setColor(color.hex)} width='100%'/>
        </Box>
        <Box mt={2} display='flex' justifyContent='flex-end'>
          <Button onClick={onClose} color='secondary' sx={{
              marginRight: 1,
              '&:hover': {
                outline: '1px solid #f44336',
                backgroundColor: 'rgba(244, 67, 54, 0.1)'
              }
            }}>
            Cancel
          </Button>
          <Button onClick={onSubmit} color='primary' disabled={isButtonDisabled()} 
          sx={{
              '&:hover': {
                outline: '1px solid #1976d2', 
                backgroundColor: 'rgba(25, 118, 210, 0.1)' 
              }
            }}>
            Add {isComponent ? 'Component' : 'Node'}
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default DialogBox;
