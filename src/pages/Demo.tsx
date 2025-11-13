import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Calendar, CheckCircle2, Clock, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

interface DemoForm {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  businessType: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

// Initialize Supabase client (outside component to avoid recreating)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('⚠️ Supabase environment variables are missing!');
  console.error('Make sure .env file has:');
  console.error('VITE_SUPABASE_URL=your_url');
  console.error('VITE_SUPABASE_ANON_KEY=your_key');
}

const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

export default function Demo() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DemoForm>();

  const onSubmit = async (data: DemoForm) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      console.log('📤 Submitting demo booking:', data);

      // Insert into Supabase
      const { data: insertedData, error } = await supabase
        .from('demo_bookings')
        .insert([
          {
            name: data.name,
            business_name: data.businessName,
            phone: data.phone,
            email: data.email,
            business_type: data.businessType,
            preferred_date: data.preferredDate,
            preferred_time: data.preferredTime,
            message: data.message || null,
            status: 'pending',
          },
        ])
        .select();

      if (error) {
        console.error('❌ Supabase error:', error);
        throw new Error(error.message || 'Failed to submit demo booking');
      }

      console.log('✅ Demo booking saved:', insertedData);

      // Success!
      setSubmitSuccess(true);
      
      setTimeout(() => {
        reset();
        setSubmitSuccess(false);
      }, 5000);
    } catch (error: any) {
      console.error('❌ Error submitting demo booking:', error);
      setSubmitError(error.message || 'Something went wrong');
      
      // Show user-friendly error
      alert(
        '❌ Unable to submit demo booking. Please try again or contact us directly via WhatsApp at +91-6203653946'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const benefits = [
    'See all features in action',
    'Get personalized recommendations',
    'Ask questions to our experts',
    'Learn best practices',
    'No commitment required',
    'Free setup assistance',
  ];

  return (
    <div className="pt-16">
      {/* Success Toast */}
      {submitSuccess && (
        <div className="fixed top-20 right-4 z-50 bg-green-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 animate-fade-in">
          <CheckCircle2 className="w-6 h-6" />
          <div>
            <p className="font-semibold">Demo Booked Successfully!</p>
            <p className="text-sm text-green-100">We'll contact you within 24 hours to confirm.</p>
          </div>
        </div>
      )}

      {/* Error Toast */}
      {submitError && (
        <div className="fixed top-20 right-4 z-50 bg-red-600 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3">
          <div>
            <p className="font-semibold">Submission Failed</p>
            <p className="text-sm text-red-100">{submitError}</p>
          </div>
          <button
            onClick={() => setSubmitError(null)}
            className="ml-4 text-white hover:text-red-200"
          >
            ✕
          </button>
        </div>
      )}

      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Book Your Free Demo
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how TechDine can transform your restaurant operations. Schedule a personalized demo with our team.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Demo</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      disabled={isSubmitting}
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      disabled={isSubmitting}
                      {...register('businessName', { required: 'Business name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Your Restaurant Name"
                    />
                    {errors.businessName && (
                      <p className="mt-1 text-sm text-red-600">{errors.businessName.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      disabled={isSubmitting}
                      {...register('phone', { required: 'Phone number is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="+91-XXXXXXXXXX"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      disabled={isSubmitting}
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type *
                    </label>
                    <select
                      id="businessType"
                      disabled={isSubmitting}
                      {...register('businessType', { required: 'Please select a business type' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      <option value="">Select your business type</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="cafe">Cafe</option>
                      <option value="cloud-kitchen">Cloud Kitchen</option>
                      <option value="food-truck">Food Truck</option>
                      <option value="bar">Bar/Pub</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.businessType && (
                      <p className="mt-1 text-sm text-red-600">{errors.businessType.message}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        id="preferredDate"
                        type="date"
                        disabled={isSubmitting}
                        {...register('preferredDate', { required: 'Date is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                        min={new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                      />
                      {errors.preferredDate && (
                        <p className="mt-1 text-sm text-red-600">{errors.preferredDate.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        id="preferredTime"
                        disabled={isSubmitting}
                        {...register('preferredTime', { required: 'Time is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      >
                        <option value="">Select time</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                      </select>
                      {errors.preferredTime && (
                        <p className="mt-1 text-sm text-red-600">{errors.preferredTime.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information (Optional)
                    </label>
                    <textarea
                      id="message"
                      disabled={isSubmitting}
                      {...register('message')}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Tell us about your specific needs or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-lg ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105 shadow-blue-600/30'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Booking Demo...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5" />
                        Book Demo
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting, you agree to our Terms of Service and Privacy Policy
                  </p>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
                <p className="text-blue-100 mb-6">
                  Our 30-minute demo is tailored to your restaurant's specific needs.
                </p>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-blue-50">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Demo Duration</h3>
                    <p className="text-gray-600">
                      Our standard demo takes 30 minutes, but we can adjust based on your needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-600">
                      We work around your schedule. Choose a time that works best for you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl shadow-xl p-8 border-2 border-dashed border-blue-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Special Offer
                </h3>
                <p className="text-gray-700 font-medium mb-4">
                  Book a demo this month and get 1 month free on any plan you choose!
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg text-sm font-semibold">
                  Limited Time Offer
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Questions Before Booking?
            </h2>
            <p className="text-gray-600 mb-6">
              Feel free to reach out to us directly. We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
              >
                Contact Us
              </a>
              <a
                href="https://wa.me/916203653946?text=Hi%20there!%20I%20want%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}