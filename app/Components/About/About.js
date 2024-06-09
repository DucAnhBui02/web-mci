import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const About = () => {
  return (
    <div className="container flex flex-col justify-center items-center w-full">
      <div className="group bg-white border-2 border-solid border-[#dc4b20] flex items-center text-center py-3 px-5 rounded-[30px] mb-[100px] cursor-pointer hover:bg-bg-gradient ">
        <span className="text-[#dc4b20] font-bold group-hover:text-white">
          Xem tất cả giải pháp
        </span>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col">
          <div className="bg-white flex w-fit uppercase text-second rounded-[30px] py-2.5 px-[15px] shadow-3">
            <div className="text-white  bg-second w-[25px] h-[25px] flex justify-center items-center rounded-full mr-2.5">
              <FontAwesomeIcon icon={faUser} />
            </div>
            About us
          </div>
          <div className="text-5xl text-[#dc4b20] font-bold leading-normal">
            MCI Solutions
          </div>
          <p className="mb-4">
            MCI solutions đã và đang khẳng định vị thế trên thị trường nội địa
            và hướng tới thị trường khu vực, quốc tế thông qua những hoạt động
            kinh doanh chủ lực như:
          </p>
          <p className="font-bold mb-4">
            Giải pháp công nghệ phần mềm, Phân phối các sản phẩm SaaS, Giải pháp
            tích hợp phần cứng và Cung ứng nhân sự chất lượng
          </p>
          <div className="bg-bg-detail mt-5 py-4 px-7 shadow-2 w-fit text-base text-white font-bold tracking-normal rounded-[30px]">
            Xem chi tiết
          </div>
        </div>
        <div className="">
          <img className="about-img" src="/about.png" alt="hung" />
        </div>
      </div>
    </div>
  );
};

export default About;
