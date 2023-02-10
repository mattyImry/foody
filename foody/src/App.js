import logo from './logo.svg';
import './App.css';

function App() {

  const exampleReq = `https://api.edamam.com/api/recipes/v2?type=public&q=REQUIRED&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`

  
  return (
    <div>
      <h1>React</h1>
    </div>
  );
}

export default App;
