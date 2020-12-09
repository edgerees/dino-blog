import './App.css';
import Dino from './Dino'

function App(props) {
  return (
    <div className="App">
      <div className = "App">
        <header>
          <h1>{props.post.title}</h1>
          <p> by {props.post.author}</p>
          <p> by {props.post.body}</p>
          <h2> Comments </h2>
          <p> by {props.post.comments [2]}</p>
        </header>
      </div>
    </div>
  );
}

export default App;
