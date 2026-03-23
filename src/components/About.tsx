import { motion } from 'motion/react';
import { LEADERSHIP } from '../constants';

export const About = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-navy-900">About AIUPMA</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl">
            The collective, unified voice of an industry that builds the windows of India.
          </p>
        </div>
      </div>

      {/* Intro Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              The All India uPVC Profile Manufacturers Association (AIUPMA) is a formally registered national industry body representing manufacturers, processors, and allied MSMEs across India engaged in the production of uPVC window and door profiles — the extruded plastic sections used to make the windows and doors of homes, offices, and buildings.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-12">
              Founded in 2025 and headquartered in Coimbatore, Tamil Nadu — India's largest uPVC manufacturing cluster — AIUPMA is the collective, unified voice of an industry that builds the windows of India, generates employment for thousands, and contributes to a greener, more energy-efficient built environment.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-8">Quick Facts</h2>
            <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm">
              <table className="min-w-full divide-y divide-slate-200">
                <tbody className="bg-white divide-y divide-slate-200">
                  {[
                    ['Registered Name', 'All India uPVC Profile Manufacturers Association'],
                    ['Registration No.', '202501110291900'],
                    ['Founded', '2025'],
                    ['Headquarters', 'Coimbatore, Tamil Nadu'],
                    ['Sector', 'uPVC Window & Door Profile Manufacturing'],
                    ['Membership', 'Companies across all major regions of India'],
                    ['Mission', 'Fair trade policy, quality standards enforcement, and a level playing field for Indian manufacturers'],
                  ].map(([label, value]) => (
                    <tr key={label}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-navy-900 bg-slate-50 w-1/3">
                        {label}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {LEADERSHIP.map((leader, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-bold text-navy-900 mb-1">{leader.name}</h3>
                <p className="text-brand-orange text-sm font-medium italic mb-2">{leader.position}</p>
                <p className="text-slate-500 text-sm">{leader.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
