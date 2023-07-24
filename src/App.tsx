import './App.css';
import 'antd/dist/antd.css';
import SB_Table from './SB_Table';
import SB_Radio from './SB_Radio';
import SB_Switch from './SB_Switch';
import SB_Select from './SB_Select';
import SB_Modal from './SB_Modal';
import SB_Notification from './SB_Notification';
import SB_Adaptive from './SB_Adaptive';
import SB_Chart from './SB_Chart';


function App() {
  return (
    <div className="App">
      <SB_Table/>
      <SB_Radio/>
      <br/>
      <SB_Switch/>
      <br/>
      <SB_Select/>
      <br/>
      <SB_Modal/>
      <br/>
      <SB_Notification/>
      <br/>
      <SB_Adaptive/>
      <br/>
      <SB_Chart/>
    </div>
  );
}

export default App;
