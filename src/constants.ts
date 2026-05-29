/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Home, 
  Search, 
  LayoutGrid, 
  Bell, 
  User, 
  Plane, 
  Hotel, 
  Utensils, 
  Briefcase, 
  Bus, 
  GraduationCap, 
  Hospital, 
  Truck, 
  Zap, 
  ShieldCheck, 
  Building2, 
  PhoneCall,
  Navigation,
  MapPin,
  Calendar,
  AlertTriangle,
  Flame,
  Stethoscope,
  Shield,
  Droplets,
  ShoppingBag,
  Wrench,
  SearchCode,
  FileText,
  Map,
  Package,
  TrainFront,
  HardHat,
  Stethoscope as DoctorIcon
} from 'lucide-react';

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', icon: Home, labelBn: 'হোম' },
  { id: 'explore', label: 'Explore', icon: Search, labelBn: 'এক্সপ্লোর' },
  { id: 'services_grid', label: 'Services', icon: LayoutGrid, labelBn: 'সেবাসমূহ' },
  { id: 'notifications', label: 'Alerts', icon: Bell, labelBn: 'নোটিফিকেশন' },
  { id: 'profile', label: 'Profile', icon: User, labelBn: 'প্রোফাইল' },
];

export const QUICK_ACTIONS = [
  { id: 'emergency', label: 'Emergency', labelBn: 'জরুরি', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-50' },
  { id: 'blood_donation', label: 'Blood', labelBn: 'রক্ত', icon: Droplets, color: 'text-rose-500', bg: 'bg-rose-50' },
  { id: 'police', label: 'Police', labelBn: 'পুলিশ', icon: Shield, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { id: 'fire', label: 'Fire Service', labelBn: 'ফায়ার সার্ভিস', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50' },
];

export const SERVICES = [
  { id: 'tourism', label: 'Tourism', labelBn: 'পর্যটন', icon: Plane, category: 'Life' },
  { id: 'hotels', label: 'Hotels', labelBn: 'হোটেল', icon: Hotel, category: 'Life' },
  { id: 'restaurants', label: 'Restaurants', labelBn: 'রেস্টুরেন্ট', icon: Utensils, category: 'Life' },
  { id: 'jobs', label: 'Jobs', labelBn: 'চাকরি', icon: Briefcase, category: 'Business' },
  { id: 'blood_donation', label: 'Blood Donation', labelBn: 'রক্তদান', icon: Droplets, category: 'Life' },
  { id: 'shopping', label: 'Shopping', labelBn: 'কেনাকাটা', icon: ShoppingBag, category: 'Business' },
  { id: 'transport', label: 'Transport', labelBn: 'পরিবহন', icon: Bus, category: 'Utility' },
  { id: 'education', label: 'Education', labelBn: 'শিক্ষা', icon: GraduationCap, category: 'Society' },
  { id: 'hospitals', label: 'Medical', labelBn: 'চিকিৎসা', icon: Hospital, category: 'Health' },
  { id: 'courier', label: 'Courier', labelBn: 'কুরিয়ার', icon: Truck, category: 'Utility' },
  { id: 'electricity', label: 'Electricity', labelBn: 'বিদ্যুৎ', icon: Zap, category: 'Utility' },
  { id: 'technician', label: 'Technician', labelBn: 'টেকনিশিয়ান', icon: Wrench, category: 'Utility' },
  { id: 'land', label: 'Land Services', labelBn: 'ভূমি সেবা', icon: FileText, category: 'Government' },
  { id: 'municipality', label: 'Municipality', labelBn: 'পৌরসভা', icon: Building2, category: 'Government' },
  { id: 'business', label: 'Directory', labelBn: 'ডিরেক্টরি', icon: SearchCode, category: 'Business' },
];
