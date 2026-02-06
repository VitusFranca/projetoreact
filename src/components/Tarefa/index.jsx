import React from 'react';




const index = ({tarefa, removeTarefa, completeTarefa}) => {
  return (
    <div>      
        <div className="tarefa" style={{ textDecoration: tarefa.isCompleted ? "line-through" : "" }}>
        <div className="conteudo">
          <p>{tarefa.text}</p> 
          <p className='category'>{tarefa.category}</p>
        </div>
        <div>
          <button className='complete' onClick={() => completeTarefa(tarefa.id)}>Completar</button>
          <button className='remove' onClick={() => removeTarefa(tarefa.id)}>x</button>
        </div>
        <hr></hr></div>
        
    </div>
  )
}

export default index