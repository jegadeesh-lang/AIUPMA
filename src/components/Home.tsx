import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-400 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              India's uPVC Profile Industry is Under Threat.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-300 mb-8 font-light"
            >
              Chinese dumping. A policy loophole. Idle factories. Thousands of jobs at risk.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/crisis" 
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white font-bold rounded-md hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/20"
              >
                Read Our Demands <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-navy-900 transition-all"
              >
                About AIUPMA
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parliament Highlight Block */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-navy-900 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-orange"></div>
            
            <h2 className="text-brand-orange text-sm font-bold uppercase tracking-widest mb-6">
              Our Voice Has Reached Parliament
            </h2>
            
            <blockquote className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed mb-8">
              “I rise to draw urgent attention of Government to the surge in imports of finished UPVC profiles into India and its adverse impact on domestic manufacturers, particularly MSMEs... I urge the Government to immediately initiate appropriate safeguard measures.”
            </blockquote>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="text-white font-bold text-lg">— Shri K.E. Prakash</p>
                <p className="text-slate-400 text-sm">Hon’ble Member of Parliament, Erode Constituency</p>
                <p className="text-slate-500 text-xs mt-1">
                  Dravida Munnetra Kazhagam | Lok Sabha, 18th Session VII | Matter under Rule 377 | 18 March 2026
                </p>
              </div>
              
              <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 px-4 py-2 rounded-full border border-green-400/20">
                <CheckCircle2 size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Published on Digital Sansad — Official Parliamentary Record</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats / Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">The United Voice of India's uPVC Industry</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                AIUPMA — the united voice of India's uPVC profile manufacturers — is demanding urgent government action to protect Make in India and the livelihoods of lakhs of workers.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                We represent a critical sector that builds the windows of India, generates employment for thousands, and contributes to a greener, more energy-efficient built environment.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Founded', value: '2025' },
                { label: 'Headquarters', value: 'Coimbatore' },
                { label: 'Members', value: 'National' },
                { label: 'Sector', value: 'Manufacturing' },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-navy-900 text-xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
