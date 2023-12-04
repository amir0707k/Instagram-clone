import myImage from '../assets/myImage.jpeg'
import { Link } from 'react-router-dom';
import BottomList from './BottomList';
import MainBottomList from './MainBottomList';
const DashboardRightPane = () => {

    return (
      <div className="fixed w-3/12 flex flex-col items-center justify-between right-0 box-border py-14 px-14 text-white">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center ">
            <img src={myImage} className="h-16 rounded-full cursor-pointer" />
            <div className="ml-7 font-semibold text-sm cursor-pointer">
              <p>hey._aamir</p>
              <p>Aamir</p>
            </div>
          </div>
          <div>
            <Link className="text-blue-400 cursor-pointer">switch</Link>
          </div>
        </div>

        <MainBottomList />
      </div>
    );
}

export default DashboardRightPane;