import "./main.board.css";
import React from "react";
import { createBoard } from "@wixc3/react-board";

export default createBoard({
  name: "Main",
  Board: () => (
    <div className="MainBoard_div3">
      <div className="MainBoard_div4">
        <div className="MainBoard_div5">
          <div className="MainBoard_div6">
            <h1 className="MainBoard_header1">Kieran Pavy</h1>
            <p className="MainBoard_p1">
              This is a placeholder paragraph. It is here to provide structure
              while you work on your content. You can replace this text with
              your own words once you are ready. Placeholders like this are
              great for visualizing the layout and flow of your document before
              finalizing the content.
            </p>
          </div>
          <img
            src="https://cdnb.artstation.com/p/assets/images/images/021/734/127/large/kieran-pavy-smiley-marshmallow.jpg?1572769601"
            alt=""
            className="MainBoard_img3"
          />
        </div>
      </div>
      <div className="Scrollpoint" />
    </div>
  ),
  environmentProps: {
    windowWidth: 1920,
    windowHeight: 1080,
  },
});
