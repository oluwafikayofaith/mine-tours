import "./FormStyles.css";

function FormUs() {
  return (
    <div className="form">
      <h1>Send a Message To Us Today!</h1>
      <form>
        <input placeholder="enter name" />
        <input placeholder="enter email" />
        <input placeholder="enter subject" />
        <textarea placeholder="enter message"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default FormUs;
