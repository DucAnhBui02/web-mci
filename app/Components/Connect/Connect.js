import React from "react";

const Connect = () => {
  return (
    <>
      <div className="mt-[100px] bg-cover bg-no-repeat bg-center bg-bg2-connect py-10">
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1">
              <p className="text-[35px] font-bold text-white mb-4">
                Doanh nghiệp của bạn đã sẵn sàng chuyển đổi tốt hơn?
              </p>
              <p className="text-[15px] text-white mb-4">
                Ứng dụng công nghệ tự động hàng đầu ngay bây giờ cùng chuyên gia
                của chúng tôi!
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-1">
                  <button className="py-2.5 px-5 w-fit font-bold rounded-[30px] bg-white">
                    Chat với chuyên gia tư vấn
                  </button>
                </div>
                <div className="col-span-1">
                  <button className="py-2.5 px-5 w-fit font-bold rounded-[30px] text-white bg-bg-detail">
                    Gọi miễn phí qua internet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
