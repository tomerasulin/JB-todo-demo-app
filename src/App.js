import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import TodoList from './components/TodoList';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="h-100 d-flex flex-column justify-content-between">
		<Header />
		
		<div className="container mt-3">
			<div className="row justify-content-center">
				<div className="col-4">
					<Login />
				</div>
			</div>
			
			<div className="row justify-content-center mt-5">
				<div className="col-4">
					<QueryClientProvider client={ queryClient }>
						<TodoList />
					</QueryClientProvider>
				</div>
			</div>
		</div>	
		
		<Footer />		
	</div>
  );
}

export default App;
