import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Job = () => {
  return (
    <>
      <div className="mt-5  p-10 flex flex-col items-center justify-center bg-bg-job">
        <div className="bg-white flex py-2.5 px-[15px] shadow-3 w-fit rounded-[30px] uppercase text-second">
          <div className="text-white bg-second w-6 h-6 flex items-center justify-center rounded-full mr-2.5">
            <FontAwesomeIcon icon={faMicrophone} />
          </div>
          Lĩnh vực, ngành nghề
        </div>
        <p className="mt-5 mb-4 text-3xl text-white font-bold text-center">
          Các ngành nghề sử dụng giải pháp của MCI Solution
        </p>
        <p className="max-w-[500px] text-white text-center">
          Các giải pháp của MCI Solution phù hợp với nhiều lĩnh vực trong đời
          sống kinh tế – xã hội, trong đó phải kể đến:
        </p>
        <div className="flex flex-wrap items-center justify-center text-center p-[30px] rounded-[30px] mb-5 ">
          <div className=" group flex flex-col items-center justify-center text-center p-[30px] bg-white hover:bg-bg-job hover:border hover:border-solid hover:border-white rounded-[30px] mb-5 mx-3">
            <img
              src="/1.svg"
              alt="job"
              className="group-hover:invert group-hover:brightness-0"
            />
            <p className="mt-2.5 font-bold mb-4 group-hover:text-white">
              CNTT - Truyền thông
            </p>
          </div>

          <div className=" group flex flex-col items-center justify-center text-center p-[30px] bg-white hover:bg-bg-job hover:border hover:border-solid hover:border-white rounded-[30px] mb-5 mx-3">
            <img
              src="/2.svg"
              alt="job"
              className="group-hover:invert group-hover:brightness-0"
            />
            <p className="mt-2.5 font-bold mb-4 group-hover:text-white">
              Giáo dục - Đào tạo
            </p>
          </div>

          <div className=" group flex flex-col items-center justify-center text-center p-[30px] bg-white hover:bg-bg-job hover:border hover:border-solid hover:border-white rounded-[30px] mb-5 mx-3">
            <img
              src="/3.svg"
              alt="job"
              className="group-hover:invert group-hover:brightness-0"
            />
            <p className="mt-2.5 font-bold mb-4 group-hover:text-white">
              Bất động sản
            </p>
          </div>

          <div className=" group flex flex-col items-center justify-center text-center p-[30px] bg-white hover:bg-bg-job hover:border hover:border-solid hover:border-white rounded-[30px] mb-5 mx-3">
            <img
              src="/4.svg"
              alt="job"
              className="group-hover:invert group-hover:brightness-0"
            />
            <p className="mt-2.5 font-bold mb-4 group-hover:text-white">
              Hỗ trợ tư vấn
            </p>
          </div>

          <div className=" group flex flex-col items-center justify-center text-center p-[30px] bg-white hover:bg-bg-job hover:border hover:border-solid hover:border-white rounded-[30px] mb-5 mx-3">
            <img
              src="/5.svg"
              alt="job"
              className="group-hover:invert group-hover:brightness-0"
            />
            <p className="mt-2.5 font-bold mb-4 group-hover:text-white">
              Bán lẻ - thương mại
            </p>
          </div>

          <div className="group col -auto flex flex-col items-center justify-center text-center p-[30px] bg-white hover:bg-bg-job hover:border hover:border-solid hover:border-white rounded-[30px] mb-5 mx-3">
            <img
              src="/6.svg"
              alt="job"
              className="group-hover:invert group-hover:brightness-0"
            />
            <p className="mt-2.5 font-bold mb-4 group-hover:text-white">
              Vận tải - kho bãi
            </p>
          </div>

          <div className=" group flex flex-col items-center justify-center text-center p-[30px] bg-white hover:bg-bg-job hover:border hover:border-solid hover:border-white rounded-[30px] mb-5 mx-3">
            <img
              src="/7.svg"
              alt="job"
              className="group-hover:invert group-hover:brightness-0"
            />
            <p className="mt-2.5 font-bold mb-4 group-hover:text-white">
              Du lịch - giải trí
            </p>
          </div>

          <div className=" group flex flex-col items-center justify-center text-center p-[30px] bg-white hover:bg-bg-job hover:border hover:border-solid hover:border-white rounded-[30px] mb-5 mx-3">
            <img
              src="/8.svg"
              alt="job"
              className="group-hover:invert group-hover:brightness-0"
            />
            <p className="mt-2.5 font-bold mb-4 group-hover:text-white">Y tế</p>
          </div>

          <div className=" group flex flex-col items-center justify-center text-center p-[30px] bg-white hover:bg-bg-job hover:border hover:border-solid hover:border-white rounded-[30px] mb-5 mx-3">
            <img
              src="/9.svg"
              alt="job"
              className="group-hover:invert group-hover:brightness-0"
            />
            <p className="mt-2.5 font-bold mb-4 group-hover:text-white">
              Spa - làm đẹp
            </p>
          </div>

          <div className=" group flex flex-col items-center justify-center text-center p-[30px] bg-white hover:bg-bg-job hover:border hover:border-solid hover:border-white rounded-[30px] mb-5 mx-3">
            <img
              src="/10.svg"
              alt="job"
              className="group-hover:invert group-hover:brightness-0"
            />
            <p className="mt-2.5 font-bold mb-4 group-hover:text-white">
              Spa - làm đẹp
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
