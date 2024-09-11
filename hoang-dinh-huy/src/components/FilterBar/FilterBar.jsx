import React, { useState } from "react";
import "./FilterBar.css";
import Cities from "../../../data/tinh_tp.json";
import Districts from "../../../data/quan_huyen.json";

const FilterBar = ({ filter, setFilter, handleFilter }) => {
  const priceRanges = [
    {
      title: "Dưới 1 triệu",
      value: {
        min: 0,
        max: 1000000,
      },
    },
    {
      title: "1 triệu - 2 triệu",
      value: {
        min: 1000000,
        max: 2000000,
      },
    },
    {
      title: "2 triệu - 3 triệu",
      value: {
        min: 2000000,
        max: 3000000,
      },
    },
    {
      title: "3 triệu - 5 triệu",
      value: {
        min: 3000000,
        max: 5000000,
      },
    },
    {
      title: "5 triệu - 7 triệu",
      value: {
        min: 5000000,
        max: 7000000,
      },
    },
    {
      title: "7 triệu - 10 triệu",
      value: {
        min: 7000000,
        max: 10000000,
      },
    },
    {
      title: "10 triệu - 15 triệu",
      value: {
        min: 10000000,
        max: 15000000,
      },
    },
    {
      title: "15 triệu - 20 triệu",
      value: {
        min: 15000000,
        max: 20000000,
      },
    },
    {
      title: "20 triệu - 30 triệu",
      value: {
        min: 20000000,
        max: 30000000,
      },
    },
    {
      title: "Trên 30 triệu",
      value: {
        min: 30000000,
        max: 999999999,
      },
    },
  ];

  const areaRanges = [
    {
      title: "Dưới 20m2",
      value: {
        min: 0,
        max: 20,
      },
    },
    {
      title: "20m2 - 30m2",
      value: {
        min: 20,
        max: 30,
      },
    },
    {
      title: "30m2 - 50m2",
      value: {
        min: 30,
        max: 50,
      },
    },
    {
      title: "50m2 - 70m2",
      value: {
        min: 50,
        max: 70,
      },
    },
    {
      title: "70m2 - 100m2",
      value: {
        min: 70,
        max: 100,
      },
    },
    {
      title: "100m2 - 150m2",
      value: {
        min: 100,
        max: 150,
      },
    },
    {
      title: "150m2 - 200m2",
      value: {
        min: 150,
        max: 200,
      },
    },
    {
      title: "200m2 - 300m2",
      value: {
        min: 200,
        max: 300,
      },
    },
    {
      title: "Trên 300m2",
      value: {
        min: 300,
        max: 999999999,
      },
    },
  ];

  const handleCityChange = (e) => {
    const cityCode = e.target.value;
    setFilter({ ...filter, city: cityCode });
  };

  const handleDistrictChange = (e) => {
    const districtCode = e.target.value;
    setFilter({ ...filter, district: districtCode });
  };

  const handlePriceChange = (e) => {
    const priceRange = e.target.value;
    console.log(priceRange);

    setFilter({ ...filter, price: priceRange });
  };

  const handleAreaChange = (e) => {
    const areaRange = e.target.value;
    setFilter({ ...filter, area: areaRange });
  };

  const handleDeleteFilter = () => {
    setFilter({
      city: "",
      district: "",
      price: "",
      area: "",
    });
  };

  return (
    <div className="filter-bar">
      <div className="filter-section">
        <label className="h6" htmlFor="">
          Tỉnh thành
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handleCityChange}
          value={filter.city}
        >
          <option value={""}>-- Tỉnh/Thành phố --</option>
          {Object.values(Cities).map((city, idx) => (
            <option key={city.code} value={city.code}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-section">
        <label className="h6" htmlFor="">
          Quận huyện
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handleDistrictChange}
          value={filter.district}
        >
          <option value={""}>-- Quận/huyện --</option>

          {filter.city === "" ? (
            <option>Chọn tỉnh thành trước</option>
          ) : (
            Object.values(Districts)
              .filter((district) => district.parent_code === filter.city)
              .map((district, idx) => (
                <option key={district.code} value={district.code}>
                  {district.name}
                </option>
              ))
          )}
        </select>
      </div>
      <div className="filter-section">
        <label className="h6" htmlFor="">
          Khoảng giá
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handlePriceChange}
          value={filter.price}
        >
          <option value={""}>Chọn mức giá</option>
          {priceRanges.map((price, idx) => (
            <option key={idx} value={JSON.stringify(price.value)}>
              {price.title}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-section">
        <label className="h6" htmlFor="">
          Diện tích
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handleAreaChange}
          value={filter.area}
        >
          <option value={""}>Chọn diện tích</option>
          {areaRanges.map((area, idx) => (
            <option key={idx} value={JSON.stringify(area.value)}>
              {area.title}
            </option>
          ))}
        </select>
      </div>
      <button
        className="btn btn-primary"
        style={{ alignSelf: "flex-end" }}
        type="button"
        onClick={() => handleFilter()}
      >
        Lọc tin
      </button>
      <button
        className="btn btn-outline-secondary"
        style={{ alignSelf: "flex-end" }}
        type="button"
        onClick={() => handleDeleteFilter()}
      >
        Xóa bộ lọc
      </button>
    </div>
  );
};

export default FilterBar;
