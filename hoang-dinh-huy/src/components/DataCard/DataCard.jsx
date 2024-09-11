import React from "react";
import Cites from "../../../data/tinh_tp.json";
import Districts from "../../../data/quan_huyen.json";
import "./DataCard.css";
const DataCard = ({ data }) => {
  const convertPrice = (price) => {
    return (price / 1000000).toFixed(2).toString();
  };

  return (
    <div className="card-container">
      <img
        className="card-image"
        src={data.thumbnail}
        alt=""
        loading="lazy"
      ></img>
      <div className="card-content">
        <h6 style={{ color: "red" }}>{data.title}</h6>
        <h5 style={{ color: "green", fontWeight: 700 }}>
          {convertPrice(data.price)} triệu/tháng
        </h5>

        <div style={{ display: "flex", gap: "5rem" }}>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <span style={{ color: "gray" }}>Diện tích:</span>
            <span style={{ fontWeight: 500 }}>{data.area}m2</span>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <span style={{ color: "gray" }}>Khu vực:</span>
            <span style={{ fontWeight: 500, color: "darkslateblue" }}>
              {Districts[data.district]["path_with_type"]}
            </span>
          </div>
        </div>

        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default DataCard;
