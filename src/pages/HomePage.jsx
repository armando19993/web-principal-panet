import {useState, useEffect} from 'react'
import {motion, useAnimation, useScroll, useTransform} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {Ship, Package, Globe, MapPin, Search, ArrowUp} from 'lucide-react'
import logo from '../assets/logon.png'
import logob from '../assets/logo.png'
import CalculadoraPaquetes from "../components/CalculadoraComponent.jsx";
import {Link} from "react-router-dom";

const CountUp = ({end, duration = 2}) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let startTime = null
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }
        requestAnimationFrame(animate)
    }, [end, duration])

    return <>{count}</>
}

const Card3D = ({children}) => {
    return (
        <motion.div
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform perspective-1000"
            style={{transformStyle: 'preserve-3d'}}
        >
            {children}
        </motion.div>
    )
}

export default function PaginaInicio() {
    const {scrollYProgress} = useScroll()
    const yPosAnim = useTransform(scrollYProgress, [0, 1], [0, -50])

    // Controles de animación para cada sección
    const controlsSobreNosotros = useAnimation()
    const controlsServicios = useAnimation()
    const controlsRastreo = useAnimation()
    const controlsDatos = useAnimation()
    const controlsTestimonios = useAnimation()
    const controlsCTA = useAnimation()

    // useInView para cada sección
    const [refSobreNosotros, inViewSobreNosotros] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })
    const [refServicios, inViewServicios] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })
    const [refRastreo, inViewRastreo] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })
    const [refDatos, inViewDatos] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })
    const [refTestimonios, inViewTestimonios] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })
    const [refCTA, inViewCTA] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    useEffect(() => {
        if (inViewSobreNosotros) controlsSobreNosotros.start('visible')
        if (inViewServicios) controlsServicios.start('visible')
        if (inViewRastreo) controlsRastreo.start('visible')
        if (inViewDatos) controlsDatos.start('visible')
        if (inViewTestimonios) controlsTestimonios.start('visible')
        if (inViewCTA) controlsCTA.start('visible')
    }, [
        inViewSobreNosotros,
        inViewServicios,
        inViewRastreo,
        inViewDatos,
        inViewTestimonios,
        inViewCTA,
        controlsSobreNosotros,
        controlsServicios,
        controlsRastreo,
        controlsDatos,
        controlsTestimonios,
        controlsCTA
    ])

    const fadeInUp = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
    }

    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.pageYOffset > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }


    const [numeroSeguimiento, setNumeroSeguimiento] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const trackingData = [
        { status: 'Paquete recibido en el almacén', date: '2024-11-01', completed: true },
        { status: 'En tránsito hacia el destino', date: '2024-11-03', completed: true },
        { status: 'Llegada a aduana de destino', date: '2024-11-04', completed: true },
        { status: 'Liberación de aduana', date: '2024-11-06', completed: false },
        { status: 'En ruta de entrega', date: '', completed: false },
    ];

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


            {/* Hero Section con Parallax */}
            <motion.section
                className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: 'url("/home.jpg")',
                    y: yPosAnim,
                    marginBottom: '-15px'
                }}
            >
                <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-10 w-full max-w-md bg-transparent">
                    <CalculadoraPaquetes />
                </div>
            </motion.section>

            {/* Servicios */}
            <motion.section
                ref={refServicios}
                initial="hidden"
                animate={controlsServicios}
                variants={fadeInUp}
                className="py-16"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center" style={{color: 'var(--color-primary)'}}>
                        Nuestros Servicios
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Ship,
                                title: 'Envío Internacional',
                                description: 'Envíos confiables y rápidos a destinos en todo el mundo.'
                            },
                            {
                                icon: MapPin,
                                title: 'Envíos a Venezuela',
                                description: 'Servicios especializados para envíos a Venezuela.'
                            },
                            {
                                icon: Package,
                                title: 'Casillero Internacional',
                                description: 'Soluciones de almacenamiento seguro para sus paquetes internacionales.'
                            },
                        ].map((servicio, index) => (
                            <Card3D key={index}>
                                <servicio.icon
                                    className="w-16 h-16 mb-4"
                                    style={{color: 'var(--color-secondary)'}}
                                />
                                <h3
                                    className="text-2xl font-semibold mb-2"
                                    style={{color: 'var(--color-secondary)'}}
                                >
                                    {servicio.title}
                                </h3>
                                <p
                                    className="text-tertiary"
                                    style={{color: 'var(--color-tertiary)'}}
                                >
                                    {servicio.description}
                                </p>
                            </Card3D>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Sobre Nosotros */}
            <motion.section
                ref={refSobreNosotros}
                initial="hidden"
                animate={controlsSobreNosotros}
                variants={fadeInUp}
                className="py-16 bg-cover bg-center text-left text-white relative"
                style={{
                    backgroundImage: 'url("/sobre.jpg")',
                    marginTop: '-1px'
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold mb-6 text-white">Rastrea tu paquete</h2>
                        <div className="max-w-2xl mx-auto">
                            <motion.div
                                whileHover={{scale: 1.02}}
                                className="flex items-center bg-white rounded-full overflow-hidden shadow-lg"
                            >
                                <input
                                    type="text"
                                    placeholder="Ingresa tu número de seguimiento"
                                    className="flex-grow px-6 py-4 text-lg text-black focus:outline-none"
                                    value={numeroSeguimiento}
                                    onChange={(e) => {
                                        // Filtrar el valor para que solo acepte números
                                        const value = e.target.value;
                                        if (/^\d*$/.test(value)) {
                                            setNumeroSeguimiento(value);
                                        }
                                    }}
                                    inputMode="numeric"
                                />


                                <motion.button
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    className="bg-primary text-white px-8 py-4 text-lg font-semibold transition-all"
                                    style={{backgroundColor: 'var(--color-primary)'}}
                                >
                                    <Search className="w-6 h-6"/>
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Datos Curiosos */}
            <motion.section
                ref={refDatos}
                initial="hidden"
                animate={controlsDatos}
                variants={fadeInUp}
                className="py-16"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center" style={{color: 'var(--color-primary)'}}>
                        Datos Curiosos sobre Envíos Internacionales
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Globe,
                                fact: 'Más del 90% del comercio mundial se realiza por mar',
                                number: 90
                            },
                            {
                                icon: Ship,
                                fact: 'El buque portacontenedores más grande puede transportar más de 24,000 contenedores',
                                number: 24000
                            },
                            {
                                icon: Package,
                                fact: 'El volumen global de paquetes supera los 130 mil millones anualmente',
                                number: 130
                            },
                            {
                                icon: MapPin,
                                fact: 'El transporte aéreo representa el 35% del comercio mundial por valor',
                                number: 35
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{scale: 1.05}}
                                className="bg-white p-6 rounded-lg shadow-lg text-center"
                            >
                                <item.icon
                                    className="w-16 h-16 mx-auto mb-4"
                                    style={{color: 'var(--color-secondary)'}}
                                />
                                <p
                                    className="text-4xl font-bold mb-2"
                                    style={{color: 'var(--color-primary)'}}
                                >
                                    <CountUp end={item.number}/>
                                    {item.number > 100 ? 'B+' : '%'}
                                </p>
                                <p
                                    className="text-tertiary"
                                    style={{color: 'var(--color-tertiary)'}}
                                >
                                    {item.fact}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Testimonios de Clientes */}
            <motion.section
                ref={refTestimonios}
                initial="hidden"
                animate={controlsTestimonios}
                variants={fadeInUp}
                className="py-16 bg-gray-100" // Reducido el padding
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center" style={{color: 'var(--color-primary)'}}>Lo que
                        Dicen Nuestros Clientes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Juan Pérez',
                                company: 'Soluciones Tecnológicas S.A.',
                                quote: 'Su servicio de envío internacional ha sido un cambio de juego para nuestro negocio. ¡Confiable y eficiente!'
                            },
                            {
                                name: 'María García',
                                company: 'Comerciantes Globales Ltda.',
                                quote: 'El sistema de seguimiento es de primera clase. Siempre sé dónde están mis paquetes, lo que me da tranquilidad.'
                            },
                            {
                                name: 'Carlos Rodríguez',
                                company: 'Importaciones Venezuela',
                                quote: 'Su servicio especializado para envíos a Venezuela ha hecho que nuestras operaciones sean mucho más fluidas.'
                            },
                        ].map((testimonio, index) => (
                            <motion.div
                                key={index}
                                whileHover={{scale: 1.05}}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <p className="text-lg mb-4 italic"
                                   style={{color: 'var(--color-tertiary)'}}>&ldquo;{testimonio.quote}&rdquo;</p>
                                <p className="font-semibold">{testimonio.name}</p>
                                <p className="text-sm"
                                   style={{color: 'var(--color-secondary)'}}>{testimonio.company}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Llamada a la Acción */}


            {/* Pie de Página */}
            <footer className="bg-tertiary text-white py-10" style={{backgroundColor: 'var(--color-tertiary)'}}>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <img src={logob} alt=""/>
                        </div>
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <h3 className="text-xl font-semibold mb-4">Ubicaciones</h3>
                            <b>Peru:</b>
                            <p>Av Perú 3013, SMP LIMA (PANET E.I.R.L)</p>
                            <b>Chile:</b>
                            <p>Cerro El Plomo 5931. Las Condes. Santiago (PANET CL SPA)</p>
                        </div>
                        <div className="w-full md:w-1/4">
                            <h3 className="text-xl font-semibold mb-4">Contactanos</h3>
                            <div className="row-auto space-x-4">
                                <b>Peru:</b>
                                <p>gerencia@paneteirl.com</p>
                                <b>Chile:</b>
                                <p>gerenciacl@paneteirl.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p>&copy; 2024 PANET EIRL & PANET CL SPA. Todos los derechos reservados. <Link to={'/terminos-condiciones'}> Terminos y Condicines </Link></p>
                    </div>
                </div>
            </footer>

            {/* Botón flotante de "volver arriba" */}
            <motion.button
                initial={{opacity: 0}}
                animate={{opacity: showScrollTop ? 1 : 0}}
                transition={{duration: 0.3}}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg"
                style={{backgroundColor: 'var(--color-primary)'}}
            >
                <ArrowUp className="w-6 h-6"/>
            </motion.button>
        </div>
    )
}