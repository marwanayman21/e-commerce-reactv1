import React from "react";
import Project from "../Project/Project";
import { handelApi } from "../../JS/handelApi";

function ProjectsManger({ products, setProducts, addItem }) {
  return (
    <div className="col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-3 px-5 md:px-10">
      {products ? (
        products.map((product) => (
          <Project product={product} addItem={addItem} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default ProjectsManger;
