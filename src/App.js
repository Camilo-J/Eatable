import CustomButton from "./components/Button";
import Input from "./components/input";

function App() {
  return (
    <Input
      name={"Email"}
      type={"text"}
      value={"Camilo19@mail.com"}
      onChange={"onChange"}
      placeholder={"example@mail.com"}
      label={"Email address"}
    />
  );
}

export default App;
