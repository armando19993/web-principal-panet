import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { ArrowUp, LucideHome } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logob from "../assets/logo.png";

export default function EliminarCuenta() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
    };

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/'); // Redirige a la ruta raíz
    };

    // Obtener la fecha actual en formato YYYY-MM-DD
    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="min-h-screen text-gray-900">
            <style jsx global>{`
                :root {
                    --color-primary: #054a6f;
                    --color-secondary: #008bbe;
                    --color-tertiary: #333b4c;
                }
            `}</style>

            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#054a6f] shadow-md fixed top-0 left-0 right-0 z-50"
            >
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo de la empresa" className="h-10" />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex bg-secondary text-white px-4 py-3 rounded-full text-sm font-semibold transition-all"
                        style={{ backgroundColor: 'var(--color-secondary)' }}
                        onClick={handleNavigation}
                    >
                        <LucideHome className={'mr-3'} /> Inicio
                    </motion.button>
                </div>
            </motion.nav>

            <div
                className="w-full relative"
                style={{
                    height: '30vh',
                    marginTop: '64px',
                    backgroundImage: 'url("/privacidad.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="container mx-auto px-4 py-8"
            >
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="prose max-w-none">
                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                            Formulario de Eliminación de Cuenta
                        </h2>
                        <p className="mb-6"><strong>Advertencia:</strong> Desde la solicitud de eliminación de cuenta hasta la ejecución del mismo pasarán 15 días. En este rango de tiempo tienes la opción de suspender la misma; en caso contrario, se eliminará. PANET ERIL (Perú) y PANET CL SPA (Chile) se reservan el derecho de conservar datos no sensibles y su historial de transacciones realizados en nuestra aplicación por un lapso de 7 años contados desde la ejecución de las mismas.</p>

                        {/* Formulario */}
                        <form className="space-y-6">
                            {/* Campo: Correo */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-[#054a6f] rounded-md shadow-sm focus:ring-[#054a6f] focus:border-[#054a6f]"
                                    placeholder="Ingresa tu correo electrónico"
                                />
                            </div>

                            {/* Campo: Nombre */}
                            <div>
                                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                                    Nombre Completo
                                </label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-[#054a6f] rounded-md shadow-sm focus:ring-[#054a6f] focus:border-[#054a6f]"
                                    placeholder="Ingresa tu nombre completo"
                                />
                            </div>

                            {/* Campo: Documento */}
                            <div>
                                <label htmlFor="documento" className="block text-sm font-medium text-gray-700">
                                    Número de Documento
                                </label>
                                <input
                                    type="text"
                                    id="documento"
                                    name="documento"
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-[#054a6f] rounded-md shadow-sm focus:ring-[#054a6f] focus:border-[#054a6f]"
                                    placeholder="Ingresa tu número de documento"
                                />
                            </div>

                            {/* Campo: Fecha de Solicitud (no editable) */}
                            <div>
                                <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">
                                    Fecha de Solicitud
                                </label>
                                <input
                                    type="date"
                                    id="fecha"
                                    name="fecha"
                                    defaultValue={getCurrentDate()}
                                    readOnly
                                    className="mt-1 block w-full px-4 py-2 border border-[#054a6f] rounded-md shadow-sm bg-gray-100 cursor-not-allowed"
                                />
                            </div>

                            {/* Campo: Razón de Eliminación */}
                            <div>
                                <label htmlFor="razon" className="block text-sm font-medium text-gray-700">
                                    Razón de Eliminación
                                </label>
                                <textarea
                                    id="razon"
                                    name="razon"
                                    rows="4"
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-[#054a6f] rounded-md shadow-sm focus:ring-[#054a6f] focus:border-[#054a6f]"
                                    placeholder="Describe la razón por la que deseas eliminar tu cuenta"
                                />
                            </div>

                            {/* Botón de Envío */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#054a6f] hover:bg-[#008bbe] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#054a6f]"
                                >
                                    Enviar Solicitud
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>

            <footer className="bg-tertiary text-white py-10" style={{ backgroundColor: 'var(--color-tertiary)' }}>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <img src={logob} alt="" />
                        </div>
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <h3 className="text-xl font-semibold mb-4">Ubicaciones</h3>
                            <p><b>Perú:</b> Av Perú 3013, SMP LIMA (PANET E.I.R.L)</p>
                            <p><b>Chile:</b> Cerro El Plomo 5931, Las Condes, Santiago (PANET CL SPA)</p>
                        </div>
                        <div className="w-full md:w-1/4">
                            <h3 className="text-xl font-semibold mb-4">Contáctanos</h3>
                            <p><b>Perú:</b> gerencia@paneteirl.com</p>
                            <p><b>Chile:</b> gerenciacl@paneteirl.com</p>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p>&copy; 2024 PANET EIRL & PANET CL SPA. Todos los derechos reservados. <Link
                            to={'/politica-privacidad'}>Política de Privacidad</Link></p>
                    </div>
                </div>
            </footer>
        </div>
    );
}