import Todos from './components/Todos';

export interface Todo{
  id: number;
  text: string;
  done: boolean;
}
function App() {
  return (
    <div className="App">
      <Todos></Todos>
    </div>
  );

}

export default App;
