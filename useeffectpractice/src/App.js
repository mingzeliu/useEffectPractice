import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [resouceType, setResourceType] = useState("post");

  useEffect(() => {
    console.log("render");
  });

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{setResourceType}</h1>
    </>
  );
}
