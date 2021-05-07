import { Router, RouteComponentProps } from '@reach/router';
import './App.css';

import LoginScreen from './LoginScreen';

const HomeScreen = (_: RouteComponentProps) => <div>HomeScreen</div>;

function App() {
  return (
    <>
      <Router primary={false}>
        <HomeScreen path="/" />
        <LoginScreen path="login" />
      </Router>
    </>
  );
}

export default App;
