import { Link } from "react-router";
import "./ButtonBar.scss";
import { JSX } from "react";

const ButtonBar = (): JSX.Element => {
  return (
    <div className="button-bar">
      <div className="button-phone">
        <Link to="/CustomerService" className="full">
          <i className="icon-phone icon"></i>
          <span>3094444</span>
        </Link>
      </div>
      <div className="button-bar-content">
        <div className="button-bar-item">
          <Link to="/" className="full">
            <button className="button-bar-button">
              {/* <img src={require('./images/home.png')} alt="home" /> */}
              <div className="button-bar-title">首页</div>
            </button>
          </Link>
        </div>
        <div className="button-bar-item">
          <Link to="/Culture" className="full">
            <button className="button-bar-button">
              {/* <img src={require('./images/message.png')} alt="message" /> */}
              <div className="button-bar-title">企业文化</div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ButtonBar;
