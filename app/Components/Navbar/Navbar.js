"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import "./style.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarDropdown, setNavbarDropdown] = useState(false);

  return (
    <div className="mx-auto relative z-50 shadow-nav_bar">
      <nav className=" border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="md:container max-md:grid max-md:grid-cols-2 flex items-center mx-auto md:p-2">
          <Link href="#" className="flex items-center mr-5">
            <img
              src="/logo.png"
              alt="logo"
              style={{
                width: "300px",
                height: "70px",
                padding: "0 10px",
              }}
            />
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="max-md:col-span-1 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`flex justify-self-center pb-3 md:block sm:order-3 sm:text-left ${
              isOpen
                ? "md:p-0 max-md:bg-bg-nav max-md:col-span-2 w-full"
                : "hidden"
            }`}
          >
            <ul className="flex flex-col font-medium rounded-lg md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:ml-32">
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0  md:p-2  md:dark:hover:bg-transparent max-md:pl-2.5 max-md:text-white max-md:hover:text-fill-color max-md:hover:font-semibold text-[#000000a6]"
                  aria-current="page"
                >
                  <b>Giới thiệu</b>
                </Link>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => setNavbarDropdown(!navbarDropdown)}
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="nav-link relative flex items-center justify-between w-full py-2 px-3 text-[#000000a6] rounded md:hover:bg-transparent md:border-0  md:p-2 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent max-md:pl-2.5 max-md:text-white max-md:hover:text-fill-color max-md:hover:font-semibold"
                >
                  <b>Giải pháp</b>
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${
                    navbarDropdown
                      ? "md:p-0 max-md:bg-bg-nav max-md:col-span-2 w-full"
                      : "hidden"
                  }`}
                >
                  <ul
                    className="static rounded-md bg-white z-10 w-full py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link href="#">Chuyển đổi số doanh nghiệp</Link>
                    </li>
                    <li>
                      <Link href="#">Thiết kế ứng dụng di động</Link>
                    </li>
                    <li>
                      <Link href="#">Trường học số, trung tâm số</Link>
                    </li>
                    <li>
                      <Link href="#">Tiếp thị, bán hàng kĩ thuật số</Link>
                    </li>

                    <li>
                      <Link href="#">Phân tích, xử lý dữ liệu lớn</Link>
                    </li>
                    <li>
                      <Link href="#">Trí tuệ nhân tạo AI, học máy</Link>
                    </li>
                    <li>
                      <Link href="#">Kết nối API bên thứ 3</Link>
                    </li>
                    <li>
                      <Link href="#">
                        <b>Tất cả</b>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0  md:p-2  md:dark:hover:bg-transparent max-md:pl-2.5 max-md:text-white max-md:hover:text-fill-color max-md:hover:font-semibold text-[#000000a6]"
                >
                  <b>Bài viết</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0  md:p-2  md:dark:hover:bg-transparent max-md:pl-2.5 max-md:text-white max-md:hover:text-fill-color max-md:hover:font-semibold text-[#000000a6]"
                >
                  <b>Videos</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0  md:p-2  md:dark:hover:bg-transparent max-md:pl-2.5 max-md:text-white max-md:hover:text-fill-color max-md:hover:font-semibold text-[#000000a6]"
                >
                  <b>Tuyển dụng</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0  md:p-2  md:dark:hover:bg-transparent max-md:pl-2.5 max-md:text-white max-md:hover:text-fill-color max-md:hover:font-semibold text-[#000000a6]"
                >
                  <b>Đăng nhập</b>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:0934146016"
                  className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0  md:p-2  md:dark:hover:bg-transparent"
                  style={{
                    background:
                      "linear-gradient(92.5deg, #B7042D 6.07%, #E65F1D 93.93%)",
                    width: "150px",
                    textAlign: "center",
                    color: "#fff",
                    height: "50px",
                    marginTop: "14px",
                    borderRadius: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="fas fa-check mr-1"
                    style={{ color: "#fff" }}
                  />
                  <strong>093.414.6016</strong>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
