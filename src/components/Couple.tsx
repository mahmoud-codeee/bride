import { motion } from "framer-motion";
import FloralOrnament from "./FloralOrnament";
import Monogram from "./Monogram";
import photo3 from "../assets/photo3.jpg";

export default function Couple() {
  return (
    <section className="py-20 px-6 flex flex-col items-center gap-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center"
      >
        <FloralOrnament className="absolute -top-3 -start-3 w-20 h-20 sm:w-28 sm:h-28 opacity-70" />
        <FloralOrnament
          className="absolute -top-3 -end-3 w-20 h-20 sm:w-28 sm:h-28 opacity-70"
          flip
        />
        <FloralOrnament className="absolute -bottom-3 -start-3 w-20 h-20 sm:w-28 sm:h-28 opacity-70" />
        <FloralOrnament
          className="absolute -bottom-3 -end-3 w-20 h-20 sm:w-28 sm:h-28 opacity-70"
          flip
        />

        <Monogram className="relative z-10 w-full h-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full max-w-sm sm:max-w-md rounded-2xl p-1.5"
        style={{ border: "1px solid var(--color-gold-light)" }}
      >
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: "1.5px solid var(--color-gold)" }}
        >
          <img src={photo3} alt="" className="w-full h-auto object-cover" />
        </div>
      </motion.div>
    </section>
  );
}
