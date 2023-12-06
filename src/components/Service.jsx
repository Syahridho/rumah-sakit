import ServiseList from "./ServiceList";
import { useState } from "react";
import { initialDataService } from "../utils";

const Servise = () => {
  const [datas, setDatas] = useState(initialDataService());
  return (
    <div>
      <ServiseList datas={datas} />
    </div>
  );
};

export default Servise;
