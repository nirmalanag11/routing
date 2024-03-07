import React from "react";
export default function Login() {
  return (
    <div>
      <form action="validate" method="post">
        <h2>USER LOGIN:</h2>

        <label>E-mail:</label>
        <br></br>
        <input type="email" name="email"></input>
        <br></br>
        <br></br>

        <label>Password:</label>
        <br></br>
        <input type="password" name="password"></input>
        <br></br>
        <br></br>

        <input type="submit" value="LOGIN"></input>
      </form>
    </div>
  );
}
