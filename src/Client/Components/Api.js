import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Api = () => {
      const [data, setData] = useState([]);

      useEffect(() => {
        fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            const coins = [];
              for (let i = 0; i < 10; i++) {
              coins.push(data[i]);
            }
            setData(coins);

            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);


  return (
      <div>

      {/* {data.map((item) => {
        // console.log(item)
        return (
          <div className='flex'>
            <a href={`https://www.coingecko.com/en/coins/${item.id}`} className='flex'>
              <div className=" flex items-center" key={data}>
                <div className="p-2 font-bold flex">
                  <p className="flex">{item.id}</p>
                </div>
              </div>
            </a>
          </div>
        );
      })} */}
    </div>
  );
}

export default Api