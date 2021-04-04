import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function Login(){
  const [ isLoading, setIsLoading ] = useState(false);

  const history = useHistory();

  const formik = useFormik({
    initialValues:{
      email: '',
      password: '',
    },
    validationSchema : Yup.object({
      email : Yup.string().email('Invalid email').required('Required'),
      password : Yup.string().min(5, 'Must be 5 characters or more').required('Required'),
    }),
    onSubmit: async values => {
      setIsLoading(true);
      const response = await fetch(
        'https://academeez-login-ex.herokuapp.com/api/users/login',
        {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const data = await response.json();
      console.log(data);
      setIsLoading(false);
      history.push('/todo');
    },
  });
  
  return(
    <Paper className="p-4">
      <form onSubmit={ formik.handleSubmit } noValidate autoComplete="off">
        <div className="form-group">
          <TextField 
                  name="email" 
                  label="Enter your email"
                  type="email"
                  onChange= { formik.handleChange }
                  onBlur={ formik.handleBlur }
                  value = { formik.values.email }
                  error = { formik.touched.email && Boolean(formik.errors.email) }
                  helperText = { formik.touched.email && formik.errors.email} 
                  className="w-100"
                  variant="outlined"
            />
        </div>
        <div className="form-group">
          <TextField
                  onChange={  formik.handleChange }
                  value = { formik.values.password }
                  onBlur= { formik.handleBlur }
                  error = { formik.touched.password && Boolean(formik.errors.password) }
                  helperText = { formik.touched.password && formik.errors.password}
                  name="password"
                  label="Enter your password"
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