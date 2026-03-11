import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <br /><br />
        <input type="password" placeholder="Password" />
        <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;