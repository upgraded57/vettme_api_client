import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useContext, useState } from "react";
import { UserContext } from "@/utils/UserContext";
import { updateCompany, updateCompanyPassword } from "@/hooks/company";
import Spinner from "@/components/Spinner";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
export default function Account() {
  const queryClient = useQueryClient();
  const company = useContext(UserContext)?.company;
  const removeEmptyFields = (rawUpdateData: {}) => {
    return Object.fromEntries(
      Object.entries(rawUpdateData).filter(
        ([_, value]) => value !== null && value !== undefined && value !== ""
      )
    );
  };

  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [pass, setPass] = useState({
    pass1: "",
    pass2: "",
    pass3: "",
  });

  const handleUpdateAccount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));
    const updateData = removeEmptyFields(data);
    updateCompany(updateData, setIsLoading, queryClient);
  };

  const handleUpdatePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));

    if (data.newPass1 !== data.newPass2) {
      toast.error("New passwords do not match", { id: "updateToast" });
      return;
    }

    updateCompanyPassword(
      {
        oldPassword: data.oldPassword,
        newPassword: data.newPass1,
      },
      setIsLoading,
      setPass
    );
  };
  return (
    <>
      <h2 className="text-xl font-semibold mb-6">
        Manage your company account information
      </h2>
      <div className="grid grid-cols-2 gap-6 items-start">
        <div className="w-full p-6 bg-white rounded-xl">
          <h2 className="text-lg font-medium">Company Information Update</h2>
          <form className="mt-6" onSubmit={handleUpdateAccount}>
            <label htmlFor="companyName" className="block mb-4">
              <p className="text-sm mb-1">Company Name</p>
              <Input
                type="text"
                name="companyName"
                id="companyName"
                placeholder={company?.companyName}
                defaultValue={company?.companyName}
                disabled={isLoading}
              />
            </label>
            <label htmlFor="companyEmail" className="block mb-4">
              <p className="text-sm mb-1">Company Email</p>
              <Input
                type="email"
                name="companyEmail"
                id="companyEmail"
                placeholder={company?.email}
                defaultValue={company?.email}
                disabled={isLoading}
              />
            </label>
            <label htmlFor="companyPhone" className="block mb-4">
              <p className="text-sm mb-1">Phone Number</p>
              <Input
                type="text"
                inputMode="tel"
                name="companyPhone"
                id="companyPhone"
                placeholder={company?.phone_number}
                defaultValue={company?.phone_number}
                disabled={isLoading}
              />
            </label>
            <label htmlFor="company_id" className="block mb-4">
              <p className="text-sm mb-1">Company Registration ID</p>
              <Input
                type="text"
                name="company_id"
                id="company_id"
                disabled
                placeholder={company?.companyId}
              />
            </label>
            <Button className="pry-btn" type="submit" disabled={isLoading}>
              {isLoading ? <Spinner /> : "Save Changes"}
            </Button>
          </form>
        </div>

        <div className="w-full p-6 bg-white rounded-xl">
          <h2 className="text-lg font-medium">Password Update</h2>
          <form className="mt-6" onSubmit={handleUpdatePassword}>
            <label htmlFor="oldPassword" className="block mb-4">
              <p className="text-sm mb-1">Current Password</p>
              <div className="relative flex items-center">
                <Input
                  name="oldPassword"
                  id="oldPassword"
                  type={showPass ? "text" : "password"}
                  required
                  placeholder="********"
                  minLength={8}
                  value={pass.pass1}
                  onChange={(e) =>
                    setPass({
                      ...pass,
                      pass1: e.target.value,
                    })
                  }
                  disabled={isLoading}
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
            <label htmlFor="newPass1" className="block mb-4">
              <p className="text-sm mb-1">New Password</p>
              <div className="relative flex items-center">
                <Input
                  name="newPass1"
                  id="newPass1"
                  type={showPass ? "text" : "password"}
                  required
                  placeholder="********"
                  minLength={8}
                  value={pass.pass2}
                  onChange={(e) =>
                    setPass({
                      ...pass,
                      pass2: e.target.value,
                    })
                  }
                  disabled={isLoading}
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
            <label htmlFor="newPass2" className="block mb-4">
              <p className="text-sm mb-1">Confirm New Password</p>
              <div className="relative flex items-center">
                <Input
                  name="newPass2"
                  id="newPass2"
                  type={showPass ? "text" : "password"}
                  required
                  placeholder="********"
                  minLength={8}
                  value={pass.pass3}
                  onChange={(e) =>
                    setPass({
                      ...pass,
                      pass3: e.target.value,
                    })
                  }
                  disabled={isLoading}
                />
                {pass.pass3.length > 1 && (
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
              className="pry-btn"
              type="submit"
              disabled={isLoading || !pass.pass1 || !pass.pass2 || !pass.pass3}
            >
              {isLoading ? <Spinner /> : "Update Password"}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
