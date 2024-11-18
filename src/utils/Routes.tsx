import { lazy } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import { UserProvider } from "./UserContext";

const AuthIndex = lazy(() => import("@/pages/auth/Index"));
const Login = lazy(() => import("@/pages/auth/Login"));
const Signup = lazy(() => import("@/pages/auth/Signup"));
const ConfirmEmail = lazy(() => import("@/pages/auth/ConfirmEmail"));
const ConfirmRecoveryEmail = lazy(
  () => import("@/pages/auth/ConfirmRecoveryEmail")
);
const Activate = lazy(() => import("@/pages/auth/Activate"));
const ForgotPassword = lazy(() => import("@/pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("@/pages/auth/ResetPassword"));
const HomeIndex = lazy(() => import("@/pages/app/Index"));
const Home = lazy(() => import("@/pages/app/Home"));
const Logs = lazy(() => import("@/pages/app/Logs"));
const Applications = lazy(() => import("@/pages/app/Applications"));
const Account = lazy(() => import("@/pages/app/Account"));
const Wallet = lazy(() => import("@/pages/app/Wallet"));

export const routes = [
  {
    path: "/auth",
    element: (
      <AuthLayout>
        <AuthIndex />
      </AuthLayout>
    ),
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "confirm-email",
        element: <ConfirmEmail />,
      },
      {
        path: "confirm-recovery-email",
        element: <ConfirmRecoveryEmail />,
      },
      {
        path: "activate/:token",
        element: <Activate />,
      },
      {
        path: "forgot-password/",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password/:token",
        element: <ResetPassword />,
      },
    ],
  },

  {
    path: "",
    element: (
      <UserProvider>
        <DashboardLayout>
          <HomeIndex />
        </DashboardLayout>
      </UserProvider>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "apps",
        element: <Applications />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "wallet",
        element: <Wallet />,
      },
      {
        path: "apps/:appId/logs",
        element: <Logs />,
      },
    ],
  },
];
