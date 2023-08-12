import myPhoto from "../../assets/image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import "./styles.css";
const About = () => {
  const skills = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      skill: "Javascript",
    },
    {
      logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      skill: "React.JS",
    },
    {
      logo: "https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png",
      skill: "Next.JS",
    },
    {
      logo: "https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png",
      skill: "Node.JS",
    },
    {
      logo: "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
      skill: "Express.JS",
    },
    {
      logo: "https://www.svgrepo.com/show/374118/tailwind.svg",
      skill: "TailwindCSS",
    },
    {
      logo: "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png",
      skill: "MongoDB",
    },
    {
      logo: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
      skill: "Firebase",
    },
  ];
  return (
    <div className="py-24">
      <div className="containers pb-16">
        <div className="w-full text-left">
          <button className="py-1 px-2 bg-[#3B3C40]  text-[#959595]">
            About
          </button>
          <h2 className="font-[800] text-white mt-4">About Me</h2>
        </div>
        <div className="mt-8">
          <div className="w-[300px] h-[300px] bg-[#494b50] mx-auto rounded-full overflow-hidden">
            <img src={myPhoto} className="w-full h-full object-fill" alt="" />
          </div>
          <div className="mt-4 text-white">
            <h3 className="text-[22px] font-[700]">Iqbal Hossain</h3>
            <p className="text-[#bbb] text-[14px] mt-2">MERN Stack Developer</p>
            <hr className="my-8 " />
            <p className="text-[#bbb] text-[14px] leading-8">
              Hi, I'am Iqbal Hossain, I am a MERN Stack Developer. I have
              experience in real-time work I have done so many projects in the
              past. I developed so many websites using my short knowledge. I
              love learning new technologies. I know every person never knows
              everything but I am trying to learn every day new something.
              Learning is part of my life. I believe that if I want to do
              something new then I have to need to make myself different from
              any other.
            </p>
            <hr className="my-8" />
            <div className="grid-3">
              {skills.map((item, index) => (
                <button
                  key={index}
                  className="w-[150px] h-[40px] px-4 border border-[#bbb] mb-4 rounded-2xl flex items-center gap-4 saturate-0 transition-all duration-150 hover:saturate-200"
                >
                  <p className="w-[25px] h-[25px] rounded-full overflow-hidden">
                    <img
                      src={item.logo}
                      className="w-full h-full object-fill "
                      alt=""
                    />
                  </p>
                  <p className="text-[14px]">{item.skill}</p>
                </button>
              ))}
            </div>
            <hr className="my-8 " />

            <ul className="grid-2 text-[15px] loading-8">
              <li>
                <span className="text-white font-[500] mr-8">Birthday:</span>
                <span className="text-[#bbb]">20.10.2023</span>
              </li>
              <li>
                <span className="text-white font-[500] mr-8">Age:</span>
                <span className="text-[#bbb]">22</span>
              </li>
              <li>
                <span className="text-white font-[500] mr-8">Address:</span>
                <span className="text-[#bbb]">Dhaka, Bangladesh</span>
              </li>
              <li>
                <span className="text-white font-[500] mr-8">Email:</span>
                <span className="text-[#bbb]">iqbal-hossain@mail.com</span>
              </li>
              <li>
                <span className="text-white font-[500] mr-8">Phone:</span>
                <span className="text-[#bbb]">+8801732718949</span>
              </li>
              <li>
                <span className="text-white font-[500] mr-8">Nationality:</span>
                <span className="text-[#bbb]">Bangladeshi</span>
              </li>
              <li>
                <span className="text-white font-[500] mr-8">Study:</span>
                <span className="text-[#bbb]">Joynegor University</span>
              </li>
              <li>
                <span className="text-white font-[500] mr-8">Interest:</span>
                <span className="text-[#bbb]">Playing Cricket</span>
              </li>
              <li>
                <span className="text-white font-[500] mr-8">Freelance:</span>
                <span className="text-[#bbb]">Availbale</span>
              </li>
            </ul>
            <hr className="my-8 " />
            <button className="py-4 px-8 bg-white font-[500] text-black">
              <a
                href="https://drive.google.com/u/0/uc?id=1j75F6BGdsseb9szlphAQhfhU_7AmNOwu&export=download"
                target="blank"
              >
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* start education section */}
      <div className="bg-[#484A4F]">
        <div className="containers py-16">
          <div className="md:flex items-center justify-between gap-8">
            <div>
              <h3 className="text-white font-[500] text-[22px] mb-10">
                Education
              </h3>
              <div className="relative">
                <div className="flex items-center ms-8 lg:gap-24 gap-8">
                  <button className="w-[140px] h-[40px] bg-[#515358] rounded-2xl text-white font-[300] text-[14px]">
                    2018-2020
                  </button>
                  <div>
                    <h4 className="text-white font-[400] text-[14px]">
                      Joynegor University
                    </h4>
                    <p className="text-[#bbb] font-[300] text-[12px] mt-2">
                      Higher Secondary Certificate
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 top-0 w-full h-full flex flex-col items-start justify-center">
                  <div className="h-full w-1  bg-[#585A5F]"></div>
                  <div className="absolute left-[-10px] top-[25%] w-6 h-6 rounded-full border border-[#585A5F] bg-[#484A4F]  text-center"></div>
                </div>
              </div>
              <div className="relative pt-8">
                <div className="flex items-center ms-8 lg:gap-24 gap-8">
                  <button className="w-[140px] h-[40px] bg-[#515358] rounded-2xl text-white font-[300] text-[14px]">
                    2016-2018
                  </button>
                  <div>
                    <h4 className="text-white font-[400] text-[14px]">
                      Kamabo High School
                    </h4>
                    <p className="text-[#bbb] font-[300] text-[12px] mt-2">
                      Secondary School Certificate
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 top-0 w-full h-full flex flex-col items-start justify-center">
                  <div className="h-full w-1  bg-[#585A5F] z-[10]"></div>
                  <div className="absolute left-[-10px] top-[55%] w-6 h-6 rounded-full border border-[#585A5F] text-center bg-[#484A4F] z-[100]"></div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3 className="text-white font-[500] text-[22px] mb-10 md:mt-0 mt-10 ">
                  Course
                </h3>
                <div className="relative">
                  <div className="flex items-center ms-8 lg:gap-24 gap-8">
                    <button className="w-[140px] h-[40px] bg-[#515358] rounded-2xl text-white font-[300] text-[14px]">
                      2023(6Month)
                    </button>
                    <div>
                      <h4 className="text-white font-[400] text-[14px]">
                        Programming Hero
                      </h4>
                      <p className="text-[#bbb] font-[300] text-[12px] mt-2">
                        Complete Web Develoment
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 w-full h-full flex flex-col items-start justify-center">
                    <div className="h-full w-1  bg-[#585A5F]"></div>
                    <div className="absolute left-[-10px] top-[25%] w-6 h-6 rounded-full border border-[#585A5F] bg-[#484A4F]  text-center"></div>
                  </div>
                </div>
                <div className="relative pt-8">
                  <div className="flex items-center ms-8 lg:gap-24 gap-8">
                    <button className="w-[140px] h-[40px] bg-[#515358] rounded-2xl text-white font-[300] text-[14px]">
                      2020(3Month)
                    </button>
                    <div>
                      <h4 className="text-white font-[400] text-[14px]">
                        Online Institute
                      </h4>
                      <p className="text-[#bbb] font-[300] text-[12px] mt-2">
                        Digital Marketing
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 w-full h-full flex flex-col items-start justify-center">
                    <div className="h-full w-1  bg-[#585A5F] z-[10]"></div>
                    <div className="absolute left-[-10px] top-[55%] w-6 h-6 rounded-full border border-[#585A5F] text-center bg-[#484A4F] z-[100]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tesminials */}
      <div>
        <div className="containers pt-24">
          <h3 className="font-[600] text-[22px] text-white mb-8">
            Testimonials
          </h3>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            // modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <div className="p-8 border border-[#484A4F]">
                  <p className="text-[14px] font-[300] text-[#bbb]">
                    These people really know what they are doing! Great customer
                    support availability and supperb kindness.
                  </p>
                </div>

                <div className="flex items-center gap-8 mt-8">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                      src={
                        "https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2021/07/08/img_2842_0.jpg"
                      }
                      className="w-full h-full saturate-0"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-[600] text-[16px]">
                      Jhankar mahbub
                    </h4>
                    <p className="text-[14px] text-[#bbb]">Teacher</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="p-8 border border-[#484A4F]">
                  <p className="text-[14px] font-[300] text-[#bbb]">
                    I had a little problem and the support was just awesome to
                    quickly solve the situation. And keep going on..
                  </p>
                </div>
                <div className="flex items-center gap-8 mt-8">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                      src={
                        "https://upload.wikimedia.org/wikipedia/commons/f/f7/John_Gourley%2C_May_2013.jpg"
                      }
                      className="w-full h-full saturate-0"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-[600] text-[18px]">John</h4>
                    <p className="text-[14px] text-[#bbb]">Teacher</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <div className="p-8 border border-[#484A4F]">
                  <p className="text-[14px] font-[300] text-[#bbb]">
                    Beautiful minimalist design and great, fast response with
                    support. Highly recommend. Thanks Marketify!
                  </p>
                </div>

                <div className="flex items-center gap-8 mt-8">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                      src={
                        "https://springconference.nic.org/wp-content/uploads/Arick-Morton.png"
                      }
                      className="w-full h-full saturate-0"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-[600] text-[16px]">
                      Jhankar mahbub
                    </h4>
                    <p className="text-[14px] text-[#bbb]">Teacher</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <div className="p-8 border border-[#484A4F]">
                  <p className="text-[14px] font-[300] text-[#bbb]">
                    Beautiful minimalist design and great, fast response with
                    support. Highly recommend. Thanks Marketify!
                  </p>
                </div>

                <div className="flex items-center gap-8 mt-8">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                      src={
                        "https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/calbaptist.sidearmsports.com/images/2022/9/12/Arick_Lopez.jpg"
                      }
                      className="w-full h-full saturate-0"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-[600] text-[16px]">
                      Jhankar mahbub
                    </h4>
                    <p className="text-[14px] text-[#bbb]">Teacher</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default About;
