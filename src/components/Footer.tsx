import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1 - About */}
          <div>
            <h3 className="text-lg font-bold mb-6">About AIUPMA</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              AIUPMA — the collective voice of India’s uPVC profile manufacturing industry. 
              Representing manufacturers, processors, and allied MSMEs across the nation.
            </p>
            <div className="mt-6">
              <span className="text-xs text-slate-500 uppercase tracking-widest">Reg. No. {CONTACT_INFO.regNo}</span>
            </div>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-400 hover:text-brand-orange text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-brand-orange shrink-0" size={18} />
                <span className="text-slate-400 text-sm">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-brand-orange shrink-0" size={18} />
                <div className="flex flex-col">
                  {CONTACT_INFO.phones.map(phone => (
                    <span key={phone} className="text-slate-400 text-sm">{phone}</span>
                  ))}
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-brand-orange shrink-0" size={18} />
                <span className="text-slate-400 text-sm">contact@aiupma.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} All India uPVC Profile Manufacturers Association (AIUPMA). All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
