import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/Home";
import PromotionPage from "../pages/Promotion";
import WalletPage from "../pages/Wallet";
import ProfilePage from "../pages/Profile";
import ChangePasswordPage from "../pages/ChangePassword";
import LoginPage from "../pages/Login";
import HistoryPage from "../pages/History";
import GameLogPage from "../pages/GameLog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                index: true,
                element: <HomePage />
            },
            {
                path: '/promotion',
                element: <PromotionPage />
            },
            // {
            //     path: '/wallet',
            //     element: <WalletPage />
            // },
            {
                path: '/history',
                element: <HistoryPage />
            },
            {
                path: '/game-log',
                element: <GameLogPage />
            },
            {
                path: '/profile',
                element: <ProfilePage />
            },
            {
                path: '/change-password',
                element: <ChangePasswordPage />
            },
            {
                path: '/login',
                element: <LoginPage />
            }

        ]
    }
])
export default router;