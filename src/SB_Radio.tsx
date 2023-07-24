import React from 'react';
import { Radio } from 'antd';

const App: React.FC = () => (
  <>
    <Radio.Group defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">first</Radio.Button>
      <Radio.Button value="b">second</Radio.Button>
      <Radio.Button value="c">third</Radio.Button>
      <Radio.Button value="d">fourth</Radio.Button>
    </Radio.Group>
  </>
);

export default App;