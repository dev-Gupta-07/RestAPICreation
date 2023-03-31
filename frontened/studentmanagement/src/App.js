
import './App.css';
import StudentInfo from "./components/StudentInfo"
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <StudentInfo />
      </div>
    </ChakraProvider>
  );
}

export default App;
