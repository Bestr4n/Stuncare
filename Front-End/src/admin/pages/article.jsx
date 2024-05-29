import React from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/art1.png";
import logo2 from "../assets/art2.png";
import logo3 from "../assets/art3.png";

const Article = () => {
  return (
    <>
      <section className="p-0 mt-0">
        <div className="flex ml-24">
          <NavLink
            to="/admin/recipeadmin/uploadarticle"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-10 ml-30"
          >
            +
          </NavLink>
        </div>

        <div
          className="ml-48 justify-center mt-0 mb-20"
          style={{ height: "63vh", overflowY: "scroll" }}
        >
          <div className="flex gap-6 flex-wrap">
            <div className="relative w-[351px] h-auto bg-white shadow-lg rounded-[20px] p-4">
              <img
                className="w-full h-[169px] rounded-[10px]"
                src={logo1}
                alt="placeholder"
              />
              <div className="pt-4 pb-8 px-4 bg-white rounded-t-[30px] flex flex-col justify-start items-start gap-4">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2">
                    <div className="w-[15px] h-[16.54px] bg-gray-800"></div>
                    <div className="text-gray-500 text-[13px] font-open-sans font-semibold capitalize leading-[20.8px]">
                      April 10, 2022
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[13px] h-[16.32px] bg-gray-800"></div>
                    <div className="text-gray-500 text-[14px] font-open-sans font-semibold capitalize leading-[22.4px]">
                      Admin
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-2.5">
                  <div className="w-full">
                    <div className="text-[#1F1E17] text-[17px] font-manrope font-extrabold leading-[30.8px]">
                      Kasus stunting pada anak Indonesia
                    </div>
                    <div className="text-[#878680] text-[16px] font-manrope font-medium leading-[30px] mt-2">
                      Stunting masih menjadi permasalahan kesehatan yang
                      dihadapi anak-anak Indonesia. Pasalnya,
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-[351px] h-auto bg-white shadow-lg rounded-[20px] p-4">
              <img
                className="w-full h-[169px] rounded-[10px]"
                src={logo2}
                alt="placeholder"
              />
              <div className="pt-4 pb-8 px-4 bg-white rounded-t-[30px] flex flex-col justify-start items-start gap-4">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2">
                    <div className="w-[15px] h-[16.54px] bg-gray-800"></div>
                    <div className="text-gray-500 text-[13px] font-open-sans font-semibold capitalize leading-[20.8px]">
                      April 10, 2022
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[13px] h-[16.32px] bg-gray-800"></div>
                    <div className="text-gray-500 text-[14px] font-open-sans font-semibold capitalize leading-[22.4px]">
                      Admin
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-2.5">
                  <div className="w-full">
                    <div className="text-[#1F1E17] text-[17px] font-manrope font-extrabold leading-[30.8px]">
                      Hasil Survei Status Gizi Indonesia (SSGI)
                    </div>
                    <div className="text-[#878680] text-[16px] font-manrope font-medium leading-[30px] mt-2">
                      Kementerian Kesehatan Republik Indonesia mengeluarkan
                      Hasil Survei Status Gizi Indonesia (SSGI) tahun 2022.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-[351px] h-auto bg-white shadow-lg rounded-[20px] p-4">
              <img
                className="w-full h-[169px] rounded-[10px]"
                src={logo3}
                alt="placeholder"
              />
              <div className="pt-4 pb-8 px-4 bg-white rounded-t-[30px] flex flex-col justify-start items-start gap-4">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2">
                    <div className="w-[15px] h-[16.54px] bg-gray-800"></div>
                    <div className="text-gray-500 text-[13px] font-open-sans font-semibold capitalize leading-[20.8px]">
                      April 10, 2022
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[13px] h-[16.32px] bg-gray-800"></div>
                    <div className="text-gray-500 text-[14px] font-open-sans font-semibold capitalize leading-[22.4px]">
                      Admin
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-2.5">
                  <div className="w-full">
                    <div className="text-[#1F1E17] text-[17px] font-manrope font-extrabold leading-[30.8px]">
                      Dari Banyak Masalah Gizi, Kasus Stunting Paling Tinggi di
                      Indonesia
                    </div>
                    <div className="text-[#878680] text-[16px] font-manrope font-medium leading-[30px] mt-2">
                      Stunting masih menjadi permasalahan kesehatan yang
                      dihadapi anak-anak Indonesia. Pasalnya,
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Article;
