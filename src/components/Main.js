import "./MainStyles.css";
function Main(props) {
  return (
    <>
      <div className={props.cname}>
        <img alt="main" src={props.heroimg} />
        <div className="maintext">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btn}>
            {props.btntext}
          </a>
        </div>
      </div>
    </>
  );
}
export default Main;
