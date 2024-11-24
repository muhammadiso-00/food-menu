import { useState } from "react";
import Category from "../components/Category";
import Food from "../components/Food";

function Dashboard() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className="site flex flex-col gap-4 items-center">
        <h2 className="text-xl font-semibold text-center">
          WELCOME TO DASHBOARD
        </h2>

        <div className="buttons flex gap-4">
          <div
            onClick={() => setIsClicked(true)}
            className="p-3 bg-green-500 text-white rounded-2xl hover:bg-white hover:border-2 border-2 cursor-pointer duration-500 border-green-500 hover:text-green-500"
          >
            Kategoriyalar qoshish
          </div>
          <div
            onClick={() => setIsClicked(false)}
            className="p-3 bg-red-500 text-white rounded-2xl hover:bg-white hover:border-2 border-2 cursor-pointer duration-500 border-red-500 hover:text-red-500"
          >
            Ovqat qoshish
          </div>
        </div>

        {isClicked ? <Category /> : <Food />}
      </div>
    </>
  );
}

export default Dashboard;
