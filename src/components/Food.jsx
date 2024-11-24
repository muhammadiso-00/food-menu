import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function Food() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://newapi-qc0b.onrender.com/category")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data)
    axios
      .post("https://newapi-qc0b.onrender.com/foods", data)
      .then((res) => {
        console.log(data);
        toast.success("Ovqat muvaffaqiyatli qoshildi");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Xatolik yuz berdi. Qayta urinib ko'ring.");
      });
  };

  return (
    <div className="category_for w-full gap-4 justify-center flex ">
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="">Ovqat nomini kiriting</label>
          <input
            {...register("name", { required: "Kiritish zarur" })}
            type="text"
            className="p-2 bg-blue-200 rounded-xl outline-none"
          />

          <label htmlFor="">Ovqat narxini kiriting</label>
          <input
            {...register("price", { required: "Kiritish zarur" })}
            type="text"
            className="p-2 bg-blue-200 rounded-xl outline-none"
          />

          <label htmlFor="">Ovqat kategoriyasini tanlang</label>
          <select
            {...register("category", { required: "Kiritish zarur" })}
            className="p-2 bg-blue-200 rounded-xl outline-none"
          >
            <option value="">Kategoriya tanlang</option>
            {categories.map((category, index) => (
              <option key={index} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-400 p-2 rounded-lg text-white font-medium hover:scale-95 duration-300"
        >
          Yuborish
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Food;
