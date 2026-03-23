import { Home, Info, AlertTriangle, FileText, Users, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About Us', path: '/about', icon: Info },
  { name: 'The Crisis', path: '/crisis', icon: AlertTriangle },
  { name: 'Our Demands', path: '/demands', icon: FileText },
  { name: 'Members', path: '/members', icon: Users },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export const LEADERSHIP = [
  { name: 'Mr. Arokiaswamy', position: 'Founder President', company: 'Eagle Industries' },
  { name: 'Mr. Eniyan Shivam', position: 'President', company: 'Prominance' },
  { name: 'Mr. Sanjay', position: 'Vice President', company: 'Sudhakar UPVC' },
  { name: 'Mr. Vinod', position: 'Vice President', company: 'Ambicka' },
  { name: 'Mr. Sampath', position: 'Secretary', company: 'Simta Astrix' },
  { name: 'Mr. Govindasamy', position: 'Joint Secretary', company: 'Sarvesh Multiplast' },
  { name: 'Mr. Ramkumar', position: 'Joint Secretary', company: 'Aparna Group' },
  { name: 'Mr. Senthil', position: 'Joint Secretary', company: 'Alpine' },
  { name: 'Mr. Senthil Murugan', position: 'Treasurer', company: 'Intact UPVC' },
  { name: 'Mr. Niraj Shetty', position: 'Executive Member', company: 'Concord Eco-Build, Pune' },
];

export const CRISIS_PROBLEMS = [
  {
    id: 1,
    title: 'Predatory Pricing — The Impossible Math',
    description: 'Chinese finished uPVC profiles are being sold into India at prices that are lower than what it costs Indian manufacturers to simply buy raw materials. This is not a case of superior efficiency or better technology — it is the result of Chinese state subsidies and a policy gap that allows them to undercut our entire cost structure.'
  },
  {
    id: 2,
    title: 'The Duty Loophole — A Policy Gap Being Exploited',
    description: 'India has imposed Anti-Dumping Duty on key raw materials like PVC Resin and Titanium Dioxide when imported from China. However, finished uPVC profiles from China attract only Basic Customs Duty. This has created a loophole: Chinese exporters bypass Anti-Dumping Duty entirely by converting raw materials into finished profiles in China and shipping them to India.'
  },
  {
    id: 3,
    title: 'BIS Non-Compliance — A Silent Quality Crisis',
    description: 'A large proportion of Chinese uPVC profiles entering India do not comply with Indian BIS (Bureau of Indian Standards) quality norms. The problem is invisible at installation — these profiles look acceptable when fitted. But within a few years under Indian climatic conditions, they yellow, turn brittle, fade, and fail mechanically.'
  },
  {
    id: 4,
    title: 'Under-Invoicing — Revenue Loss to India',
    description: 'The prices declared at Indian ports for imported uPVC profiles are, in many cases, substantially lower than even global raw material benchmarks. This raises serious concerns of systematic under-valuation — resulting in significant loss of customs revenue to the Government of India.'
  },
  {
    id: 5,
    title: 'Idle Factories & MSME Collapse',
    description: 'India has invested significantly in uPVC profile manufacturing capacity. Yet today, the majority of this capacity sits idle — not because there is no demand, but because the market has been flooded by artificially cheap Chinese imports. Indian MSMEs are shutting down. New investments have stalled.'
  }
];

export const DEMANDS = [
  {
    id: '01',
    title: 'Anti-Dumping Investigation via DGTR',
    description: 'Initiation of a formal Anti-Dumping Investigation by the Directorate General of Trade Remedies on finished uPVC profile imports from China.'
  },
  {
    id: '02',
    title: 'Anti-Dumping / Safeguard Duty on Finished Profiles',
    description: 'Imposition of Anti-Dumping Duty or Safeguard Duty on finished uPVC profiles imported from China — closing the existing duty loophole that is being exploited.'
  },
  {
    id: '03',
    title: 'Mandatory BIS Compliance at Ports of Entry',
    description: 'No finished uPVC profile to be permitted entry into India without a valid BIS certification. Mandatory third-party quality testing at all ports of entry.'
  },
  {
    id: '04',
    title: 'Minimum Import Price (MIP)',
    description: 'Establishment of a Minimum Import Price floor linked to BIS quality standards — to prevent predatory price dumping into the Indian market.'
  },
  {
    id: '05',
    title: 'Harmonise the Duty Structure',
    description: 'Review and correction of the inverted duty structure so that Indian manufacturers are not penalised for complying with their own country\'s laws and quality standards.'
  }
];

export const MEMBERS = [
  { name: 'Alpine', location: 'Palladam, Tamil Nadu' },
  { name: 'AMD', location: 'Tirupur, Tamil Nadu' },
  { name: 'Ambika Windows', location: 'Sriperambathur, Tamil Nadu' },
  { name: 'Aparna Group', location: 'Hyderabad, Telangana' },
  { name: 'Concord Eco-Build', location: 'Pune, Maharashtra' },
  { name: 'Eagle Industries', location: 'Coimbatore, Tamil Nadu' },
  { name: 'Encraft', location: 'Dehradun, Uttarakhand' },
  { name: 'Fenesta', location: 'Kota, Rajasthan' },
  { name: 'Intact UPVC', location: 'Perundurai, Tamil Nadu' },
  { name: 'Prominance', location: 'Coimbatore, Tamil Nadu' },
  { name: 'Sarvesh Multiplast', location: 'Perundurai, Tamil Nadu' },
  { name: 'Simta', location: 'Coimbatore, Tamil Nadu' },
  { name: 'Sudhakar UPVC', location: 'Nellore, Andhra Pradesh' },
];

export const CONTACT_INFO = {
  association: 'All India uPVC Profile Manufacturers Association (AIUPMA)',
  phones: ['+91 73970 16208', '+91 73975 46208'],
  address: '22MQ+886, Airport Rd, Peelamedu, Alagu Nagar, Civil Aerodrome Post, Coimbatore, Tamil Nadu – 641014',
  regNo: '202501110291900'
};
