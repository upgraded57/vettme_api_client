import images from "@/assets/Images";
import Loader from "@/components/Loader";
import { UserContext } from "@/utils/UserContext";
import {
  ArchiveIcon,
  AvatarIcon,
  CardStackIcon,
  DashboardIcon,
  ExitIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";
import { ReactNode, Suspense, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const links = [
  {
    path: "/",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    path: "/apps",
    title: "Applications",
    icon: <CardStackIcon />,
  },
  {
    path: "/account",
    title: "Account",
    icon: <AvatarIcon />,
  },
  {
    path: "/wallet",
    title: "Wallet",
    icon: <ArchiveIcon />,
  },
  {
    path: "/docs",
    title: "Documentation",
    icon: <FileTextIcon />,
  },
  {
    path: "/auth/login",
    title: "Logout",
    icon: <ExitIcon />,
  },
];

export default function DashboardLayout({ children }: Props) {
  const navigate = useNavigate();
  const company = useContext(UserContext)?.company;

  const handleLogout = () => {
    localStorage.removeItem("companyId");
    localStorage.removeItem("token");
    navigate("/auth/login");
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-[300px] h-full bg-white  border-r-[1px] border-gray-300">
        <img src={images.logo} alt="Vettme" className="w-[80px] mx-auto my-8" />
        <ul>
          {links.map((link, idx) => (
            <li key={idx}>
              {link.title.toLowerCase() === "logout" ? (
                <span
                  className="nav-link flex items-center gap-3 py-3 pl-5 w-full mb-2 hover:bg-[#fafafa] cursor-pointer"
                  onClick={handleLogout}
                >
                  {link.icon}
                  {link.title}
                </span>
              ) : (
                <NavLink
                  to={link.path}
                  className="nav-link flex items-center gap-3 py-3 pl-5 w-full mb-2 hover:bg-[#fafafa]"
                >
                  {link.icon}
                  {link.title}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-screen overflow-y-scroll">
        <div className="h-[70px] border-b-[1px] bg-white border-gray-300 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-400 aspect-square flex items-center justify-center text-white font-medium">
              {company &&
                company?.companyName?.split(" ")[0].split("")[0] +
                  company?.companyName?.split(" ")[1].split("")[0]}
            </div>
            <p className="font-semibold uppercase">{company?.companyName}</p>
            {company?.isVerified ? (
              <div className="px-2 py-0.5 rounded-full bg-green-200 text-[10px] font-medium cursor-pointer">
                LIVE
              </div>
            ) : (
              <div className="px-2 py-0.5 rounded-full bg-red-200 text-[10px] font-medium cursor-pointer">
                SANDBOX
              </div>
            )}
          </div>
        </div>
        <div className="p-6">
          <Suspense fallback={<Loader />}>{children}</Suspense>
        </div>
      </div>
    </div>
  );
}
