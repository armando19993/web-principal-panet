import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock } from 'lucide-react';

const TimelapseTracking = ({ trackingData }) => (
    <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Historial de Envío</h2>
        <ul className="space-y-4">
            {trackingData.map((stage, index) => (
                <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center space-x-4"
                >
                    {stage.completed ? (
                        <CheckCircle className="text-green-500" />
                    ) : (
                        <Clock className="text-gray-500" />
                    )}
                    <div>
                        <p className="text-lg font-semibold">{stage.status}</p>
                        <p className="text-sm text-gray-500">{stage.date}</p>
                    </div>
                </motion.li>
            ))}
        </ul>
    </div>
);

export default TimelapseTracking;
