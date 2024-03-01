import React, { useEffect, useState } from "react";
import "./ProdList.css";

export default function ProductList() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/dataMakanan ")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ProdList">
      {data.length > 0 && (
        <ul>
          {data.map((data) => (
            <li key={data.id}>
              <img src={data.gambar} alt="" />
              <div className="deskripsi">
                <h2>{data.nama}</h2>
                <p>Rp{data.harga}</p>
                <p>{data.deskripsi}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
