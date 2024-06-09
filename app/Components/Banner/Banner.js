import React from "react";

const Banner = () => {
  return (
    <div className="mt-20 w-full h-full bg-bg1-scale bg-no-repeat bg-cover bg-center">
      <div className="container relative mx-auto flex pt-7">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col">
            <p
              className="mt-8 mb-4 font-bold leading-normal"
              style={{ color: "#c41d29", fontSize: "35px" }}
            >
              Dẫn đầu giải pháp chuyển đổi số về quản lý khách hàng &amp; vận
              hành doanh nghiệp
            </p>
            <p className="text-xl mb-4">
              Nền tảng quản lý toàn diện với các dashboard hỗ trợ khách hàng và
              cung ứng nhận sự chất lượng cao
            </p>
            <div className="row">
              <div className="col">
                <button className="bg-[#ff7f00] text-white hover:text-black hover:bg-white hover:bg-opacity-30 py-2.5 px-5 text-center m-2.5 w-fit rounded-[30px] font-bold shadow-submit">
                  Đăng kí ngay !
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full hidden lg:w-1/2 lg:block">
          <img src="/home_img.png" alt="home" style={{ maxWidth: "90%" }} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
