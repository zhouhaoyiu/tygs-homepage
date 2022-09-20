import React from "react";
import "./CustomerService.scss";

const CustomerService = (): JSX.Element => {
  let [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // className为count的在更新时重新渲染

    document.querySelector(".count")?.animate(
      [
        // keyframes
        { transform: "translateY(0)" },
        { transform: "translateY(-100%)" },
        { transform: "translateY(0)" },
      ],
      {
        duration: 1000, // timing options
        iterations: Infinity,
      }
    );
  }, [count]);
  return (
    <div className="animate__animated animate__zoomIn">
      <h1>Customer Service</h1>
      <div className="count">{count}</div>
      <button className="button" onClick={() => setCount((count += 1))}>
        count ++{" "}
      </button>
      <button className="button" onClick={() => setCount((count -= 1))}>
        count --{" "}
      </button>
      <button className="button" onClick={() => setCount((count = 0))}>
        count = 0{" "}
      </button>
    </div>
  );
};

export default CustomerService;
