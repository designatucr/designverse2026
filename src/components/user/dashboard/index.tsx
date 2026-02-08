import Countdown from "./countdown";
import Header from "../header";
import Tile from "./tile";
import { QrCode, ParkingCircle } from "lucide-react";
import Rooms from "./rooms";
import Packing from "./packing";
import BulletList from "./bulletlist";
import { JUDGING } from "@/data/user/judging";
import { RULES } from "@/data/user/rules";

const DashboardWrapper = async () => {
  return (
    <div className="flex h-full flex-col gap-3 py-4 font-poppins">
      <Header />
      <div className="lg:grid-cols-3 grid grid-cols-1 gap-3">
        <div className="md:col-span-2 col-span-1 flex flex-col gap-3">
          <Countdown />
          <div className="md:flex-row flex flex-col gap-4">
            <Tile
              icon={<QrCode size={40} />}
              text="Check In"
              link="/user/checkin"
            />
            <Tile
              icon={<ParkingCircle size={40} />}
              text="Parking Info"
              link="https://transportation.ucr.edu/visitor-parking"
            />
          </div>
          <Rooms />
          <Packing />
        </div>

        <div className="flex flex-col gap-4">
          <BulletList text="Rules" list={RULES} />
          <BulletList text="Judging" list={JUDGING} />
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
