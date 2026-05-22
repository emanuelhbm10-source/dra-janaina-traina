import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { triggerConversionAndGetUrl } from "../config";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after scrolling 200px or 2 seconds
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      }
    };

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleClick = () => {
    const url = triggerConversionAndGetUrl();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 pointer-events-auto">
      
      {/* Tooltip for conversion lift */}
      {showTooltip && (
        <div className="hidden sm:flex relative items-center bg-[#FFFFFF] text-[#2D2D2D] text-xs font-bold px-4 py-2 bg-white/95 rounded-xl border border-brand-primary/10 shadow-lg select-none whitespace-nowrap animate-fade-in pr-6">
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-[#FFFFFF]" />
          <span>Falar com a Dra. Janaína</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }} 
            className="absolute right-1 text-xs text-[#999999] hover:text-brand-primary px-1 font-sans font-bold"
          >
            ×
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleClick}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:shadow-[#25D366]/40 hover:scale-108 active:scale-95 transition-all duration-300 cursor-pointer outline-hidden group"
        aria-label="Fale conosco no WhatsApp"
      >
        {/* Soft breathing pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping -z-10" />
        
        {/* SVG modern WhatsApp icon */}
        <svg
          className="w-7 h-7 text-white fill-current group-hover:rotate-6 transition-transform duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.411 0 11.979 0c3.183.001 6.177 1.24 8.43 3.496 2.253 2.257 3.49 5.253 3.488 8.438-.004 6.551-5.355 11.9-11.922 11.9-1.996-.001-3.957-.502-5.69-1.462L0 24zm6.59-4.846c1.6.95 3.197 1.45 4.79 1.451 5.394 0 9.785-4.381 9.788-9.76.002-2.607-1.012-5.059-2.859-6.904C16.48 2.095 14.032 1.08 11.428 1.08c-5.399 0-9.789 4.384-9.792 9.764-.002 1.815.485 3.593 1.411 5.158l-.930 3.398 3.483-.915c1.517.828 3.1 1.258 4.673 1.258zm9.324-7.143c-.26-.13-1.534-.757-1.772-.841-.237-.086-.41-.13-.58.13-.172.261-.667.841-.818 1.014-.15.174-.301.196-.56.065-.26-.13-1.099-.405-2.093-1.291-.774-.69-1.297-1.543-1.448-1.803-.151-.26-.016-.401.114-.531.117-.117.26-.304.39-.456.129-.152.172-.261.26-.435.086-.174.043-.326-.021-.456-.065-.13-.58-1.391-.795-1.91-.21-.508-.418-.439-.58-.447-.15-.008-.323-.01-.495-.01-.172 0-.452.065-.688.326-.237.261-.904.883-.904 2.152 0 1.27.925 2.497 1.054 2.671.13.173 1.82 2.78 4.417 3.896.618.266 1.1.425 1.476.544.62.197 1.184.169 1.63.102.497-.075 1.534-.627 1.75-.1233.215-.606.215-1.127.151-1.22-.064-.093-.236-.14-.496-.27z" />
        </svg>
      </button>

    </div>
  );
}
