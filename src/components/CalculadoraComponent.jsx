import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Calculator, Info } from 'lucide-react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertDescription } from "@/components/ui/alert";

const CalculadoraPaquetes = () => {
  const [formData, setFormData] = useState({
    peso: '',
    alto: '',
    ancho: '',
    largo: ''
  });
  const [resultado, setResultado] = useState(null);
  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const fields = ['peso', 'alto', 'ancho', 'largo'];
    
    fields.forEach(field => {
      const value = formData[field];
      if (!value) {
        newErrors[field] = 'Este campo es requerido';
      } else if (value <= 0) {
        newErrors[field] = 'El valor debe ser mayor a 0';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const calcularPrecio = () => {
    if (!validateForm()) return;

    setIsCalculating(true);
    
    // Simulamos un pequeño delay para mostrar la animación
    setTimeout(() => {
      const { peso, alto, ancho, largo } = formData;
      const pesoNumerico = parseFloat(peso);
      const pesoVolumetrico = (parseFloat(alto) * parseFloat(ancho) * parseFloat(largo)) / 5000;
      const pesoFinal = Math.max(pesoNumerico, pesoVolumetrico);
      const precioCalculado = pesoFinal * 10.50;

      setResultado({
        pesoFisico: pesoNumerico,
        pesoVolumetrico: pesoVolumetrico.toFixed(2),
        pesoFacturable: pesoFinal.toFixed(2),
        precio: precioCalculado.toFixed(2)
      });
      
      setIsCalculating(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Calculator className="h-8 w-8 text-blue-600" />
              <div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Calculadora de Envío
                </CardTitle>
                <CardDescription className="mt-1 text-gray-500">
                  Calcula el costo de tu envío basado en peso y dimensiones
                </CardDescription>
              </div>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    El precio final se calcula usando el mayor entre el peso físico
                    y el peso volumétrico (alto × ancho × largo ÷ 5000)
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Peso (kg)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="peso"
                  value={formData.peso}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    errors.peso ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Ej: 5"
                  min="0"
                  step="0.1"
                />
                {errors.peso && (
                  <p className="mt-1 text-sm text-red-500">{errors.peso}</p>
                )}
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Alto (cm)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="alto"
                  value={formData.alto}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    errors.alto ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Ej: 50"
                  min="0"
                  step="0.1"
                />
                {errors.alto && (
                  <p className="mt-1 text-sm text-red-500">{errors.alto}</p>
                )}
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Ancho (cm)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="ancho"
                  value={formData.ancho}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    errors.ancho ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Ej: 40"
                  min="0"
                  step="0.1"
                />
                {errors.ancho && (
                  <p className="mt-1 text-sm text-red-500">{errors.ancho}</p>
                )}
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Largo (cm)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="largo"
                  value={formData.largo}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                    errors.largo ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Ej: 30"
                  min="0"
                  step="0.1"
                />
                {errors.largo && (
                  <p className="mt-1 text-sm text-red-500">{errors.largo}</p>
                )}
              </div>
            </div>
          </div>

          <motion.button
            onClick={calcularPrecio}
            disabled={isCalculating}
            className="mt-6 w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isCalculating ? (
              <motion.div
                className="h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              <>
                <Package className="mr-2 h-5 w-5" />
                Calcular Precio
              </>
            )}
          </motion.button>

          {resultado && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 space-y-4"
            >
              <Alert className="bg-blue-50 border-blue-200">
                <AlertDescription>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Peso físico:</span>
                      <span className="font-medium">{resultado.pesoFisico} kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Peso volumétrico:</span>
                      <span className="font-medium">{resultado.pesoVolumetrico} kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Peso facturable:</span>
                      <span className="font-medium">{resultado.pesoFacturable} kg</span>
                    </div>
                    <div className="pt-2 border-t border-blue-200">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-blue-900">Precio total:</span>
                        <span className="text-2xl font-bold text-blue-600">
                          ${resultado.precio} USD
                        </span>
                      </div>
                    </div>
                  </div>
                </AlertDescription>
              </Alert>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CalculadoraPaquetes;