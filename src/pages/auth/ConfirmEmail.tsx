import images from "@/assets/Images";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ConfirmEmail() {
  return (
    <div className="h-full flex flex-col items-center justify-center max-w-sm mx-auto">
      <img src={images.mailbox} alt="" className="w-[150px] mx-auto mb-10" />
      <h1 className="text-2xl font-semibold text-center mb-4">
        Confirm your Email!
      </h1>
      <p className="text-center text-balance mb-10">
        We've sent an activation email to the email address you provided. Use
        the activation link to activate your account. The link expires in{" "}
        <b>30 minutes</b>
      </p>
      <Link
        to="https://mail.google.com"
        target="_blank"
        className="mx-auto block w-max"
      >
        <Button className="pry-btn">Check Inbox</Button>
      </Link>
    </div>
  );
}
