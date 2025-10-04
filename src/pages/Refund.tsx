import { useState } from "react";
import { useNavigate } from "react-router";

import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";

import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";

export function Refund() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filename, setFilename] = useState<File | null>(null);

  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(name, amount, category, filename);

    navigate("/confirm", { state: { fromSubmit: true } });
  }

  return (
    <form
      className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w[512px]"
      onSubmit={onSubmit}
    >
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitação de reembolso
        </h1>

        <p className="text-sm text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reembolso.
        </p>
      </header>

      <Input
        required
        legend="Nome da solicitação"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="flex gap-4">
        <div className="flex-[2]">
          <Select
            required
            legend="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES_KEYS.map((category) => (
              <option key={category} value={category}>
                {CATEGORIES[category].name}
              </option>
            ))}
          </Select>
        </div>

        <div className="flex-[1]">
          <Input
            required
            legend="Valor"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>

      <Upload
        filename={filename && filename.name}
        onChange={(e) => e.target.files?.[0] && setFilename(e.target.files[0])}
      />

      <Button type="submit" isLoading={isLoading}>
        Enviar
      </Button>
    </form>
  );
}
