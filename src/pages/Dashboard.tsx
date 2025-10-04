import { useState } from "react";

import searchSvg from "../assets/search.svg";
import { CATEGORIES } from "../utils/categories";

// components
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { RefundItem } from "../components/RefundItem";

const REFUND_EXAMPLE = {
  id: "1",
  name: "Lucas",
  category: "Transporte",
  amount: "100.32",
  categoryImg: CATEGORIES["transport"].icon,
};

export function Dashboard() {
  const [name, setName] = useState("");

  function fetchRefunds(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div className="bg-gray-500 p-10 rounded-xl md:min-w-[768px]">
      <h1 className="tex-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form
        onSubmit={fetchRefunds}
        className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="icon" type="submit">
          <img src={searchSvg} alt="Pesquisar" className="h-5 w-5" />
        </Button>
      </form>

      <div className="mt-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
        <RefundItem data={REFUND_EXAMPLE} />
        <RefundItem data={REFUND_EXAMPLE} />
        <RefundItem data={REFUND_EXAMPLE} />
      </div>
    </div>
  );
}
