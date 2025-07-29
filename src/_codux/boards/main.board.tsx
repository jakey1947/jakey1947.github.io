import "./main.board.css";
import React from "react";
import { createBoard } from "@wixc3/react-board";

export default createBoard({
  name: "Main",
  Board: () => (
    <div className="MainBoard_div3">
      <div className="MainBoard_div4"></div>
      <div className="MainBoard_div4">
        <img
          src="https://static.wixstatic.com/media/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg/v1/fill/w_600,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_25e218a68cae48e98a21198d1280a6bd~mv2.jpg"
          alt=""
          className="MainBoard_img1"
        />
      </div>
    </div>
  ),
  environmentProps: {
    windowWidth: 1230,
  },
});
