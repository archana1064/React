import logo from './logo.svg';
import './App.css';
import './MyClassComponent'
import MyClassComponent from './MyClassComponent';
import Test from './Test';
import FirstFunc from './FirstFunc';
import Counter from './Counter';
import Text from './Text';
import NameTest from './NameTest';

function App() {
  return (
    <div className="App">
   <h1>
    Welcome to React
   </h1>
   <MyClassComponent/>
   <Test name="Archana"/>
   <FirstFunc name="Kumari"/>
   <Counter/>
   <Text/>
   <NameTest/>
    </div>
  );
}

export default App;
