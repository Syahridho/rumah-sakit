import { CiHospital1 } from "react-icons/ci";
import { CiCoinInsert } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { CiCloudMoon } from "react-icons/ci";

const initialDataService = () => [
  {
    id: 1,
    title: "Layanan Publik",
    icons: <CiHospital1 />,
  },
  {
    id: 2,
    title: "Layanan Publik",
    icons: <CiCoinInsert />,
  },
  {
    id: 3,
    title: "Layanan Publik",
    icons: <CiMedal />,
  },
  {
    id: 4,
    title: "Layanan Publik",
    icons: <CiCalendarDate />,
  },
  {
    id: 5,
    title: "Layanan Publik",
    icons: <CiCloudMoon />,
  },
];

export { initialDataService };
