import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Trend = () => {
  return (
    <>
      <div className="mt-[50px] py-10">
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <div className="bg-white flex items-center py-2.5 px-[15px] shadow-3 w-fit rounded-[30px] uppercase text-second">
                <div className=" text-white  bg-second w-[25px] h-[25px] flex justify-center items-center rounded-full mr-2.5">
                  <FontAwesomeIcon icon={faMicrophone} />
                </div>
                XU THẾ TẤT YẾU
              </div>
              <p className="text-[30px] text-[#bf1937] font-bold mt-[30px] mb-4">
                Đồng hành xu thế chuyển đổi số cho doanh nghiệp cả nước.
              </p>
              <p className="mb-4">
                Liên hệ ngay với chúng tôi qua số hotline {""}
                <span className="text-second font-bold">093.414.6016</span> để
                được hướng dẫn.
              </p>
              <p className="mb-4">
                Chúng tôi trân trọng và rất hân hạnh được phục vụ!
              </p>
              <div className="relative">
                <img
                  className="absolute w-[50px] h-[50px] rounded-full border-2 border-solid border-white"
                  src="/avatar.jpg"
                  alt=""
                />
                <img
                  className="absolute w-[50px] h-[50px] rounded-full border-2 border-solid border-white"
                  style={{ left: "25px" }}
                  src="/avatar.jpg"
                  alt=""
                />
                <img
                  className="absolute w-[50px] h-[50px] rounded-full border-2 border-solid border-white"
                  style={{ left: "50px" }}
                  src="/avatar.jpg"
                  alt=""
                />
                <img
                  className="absolute w-[50px] h-[50px] rounded-full border-2 border-solid border-white"
                  style={{ left: "75px" }}
                  src="/avatar.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-1 mt-8 md:mt-0">
              <img className="max-w-[90%]" src="/trend-img.png" alt="hung" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trend;
