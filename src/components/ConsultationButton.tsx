import React from "react";
import { PopupWidget } from "react-calendly";
import { Calendar } from "lucide-react";

const ConsultationButton = () => {
  return (
    <>
      {/* Floating circle button bottom-left */}
      {/* <button
        onClick={() => document.querySelector(".calendly-popup")?.click()}
        className="fixed bottom-6 left-6 w-14 h-14 rounded-full bg-[#CECA64] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform animate-bounce z-50"
        aria-label="Book a Consultation"
      >
        <Calendar  size={24} />
      </button> */}

      {/* Hidden Calendly popup widget */}
      <PopupWidget
        url="https://calendly.com/hfs0consult/30min"
        rootElement={document.getElementById("root")}
        text="Book a Consultation"
        textColor="#CECA64"
        color="#4456BE"
        className="calendly-popup hidden"
      />
    </>
  );
};

export default ConsultationButton;
