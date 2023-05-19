// CSS
import './App.css';

// pages
import Dashboard from './pages/Dashboard/Dashboard.page';

// components
import Header from './components/Header/Header.component';

function App() {

  return (
    <div className='App'>
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
