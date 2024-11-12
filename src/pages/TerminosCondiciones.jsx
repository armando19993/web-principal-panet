import { motion } from 'framer-motion'
import logo from '../assets/logon.png'
import {LucideHome} from "lucide-react";
import {useNavigate} from "react-router-dom";

export default function TerminosCondiciones() {
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
    }

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/'); // Redirige a la ruta raíz
    };
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Variables de color personalizadas */}
            <style jsx global>{`
                :root {
                    --color-primary: #054a6f;
                    --color-secondary: #008bbe;
                    --color-tertiary: #333b4c;
                }
            `}</style>

            {/* Barra de navegación superior */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-md fixed top-0 left-0 right-0 z-50"
            >
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo de la empresa" className="h-10"/>
                    </div>
                    <motion.button
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className="flex bg-secondary text-white px-4 py-3 rounded-full text-sm font-semibold transition-all"
                        style={{backgroundColor: 'var(--color-secondary)'}}
                        onClick={handleNavigation} // Añade el evento onClick
                    >
                        <LucideHome className={'mr-3'}/> Inicio
                    </motion.button>
                </div>
            </motion.nav>

            {/* Imagen de encabezado (30% de la altura de la pantalla) */}
            <div
                className="w-full relative"
                style={{
                    height: '30vh',
                    marginTop: '64px', // Para compensar la navbar fija
                    backgroundImage: 'url("/terms.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-white">Términos y Condiciones</h1>
                </div>
            </div>

            {/* Contenedor para los términos y condiciones */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="container mx-auto px-4 py-8"
            >
                <div className="bg-white rounded-lg shadow-lg p-8">
                    {/* Aquí puedes agregar el contenido de los términos y condiciones */}
                    <div className="prose max-w-none">
                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                            1. Introducción
                        </h2>
                        <p className="mb-6">
                            Bienvenido a nuestro sitio web y aplicación, operados por PANET EIRL. Al acceder o utilizar nuestra Plataforma, usted acepta las condiciones de este contrato y las leyes aplicables. Nuestro servicio está disponible para usuarios previamente registrados, de acuerdo con nuestras políticas internas y normativas de cada país en el que operamos.
                        </p>

                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                            2. Uso del Servicio
                        </h2>
                        <p className="mb-6">
                            Para acceder y usar nuestros servicios, es necesario que complete el proceso de registro, verificación de identidad y aceptación de los términos y condiciones establecidos en este documento. Solo podrá utilizar la Plataforma si es mayor de edad y ha completado el proceso de verificación.
                        </p>

                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                            3. Servicios de PANET
                        </h2>
                        <p className="mb-6">
                            PANET ofrece una Plataforma tecnológica para realizar transacciones de activos digitales, facilitando el intercambio y transferencia entre usuarios. Las transacciones realizadas son sujetas a tasas de cambio establecidas por PANET antes de su ejecución. Los usuarios deben comprender que las fluctuaciones en el valor de los activos digitales no afectarán el monto que reciban.
                        </p>

                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                            4. Proceso de Validación de Identidad
                        </h2>
                        <p className="mb-6">
                            Para utilizar la Plataforma, será necesario completar un proceso de validación de identidad, el cual incluye verificación biométrica y corroboración de datos personales como dirección y teléfono. Este proceso ayuda a prevenir fraudes y cumplir con normativas locales sobre el uso de servicios financieros.
                        </p>

                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                            5. Transacciones y Tarifas
                        </h2>
                        <p className="mb-6">
                            Las transacciones realizadas en la Plataforma están sujetas a tarifas de uso que serán informadas previamente al usuario. La tarifa será establecida en función de la transacción realizada y las condiciones del mercado. El monto final de la transacción será el depositado en la cuenta de liquidación, menos las tarifas aplicables.
                        </p>

                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                            6. Modificaciones a los Términos
                        </h2>
                        <p className="mb-6">
                            PANET puede modificar estos términos en cualquier momento, notificando los cambios a través de la Plataforma o por correo electrónico. Si no está de acuerdo con las modificaciones, puede dar por terminada su cuenta o contactarnos para más información.
                        </p>

                    </div>
                </div>
            </motion.div>
        </div>
    )
}
