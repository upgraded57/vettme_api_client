import DashboardChart from "@/components/DashboardChart";
import CreateAppModal from "@/components/modals/CreateAppModal";
import { Button } from "@/components/ui/button";

import DashboardRecent from "@/components/DashboardRecent";
import { useContext, useState } from "react";
import { UserContext } from "@/utils/UserContext";
import TopupWalletModal from "@/components/modals/TopupWalletModal";

export default function Home() {
  const [createModal, setCreateModal] = useState(false);
  const [topupModal, setTopupModal] = useState(false);
  const company = useContext(UserContext)?.company;

  return (
    <>
      {<CreateAppModal isOpen={createModal} setIsOpen={setCreateModal} />}
      {<TopupWalletModal isOpen={topupModal} setIsOpen={setTopupModal} />}
      <div className="flex items-center justify-between mb-6">
        <p>
          Wallet Balance: <b>N{company?.balance}</b>
        </p>
        <div className="flex items-center gap-6">
          <p>Quick Actions:</p>
          <div className="flex items-center gap-4">
            <Button className="pry-btn" onClick={() => setCreateModal(true)}>
              Create New App
            </Button>
            <Button className="pry-btn" onClick={() => setTopupModal(true)}>
              Topup Wallet
            </Button>
          </div>
        </div>
      </div>
      <div className="h-[300px] bg-white p-2 rounded-xl mb-12">
        <p className="font-semibold text-lg px-3 mb-3">API consumption chart</p>
        <DashboardChart />
      </div>

      <p className="font-semibold mb-2">Recent Activities</p>

      <DashboardRecent />
    </>
  );
}
