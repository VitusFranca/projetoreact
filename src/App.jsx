import { useState } from 'react';

import Tarefa from './components/Tarefa';
import TarefaForm from './components/TarefaForm/index.jsx';

import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ])
  const addtarefa = (text, category) => {

    const newTarefas = [...tarefas, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    },
  ];
  setTarefas(newTarefas);
  }
  const removeTarefa = (id) => {
    const newTarefas = [...tarefas];
    const filteredTarefas = newTarefas.filter((tarefa) => tarefa.id !== id ? tarefa : null
    );
    setTarefas(filteredTarefas);
  };

  const completeTarefa = (id) => {
    const newTarefas = [...tarefas];
    newTarefas.map((tarefa) => tarefa.id === id ? tarefa.isCompleted = !tarefa.isCompleted : tarefa);
    setTarefas(newTarefas)

  }
  return (
   <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="listTarefas">
    </div> 
    {tarefas.map((tarefa) => (
      <Tarefa key={tarefa.id} tarefa={tarefa} removeTarefa={removeTarefa} completeTarefa={completeTarefa}/>
    ))}
    <TarefaForm addtarefa={addtarefa}/>
   </div>
  )
}

export default App
