import './App.css';
import logo from './logo.svg';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ChildComponent from './components/ChildComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'




function App() {
  return (
    <div className="App">
      <h1 className='error' >Error</h1>
      <h1 className={styles.success} > Success</h1>
     <Inline/>
     {/* <Stylesheet primary={true}/> */}
      {/* <NameList/> */}
    {/* <UserGreeting/> */}
      {/* <ParentComponent/>
      <ChildComponent/> */}
      {/* <EventBind /> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
    {/* <Counter/> */}
      {/* <Message /> */}
      {/* <Greet name="Aman" heroName ="superman" >
        <p>This is Aman</p>
      </Greet>
      <Greet name="Pratham" heroName = "batman" >
      <button>Action</button>
      </Greet> */}
      {/* <Greet name="Shresta" heroName ="hawkeye" />
      <Welcome name="Aman" heroName ="superman" />
      <Welcome name="Pratham" heroName = "batman"/>
      <Welcome name="Shresta" heroName ="hawkeye"  /> */}
    {/* <Hello/> */}

    </div>
  );
}

export default App;
