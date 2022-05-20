import React from "react";
import BuyButton from "../buy-button"
export default function index({game}) {
  return (
    <div className="flex flex-col justify-between p-2 border-[1px] h-auto relative">
      <img src={game.image} alt={game.title} />
      <p className="mt-[3%]">{game.title}</p>
      <p>{game.genres.map((genre) => <span> {genre},</span>)}</p>
      <div className="my-[8%]">{game.price} $</div>
      <BuyButton/>
    </div>
  );
}
