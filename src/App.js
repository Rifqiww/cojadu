import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Information from './Components/Information';
import Belajar from './Components/Pembelajaran';
import Materi from './Components/Materi';
import Mkonsep from './Components/Mkonsep';
import Mlogika from './Components/Mlogika';
import Malgoritma from './Components/Malgoritma';
import Rating from './Components/Rating';
import Komunikasi from './Components/Komunikasi';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Information/>
      <Komunikasi/>
      <Rating/>
      <Belajar/>
      <Materi/>
      <Mkonsep/>
      <Mlogika/>
      <Malgoritma/> 
      <Footer/>
    </div>
  );
}

export default App;
