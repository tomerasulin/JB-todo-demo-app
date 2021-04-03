import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function Login(){

  const [ isLoading, setIsLoading ] = useState(false);

  const submitForm = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const response = await fetch(
      'https://academeez-login-ex.herokuapp.com/api/users/login',
      {
        method: 'POST',
        body: JSON.stringify({
          email: 'yariv@nerdeez.com',
          password: '12345678'
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    const data = await response.json();
    console.log(data);
    setIsLoading(false);
  }
  return(
    <Paper elevation={2}>
      <form onSubmit={ submitForm }>
        <div className="form-group">
          <TextField id="standard-basic" label="Email" type="email" className="form-control"/>
        </div>
        <div className="form-group">
          <TextField
                  id="standard-basic"
                  label="Password"
                  type="password"
                  className="form-control"
          />
        </div>
        <Button
               variant="contained"
               color="primary" 
               type="submit" 
               disabled={isLoading}
        >
          Submit
        </Button>
        {
          isLoading && <CircularProgress />
        }
      </form>
    </Paper>
  )
}