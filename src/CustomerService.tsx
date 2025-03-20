import React, { JSX } from "react";
import "./CustomerService.scss";

const CustomerService = (): JSX.Element => {
  let [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // className为count的在更新时重新渲染
  }, [count]);
  return (
    <div className="animate__animated animate__zoomIn">
      <h1>Customer Service</h1>
    </div>
  );
};

export default CustomerService;
