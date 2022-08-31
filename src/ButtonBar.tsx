import "./ButtonBar.scss";
function ButtonBar() {
  return (
    <div className="button-bar">
      <div className="button-bar-item">
        <button className="button-bar-button">
          {/* <img src={require('./images/home.png')} alt="home" /> */}
          <span>首页</span>
        </button>
      </div>
      <div className="button-bar-item">
        <button className="button-bar-button">
          {/* <img src={require('./images/message.png')} alt="message" /> */}
          <span>消息</span>
        </button>
      </div>
    </div>
  );
}

export default ButtonBar;
