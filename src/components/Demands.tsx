import { motion } from 'motion/react';
import { DEMANDS } from '../constants';

export const Demands = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-navy-900">Our Demands to the Government</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl">
            Correcting a structural policy anomaly and ensuring a level playing field.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl bg-navy-900 p-8 rounded-2xl text-white shadow-xl">
            <p className="text-lg leading-relaxed">
              AIUPMA is not asking for protection from competition. We are asking for the enforcement of India's own laws, the correction of a structural policy anomaly, and a level playing field — nothing more, nothing less.
            </p>
          </div>
        </div>
      </section>

      {/* Demands List */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {DEMANDS.map((demand, i) => (
              <motion.div 
                key={demand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row items-start bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="bg-brand-orange text-white text-3xl font-bold w-full md:w-24 h-24 flex items-center justify-center shrink-0">
                  {demand.id}
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{demand.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {demand.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
