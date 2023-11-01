import React from "react";
import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Circles
        height={80}
        width={80}
        color="#4fa94d"
        visible={true}
      />
      <span
        style={{
          color: "grey",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        QuickSell
      </span>
    </div>
  );
};

export default Loading;
