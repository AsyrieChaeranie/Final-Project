import './App.css';
import {Provider} from 'react-redux';
import store from './Data/store';
import AppRouter from './router';
/* import Navbar from './components/NavBar';*/

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <Navbar />*/}
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;