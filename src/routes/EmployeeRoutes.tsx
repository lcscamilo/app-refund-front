import { Route, Routes } from "react-router";

import { Refund } from "../pages/Refund";
import { NotFound } from "../pages/NotFound";
import { Confirm } from "../pages/Confirm";

import { AppLayout } from "../components/AppLayout";

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {/* rota padrão (quando acessar /) */}
        <Route index element={<Refund />} />

        {/* rota filha: /confirm */}
        <Route path="confirm" element={<Confirm />} />
      </Route>

      {/* rota fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
