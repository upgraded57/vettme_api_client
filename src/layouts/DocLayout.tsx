import images from "@/assets/Images";
import Loader from "@/components/Loader";
import { ReactNode, Suspense } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const navLinks = [
  {
    title: "General",
    paths: [
      {
        title: "Introduction",
        path: "/docs",
      },
      {
        title: "Keywords",
        path: "/docs/keywords",
      },
    ],
  },
  {
    title: "Authentication",
    paths: [
      {
        title: "Application ID",
        path: "/docs/app_id",
      },
      {
        title: "API Key",
        path: "/docs/api_key",
      },
    ],
  },
  {
    title: "Environments",
    paths: [
      {
        title: "Sandbox",
        path: "/docs/sandbox",
      },
      {
        title: "Live",
        path: "/docs/live",
      },
    ],
  },
  {
    title: "Services",
    paths: [
      {
        title: "BVN",
        path: "/docs/bvn",
      },
      {
        title: "NIN",
        path: "/docs/nin",
      },
      {
        title: "Phone Number",
        path: "/docs/phone_number",
      },
      {
        title: "Account Number",
        path: "/docs/account_number",
      },
      {
        title: "Voter's ID",
        path: "/docs/vin",
      },
    ],
  },
];
export default function DocLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen overflow-hidden">
      <div className="w-full h-16 flex items-center justify-between border-b-[1px] border-gray-200 px-6">
        <img src={images.logo} alt="Vettme" className="w-full max-w-[80px]" />
        <Link to="/">
          <Button className="pry-btn">Dashboard</Button>
        </Link>
      </div>
      <div className="flex items-start gap-6 w-full pl-6 h-full">
        <div className="w-[300px] border-r-[1px] border-r-gray-200 pt-6 h-full">
          {navLinks.map((item, idx) => (
            <div className="mb-6" key={idx}>
              <h3 className="uppercase text-sm font-semibold mb-2">
                {item.title}
              </h3>
              {item.paths.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="block pl-2 text-sm text-gray-600 mb-3"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="w-full h-full overflow-y-scroll pt-6">
          <Suspense fallback={<Loader />}>{children}</Suspense>
          <div className="py-10 border-t-[1px] border-t-gray-200 flex items-center gap-6">
            <Link
              to="https://www.instagram.com/vettm.e"
              className="p-1 rounded-lg bg-slate-400 cursor-pointer hover:bg-slate-500"
            >
              <Instagram strokeWidth={2} color="white" size={18} />
            </Link>
            <Link
              to="https://www.linkedin.com/company/ijm-global-limited"
              className="p-1 rounded-lg bg-slate-400 cursor-pointer hover:bg-slate-500"
            >
              <Linkedin strokeWidth={1.5} color="white" size={18} />
            </Link>
            <Link
              to="https://web.facebook.com/profile.php?id=61558031707838"
              className="p-1 rounded-lg bg-slate-400 cursor-pointer hover:bg-slate-500"
            >
              <Facebook strokeWidth={1.5} color="white" size={18} />
            </Link>
          </div>
          <div className="py-10"></div>
        </div>
      </div>
    </div>
  );
}
