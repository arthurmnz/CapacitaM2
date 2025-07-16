import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));
const TelaCadastro = lazy(() => import("../pages/TelaCadastro/TelaCadastro"));
const NoPage = lazy(() => import("../pages/404Exception/NoPage"));
const TelaEdicao = lazy(() => import("../pages/TelaEdicao/TelaEdicao"));
import Loading from "./Loading/Loading";

const AppRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TelaCadastro" element={<TelaCadastro />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/TelaEdicao/:id" element={<TelaEdicao />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
