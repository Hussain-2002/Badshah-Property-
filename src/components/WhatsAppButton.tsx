import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

// ✅ Updated WhatsApp Number (India +91)
const WHATSAPP_NUMBER = "919826044152";

// ✅ SEO + Ujjain Focused Message
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Badshah Property Advisor, I am interested in buying or investing in property in Ujjain. Please share available residential or commercial options."
);

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const WhatsAppButton = () => {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Badshah Property Advisor on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={26} fill="white" stroke="white" />
    </motion.a>
  );
};

export default WhatsAppButton;