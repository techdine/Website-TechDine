import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  QrCode,
  Menu as MenuIcon,
  MessageCircle,
  Zap,
  DollarSign,
  Cloud,
  Headphones,
  RefreshCw,
  Puzzle,
  Clock,
  Shield,
  TrendingUp,
  Users,
  ChevronDown,
  CheckCircle2,
  Star,
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const products = [
    {
      icon: QrCode,
      title: 'QR Code Ordering System',
      description: 'Contactless menu access with direct table ordering and instant kitchen notifications. Zero commission fees.',
      features: ['Contactless menu access', 'Direct table ordering', 'Instant kitchen notifications', 'Zero commission fees'],
    },
    {
      icon: MenuIcon,
      title: 'Digital Menu Management',
      description: 'Update your menu in real-time with multi-language support and rich media integration.',
      features: ['Update menu in real-time', 'Multi-language support', 'Rich media (images/videos)', 'Category management'],
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Business Bot',
      description: 'Automated customer engagement with order management and booking confirmations via WhatsApp.',
      features: ['Automated customer replies', 'Order management via WhatsApp', 'Booking confirmations', 'Customer engagement'],
    },
  ];

  const features = [
    { icon: Zap, title: 'Quick Setup', description: 'Go live in under 15 minutes' },
    { icon: DollarSign, title: 'Zero Commission', description: 'No hidden fees or order commissions' },
    { icon: Cloud, title: 'Cloud-Based', description: 'Access from anywhere, anytime' },
    { icon: Headphones, title: '24/7 Support', description: 'Dedicated support team in India' },
    { icon: RefreshCw, title: 'Regular Updates', description: 'New features every month' },
    { icon: Puzzle, title: 'Easy Integration', description: 'Works with existing systems' },
  ];

  const steps = [
    { number: '1', title: 'Sign Up', description: 'Create your account in 2 minutes' },
    { number: '2', title: 'Setup', description: 'Configure your menu and preferences' },
    { number: '3', title: 'Go Live', description: 'Start accepting orders immediately' },
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '999',
      popular: false,
      features: [
        'QR Code Ordering',
        'Digital Menu',
        'Up to 50 orders/day',
        'Basic Support',
      ],
    },
    {
      name: 'Professional',
      price: '2,499',
      popular: true,
      features: [
        'Everything in Starter',
        'WhatsApp Bot',
        'Unlimited Orders',
        'Priority Support',
        'Analytics Dashboard',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      popular: false,
      features: [
        'Everything in Professional',
        'Custom Integrations',
        'Dedicated Account Manager',
        'Multi-location Support',
        'API Access',
      ],
    },
  ];

  const testimonials = [
    {
      quote: "TechDine transformed how we take orders. Our table turnover increased by 30% and customers love the QR ordering system!",
      name: "Rajesh Kumar",
      role: "Owner",
      business: "Cafe Delight, Mumbai",
      avatar: "RK",
    },
    {
      quote: "The WhatsApp bot has been a game-changer for customer engagement. We can now handle 3x more orders without hiring extra staff.",
      name: "Priya Sharma",
      role: "Manager",
      business: "Spice Kitchen, Delhi",
      avatar: "PS",
    },
    {
      quote: "Setup was incredibly easy and the support team is always available. Best investment we made for our cloud kitchen.",
      name: "Amit Patel",
      role: "Founder",
      business: "Quick Bites, Bangalore",
      avatar: "AP",
    },
  ];

  const stats = [
    { value: '50+', label: 'Restaurants' },
    { value: '10,000+', label: 'Orders Processed' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
  ];

  const faqs = [
    {
      question: 'How long does setup take?',
      answer: 'Most restaurants complete setup in under 15 minutes. Our intuitive interface and step-by-step guidance make it incredibly easy.',
    },
    {
      question: 'Do I need technical knowledge?',
      answer: 'Not at all! TechDine is designed for restaurant owners, not tech experts. If you can use WhatsApp, you can use TechDine.',
    },
    {
      question: 'What if I already use another system?',
      answer: 'TechDine integrates seamlessly with most existing systems. Our team will help you migrate without any downtime.',
    },
    {
      question: 'Can I customize the menu?',
      answer: 'Absolutely! You have full control over your menu, including categories, items, prices, images, and descriptions.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'We offer a free demo where you can see the platform in action. Contact us to schedule your personalized demo.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major payment methods including credit/debit cards, UPI, net banking, and bank transfers.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, there are no long-term contracts. You can cancel your subscription anytime with no penalties.',
    },
  ];

  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-current" />
                Trusted by 50+ restaurants across India
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your Restaurant with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Smart Digital Solutions
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                All-in-one platform for QR ordering, digital menus, WhatsApp automation, and more. Built for Indian restaurants, cafes, and cloud kitchens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/demo"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg shadow-blue-600/30 text-center"
                >
                  Book Free Demo
                </Link>
                <a
                  href="#how-it-works"
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all text-center"
                >
                  See How It Works
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Shield, label: '99% Uptime' },
                  { icon: Clock, label: '15 Min Setup' },
                  { icon: Headphones, label: '24/7 Support' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm border border-gray-100"
                  >
                    <item.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-white rounded-xl shadow-xl p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-4">
                        <QrCode className="w-16 h-16 text-white" />
                      </div>
                      <p className="text-gray-600 font-medium">Restaurant Dashboard</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Running a restaurant is hard. We make it easier.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Manual Orders',
                question: 'Tired of managing orders manually?',
                description: 'Stop losing orders and reduce errors with automated order management.',
              },
              {
                title: 'No Online Presence',
                question: 'Missing out on online customers?',
                description: 'Reach more customers with digital menus and online ordering capabilities.',
              },
              {
                title: 'Operational Chaos',
                question: 'Struggling with daily operations?',
                description: 'Streamline everything from orders to customer communication in one place.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-lg text-blue-600 font-semibold mb-2">{item.question}</p>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything Your Business Needs in One Platform
            </h2>
            <p className="text-lg text-gray-600">Powerful features to grow your restaurant</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl border-2 border-dashed border-orange-300"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-3">
              Coming Soon
            </div>
            <p className="text-gray-700 font-medium">
              Inventory Management • Billing System • Analytics Dashboard
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose TechDine?</h2>
            <p className="text-lg text-gray-600">Built with restaurants in mind</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-lg text-gray-600">From signup to live in minutes</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent transform translate-x-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-6 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/demo"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg shadow-blue-600/30"
            >
              Start Your Free Demo
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">Choose the plan that fits your business size</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border-2 ${plan.popular
                    ? 'border-blue-600 shadow-2xl scale-105'
                    : 'border-gray-200 shadow-lg'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  {plan.price === 'Custom' ? (
                    <div className="text-4xl font-bold text-gray-900">Custom Pricing</div>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-gray-900">₹{plan.price}</span>
                      <span className="text-gray-600">/month</span>
                    </>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Select Plan'}
                </button>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-600"
          >
            All plans include free setup and training
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Loved by Restaurant Owners Across India
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.business}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'transform rotate-180' : ''
                      }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Restaurant?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 50+ restaurants already using TechDine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
              >
                Book Free Demo
              </Link>
              <a
                href="https://wa.me/916203653946?text=Hi%20there!%20I%20want%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
