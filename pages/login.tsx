import { useState } from "react";
import supabase from "../config/supabaseClient";
import { useUser } from "../context/UserContext";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { userLogged } = useUser();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      const user = data.user;

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (userLogged) {
    return (
      <div>
        <h1>Welcome back, {userLogged.email}!</h1>
      </div>
    );
  }

  return (
    <div className ="flex justify-center flex-col items-center">
      <h1 className="mg-5 bg-cyan-400">Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
          className="bg-gray-200" 
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
          className="bg-gray-200"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading} className="bg-blue-300 flex justify-center">
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
