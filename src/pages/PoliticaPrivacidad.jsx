import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { ArrowUp, LucideHome } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logob from "../assets/logo.png";

export default function PoliticaPrivacidad() {
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
                            Política de Privacidad de PANET EIRL (Perú) y PANET CL SPA
                        </h2>
                        <p className="mb-6"><strong>Fecha de entrada en vigor:</strong> 12 de noviembre de 2024</p>

                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                            1. Marco Legal Aplicable
                        </h2>
                        <p className="mb-6">
                            En <strong>PANET EIRL</strong> (Perú) y <strong>PANET CL SPA</strong>, nos comprometemos a
                            proteger y respetar la privacidad de nuestros usuarios en cumplimiento con la Ley N° 29733 - 
                            Ley de Protección de Datos Personales y su Reglamento (Perú), y la Ley N° 19.628 sobre Protección
                            de la Vida Privada (Chile). Esta política de privacidad explica cómo recopilamos, usamos, divulgamos
                            y protegemos la información personal de los usuarios al utilizar nuestras aplicaciones móviles
                            <strong> Panet ADMIN, Panet | Despachadores</strong>, y <strong>Panet | Intermediarios</strong>.
                        </p>

                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                            2. Información que Recopilamos y su Retención
                        </h2>
                        <p className="mb-6">
                            <strong>2.1 Datos Personales Recopilados:</strong><br />
                            Nombre completo del cliente, Número de documento de identidad, Registros de transacciones,
                            Información de contacto básica.
                        </p>
                        <p className="mb-6">
                            <strong>2.2 Período de Retención de Datos:</strong><br />
                            En cumplimiento con las normativas fiscales y regulatorias vigentes, mantenemos los registros de
                            información por los siguientes períodos:<br />
                            - <strong>Perú:</strong> 7 años, según lo establecido en el Código Tributario Peruano.<br />
                            - <strong>Chile:</strong> 6 años, de acuerdo con el Código Tributario Chileno.
                        </p>

                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                            3. Uso de la Información
                        </h2>
                        <p className="mb-6">
                            La información personal que recopilamos es utilizada para:<br />
                            - Procesamiento de transacciones<br />
                            - Verificación de identidad<br />
                            - Prevención de fraudes<br />
                            - Cumplimiento regulatorio
                        </p>

                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                            4. Medidas de Seguridad y Protección
                        </h2>
                        <p className="mb-6">
                            Implementamos encriptación de datos según estándares internacionales, controles de acceso,
                            sistemas de monitoreo, protocolos de respuesta a incidentes, copias de seguridad, y auditorías
                            de seguridad regulares.
                        </p>

                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                            5. Derechos ARCO y Procedimientos
                        </h2>
                        <p className="mb-6">
                            Los usuarios tienen los derechos de Acceso, Rectificación, Cancelación, y Oposición sobre sus datos.
                            Para ejercer estos derechos, los usuarios pueden enviar una solicitud formal al correo de contacto
                            proporcionado en esta política.
                        </p>

                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                            6. Compartimiento de Información
                        </h2>
                        <p className="mb-6">
                            La información puede ser compartida con autoridades fiscales, reguladores financieros, entidades
                            judiciales, y auditores externos bajo estrictas condiciones de confidencialidad y seguridad.
                        </p>

                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                            7. Modificaciones a la Política
                        </h2>
                        <p className="mb-6">
                            Nos reservamos el derecho de actualizar esta política para cumplir con cambios en la legislación o
                            mejorar nuestras prácticas de privacidad. Las modificaciones serán notificadas mediante avisos en
                            las aplicaciones, correo electrónico o publicación en nuestra página web.
                        </p>

                        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                            8. Contacto y Jurisdicción
                        </h2>
                        <p className="mb-6">
                            Para consultas sobre esta política, los usuarios pueden contactarnos a través de los correos electrónicos
                            oficiales de <strong>PANET EIRL</strong> y <strong>PANET CL SPA</strong>.
                        </p>
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
