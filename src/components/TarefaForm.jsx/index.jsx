import {useState, React} from 'react'

const index = ( {addtarefa} ) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        addtarefa(value, category)
        setValue("");
        setCategory("");
    };


  return (
    <div className="tarefa-form">
        <h2>Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Digite o titulo'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type='submit'>Criar Tarefa</button>
        </form>
    </div>
  )
}

export default index