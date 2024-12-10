import { lazy } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import { UserProvider } from "./UserContext";
import DocLayout from "@/layouts/DocLayout";
import NotFound from "@/pages/misc/NotFound";

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
const DocIndex = lazy(() => import("@/pages/docs/DocIndex"));
const Home = lazy(() => import("@/pages/app/Home"));
const Logs = lazy(() => import("@/pages/app/Logs"));
const Applications = lazy(() => import("@/pages/app/Applications"));
const Account = lazy(() => import("@/pages/app/Account"));
const Wallet = lazy(() => import("@/pages/app/Wallet"));

// Docs pages
const DocHome = lazy(() => import("@/pages/docs/Home"));
const Keywords = lazy(() => import("@/pages/docs/Keywords"));
const AppId = lazy(() => import("@/pages/docs/AppId"));
const ApiKey = lazy(() => import("@/pages/docs/ApiKey"));
const Sandbox = lazy(() => import("@/pages/docs/Sandbox"));
const Live = lazy(() => import("@/pages/docs/Live"));
const Bvn = lazy(() => import("@/pages/docs/Bvn"));
const Nin = lazy(() => import("@/pages/docs/Nin"));
const PhoneNumber = lazy(() => import("@/pages/docs/PhoneNumber"));
const AccountNumber = lazy(() => import("@/pages/docs/AccountNumber"));
const Vin = lazy(() => import("@/pages/docs/Vin"));

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
  {
    path: "docs",
    element: (
      <DocLayout>
        <DocIndex />
      </DocLayout>
    ),
    children: [
      {
        path: "",
        element: <DocHome />,
      },
      {
        path: "keywords",
        element: <Keywords />,
      },
      {
        path: "app_id",
        element: <AppId />,
      },
      {
        path: "api_key",
        element: <ApiKey />,
      },
      {
        path: "sandbox",
        element: <Sandbox />,
      },
      {
        path: "live",
        element: <Live />,
      },
      {
        path: "bvn",
        element: <Bvn />,
      },
      {
        path: "nin",
        element: <Nin />,
      },
      {
        path: "phone_number",
        element: <PhoneNumber />,
      },
      {
        path: "account_number",
        element: <AccountNumber />,
      },
      {
        path: "vin",
        element: <Vin />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
