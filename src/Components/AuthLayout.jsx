import React, { use, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';  
import { useNavigate } from 'react-router-dom';



export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth?.status); // this is a boolean
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    
    if (authentication && !authStatus) {
      navigate("/login");
    } else if (!authentication && authStatus) {
      navigate("/");
    }

    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
