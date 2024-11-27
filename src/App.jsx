import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import HomeLayout from "./components/Homelayout"
import ProductsContainer from "./pages/Products"
import "./index.css"
import OrdersContainer from "./pages/Orders"
import { loader as orderLoader } from './pages/Orders';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})
const router = createBrowserRouter([

  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <ProductsContainer />,
        loader: orderLoader(queryClient),
      },
      {
        path: "products",
        element: <OrdersContainer />,
        loader: orderLoader(queryClient),
      },
    ],
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
