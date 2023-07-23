import React from "react";
import facebook from '../Assets/socials/facebook.png';
import instagram from '../Assets/socials/instagram.png';
import email from '../Assets/socials/sms.png';

const Contact = () => {
  return (
    <div className="md:px-10 px-7 my-10" id="contact">
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
        <h1 className="text-lime-500 font-semibold text-3xl mt-16">
      Connect with me:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
      Satisfied with me? Please contact me
      </p>
      {/* social icons */}
      <div className="flex ">
        <a href="https://www.linkedin.com/in/agugbue-ikenna-135455249/" target="_blank" rel="noreferrer">
          <img src={facebook} alt="" />
        </a>
        <a className="ml-4" href="https://instagram.com/agugbue_ikenna?igshid=MzNINGNKZWQ4Mg==" target="_blank" rel="noreferrer">
        <img src={instagram} alt="" />
        </a>
        
        <a className="ml-4" href="iamagugbueikenna@gmail.com" target="_blank" rel="noreferrer">
        <img src={email} alt="" />
        </a>
      </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
            <p className="mt-16 text-white text-2xl mb-6">Contact me, for your art works.</p>
            <form>
                <input type="text" name="name" placeholder="Name:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded "/>
                <input type="email" name="email" placeholder="Email:" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3"/>
                <textarea name="message" id="message" cols="54" rows="4" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2" placeholder="Message:"></textarea>
                <button className="btn transition-all duration-500 bg-lime-500 py-2 px-12 rounded text-white hover:bg-white hover:text-primary block">
                  Send
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
