import React from 'react';
import { Handle, Position } from 'react-flow-renderer';

const getSquareNodeStyles = color => ({
    backgroundColor: color || '#ffffff',
    border: `2px solid ${color || '#000000'}`,
    width: '100px', 
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: '#fff', 
    fontSize: '14px'
  })
  
  const SquareNode = ({ data }) => (
    <div style={getSquareNodeStyles(data.color)}>
      <Handle type='target' position={Position.Left} />
      <div style={{ textAlign: 'center', overflow: 'hidden' }}>{data.label}</div>
      <Handle type='source' position={Position.Right} />
    </div>
  )

export default SquareNode;
