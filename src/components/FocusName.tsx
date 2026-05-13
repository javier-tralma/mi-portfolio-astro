import { motion } from "framer-motion";

interface FocusNameProps {
  children: React.ReactNode;
  className?: string;
}

export default function FocusName({ children, className = "" }: FocusNameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Capa Fondo: Desenfocada y opaca */}
      <div
        className="blur-lg opacity-30 select-none"
        aria-hidden="true"
      >
        {children}
      </div>

      {/* Capa Superior: Nítida con clip-path animado diagonal */}
      <motion.div
        className="absolute inset-0 blur-0 select-none"
        initial={{ clipPath: "circle(min(240px, 18vw) at 10% 20%)" }}
        animate={{
          clipPath: [
            "circle(min(240px, 18vw) at 10% 20%)",
            "circle(min(240px, 18vw) at 90% 30%)",
            "circle(min(240px, 18vw) at 80% 90%)",
            "circle(min(240px, 18vw) at 20% 80%)",
            "circle(min(240px, 18vw) at 10% 20%)",
          ],
        }}
        transition={{
          duration: 8,
          times: [0, 0.25, 0.5, 0.75, 1],
          repeat: Infinity,
          ease: "linear",
        }}
        layout="position"
      >
        {children}
      </motion.div>
    </div>
  );
}
