import logo from './logo.svg';
import './App.css';
import { FcBusinessman } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
function App() {
  return (
    <div className="body">
      <div className="class">
      <h1>ReactJS</h1>  
      </div>
    <div className="App">
      <FcBusinessman />
      <FaReact />
    </div>
    <div className="para">
    <p><b>This is Abdul Raoof</b></p>
    <p><b>Im learning REACTJS with DST</b></p>
    <p>Connect with me! :</p>
    </div>
    <div className="icons">
    <AiOutlineInstagram />
    <BsTwitter />
    <BsFacebook />
    </div>
    </div>
  );
}

export default App;
