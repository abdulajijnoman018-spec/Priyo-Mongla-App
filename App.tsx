/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bell, 
  MapPin, 
  CloudSun, 
  ChevronRight, 
  Search, 
  Filter,
  Star,
  Clock,
  ArrowRight,
  Phone,
  Settings,
  LogOut,
  Moon,
  Sun,
  Globe,
  AlertTriangle,
  Shield,
  Flame,
  Stethoscope,
  Building2,
  Zap,
  LayoutGrid,
  User,
  Briefcase,
  Droplets,
  Plus,
  Trash2,
  Edit2,
  MessageSquare,
  ChevronLeft,
  Calendar as CalendarIcon,
  CheckCircle2,
  Info,
  Smartphone,
  Monitor,
  Wifi,
  HardHat,
  TrainFront,
  Ship,
  Bus,
  Truck,
  Hospital,
  Zap as ElectricityIcon,
  GraduationCap,
  FileText,
  SearchCode,
  Tag,
  ShoppingBag,
  Store,
  ShieldCheck,
  Map as MapIcon,
  X,
  Camera,
  Heart,
  LocateFixed,
  Send,
  MoreVertical,
  ExternalLink,
  Package,
  Wrench,
  ChevronDown,
  Building,
  Umbrella,
  Waves,
  History,
  Trees,
  CheckCircle,
  Clock3,
  CalendarDays,
  Gem,
  Menu,
  HeartPulse,
  Landmark
} from 'lucide-react';

import { 
  NAVIGATION_ITEMS, 
  QUICK_ACTIONS, 
  SERVICES 
} from './constants';

// --- Types ---
type Screen = 'splash' | 'onboarding' | 'auth' | 'home' | 'explore' | 'tourism' | 'restaurants' | 'emergency' | 'profile' | 'services_grid' | 'design_system' | 'blood_donation' | 'transport' | 'courier' | 'technician' | 'shopping' | 'task_tracker';

// --- Shared Helper Components ---
const ScreenHeader = ({ title, onBack, subtitle, action }: { title: string, onBack?: () => void, subtitle?: string, action?: React.ReactNode }) => (
  <header className="px-6 pt-8 pb-4 flex items-start justify-between bg-white dark:bg-slate-950 sticky top-0 z-40">
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-1">
        {onBack && (
          <button onClick={onBack} className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 active:scale-90 transition-transform">
            <ChevronLeft size={20} />
          </button>
        )}
        <h1 className="text-3xl font-display font-black text-slate-900 dark:text-white leading-tight">{title}</h1>
      </div>
      {subtitle && <p className="text-xs text-slate-500 font-sans font-medium ml-1 flex items-center gap-1">
        {subtitle}
      </p>}
    </div>
    {action && <div className="pt-1">{action}</div>}
  </header>
);

