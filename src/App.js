import "./App.css";
import EffectExample from "./UseEffect/EffectExample";
import ReducerExample from "./UseReducer/ReducerExample";
import StateExample from "./UseState/StateExample";
import ContextExample from "./UseContext/ContextExample";
import ImperativeHandleExample from "./UseImperativeHandle/ImperativeHandleExample";
import RefExample from "./UseRef/RefExample";
import MemoExample from "./UseMemo/MemoExample";
import LayoutEffectExample from "./UseLayoutEffect/LayoutEffectExample"
import Main from "./PaginationExample/Main";
// import CallbackExample from "./UseCallback/CallbackExample";

function App() {
  return (
    <div className="App">
       <div className='Main'>
        <div className='title'>
          <h1>Game Of Thrones</h1>
          <div className='underline'></div>
        </div> 
      </div>
      <Main />
    </div>
  );
}

export default App;
