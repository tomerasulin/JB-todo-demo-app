import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';

function Menu(){
  return(
    <nav className="navbar navbar-expand-lg navbar-light d-flex">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" href="/exercise/indexLogin.html">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/todo">Todo list</a>
        </li>
      </ul>
    </nav>
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