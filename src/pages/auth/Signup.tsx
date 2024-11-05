import images from "@/assets/Images";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Signup as SignupCall } from "./../../api/auth";
import Spinner from "@/components/Spinner";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
export default function Signup() {
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pass, setPass] = useState("");

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));

    SignupCall(data, setIsLoading, navigate);
  };
  return (
    <div className="flex h-full flex-col justify-between items-center py-4">
      <img src={images.logo} alt="Vettme" className="w-[120px] mx-auto" />

      <form className="w-full max-w-sm" onSubmit={handleSignup}>
        <div className="mb-12">
          <h1 className="text-center text-2xl font-semibold mb-2">
            Create Your Account!
          </h1>
          <p className="text-balance text-center">
            Businesses use Vettme's API to verify, onboard and manage user
            identity across Nigeria.
          </p>
        </div>
        <label htmlFor="companyName" className="block mb-6">
          <p>Company Name</p>
          <Input
            type="text"
            name="companyName"
            required
            placeholder="e.g. John Doe Holdings"
            disabled={isLoading}
          />
        </label>
        <label htmlFor="companyId" className="block mb-6">
          <p>Company Registration ID</p>
          <Input
            type="text"
            name="companyId"
            required
            placeholder="e.g. RC-1234567"
            disabled={isLoading}
          />
        </label>
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
        <label htmlFor="password" className="block mb-6">
          <p>Password </p>
          <div className="relative flex items-center">
            <Input
              name="password"
              type={showPass ? "text" : "password"}
              required
              placeholder="********"
              minLength={8}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              disabled={isLoading}
            />
            {pass.length > 1 && (
              <span
                className="absolute right-4"
                onClick={() => setShowPass((prev) => !prev)}
              >
                {showPass ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </span>
            )}
          </div>
        </label>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : "Create Account"}
        </Button>
      </form>
      <div className="flex gap-2 items-center">
        <p>Already have an account?</p>
        <Link to="/auth/login" className="text-blue-600">
          Sign In
        </Link>
      </div>
    </div>
  );
}
