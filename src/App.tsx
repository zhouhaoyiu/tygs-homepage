import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ButtonBar from "./ButtonBar";
import CustomerService from "./CustomerService";

const App = (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="title-area">
        <span className="title">太原供水集团</span>
        {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
        <span className="sub-title">城北营销分公司</span>
      </div>
      <ButtonBar></ButtonBar>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route
          path="/Culture"
          element={
            <>
              <h1>德泽百业，水润万家</h1>
              <h1>卓越超群，源远流长</h1>
              <h1>纳百川水，穿千层石</h1>
            </>
          }
        />
        <Route
          path="/CustomerService"
          element={<CustomerService></CustomerService>}
        />
      </Routes>
    </div>
  );
};

export default App;
