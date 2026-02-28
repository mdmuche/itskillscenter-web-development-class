import FocusInput from './components/FocusInput';
import './App.css';
import Counter from './components/Counter';
import Message from './components/Message';
import NameInput from './components/NameInput';
import Parent from './components/Parent';
import ParentComponentCorrect from './components/ParentComponentCorrect';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
        <h1>Welcome to week 2</h1>
        <Counter />
        <Message />
        <NameInput />
        <Parent />
        <FocusInput />
        <ParentComponentCorrect />
        <MyComponent onSave={(value) => console.log('Saved value:', value)}/>
    </div>
  );
}

export default App;
