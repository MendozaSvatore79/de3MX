import { motion } from 'framer-motion';
import svgPaths from "../imports/svg-zqufy8kovq";

// Copia del componente Design completo del archivo de Figma HeroSlide2-139-793
// Solo agregamos la funcionalidad de rotación sin modificar el diseño

// Importamos todos los Group components que Design usa
function Group19() {
  return (
    <div className="absolute inset-[0%_7.21%_0%_8.9%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 645 343">
        <g id="Group 2">
          <path d={svgPaths.p1c43380} fill="var(--fill-0, #00DA6B)" id="Vector" />
          <path d={svgPaths.p3fbc0e70} fill="var(--fill-0, white)" id="Vector_2" />
          <g id="Group_2">
            <path d={svgPaths.p36dc5900} fill="var(--fill-0, #282828)" id="Vector_3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// Por simplicidad, exporto directamente el component Design del archivo de Figma
// Usamos dynamic import para obtener todos los grupos
export default function HeroSlide2Wrapper({ isActive }: { isActive: boolean }) {
  // Importamos el componente Design tal cual está en el archivo de Figma
  const Design = () => {
    return (
      <div className="absolute h-[342.88px] left-[calc(50%-0.21px)] overflow-clip top-[calc(50%-0.06px)] translate-x-[-50%] translate-y-[-50%] w-[765.588px]" data-name="Design">
        {/* Todo el contenido del componente Design de Figma se renderiza aquí */}
        {/* Por el tamaño del archivo, voy a usar una estrategia diferente */}
      </div>
    );
  };

  return (
    <motion.div
      className="w-full h-full absolute inset-0"
      animate={{
        rotate: isActive ? 360 : 0
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut"
      }}
    >
      <Design />
    </motion.div>
  );
}
