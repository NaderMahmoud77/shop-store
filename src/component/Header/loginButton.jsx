// Router
import { Link } from "react-router-dom";

export function LoginButton() {
  return (
    <Link to="/sign-up">
      <div className="login">
        <p> تسجيل الدخول</p>
        <i className="bi bi-person-fill"></i>
      </div>
    </Link>
  );
}