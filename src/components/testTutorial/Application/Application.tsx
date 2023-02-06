import { Fragment, useEffect, useRef, useState } from "react";

function Application() {
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const h1Ref = useRef(null);

  const handleSubmit = () => {
    let element = h1Ref.current! as HTMLElement;
    element.textContent = "JOB APPLICATION";
    element.style.color = "red";
  };

  useEffect(() => {
    setTimeout(() => setIsLogin(true), 1000);
  }, []);

  return (
    <Fragment>
      <h1 ref={h1Ref}>Job Application Form</h1>
      <h2>Fill All The Fields</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select id="job description">
          <option value="Javascript Developer">Javascript Developer</option>
          <option value="React Developer">React Developer</option>
        </select>
        <label htmlFor="gender">Gender</label>
        <input type="checkbox" name="gender" id="gender" />
        <img src="/logo.svg" alt="img" />
        <button type="submit">Submit</button>
      </form>
      {isLogin ? (
        <button style={style}>Start Learning</button>
      ) : (
        <button style={style} onClick={() => setIsLogin(true)}>
          Login
        </button>
      )}
    </Fragment>
  );
}

export default Application;

const style = {
  borderRadius: 5,
  padding: 5,
  outline: "none",
  fontVariant: "small-cap",
  color: "white",
  backgroundColor: "aqua",
  border: "none",
  transition: "all .5s",
};
