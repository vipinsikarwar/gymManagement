import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';
import AddPlan from './AddPlan';
import AdminDashboard from './Dashboard/AdminDashboard';
import Footer from './Footer';
import FooterLinks from './FooterLinks';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import MemberRegister from './Register';
import NotFound from './NotFound';


function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/dashboard" component={AdminDashboard} />
          <Route path="/login" component={Login} />
          <Route path="/memberregister" component={MemberRegister} />
          <Route path="/addplan" component={AddPlan} />
          <Route path="/header" component={Header} />
          <Route path="/footer" component={Footer} />
          {/* <Route path="/footerlinks" component ={FooterLinks}/> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
