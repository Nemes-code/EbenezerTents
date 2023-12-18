import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./navigation";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import StateTutorial from "./UseState/StateTutorial";
import ContextTutorial from "./UseContext/ContextTutorial";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import RefTutorial from "./UseRef/RefTutorial";
import MemoTutorial from "./UseMemo/MemoTutorial";
import CallBackTutorial from "./UseCallback/CallbackTutorial";
import LayoutEffectTutorial from "./UseLayoutEffect/LayoutEffectTutorial";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<EffectTutorial />} />
        <Route path="/red" element={<ReducerTutorial />} />
        <Route path="/stat" element={<StateTutorial />} />
        <Route path="/cont" element={<ContextTutorial />} />
        <Route path="/imp" element={<ImperativeHandle />} />
        <Route path="/ref" element={<RefTutorial />} />
        <Route path="/mem" element={<MemoTutorial />} />
        <Route path="/call" element={<CallBackTutorial />} />
        <Route path="/layo" element={<LayoutEffectTutorial />} />
      </Routes>
    </Router>
  );
}

export default App;
