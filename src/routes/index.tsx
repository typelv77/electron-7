import {HashRouter, Navigate, Route, Routes as Switch } from "react-router-dom";
import Login from "../compnents/Login";
import Home from "../compnents/Home";
import { useEffect } from "react";
import NewUser from "../compnents/NewUser";
import RecoverPassword from "../compnents/RecoverPassword";
import RecoverInformEmail from "../compnents/RecoverInformEmail";
import RecoverInformTokenEmail from "../compnents/RecorverInformTokenEmail";

interface IProps {
  logged: boolean
  setLogged: React.Dispatch<React.SetStateAction<boolean>>
}

const Routes = ({logged, setLogged}:IProps): JSX.Element => {
  useEffect(()=>{},[logged])
  return (
    <>
      <HashRouter>
        <Switch>
        <Route path="/" element={logged ? <Navigate to={"/home"}/> : <Navigate to={"login"}/>}/>

        <Route path="/login" element={ <Login setLogged={setLogged} />}/>
        <Route path="/Home" element={ <Home setLogged={setLogged} />}/>
        <Route path="/Register" element={<NewUser/>}/>
        <Route path="/recover" element={<RecoverPassword/>}/>
        </Switch>
      </HashRouter>
    </>
  );
};

export default Routes;
