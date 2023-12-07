import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

import {useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../Redux/Feaches/UserSlice";


export default function ProtectedRoute({ children }) {

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}