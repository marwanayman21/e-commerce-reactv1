import React from "react";
import "./Cart.css";

function Cart({ trigger ,setTrigger, cart, setCart }) {
  const deleteItem = (index) => {
    const tmpcart = [...cart];
    tmpcart.splice(index, 1);
    setCart(tmpcart);
  };
  const increaseQuantity = (index) => {
    const tmpcart = [...cart];
    if (tmpcart[index].stock >= tmpcart[index].quantity) {
      tmpcart[index].quantity++;
      tmpcart[index].total += tmpcart[index].price;
    }
    setCart(tmpcart);
  };
  const decreaseQuantity = (index) => {
    const tmpcart = [...cart];
    if (tmpcart[index].quantity > 1) {
      tmpcart[index].quantity--;
      tmpcart[index].total -= tmpcart[index].price;
      setCart(tmpcart);
    } else deleteItem(index);
  };

  return (
    <div
      className={` top-0  col-span-3 fixed bg-white z-50 h-screen overflow-auto w-full md:w-1/4 transform transition-transform duration-300 ease-in-out ${
        trigger ? "translate-x-0" : "translate-x-full"
      }`}
      id="side-bar"
      style={{ right: 0 }} // Ensures the div is positioned on the right side of the screen
    >
      <div className="flex justify-center items-center p-3 bg-red-600 text-white text-2xl relative">
        <h3>items</h3>
        <div
          id="close-btn"
          className="cursor-pointer absolute top-0 left-0 bg-red-600 flex justify-center items-center m-1 w-8 h-8"
          onClick={() => setTrigger(false)}
        >
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="row overflow-y-auto">
          <div className="col-12 flex justify-center items-center p-3">
            {cart.length ? (
              <div class="border w-full p-4 " id="cart-list">
                {cart.map((c, i) => (
                  <div className="flex justify-around items-center gap-2 relative p-4 border">
                    <div
                      className="absolute top-0 left-0 flex justify-center items-center w-8 h-8 cursor-pointer"
                      id={i}
                    >
                      <i
                        className="fa-solid fa-xmark text-gray-500"
                        aria-hidden="true"
                        onClick={() => deleteItem(i)}
                      />
                    </div>
                    <div className="w-1/4">
                      <img
                        className="w-full cursor-pointer"
                        src={c.thumbnail}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center flex-wrap">
                      <h5 className="m-0">{c.title}</h5>
                      <p className="m-0">
                        Price: <span>{c.quantity}</span> x{" "}
                        <span>{c.price}</span> :{" "}
                        <span>{c.total.toFixed(2)}</span>
                      </p>
                    </div>
                    <div className="flex flex-row md:flex-col gap-3 justify-center items-center flex-wrap">
                      <i
                        className="fa-solid fa-up-long text-gray-500 cursor-pointer"
                        aria-hidden="true"
                        onClick={() => increaseQuantity(i)}
                      />
                      <i
                        className="fa-solid fa-down-long text-gray-500 cursor-pointer"
                        aria-hidden="true"
                        onClick={() => decreaseQuantity(i)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border w-full p-4" id="cart-list">
                <div>no data added!</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
