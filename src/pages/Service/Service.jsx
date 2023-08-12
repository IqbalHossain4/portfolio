import React, { useState } from "react";
import { FaCheck, FaFacebook } from "react-icons/fa";
const Service = () => {
  let [service, setService] = useState("");
  const serviceOption = [
    {
      no: 1,
      name: "Web Development",
      description:
        "Web Development is Most Famouse Job in this world and it is very interesting.Web development is simply associated with building a website. It can range from a plain static HTML website or a full-blown complex web-based application. It is mainly about programming to create web pages or applications that can run in any web browser.",
    },
    {
      no: 2,
      name: "Digital Marketing",
      description:
        "Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel..",
    },
    {
      no: 3,
      name: "Content Writing",
      description:
        "Content writing services are firms, companies or group of writers that provide services such as blog writing for websites, web content writing, marketing material content, white papers, research articles, proof reading services, infographic content, social media content, press releases, product descriptions.",
    },
  ];

  const handleService = (id) => {
    setService(serviceOption.find((item) => item.no === id));
    if (service) {
      window.my_modal_3.showModal();
    }
  };

  return (
    <div className="py-24">
      <div className="containers">
        <div className="w-full text-left">
          <button className="py-1 px-2 bg-[#3B3C40]  text-[#959595]">
            Service
          </button>
          <h2 className="font-[800] text-white mt-4">What I Do</h2>
        </div>

        <div className="grid-2 mt-16">
          {serviceOption.map((item, index) => (
            <div key={index} className="bg-[#484A4F] py-12 px-10 ">
              <div className="serviceBox">
                <p className="w-[60px] h-[60px] flex items-center justify-center text-white font-[600] rounded-full bg-[#4E5055] ">
                  0{item.no}
                </p>
                <h2 className="font-[600] text-[18px] text-white my-4">
                  {item.name}
                </h2>
                <p className="text-[#bbb] text-[12px] loading-8 ">
                  {item.description.slice(0, 80)}
                </p>
                <button
                  onClick={() => handleService(item.no)}
                  className="mt-4  readBtn"
                >
                  Read More---
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* modal */}
        <div>
          {service && (
            <dialog id="my_modal_3" className="modal ">
              <form method="dialog" className="modal-box bg-[#3B3C40] ">
                <button className="btn btn-sm btn-circle  absolute right-2 top-2">
                  ✕
                </button>
                <h3 className="font-[600] text-[18px] text-white my-4">
                  {service.name}
                </h3>
                <p className="py-4 text-[#bbb] text-[14px] loading-8 ">
                  {service.description}
                </p>
              </form>
            </dialog>
          )}
        </div>
        {/* pricing */}
        <div className="mt-24">
          <h3 className="font-[600] text-[22px] text-white mb-16">Pricing</h3>
          <div className="w-full grid-2 ">
            <div className="p-8 text-white rounded-lg   border border-[#484A4F]  mb-8">
              <h1 className="text-2xl font-extrabold ">
                $0 <br />
                <span className="text-[18px]">Free</span>
              </h1>
              <hr className="my-4" />
              <div>
                <p className="flex items-center gap-2 mt-4 text-[12px] text-[#bbb] ">
                  <span className="text-[#bbb] text-[14px]">
                    <FaCheck />
                  </span>
                  <span> Eye Catchy Design</span>
                </p>
                <p className="flex items-center gap-2  text-[12px] text-[#bbb] my-2">
                  <span className="text-[#bbb] text-[14px]">
                    <FaCheck />
                  </span>
                  <span> Single Page Design</span>
                </p>
                <p className="flex items-center gap-2  text-[12px] line-through text-gray-500">
                  <span className="text-[#bbb] text-[14px]">
                    <FaCheck />
                  </span>
                  <span> Full website Design</span>
                </p>
                <p className="flex items-center gap-2 mb-4 text-[12px] line-through text-gray-500 my-2">
                  <span className="text-[#bbb] text-[14px]">
                    <FaCheck />
                  </span>
                  <span> Full time Manage </span>
                </p>
              </div>
              <button className="py-3 px-8 mt-8 bg-white font-[500] text-black">
                Purchase
              </button>
            </div>
            <div className="p-8 text-white rounded-lg   border border-[#484A4F]  mb-8">
              <h1 className="text-2xl font-extrabold ">
                $30 <br />
                <span className="text-[18px]">Basic</span>
              </h1>
              <hr className="my-4" />
              <p className="flex items-center gap-2 mt-4 text-[12px] text-[#bbb]">
                <span className="text-[#bbb] text-[14px]">
                  <FaCheck />
                </span>
                <span> Eye Catchy Design</span>
              </p>
              <p className="flex items-center gap-2 text-[12px] text-[#bbb] my-2">
                <span className="text-[#bbb] text-[14px]">
                  <FaCheck />
                </span>
                <span> Full website Design</span>
              </p>
              <p className="flex items-center gap-2 text-[12px] text-[#bbb]">
                <span className="text-[#bbb] text-[14px]">
                  <FaCheck />
                </span>
                <span> Full time Manage</span>
              </p>
              <p className="flex items-center gap-2 mb-4 line-through text-gray-500 my-2">
                <span className="text-[#bbb] text-[14px]">
                  <FaCheck />
                </span>
                <span> 7/24 support</span>
              </p>
              <button className="py-3 px-8 mt-8 bg-white font-[500] text-black">
                Purchase
              </button>
            </div>
            <div className="p-8 text-white rounded-lg   border border-[#484A4F]  mb-8">
              <h1 className="text-2xl font-extrabold ">
                $70 <br />
                <span className="text-[18px]">Premium</span>
              </h1>
              <hr className="my-4" />
              <div>
                <p className="flex items-center gap-2 text-[12px] text-[#bbb]">
                  <span className="text-[#bbb] text-[14px]">
                    <FaCheck />
                  </span>
                  <span> Eye Catchy Design</span>
                </p>
                <p className="flex items-center gap-2 text-[12px] text-[#bbb] my-2">
                  <span className="text-[#bbb] text-[14px]">
                    <FaCheck />
                  </span>
                  <span> Full website Design</span>
                </p>
                <p className="flex items-center gap-2 text-[12px] text-[#bbb] my-2">
                  <span className="text-[#bbb] text-[14px]">
                    <FaCheck />
                  </span>
                  <span> Full time manage</span>
                </p>
                <p className="flex items-center gap-2 text-[12px] text-[#bbb] mb-4 my-2">
                  <span className="text-[#bbb] text-[14px]">
                    <FaCheck />
                  </span>
                  <span> 30/24 support</span>
                </p>
              </div>
              <button className="py-3 px-8 mt-8 bg-white font-[500] text-black">
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
