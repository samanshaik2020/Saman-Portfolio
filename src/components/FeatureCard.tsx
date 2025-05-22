
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

const FeatureCard = ({ title, description, icon, className }: FeatureCardProps) => {
  return (
    <div className={`feature-card ${className}`}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium text-lg">{title}</h3>
          <p className="text-sm opacity-80">{description}</p>
        </div>
        {icon && <div>{icon}</div>}
      </div>
    </div>
  );
};

export default FeatureCard;
