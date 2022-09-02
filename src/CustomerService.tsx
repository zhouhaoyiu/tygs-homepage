import { useState } from "react";

const CustomerService = (): JSX.Element => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Customer Service</h1>
      <div>{count}</div>
    </div>
  );
};

export default CustomerService;
