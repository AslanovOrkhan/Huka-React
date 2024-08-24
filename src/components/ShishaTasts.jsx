import React from "react";

const ShishaTasts = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.image} alt="" />
        <div className="text_content">
          <h3>{props.title}</h3>
          <p>
            Amazing location for a meal and shisha in an ambient setting. Don’t
            miss out on this exotic fusion of cultures!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShishaTasts;
