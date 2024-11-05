import { lazy } from "react";
import AuthLayout from "@/layouts/AuthLayout";

const Index = lazy(() => import("@/pages/auth/Index"));
const Login = lazy(() => import("@/pages/auth/Login"));
const Signup = lazy(() => import("@/pages/auth/Signup"));
const ConfirmEmail = lazy(() => import("@/pages/auth/ConfirmEmail"));
const ConfirmRecoveryEmail = lazy(
  () => import("@/pages/auth/ConfirmRecoveryEmail")
);
const Activate = lazy(() => import("@/pages/auth/Activate"));
const ForgotPassword = lazy(() => import("@/pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("@/pages/auth/ResetPassword"));

export const routes = [
  {
    path: "/auth",
    element: (
      <AuthLayout>
        <Index />
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
];
