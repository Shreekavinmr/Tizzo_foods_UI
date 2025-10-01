import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Section3.css";


const products = [
  { id: 1, name: "Classic Salt", img: "/section1_p1.png", color: "#f4b63a", desc: "Classic salty crunch with perfect crisp." },
  { id: 2, name: "Salt and Vinegar", img: "/section1_p2.png", color: "#2a7ddb", desc: "Tangy vinegar twist with salty punch." },
  { id: 3, name: "Tomato", img: "/section1_p3.png", color: "#b11f3b", desc: "Savory tomato flavor in every bite." },
  { id: 4, name: "Sour Cream", img: "/section1_p4.png", color: "#ff6b35", desc: "Creamy & tangy taste explosion." },
  { id: 5, name: "Classic Salt", img: "/section1_p1.png", color: "#f4b63a", desc: "Classic salty crunch with perfect crisp." },
  { id: 6, name: "Salt and Vinegar", img: "/section1_p2.png", color: "#2a7ddb", desc: "Tangy vinegar twist with salty punch." },
  { id: 7, name: "Tomato", img: "/section1_p3.png", color: "#b11f3b",desc: "Savory tomato flavor in every bite." },
  { id: 8, name: "Sour Cream", img: "/section1_p4.png", color: "#ff6b35", desc: "Creamy & tangy taste explosion." },
  { id: 9, name: "Classic Salt", img: "/section1_p1.png", color: "#f4b63a", desc: "Classic salty crunch with perfect crisp." },
  { id: 10, name: "Salt and Vinegar", img: "/section1_p2.png", color: "#2a7ddb" , desc: "Tangy vinegar twist with salty punch."},
  { id: 11, name: "Tomato", img: "/section1_p3.png", color: "#b11f3b",desc: "Savory tomato flavor in every bite." },
  { id: 12, name: "Sour Cream", img: "/section1_p4.png", color: "#ff6b35", desc: "Creamy & tangy taste explosion." },
  // add more as needed
];

const ITEMS_PER_PAGE = 3;

const Section3 = () => {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(null); // product modal state

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const start = page * ITEMS_PER_PAGE;
  const visibleProducts = products.slice(start, start + ITEMS_PER_PAGE);

  const nextPage = () => setPage((p) => (p + 1) % totalPages);
  const prevPage = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  return (
    <section className="section3">
      {/* Header */}
      <motion.div
        className="section3-header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2>JUST GOT FIZZED</h2>
        <motion.div
          className="header-actions"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#" className="view-all">View all</a>
          <div className="nav-arrows">
            <motion.button whileTap={{ scale: 0.9 }} onClick={nextPage}>
              &gt;
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Products Row */}
      <div className="products-row">
        <AnimatePresence mode="wait">
          {visibleProducts.map((product) => (
            <motion.div
              key={product.id}
              className="product-card"
              style={{ backgroundColor: product.color }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onClick={() => setSelected(product)}
            >
              <img src={product.img} alt={product.name} />
              <div className="product-name">{product.name}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <motion.div
        className="section3-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="progress-bar">
          <motion.div
            className="progress-indicator"
            animate={{ width: `${((page + 1) / totalPages) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="nav-arrows">
          <motion.button whileTap={{ scale: 0.9 }} onClick={prevPage}>
            &lt;
          </motion.button>
          <motion.button whileTap={{ scale: 0.9 }} onClick={nextPage}>
            &gt;
          </motion.button>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-backdrop"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.6, opacity: 0, rotate: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <img src={selected.img} alt={selected.name} />
              <h3>{selected.name}</h3>
              <p>{selected.desc}</p>
              <button onClick={() => setSelected(null)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background bubbles */}
      <div className="bubbles">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.span
            key={i}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              repeatType: "mirror",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Section3;
