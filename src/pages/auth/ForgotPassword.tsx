import images from "@/assets/Images";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ForgotPassword as ForgotPasswordCall } from "@/api/auth";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState("");

  const handleForgot = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    ForgotPasswordCall(data, navigate, setIsLoading);
  };
  return (
    <div className="py-8 mx-auto max-w-sm">
      <img src={images.logo} alt="Vettme" className="w-[120px] mx-auto mb-20" />

      <form className="w-full max-w-sm pt-10" onSubmit={handleForgot}>
        <div className="mb-12">
          <h1 className="text-center text-2xl font-semibold mb-2">
            Lets find your Account
          </h1>
          <p className="text-balance text-center">
            Enter your compnay id or email address associated with your company
            account to reset your password
          </p>
        </div>
        <label htmlFor="email" className="block mb-6">
          <p>Company ID or Email Address</p>
          <Input
            type="text"
            name="email"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
            disabled={isLoading}
          />
        </label>
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : "Find My Account"}
        </Button>
      </form>
    </div>
  );
}
