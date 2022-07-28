import { Body } from './components/Body';
import { Head } from './components/Head';
import { Provider } from 'react-redux';
import store from './redux/store';
// import Container from '@material-ui/core/Container'

function App() {
  return (
    <Provider store={store}>
      {/* <Container> */}
        <div className="App">
          <Head /> 
          <Body/> 
        </div>
      {/* </Container> */}
    </Provider>
  );
}

export default App;
