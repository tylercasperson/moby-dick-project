import './App.css';
import ListArea from './components/sections/ListArea';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h2 style={{ margin: '10vmin', textAlign: 'center' }}>
        I was asked to parse a pdf story of Moby Dick. I have included the words to be excluded when
        counting the frequency of occurances.
      </h2>
      <ListArea />
    </div>
  );
}

export default App;
