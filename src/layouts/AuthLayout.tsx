import Loader from "@/components/Loader";
import { ReactNode, Suspense } from "react";
interface Props {
  children: ReactNode;
}
export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex items-center h-screen w-full p-4 gap-4">
      <div className="flex-1 h-full">
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </div>
      <div className="flex-1 h-full auth-layout  overflow-hidden" />
    </div>
  );
}
