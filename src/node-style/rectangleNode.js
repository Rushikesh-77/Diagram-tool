import React from 'react';
import { Handle, Position } from 'react-flow-renderer';


const getNodeStyles = color => ({
    borderRadius: '4px',
    backgroundColor: color || '#ffffff',
    border: `2px solid ${color || '#000000'}`,
    width: '150px',
    height: '75px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: '#fff', 
    fontSize: '14px'
  })

const RectangleNode = ({ data }) => (
    <div style={getNodeStyles(data.color)}>
      <Handle type='target' position={Position.Left} />
      <div style={{ textAlign: 'center', overflow: 'hidden' }}>{data.label}</div>
      <Handle type='source' position={Position.Right} />
    </div>
  )

export default RectangleNode;
