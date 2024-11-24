import React from 'react'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";

function Category() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      
      const onSubmit = (data) => {
        axios.post("https://newapi-qc0b.onrender.com/category", data)
          .then((res) => {
            console.log(data);
            toast.success("Kategoriya muvaffaqiyatli qoshildi");
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          })
          .catch((err) => {
            console.log(err);
            toast.error("Xatolik yuz berdi. Qayta urinib ko'ring.");
          });
      };
    
  return (
    <div className="category_for w-full gap-4 justify-center flex ">
    <form
     onClick={handleSubmit(onSubmit)}
      className={"flex gap-4"}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="">Kategoriya qoshish</label>

        <input
          {...register("name", { required: "Kiritish zarur" })}
          type="text"
          className="p-2 bg-blue-200 rounded-xl outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-400 p-2 rounded-lg text-white font-medium hover:scale-95 duration-300 "
      >
        Yuborish
      </button>
    </form>
    <ToastContainer />

  </div>
  )
}

export default Category