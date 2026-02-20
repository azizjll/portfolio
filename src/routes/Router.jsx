import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

// Pour Vercel, le site est à la racine → basename vide
const baseName = ""; // <-- important pour éviter l'erreur

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          path: "/", // Page d'accueil
          element: <Home />,
        },
      ],
    },
  ],
  { basename: baseName } // <-- vide pour Vercel
);