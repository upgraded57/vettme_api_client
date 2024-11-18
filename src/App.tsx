import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();
import { routes } from "./utils/Routes";
function App() {
  const router = createBrowserRouter(routes);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
