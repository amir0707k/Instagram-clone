import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineCopyright } from "react-icons/md";
const BottomList = () => {
  return (
    <div>
      <ul className="flex flex-wrap text-sm text-gray-500 justify-center box-border w-3/4 mx-auto">
        <li className="m-2 cursor-pointer hover:decoration-teal-600">Meta</li>
        <li className="m-2 cursor-pointer hover:decoration-teal-600">About</li>
        <li className="m-2 cursor-pointer hover:decoration-teal-600">Blog</li>
        <li className="m-2 cursor-pointer hover:decoration-teal-600">Jobs</li>
        <li className="m-2 cursor-pointer hover:decoration-teal-600">Help</li>
        <li className="m-2 cursor-pointer hover:decoration-teal-600">API</li>
        <li className="m-2 cursor-pointer hover:decoration-teal-600">Privacy</li>
        <li className="m-2 cursor-pointer hover:decoration-teal-600">Terms</li>
        <li className="m-2 cursor-pointer hover:decoration-teal-600">Locations</li>
        <li className="m-2 cursor-pointer hover:decoration-teal-600">Instagram Lite</li>
        <li className="m-2 cursor-pointer hover:decoration-teal-600">Threads</li>
        <li className="m-2 cursor-pointer hover:decoration-teal-600">About</li>
        <li className="m-2 cursor-pointer hover:decoration-teal-600">Contact Uploading & Non-Users</li>
        <li className="m-2 cursor-pointer hover:decoration-teal-600">Meta Verified</li>
        <li className="m-2 cursor-pointer hover:decoration-teal-600 flex items-center">
          English <RiArrowDropDownLine />
        </li>
        <li className="m-2 cursor-pointer hover:decoration-teal-600 flex items-center">
          <MdOutlineCopyright /> 2023 Instagram from Meta
        </li>
      </ul>
    </div>
  );
};

export default BottomList;
