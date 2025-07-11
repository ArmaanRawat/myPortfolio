import React from "react";
import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html className="font-normal  text-xl text-center">{progress}% Loaded</Html>
  );
}

export default Loader;
