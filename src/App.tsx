/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Wind, 
  Smartphone, 
  ShieldCheck, 
  TrendingUp, 
  Sprout, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronRight,
  Microscope,
  Leaf,
  Activity
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFB] text-[#1A1A1A] font-sans selection:bg-[#8DB580] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2D5A27] rounded-lg flex items-center justify-center">
              <Wind className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#2D5A27]">FreshSense</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4B5563]">
            <a href="#about" className="hover:text-[#2D5A27] transition-colors">About</a>
            <a href="#how-it-works" className="hover:text-[#2D5A27] transition-colors">How it Works</a>
            <a href="#benefits" className="hover:text-[#2D5A27] transition-colors">Benefits</a>
            <button className="bg-[#2D5A27] text-white px-5 py-2 rounded-full hover:bg-[#23461E] transition-all shadow-sm">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F4EF] text-[#2D5A27] text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2D5A27] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2D5A27]"></span>
              </span>
              The Power of Smell
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
              The New Way to Protect <span className="text-[#2D5A27]">Mushroom Farms</span>
            </h1>
            <p className="text-lg text-[#4B5563] mb-8 max-w-lg leading-relaxed">
              FreshSense uses advanced smell-detection technology to help mushroom farmers protect their crops before anything goes wrong.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#2D5A27] text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Protect Your Harvest <ChevronRight className="w-4 h-4" />
              </button>
              <button className="bg-white border border-[#E5E7EB] text-[#1A1A1A] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
                alt="Fresh Mushrooms" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-[#2D5A27] rounded-full flex items-center justify-center">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium opacity-80 uppercase tracking-widest">Live Status</p>
                    <p className="font-bold">Air Quality: Optimal</p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-full bg-[#8DB580]"
                  />
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#8DB580]/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#2D5A27]/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </header>

      {/* Problem Section */}
      <section id="about" className="py-24 bg-[#F0F4EF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Mushrooms are special, but they are <span className="text-[#2D5A27]">sensitive</span>.
              </h2>
              <p className="text-[#4B5563] mb-6 leading-relaxed">
                A small change in their environment can cause mold, bad bacteria, or unwanted smells that can ruin the entire harvest. For many farmers, this means losing money, wasting time, and feeling stressed every growing cycle.
              </p>
              <div className="space-y-4">
                {[
                  "Mold outbreaks ruin entire harvests",
                  "Bad bacteria spreads silently",
                  "Traditional sensors miss early signs",
                  "Financial stress and wasted time"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-[#374151]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#E5E7EB]">
              <h3 className="text-2xl font-bold mb-6">What is FreshSense?</h3>
              <p className="text-[#4B5563] mb-8 leading-relaxed">
                FreshSense is a simple, easy-to-use system that "smells" the air inside mushroom farms. It acts like a <span className="font-semibold text-[#2D5A27]">"nose that never sleeps,"</span> helping farmers protect their harvest 24 hours a day.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-[#F9FAFB] rounded-2xl">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-3">
                    <Microscope className="w-5 h-5 text-[#2D5A27]" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Precision</p>
                  <p className="text-sm font-semibold">Smells air every second</p>
                </div>
                <div className="p-4 bg-[#F9FAFB] rounded-2xl">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center mb-3">
                    <Smartphone className="w-5 h-5 text-[#2D5A27]" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Alerts</p>
                  <p className="text-sm font-semibold">Instant phone notifications</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">How FreshSense Works</h2>
            <p className="text-[#4B5563]">Two simple parts working together to safeguard your farm.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              {...fadeIn}
              className="group p-10 bg-white border border-[#E5E7EB] rounded-[2rem] hover:border-[#2D5A27] transition-all"
            >
              <div className="w-14 h-14 bg-[#F0F4EF] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#2D5A27] transition-colors">
                <Wind className="w-7 h-7 text-[#2D5A27] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Smart Odor Sensor</h3>
              <p className="text-[#4B5563] leading-relaxed">
                A small device placed in grow rooms. It checks for smells known to be early signs of trouble. No water, sunlight, or complicated setup—just place it and turn it on.
              </p>
            </motion.div>
            <motion.div 
              {...fadeIn}
              className="group p-10 bg-white border border-[#E5E7EB] rounded-[2rem] hover:border-[#2D5A27] transition-all"
            >
              <div className="w-14 h-14 bg-[#F0F4EF] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#2D5A27] transition-colors">
                <Smartphone className="w-7 h-7 text-[#2D5A27] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Mobile App for Farmers</h3>
              <p className="text-[#4B5563] leading-relaxed">
                Shows what FreshSense is detecting. If everything is healthy, it's green. If unusual odors appear, it changes color and sends a warning message immediately.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-[#1A1A19] text-white rounded-[3rem] mx-4 mb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D5A27]/20 blur-[100px] -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Why FreshSense Is Important</h2>
              <p className="text-gray-400 text-lg">Solving real problems that mushroom farmers face every day.</p>
            </div>
            <div className="hidden md:block">
              <Leaf className="w-12 h-12 text-[#2D5A27] opacity-50" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Prevents Crop Loss", 
                desc: "A single contamination can destroy 30–70% of the harvest. We alert you early to save your crops.",
                icon: ShieldCheck
              },
              { 
                title: "Saves Money", 
                desc: "Losing a harvest is expensive. We protect farms from costly damage by keeping the environment stable.",
                icon: TrendingUp
              },
              { 
                title: "Reduces Stress", 
                desc: "No more constant checking and worrying. FreshSense watches over your farm 24/7.",
                icon: Activity
              },
              { 
                title: "Improves Quality", 
                desc: "Healthy mushrooms grow better, look better, and sell at a higher price in the market.",
                icon: CheckCircle2
              },
              { 
                title: "Helps All Farms", 
                desc: "Works for backyard growers, mid-sized farms, and large commercial operations alike.",
                icon: Sprout
              },
              { 
                title: "Early Detection", 
                desc: "Other tools detect problems late—FreshSense detects them early before they are visible.",
                icon: Wind
              }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <benefit.icon className="w-10 h-10 text-[#8DB580] mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#F9FAFB] rounded-[3rem] p-12 md:p-20 border border-[#E5E7EB]">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">Who Is FreshSense For?</h2>
                <div className="grid gap-4">
                  {[
                    "Mushroom farmers (Oyster, Shiitake, Button, etc.)",
                    "Indoor farm operators",
                    "Vertical farms",
                    "Substrate makers",
                    "New growers seeking better control"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-[#E5E7EB]">
                      <div className="w-2 h-2 rounded-full bg-[#2D5A27]"></div>
                      <span className="font-medium text-[#374151]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-[#2D5A27] p-10 rounded-[2.5rem] text-white">
                  <h3 className="text-2xl font-bold mb-6 italic">"A Simple Tool With a Big Impact"</h3>
                  <p className="opacity-90 leading-relaxed mb-8">
                    FreshSense brings a new way of thinking to farming. Instead of reacting only when something looks wrong, we help farmers act early—before the damage spreads.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Leaf className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold">Smarter Farming</p>
                      <p className="text-xs opacity-70">Through the power of smell</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#8DB580] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <Wind className="text-white w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Different Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-tight">Designed With Farmers in Mind</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Easy to Install", desc: "Just place it and connect to your phone." },
              { title: "Affordable", desc: "Priced so even small farms can use it." },
              { title: "Low Maintenance", desc: "No frequent cleaning or delicate parts." },
              { title: "Works Automatically", desc: "No constant adjustments needed." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#F0F4EF] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-[#2D5A27]" />
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-[#4B5563] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#2D5A27] rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100" fill="none" stroke="white" strokeWidth="0.1" />
                <path d="M0 80 C 30 20 60 20 100 80" fill="none" stroke="white" strokeWidth="0.1" />
              </svg>
            </div>
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Ready to Protect Your Farm?</h2>
              <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto">
                Join the future of mushroom farming. Grow with confidence and avoid costly surprises.
              </p>
              <button className="bg-white text-[#2D5A27] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl">
                Get Started Today
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F9FAFB] border-t border-[#E5E7EB] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#2D5A27] rounded-lg flex items-center justify-center">
                  <Wind className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight text-[#2D5A27]">FreshSense</span>
              </div>
              <p className="text-[#4B5563] max-w-sm leading-relaxed">
                A Case Study No. 1 in Web Programming Course. College of Computer and Information Science, Mapúa Malayan Colleges Mindanao.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Product</h5>
              <ul className="space-y-4 text-sm font-medium text-[#4B5563]">
                <li><a href="#" className="hover:text-[#2D5A27]">Features</a></li>
                <li><a href="#" className="hover:text-[#2D5A27]">Pricing</a></li>
                <li><a href="#" className="hover:text-[#2D5A27]">App Download</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Company</h5>
              <ul className="space-y-4 text-sm font-medium text-[#4B5563]">
                <li><a href="#" className="hover:text-[#2D5A27]">Mission</a></li>
                <li><a href="#" className="hover:text-[#2D5A27]">Case Study</a></li>
                <li><a href="#" className="hover:text-[#2D5A27]">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-[#E5E7EB] flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400">
              © 2026 FreshSense. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm font-medium text-gray-400">
              <a href="#" className="hover:text-[#2D5A27]">Privacy Policy</a>
              <a href="#" className="hover:text-[#2D5A27]">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
