import { Navbar, Footer, Order } from "../components"
import { customFetch } from '../utils';
const url = '';

const featuredOrdersQuery = {
  queryKey: ['featuredOrders'],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredOrdersQuery);

  const orders = response.data;
  return { orders };
};

const OrdersContainer = () => {
  return (
    <>
      <Navbar />
      <Order />
      <Footer />
    </>
  )
}

export default OrdersContainer
