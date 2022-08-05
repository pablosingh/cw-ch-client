// import { Body } from './components/Body';
// import { Head } from './components/Head';

import { Body } from './componentsTwo/Body';
import { Head } from './componentsTwo/Head';

import { Provider } from 'react-redux';
import store from './redux/store';
// import Container from '@material-ui/core/Container'

function App() {
  return (
    <Provider store={store}>
        <div className="App container-fluid">
          <Head /> 
          <Body/> 
        </div>
    </Provider>
  );
}

export default App;
