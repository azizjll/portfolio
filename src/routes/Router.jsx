import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));

// Récupère le nom du repo depuis VITE_REPO_NAME si défini (utile pour GitHub Pages)
const repoName = import.meta.env.VITE_REPO_NAME || "";
const baseName = repoName ? `/${repoName}` : "/"; // Si vide, utilise "/"

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
          path: "/",
          element: <Home />,
        },
      ],
    },
  ],
  { basename: baseName } // <-- utiliser le basename corrigé
);