
import './App.css';
import TodoList from './components/To-do-list';
import doodle1 from './IMAGES/doodle-1.svg';
import pencil from './IMAGES/pencil.png';
import doodle2 from './IMAGES/doodle-2.svg';
import doodle3 from './IMAGES/doodle-3.svg';

function App() {
  return (
    <div>
     {/*<img src={doodle2} className="doodle-2" alt="doodle2" />
      <img src={doodle3} className="doodle-3" alt="doodle3" />*/}
      <img src={doodle2} className="doodle-2" alt="doodle2" />
      <img src={doodle3} className="doodle-3" alt="doodle3" />
      <div className="To-do-list-container">
      <TodoList/>
      
      </div>
      <img src={doodle1} className="doodle-1" alt="doodle1" />
    
      <img src= {pencil} className="pencil" alt="pencil" />

    </div>
    
    
  );
}

export default App;
