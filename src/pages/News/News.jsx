import React from "react";

const News = () => {
  const newsOptions = [
    {
      photo: "https://wallpapercave.com/wp/wp9109532.jpg",
      name: "Deep Programming",
      details:
        "The Disasters and Emergencies Preparedness Programme (DEPP) Innovation Labs created a diverse network of national and international humanitarian organisations, to identify and grow areas of innovation that come directly from communities affected by crises.",
    },
    {
      photo:
        "https://w0.peakpx.com/wallpaper/809/380/HD-wallpaper-react-js-logo-programming-computer-logo.jpg",
      name: "How to fix Bug in React?",
      details:
        "The elimination of software errors is called bug fixing. A bug fix is the result of a bug removal, bugfixing is the activity of fixing bugs. What sounds relatively easy in theory is often a challenge in the practice of software development. Before a bug fix can be implemented, a bug must be identified and located.",
    },
    {
      photo: "https://images8.alphacoders.com/115/thumb-1920-1156488.png",
      name: "How is web developer career?",
      details:
        "Depending on the qualities you seek in your ideal career, working in web development can be an ideal career choice. For example, if you want a secure and high-paying job, web development roles' job security and competitive salary can make this a great career fit.",
    },
  ];
  return (
    <div className="py-24">
      <div className="containers">
        <div className="w-full text-left">
          <button className="py-1 px-2 bg-[#3B3C40]  text-[#959595]">
            News
          </button>
          <h2 className="font-[800] text-white mt-4">Our News</h2>
        </div>
        <div className="w-[70%] mx-auto mt-16 search">
          <input
            type="search"
            className="w-full h-full py-4 px-4 rounded-3xl"
            placeholder="Search"
          />
        </div>
        <div className="grid-2 mt-16">
          {newsOptions.map((item, index) => (
            <div key={index} className="bg-[#494b50] py-4 px-6">
              <div className="w-full h-[200px]">
                <img src={item.photo} className="w-full h-full" alt="" />
              </div>
              <div className="mt-8">
                <h3 className="font-[500] text-[22px] text-white mb-4">
                  {item.name}
                </h3>
                <p className="text-[14px] text-[#bbb]">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
