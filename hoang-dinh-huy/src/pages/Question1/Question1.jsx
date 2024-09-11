import React, { useState } from "react";
import data from "../../../data/data.json";
import FilterBar from "../../components/FilterBar/FilterBar";
import DataCard from "../../components/DataCard/DataCard";
import "./Question1.css";
const Question1 = () => {
  const [filter, setFilter] = useState({
    city: "",
    district: "",
    price: "",
    area: "",
  });

  const [curData, setCurData] = useState(data);

  const handleFilter = () => {
    const filteredData = data.filter((item) => {
      const priceRange = filter.price ? JSON.parse(filter.price) : null;
      const areaRange = filter.area ? JSON.parse(filter.area) : null;

      if (filter.city && item.city !== filter.city) return false;
      if (filter.district && item.district !== filter.district) return false;
      if (
        filter.price &&
        (item.price < priceRange.min || item.price > priceRange.max)
      )
        return false;
      if (
        filter.area &&
        (item.area < areaRange.min || item.area > areaRange.max)
      )
        return false;
      return true;
    });
    setCurData(filteredData);
  };
  return (
    <div style={{ width: "100%" }}>
      <FilterBar
        filter={filter}
        setFilter={setFilter}
        handleFilter={handleFilter}
      />
      <div className="data-list">
        {curData.length === 0 ? (
          <p>Không tìm thấy dữ liệu phù hợp</p>
        ) : (
          curData.map((item, idx) => <DataCard key={idx} data={item} />)
        )}
      </div>
    </div>
  );
};

export default Question1;
