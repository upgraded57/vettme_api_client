import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import React, { SetStateAction, useState } from "react";
import { Input } from "@/components/ui/input";
import Spinner from "../Spinner";
import { Cross2Icon } from "@radix-ui/react-icons";
import toast from "react-hot-toast";
import { initiateTopup } from "@/hooks/company";

export default function TopupWalletModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");

  const handleTopup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (parseInt(amount) < 300) {
      toast.error("Minimum topup amount is NGN 300", { id: "topupToast" });
      return;
    }

    initiateTopup(amount, setIsLoading);
  };
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="-mt-20">
        <AlertDialogHeader className="relative">
          <AlertDialogTitle>Topup your Wallet</AlertDialogTitle>
          <span
            className={`absolute top-0 right-0 ${
              isLoading && "pointer-events-none"
            }`}
            onClick={() => (isLoading ? null : setIsOpen(false))}
          >
            <Cross2Icon className="cursor-pointer hover:text-red-500" />
          </span>
          <AlertDialogDescription>
            Enter a topup amount to proceed
          </AlertDialogDescription>
          <form onSubmit={handleTopup}>
            <label htmlFor="amount" className="block mb-3">
              <p className="text-sm">Topup amount</p>
              <Input
                type="text"
                placeholder="e.g. 2,000"
                inputMode="numeric"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                disabled={isLoading}
              />
            </label>
            <Button
              type="submit"
              className="pry-btn w-max"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-4">
                  Initiating Topup
                  <Spinner />
                </div>
              ) : (
                "Continue"
              )}
            </Button>
          </form>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
