import { ActivateAccount, resendActivationLink } from "@/api/auth";
import images from "@/assets/Images";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Activate() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<
    "pending" | "success" | "fail" | "conflict" | null
  >(null);
  const { token } = useParams();
  if (!token) navigate(-1);

  useEffect(() => {
    ActivateAccount(token as string, setStatus);
  }, [token]);

  if (status === "pending") return <p>Activating your account ...</p>;
  if (status === "success") return <ActivationSuccessful />;
  if (status === "fail")
    return <ActivationFailed token={token as string} setStatus={setStatus} />;
  if (status === "conflict") return <AlreadyActivated />;
}

const ActivationSuccessful = () => (
  <div className="h-full flex flex-col items-center justify-center max-w-sm mx-auto">
    <img src={images.thumb} alt="" className="w-[150px] mx-auto mb-10" />
    <h1 className="text-2xl font-semibold text-center mb-4">
      Account Activation Successful!
    </h1>
    <p className="text-center text-balance mb-10">
      Congratulations. Your account has been activateed successfully. You can
      now proceed to login with your credentials
    </p>
    <Link to="/auth/login" className="mx-auto block w-max">
      <Button className="pry-btn">Login to your Account</Button>
    </Link>
  </div>
);

interface Props {
  token: string;
  setStatus: React.Dispatch<
    React.SetStateAction<"pending" | "success" | "fail" | "conflict" | null>
  >;
}
const ActivationFailed = ({ token, setStatus }: Props) => {
  const navigate = useNavigate();
  const handleResend = () => {
    resendActivationLink(token, navigate, setStatus);
  };
  return (
    <div className="h-full flex flex-col items-center justify-center max-w-sm mx-auto">
      <img src={images.sad} alt="" className="w-[100px] mx-auto mb-10" />
      <h1 className="text-2xl font-semibold text-center mb-4">
        Account Activation Failed
      </h1>
      <p className="text-center text-balance mb-10">
        Something went wrong. It seems you are using either an expired or a
        malformed link. Don't worry, you can still request a new activation
        link.
      </p>
      <Button className="mx-auto pry-btn" onClick={handleResend}>
        Request new Link
      </Button>
    </div>
  );
};

const AlreadyActivated = () => (
  <div className="h-full flex flex-col items-center justify-center max-w-sm mx-auto">
    <img src={images.thumb} alt="" className="w-[150px] mx-auto mb-10" />
    <h1 className="text-2xl font-semibold text-center mb-4">
      Account Already Activated!
    </h1>
    <p className="text-center text-balance mb-10">
      Your account is already active. You can proceed to login with your
      credentials.
    </p>
    <Link to="/auth/login" className="mx-auto block w-max">
      <Button className="pry-btn">Login to your Account</Button>
    </Link>
  </div>
);
