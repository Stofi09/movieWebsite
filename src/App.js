import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import MovieTable from "./components/MovieTable";
import AdminTable  from './components/AdminTable';
import MemberTable from "./components/MemberTable";
import Section from "./components/Section";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Section/>
    <AdminTable/>
    <MovieTable/>
    <MemberTable/>
    <Footer/>
    </div>
  );
}



export default App;
