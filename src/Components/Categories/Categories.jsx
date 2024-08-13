import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { handelApi } from "../../JS/handelApi";

function Categories({ setCat, trigger , setTrigger}) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    handelApi.getallData("products/categories", setCategories);
  }, []);

  return (
    <aside
      className={`col-span-3 top-0 fixed my-10 bg-white w-full md:w-1/4 transform transition-transform duration-300 ease-in-out ${
        trigger ? "translate-x-0" : "-translate-x-full"
      }`}
      id="side-bar"
    >
      <div className="border shadow rounded p-3 relative" id="sidebar">
        {/* <div class="bg-danger p-2 " id="slider">
          <i class="fa-solid fa-icons" aria-hidden="true"></i>
        </div> */}
        <div class="">
          <h3 className="text-2xl py-5">Categories</h3>

          <ul
            id="categories"
            className="relative list-unstyle px-0 cursor-pointer h-screen overflow-auto scrollbar-custom"
          >
            {categories.length > 0 ? (
              categories.map((c, i) => {
                return (
                  <li
                    className="py-2 px-1 text-lg content-hover rounded"
                    id={c.slug}
                    key={c.slug}
                    onClick={() => {
                        setTrigger(false);
                        setCat(c)
                    }}
                  >
                    {c.name}
                  </li>
                );
              })
            ) : (
              <Loading />
            )}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Categories;
