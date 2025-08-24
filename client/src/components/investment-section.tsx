import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import { useState } from "react";
import investmentImage from "@assets/Screenshot 2025-08-18 at 19-28-19 yugoslavia286_broshure.cdr - yugoslavia286_broshure-1.pdf_1755566933480.png";

export default function InvestmentSection() {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <section className="relative w-full">
      <div className="w-full">
        <div 
          className="relative group cursor-pointer overflow-hidden"
          onClick={() => setIsImageOpen(true)}
        >
          <img
            src={investmentImage}
            alt="Puerto Vallarta Investment Opportunity"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <ZoomIn className="text-white opacity-0 group-hover:opacity-100 h-16 w-16 transition-all duration-300" />
          </div>
        </div>

        {/* Image Modal */}
        <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
          <DialogContent className="max-w-7xl w-full max-h-[95vh] p-0 border-0">
            <DialogTitle className="sr-only">
              Puerto Vallarta Investment Opportunity - Full Size View
            </DialogTitle>
            <div className="relative bg-black">
              <img
                src={investmentImage}
                alt="Puerto Vallarta Investment Opportunity - Full Size"
                className="w-full h-auto max-h-[95vh] object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}