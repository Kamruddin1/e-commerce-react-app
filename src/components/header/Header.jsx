import React from "react";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <div className="container">
          <div className="nav1 flex  justify-around p-3 bg-slate-900  ">
            <div>
              <p className="text-white  ">Free Shipping $100 and free Return</p>
            </div>
            <div>
              <p className="ml-10 text-white">
                Hotline: <a href="let: +2887498918">288738399</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="second-header">
        <div className="container-second">
          <div className="nav2 flex justify-around items-center bg-slate-700 text-xl">
            <div className="text-white text-xl">
              <h3>E-commerce</h3>
            </div>
            <div className="search p-3">
              <input
                type="search"
                placeholder="seach bar"
                className="border-3 pl-52 pt-3 flex  bg-white rounded-xl"
              />
            </div>
            <div className="icons flex justify-between items-center gap-28 text-white">
              <div className="flex justify-center flex-col items-center text-xs">
                <CachedOutlinedIcon />
                <p>Compare Product</p>
              </div >
              <div className="flex justify-center flex-col items-center text-xs" >
                <FavoriteBorderOutlinedIcon />
                <p>Favourite wishlist</p>
              </div>
              <div className="flex justify-center flex-col items-center text-xs mt-1">
                <AccountBoxRoundedIcon />
                <p>Login MyAcount</p>
              </div>
              <div className="flex justify-center flex-col items-center text-xs mt-1">
                <ShoppingCartIcon />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