const Badge = ({ children, variant = 'primary', className = '' }: { children: React.ReactNode, variant?: 'primary' | 'secondary' | 'accent' | 'danger' | 'success' | 'outline', className?: string }) => {
  const themes = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    accent: 'bg-accent/10 text-accent',
    danger: 'bg-red-50 text-red-600',
    success: 'bg-emerald-50 text-emerald-600',
    outline: 'border border-slate-200 text-slate-500'
  };
  return (
    <span className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider ${themes[variant as keyof typeof themes]} ${className}`}>
      {children}
    </span>
  );
};

const ActionButton = ({ icon: Icon, label, onClick, variant = 'primary', className = '' }: { icon: any, label: string, onClick?: () => void, variant?: 'primary' | 'ghost', className?: string }) => (
  <button 
    onClick={onClick}
    className={`flex-1 h-12 rounded-2xl flex items-center justify-center gap-2 font-display font-bold text-xs transition-all active:scale-95 ${
      variant === 'primary' 
        ? 'bg-primary text-white shadow-lg shadow-primary/20' 
        : 'glass-card dark:bg-slate-800 text-slate-600 dark:text-slate-300'
    } ${className}`}
  >
    <Icon size={18} />
    {label}
  </button>
);
function BloodDonationScreen({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<'donor' | 'needs'>('donor');
  const [selectedGroup, setSelectedGroup] = useState('All');
  
  
  
  const donors = [
    { name: "Rafiqul Islam", group: "A+", location: "Mongla, Ward 02", lastDonation: "2 months ago", phone: "017XX-XXXXXX" },
    { name: "Sumiya Akter", group: "O-", location: "Kolatola, Mongla", lastDonation: "6 months ago", phone: "018XX-XXXXXX" },
    { name: "Tanvir Ahmed", group: "B+", location: "Port Area, Mongla", lastDonation: "1 year ago", phone: "019XX-XXXXXX" },
    { name: "Mehedi Hasan", group: "A+", location: "Bus Stand, Mongla", lastDonation: "4 months ago", phone: "016XX-XXXXXX" },
    { name: "Asma Begum", group: "AB-", location: "Kheyaghat, Mongla", lastDonation: "8 months ago", phone: "013XX-XXXXXX" },
  ];

  const requests = [
    { patient: "Abdur Rahim", group: "AB+", hospital: "Mongla Central Hospital", urgency: "Critical", contact: "Niru Mia", phone: "015XX-XXXXXX", date: "Today" },
    { patient: "Jahanara Begum", group: "O+", hospital: "Upazila Health Complex", urgency: "Normal", contact: "Asif", phone: "013XX-XXXXXX", date: "Tomorrow" },
    { patient: "Kamal Uddin", group: "B-", hospital: "City Vision Clinic", urgency: "Critical", contact: "Robin", phone: "017XX-XXXXXX", date: "Today" },
  ];

  const filteredDonors = donors.filter(d => selectedGroup === 'All' || d.group === selectedGroup);
  const filteredRequests = requests.filter(r => selectedGroup === 'All' || r.group === selectedGroup);

  const bloodGroups = ['All', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  return (
    <div className="flex flex-col pb-32">
      <ScreenHeader 
        title="Blood Donation" 
        subtitle="Save a life by donating blood" 
        onBack={onBack}
        action={<Droplets className="text-red-500 animate-pulse" size={28} />}
      />

      <div className="px-6 mb-4 mt-2">
        <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl flex gap-1 shadow-sm border border-slate-100 dark:border-slate-800">
          <button 
            onClick={() => { setActiveTab('donor'); setSelectedGroup('All'); }}
            className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${activeTab === 'donor' ? 'bg-primary text-white shadow-md' : 'text-slate-400'}`}
          >
            Donors
          </button>
          <button 
            onClick={() => { setActiveTab('needs'); setSelectedGroup('All'); }}
            className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${activeTab === 'needs' ? 'bg-primary text-white shadow-md' : 'text-slate-400'}`}
          >
            Needs Blood
          </button>
        </div>
      </div>

      <div className="px-6 space-y-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-2">
          {bloodGroups.map(g => (
            <button 
              key={g} 
              onClick={() => setSelectedGroup(g)}
              className={`px-5 py-2 rounded-full text-[10px] font-black uppercase whitespace-nowrap transition-all ${selectedGroup === g ? 'bg-rose-500 text-white shadow-lg' : 'glass-card dark:bg-slate-900 text-slate-400'}`}
            >
              {g}
            </button>
          ))}
        </div>

        {activeTab === 'donor' ? (
          <>
            

            

            {filteredDonors.length > 0 ? filteredDonors.map((donor, i) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={i} 
                className="glass-card dark:bg-slate-900 rounded-[32px] p-6 shadow-xl border-none"
              >
                <div className="flex gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden relative border-2 border-white dark:border-slate-800 shadow-md">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${donor.name}`} className="w-full h-full object-cover" />
                    <div className="absolute top-0 right-0 p-1">
                      <div className="w-6 h-6 bg-red-600 rounded-lg flex items-center justify-center text-[10px] font-black text-white shadow-sm ring-2 ring-white">
                        {donor.group}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-display font-black text-slate-800 dark:text-slate-100">{donor.name}</h3>
                      <button className="text-slate-300 hover:text-slate-500"><MoreVertical size={16} /></button>
                    </div>
                    <p className="text-sm font-sans font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-2">
                       <MapPin size={12} className="text-primary" /> {donor.location}
                    </p>
                    <Badge variant="outline">Last Donated: {donor.lastDonation}</Badge>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ActionButton icon={Phone} label="Call Now" onClick={() => {}} />
                  <ActionButton icon={MessageSquare} label="Message" variant="ghost" onClick={() => {}} />
                </div>
              </motion.div>
            )) : (
              <div className="py-20 flex flex-col items-center opacity-40">
                <Heart size={48} className="mb-4 text-red-500" />
                <p className="font-sans font-bold">No donors found for group {selectedGroup}</p>
              </div>
            )}
          </>
        ) : (
          <>
            

            

            {filteredRequests.length > 0 ? filteredRequests.map((req, i) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                key={i} 
                className="glass-card dark:bg-slate-900 rounded-[32px] p-6 shadow-xl border-none relative overflow-hidden"
              >
                {req.urgency === 'Critical' && <div className="absolute top-0 left-0 w-2 h-full bg-red-600" />}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <Badge variant={req.urgency === 'Critical' ? 'danger' : 'success'} className="mb-2">{req.urgency} Urgency</Badge>
                    <h3 className="text-xl font-display font-black text-slate-800 dark:text-slate-100">Need {req.group} Blood</h3>
                  </div>
                  <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-xl font-black text-white shadow-lg">
                    {req.group}
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                   <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                     <Building2 size={16} className="text-primary" />
                     <p className="text-sm font-sans font-medium">{req.hospital}</p>
                   </div>
                   <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                     <CalendarIcon size={16} className="text-primary" />
                     <p className="text-sm font-sans font-medium">Needed: {req.date}</p>
                   </div>
                   <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                     <User size={16} className="text-primary" />
                     <p className="text-sm font-sans font-medium">Patient: {req.patient} • Ref: {req.contact}</p>
                   </div>
                </div>
                <div className="flex gap-3">
                  <ActionButton icon={Phone} label="Call Contact" onClick={() => {}} />
                  <ActionButton icon={MessageSquare} label="Send Text" variant="ghost" onClick={() => {}} />
                </div>
              </motion.div>
            )) : (
              <div className="py-20 flex flex-col items-center opacity-40">
                <HeartPulse size={48} className="mb-4 text-primary" />
                <p className="font-sans font-bold">No requests found for group {selectedGroup}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function CourierScreen({ onBack }: { onBack: () => void }) {
  const couriers = [
    { name: "SA Paribahan", branch: "Main Road, Mongla", phone: "017XX-XXXXXX", hours: "09:00 AM - 08:00 PM" },
    { name: "Sundarban Courier", branch: "Port Area, Mongla", phone: "018XX-XXXXXX", hours: "08:30 AM - 09:00 PM" },
    { name: "Korotoa Courier", branch: "Bus Stand, Mongla", phone: "019XX-XXXXXX", hours: "09:00 AM - 07:00 PM" },
  ];

  return (
    <div className="flex flex-col pb-32">
      <ScreenHeader title="Courier" subtitle="Reliable delivery services" onBack={onBack} action={<Truck className="text-primary" size={28} />} />
      <div className="px-6 space-y-4 mt-4">
        {couriers.map((c, i) => (
          <div key={i} className="glass-card dark:bg-slate-900 rounded-[32px] p-6 shadow-xl border-none">
            <div className="flex gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
                <Package size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-display font-black text-slate-800 dark:text-white leading-tight">{c.name}</h3>
                <p className="text-xs font-sans font-medium text-slate-500 mt-1">{c.branch}</p>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 mb-6">
               <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400 font-bold">Hours</span>
                  <span className="text-xs font-black text-slate-800 dark:text-slate-200">{c.hours}</span>
               </div>
               <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-bold">Service</span>
                  <Badge variant="success">Express Delivery</Badge>
               </div>
            </div>
            <div className="flex gap-3">
              <ActionButton icon={Phone} label="Call Branch" />
              <ActionButton icon={MapPin} label="Location" variant="ghost" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


function TechnicianScreen({ onBack }: { onBack: () => void }) {
  const [activeCat, setActiveCat] = useState('All');
  const techs = [
    { name: "Kamrul Hasan", cat: "Electrician", phone: "017XX-XXXXXX", exp: "8 Years", available: true },
    { name: "Abul Bashar", cat: "Plumber", phone: "018XX-XXXXXX", exp: "5 Years", available: true },
    { name: "Sajid Ahmed", cat: "AC Technician", phone: "019XX-XXXXXX", exp: "12 Years", available: false },
    { name: "Ripon Mia", cat: "Computer", phone: "013XX-XXXXXX", exp: "4 Years", available: true },
  ];

  return (
    <div className="flex flex-col pb-32">
      <ScreenHeader title="Technician" subtitle="Trusted local experts" onBack={onBack} action={<Wrench className="text-primary" size={28} />} />
      
      <div className="px-6 flex gap-3 overflow-x-auto no-scrollbar mb-4 mt-2">
        {['All', 'Electrician', 'Plumber', 'AC Tech', 'Computer', 'Mobile'].map(c => (
          <button 
            key={c}
            onClick={() => setActiveCat(c)}
            className={`h-11 px-5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${activeCat === c ? 'bg-primary text-white shadow-lg' : 'glass-card dark:bg-slate-900 text-slate-400'}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="px-6 space-y-4">
        {techs.filter(t => activeCat === 'All' || t.cat.includes(activeCat)).map((t, i) => (
          <div key={i} className="glass-card dark:bg-slate-900 rounded-[32px] p-5 shadow-lg border-none flex items-center gap-4">
             <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md">
               <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.name}`} className="w-full h-full object-cover" />
             </div>
             <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                   <h4 className="font-display font-black text-slate-800 dark:text-white">{t.name}</h4>
                   <Badge variant={t.available ? 'success' : 'danger'}>{t.available ? 'Available' : 'Busy'}</Badge>
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.cat} • {t.exp} Exp</p>
                <div className="flex gap-2 mt-3">
                   <button className="flex-1 h-9 bg-primary/10 text-primary rounded-lg text-[10px] font-black uppercase">Call</button>
                   <button className="flex-1 h-9 glass-card dark:bg-slate-800 rounded-lg text-[10px] font-black uppercase text-slate-500">Details</button>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}


function ShoppingScreen({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<'new' | 'used'>('new');
  const products = [
    { title: "Nokia G42 5G", price: "৳18,500", loc: "Mongla Port", cat: "Mobile", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?fit=crop&w=400" },
    { title: "Samsung Refrigerator", price: "৳45,000", loc: "Ward 06", cat: "Home Appliance", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?fit=crop&w=400" },
  ];

  return (
    <div className="flex flex-col pb-32">
      <ScreenHeader title="Shopping" subtitle="Local marketplace & deals" onBack={onBack} action={<ShoppingBag className="text-primary" size={28} />} />
      
      <div className="px-6 mb-4 mt-2">
        <div className="bg-white dark:bg-slate-900 p-1.5 rounded-2xl flex gap-1 shadow-sm border border-slate-100 dark:border-slate-800">
          <button 
            onClick={() => setActiveTab('new')}
            className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${activeTab === 'new' ? 'bg-primary text-white shadow-md' : 'text-slate-400'}`}
          >
            New Products
          </button>
          <button 
            onClick={() => setActiveTab('used')}
            className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${activeTab === 'used' ? 'bg-primary text-white shadow-md' : 'text-slate-400'}`}
          >
            Used Items
          </button>
        </div>
      </div>

      <div className="px-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-display font-bold text-slate-800 dark:text-white">Featured Items</h3>
          
        </div>

        <div className="grid grid-cols-2 gap-4">
           {products.map((p, i) => (
             <div key={i} className="glass-card dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg border-none flex flex-col">
                <div className="h-32 relative">
                   <img src={p.img} className="w-full h-full object-cover" />
                   <div className="absolute top-2 right-2">
                      <button className="w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-400">
                        <Heart size={14} />
                      </button>
                   </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                   <p className="text-[9px] font-black text-primary uppercase mb-1">{p.cat}</p>
                   <h4 className="text-xs font-display font-black text-slate-800 dark:text-white mb-2 line-clamp-1">{p.title}</h4>
                   <p className="text-sm font-display font-black text-slate-900 dark:text-emerald-400 mb-3">{p.price}</p>
                   <div className="mt-auto space-y-2">
                     <button className="w-full h-8 bg-primary text-white rounded-lg text-[9px] font-black uppercase tracking-wider">Buy Now</button>
                     <button className="w-full h-8 bg-slate-50 dark:bg-slate-800 text-slate-500 rounded-lg text-[9px] font-black uppercase tracking-wider">Message</button>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}


function TransportScreen({ onBack }: { onBack: () => void }) {
  const [activeCat, setActiveCat] = useState('Bus');
  const transportData = {
    'Bus': [
      { name: "Eagle Express", route: "Mongla ⇄ Dhaka", schedule: "08:00 AM, 10:30 PM", price: "৳800", phone: "01711-XXXXXX" },
      { name: "Hanif Enterprise", route: "Mongla ⇄ Dhaka", schedule: "09:00 AM, 09:30 PM", price: "৳850", phone: "01712-XXXXXX" },
    ],
    'Launch': [
      { name: "MV Mongla King", route: "Mongla ⇄ Dhaka", schedule: "06:00 PM (Direct)", price: "৳1500 (Cabin)", phone: "01713-XXXXXX" },
    ]
  };

  return (
    <div className="flex flex-col pb-32">
      <ScreenHeader 
        title="Transport" 
        subtitle="Commute in & out of Mongla" 
        onBack={onBack}
        action={<Bus className="text-primary" size={28} />}
      />

      <div className="px-6 flex gap-3 overflow-x-auto no-scrollbar mb-4 mt-2">
        {['Bus', 'Launch', 'Ferry', 'Train', 'Local'].map(c => (
          <button 
            key={c}
            onClick={() => setActiveCat(c)}
            className={`h-12 px-6 rounded-2xl text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${activeCat === c ? 'bg-primary text-white shadow-lg' : 'glass-card dark:bg-slate-900 text-slate-400'}`}
          >
            {c === 'Train' ? <TrainFront size={14} className="inline mr-2" /> : 
             c === 'Launch' ? <Ship size={14} className="inline mr-2" /> : null}
            {c}
          </button>
        ))}
      </div>

      <div className="px-6 space-y-6">
        {(transportData[activeCat as keyof typeof transportData] || []).map((t, i) => (
          <div key={i} className="glass-card dark:bg-slate-900 rounded-[32px] p-6 shadow-xl border-none">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-display font-black text-slate-800 dark:text-white leading-tight">{t.name}</h3>
                <div className="flex items-center gap-1.5 mt-1">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Active Schedule</p>
                </div>
              </div>
              <Badge variant="accent">{t.price}</Badge>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 mb-6 space-y-3">
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <MapIcon size={14} />
                    <span className="text-xs font-bold font-sans">Route</span>
                 </div>
                 <span className="text-xs font-black text-slate-900 dark:text-slate-200">{t.route}</span>
               </div>
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                    <Clock size={14} />
                    <span className="text-xs font-bold font-sans">Schedule</span>
                 </div>
                 <span className="text-xs font-black text-slate-900 dark:text-slate-200">{t.schedule}</span>
               </div>
            </div>

            <div className="flex gap-3">
              <ActionButton icon={Phone} label="Contact Counter" onClick={() => {}} />
              <ActionButton icon={MapPin} label="View Counter" variant="ghost" onClick={() => {}} />
            </div>
          </div>
        ))}

        {!(transportData[activeCat as keyof typeof transportData]) && (
          <div className="py-20 flex flex-col items-center opacity-40">
            <Bus size={48} className="mb-4" />
            <p className="font-sans font-bold">No {activeCat} data available</p>
          </div>
        )}
      </div>
    </div>
  );
}


export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // --- Effects ---
  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('home');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  // --- Theme Toggle ---
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // --- Renderers ---
  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash': return <SplashScreen />;
      case 'home': return <HomeScreen onNavigate={setCurrentScreen} />;
      case 'explore': return <ExploreScreen />;
      case 'tourism': return <TourismScreen onBack={() => setCurrentScreen('home')} />;
      case 'restaurants': return <RestaurantsScreen onBack={() => setCurrentScreen('home')} />;
      case 'emergency': return <EmergencyScreen onBack={() => setCurrentScreen('home')} />;
      case 'blood_donation': return <BloodDonationScreen onBack={() => setCurrentScreen('home')} />;
      case 'transport': return <TransportScreen onBack={() => setCurrentScreen('home')} />;
      case 'courier': return <CourierScreen onBack={() => setCurrentScreen('home')} />;
      case 'technician': return <TechnicianScreen onBack={() => setCurrentScreen('home')} />;
      case 'shopping': return <ShoppingScreen onBack={() => setCurrentScreen('home')} />;
      case 'task_tracker': return <TaskTrackerScreen onBack={() => setCurrentScreen('home')} />;
      case 'profile': return <ProfileScreen toggleTheme={toggleTheme} isDarkMode={isDarkMode} onDesignSystem={() => setCurrentScreen('design_system')} />;
      case 'services_grid': return <ServicesGridScreen onNavigate={setCurrentScreen} />;
      case 'design_system': return <DesignSystemScreen onBack={() => setCurrentScreen('profile')} />;
      default: return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className={`min-h-screen w-full flex justify-center bg-slate-background selection:bg-primary/30 ${isDarkMode ? 'dark' : ''}`}>
      {/* Mobile Frame Simulation with Notch */}
      <div className={`relative w-full max-w-[440px] min-h-[90vh] my-4 rounded-4xl overflow-hidden ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-background text-text'} shadow-[0_40px_100px_-20px_rgba(15,23,42,0.3)] border-[8px] border-slate-ink`}>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-slate-ink rounded-b-3xl z-[100] flex items-center justify-center">
           <div className="w-16 h-1.5 bg-slate-800 rounded-full" />
        </div>
        
        <div className="h-full overflow-y-auto no-scrollbar pt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col min-h-full w-full"
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Global Bottom Navigation (Visible after Splash) */}
        {currentScreen !== 'splash' && (
          <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] h-18 glass-card rounded-3xl flex items-center justify-around px-2 z-50 shadow-xl border border-white/30 dark:bg-slate-900/80 dark:border-slate-700/50">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentScreen(item.id as Screen)}
                className={`flex flex-col items-center justify-center p-2 rounded-2xl transition-all duration-300 ${
                  currentScreen === item.id 
                    ? 'text-primary scale-110 drop-shadow-md' 
                    : 'text-slate-400 hover:text-slate-600 dark:text-slate-500'
                }`}
              >
                <item.icon size={24} strokeWidth={currentScreen === item.id ? 2.5 : 2} />
                <span className="text-[10px] mt-1 font-medium font-sans">{item.label}</span>
              </button>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}

// --- Sub-Screens ---

function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-32 h-32 bg-white rounded-[40px] flex items-center justify-center shadow-2xl mb-8 overflow-hidden"
      >
        <span className="text-primary font-display font-bold text-5xl">PM</span>
      </motion.div>
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-white text-3xl font-display font-bold tracking-tight mb-2"
      >
        Priyo Mongla
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-white/70 font-sans text-sm tracking-widest uppercase"
      >
        Smart City Ecosystem
      </motion.p>
      
      <div className="absolute bottom-12 text-white/50 text-xs font-sans">
        আমার শহর , আমার হাতে
      </div>
    </div>
  );
}

function OnboardingScreen({ onComplete, onNext, step }: { onComplete: () => void, onNext: () => void, step: number }) {
  const steps = [
    {
      title: "Explore Mongla",
      titleBn: "মোংলা ঘুরে দেখুন",
      desc: "Discover the best tourist spots, history, and natural beauty of our river port city.",
      img: "https://images.unsplash.com/photo-1596422846543-75c6fc183f27?auto=format&fit=crop&q=80&w=800",
      color: "from-teal-500/20 to-transparent"
    },
    {
      title: "Smart Local Services",
      titleBn: "স্মার্ট নাগরিক সেবা",
      desc: "Access government services, emergency support, and local utility bills with ease.",
      img: "https://images.unsplash.com/photo-1541873676946-84090e960333?auto=format&fit=crop&q=80&w=800",
       color: "from-blue-500/20 to-transparent"
    },
    {
      title: "Everything in One App",
      titleBn: "সবকিছু এক অ্যাপে",
      desc: "Find jobs, book hotels, order food, and stay connected with the Mongla community.",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
       color: "from-amber-500/20 to-transparent"
    }
  ];

  const currentStep = steps[step];

  return (
    <div className="flex flex-col min-h-screen relative bg-slate-50 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-b ${currentStep.color} pointer-events-none`} />
      <div className="flex-1 flex flex-col items-center justify-center px-10 relative">
        <motion.img 
          key={step}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          src={currentStep.img} 
          className="w-full aspect-square object-cover rounded-[40px] shadow-2xl mb-12"
        />
        <motion.div
           key={step + 'txt'}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center"
        >
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-2 leading-tight">{currentStep.title}</h2>
          <h3 className="text-xl font-display font-medium text-primary mb-6 opacity-80">{currentStep.titleBn}</h3>
          <p className="text-slate-500 font-sans leading-relaxed px-2">{currentStep.desc}</p>
        </motion.div>
      </div>
      
      <div className="px-10 pb-16 flex flex-col items-center">
        <div className="flex gap-2 mb-10">
          {steps.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-primary' : 'w-2 bg-slate-300'}`} />
          ))}
        </div>
        
        <button 
          onClick={step === steps.length - 1 ? onComplete : onNext}
          className="w-full h-16 bg-primary text-white rounded-3xl font-display font-bold text-lg shadow-lg flex items-center justify-center gap-2 group active:scale-95 transition-transform"
        >
          {step === steps.length - 1 ? "Get Started" : "Continue"}
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

function AuthScreen({ onLogin }: { onLogin: () => void }) {
  const [phone, setPhone] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-3">Welcome to</h1>
        <h2 className="text-5xl font-display font-bold text-primary">Priyo Mongla</h2>
      </div>

      <div className="flex-1">
        <div className="glass-card rounded-3xl p-6 mb-8 shadow-xl border border-white">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 ml-2">Phone Number</label>
          <div className="flex items-center bg-slate-100 rounded-2xl p-4 mb-4 focus-within:ring-2 ring-primary/20 transition-all">
            <span className="text-slate-500 font-bold mr-3">+88</span>
            <input 
              type="tel" 
              placeholder="01X XXXX XXXX" 
              className="bg-transparent flex-1 outline-none font-sans font-bold text-lg text-slate-800"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button 
            disabled={phone.length < 10}
            onClick={() => setIsOtpSent(true)}
            className="w-full h-14 bg-primary text-white rounded-2xl font-bold font-display disabled:opacity-50 transition-all active:scale-95"
          >
            {isOtpSent ? "Resend OTP" : "Send Verification Code"}
          </button>
        </div>

        {isOtpSent && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-3xl p-6 shadow-xl border border-white"
          >
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 ml-2">Enter OTP</label>
            <div className="flex justify-between gap-2 mb-6">
              {[1, 2, 3, 4].map(i => (
                <input 
                  key={i}
                  type="text" 
                  maxLength={1}
                  className="w-14 h-14 bg-slate-100 rounded-xl text-center font-display font-bold text-2xl outline-none focus:ring-2 ring-primary/20"
                />
              ))}
            </div>
            <button 
              onClick={onLogin}
              className="w-full h-14 bg-secondary text-white rounded-2xl font-bold font-display shadow-lg"
            >
              Verify & Login
            </button>
          </motion.div>
        )}
      </div>

      <div className="text-center">
        <p className="text-slate-400 text-sm mb-6">Or continue with</p>
        <div className="flex justify-center gap-4">
          <button className="w-16 h-16 rounded-full glass-card flex items-center justify-center shadow-lg hover:bg-white transition-colors">
             <Globe size={28} className="text-blue-600" />
          </button>
          <button className="w-16 h-16 rounded-full glass-card flex items-center justify-center shadow-lg hover:bg-white transition-colors">
             <Star size={28} className="text-amber-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

function HomeScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  return (
    <div className="flex flex-col pb-32">
      {/* Header */}
      <header className="px-6 pt-8 pb-6 bg-white dark:bg-slate-950 sticky top-0 z-40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-2xl font-display font-black text-slate-900 dark:text-white">Assalamu Alaikum</h1>
            <p className="label-caps">Welcome to Priyo Mongla</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="w-10 h-10 rounded-full glass-card flex items-center justify-center dark:bg-slate-900 border-none shadow-sm">
            <Bell size={20} className="text-slate-600 dark:text-slate-300" />
          </button>
          <button 
             onClick={() => onNavigate('profile')}
             className="w-10 h-10 rounded-full glass-card flex items-center justify-center dark:bg-slate-900 border-none shadow-sm"
          >
            <Settings size={20} className="text-slate-600 dark:text-slate-300" />
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="px-6 mb-4">
        <div className="relative overflow-hidden rounded-3xl h-48 group shadow-2xl">
          <img src="https://images.unsplash.com/photo-1585250485966-2679c6d48227?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/20 to-transparent p-6 flex flex-col justify-end">
            <span className="bg-accent text-white text-[10px] font-black px-2 py-1 rounded-full w-fit mb-2 uppercase tracking-widest">Trending Destination</span>
            <h2 className="text-2xl font-display font-black text-white leading-tight">Explore the Sundarbans</h2>
            <p className="text-white/70 text-xs mt-1 font-sans">The gateway to world's largest mangrove forest.</p>
          </div>
        </div>
      </section>

      {/* Weather & Location */}
      <section className="px-6 mb-4 flex gap-4">
        <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl p-4 flex items-center gap-3 shadow-sm border border-slate-100 dark:border-slate-800">
           <MapPin size={24} className="text-primary" />
           <div className="overflow-hidden">
             <p className="label-caps">Location</p>
             <p className="text-xs font-black text-slate-900 dark:text-slate-200 truncate">Mongla Port, Bagerhat</p>
           </div>
        </div>
        <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl p-4 flex items-center gap-3 shadow-sm border border-slate-100 dark:border-slate-800">
           <CloudSun size={24} className="text-accent" />
           <div>
             <p className="label-caps">Weather</p>
             <p className="text-xs font-black text-slate-900 dark:text-slate-200">32°C Sunny</p>
           </div>
        </div>
      </section>

      {/* Quick Emergency Actions */}
      <section className="px-6 mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-black text-slate-900 dark:text-slate-200 uppercase tracking-tight">Quick Assistance</h3>
          <button onClick={() => onNavigate('emergency')} className="text-primary text-[10px] font-black uppercase tracking-wider flex items-center gap-1 group">
            View All <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {QUICK_ACTIONS.map(action => (
            <button key={action.id} onClick={() => onNavigate('emergency')} className="flex flex-col items-center group">
              <div className={`w-12 h-12 ${action.bg} rounded-xl flex items-center justify-center shadow-sm group-active:scale-90 transition-all border border-slate-100 mb-2`}>
                <action.icon size={24} className={action.color} />
              </div>
              <span className="text-[9px] font-black text-slate-900 dark:text-slate-400 text-center uppercase">{action.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="px-6 mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-black text-slate-900 dark:text-slate-200">Smart Services</h3>
          <button onClick={() => onNavigate('services_grid')} className="text-primary text-[10px] font-black uppercase tracking-wider flex items-center gap-1 group">
            View all <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map(service => (
            <button key={service.id} onClick={() => onNavigate(service.id as Screen)} className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-3xl flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-800 group-hover:bg-primary group-hover:text-white transition-all">
                <service.icon size={24} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <span className="text-[9px] font-black text-slate-900 dark:text-slate-400 text-center uppercase">{service.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Places */}
      <section className="px-6 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-black text-slate-900 dark:text-slate-200">Featured Destinations</h3>
          <button onClick={() => onNavigate('tourism')} className="text-primary text-[10px] font-black uppercase tracking-wider flex items-center gap-1 group">
            See more <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
          {[
            { id: 1, name: 'Shat Gombuj Masjid', img: 'https://images.unsplash.com/photo-1596422846543-75c6fc183f27?fit=crop&w=400&q=80', desc: '15th-Century Historic Mosque' },
            { id: 2, name: 'Karamjal', img: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?fit=crop&w=400&q=80', desc: 'Wildlife Breeding Center' },
            { id: 3, name: 'Sundarbans', img: 'https://images.unsplash.com/photo-1585250485966-2679c6d48227?fit=crop&w=400&q=80', desc: 'Largest Mangrove Forest' },
          ].map(p => (
            <div key={p.id} className="min-w-[180px] h-64 rounded-4xl overflow-hidden bg-white dark:bg-slate-900 relative group shadow-xl border border-slate-100 dark:border-slate-800 flex-shrink-0">
               <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.name} />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent p-5 flex flex-col justify-end">
                 <p className="text-[10px] font-black text-primary uppercase mb-1">Explore</p>
                 <h4 className="text-white font-display font-black text-sm leading-tight">{p.name}</h4>
                 <div className="flex items-center gap-1 text-white/70 text-[9px] mt-1 font-bold">
                    <Info size={10} />
                    <span>{p.desc}</span>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ExploreScreen() {
  return (
    <div className="flex flex-col pb-32">
       <header className="px-6 pt-8 pb-4">
        <h1 className="text-3xl font-display font-black text-slate-900 dark:text-slate-100">Explore</h1>
        <p className="text-sm text-slate-500 font-sans">Find everything near you</p>
      </header>

      {/* Search Bar */}
      <div className="px-6 mb-6">
        <div className="bg-white dark:bg-slate-900 rounded-2xl h-14 flex items-center px-4 gap-3 shadow-sm border border-slate-100 dark:border-slate-800 focus-within:ring-2 ring-primary/20 transition-all">
          <Search size={20} className="text-slate-400" />
          <input type="text" placeholder="Search places, jobs, shops..." className="bg-transparent flex-1 outline-none text-sm font-sans font-bold" />
          <button className="p-2 bg-primary/10 rounded-xl text-primary">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 flex gap-3 overflow-x-auto no-scrollbar mb-8">
        {['All', 'Tourist Spots', 'Restaurants', 'Shops', 'Hotels', 'Parks'].map((cat, i) => (
          <button key={cat} className={`h-10 px-5 rounded-full text-[10px] font-black uppercase tracking-wider whitespace-nowrap transition-all ${i === 0 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white dark:bg-slate-900 text-slate-500 border border-slate-100 dark:border-slate-800'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Map Preview */}
      <div className="px-6 mb-8">
        <div className="h-44 rounded-[32px] overflow-hidden relative shadow-xl">
           <img src="https://images.unsplash.com/photo-1526080676457-4544bf0ebfb9?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Map" />
           <div className="absolute inset-0 bg-primary/10" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-white shadow-xl animate-bounce">
                <MapPin size={24} className="text-white" />
              </div>
           </div>
           <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
             <button className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold py-2 px-4 rounded-full shadow-lg">Open Interactive Map</button>
           </div>
        </div>
      </div>

      {/* Trending Locations */}
      <div className="px-6 mb-8">
        <h3 className="text-lg font-black text-slate-900 dark:text-slate-200 mb-4">Trending Now</h3>
        <div className="space-y-4">
          {[
            { name: "Dublar Char", category: "Beach & Forest", rating: 4.8, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fit=crop&w=400&q=80" },
            { name: "Hiron Point", category: "Nature Reserve", rating: 4.7, img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?fit=crop&w=400&q=80" },
            { name: "Riverside Park", category: "Public Park", rating: 4.2, img: "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?fit=crop&w=400&q=80" }
          ].map((loc, i) => (
            <motion.div 
               whileTap={{ scale: 0.98 }}
               key={i} 
               className="bg-white dark:bg-slate-900 rounded-3xl p-3 flex gap-4 border border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <img src={loc.img} className="w-24 h-24 rounded-2xl object-cover" />
              <div className="flex-1 py-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-display font-black text-slate-900 dark:text-slate-100">{loc.name}</h4>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-accent text-accent" />
                      <span className="text-[10px] font-black text-slate-900 dark:text-slate-400">{loc.rating}</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-wider">{loc.category}</p>
                </div>
                <div className="flex gap-2">
                   <button className="bg-primary/10 text-primary text-[10px] py-1.5 px-3 rounded-lg font-black uppercase tracking-wider">Details</button>
                   <button className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-300 text-[10px] py-1.5 px-3 rounded-lg font-black uppercase tracking-wider">Save</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TourismScreen({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState('History');
  
  const sections: { [key: string]: any[] } = {
    'History': [
      { name: "Shat Gombuj Masjid", loc: "Bagerhat", desc: "15th-century Islamic architecture", img: "https://images.unsplash.com/photo-1596422846543-75c6fc183f27?fit=crop&w=400" },
      { name: "Khan Jahan Ali Tomb", loc: "Bagerhat", desc: "Mazar of the city founder", img: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?fit=crop&w=400" },
    ],
    'Resorts': [
      { name: "Karamjal Resort", loc: "Sundarbans", desc: "Wildlife breeding center", img: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?fit=crop&w=400" },
      { name: "Harbaria Eco Park", loc: "Sundarbans", desc: "Eco-tourism & trekking", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?fit=crop&w=400" },
    ],
    'Nature': [
      { name: "Dublar Char", loc: "Bay of Bengal", desc: "Fishermen island & sunrise", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fit=crop&w=400" },
      { name: "Hiron Point", loc: "Sundarbans", desc: "Tiger & deer sightings", img: "https://images.unsplash.com/photo-1547466832-1327493f3324?fit=crop&w=400" },
    ]
  };

  return (
    <div className="flex flex-col pb-32">
      <ScreenHeader title="Tourism" subtitle="Discover vibrant Mongla" onBack={onBack} action={<Umbrella className="text-primary" size={28} />} />
      
      <div className="px-6 flex gap-3 overflow-x-auto no-scrollbar mb-4 mt-2">
        {[
          { id: 'History', label: 'Historical Places', icon: History },
          { id: 'Resorts', label: 'Resorts & Parks', icon: Trees },
          { id: 'Nature', label: 'River & Nature', icon: Waves },
        ].map(t => (
          <button 
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`h-11 px-5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === t.id ? 'bg-primary text-white shadow-lg' : 'glass-card dark:bg-slate-900 text-slate-400'}`}
          >
            <t.icon size={14} />
            {t.label}
          </button>
        ))}
      </div>

      <div className="px-6 space-y-6">
        {sections[activeTab].map((item, i) => (
          <div key={i} className="glass-card dark:bg-slate-900 rounded-[32px] overflow-hidden shadow-xl border-none">
             <div className="h-56 relative">
                 <img src={item.img} className="w-full h-full object-cover" />
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span className="text-[10px] font-black text-slate-900">4.9</span>
                 </div>
             </div>
             <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                   <div>
                      <h3 className="font-display font-black text-xl text-slate-800 dark:text-white leading-tight">{item.name}</h3>
                      <div className="flex items-center gap-1.5 text-slate-400 mt-1">
                         <MapPin size={12} className="text-primary" />
                         <span className="text-[10px] font-bold uppercase">{item.loc}</span>
                      </div>
                   </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6">{item.desc}</p>
                <div className="flex gap-3">
                   <ActionButton icon={MapIcon} label="View Map" />
                   <ActionButton icon={Info} label="Details" variant="ghost" />
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfileScreen({ toggleTheme, isDarkMode, onDesignSystem }: { toggleTheme: () => void, isDarkMode: boolean, onDesignSystem: () => void }) {
  return (
    <div className="flex flex-col p-6 pb-32">
      <header className="flex flex-col items-center py-6 mb-4 px-6 bg-primary/5 rounded-[40px] dark:bg-slate-900/50">
        <div className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-800 shadow-2xl mb-6 relative">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lucky" className="w-full h-full object-cover rounded-full" alt="User" />
          <button className="absolute bottom-1 right-1 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-lg">
             <Camera size={16} />
          </button>
        </div>
        <h1 className="text-2xl font-display font-bold text-slate-800 dark:text-white">Abdul Ajij Noman</h1>
        <p className="text-slate-400 dark:text-slate-500 font-sans font-medium text-sm">+880 1744 556677</p>
        <div className="mt-4 px-4 py-1.5 bg-primary/10 rounded-full">
           <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Premium Member</span>
        </div>
      </header>

      <div className="space-y-4">
        {[
          { label: "Design System", icon: LayoutGrid, onClick: onDesignSystem },
          { label: "Personal Information", icon: User },
          { label: "Notification Settings", icon: Bell },
          { label: "My Saved Places", icon: Star },
          { label: "Activity History", icon: Clock },
          { label: "Language", icon: Globe },
        ].map((item, i) => (
          <button 
            key={i} 
            onClick={item.onClick}
            className="w-full glass-card dark:bg-slate-900 p-5 rounded-[24px] flex items-center justify-between border-none shadow-md group active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300">
                 <item.icon size={20} />
               </div>
               <span className="font-sans font-bold text-slate-700 dark:text-slate-200 text-sm">{item.label}</span>
            </div>
            <ChevronRight size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
          </button>
        ))}

        <div className="w-full glass-card dark:bg-slate-900 p-5 rounded-[24px] flex items-center justify-between border-none shadow-md">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300">
                 {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
               </div>
               <span className="font-sans font-bold text-slate-700 dark:text-slate-200 text-sm">Dark Mode</span>
            </div>
            <button 
              onClick={toggleTheme}
              className={`w-12 h-6 rounded-full transition-colors relative ${isDarkMode ? 'bg-primary' : 'bg-slate-300'}`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-md ${isDarkMode ? 'left-7' : 'left-1'}`} />
            </button>
        </div>

      </div>

      <div className="mt-12 text-center pb-10">
        <p className="text-[10px] text-slate-400 uppercase tracking-[4px] mb-2 font-bold font-sans">Priyo Mongla App</p>
        <p className="text-[10px] text-slate-300 font-sans">Version 2.4.0 (Enterprise)</p>
      </div>
    </div>
  );
}
function EmergencyScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col pb-32">
      <ScreenHeader title="Emergency" subtitle="Immediate assistance 24/7" onBack={onBack} action={<Shield className="text-red-500" size={28} />} />

      <div className="px-6 py-6 flex flex-col items-center">
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="w-56 h-56 rounded-full bg-red-600 shadow-[0_20px_60px_rgba(220,38,38,0.4)] flex flex-col items-center justify-center text-white border-[12px] border-red-100 dark:border-red-900/30 relative"
        >
          <div className="absolute inset-0 rounded-full animate-ping bg-red-600 opacity-20" />
          <AlertTriangle size={56} className="mb-2" />
          <span className="font-display font-black text-3xl tracking-widest">SOS</span>
        </motion.button>
        <p className="text-red-500 font-black mt-6 text-xs uppercase tracking-[4px] flex items-center gap-2">
           <Phone size={14} /> Tap for urgent help
        </p>
      </div>

      <div className="px-6 space-y-4 mb-6">
        {[
          { label: "Police Main Station", icon: Shield, color: "bg-blue-600", phone: "999" },
          { label: "Fire Service & Rescue", icon: Flame, color: "bg-orange-600", phone: "102" },
          { label: "Central Hospital", icon: Stethoscope, color: "bg-emerald-600", phone: "106" },
          { label: "Coast Guard (Port Area)", icon: Ship, color: "bg-teal-600", phone: "041-7622" }
        ].map((item, i) => (
          <motion.div 
            whileHover={{ x: 5 }}
            key={i} 
            className="glass-card dark:bg-slate-900 p-6 rounded-[32px] flex items-center justify-between border-none shadow-xl active:scale-95 transition-transform"
          >
            <div className="flex items-center gap-5">
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center shadow-lg border-4 border-white/20`}>
                <item.icon size={26} className="text-white" />
              </div>
              <div>
                <h3 className="font-display font-black text-slate-800 dark:text-white">{item.label}</h3>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">Fast Response Agent</p>
              </div>
            </div>
            <a href={`tel:${item.phone}`} className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
              <Phone size={20} />
            </a>
          </motion.div>
        ))}
      </div>

      <div className="px-6">
        <button className="w-full h-18 glass-card dark:bg-slate-900 rounded-[32px] text-slate-500 font-black flex items-center justify-center gap-3 active:scale-95 transition-transform border-none shadow-md overflow-hidden relative group">
          <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform" />
          <MapPin size={22} className="text-primary" /> 
          <span className="text-sm">Broadcast My Location To Contacts</span>
        </button>
      </div>
    </div>
  );
}


function RestaurantsScreen({ onBack }: { onBack: () => void }) {
  const eateries = [
    { name: "The Riverview Café", cat: "Local & Seafood", rating: 4.7, img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fit=crop&w=400" },
    { name: "Sundarban Spicy House", cat: "Bengali Traditional", rating: 4.6, img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?fit=crop&w=400" },
    { name: "Portside Grill & Chill", cat: "Continental & Fusion", rating: 4.4, img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?fit=crop&w=400" },
  ];

  return (
    <div className="flex flex-col pb-32">
       <ScreenHeader title="Dine Out" subtitle="Taste of coastal Mongla" onBack={onBack} action={<Gem className="text-accent" size={28} />} />
       
       <div className="px-6 mt-4 space-y-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
             {['Top Rated', 'Seafood', 'Cafés', 'Fast Food'].map(f => (
               <button key={f} className="px-5 py-2 glass-card rounded-full text-[10px] font-black uppercase whitespace-nowrap bg-white dark:bg-slate-900 shadow-sm">{f}</button>
             ))}
          </div>

          {eateries.map((eat, i) => (
             <div key={i} className="glass-card dark:bg-slate-900 rounded-[32px] overflow-hidden shadow-xl border-none">
                <div className="h-48 relative">
                   <img src={eat.img} className="w-full h-full object-cover" />
                   <div className="absolute top-4 right-4 bg-primary/95 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-md text-white">
                      <Star size={10} className="fill-white text-white" />
                      <span className="text-[10px] font-black">{eat.rating}</span>
                   </div>
                </div>
                <div className="p-6">
                   <Badge variant="accent" className="mb-2">{eat.cat}</Badge>
                   <h3 className="text-xl font-display font-black text-slate-800 dark:text-white mb-6">{eat.name}</h3>
                   <div className="flex gap-3">
                      <ActionButton icon={Menu} label="View Menu" />
                      <ActionButton icon={LocateFixed} label="Location" variant="ghost" />
                   </div>
                </div>
             </div>
          ))}
       </div>
    </div>
  );
}

function ServicesGridScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  return (
    <div className="flex flex-col p-6 pb-32">
       <header className="mb-4">
        <h1 className="text-3xl font-display font-bold text-slate-800 dark:text-slate-100">All Services</h1>
        <p className="text-sm text-slate-400 font-sans tracking-wide">Select a category to begin</p>
      </header>

      {['Life', 'Utility', 'Government', 'Society', 'Business'].map(category => (
        <div key={category} className="mb-4">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-2">{category}</h2>
          <div className="grid grid-cols-2 gap-4">
            {SERVICES.filter(s => s.category === category).map(service => (
              <button 
                key={service.id} 
                onClick={() => onNavigate(service.id as Screen)}
                className="glass-card dark:bg-slate-900 p-5 rounded-[28px] border-none shadow-md flex flex-col items-start gap-4 active:scale-95 transition-transform group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                   <service.icon size={24} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-800 dark:text-slate-100 text-sm">{service.label}</h3>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold">{service.labelBn}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}



// Keep a constant for the renamed Landmark icon to avoid confusion




function DesignSystemScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col p-8 pb-32">
      <header className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="w-10 h-10 glass-card rounded-full flex items-center justify-center">
          <ArrowRight className="rotate-180" size={20} />
        </button>
        <h1 className="text-2xl font-display font-bold">Design System</h1>
      </header>

      {/* Colors */}
      <section className="mb-10">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Color Palette</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 bg-primary rounded-2xl shadow-lg shadow-primary/20" />
             <div>
               <p className="text-xs font-bold">Primary</p>
               <p className="text-[10px] text-slate-400">#0F766E</p>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 bg-secondary rounded-2xl shadow-lg shadow-secondary/20" />
             <div>
               <p className="text-xs font-bold">Secondary</p>
               <p className="text-[10px] text-slate-400">#115E59</p>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 bg-accent rounded-2xl shadow-lg shadow-accent/20" />
             <div>
               <p className="text-xs font-bold">Accent</p>
               <p className="text-[10px] text-slate-400">#F59E0B</p>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-12 h-12 bg-background border border-slate-200 rounded-2xl shadow-sm" />
             <div>
               <p className="text-xs font-bold">Background</p>
               <p className="text-[10px] text-slate-400">#F8FAFC</p>
             </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="mb-10">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Typography</h3>
        <div className="space-y-4">
          <div>
            <p className="text-[10px] text-slate-400 font-bold mb-1">Display (Outfit)</p>
            <h1 className="text-3xl font-display">Priyo Mongla</h1>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-bold mb-1">Body (Inter)</p>
            <p className="text-sm font-sans">The world-class smart city ecosystem for our preferred Mongla.</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 font-bold mb-1">Bengali (Hind Siliguri)</p>
            <p className="text-2xl font-display">আমার শহর, আমার হাতে</p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="mb-10">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Buttons</h3>
        <div className="space-y-4">
          <button className="w-full h-14 bg-primary text-white rounded-2xl font-bold font-display shadow-lg shadow-primary/20">Primary Action</button>
          <button className="w-full h-14 bg-secondary text-white rounded-2xl font-bold font-display shadow-lg shadow-secondary/20">Secondary Action</button>
          <button className="w-full h-14 glass-card rounded-2xl font-bold font-display shadow-md border-none">Ghost/Glass Button</button>
          <button className="w-full h-14 bg-white border-2 border-slate-100 rounded-2xl font-bold font-display text-slate-400">Outline Button</button>
        </div>
      </section>

      {/* Cards */}
      <section className="mb-10">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Components & Grids</h3>
        <div className="glass-card rounded-[32px] p-6 mb-4 shadow-xl border-none">
           <h4 className="font-display font-bold mb-2">Modern Card v1</h4>
           <p className="text-xs text-slate-500">Premium spacing with 24px-32px rounded corners and subtle shadows.</p>
        </div>
        <div className="flex gap-4">
           <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
             <Star size={20} />
           </div>
           <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 shadow-md">
             <Bell size={20} />
           </div>
           <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-xl">
             <Search size={20} />
           </div>
        </div>
      </section>
    </div>
  );
}




function TaskTrackerScreen({ onBack }: { onBack: () => void }) {
  const [tasks, setTasks] = useState<{id: string, text: string, completed: boolean}[]>([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('priyo_mongla_tasks');
    if (saved) {
      try { setTasks(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('priyo_mongla_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now().toString(), text: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="flex flex-col pb-32 min-h-screen bg-slate-50 dark:bg-slate-950">
      <ScreenHeader title="Task Tracker" subtitle="Manage your daily activities" onBack={onBack} action={<CheckCircle className="text-primary" size={28} />} />
      <div className="px-6 mt-4">
        <div className="glass-card dark:bg-slate-900 rounded-[32px] p-6 shadow-xl border-none mb-6">
          <h3 className="text-sm font-display font-black text-slate-800 dark:text-white mb-4 uppercase tracking-wider">Add New Task</h3>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addTask()}
              placeholder="e.g. Visit Mongla Port..." 
              className="flex-1 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl px-4 text-xs font-bold outline-none border border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white" 
            />
            <button onClick={addTask} className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-transform">
              <Plus size={20} />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {tasks.length === 0 ? (
            <div className="py-12 flex flex-col items-center opacity-40">
              <CheckCircle2 size={48} className="mb-4 text-primary" />
              <p className="font-sans font-bold">No tasks yet. Add one above!</p>
            </div>
          ) : tasks.map(task => (
            <div key={task.id} className={`glass-card dark:bg-slate-900 rounded-2xl p-4 flex items-center gap-3 transition-all ${task.completed ? 'opacity-50' : ''}`}>
              <button onClick={() => toggleTask(task.id)} className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${task.completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300 dark:border-slate-600'}`}>
                {task.completed && <CheckCircle2 size={14} />}
              </button>
              <p className={`flex-1 text-sm font-sans font-bold ${task.completed ? 'line-through text-slate-400' : 'text-slate-800 dark:text-white'}`}>{task.text}</p>
              <button onClick={() => deleteTask(task.id)} className="w-8 h-8 flex items-center justify-center text-red-400 hover:text-red-500 active:scale-90 transition-transform">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
