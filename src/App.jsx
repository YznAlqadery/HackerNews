import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
//import { ReactQueryDevtools } from "react-query/devtools";

import AppLayout from "./layout/AppLayout";

import Ask from "./pages/Ask";
import Show from "./pages/Show";
import Jobs from "./pages/Jobs";
import NewStories from "./pages/NewStories";

// Create a query client
const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 0,
  },
});

// Define the browser router
const BrowserRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <NewStories />,
      },
      {
        path: "/ask",
        element: <Ask />,
      },
      {
        path: "/show",
        element: <Show />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={BrowserRouter} />

      {/*<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />*/}
    </QueryClientProvider>
  );
}
