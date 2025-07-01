import Board from './components/Board.jsx';
import Toolbar from './components/Toolbar.jsx';
import Toolbox from './components/Toolbox.jsx';
import BoardProvider from './store/BoardProvider.jsx';
import ToolboxProvider from './store/ToolboxProvider.jsx';

function App() {
  return (
    <BoardProvider>
      <ToolboxProvider>
        <>
          <Toolbar />
          <Board />
          <Toolbox />
        </>
      </ToolboxProvider>
    </BoardProvider>
  );
}

export default App;
