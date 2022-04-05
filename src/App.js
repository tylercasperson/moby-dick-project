import './App.css';
import InputLabel from './components/layout/InputLabel';

function App() {
  return (
    <div
      style={{
        width: '700px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        verticalAlign: 'middle',
      }}
    >
      <InputLabel label={'File Location'} />
    </div>
  );
}

export default App;
