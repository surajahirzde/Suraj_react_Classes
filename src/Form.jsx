import { useState } from "react";

const Form = () => {
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData= new FormData(e.target);
    // const name= formData.get("name")
    // console.log(name)
    // const email= formData.get("email")
    // console.log(email)
    // const password= formData.get("password")
    // console.log(password)
    // if (name.length > 3 && name > 12) {
    //   alert("Form Submitted");
    // }
    //  check regex for name validation
    if (name.match(/^[a-zA-Z]{3,12}$/)) {
      alert("Form Submitted");
    } else {
      setError("Invalid Name");
    }
  };

  return (
    <section>
      <h2>Form Handling</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          margin: "auto",
          gap: "1rem",
          
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        {/* <button type="submit">Submit</button> */}
        <input type="submit" value="Submit" />
      </form>
      {
        error.length > 0 && <p> {error}</p>
      }
    </section>
  );
};

export default Form;
