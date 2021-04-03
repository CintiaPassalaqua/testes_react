import React from 'react'
import useCanvas from './useCanvas'

const Canvas = props => {  
  
  const { draw, ...rest } = props
  const canvasRef = useCanvas(draw)
  
  return <canvas width="200" height="400" ref={canvasRef} {...rest}/>
}

export default Canvas