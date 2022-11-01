
import Header from './components/header/Header';
import {Route,Routes} from 'react-router-dom'
import Table from './components/table/Table';
import FormPage from './components/form/FormPage';
function App() {
  return (
    <>
    <Header/>
        <Routes>
          <Route path='/' element={<Table/>}/>
          <Route path='/newStudent' element={<FormPage/>}/>
        </Routes>
    </>
  );
}

export default App;
