//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtile" aboutText="About TextUtil2"/>
      <div className="container my-3">
      <TextForm heading="enter the text to analyze"/>
    </div>
   </>
  );
}

export default App;
