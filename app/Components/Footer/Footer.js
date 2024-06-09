import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="relative py-10 border-[1px] border-solid border-[#3bdc3c7] bg-[#ecf0f1] clear-both">
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 flex flex-col justify-center items-center text-center">
              <img className="max-w-[90%]" src="/logo.png" alt="hung" />
              <p className="text-[#db4922] font-bold mb-4">
                Công ty cổ phần Giải Pháp doanh nghiệp MCI Solutions
              </p>
              <p className="text-[#95a5a6] text-[13px] mb-4">
                <FontAwesomeIcon icon={faLocationDot} /> Tầng 5 tòa Starcity, Số
                23 Lê Văn Lương, Phường Nhân Chính, Quận Thanh Xuân, Thành Phố
                Hà Nội
              </p>
            </div>
            <div className="col-span-1">
              <p className="text-[#db4922] font-bold mb-4">Hỗ trợ khách hàng</p>
              <p className="text-[13px] mb-4 font-bold">
                Hotline Sale Saletech &amp; Martech
              </p>
              <p className="text-[#95a5a6] text-[13px] mb-4">
                CEO: 093.414.6016
                <br />
                CTO: 098.252.1378
              </p>
              <p className="text-[13px] mb-4 font-bold">Email sale</p>
              <p className="text-[#95a5a6] text-[13px] mb-4">
                sonnc@mcisolutions.com.vn
              </p>
              <p className="text-[13px] mb-4 font-bold">
                Kết nối với chúng tôi
              </p>
              <div className="flex  ">
                <div className="flex items-center justify-center text-xl text-white w-10 h-10 rounded-full mr-1 bg-[#3b5998]">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="flex items-center justify-center text-xl text-white w-10 h-10 rounded-full mr-1 bg-[#0e0e0e]">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="flex items-center justify-center text-xl text-white w-10 h-10 rounded-full mr-1 bg-[#41a248]">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="flex items-center justify-center text-xl text-white w-10 h-10 rounded-full mr-1 bg-[#c4302b]">
                  <FontAwesomeIcon icon={faYoutube} />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <p className="text-[#db4922] font-bold mb-4">
                Chính sách và quy định chung
              </p>
              <ul className=" left-0 mb-4 pl-8">
                <li>
                  <a className=" text-[#95a5a6] text-[13px]" href="#">
                    Chính sách bảo vệ thông tin cá nhân
                  </a>
                </li>
                <li>
                  <a className=" text-[#95a5a6] text-[13px]" href="#">
                    Điều khoản sử dụng
                  </a>
                </li>
                <li>
                  <a className=" text-[#95a5a6] text-[13px]" href="#">
                    Quyền và nghĩa vụ
                  </a>
                </li>
                <li>
                  <a className=" text-[#95a5a6] text-[13px]" href="#">
                    Phương thức thanh toán
                  </a>
                </li>
                <li>
                  <a className=" text-[#95a5a6] text-[13px]" href="#">
                    Chính sách bảo hành
                  </a>
                </li>
                <li>
                  <a className=" text-[#95a5a6] text-[13px]" href="#">
                    Chính sách Email Marketing
                  </a>
                </li>
                <li>
                  <a className=" text-[#95a5a6] text-[13px]" href="#">
                    Chính sách hỗ trợ khách hàng
                  </a>
                </li>
                <li>
                  <a className=" text-[#95a5a6] text-[13px]" href="#">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
