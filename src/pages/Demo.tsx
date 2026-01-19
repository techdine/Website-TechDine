import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Calendar, CheckCircle2, Clock, Loader2, PlayCircle, Video } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

export default function Demo() {
  const [demoType, setDemoType] = useState<'live' | 'self'>('live');
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
      if (!supabaseUrl || !supabaseAnonKey) {
        // Simulate success for dev without env vars
        console.warn("Supabase keys missing, simulating success");
        setTimeout(() => {
          setSubmitSuccess(true);
          reset();
        }, 1000);
        setIsSubmitting(false);
        return;
      }

      const { error } = await supabase
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
        ]);

      if (error) throw error;

      setSubmitSuccess(true);
      setTimeout(() => {
        reset();
        setSubmitSuccess(false);
      }, 5000);
    } catch (error: any) {
      console.error('Error:', error);
      setSubmitError(error.message || 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      {/* Toast Messages */}
      {submitSuccess && (
        <div className="fixed top-24 right-4 z-50 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in">
          <CheckCircle2 className="w-6 h-6" />
          <div>
            <p className="font-semibold">Request Received!</p>
            <p className="text-sm text-green-100">We'll confirm your slot shortly.</p>
          </div>
        </div>
      )}

      {submitError && (
        <div className="fixed top-24 right-4 z-50 bg-red-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
          <p className="font-semibold">Submission Failed: {submitError}</p>
          <button onClick={() => setSubmitError(null)}>✕</button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See TechDine in Action
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose how you want to explore the platform.
          </p>
        </motion.div>

        {/* Toggle / Selection Cards */}
        <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto mb-12">
          <button
            onClick={() => setDemoType('live')}
            className={`flex-1 p-6 rounded-xl border-2 text-left transition-all ${demoType === 'live'
              ? 'border-primary-600 bg-white shadow-lg ring-4 ring-primary-50'
              : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${demoType === 'live' ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-500'}`}>
              <Video className="w-6 h-6" />
            </div>
            <h3 className={`text-lg font-bold mb-2 ${demoType === 'live' ? 'text-primary-900' : 'text-gray-900'}`}>Live 1-on-1 Demo</h3>
            <p className="text-gray-600 text-sm">Schedule a personalized walkthrough with our product expert. Best for specific questions.</p>
          </button>

          <button
            onClick={() => setDemoType('self')}
            className={`flex-1 p-6 rounded-xl border-2 text-left transition-all ${demoType === 'self'
              ? 'border-primary-600 bg-white shadow-lg ring-4 ring-primary-50'
              : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${demoType === 'self' ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-500'}`}>
              <PlayCircle className="w-6 h-6" />
            </div>
            <h3 className={`text-lg font-bold mb-2 ${demoType === 'self' ? 'text-primary-900' : 'text-gray-900'}`}>Self-Service Tour</h3>
            <p className="text-gray-600 text-sm">Watch a guided video tour of key features at your own pace. Instant access.</p>
          </button>
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto">
          {demoType === 'live' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="grid md:grid-cols-5 h-full">
                <div className="md:col-span-3 p-8">
                  <h3 className="text-2xl font-bold mb-6">Schedule Your Call</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input {...register('name', { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="John Doe" />
                        {errors.name && <span className="text-red-500 text-xs">Required</span>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input {...register('phone', { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="+91 98765 43210" />
                        {errors.phone && <span className="text-red-500 text-xs">Required</span>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                        <input {...register('businessName', { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="My Cafe" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                        <select {...register('businessType')} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                          <option value="restaurant">Restaurant</option>
                          <option value="cafe">Cafe</option>
                          <option value="cloud-kitchen">Cloud Kitchen</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                        <input type="date" {...register('preferredDate', { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                        <select {...register('preferredTime', { required: true })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                          <option value="10:00">10:00 AM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Confirm Booking'}
                    </button>
                  </form>
                </div>
                <div className="md:col-span-2 bg-primary-900 p-8 text-white flex flex-col justify-center">
                  <h4 className="text-xl font-bold mb-4">Why Book a Demo?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-400 mt-0.5" />
                      <span className="text-sm text-primary-100">Get a tailored tour of features relevant to you</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-400 mt-0.5" />
                      <span className="text-sm text-primary-100">Discuss pricing plans for your specific needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-400 mt-0.5" />
                      <span className="text-sm text-primary-100">See how we handle GST and Inventory</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-900 rounded-2xl shadow-xl border border-gray-800 p-12 text-center text-white"
            >
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <PlayCircle className="w-10 h-10 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Product Tour Video</h3>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">We are finalizing our latest product tour video. In the meantime, please check our features page or book a live demo.</p>
              <Link to="/features" className="inline-block px-6 py-3 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Explore Features
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}