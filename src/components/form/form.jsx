import React, { useState } from 'react'
import { ButtonSubmitStyled, DivContenedor, FormStyled, InputSearchStyled } from './formStyle'

const Form = () => {
    const [item, setItem] = useState("")
    const [task, setTask] = useState([])

    const handleValue = (e) =>
    setItem(e.target.value);

    function addTask() {
        if (!item){
            alert("Necesita agregar una tarea");
            return
        }
        const tasks = {
            id: Math.floor(Math.random()*1000),
            value: item,
        };

        setTask(oldList => [...oldList, tasks]);
        
        setItem("");
    } 

    function deleteItem(id) {
        const newArray = task.filter(tasks => tasks.id !== id)
        setTask(newArray)
    } 

  return (
    <>
        <h1>ToDo list</h1>
        <DivContenedor>
            <FormStyled onSubmit={(e) =>
                {e.preventDefault();}}>
                <InputSearchStyled value={item} type='text' placeholder='Anotar su tarea pendiente' onChange={handleValue} />
                <ButtonSubmitStyled type='submit' onClick={() => addTask()}>Agregar</ButtonSubmitStyled>
            </FormStyled>
            <ul>
                {task.map(tasks =>{
                return (<li key={tasks.id}>{tasks.value}<button onClick={() => deleteItem(tasks.id)}>eliminar</button></li>)
                })}
            </ul>
        </DivContenedor>
    </>
  )
}

export default Form 