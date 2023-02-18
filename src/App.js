import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormLabel } from 'react-bootstrap';


function App() {
  return (
    <div className="body">
    <form className='needs-validation'>

    <div className="App rounded">
      <h2 className="title">Login Form</h2>
      <div className="email was-validated">
        <FormLabel htmlFor="email" className='form-label'>Email adress</FormLabel>
        <input type="email" className='form-control' required/>
      </div>
      <div className="password was-validated">
        <FormLabel htmlFor="password" className='form-label'>Password</FormLabel>
        <input type="password" className='form-control' required/>
      </div>
      <button className='btn btn-success block'  type='submit'>Sign In</button>
    </div>
    </form>



    </div>
  );
}

export default App;
