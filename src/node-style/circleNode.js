import React from 'react';
import { Handle, Position } from 'react-flow-renderer';

const getCircleNodeStyles = color => ({
    borderRadius: '50%',
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

  const CircleNode = ({ data }) => (
    <div style={getCircleNodeStyles(data.color)}>
      <Handle type='target' position={Position.Top} />
      <div style={{ textAlign: 'center', overflow: 'hidden' }}>{data.label}</div>
      <Handle type='source' position={Position.Bottom} />
    </div>
  )

export default CircleNode;
