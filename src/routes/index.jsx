import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Linktree from "../pages/Linktree";
import Error from "../pages/error";
import Main from '../pages/main';


  export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/404" replace/>}/>
          <Route path="/404" element={<Error />}/>
          <Route path="/" element={<Main />}/>
           <Route path="/links" element={<Linktree />}/>
        </Routes>
      </BrowserRouter>
    )
  }


  export default Router