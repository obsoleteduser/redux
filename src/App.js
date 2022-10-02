import './App.css';
import Likes from './likes';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Likes likes={3}></Likes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
  