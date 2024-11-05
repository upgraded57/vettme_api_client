import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function PasswordResetModal({ isOpen }: { isOpen: boolean }) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Password reset successful</AlertDialogTitle>
          <AlertDialogDescription>
            Congratulations. You have successfully reset your compny account
            password. You can now proceed to login with your new credentials
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Link to="/auth/login">
          <Button className="pry-btn w-max">Proceed to Login </Button>
        </Link>
      </AlertDialogContent>
    </AlertDialog>
  );
}
