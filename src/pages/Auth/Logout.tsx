import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { logoutAction } from "layout/auth/redux/AuthActions";
import { useNavigate } from "react-router-dom";
import { ROUTER_NAME } from "config/constants";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    dispatch(logoutAction({}));
    navigate(`/${ROUTER_NAME.LOGIN.PATH}`);
    // @ts-ignore
    //document.location.reload();
  }, [])

  return <></>;
};

export default Logout;
