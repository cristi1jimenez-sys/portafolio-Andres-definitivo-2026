
"use client"; // Le dice a Next.js que usaremos interactividad

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
      
      {/* Navegación - Baja suavemente desde arriba */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center p-8"
      >
        <div className="flex gap-6 px-6 py-3 text-xs text-gray-300 border border-gray-800 rounded-full shadow-lg md:gap-8 bg-gray-900/80 backdrop-blur-md md:text-sm">
          <a href="#" className="font-medium text-white transition-colors cursor-pointer hover:text-blue-400">Inicio</a>
          <a href="#sobre-mi" className="font-medium text-white transition-colors cursor-pointer hover:text-blue-400">Sobre mí</a>
          <a href="#experiencia" className="font-medium text-white transition-colors cursor-pointer hover:text-blue-400">Experiencia</a>
          <a href="#capacitaciones" className="font-medium text-white transition-colors cursor-pointer hover:text-blue-400">Certificados</a>
          <a href="#contacto" className="font-medium text-white transition-colors cursor-pointer hover:text-blue-400">Contacto</a>
        </div>
      </motion.nav>

      {/* Sección Hero */}
      <section className="flex flex-col items-center justify-center px-4 mt-20 text-center">
        
        {/* Etiqueta de disponibilidad - Aparece primero */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 px-4 py-1 mb-10 text-xs tracking-widest text-blue-300 border rounded-full border-blue-400/30 bg-blue-100/10"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          DISPONIBLE PARA NUEVOS PROYECTOS
        </motion.div>

        {/* Títulos - Efecto cascada (delay progresivo) */}
        <motion.span 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-500 tracking-[0.3em] text-xs uppercase mb-4"
        >
          Portafolio Profesional
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-2 text-5xl font-bold md:text-6xl"
        >
          HOLA, SOY
        </motion.h1>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-4 font-black tracking-tighter text-7xl md:text-8xl"
        >
          ANDRES
        </motion.h1>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-blue-400 bg-clip-text bg-linear-to-r from-blue-500 to-blue-600 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] mb-8"
        >
          DESARROLLADOR DE SOFTWARE
        </motion.h3>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mb-12 leading-relaxed text-gray-400"
        >
          Estudiante de Análisis y Desarrollo de Software, Cuento con formación en bases de datos, Linux y analítica de datos, orientado a la solución eficiente de problemas mediante el uso de tecnología y con gran capacidad de aprendizaje continuo.
        </motion.p>

        {/* Botón interactivo - Tiene hover integrado */}
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-medium shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] flex items-center gap-2"
        >
          VER TRAYECTORIA
          <span> =▷</span>
        </motion.button>
        
      </section>

      
      {/* SECCIÓN: SOBRE MÍ */}
      <section id="sobre-mi" className="w-full max-w-5xl px-4 mx-auto mt-40">
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} 
            className="text-sm font-bold tracking-widest text-blue-500 uppercase"
          >
            Quién Soy
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} 
            className="text-4xl md:text-5xl font-extrabold mt-2 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            SOBRE MÍ
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Tarjeta de texto */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} 
            className="p-8 border border-gray-800 bg-gray-900/40 rounded-2xl backdrop-blur-sm"
          >
            <p className="mb-4 leading-relaxed text-gray-300">
              Hola, soy <strong className="text-white">Andres</strong>. Complemento mi perfil técnico como estudiante de Análisis y Desarrollo de Software con más de 6 años de experiencia en el área comercial, lo que me permite comprender las verdaderas necesidades del usuario final.
            </p>
            <p className="leading-relaxed text-gray-300">
              Tengo experiencia en la gestión de comunidades, administración de servidores de Minecraft (modding, Fabric, WorldEdit) y en el desarrollo de proyectos independientes como <strong className="text-white">Easily Work</strong>, mi propio software de gestión de inventarios. Mi enfoque es el liderazgo, la adaptación al cambio y la resolución eficiente de problemas.
            </p>
          </motion.div>

          {/* Tarjetas de estadísticas */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} 
              className="flex flex-col items-center justify-center p-6 text-center transition-colors border border-gray-800 bg-gray-900/40 rounded-2xl hover:border-blue-500/50"
            >
              <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">6+</span>
              <span className="mt-2 text-sm text-gray-400">Años Experiencia<br/>Comercial</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} 
              className="flex flex-col items-center justify-center p-6 text-center transition-colors border border-gray-800 bg-gray-900/40 rounded-2xl hover:border-blue-500/50"
            >
              <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">SENA</span>
              <span className="mt-2 text-sm text-gray-400">Etapa<br/>Productiva</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: EXPERIENCIA */}
      <section id="experiencia" className="w-full max-w-5xl px-4 mx-auto mt-40 mb-32">
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} 
            className="text-sm font-bold tracking-widest text-blue-500 uppercase"
          >
            Mi Trayectoria
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} 
            className="text-4xl md:text-5xl font-extrabold mt-2 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            EXPERIENCIA
          </motion.h2>
        </div>

        {/* Línea de tiempo */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/50 before:to-transparent">
          
          {/* Item de Experiencia 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} 
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500 bg-gray-900 text-blue-400 shadow-[0_0_10px_rgba(168,85,247,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              💻
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-900/50 border border-gray-800 p-6 rounded-2xl hover:border-blue-500/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">Easily Work</h3>
                <span className="px-2 py-1 text-xs text-blue-300 border rounded-full bg-blue-500/20 border-blue-500/30">Proyecto Propio</span>
              </div>
              <p className="mb-4 text-sm text-gray-400">Diseño y desarrollo de arquitectura de software para gestión de inventarios y rotación de stock, integrando bases de datos y módulos funcionales.</p>
              <div className="flex gap-2 text-xs text-gray-500">
                <span className="px-2 py-1 bg-gray-800 rounded">Java</span>
                <span className="px-2 py-1 bg-gray-800 rounded">Bases de Datos</span>
                <span className="px-2 py-1 bg-gray-800 rounded">En desarrollo...</span>
              </div>
            </div>
          </motion.div>

          {/* Item de Experiencia 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} 
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 text-blue-400 bg-gray-900 border border-blue-500 rounded-full shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              🎮
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-900/50 border border-gray-800 p-6 rounded-2xl hover:border-blue-500/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">Gestión de Servidores Minecraft</h3>
                <span className="px-2 py-1 text-xs text-gray-300 bg-gray-800 rounded-full">Independiente</span>
              </div>
              <p className="mb-4 text-sm text-gray-400">Administración técnica, integración de tiendas virtuales (Tebex en ZentrixMC), y modding técnico avanzado usando entornos Fabric.</p>
              <div className="flex gap-2 text-xs text-gray-500">
                <span className="px-2 py-1 bg-gray-800 rounded">Management</span>
                <span className="px-2 py-1 bg-gray-800 rounded">Soporte Técnico</span>
              </div>
            </div>
          </motion.div>

          {/* Item de Experiencia 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} 
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 text-blue-400 bg-gray-900 border border-blue-500 rounded-full shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              💼
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-900/50 border border-gray-800 p-6 rounded-2xl hover:border-blue-500/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">HYS Comercializadora SAS </h3>
                <span className="px-2 py-1 text-xs text-gray-300 bg-gray-800 rounded-full px-s">2024-2026</span>
              </div>
              <p className="mb-4 text-sm text-gray-400">Asesor comercial en colanta, Ejecución de estrategias de ventas en campo, cumplimiento de metas mensuales y fortalecimiento de relaciones con clientes.</p>
              <div className="flex gap-2 text-xs text-gray-500">
                <span className="px-2 py-1 bg-gray-800 rounded">Ventas</span>
                <span className="px-2 py-1 bg-gray-800 rounded">Gestión de Clientes</span>
                <span className="px-2 py-1 bg-gray-800 rounded">Experiencia laboral</span>
              </div>
            </div>
          </motion.div>

          {/* Item de Experiencia 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} 
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 text-blue-400 bg-gray-900 border border-blue-500 rounded-full shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              💼
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-900/50 border border-gray-800 p-6 rounded-2xl hover:border-blue-500/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">Comcercializadora LCL </h3>
                <span className="px-2 py-1 text-xs text-gray-300 bg-gray-800 rounded-full">2022-2024</span>
              </div>
              <p className="mb-4 text-sm text-gray-400">Asesor comercial en colombina , Ejecución de estrategias de ventas en campo, atendiendo canal tradicional y moderno,cumpliendo con las metas mensuales y fortalecimiento de relaciones con clientes.</p>
              <div className="flex gap-2 text-xs text-gray-500">
                <span className="px-2 py-1 bg-gray-800 rounded">Ventas</span>
                <span className="px-2 py-1 bg-gray-800 rounded">Gestión de Clientes</span>
                <span className="px-2 py-1 bg-gray-800 rounded">Experiencia laboral</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      


    {/* SECCIÓN: CAPACITACIONES */}
      <section id="capacitaciones" className="w-full max-w-5xl px-4 mx-auto mt-32">
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} 
            className="text-sm font-bold tracking-widest text-blue-500 uppercase"
          >
            Conocimiento Técnico
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} 
            className="text-4xl md:text-5xl font-extrabold mt-2 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            CERTIFICACIONES
          </motion.h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Certificado 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="flex flex-col justify-between p-6 transition-all border border-gray-800 cursor-default bg-gray-900/40 rounded-2xl hover:border-blue-500/50"
          >
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl text-blue-400 bg-blue-500/10 rounded-xl">
                🤖
              </div>
              <h3 className="mb-2 text-lg font-bold">Google AI Essentials</h3>
              <p className="text-sm text-gray-400">Coursera - Google</p>
            </div>
            <div className="pt-4 mt-6 text-xs text-gray-500 border-t border-gray-800">40 horas académicas</div>
          </motion.div>

          {/* Certificado 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="flex flex-col justify-between p-6 transition-all border border-gray-800 cursor-default bg-gray-900/40 rounded-2xl hover:border-blue-500/50"
          >
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl text-blue-400 bg-blue-500/10 rounded-xl">
                🛡️
              </div>
              <h3 className="mb-2 text-lg font-bold">Fundamentos de Ciberseguridad</h3>
              <p className="text-sm text-gray-400">Coursera - Google</p>
            </div>
            <div className="pt-4 mt-6 text-xs text-gray-500 border-t border-gray-800">40 horas académicas</div>
          </motion.div>

          {/* Certificado 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="flex flex-col justify-between p-6 transition-all border border-gray-800 cursor-default bg-gray-900/40 rounded-2xl hover:border-blue-500/50"
          >
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl text-blue-400 bg-blue-500/10 rounded-xl">
                🛡️
              </div>
              <h3 className="mb-2 text-lg font-bold">Conexion y proteccion: Redes y seguridad de redes</h3>
              <p className="text-sm text-gray-400">Coursera - Google</p>
            </div>
            <div className="pt-4 mt-6 text-xs text-gray-500 border-t border-gray-800">40 horas académicas</div>
          </motion.div>


          {/* Certificado 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="flex flex-col justify-between p-6 transition-all border border-gray-800 cursor-default bg-gray-900/40 rounded-2xl hover:border-blue-500/50"
          >
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl text-blue-400 bg-blue-500/10 rounded-xl">
                🛡️
              </div>
              <h3 className="mb-2 text-lg font-bold">Herramientas de oficio: Linux y SQL</h3>
              <p className="text-sm text-gray-400">Coursera - Google</p>
            </div>
            <div className="pt-4 mt-6 text-xs text-gray-500 border-t border-gray-800">40 horas académicas</div>
          </motion.div>

          {/* Certificado 5 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -10 }}
            className="flex flex-col justify-between p-6 transition-all border border-gray-800 cursor-default bg-gray-900/40 rounded-2xl hover:border-purple-500/50"
          >
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl text-blue-400 bg-purple-500/10 rounded-xl">
                🌎
              </div>
              <h3 className="mb-2 text-lg font-bold">Inglés Intermedio B1</h3>
              <p className="text-sm text-gray-400">Interamerican</p>
            </div>
            <div className="pt-4 mt-6 text-xs text-gray-500 border-t border-gray-800">1 año académico</div>
          </motion.div>


          {/* Certificado 6 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -10 }}
            className="flex flex-col justify-between p-6 transition-all border border-gray-800 cursor-default bg-gray-900/40 rounded-2xl hover:border-blue-500/50"
          >
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl text-blue-400 bg-blue-500/10 rounded-xl">
                📊
              </div>
              <h3 className="mb-2 text-lg font-bold">Analítica de Datos</h3>
              <p className="text-sm text-gray-400">Universidad Distrital</p>
            </div>
            <div className="pt-4 mt-6 text-xs text-gray-500 border-t border-gray-800">50 horas académicas</div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN: CONTACTO */}
      <section id="contacto" className="w-full max-w-5xl px-4 mx-auto mt-40 mb-20">
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} 
            className="text-sm font-bold tracking-widest text-blue-500 uppercase"
          >
            Trabajemos Juntos
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} 
            className="text-4xl md:text-5xl font-extrabold mt-2 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            CONTACTO
          </motion.h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-400">
            ¿Interesado en trabajar conmigo o formar parte de un proyecto? Estoy disponible para nuevas oportunidades y colaboraciones.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Información de Contacto Directo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4 p-6 transition-colors border border-gray-800 bg-gray-900/40 rounded-2xl hover:border-blue-500/30">
              <div className="w-12 h-12 bg-[#5865F2]/20 text-[#5865F2] rounded-xl flex items-center justify-center text-2xl">
                🎮
              </div>
              <div>
                <p className="text-sm text-gray-400">Discord</p>
                <p className="font-bold">123jvandre_06363</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 transition-colors border border-gray-800 bg-gray-900/40 rounded-2xl hover:border-blue-500/30">
              <div className="flex items-center justify-center w-12 h-12 text-2xl text-red-500 bg-red-500/20 rounded-xl">
                ✉️
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-bold">cristi1jimenez@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="p-8 border border-gray-800 bg-gray-900/40 rounded-2xl"
          >
            <form className="flex flex-col space-y-4">
              <div>
                <label className="block mb-1 text-sm text-gray-400">Tu Nombre</label>
                <input type="text" placeholder="Ej. Juan Pérez" className="w-full px-4 py-3 text-white transition-colors bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-400">Correo Electrónico</label>
                <input type="email" placeholder="correo@ejemplo.com" className="w-full px-4 py-3 text-white transition-colors bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block mb-1 text-sm text-gray-400">Mensaje</label>
                <textarea rows="4" placeholder="¿En qué te puedo ayudar?" className="w-full px-4 py-3 text-white transition-colors bg-gray-900 border border-gray-700 rounded-lg resize-none focus:outline-none focus:border-blue-500"></textarea>
              </div>
              <button type="button" className="w-full py-3 mt-2 font-bold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-500">
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-8 mt-20 text-sm text-center text-gray-500 border-t border-gray-800">
        <p>© 2026 Cristiam Andres Jimenez Vargas. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}

