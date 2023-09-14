import React, { useEffect, useState } from "react";

const Covid = () => {
    const [data,setData]=useState([])
  const getCovidData = async () => {
    try {
      const result =  await fetch("https://data.covid19india.org/data.json");
      const actualData = await result.json();
      console.log(actualData.statewise[0])
      setData(actualData.statewise[0])
    } catch (err) {
      console.log(err);
    }


  }

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
    <div className="py-30 bg-teal-800">
        <div className="flex flex-row  md:flex-wrap">
          <div className="text-center  px-20 my-20 mb-12 md:text-left md:w-full md:pr-10 lg:w-full lg:text-center">
            <h1 className=" text-white text-center  text-4xl  md:text-4xl font-bold leading-snug mb-16">
             Covid Tracker App
            </h1>

            <div className="container ml-8">
              <div className="grid gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
                <div className=" shadow-lg shadow-teal-600 hover:scale-105  border-solid  text-white  text-center py-10 pt-2 px-5 rounded-2xl ">
                  <h2 className="text-xl font-bold py-4">
                    <p className="my-8">Our Country</p>
                    <p className=" shadow-yellow-400/40 text-4xl my-6">Pakistan</p>
                  </h2>
                </div>
                <div className=" border-solid shadow-lg shadow-teal-600 text-white hover:scale-105   text-center py-10 pt-2 px-5 rounded-2xl ">
                  <h2 className="text-xl font-bold py-4">
                  <p className="my-8">Recovered</p>
                  <p className=" shadow-yellow-400/40 text-4xl my-6">{data.recovered}</p>
                  </h2>
                </div>
                <div className=" border-solid shadow-lg shadow-teal-600 hover:scale-105  text-white  text-center py-10 pt-2 px-5 rounded-2xl ">
                  <h2 className="text-xl font-bold py-4">
                  <p className="my-8">Confirmed</p>
                  <p className=" shadow-yellow-400/40 text-4xl my-6">{data.confirmed}</p>
                  </h2>
                </div>
                <div className="border-solid shadow-lg shadow-teal-600 hover:scale-105  text-white  text-center py-10 pt-2 px-5 rounded-2xl ">
                  <h2 className="text-xl font-bold py-4">
                  <p className="my-8">Active</p>
                  <p className=" shadow-yellow-400/40 text-4xl my-6">{data.active}</p>
                  </h2>
                </div>
                <div className=" border-solid shadow-lg shadow-teal-600 hover:scale-105  text-white  text-center py-10 pt-2 px-5 rounded-2xl  ">
                  <h2 className="text-xl font-bold py-4">
                  <p className="my-8">Death</p>
                  <p className=" shadow-yellow-400/40 text-4xl my-6">{data.deaths}</p>
                  </h2>
                </div>
                <div className=" border-solid shadow-lg shadow-teal-600 hover:scale-105  text-white order-yellow-200 text-center py-10 pt-2 px-5 rounded-2xl ">
                  <h2 className="text-xl font-bold py-4">
                  <p className="my-8">Updated</p>
                  <p className=" shadow-yellow-400/40 text-4xl my-6">{data.lastupdatedtime}</p>
                  </h2>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
          
    </>
  );
};

export default Covid;
