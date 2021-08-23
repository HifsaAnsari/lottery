import logo from './logo.svg';
import './App.css';
import Ball from './component/Ball';
import Lotty from './component/Lotty';

function App() {
  return (
<>
{/* <Ball num={2}/>
<Ball num={5}/>
<Ball num={9}/>
<Ball num={22}/> */}
<Lotty/>
<Lotty title='Mini Daily' numBall={4} maxNum={22}/>
</>
  );
}

export default App;
