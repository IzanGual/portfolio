import { Routes, Route } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

export default function Router() {
  // lista de rutas
  const ROUTE_LIST = [
    { title: "mainPage", path: "/", element: <MainPage /> },
  ];

  return (
    <Routes>
      {ROUTE_LIST.map(({ title, path, element }) => (
        <Route key={title} path={path} element={element} />
      ))}

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
