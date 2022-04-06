import './App.css';
import InputLabel from './components/layout/InputLabel';
import RippleButton from './components/layout/RippleButton';
import List from './components/layout/List';
import ImportFile from './components/sections/ImportFile';

function App() {
  return (
    <div>
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
        <RippleButton />
        <List array={[{ word: 'one', count: 1000 }]} />
        <ImportFile />
      </div>
    </div>
  );
}

export default App;
