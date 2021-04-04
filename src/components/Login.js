import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

function validateEmail(email)
{
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
export default function Login(){
  const history = useHistory();
  const [ isLoading, setIsLoading ] = useState(false);
  const [ inputs, setInputs ] = useState({
    email: '',
    password: ''
  });
  const [ errors, setErrors ] = useState({
    email: null,
    password: null
  });

  const submitForm = async (event) => {
    event.preventDefault();

    //validation
    let isValid = true;
    let newErrors = { email : null, password : null};
    if(!inputs.email)
    {
      isValid = false;
      newErrors = {
        ...newErrors,
        email : 'This field is required'
      }
    }

    if(!inputs.password)
    {
      isValid = false;
      newErrors = {
        ...newErrors,
        password : 'This field is required'
      }
    }

    if(inputs.password.length < 5)
    {
      isValid = false;
      newErrors = {
        ...newErrors,
        password : 'Password length must be at least with 5 characters'
      }
    }

    if(!validateEmail(inputs.email))
    {
      isValid = false;
      newErrors = {
        ...newErrors,
        email : 'Invalid email'
      }
    }

    setErrors(newErrors);
    if(!isValid)
    {
      return;
    }
    setIsLoading(true);

    const response = await fetch(
      'https://academeez-login-ex.herokuapp.com/api/users/login',
      {
        method: 'POST',
        body: JSON.stringify(inputs),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    const data = await response.json();
    console.log(data);
    setIsLoading(false);
    history.push('/todo');
  }

  const changeHandler = (event) => {
    setInputs(
      {
        ...inputs,
        [event.target.name] : event.target.value
      }
    )
  }
  return(
    <Paper className="p-4">
      <form onSubmit={ submitForm } noValidate autoComplete="off">
        <div className="form-group">
          <TextField 
                  error = {errors.email}
                  name="email" 
                  label={errors.email ? 'Error' : 'Enter your email'}
                  helperText={errors.email}
                  type="email"
                  onChange= { changeHandler }
                  value = { inputs.email } 
                  className="w-100"
                  variant="outlined"
            />
        </div>
        <div className="form-group">
          <TextField

                  error = { errors.password }
                  onChange={ changeHandler }
                  value = { inputs.password }
                  helperText={errors.password}
                  name="password"
                  label={errors.password ? 'Error' : 'Enter your password'}
                  type="password"
                  className="w-100"
                  variant="outlined"
          />
        </div>
        <Grid container justify="flex-end">
          <Button
                variant="contained"
                color="primary" 
                type="submit"
                className="d-flex justify-content-flex-end" 
                disabled={isLoading}
          >
            Submit
          </Button>
          {
            isLoading && <CircularProgress />
          }
        </Grid>
      </form>
    </Paper>
  )
}