import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const user = useSelector((state) => state.user.userState);

  return user.login ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
