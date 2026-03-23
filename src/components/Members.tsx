import { motion } from 'motion/react';
import { MEMBERS } from '../constants';
import { Building2, MapPin } from 'lucide-react';

export const Members = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-navy-900">Our Member Companies</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl">
            A united community of uPVC profile manufacturers across India.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-slate-700 leading-relaxed max-w-4xl">
            India’s uPVC profile manufacturing community — united under one voice. AIUPMA members span the full length and breadth of India, from Tamil Nadu and Telangana to Gujarat, Maharashtra, Rajasthan, Uttarakhand, and West Bengal.
          </p>
        </div>
      </section>

      {/* Members Table/Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden border border-slate-200 rounded-2xl shadow-sm">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-navy-900">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-widest">
                    Company
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-widest">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {MEMBERS.map((member, i) => (
                  <motion.tr 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.02 }}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Building2 className="text-brand-orange mr-3" size={18} />
                        <span className="text-sm font-bold text-navy-900">{member.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <MapPin className="text-slate-400 mr-3" size={18} />
                        <span className="text-sm text-slate-600">{member.location}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
                <tr>
                  <td colSpan={2} className="px-6 py-6 text-center bg-slate-50 italic text-slate-500 text-sm">
                    + Many more member companies across India
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
