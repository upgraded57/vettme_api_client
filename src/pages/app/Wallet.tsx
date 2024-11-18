import { Button } from "@/components/ui/button";
import { UserContext } from "@/utils/UserContext";
import { useContext, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TopupWalletModal from "@/components/modals/TopupWalletModal";
import { DownloadIcon } from "@radix-ui/react-icons";
import { useFetchTransactions } from "@/hooks/company";
import Loader from "@/components/Loader";
import EmptyState from "@/components/EmptyState";
export default function Wallet() {
  const { isLoading, isFetching, data: transactions } = useFetchTransactions();
  const company = useContext(UserContext)?.company;
  const [topupModalOpen, setTopupModalOpen] = useState(false);
  return (
    <>
      {
        <TopupWalletModal
          isOpen={topupModalOpen}
          setIsOpen={setTopupModalOpen}
        />
      }
      <div className="wallet w-full px-6 py-10 rounded-xl flex items-center justify-between mb-12">
        <div className="text-white">
          <p className="text-sm">Available Balance</p>
          <h1 className="text-3xl font-semibold">NGN {company?.balance}</h1>
        </div>
        <Button
          className="bg-white text-[#3f3434] hover:bg-gray-100"
          onClick={() => setTopupModalOpen(true)}
        >
          Topup Wallet
        </Button>
      </div>

      <p className="font-semibold mb-2">Recent Activities</p>
      <div className="bg-white rounded-xl overflow-hidden">
        {isLoading || isFetching ? (
          <Loader />
        ) : transactions?.length < 1 ? (
          <EmptyState />
        ) : (
          <Table>
            <TableHeader className="bg-gray-500">
              <TableRow>
                <TableHead className="text-white">Transaction ID</TableHead>
                <TableHead className="text-white">Transaction Type</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Date</TableHead>
                <TableHead className="text-white">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3, 4, 5]?.map((_, idx: number) => (
                <TableRow key={idx}>
                  <TableCell>fdf2ettydvgcbjjGFGh12cs</TableCell>
                  <TableCell>Wallet Topup</TableCell>
                  <TableCell>Success</TableCell>
                  <TableCell>Oct 23rd, 2024. 10:04am</TableCell>
                  <TableCell>
                    <TooltipProvider>
                      <Tooltip delayDuration={0}>
                        <TooltipTrigger>
                          <span className="p-2 flex w-max hover:bg-gray-200 rounded-md cursor-pointer">
                            <DownloadIcon />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-[200px]" side="bottom">
                          <p>Download Receipt</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </>
  );
}
