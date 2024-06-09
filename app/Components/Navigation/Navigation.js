import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
const NavigationSlide = () => {
  return (
    <>
      <div className="container mx-auto relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation
          loop={true}
          slidesPerView={4}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="group rounded-3xl bg-white relative mb-12 hover:bg-bg-gradient border-solid border-2 border-[#E65F1D]">
            <div className="flex flex-col items-center py-2.5 px-3.5">
              <span className="overlay-card">
                <div className="relative w-[150px] h-[150px] rounded-full">
                  <img
                    src="seo-1.png"
                    alt="hung"
                    className="w-full h-full object-cover
                  round-full"
                  />
                </div>
              </span>
            </div>
            <div className="flex flex-col items-center py-2.5 px-3.5">
              <h3 className="text-lg font-medium text-center text-primary group-hover:text-white">
                Tư vấn giải pháp pháp công nghệ
              </h3>
              <p className="text-sm text-center text-pragraph pb-4 group-hover:text-white">
                Chúng tôi là đội ngũ chuyên gia công nghệ, cam kết mang đến cho
                doanh nghiệp của bạn những giải pháp đột phá và hiệu quả. Với tư
                vấn chúng tôi, bạn sẽ tiết kiệm được thời gian, công sức và tài
                nguyên.
              </p>
              <button className="rounded-full w-12 h-12 border-none absolute bottom-[-25px] bg-plus shadow-3 hover:scale-125 transition duration-300 ease-out">
                <FontAwesomeIcon icon={faPlus} style={{ color: "#e65f1d" }} />
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="group rounded-3xl bg-white relative mb-12 hover:bg-bg-gradient border-solid border-2 border-[#E65F1D]">
            <div className="flex flex-col items-center py-2.5 px-3.5">
              <span className="overlay-card">
                <div className="relative w-[150px] h-[150px] rounded-full">
                  <img
                    src="seo-2.png"
                    alt="hung"
                    className="w-full h-full object-cover
                  round-full"
                  />
                </div>
              </span>
            </div>
            <div className="flex flex-col items-center py-2.5 px-3.5">
              <h3 className="text-lg font-medium text-center text-primary group-hover:text-white">
                Cung ứng nhân sự chất lượng
              </h3>
              <p className="text-sm text-center text-pragraph pb-4 group-hover:text-white">
                Với dịch vụ cho thuê nhân sự ngắn hạn và trung hạn, chúng tôi
                đáp ứng nhanh chóng và linh hoạt cho các dự án và công việc tạm
                thời, giúp bạn tiết kiệm thời gian và chi phí tuyển dụng.
              </p>
              <button className="rounded-full w-12 h-12 border-none absolute bottom-[-25px] bg-plus shadow-3 hover:scale-125 transition duration-300 ease-out">
                <FontAwesomeIcon icon={faPlus} style={{ color: "#e65f1d" }} />
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="group rounded-3xl bg-white relative mb-12 hover:bg-bg-gradient border-solid border-2 border-[#E65F1D]">
            <div className="flex flex-col items-center py-2.5 px-3.5">
              <span className="overlay-card">
                <div className="relative w-[150px] h-[150px] rounded-full">
                  <img
                    src="seo-3.png"
                    alt="hung"
                    className="w-full h-full object-cover
                  round-full"
                  />
                </div>
              </span>
            </div>
            <div className="flex flex-col items-center py-2.5 px-3.5">
              <h3 className="text-lg font-medium text-center text-primary group-hover:text-white">
                Phân phối các sản phẩm SaaS
              </h3>
              <p className="text-sm text-center text-pragraph pb-4 group-hover:text-white">
                Chúng tôi là nhà phân phối hàng đầu các sản phẩm SaaS, cung cấp
                sự tiện ích và hiện đại cho doanh nghiệp. Bao gồm: Office 365,
                Power BI Service , Misa Vietnam , Amazon Web Services (AWS),
                Microsoft Azure.
              </p>
              <button className="rounded-full w-12 h-12 border-none absolute bottom-[-25px] bg-plus shadow-3 hover:scale-125 transition duration-300 ease-out">
                <FontAwesomeIcon icon={faPlus} style={{ color: "#e65f1d" }} />
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="group rounded-3xl bg-white relative mb-12 hover:bg-bg-gradient border-solid border-2 border-[#E65F1D]">
            <div className="flex flex-col items-center py-2.5 px-3.5">
              <span className="overlay-card">
                <div className="relative w-[150px] h-[150px] rounded-full">
                  <img
                    src="seo-4.png"
                    alt="hung"
                    className="w-full h-full object-cover
                  round-full"
                  />
                </div>
              </span>
            </div>
            <div className="flex flex-col items-center py-2.5 px-3.5">
              <h3 className="text-lg font-medium text-center text-primary group-hover:text-white">
                Giải pháp công nghệ phần mềm
              </h3>
              <p className="text-sm text-center text-pragraph pb-4 group-hover:text-white">
                Giải pháp công nghệ phần mềm hàng đầu cho doanh nghiệp hiện đại.
                Với khả năng tùy chỉnh và mở rộng, sản phẩm Zenix 4.0 giúp tối
                ưu hoá hiệu quả quản lý doanh nghiệp.
              </p>
              <button className="rounded-full w-12 h-12 border-none absolute bottom-[-25px] bg-plus shadow-3 hover:scale-125 transition duration-300 ease-out">
                <FontAwesomeIcon icon={faPlus} style={{ color: "#e65f1d" }} />
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="group rounded-3xl bg-white relative mb-12 hover:bg-bg-gradient border-solid border-2 border-[#E65F1D]">
            <div className="flex flex-col items-center py-2.5 px-3.5">
              <span className="overlay-card">
                <div className="relative w-[150px] h-[150px] rounded-full">
                  <img
                    src="seo-5.png"
                    alt="hung"
                    className="w-full h-full object-cover
                  round-full"
                  />
                </div>
              </span>
            </div>
            <div className="flex flex-col items-center py-2.5 px-3.5">
              <h3 className="text-lg font-medium text-center text-primary group-hover:text-white">
                Giải pháp tích hợp phần cứng
              </h3>
              <p className="text-sm text-center text-pragraph pb-4 group-hover:text-white">
                Chúng tôi cung cấp giải pháp tích hợp phần cứng đáng tin cậy,
                giúp doanh nghiệp xây dựng hạ tầng công nghệ hiện đại và hiệu
                quả.Hãy để chúng tôi giúp bạn xây dựng cơ sở hạ tầng công nghệ
                mạnh mẽ, đáng tin cậy
              </p>
              <button className="rounded-full w-12 h-12 border-none absolute bottom-[-25px] bg-plus shadow-3 hover:scale-125 transition duration-300 ease-out">
                <FontAwesomeIcon icon={faPlus} style={{ color: "#e65f1d" }} />
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default NavigationSlide;
