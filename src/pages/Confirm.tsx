import { Navigate, useLocation, useNavigate } from "react-router";
import okSvg from "../assets/ok.svg";
import { Button } from "../components/Button";

export function Confirm() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />;
  }

  return (
    <div className=" bg-gray-500 lg:w-[512px] rounded-xl flex flex-col items-center justify-center p-10 gap-6">
      <h1 className="text-2xl font-bold text-center text-green-100">
        Solicitação enviada!
      </h1>

      <img src={okSvg} alt="OK" className="w-28 h-28" />

      <p className="text-sm text-gray-200 text-center">
        Agora é apenas aguardar! Sua solicitação será analisada e, em breve, o
        setor financeiro irá entrar em contato com você.
      </p>

      <Button className="w-full" onClick={() => navigate(-1)}>
        Nova solicitação
      </Button>
    </div>
  );
}
