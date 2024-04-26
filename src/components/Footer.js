import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <>
      <section className="lg:px-[150px] md:px-[100px] px-4 flex flex-col items-center justify-center pb-10 gap-4">
        <div className="md:hidden block">
          <SocialLinks />
        </div>
        <div>Designed & Built by Ujjwal Basnet</div>
      </section>
    </>
  );
};

export default Footer;
