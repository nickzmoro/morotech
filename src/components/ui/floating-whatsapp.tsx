import Image from "next/image";

import WhatsAppIcon from "@/assets/icons/whatsapp-icon.svg";

interface FloatingWhatsAppProps {
  message: string;
}

export default function FloatingWhatsApp({ message }: FloatingWhatsAppProps) {
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <a
        href={`https://wa.me/5514991459254?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <Image src={WhatsAppIcon} alt="WhatsApp" className="h-7 w-7" />
      </a>
    </div>
  );
}
