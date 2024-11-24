import React, { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import Pizza1 from "../assets/pizza1.png";
import { Heart } from "lucide-react";

function CategoryCards() {
  const [categories, setCategories] = useState([{ name: "Hammasi" }]);
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [activeTab, setActiveTab] = useState("Hammasi");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://newapi-qc0b.onrender.com/category")
      .then((res) => {
        const newCategories = [{ name: "Hammasi" }, ...res.data];
        setCategories(newCategories);
      })
      .catch((error) => console.error("API chaqiruvda xatolik:", error));
  }, []);

  useEffect(() => {
    axios
      .get("https://newapi-qc0b.onrender.com/foods")
      .then((res) => {
        setFoods(res.data);
        setFilteredFoods(res.data); 
      })
      .catch((error) => console.error("API chaqiruvda xatolik:", error));
  }, []);

  useEffect(() => {
    const filtered = foods.filter((food) => {
      const categoryFiltri = activeTab === "Hammasi" || food.category === activeTab;
      const searchFiltri = food.name.toLowerCase().includes(search.toLowerCase());
      return categoryFiltri && searchFiltri;
    });
    setFilteredFoods(filtered);
  }, [activeTab, search, foods]);

  const handleTab = (tab) => setActiveTab(tab);

  return (
    <>
      <div className="input mt-4">
        <form className="bg-[#F6614126] w-full py-[13px] px-[16px] rounded-[8px] flex gap-[14px]">
          <Search stroke="#A8A8A8" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Izlamoq"
            className="placeholder:font-light placeholder:text-[#6B6B6B8C] outline-none bg-transparent"
          />
        </form>
      </div>
      <div className="tabs flex gap-2">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleTab(category.name)}
            className={`hover:bg-orange-500 hover:text-white duration-300 text-orange-500 font-bold border-[1px] border-orange-500 capitalize rounded-xl p-2 ${activeTab === category.name ? "bg-orange-500 text-white " : ""}`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <main className="flex flex-col gap-[26px] ">
        <h2 className="text-3xl font-semibold text-[#2F2F2F] capitalize">{activeTab}</h2>
        <div className="cards flex flex-wrap gap-[21px]">
          {filteredFoods.map((food, index) => (
            <div
              key={index}
              className="card rounded-[7px] shadow-lg shadow-[#0000002B]"
            >
              <img src={Pizza1} alt="Pizza" />
              <div className="things flex items-end justify-between px-[9px] py-[15px]">
                <div className="text flex flex-col gap-[12px]">
                  <h2 className="font-medium text-lg">{food.name}</h2>
                  <span className="text-sm">${food.price}</span>
                </div>
                <div className="like">
                  <Heart
                    size={16}
                    className={
                      food.isLiked ? "stroke-red-500 fill-red-500" : "stroke-red-500"
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default CategoryCards;
