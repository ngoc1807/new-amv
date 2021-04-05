import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
  Link,
} from "react-router-dom";
import AddNoteScreen from "./router/add-note/add-note-screen";
import NoteScreen from "./router/note/note-screen";

import "./styles/main.scss";
import "antd/dist/antd.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Redirect exact from="/" to="/home" /> */}
          <Route path="/add-note" component={AddNoteScreen} />
          <Route path="/note" component={NoteScreen} />
          <ul>
            <li>
              <Link to="/add-note"> ĐĂNG KÝ THÔNG TIN TIÊM CHỦNG sda</Link>
            </li>
            <li>
              <Link to="/note"> QUẢN LÝ SỔ TIÊM CHỦNG </Link>
            </li>
          </ul>
        </Switch>
      </Router>
    </>
  );
}

export default App;
