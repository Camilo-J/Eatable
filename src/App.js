// import CustomButton from "./components/Button";
// import Input from "./components/input";

import AuthenticatedApp from "./AuthenticatedApp";
import { useAuth } from "./context/auth-context";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
  const { user } = useAuth();

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
