import { Menu } from "lucide-react";
import Profile from "../assets/profile.png";
import "../App.css";
import CategoryCards from "../components/CategoryCards";
import Time from "../components/Time";


function FoodUser() {
  return (
    <div className="site p-4">
      <div className="inner flex flex-col gap-[31px]">
        <header className="flex flex-col gap-4">
          <div className="nav flex items-center justify-between">
            <Menu size={30} />
            <div className="profile">
              <img src={Profile} alt="Profile" />
            </div>
          </div>
          <Time />
          <CategoryCards />
        </header>
        {/* <FoodCards /> */}
      </div>
    </div>
  );
}

export default FoodUser;
