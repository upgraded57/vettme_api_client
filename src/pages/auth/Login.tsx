import images from "@/assets/Images";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Login as LoginCall } from "./../../api/auth";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import Spinner from "@/components/Spinner";
export default function Login() {
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));

    LoginCall(data, setIsLoading, navigate);
  };
  return (
    <div className="flex h-full flex-col justify-between items-center py-8">
      <img src={images.logo} alt="Vettme" className="w-[120px] mx-auto" />

      <form className="w-full max-w-sm" onSubmit={handleSignin}>
        <div className="mb-12">
          <h1 className="text-center text-2xl font-semibold mb-2">
            Welcome Back!
          </h1>
          <p className="text-balance text-center">
            Businesses use Vettme's API to verify, onboard and manage user
            identity across Nigeria.
          </p>
        </div>
        <label htmlFor="email" className="block mb-6">
          <p>Email Address</p>
          <Input
            type="email"
            name="email"
            required
            placeholder="e.g. johndoe@email.com"
            disabled={isLoading}
          />
        </label>
        <label htmlFor="password" className="block">
          <p>Password </p>
          <div className="relative flex items-center">
            <Input
              name="password"
              type={showPass ? "text" : "password"}
              required
              placeholder="********"
              minLength={8}
              disabled={isLoading}
            />
            <span
              className="absolute right-4"
              onClick={() => setShowPass((prev) => !prev)}
            >
              {showPass ? <EyeClosedIcon /> : <EyeOpenIcon />}
            </span>
          </div>
        </label>
        <div className="w-full flex items-center justify-end mt-2 mb-6">
          <Link to="/auth/forgot-password" className="text-xs">
            FORGOT PASSWORD?
          </Link>
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : "Sign In"}
        </Button>
      </form>
      <div className="flex gap-2 items-center">
        <p>Don't have an account?</p>
        <Link to="/auth/signup" className="text-blue-600">
          Sign up for free
        </Link>
      </div>
    </div>
  );
}
