import React, { useState, useEffect } from "react";
import { FaUser, FaBook, FaNewspaper } from "react-icons/fa";
import Table from "../Table/tabledashboard";
import Table2 from "../Table/tabledashboard2";

const Dashboard = () => {
  const [totalPelanggan, setTotalPelanggan] = useState(0);
  const [totalArtikel, setTotalArtikel] = useState(0);
  const [totalResep, setTotalResep] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8081/totalPelanggan")
      .then((res) => res.json())
      .then((data) => {
        setTotalPelanggan(data.totalCustomers);
      })
      .catch((err) =>
        console.error("There was an error fetching the total customers!", err)
      );

    fetch("http://localhost:8081/totalArticle")
      .then((res) => res.json())
      .then((data) => {
        setTotalArtikel(data.totalArtikel);
      })
      .catch((err) =>
        console.error("There was an error fetching the total articles!", err)
      );

    fetch("http://localhost:8081/totalRecipe")
      .then((res) => res.json())
      .then((data) => {
        setTotalResep(data.totalResep);
      })
      .catch((err) =>
        console.error("There was an error fetching the total recipes!", err)
      );
  }, []);

  return (
    <>
      <div className="relative mt-10">
        <div className="relative flex items-center ml-10">
          <h1 className="font-bold">Hey Admin</h1>
          <p className="ml-4">Here's what's happening with your store today</p>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-11 mt-8 w-full md:w-3/4">
          <div className="w-full p-1 bg-white rounded-lg shadow relative">
            {/* Card 1 */}
            <div className="flex items-center">
              <div className="absolute bottom-0 right-0 mb-2 mr-2">
                <FaUser className="text-gray-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-semibold ml-2">Total Pelanggan</p>
                <p className="text-black ml-2 mt-1">{totalPelanggan}</p>
              </div>
            </div>
          </div>
          <div className="w-full p-1 bg-white rounded-lg shadow relative">
            {/* Card 2 */}
            <div className="flex items-center">
              <div className="absolute bottom-0 right-0 mb-2 mr-2">
                <FaBook className="text-gray-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-semibold ml-2">Total Resep</p>
                <p className="text-black ml-2 mt-1">{totalResep}</p>
              </div>
            </div>
          </div>
          <div className="w-full p-1 bg-white rounded-lg shadow relative">
            {/* Card 3 */}
            <div className="flex items-center">
              <div className="absolute bottom-0 right-0 mb-2 mr-2">
                <FaNewspaper className="text-gray-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-lg font-semibold ml-2">Total Artikel</p>
                <p className="text-black ml-2 mt-1">{totalArtikel}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 mt-8 w-full md:w-[80%] ">
          <div className="w-[100%] mt-6">
            <Table />
          </div>
          <div className="w-[100%]">
            <Table2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
