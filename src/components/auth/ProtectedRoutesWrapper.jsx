import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutesWrapper = () => {
  const user = useSelector((state) => state.auth.user);
  return <Outlet /> // delete this later
  return user ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default ProtectedRoutesWrapper;
