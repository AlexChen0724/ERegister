import "./App.css";
import { AddMember } from "./pages/AddMember";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ViewMembers } from "./pages/ViewMembers";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddMember />} />
          <Route path="/ViewMembers" element={<ViewMembers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
