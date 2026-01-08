'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Clientes1 from '../imports/Clientes-71-571';

export default function Clients() {
  return (
    <section className="relative bg-white w-full py-8 md:py-12 lg:py-20 xl:py-28">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">
        {/* Wrapper responsive para el componente importado */}
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Clientes1 />
        </motion.div>
      </div>
    </section>
  );
}
