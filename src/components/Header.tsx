import { Link } from "react-router";
import logoSvg from "../assets/logo.svg";
import logoutSvg from "../assets/logout.svg";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between">
      <Link to="/">
        <img src={logoSvg} alt="Logo" className="my-8" />
      </Link>

      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-200">Olá, Lucas</span>
        <img
          src={logoutSvg}
          alt="Logout"
          className="my-8 cursor-pointer hover:opacity-75 transition ease-linear"
        />
      </div>
    </header>
  );
}
