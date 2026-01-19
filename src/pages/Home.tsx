import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  UtensilsCrossed,
  Receipt,
  TrendingUp, // Used
  CheckCircle2, // Used
  Zap, // Used
} from 'lucide-react';
import { useEffect } from 'react';
import DashboardPreview from '../assets/dashboard-preview.png';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Removed unused activeFeature state

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const features = [
    {
      title: 'Unified Dashboard',
      description: 'Manage your entire restaurant from a single screen. Real-time updates on tables, orders, and kitchen status.',
      icon: LayoutDashboard,
      color: 'blue'
    },
    {
      title: 'Smart Inventory',
      description: 'Track ingredients down to the gram. Get low-stock alerts and auto-generate purchase orders.',
      icon: UtensilsCrossed, // Changed from Inventory to something available or keep generic
      color: 'green'
    },
    {
      title: 'GST Billing',
      description: 'Generate compliant bills with automatic tax calculation (CGST + SGST). Split bills easily.',
      icon: Receipt,
      color: 'purple'
    },
    {
      title: 'Advanced Reports',
      description: 'Understand your business with detailed analytics on sales, staff performance, and peak hours.',
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '999',
      description: 'Perfect for small cafes and QSRs',
      features: [
        'Complete POS System',
        'QR Ordering (50 tables)',
        'Basic Inventory',
        'Email Support',
        'GST Billing'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '2,499',
      description: 'For growing restaurants & chains',
      features: [
        'Everything in Starter',
        'Advanced Inventory & Recipes',
        'KOT Kitchen Display System',
        'Staff Management',
        'Priority Phone Support',
        'WhatsApp Integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large chains and franchises',
      features: [
        'Everything in Professional',
        'Custom Integrations (SAP/ERP)',
        'Dedicated Success Manager',
        'Multi-outlet Management',
        'White-label Options',
        'API Access'
      ],
      popular: false
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-50 via-white to-white -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-medium text-sm mb-6 border border-primary-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Trusted by 50+ Restaurants in India
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 text-balance">
              The Complete <span className="text-primary-600">Restaurant Operating System</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Stop juggling multiple apps. TechDine handles everything from QR ordering and KOT to inventory and GST billing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/demo"
                className="px-8 py-3.5 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25 hover:scale-105 active:scale-95"
              >
                Book Free Demo
              </Link>
              <Link
                to="/demo" // Changed link to demo page as "live demo" might not be public
                className="px-8 py-3.5 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center gap-2 hover:border-gray-300"
              >
                <Zap className="w-5 h-5 text-gray-400" />
                See How It Works
              </Link>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto max-w-4xl"
          >
            <div className="rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-xl p-2 shadow-2xl lg:p-3 ring-1 ring-gray-900/5">
              <img
                src={DashboardPreview}
                alt="TechDine Dashboard"
                className="rounded-xl shadow-sm border border-gray-100 w-full"
              />
            </div>
            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-3 rounded-xl shadow-xl border border-gray-100 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-medium">Daily Revenue</p>
                  <p className="text-base font-bold text-gray-900">₹45,230</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Powering modern restaurants across India</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 grayscale opacity-60">
            {/* Placeholders for logos, using text for now */}
            <span className="text-lg font-bold font-serif text-gray-400">The Burger Club</span>
            <span className="text-lg font-bold font-sans text-gray-400">Chai Point</span>
            <span className="text-lg font-bold font-mono text-gray-400">Punjab Grill</span>
            <span className="text-lg font-bold font-serif text-gray-400 italic">Cafe Coffee Day</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything you need to run a restaurant</h2>
            <p className="text-lg text-gray-600">Replace your cluttered desk with one powerful operating system.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-${feature.color}-50 group-hover:bg-${feature.color}-100 transition-colors`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Stop losing money on outdated systems</h2>
              <p className="text-lg text-gray-100 mb-8 font-medium">Traditional POS systems are expensive, clunky, and don't talk to each other. TechDine brings harmony to your operations.</p>

              <div className="space-y-6">
                {[
                  { title: 'Reduce Order Errors', desc: 'Direct kitchen printing eliminates handwriting mistakes.' },
                  { title: 'Cut Food Waste', desc: 'Smart inventory tracking prevents overstocking.' },
                  { title: 'Increase Table Turnover', desc: 'Faster ordering and billing means more customers served.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-green-500/20 p-2 rounded-lg h-fit">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">{item.title}</h4>
                      <p className="text-gray-200 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 opacity-20 blur-3xl rounded-full" />
              <div className="relative bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-gray-200">Legacy POS expenses</span>
                    </div>
                    <span className="font-mono text-red-400 text-lg">₹50,000+ / yr</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="font-bold text-white">TechDine Savings</span>
                    </div>
                    <span className="font-mono font-bold text-green-400 text-lg">₹999 / mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600">No hidden fees. Cancel anytime.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className={`relative p-8 rounded-2xl border ${plan.popular
                  ? 'border-primary-600 shadow-xl ring-4 ring-primary-50'
                  : 'border-gray-200 shadow-sm hover:shadow-lg'
                  } bg-white transition-all`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-600 text-white text-xs font-bold uppercase tracking-wide rounded-full">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500 mt-2 mb-6">{plan.description}</p>

                <div className="flex items-baseline gap-1 mb-8">
                  {plan.price === 'Custom' ? (
                    <span className="text-4xl font-bold text-gray-900">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-gray-900">₹{plan.price}</span>
                      <span className="text-gray-600 font-medium">/mo</span>
                    </>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/demo"
                  className={`block w-full py-3 px-4 rounded-lg text-center font-semibold transition-colors ${plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/25'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-800 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-md">Ready to upgrade your restaurant?</h2>
          <p className="text-xl text-primary-50 mb-10 max-w-2xl mx-auto font-medium">
            Join the fastest growing restaurant management platform in India. Setup takes less than 15 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="px-8 py-4 bg-white text-primary-900 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-xl"
            >
              Start Free Trial
            </Link>
            <a
              href="https://wa.me/916203653946"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary-800/50 border border-primary-700/50 text-white rounded-xl font-bold hover:bg-primary-800 transition-colors backdrop-blur-sm"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
