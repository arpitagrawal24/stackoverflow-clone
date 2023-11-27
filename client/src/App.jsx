import { Outlet } from 'react-router-dom'
import './App.css'
import { useDispatch } from "react-redux";

import Navbar from './components/Navbar/Navbar'
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from './actions/users';
import { useEffect } from "react";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);


  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
