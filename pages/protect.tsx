// utils/withAuth.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Dashboard from "./dashboard";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const [userObject, setUserObject] = useState({});

    const router = useRouter();

    // Perform authentication or authorization check
    const isAuthenticated = true;

    useEffect(() => {
      setUserObject(JSON.parse(localStorage.getItem("my-user")));
    }, []);

    useEffect(() => {
      if (!userObject) {
        router.push("/login"); // Redirect to login page if not authenticated
      }
    }, [userObject, router]);

    // Render the wrapped component if authenticated
    return userObject ? <WrappedComponent {...props} /> : null;
  };

  return Wrapper;
};

export default withAuth;
