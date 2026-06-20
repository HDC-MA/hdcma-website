import { motion } from "framer-motion";

function ValueCard({ value, index }) {
  const Icon = value.icon;

  return (
    <motion.div
      className="value-card glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -5 }}
    >
      <div className="value-icon">
        <Icon size={32} />
      </div>
      <h3>{value.title}</h3>
      <p>{value.description}</p>
    </motion.div>
  );
}

export default ValueCard;
