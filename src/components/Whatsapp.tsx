import { useEffect } from "react";
import whatsappIcon from "../assets/whatsapp_icon.png"; // adjust path

const WhatsappLive = () => {
  const whatsappNumber = "+2348032548135";
  const baseUrl = "https://api.whatsapp.com/send/";
  const emailAddress = "info@hfslimited.com";
  const message = `Feel free to email us at ${emailAddress} too`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `${baseUrl}?phone=${whatsappNumber}&text=${encodedMessage}`;

  useEffect(() => {
    const handleScroll = () => {
      const whatsappLinkElement = document.querySelector(".whatsapp-link");
      if (window.scrollY > 100) {
        whatsappLinkElement?.classList.add("visible");
      } else {
        whatsappLinkElement?.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      className="whatsapp-link fixed bottom-6 right-6 opacity-0 transition-opacity duration-300"
      href={whatsappLink}
      target="_blank"
      rel="noreferrer noopener"
    >
      {/* Ping animation */}
      <span className="absolute left-[7px] top-[7px] -z-50 size-10">
        <span className="flex size-full items-center justify-center animate-ping rounded-full opacity-75 bg-green-500"></span>
      </span>

      {/* WhatsApp icon */}
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        width={60}
        height={60}
        className="whatsapp-icon z-50"
      />
    </a>
  );
};

export default WhatsappLive;
