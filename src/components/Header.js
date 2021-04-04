import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';

function Menu(){
  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light d-flex">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active text-white" to="/JB-todo-demo-app" >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/todo">
              Todo list
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}


export default function Header(){
  return (
    <AppBar position="static">
      <Toolbar className="d-flex justify-content-between">
        <Avatar alt="Login" src="login.jpg"/>
        <Menu />
      </Toolbar>
    </AppBar>    
   
  )
}