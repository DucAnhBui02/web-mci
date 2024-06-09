import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import {
  faGear,
  faPaperclip,
  faShieldHalved,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Advance = () => {
  return (
    <>
      <div className="w-full py-10">
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div className="col-auto flex flex-col">
              <div className="bg-white flex items-center py-2.5 px-[15px] shadow-3 w-fit rounded-[30px] uppercase text-second">
                <div className=" text-white  bg-second w-[25px] h-[25px] flex justify-center items-center rounded-full mr-2.5">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                Điểm mạnh của mci solutions
              </div>
              <p className="text-[30px] text-[#bf1937] font-bold mt-[30px] mb-4">
                MCI Solutions khác biệt và vượt trội
              </p>
              <p className="mb-4">
                MCI Solution tự tin là một trong các công ty hàng đầu trong lĩnh
                vực giải pháp phầm mềm và tích hợp phần cứng, có năng lực cạnh
                tranh trên khu vực và thị trường quốc tế.
              </p>
              <img className="max-w-[90%]" src="/advance.png" alt="advance" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-6">
                <div className="border-none rounded-2xl shadow-4 transition-transform duration-200 hover:translate-y-[-10px] hover:shadow-5">
                  <div className="p-4">
                    <div className="text-2xl text-second mb-2.5">
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <span>
                      <p className="text-[#c62128] font-bold mb-4">
                        200++ Chuyên gia thực chiến về khoa học dữ liệu,
                        Information Technology,
                      </p>
                      và tư vấn chiến lược giải pháp doanh nghiệp.
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="border-none rounded-2xl shadow-4 transition-transform duration-200 hover:translate-y-[-10px] hover:shadow-5">
                  <div className="p-4">
                    <div className="text-2xl text-second mb-2.5">
                      <FontAwesomeIcon icon={faShieldHalved} />
                    </div>
                    <span>
                      <p className="text-[#c62128] font-bold mb-4">
                        Công nghệ bảo mật dữ liệu hàng đầu từ MCI Solution –
                      </p>{" "}
                      Đối tác chiến lược của các nhà cung cấp hạ tầng đám mây
                      Việt Nam top đầu Việt Nam
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="border-none rounded-2xl shadow-4 transition-transform duration-200 hover:translate-y-[-10px] hover:shadow-5">
                  <div className="p-4">
                    <div className="text-2xl text-second mb-2.5">
                      <FontAwesomeIcon icon={faPaperclip} />
                    </div>
                    <span>
                      <p className=" font-bold mb-4">
                        Hệ sinh thái đa kết nối, đồng bộ dữ liệu trong bộ giải
                        pháp 5.0
                      </p>
                      , sẵn sàng tích hợp các công cụ chuyên biệt của bên thứ 3
                      để phục vụ theo đặc thù doanh nghiệp
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="border-none rounded-2xl shadow-4 transition-transform duration-200 hover:translate-y-[-10px] hover:shadow-5">
                  <div className="p-4">
                    <div className="text-2xl text-second mb-2.5">
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
                    <span>
                      <p className=" font-bold mb-4">
                        Năng lực công nghệ cao dựa trên nền tảng công nghệ tích
                        lũy nhiều năm
                      </p>{" "}
                      của MCI Solutions – đơn vị tiên phong trong lĩnh vực công
                      nghệ, truyền thông tại Việt Nam
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="border-none rounded-2xl shadow-4 transition-transform duration-200 hover:translate-y-[-10px] hover:shadow-5">
                  <div className="p-4">
                    <div className="text-2xl text-second mb-2.5">
                      <FontAwesomeIcon icon={faGear} />
                    </div>
                    <span>
                      <p className=" font-bold mb-4">
                        Phần mềm thân thiện, vận hành tinh gọn,
                      </p>{" "}
                      mọi nhân sự đều dễ dàng sử dụng, hỗ trợ đa ngôn ngữ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advance;
