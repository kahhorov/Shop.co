import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import Payments from "../../../assets/payments.png";

const links = [
  {
    title: "COMPANY",
    items: ["About", "Features", "Works", "Career"],
  },
  {
    title: "HELP",
    items: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "FAQ",
    items: ["Account", "Manage Deliveries", "Orders", "Payments"],
  },
  {
    title: "RESOURCES",
    items: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
];

const socials = [FaTwitter, FaFacebookF, FaInstagram, FaGithub];

function Footer() {
  return (
    <footer className="bg-gray10 !-mt-[6.5rem] !pt-[11rem]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2 !pr-10">
            <h1 className="font-extrabold text-black text-[2rem]">SHOP.CO</h1>
            <p className="font-light text-gray-500 text-sm !py-4">
              We have clothes that suits your style and <br /> which you're
              proud to wear. From <br /> women to men.
            </p>
            <div className="flex gap-3 items-center">
              {socials.map((Icon, index) => {
                return (
                  <a
                    key={index + 1}
                    href="#"
                    className="flex justify-center items-center bg-white border-gray-400/20 border rounded-full w-8 h-8 hover:bg-black hover:text-white transition duration-300 ease-in-out"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {links.map((link, index) => {
            return (
              <div key={index + 1}>
                <h3 className="font-medium text-sm uppercase tracking-[3px]">
                  {link.title}
                </h3>
                <ul className="flex flex-col gap-3 font-light text-gray-500 text-sm !py-5">
                  {link.items.map((item, i) => {
                    return (
                      <li key={i + 1}>
                        <a href="#" className="hover:text-black">
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <hr className="border-gray-400/20 border-t !mt-10" />

        <div className="flex sm:flex-row flex-col justify-between items-center gap-5 !py-6">
          <p className="font-light text-gray-500 text-sm">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <img src={Payments} alt="payments" className="h-[30px]" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
