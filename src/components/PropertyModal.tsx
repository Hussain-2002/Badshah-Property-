import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface Property {
  id: number;
  title: string;
  location: string;
  type: string;
  price: string;
  image: string;
  beds?: number;
  baths?: number;
  sqft?: string;
  description?: string;
}

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

const PropertyModal = ({ property, onClose }: PropertyModalProps) => {
  return (
    <AnimatePresence>
      {property && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-background max-w-3xl w-full max-h-[85vh] overflow-auto"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-background/90 text-foreground hover:text-accent transition-colors"
            >
              <X size={18} />
            </button>

            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-12">
              <p className="label-text text-accent text-[10px] mb-2">{property.type}</p>
              <h2 className="heading-md text-foreground mb-2">{property.title}</h2>
              <p className="text-sm text-muted-foreground mb-6">{property.location}</p>

              {property.description && (
                <p className="body-text mb-8">{property.description}</p>
              )}

              <div className="grid grid-cols-3 gap-6 border-t border-border pt-6 mb-8">
                {property.beds && (
                  <div>
                    <p className="label-text text-[10px] mb-1">Bedrooms</p>
                    <p className="font-serif text-lg text-foreground">{property.beds}</p>
                  </div>
                )}
                {property.baths && (
                  <div>
                    <p className="label-text text-[10px] mb-1">Bathrooms</p>
                    <p className="font-serif text-lg text-foreground">{property.baths}</p>
                  </div>
                )}
                {property.sqft && (
                  <div>
                    <p className="label-text text-[10px] mb-1">Area</p>
                    <p className="font-serif text-lg text-foreground">{property.sqft}</p>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl text-foreground">{property.price}</span>
                <button className="btn-primary">Enquire Now</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PropertyModal;
