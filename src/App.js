import "./App.css";
import { HomePage, LoginPage, SignUpPage,ChatBotPage } from "./pages";
import { Route, BrowserRouter,Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route
          path="login"
          element={<LoginPage/>}
        />
        <Route path="signup" element={<SignUpPage/>} />
        <Route path="chatbot" element={<ChatBotPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
