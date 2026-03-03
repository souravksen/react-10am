import { AiFillAlert } from "react-icons/ai";
import DUMMY from "../../assets/dummy.jpg"
const Icon_Implement = () => {
  return (
    <div>
      <AiFillAlert size={100} color="red" />
      <br />
    <img src={DUMMY} alt="" width={300}/>
    </div>
  );
};
export default Icon_Implement;
