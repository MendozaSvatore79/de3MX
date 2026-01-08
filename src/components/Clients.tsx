import React from 'react';
import Clientes1 from '../imports/Clientes-71-571';

export default function Clients() {
  return (
    <section className="relative bg-white w-full py-8 md:py-12 lg:py-20 xl:py-28">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">
        {/* Wrapper responsive para el componente importado */}
        <div className="w-full">
          <Clientes1 />
        </div>
      </div>
    </section>
  );
}
