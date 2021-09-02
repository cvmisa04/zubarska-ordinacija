
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pocetna from './components/Pocetna'
import TopNav from './components/TopNav'
import Footer from './components/Footer';
import Login from './components/Login';
import MojTermin from './components/MojTermin';
import Register from './components/Register';
import Dashboard from './components/doktor/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import My404Component from './components/404Error/My404Component';
import TopNavMobile from './components/TopNavMobile';

function App() {
  return (
    <>
   

      <BrowserRouter>
     
        <div className='container-fluid'>

          <TopNav />
          
          <ToastContainer position="bottom-center" />

        </div>
        <TopNavMobile />
<Switch>
<Route exact path='/' component={Pocetna} />
        <Route exact path='/termin' component={MojTermin}/>
        <Route exact path='/termin/:jmbg' component={MojTermin}/>
        
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/register' component={Register} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <Route path='*' exact={true} component={My404Component} />
</Switch>
      

    
        <Footer />

      </BrowserRouter>
    



     
    </>
  );
}

export default App;
