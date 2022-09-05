import React from "react";

const CustomerService = (): JSX.Element => {
  let [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("CustomerService useEffect", count);
    console.log(React.useEffect);
  }, [count]);
  return (
    <div>
      <h1>Customer Service</h1>
      <div>{count}</div>
      <button onClick={() => setCount((count += 1))}>count ++ </button>
      <button onClick={() => setCount((count -= 1))}>count -- </button>
      <button onClick={() => setCount((count = 0))}>count = 0 </button>
    </div>
  );
};

export default CustomerService;
