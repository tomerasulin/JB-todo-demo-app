import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';



export default function TodoList(){

  const [ todo, setTodo ] = useState([]);
                
  const deleteButton = async (e) => {
    await fetch(`https://nztodo.herokuapp.com/api/task/${e.id}?format=json`, {
	    method: 'DELETE'
    })
    loadList();
  }           
  

  const loadList = async () => {
    const response = await fetch(
      'https://nztodo.herokuapp.com/api/tasks/?format=json'
    )
    const data = await response.json();
    setTodo(data);
  }
                
  return(
    <div>
      <Button onClick={ loadList }>
        Load list
      </Button>
      <ul className="list-group">
      {
        todo.map(function(element){
          return(
            <li key={element.id} className="align-items-center list-group-item d-flex justify-content-between">
              {element.title}
              <IconButton aria-label="delete" className="btn btn-danger" onClick={ function() { deleteButton(element) } } >
                <DeleteIcon fontSize="small"/>                
              </IconButton>
            </li>
          )

        })
      }
      </ul>
    </div>

  )
}