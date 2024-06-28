import Select from "./Write/Select";
import Write from "./Write/Write";
import { useRecoilValue } from "recoil";
import { pageState } from "../assets/recoil/recoil";

const Writes = () => {
  const page = useRecoilValue(pageState);

  return <>{page === 0 ? <Write /> : <Select />}</>;
};

export default Writes;
