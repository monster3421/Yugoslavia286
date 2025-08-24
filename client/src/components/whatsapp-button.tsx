import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/523221244144', '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50 animate-float"
      size="icon"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </Button>
  );
}
