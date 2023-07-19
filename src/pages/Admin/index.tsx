import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function Admin() {
  const { user } = useParams();

  if (user !== "adm1") {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Olá, administrador.</h1>
    </div>
  );
}
