import { Router, RouteComponentProps } from '@reach/router';
import './App.css';

const HomeScreen = (_: RouteComponentProps) => <div>HomeScreen</div>;

function App() {
  return (
    <>
      <Router primary={false}>
        <HomeScreen path="/" />
        <LoginScreen path="logine" />
      </Router>
    </>
  );
}

export default App;
