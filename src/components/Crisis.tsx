import { motion } from 'motion/react';
import { CRISIS_PROBLEMS } from '../constants';

export const Crisis = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-red-50 py-16 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-red-900">The Crisis Facing India's uPVC Industry</h1>
          <p className="mt-4 text-xl text-red-700 max-w-3xl">
            A structural policy gap being systematically exploited by large-scale, state-subsidized Chinese imports.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <p className="text-lg text-slate-700 leading-relaxed">
              India's uPVC profile manufacturing industry is facing an existential crisis. The cause is not a market failure — it is a structural policy gap that is being systematically exploited by large-scale, state-subsidized Chinese imports. This page explains the crisis plainly.
            </p>
          </div>
        </div>
      </section>

      {/* Problems List */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {CRISIS_PROBLEMS.map((problem, i) => (
              <motion.div 
                key={problem.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl border border-slate-200 shadow-sm"
              >
                <div className="bg-navy-900 px-6 py-4">
                  <h3 className="text-white font-bold text-lg">
                    {problem.id}. {problem.title}
                  </h3>
                </div>
                <div className="p-8 bg-white">
                  <p className="text-slate-700 text-lg leading-relaxed">
                    {problem.description}
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
