import DashboardPage from './../Pages/Dashboard/DashboardPage';
import AddProductPage from './../Pages/Dashboard/AddProductPage';
import ListProductPage from './../Pages/Dashboard/ListProductPage';

const routes_dashboard = [
    {
        path: '/dashboard',
        component: DashboardPage,
    },
    {
        path: '/product-list',
        component: ListProductPage,
    },
    {
        path: '/add-product',
        component: AddProductPage,
    },
];

export default routes_dashboard;
