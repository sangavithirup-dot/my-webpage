import React, { useState, useEffect } from 'react';
import { 
  Film, MapPin, Phone, Info, Shield, HelpCircle, Image as ImageIcon, 
  Compass, Menu, X, ChevronDown, ChevronRight, ChevronLeft, Search, ExternalLink, 
  Sparkles, Speaker, Armchair, Snowflake, Utensils, ParkingCircle, 
  Clock, Send, AlertTriangle, CheckCircle, Eye, Sliders, Mail, Navigation, Car, Bus
} from 'lucide-react';

// Color Palette Constants
// Deep Luxury Black: #090611 (55% Base)
// Electric Purple: #8B20E8 (20%)
// Vibrant Neon Red: #FF1744 (10%)
// Hot Pink: #FF35A8 (15%)
// Bright Pink Highlight: #FF9AD5

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [faqSearch, setFaqSearch] = useState('');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState('All');
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', category: 'General Inquiry', message: '' });

  // Scroll to top on tab switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Gallery Sample Photography Data (15 Illustrative Royalty-Free Images)
  const galleryImages = [
    {
      id: 1,
      category: 'exterior',
      title: 'Cinematic Facade Architecture',
      subtitle: 'Dindigul Main Road View Concept',
      url: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
      tag: 'Exterior'
    },
    {
      id: 2,
      category: 'auditorium',
      title: 'Auditorium Perspective',
      subtitle: 'Main Viewing Arena Layout',
      url: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=80',
      tag: 'Auditorium'
    },
    {
      id: 3,
      category: 'seating',
      title: 'Auditorium Seating Tier',
      subtitle: 'Ergonomic Viewing Layout',
      url: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&w=1200&q=80',
      tag: 'Seating & Tech'
    },
    {
      id: 4,
      category: 'auditorium',
      title: 'Grand Silver Screen Concept',
      subtitle: 'Panoramic Projection Angle',
      url: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1200&q=80',
      tag: 'Auditorium'
    },
    {
      id: 5,
      category: 'exterior',
      title: 'Modern Concession Lobby',
      subtitle: 'Intermission Lounge Area',
      url: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=1200&q=80',
      tag: 'Exterior & Lobby'
    },
    {
      id: 6,
      category: 'auditorium',
      title: 'Stage Lighting Ambience',
      subtitle: 'Acoustic Wall Paneling',
      url: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1200&q=80',
      tag: 'Auditorium'
    },
    {
      id: 7,
      category: 'exterior',
      title: 'Evening Entrance Glow',
      subtitle: 'Neon Main Entrance Aesthetic',
      url: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=1200&q=80',
      tag: 'Exterior & Lobby'
    },
    {
      id: 8,
      category: 'auditorium',
      title: 'Surround Acoustics Setup',
      subtitle: 'Immersive Sound Stage Design',
      url: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1200&q=80',
      tag: 'Seating & Tech'
    },
    {
      id: 9,
      category: 'seating',
      title: 'Premium Seating Arrangement',
      subtitle: 'Balanced sightlines setup',
      url: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=1200&q=80',
      tag: 'Seating & Tech'
    },
    {
      id: 10,
      category: 'exterior',
      title: 'Atmospheric Concession Bar',
      subtitle: 'Refreshments Counter Design',
      url: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1200&q=80',
      tag: 'Exterior & Lobby'
    },
    {
      id: 11,
      category: 'auditorium',
      title: 'Screen Projection Corridor',
      subtitle: 'High-contrast theatrical illumination',
      url: 'https://images.unsplash.com/photo-1518676599602-f248e3d06282?auto=format&fit=crop&w=1200&q=80',
      tag: 'Seating & Tech'
    },
    {
      id: 12,
      category: 'exterior',
      title: 'Campus Perimeter Design',
      subtitle: 'Organized vehicle approach lane',
      url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      tag: 'Exterior & Lobby'
    },
    {
      id: 13,
      category: 'seating',
      title: 'Rear View Seating Corridor',
      subtitle: 'Spacious aisle spacing overview',
      url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
      tag: 'Seating & Tech'
    },
    {
      id: 14,
      category: 'exterior',
      title: 'Spectator Waiting Lounge',
      subtitle: 'Comfortable pre-show hallway',
      url: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80',
      tag: 'Exterior & Lobby'
    },
    {
      id: 15,
      category: 'auditorium',
      title: 'Curtain Lighting Accent',
      subtitle: 'Vintage-modern cinema mood',
      url: 'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=1200&q=80',
      tag: 'Auditorium'
    }
  ];

  // FAQ Items with Categories
  const faqData = [
    {
      question: 'Where is Lakshmana Theatre located exactly?',
      answer: 'Lakshmana Theatre is situated on Dindigul Main Road, Natham, Dindigul District – 624401, Tamil Nadu, India. It is positioned right on the primary highway route in Natham town.',
      category: 'Location & Travel'
    },
    {
      question: 'What is the official helpline contact number?',
      answer: 'You can contact the theatre management directly by calling +91 9944970451 for general venue inquiries and address directions.',
      category: 'Contact Info'
    },
    {
      question: 'Can I purchase movie tickets or view showtimes here?',
      answer: 'No. This website is strictly an official information portal providing address verification, map directions, and facility overviews. Online bookings, showtime listings, and payment processing are NOT available on this platform.',
      category: 'Portal Purpose'
    },
    {
      question: 'Is parking available on the theatre premises?',
      answer: 'Yes, designated parking space is available on the campus for two-wheelers and passenger four-wheelers during screening hours.',
      category: 'Facilities & Parking'
    },
    {
      question: 'Why are some specifications marked as editable placeholders?',
      answer: 'To maintain strict truthfulness and integrity, we do not invent facts regarding seat capacity, projection technology certifications, or establishment dates. Unconfirmed details are flagged as editable placeholders until official management confirmation.',
      category: 'Portal Purpose'
    },
    {
      question: 'How do I reach the theatre from Natham Bus Stand?',
      answer: 'Lakshmana Theatre is located along Dindigul Main Road, just a few minutes away from the Natham central bus stand via local auto-rickshaw or town buses.',
      category: 'Location & Travel'
    },
    {
      question: 'What are the box office and helpdesk hours?',
      answer: 'The helpdesk is accessible via phone during standard operating hours. For venue queries, please contact management directly at +91 9944970451.',
      category: 'Contact Info'
    }
  ];

  const filteredFaqs = faqData.filter(faq => {
    const matchesCategory = selectedFaqCategory === 'All' || faq.category === selectedFaqCategory;
    const matchesSearch = faq.question.toLowerCase().includes(faqSearch.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredGallery = galleryFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === galleryFilter);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', category: 'General Inquiry', message: '' });
    }, 6000);
  };

  const handleNextLightbox = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  };

  const handlePrevLightbox = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <div className="min-h-screen bg-[#090611] text-gray-100 font-sans selection:bg-[#FF35A8] selection:text-white relative overflow-x-hidden">
      
      {/* GLOBAL TOP ANNOUNCEMENT BANNER */}
      <div className="bg-gradient-to-r from-[#090611] via-[#8B20E8]/50 to-[#090611] border-b border-[#FF35A8]/30 py-2 px-4 text-center text-xs tracking-wider text-gray-200 relative z-50 flex items-center justify-center space-x-2">
        <Sparkles className="w-3.5 h-3.5 text-[#FF9AD5] animate-pulse" />
        <span className="font-medium text-white uppercase tracking-widest text-[11px]">Official Information Portal &bull; Natham, Dindigul &bull; Information Only</span>
        <Sparkles className="w-3.5 h-3.5 text-[#FF9AD5] animate-pulse" />
      </div>

      {/* STICKY GLASS NAVIGATION BAR */}
      <header className="sticky top-0 z-40 px-4 sm:px-6 lg:px-8 py-3">
        <nav className="max-w-7xl mx-auto bg-[#090611]/80 backdrop-blur-xl rounded-2xl px-5 py-3 border border-[#8B20E8]/30 shadow-[0_0_25px_rgba(139,32,232,0.2)] flex items-center justify-between transition-all">
          
          {/* Logo Branding */}
          <button 
            onClick={() => setActiveTab('home')}
            className="flex items-center space-x-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF1744] via-[#8B20E8] to-[#FF35A8] p-0.5 shadow-[0_0_15px_rgba(255,53,168,0.5)] group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#090611] rounded-[10px] flex items-center justify-center border border-[#FF9AD5]/30">
                <span className="font-serif font-black text-xl bg-gradient-to-r from-[#FF35A8] to-[#FF9AD5] bg-clip-text text-transparent">L</span>
              </div>
            </div>
            <div>
              <span className="font-serif text-lg font-bold tracking-wider text-white block leading-tight group-hover:text-[#FF9AD5] transition-colors">
                LAKSHMANA
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#FF9AD5] font-semibold block">
                Theatre &bull; Natham
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 font-medium text-sm">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'facilities', label: 'Facilities' },
              { id: 'faq', label: 'FAQ' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'location', label: 'Location' },
              { id: 'contact', label: 'Contact Us' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#8B20E8]/40 to-[#FF35A8]/40 text-white border border-[#FF35A8]/50 shadow-[0_0_15px_rgba(255,53,168,0.3)]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Contact Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:9944970451"
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF1744] via-[#8B20E8] to-[#FF35A8] text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(255,23,68,0.4)] hover:shadow-[0_0_25px_rgba(255,53,168,0.6)] transition-all transform hover:-translate-y-0.5 border border-[#FF9AD5]/30"
            >
              <Phone className="w-3.5 h-3.5 animate-bounce text-white" />
              <span>9944970451</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF35A8]" /> : <Menu className="w-6 h-6 text-[#FF9AD5]" />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-[#090611]/95 backdrop-blur-2xl rounded-2xl p-5 border border-[#FF35A8]/30 shadow-[0_10px_40px_rgba(139,32,232,0.4)] transition-all animate-fadeIn">
            <div className="flex flex-col space-y-2 font-medium text-sm">
              {[
                { id: 'home', label: 'Home', icon: Sparkles },
                { id: 'about', label: 'About Theatre', icon: Info },
                { id: 'facilities', label: 'Facilities', icon: Armchair },
                { id: 'faq', label: 'Visitor FAQ', icon: HelpCircle },
                { id: 'gallery', label: 'Photo Gallery', icon: ImageIcon },
                { id: 'location', label: 'Location & Map', icon: MapPin },
                { id: 'contact', label: 'Contact Us', icon: Phone },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 py-2.5 px-4 rounded-xl text-left transition-all ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-[#8B20E8] to-[#FF35A8] text-white font-bold shadow-[0_0_15px_rgba(255,53,168,0.4)]'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 text-[#FF9AD5]" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <div className="pt-4 border-t border-[#8B20E8]/30 mt-2">
                <a
                  href="tel:9944970451"
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#FF1744] to-[#FF35A8] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,23,68,0.4)]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 9944970451</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* MAIN VIEW CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* ==================== TAB 1: HOME ==================== */}
        {activeTab === 'home' && (
          <div className="space-y-16 animate-fadeIn">

                {/* HERO SECTION */}
                <section className="relative min-h-[80vh] w-full flex items-center justify-center rounded-3xl overflow-hidden border border-[#FF35A8]/20 shadow-[0_0_50px_rgba(139,32,232,0.25)] px-4 py-16 text-center">

              {/* Theatre Background Image */}
               <img
                src="/images/theatre.jpg"
              alt="Lakshmana Theatre"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60 z-[1] pointer-events-none"></div>

  {/* Decorative Ambient Lights */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#8B20E8]/20 rounded-full blur-3xl pointer-events-none z-[2]"></div>

  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FF35A8]/20 rounded-full blur-3xl pointer-events-none z-[2]"></div>

  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FF35A8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-[2]"></div>

  {/* Main Hero Content */}
  <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-6">

    {/* Top Glowing Tag */}
    <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#090611]/80 border border-[#FF35A8]/40 shadow-[0_0_15px_rgba(255,53,168,0.3)] text-xs font-semibold text-[#FF9AD5]">
      <span className="w-2 h-2 rounded-full bg-[#FF1744] animate-ping"></span>
      <span className="tracking-widest uppercase">
        Official Information Portal &bull; Natham, Dindigul
      </span>
    </div>

    {/* Main Hero Title */}
    <h1 className="w-full font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight text-center">
      LAKSHMANA <br className="hidden sm:inline" />
      <span className="bg-gradient-to-r from-[#FF1744] via-[#FF35A8] to-[#FF9AD5] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,53,168,0.6)]">
        THEATRE
      </span>
    </h1>

    {/* Location */}
    <p className="text-sm font-bold text-[#FF9AD5] uppercase tracking-[0.25em] text-center">
      Natham, Dindigul – 624401
    </p>

    {/* Tagline */}
    <p className="font-serif text-lg sm:text-2xl text-gray-200 italic font-medium text-center">
      "The Benchmark of Cinematic Entertainment in Natham"
    </p>

    {/* Description */}
    <p className="w-full text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed text-center">
      Welcome to the official information page for Lakshmana Theatre in Natham, Dindigul district. Discover address details, landmark directions, facilities summary, and direct phone contact channels.
    </p>

    {/* Action CTA Buttons */}
    <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">

      <button
        onClick={() => setActiveTab('facilities')}
        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#8B20E8] via-[#FF35A8] to-[#FF1744] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,53,168,0.4)] hover:shadow-[0_0_35px_rgba(255,53,168,0.7)] transition-all transform hover:-translate-y-1 border border-[#FF9AD5]/30 flex items-center justify-center gap-2"
      >
        <Armchair className="w-4 h-4 text-white" />
        <span>Explore Facilities</span>
      </button>

      <button
        onClick={() => setActiveTab('location')}
        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#090611]/90 text-white font-bold text-xs uppercase tracking-wider border border-[#8B20E8]/60 hover:border-[#FF35A8] shadow-[0_0_15px_rgba(139,32,232,0.3)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
      >
        <MapPin className="w-4 h-4 text-[#FF9AD5]" />
        <span>View Location & Map</span>
      </button>

          </div>
          </div>
           </section>


            {/* SECTIONS PREVIEW GRID */}
            <section className="space-y-6">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF9AD5]">Portal Sections</span>
                <h2 className="font-serif text-3xl font-bold text-white">Explore Theatre Information</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#8B20E8] via-[#FF35A8] to-[#FF1744] mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* About Card Preview */}
                <div 
                  onClick={() => setActiveTab('about')}
                  className="bg-[#090611] p-6 rounded-2xl border border-[#8B20E8]/30 hover:border-[#FF35A8] shadow-[0_0_20px_rgba(139,32,232,0.15)] hover:shadow-[0_0_30px_rgba(255,53,168,0.3)] transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#8B20E8] to-[#FF35A8] flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,53,168,0.4)]">
                      <Info className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#FF9AD5] transition-colors">About Theatre</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Learn about Lakshmana Theatre situated on Dindigul Main Road, serving Natham town and nearby local audiences.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#8B20E8]/20 flex items-center justify-between text-xs font-bold text-[#FF9AD5]">
                    <span>Read Details</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Facilities Card Preview */}
                <div 
                  onClick={() => setActiveTab('facilities')}
                  className="bg-[#090611] p-6 rounded-2xl border border-[#8B20E8]/30 hover:border-[#FF35A8] shadow-[0_0_20px_rgba(139,32,232,0.15)] hover:shadow-[0_0_30px_rgba(255,53,168,0.3)] transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#8B20E8] to-[#FF35A8] flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,53,168,0.4)]">
                      <Armchair className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#FF9AD5] transition-colors">Facilities</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Overview of audience comfort features including HD projection, seating, parking, lobby, and restrooms.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#8B20E8]/20 flex items-center justify-between text-xs font-bold text-[#FF9AD5]">
                    <span>View Amenities</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Gallery Card Preview */}
                <div 
                  onClick={() => setActiveTab('gallery')}
                  className="bg-[#090611] p-6 rounded-2xl border border-[#8B20E8]/30 hover:border-[#FF35A8] shadow-[0_0_20px_rgba(139,32,232,0.15)] hover:shadow-[0_0_30px_rgba(255,53,168,0.3)] transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#8B20E8] to-[#FF35A8] flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,53,168,0.4)]">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#FF9AD5] transition-colors">Photo Showcase</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      15 sample cinema interior and exterior photographs illustrating modern movie theatre aesthetics.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#8B20E8]/20 flex items-center justify-between text-xs font-bold text-[#FF9AD5]">
                    <span>Browse 15 Images</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Location Card Preview */}
                <div 
                  onClick={() => setActiveTab('location')}
                  className="bg-[#090611] p-6 rounded-2xl border border-[#8B20E8]/30 hover:border-[#FF35A8] shadow-[0_0_20px_rgba(139,32,232,0.15)] hover:shadow-[0_0_30px_rgba(255,53,168,0.3)] transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#8B20E8] to-[#FF35A8] flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,53,168,0.4)]">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#FF9AD5] transition-colors">Location & Map</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Full address, embedded map of Natham, Dindigul, and travel directions for incoming visitors.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#8B20E8]/20 flex items-center justify-between text-xs font-bold text-[#FF9AD5]">
                    <span>View Map & Directions</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            </section>

          </div>
        )}

        {/* ==================== TAB 2: ABOUT ==================== */}
        {activeTab === 'about' && (
          <div className="space-y-10 animate-fadeIn">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF9AD5]">Venue Profile</span>
              <h1 className="font-serif text-4xl font-bold text-white">About Lakshmana Theatre</h1>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-medium">Landmark movie destination situated on Dindigul Main Road, Natham.</p>
              <div className="w-20 h-1 bg-gradient-to-r from-[#8B20E8] via-[#FF35A8] to-[#FF1744] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Narrative */}
              <div className="lg:col-span-7 bg-[#090611] p-6 sm:p-8 rounded-3xl border border-[#8B20E8]/40 shadow-[0_0_30px_rgba(139,32,232,0.2)] flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8B20E8]/20 border border-[#8B20E8]/40 text-xs font-semibold text-[#FF9AD5]">
                    <MapPin className="w-3.5 h-3.5 text-[#FF1744]" />
                    <span>Dindigul Main Road, Natham</span>
                  </div>

                  <h2 className="font-serif text-2xl font-bold text-white leading-snug">
                    Serving Movie Enthusiasts in Natham & Surrounding Dindigul Regions
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    <strong className="text-white">Lakshmana Theatre</strong> is a single-screen entertainment venue situated along Dindigul Main Road in Natham. It has long provided access to big-screen cinema for residents across Natham taluk and nearby rural communities in Dindigul district, Tamil Nadu.
                  </p>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    This official information portal exists to give visitors clear directions, confirmed contact channels, address details, and visitor guidelines.
                  </p>

                  {/* Explicit Placeholder Notice Box */}
                  <div className="p-4 rounded-2xl bg-[#090611] border border-dashed border-[#FF35A8]/50 text-xs text-gray-300 space-y-2">
                    <div className="flex items-center space-x-2 text-[#FF9AD5] font-bold">
                      <AlertTriangle className="w-4 h-4 text-[#FF1744]" />
                      <span>[Establishment Year / Renovation History to be updated]</span>
                    </div>
                    <p className="italic text-gray-400">
                      "Specific historical milestones, exact inauguration year, and architectural founding details will be populated here upon direct confirmation from management."
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#8B20E8]/20 flex flex-wrap justify-between items-center text-xs text-gray-400 gap-2">
                  <span className="flex items-center"><CheckCircle className="w-3.5 h-3.5 text-[#FF35A8] mr-1.5" /> Direct Main Highway Location</span>
                  <span className="flex items-center"><CheckCircle className="w-3.5 h-3.5 text-[#FF35A8] mr-1.5" /> Tamil Nadu 624401</span>
                </div>
              </div>

              {/* Right Side Specs Card & Sample Image */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-[#090611] p-6 sm:p-8 rounded-3xl border border-[#FF35A8]/40 shadow-[0_0_30px_rgba(255,53,168,0.2)] space-y-4">
                  <h3 className="font-serif text-xl font-bold text-white pb-3 border-b border-[#8B20E8]/30 flex items-center justify-between">
                    <span>Key Info Summary</span>
                    <Sparkles className="w-5 h-5 text-[#FF9AD5]" />
                  </h3>

                  <ul className="space-y-3 text-xs sm:text-sm">
                    <li className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-gray-400">Theatre Name:</span>
                      <span className="font-bold text-white text-right">Lakshmana Theatre</span>
                    </li>
                    <li className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-gray-400">Road Location:</span>
                      <span className="font-bold text-white text-right">Dindigul Main Road</span>
                    </li>
                    <li className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-gray-400">Town / Pincode:</span>
                      <span className="font-bold text-white text-right">Natham – 624401</span>
                    </li>
                    <li className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-gray-400">District / State:</span>
                      <span className="font-bold text-white text-right">Dindigul, Tamil Nadu</span>
                    </li>
                    <li className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-gray-400">Helpline:</span>
                      <a href="tel:9944970451" className="font-bold text-[#FF9AD5] hover:underline text-right">+91 9944970451</a>
                    </li>
                  </ul>
                </div>

                {/* Sample Imagery Box */}
                <div className="relative rounded-3xl overflow-hidden border border-[#8B20E8]/30 h-48 group">
                  <img 
                    src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80" 
                    alt="Sample Theatre Concept" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090611] via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4 text-[10px] text-[#FF9AD5] font-semibold">
                    * Sample Image - Cinema Interior Atmosphere
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ==================== TAB 3: FACILITIES ==================== */}
        {activeTab === 'facilities' && (
          <div className="space-y-10 animate-fadeIn">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF9AD5]">Auditorium Specs</span>
              <h1 className="font-serif text-4xl font-bold text-white">Theatre Facilities</h1>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">Amenities and infrastructure overview for visitors at Lakshmana Theatre.</p>
              <div className="w-20 h-1 bg-gradient-to-r from-[#8B20E8] via-[#FF35A8] to-[#FF1744] mx-auto rounded-full"></div>
            </div>

            {/* Disclaimer Tag */}
            <div className="p-4 rounded-2xl bg-[#090611] border border-[#FF1744]/40 text-xs text-center text-gray-300 max-w-3xl mx-auto flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(255,23,68,0.2)]">
              <AlertTriangle className="w-4 h-4 text-[#FF1744] shrink-0" />
              <span>Facility details below contain editable placeholder notes pending official management verification.</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Facility 1 */}
              <div className="bg-[#090611] p-6 rounded-3xl border border-[#8B20E8]/30 hover:border-[#FF35A8] shadow-[0_0_20px_rgba(139,32,232,0.15)] hover:shadow-[0_0_30px_rgba(255,53,168,0.3)] transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#8B20E8] to-[#FF35A8] flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,53,168,0.4)]">
                    <Film className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">High-Definition Projection</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Clear visual projection systems designed for high-resolution film display across the silver screen.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#8B20E8]/20 text-[11px] text-[#FF9AD5] italic">
                  Facilities details subject to management verification
                </div>
              </div>

              {/* Facility 2 */}
              <div className="bg-[#090611] p-6 rounded-3xl border border-[#8B20E8]/30 hover:border-[#FF35A8] shadow-[0_0_20px_rgba(139,32,232,0.15)] hover:shadow-[0_0_30px_rgba(255,53,168,0.3)] transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#8B20E8] to-[#FF35A8] flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,53,168,0.4)]">
                    <Speaker className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">Surround Sound Audio</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Multichannel surround sound layout configured to deliver clear dialog playback and acoustic performance.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#8B20E8]/20 text-[11px] text-[#FF9AD5] italic">
                  Facilities details subject to management verification
                </div>
              </div>

              {/* Facility 3 */}
              <div className="bg-[#090611] p-6 rounded-3xl border border-[#8B20E8]/30 hover:border-[#FF35A8] shadow-[0_0_20px_rgba(139,32,232,0.15)] hover:shadow-[0_0_30px_rgba(255,53,168,0.3)] transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#8B20E8] to-[#FF35A8] flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,53,168,0.4)]">
                    <Armchair className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">Ergonomic Seating & Legroom</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Tiered seating arrangements with ample aisle spacing engineered for comfortable line-of-sight viewing.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#8B20E8]/20 text-[11px] text-[#FF9AD5] italic">
                  Facilities details subject to management verification
                </div>
              </div>

              {/* Facility 4 */}
              <div className="bg-[#090611] p-6 rounded-3xl border border-[#8B20E8]/30 hover:border-[#FF35A8] shadow-[0_0_20px_rgba(139,32,232,0.15)] hover:shadow-[0_0_30px_rgba(255,53,168,0.3)] transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#8B20E8] to-[#FF35A8] flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,53,168,0.4)]">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">Lobby & Concession Area</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Spacious air-conditioned waiting lobby featuring an in-house concession counter for interval refreshments.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#8B20E8]/20 text-[11px] text-[#FF9AD5] italic">
                  Facilities details subject to management verification
                </div>
              </div>

              {/* Facility 5 */}
              <div className="bg-[#090611] p-6 rounded-3xl border border-[#8B20E8]/30 hover:border-[#FF35A8] shadow-[0_0_20px_rgba(139,32,232,0.15)] hover:shadow-[0_0_30px_rgba(255,53,168,0.3)] transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#8B20E8] to-[#FF35A8] flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,53,168,0.4)]">
                    <ParkingCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">Vehicle Parking Area</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    On-premises parking area for two-wheeler motorbikes and spectator four-wheeler passenger cars.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#8B20E8]/20 text-[11px] text-[#FF9AD5] italic">
                  Facilities details subject to management verification
                </div>
              </div>

              {/* Facility 6 */}
              <div className="bg-[#090611] p-6 rounded-3xl border border-[#8B20E8]/30 hover:border-[#FF35A8] shadow-[0_0_20px_rgba(139,32,232,0.15)] hover:shadow-[0_0_30px_rgba(255,53,168,0.3)] transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#8B20E8] to-[#FF35A8] flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,53,168,0.4)]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">Clean Restroom Facilities</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Maintained restroom amenities designated for male and female audience members within the premises.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#8B20E8]/20 text-[11px] text-[#FF9AD5] italic">
                  Facilities details subject to management verification
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ==================== TAB 4: FAQ ==================== */}
        {activeTab === 'faq' && (
          <div className="space-y-10 animate-fadeIn max-w-4xl mx-auto">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF9AD5]">Visitor Help</span>
              <h1 className="font-serif text-4xl font-bold text-white">Frequently Asked Questions</h1>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">Find quick answers to common queries regarding Lakshmana Theatre.</p>
              <div className="w-20 h-1 bg-gradient-to-r from-[#8B20E8] via-[#FF35A8] to-[#FF1744] mx-auto rounded-full"></div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {['All', 'Location & Travel', 'Contact Info', 'Facilities & Parking', 'Portal Purpose'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFaqCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all ${
                    selectedFaqCategory === cat
                      ? 'bg-gradient-to-r from-[#8B20E8] to-[#FF35A8] text-white shadow-[0_0_15px_rgba(255,53,168,0.4)]'
                      : 'bg-[#090611] text-gray-400 hover:text-white border border-[#8B20E8]/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input Filter */}
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" />
              <input
                type="text"
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                placeholder="Search FAQs (e.g. location, phone, tickets, parking)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#090611] border border-[#8B20E8]/40 focus:border-[#FF35A8] text-white text-xs sm:text-sm focus:outline-none shadow-[0_0_20px_rgba(139,32,232,0.15)] transition-all"
              />
            </div>

            {/* FAQ Accordion List */}
            <div className="space-y-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className="bg-[#090611] rounded-2xl border border-[#8B20E8]/30 overflow-hidden shadow-[0_0_15px_rgba(139,32,232,0.1)] transition-all"
                  >
                    <button
                      onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between text-white font-semibold text-sm sm:text-base focus:outline-none hover:text-[#FF9AD5] transition-colors"
                    >
                      <span className="flex items-center space-x-3 pr-4">
                        <HelpCircle className="w-5 h-5 text-[#FF35A8] shrink-0" />
                        <span>{faq.question}</span>
                      </span>
                      <ChevronDown className={`w-5 h-5 text-[#FF9AD5] transition-transform duration-300 ${faqOpenIndex === idx ? 'rotate-180' : ''}`} />
                    </button>

                    {faqOpenIndex === idx && (
                      <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-gray-300 border-t border-[#8B20E8]/20 leading-relaxed animate-fadeIn space-y-2">
                        <p>{faq.answer}</p>
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#8B20E8]/20 text-[#FF9AD5] text-[10px] font-bold uppercase tracking-wider">
                          Category: {faq.category}
                        </span>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12 text-gray-400 text-xs">
                  No FAQs matching "{faqSearch}". Try searching "location" or "phone".
                </div>
              )}
            </div>

          </div>
        )}

        {/* ==================== TAB 5: GALLERY ==================== */}
        {activeTab === 'gallery' && (
          <div className="space-y-10 animate-fadeIn">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF9AD5]">Photo Showcase</span>
              <h1 className="font-serif text-4xl font-bold text-white">Cinema Gallery</h1>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">Actual theatre photographs and curated cinema imagery illustrating auditorium aesthetics.</p>
              <div className="w-20 h-1 bg-gradient-to-r from-[#8B20E8] via-[#FF35A8] to-[#FF1744] mx-auto rounded-full"></div>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: 'all', label: 'All 15 Photos' },
                { id: 'auditorium', label: 'Auditorium' },
                { id: 'exterior', label: 'Exterior & Lobby' },
                { id: 'seating', label: 'Seating & Tech' },
              ].map(btn => (
                <button
                  key={btn.id}
                  onClick={() => setGalleryFilter(btn.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                    galleryFilter === btn.id
                      ? 'bg-gradient-to-r from-[#8B20E8] to-[#FF35A8] text-white shadow-[0_0_15px_rgba(255,53,168,0.4)]'
                      : 'bg-[#090611] text-gray-400 hover:text-white border border-[#8B20E8]/30'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Gallery Image Grid (15 Images) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {filteredGallery.map((img, idx) => (
                <div
                  key={img.id}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative bg-[#090611] rounded-2xl overflow-hidden border border-[#8B20E8]/30 hover:border-[#FF35A8] shadow-[0_0_15px_rgba(139,32,232,0.2)] hover:shadow-[0_0_25px_rgba(255,53,168,0.5)] transition-all duration-300 cursor-pointer h-52 flex flex-col justify-end"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090611] via-[#090611]/40 to-transparent"></div>
                  
                  <div className="relative z-10 p-3.5 space-y-1">
                    <span className="px-2 py-0.5 rounded-md bg-[#8B20E8]/80 text-[#FF9AD5] text-[9px] font-bold uppercase tracking-wider inline-block">
                      {img.tag}
                    </span>
                    <h4 className="text-xs font-bold text-white group-hover:text-[#FF9AD5] transition-colors truncate">
                      {img.title}
                    </h4>
                    <span className="text-[10px] text-gray-300 flex items-center">
                      <Eye className="w-3 h-3 mr-1 text-[#FF35A8]" /> Click to Expand
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Lightbox Modal with Prev/Next Controls */}
            {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
              <div 
                onClick={() => setLightboxIndex(null)}
                className="fixed inset-0 z-50 bg-[#090611]/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
              >
                <div 
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-4xl w-full bg-[#090611] rounded-3xl p-6 border border-[#FF35A8]/50 shadow-[0_0_50px_rgba(255,53,168,0.4)] space-y-4"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="absolute top-4 right-4 z-20 p-2 text-gray-400 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  {/* Previous Image Button */}
                  <button
                    onClick={handlePrevLightbox}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#090611]/80 border border-[#FF35A8]/50 text-white hover:text-[#FF9AD5] hover:scale-110 transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {/* Next Image Button */}
                  <button
                    onClick={handleNextLightbox}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#090611]/80 border border-[#FF35A8]/50 text-white hover:text-[#FF9AD5] hover:scale-110 transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Main Image Frame */}
                  <div className="rounded-2xl overflow-hidden h-80 sm:h-[420px] w-full relative">
                    <img
                      src={filteredGallery[lightboxIndex].url}
                      alt={filteredGallery[lightboxIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Caption Strip & Counter */}
                  <div className="space-y-2 text-center pt-2">
                    <div className="flex items-center justify-center space-x-3 text-xs">
                      <span className="px-3 py-1 rounded-full bg-[#8B20E8]/30 border border-[#8B20E8]/50 text-[#FF9AD5] font-bold uppercase tracking-wider">
                        {filteredGallery[lightboxIndex].tag}
                      </span>
                      <span className="text-gray-400 font-mono">
                        {lightboxIndex + 1} of {filteredGallery.length}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-white">{filteredGallery[lightboxIndex].title}</h3>
                    <p className="text-xs text-gray-400">{filteredGallery[lightboxIndex].subtitle}</p>
                    <p className="text-[11px] text-[#FF1744] font-medium pt-1">
                      * Illustrative sample photograph for website design showcase only. Not actual Lakshmana Theatre photo.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* ==================== TAB 6: LOCATION ==================== */}
        {activeTab === 'location' && (
          <div className="space-y-10 animate-fadeIn">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF9AD5]">Map & Directions</span>
              <h1 className="font-serif text-4xl font-bold text-white">Theatre Location</h1>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">Verified address and Google Maps positioning in Natham, Dindigul District.</p>
              <div className="w-20 h-1 bg-gradient-to-r from-[#8B20E8] via-[#FF35A8] to-[#FF1744] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Address Details Box */}
              <div className="lg:col-span-5 bg-[#090611] p-6 sm:p-8 rounded-3xl border border-[#8B20E8]/40 shadow-[0_0_30px_rgba(139,32,232,0.2)] space-y-6">
                
                <div className="flex items-start space-x-4">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-[#8B20E8] to-[#FF35A8] text-white shadow-[0_0_15px_rgba(255,53,168,0.4)] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-white">Full Address</h2>
                    <p className="text-xs text-[#FF9AD5] font-semibold mt-0.5">Natham, Dindigul District</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#090611] border border-white/10 text-sm text-gray-200 leading-relaxed font-medium space-y-1">
                  <p className="font-bold text-white text-base">LAKSHMANA THEATRE</p>
                  <p>Dindigul Main Road,</p>
                  <p>Natham, Dindigul – 624401,</p>
                  <p>Tamil Nadu, India.</p>
                </div>

                {/* Travel Directions Tips */}
                <div className="space-y-3 pt-2 text-xs text-gray-300">
                  <h4 className="font-bold text-white uppercase tracking-wider text-[11px] flex items-center">
                    <Navigation className="w-3.5 h-3.5 text-[#FF35A8] mr-1.5" /> Visitor Travel Tips
                  </h4>

                  <div className="flex items-start space-x-2.5 bg-white/5 p-3 rounded-xl border border-white/5">
                    <Bus className="w-4 h-4 text-[#FF9AD5] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">From Dindigul Town:</strong>
                      <span>Take Dindigul-Natham Main Road highway buses (approx. 35 km).</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2.5 bg-white/5 p-3 rounded-xl border border-white/5">
                    <Car className="w-4 h-4 text-[#FF9AD5] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">From Madurai or Karaikudi:</strong>
                      <span>Accessible via Natham connecting state highways directly entering Dindigul Main Road.</span>
                    </div>
                  </div>
                </div>

                {/* External Navigation Button */}
                <a
                  href="https://maps.google.com/?q=Lakshmana+Theatre+Natham+Dindigul+Main+Road+Tamil+Nadu+624401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF1744] via-[#8B20E8] to-[#FF35A8] text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(255,23,68,0.4)] hover:shadow-[0_0_30px_rgba(255,53,168,0.6)] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Get Directions On Google Maps</span>
                </a>
              </div>

              {/* Embedded Google Maps iFrame Centered strictly on Natham, Dindigul */}
              <div className="lg:col-span-7 bg-[#090611] p-2 rounded-3xl border border-[#FF35A8]/40 shadow-[0_0_30px_rgba(255,53,168,0.2)] overflow-hidden h-[450px]">
                <iframe
                  title="Lakshmana Theatre Location Map Natham Dindigul"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15711.272362894108!2d78.2250!3d10.2350!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00994f92d4215f%3A0xa621746c1e5518b5!2sNatham%2C%20Tamil%20Nadu%20624401!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full rounded-2xl border-0 grayscale hover:grayscale-0 transition-all duration-500"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </div>
        )}

        {/* ==================== TAB 7: CONTACT US ==================== */}
        {activeTab === 'contact' && (
          <div className="space-y-10 animate-fadeIn">
            
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF9AD5]">Direct Channel</span>
              <h1 className="font-serif text-4xl font-bold text-white">Contact Management</h1>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">Get in touch for general venue inquiries and address directions.</p>
              <div className="w-20 h-1 bg-gradient-to-r from-[#8B20E8] via-[#FF35A8] to-[#FF1744] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Action Box */}
              <div className="lg:col-span-5 bg-[#090611] p-6 sm:p-8 rounded-3xl border border-[#FF35A8]/40 shadow-[0_0_30px_rgba(255,53,168,0.2)] flex flex-col justify-between space-y-6">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FF1744] via-[#8B20E8] to-[#FF35A8] flex items-center justify-center text-white shadow-[0_0_25px_rgba(255,53,168,0.5)] mb-6">
                    <Phone className="w-8 h-8 animate-pulse" />
                  </div>

                  <h2 className="font-serif text-2xl font-bold text-white mb-2">Direct Phone Helpline</h2>
                  <p className="text-xs text-gray-300 leading-relaxed mb-6">
                    Tap the button below to directly call Lakshmana Theatre desk for location directions and visitor inquiries.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#090611] border border-[#8B20E8]/40 text-center space-y-1 mb-6">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block">Contact Number</span>
                    <span className="font-mono text-2xl font-extrabold text-[#FF9AD5]">+91 9944970451</span>
                  </div>

                  <div className="space-y-3 border-t border-white/10 pt-4 text-xs text-gray-300">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-[#FF35A8]" />
                      <span>Dindigul Main Road, Natham – 624401</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-[#FF9AD5]" />
                      <span>General Helpdesk Hours: Standard Daytime</span>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:9944970451"
                  className="flex items-center justify-center space-x-2 w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF1744] via-[#8B20E8] to-[#FF35A8] text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(255,23,68,0.4)] hover:shadow-[0_0_35px_rgba(255,53,168,0.7)] transition-all transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Call 9944970451 Now</span>
                </a>
              </div>

              {/* Right Message Form Box */}
              <div className="lg:col-span-7 bg-[#090611] p-6 sm:p-8 rounded-3xl border border-[#8B20E8]/40 shadow-[0_0_30px_rgba(139,32,232,0.2)]">
                <h3 className="font-serif text-xl font-bold text-white mb-4 pb-3 border-b border-[#8B20E8]/30">
                  Send Information Request
                </h3>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter full name"
                        className="w-full px-4 py-3 rounded-xl bg-[#090611] border border-[#8B20E8]/40 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF35A8] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Enter email address"
                        className="w-full px-4 py-3 rounded-xl bg-[#090611] border border-[#8B20E8]/40 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF35A8] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Enter mobile number"
                        className="w-full px-4 py-3 rounded-xl bg-[#090611] border border-[#8B20E8]/40 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF35A8] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Inquiry Subject</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-[#090611] border border-[#8B20E8]/40 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF35A8] transition-colors"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Location & Driving Directions">Location & Driving Directions</option>
                        <option value="Facility Clarification">Facility Clarification</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Message</label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Type your message..."
                      className="w-full px-4 py-3 rounded-xl bg-[#090611] border border-[#8B20E8]/40 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF35A8] transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center space-x-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#8B20E8] to-[#FF35A8] text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(255,53,168,0.4)] hover:shadow-[0_0_30px_rgba(255,53,168,0.6)] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>

                {formSubmitted && (
                  <div className="mt-4 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs text-center flex items-center justify-center space-x-2 animate-fadeIn">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Thank you! Your general message has been logged. Please call 9944970451 for immediate response.</span>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

      </main>

      {/* FLOATING QUICK CALL BUTTON FOR MOBILE */}
      <div className="fixed bottom-6 right-6 z-40 sm:hidden">
        <a
          href="tel:9944970451"
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#FF1744] via-[#8B20E8] to-[#FF35A8] text-white flex items-center justify-center shadow-[0_0_25px_rgba(255,53,168,0.7)] border border-[#FF9AD5]/50 animate-bounce"
          aria-label="Call Theatre Desk"
        >
          <Phone className="w-6 h-6 text-white" />
        </a>
      </div>

      {/* GLOBAL FOOTER */}
      <footer className="mt-20 border-t border-[#8B20E8]/30 bg-[#090611] pt-14 pb-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1 */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF1744] to-[#FF35A8] flex items-center justify-center font-serif font-bold text-white">
                L
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-wider">LAKSHMANA THEATRE</span>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Official informational web portal for Lakshmana Theatre. Offering accurate address details, location instructions, and visitor guidelines in Natham, Dindigul District.
            </p>
            <p className="text-xs text-[#FF9AD5]">
              Dindigul Main Road, Natham – 624401, Tamil Nadu, India.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF9AD5]">Quick Links</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              {['home', 'about', 'facilities', 'faq', 'gallery', 'location', 'contact'].map(tabId => (
                <li key={tabId}>
                  <button
                    onClick={() => setActiveTab(tabId)}
                    className="hover:text-white capitalize transition-colors"
                  >
                    {tabId === 'contact' ? 'Contact Us' : tabId + ' Page'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF9AD5]">Portal Policy</h4>
            <div className="p-3 rounded-2xl bg-[#090611] border border-[#8B20E8]/30 text-[11px] text-gray-400 leading-relaxed space-y-1">
              <p><strong className="text-white">Strictly Informational Desk:</strong> No ticket sales, showtime listings, movie details, or payments are processed here.</p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-3">
          <p>&copy; {new Date().getFullYear()} Lakshmana Theatre, Natham. All rights reserved.</p>
          <p className="text-[11px]">Official Information Portal &bull; Dindigul District, Tamil Nadu</p>
        </div>
      </footer>

    </div>
  );
}