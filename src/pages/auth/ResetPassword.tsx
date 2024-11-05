import images from "@/assets/Images";
import PasswordResetModal from "@/components/modals/PasswordResetModal";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { ResetPassword as ResetPasswordCall } from "@/api/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  if (!token) {
    navigate(-1);
    return;
  }
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pass, setPass] = useState({
    pass1: "",
    pass2: "",
  });

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pass.pass1 !== pass.pass2) {
      toast.error("Passwords do not match", { id: "passToast" });
      return;
    }
    const data = { newPassword: pass.pass1, token };
    ResetPasswordCall(data, setIsLoading, setShowModal);
  };

  return (
    <>
      <div className="py-8 mx-auto max-w-sm">
        <img
          src={images.logo}
          alt="Vettme"
          className="w-[120px] mx-auto mb-20"
        />

        <form className="w-full max-w-sm" onSubmit={handleReset}>
          <div className="mb-12">
            <h1 className="text-center text-2xl font-semibold mb-2">
              Reset your password
            </h1>
            <p className="text-balance text-center">
              Enter a new password for your company account. Be sure to make it
              a memorable one
            </p>
          </div>

          <label htmlFor="pass1" className="block mb-6">
            <p>New Password </p>
            <div className="relative flex items-center">
              <Input
                name="pass1"
                type={showPass ? "text" : "password"}
                required
                placeholder="********"
                minLength={8}
                disabled={isLoading}
                value={pass.pass1}
                onChange={(e) => {
                  setPass({ ...pass, pass1: e.target.value });
                }}
              />
              {pass.pass1.length > 1 && (
                <span
                  className="absolute right-4"
                  onClick={() => setShowPass((prev) => !prev)}
                >
                  {showPass ? <EyeClosedIcon /> : <EyeOpenIcon />}
                </span>
              )}
            </div>
          </label>

          <label htmlFor="pass2" className="block mb-6">
            <p>Confirm New Password </p>
            <div className="relative flex items-center">
              <Input
                name="pass2"
                type={showPass ? "text" : "password"}
                required
                placeholder="********"
                minLength={8}
                disabled={isLoading}
                value={pass.pass2}
                onChange={(e) => {
                  setPass({ ...pass, pass2: e.target.value });
                }}
              />
              {pass.pass2.length > 1 && (
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
            {isLoading ? <Spinner /> : "Reset Password"}
          </Button>
        </form>
      </div>
      <PasswordResetModal isOpen={showModal} />
    </>
  );
}
