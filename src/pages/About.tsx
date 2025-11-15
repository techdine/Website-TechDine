import { motion } from 'framer-motion';
import { Target, Heart, Users, TrendingUp, Award, Globe } from 'lucide-react';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering restaurants with technology that makes their lives easier and businesses more profitable.',
    },
    {
      icon: Heart,
      title: 'Customer-First',
      description: 'Every feature we build is designed with restaurant owners and their customers in mind.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Constantly evolving our platform to stay ahead of industry trends and customer needs.',
    },
  ];

  const team = [
    {
      name: 'Yash Verma',
      role: 'Founder & CEO',
      avatar: 'YV',
      // bio: '10+ years in restaurant tech',
    },
    {
      name: 'Vinay Kumar Verma',
      role: 'Head of Product',
      avatar: 'VKV',
      // bio: 'Former product lead at major food-tech',
    },
    // {
    //   name: 'Vikram Singh',
    //   role: 'Chief Technology Officer',
    //   avatar: 'VS',
    //   bio: 'Built solutions for 100+ restaurants',
    // },
  ];

  const milestones = [
    { year: '2025', event: 'TechDine founded with a vision to digitize Indian restaurants' },
    { year: '2025', event: 'Launched QR ordering system and digital menu platform' },
    { year: '2025', event: 'Reached 50+ restaurant partners across major cities' },
    // { year: '2025', event: 'Expanding with WhatsApp bot and advanced analytics' },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Building the Future of Restaurant Technology
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              TechDine was born from a simple observation: restaurants in India needed better technology, but most solutions were either too expensive, too complex, or built for foreign markets.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2025, TechDine emerged from conversations with dozens of restaurant owners who were frustrated with the available technology options. They wanted something simple, affordable, and built for the Indian market.
                </p>
                <p>
                  We started with a QR code ordering system that any restaurant could set up in minutes. Today, we've grown into a comprehensive platform that handles everything from digital menus to customer engagement through WhatsApp.
                </p>
                <p>
                  Our team combines deep restaurant industry knowledge with cutting-edge technology expertise. We're not just building software; we're building partnerships with every restaurant that trusts us.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {[Award, Globe, Users, TrendingUp].map((Icon, index) => (
                      <div
                        key={index}
                        className="aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center"
                      >
                        <Icon className="w-12 h-12 text-blue-600" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">What drives us every day</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white rounded-xl shadow-lg"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The people behind TechDine</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-4xl font-bold text-white mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                {/* <p className="text-gray-600">{member.bio}</p> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones in our growth</p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 pt-4">
                  <p className="text-lg text-gray-700 leading-relaxed">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Join Us on This Journey</h2>
            <p className="text-xl text-blue-100 mb-8">
              We're just getting started. Be part of the restaurant technology revolution.
            </p>
            <a
              href="/demo"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
            >
              Book Your Demo Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
