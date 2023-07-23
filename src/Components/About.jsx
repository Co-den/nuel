import React from "react";
import Services from "../Components/Services";
import img1 from '../Assets/icons/decor.png';
import img2 from '../Assets/icons/crafty.png';
import img3 from '../Assets/icons/paint.png';
import img4 from "../Assets/icons/ruler-pen.png";

const About = () => {
  const skills = [
    { name: "PAINTING", image: img3 },
    { name: "CRAFTING", image: img2 },
    { name: "DECORATION", image: img1 },
    { name: "DRAWING", image: img4 },
  ];
  return (
    <div className="md:px-10 px-7 sm:-mt-24" id="about">
      <h1 className="text-lime-500 font-semibold text-3xl mt-5">About me:</h1>
      <p className="my-3 text-white md:w-2/3 leading-[2]">
        Hi, my name is Nuel, i am a skilled artist. I have honed
        my skills in the area of art and in advance i
        have core understanding of advance design principles. Here are the
        major skiills i have.
      </p>
      <div className="md:flex my-7 items-center">
        <div className="text-lime-500 text-8xl font-bold">Many</div>
        <p className="text-white text-2xl md:ml-5">
          Years of experience. Specialised in painting,crafting while ensuring a
          seamless art experience for clients.
        </p>
      </div>

      {/* skills */}
      <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] 
            bg-light hover:bg-lime-500  flex flex-col 
            items-baseline justify-end md:m-3 my-3 
            p-5 shadow-sm skills transition-all duration-500"
          >
            <img src={skill.image} alt={skill.name} />
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* services section */}
      <Services />
    </div>
  );
};

export default About;
