import { useNavigate } from "react-router-dom";

const useAppNavigation = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return {
    goBack,
    navigate,
  };
};

export default useAppNavigation;
