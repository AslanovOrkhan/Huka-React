import React from "react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
const CustomerCommentCard = (props) => {
  return (
    <div>
      <div className="item">
        <BiSolidQuoteAltLeft className="leftIcons" />
        <div className="content">
          <div className="image">
            <img src={props.image} alt="" />
          </div>
          <p>
            Great service and tasty shisha! Mauris venenatis est ut ante
            egestas, at maximus dolor dictum. Donec auctor mauris sit amet
            euismod tristique.
          </p>
          <span>{props.name}</span>
        </div>
        <BiSolidQuoteAltRight className="rightIcons" />
      </div>
    </div>
  );
};

export default CustomerCommentCard;
