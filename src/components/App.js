import '../App.css';
import Login from './Login';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import MemberRegister from './MemberRegister';
import AdminDashboard from './Dashboard/AdminDashboard';
import MemberDashboard from './Dashboard/MemberDashboard';

function App() {
  return (
    <>
      <h1>Gym Management System</h1>
      <Header/>
      <Home/>
      <Login/>
      <AdminDashboard/>
      <MemberDashboard/>
      <MemberRegister/>
      <Footer/>
    </>
  )
}

export default App;
