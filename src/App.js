import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import MovieTable from "./components/MovieTable";
import AdminTable  from './components/AdminTable';
import MemberTable from "./components/MemberTable";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import Member from "./components/Member"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//  <Section/>/*
//<AdminTable/>
//<MovieTable/>
//<MemberTable/>

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path='/admin' element={<Admin/>} />
    <Route path='/member' element={<Member/>} />
    </Routes>
    <Footer/>
    </div>
    </Router>
  );
}



export default App;
