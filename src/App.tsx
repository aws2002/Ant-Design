import { Button } from 'antd';
import MultilanguageBtn from './Tools/MultilanguageBtn';
function App() {
  return (
    <div className="App">
      <h1 className='text-6xl'>osama</h1>
      <MultilanguageBtn/>
      <Button type="primary">Button</Button>
      <br />
      <Button type="dashed" ghost>
        Dashed
    </Button>
    </div>
  )
}

export default App
