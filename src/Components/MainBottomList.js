import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineCopyright } from "react-icons/md";
const MainBottomList = () => {
  return (
    <div>
      <ul className="flex flex-wrap w-full text-sm text-gray-500 box-border mt-6">
        <li className="mr-2 cursor-pointer hover:decoration-teal-600">About</li>
        <li className="mx-2 cursor-pointer hover:decoration-teal-600">Help</li>
        <li className="mx-2 cursor-pointer hover:decoration-teal-600">API</li>
        <li className="mx-2 cursor-pointer hover:decoration-teal-600">
          Privacy
        </li>
        <li className="mx-2 cursor-pointer hover:decoration-teal-600">Terms</li>
        <li className="mx-2 cursor-pointer hover:decoration-teal-600">
          Locations
        </li>
        <li className=" cursor-pointer hover:decoration-teal-600">
          Threads
        </li>
        <li className="mt-1 cursor-pointer hover:decoration-teal-600">
          Contact Uploading & Non-Users
        </li>
        <li className="mt-1 mx-2 cursor-pointer hover:decoration-teal-600">
          Meta Verified
        </li>
        <li className="mx-2 cursor-pointer hover:decoration-teal-600 flex items-center"></li>
      </ul>
      <p className="mt-3 cursor-pointer hover:decoration-teal-600 flex items-center text-gray-500">
        <MdOutlineCopyright /> 2023 Instagram from Meta
      </p>
    </div>
  );
};

export default MainBottomList;
