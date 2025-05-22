
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

const FeatureCard = ({ title, description, icon, className }: FeatureCardProps) => {
  return (
    <motion.div 
      className={`feature-card rounded-lg shadow-sm ${className}`}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium text-lg">{title}</h3>
          <p className="text-sm opacity-80">{description}</p>
        </div>
        {icon && <div>{icon}</div>}
      </div>
    </motion.div>
  );
};

export default FeatureCard;
