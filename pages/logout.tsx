import React from "react";
import Image from "next/image";
import Login from "./login";

export default function Logout() {
  return (
    <div onClick={() => localStorage.removeItem("my-user")}>
      <Login />
      {/* window.location.href = '/login' */}
    </div>
  );
}
