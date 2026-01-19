import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Check,
    X,
    Clock,
    Truck,
    ArrowRight,
    UtensilsCrossed,
    CreditCard,
    FileText,
    TrendingUp,
    BarChart3,
    Smartphone,
    ChefHat,
    Receipt,
    Package,
    UserCheck,
} from 'lucide-react';

export default function Features() {
    const [searchParams] = useSearchParams();
    const initialTab = searchParams.get('tab');
    const validTabs = ['dashboard', 'admin'];
    const [activeTab, setActiveTab] = useState(initialTab && validTabs.includes(initialTab) ? initialTab : 'dashboard');

    const tabs = [
        { id: 'dashboard', label: 'Unified Dashboard', icon: LayoutDashboard },
        { id: 'admin', label: 'Admin Panel', icon: Users },
    ];

    const featuresData = {
        dashboard: {
            title: 'Restaurant Unified Dashboard',
            description: 'The heart of your operations. Manage everything from a single screen with real-time sync.',
            features: [
                { title: 'Table Management', desc: 'Visual table layout, occupancy status', icon: LayoutDashboard },
                { title: 'Order Management', desc: 'Create orders, add items to tables', icon: UtensilsCrossed },
                { title: 'QR Menu', desc: 'Contactless ordering for customers', icon: Smartphone },
                { title: 'KOT System', desc: 'Kitchen Order Tickets, auto-print', icon: ChefHat },
                { title: 'Billing', desc: 'Generate bills, GST calculations', icon: Receipt },
                { title: 'Online Orders', desc: 'Handle delivery orders', icon: Truck },
                { title: 'Menu Management', desc: 'Add/remove menu items', icon: FileText },
                { title: 'Payment Methods', desc: 'Cash, Card, UPI', icon: CreditCard }
            ],
            color: 'blue'
        },
        admin: {
            title: 'Restaurant Admin Panel',
            description: 'Complete backend control. Track inventory, staff, and business growth from anywhere.',
            features: [
                { title: 'Analytics Dashboard', desc: 'Real-time stats & overview', icon: TrendingUp },
                { title: 'Inventory Management', desc: 'Ingredients, stock tracking', icon: Package },
                { title: 'Suppliers', desc: 'Supplier details & orders', icon: Users },
                { title: 'Staff Management', desc: 'Employee records & access', icon: UserCheck },
                { title: 'Reports', desc: 'Sales, Taxes, and Stock reports', icon: BarChart3 }
            ],
            color: 'purple'
        }
    };

    const timeline = [
        {
            time: '10:00 AM',
            title: 'Restaurant Opens',
            desc: 'Manager logs in. Dashboard shows yesterday\'s sales and today\'s inventory needs. Purchase orders are auto-sent to vendors.',
            icon: Clock
        },
        {
            time: '1:00 PM',
            title: 'Lunch Peak',
            desc: 'Waiters punch orders on tablets. KOTs print instantly in the kitchen. 40 tables handled smoothly without confusion.',
            icon: Users
        },
        {
            time: '4:00 PM',
            title: 'Online Orders',
            desc: 'Zomato/Swiggy orders land directly on the POS. Kitchen prioritizes delivery items automatically.',
            icon: Truck
        },
        {
            time: '11:00 PM',
            title: 'Closing',
            desc: 'One-click Day End report. Cash tally matched with system. Auto-backup of data to cloud.',
            icon: Check
        }
    ];

    return (
        <div className="bg-white pt-24">
            {/* Hero Section */}
            <section className="py-20 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Capabilities that <span className="text-primary-600">Scale With You</span>
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                        From a single cafe to a multi-city chain, TechDine has the depth to handle your operations.
                    </p>
                </div>
            </section>

            {/* Feature Explorer */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Sidebar / Tabs */}
                        <div className="lg:col-span-3 space-y-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all ${activeTab === tab.id
                                        ? 'bg-primary-50 text-primary-700 border-primary-200 shadow-sm ring-1 ring-primary-200'
                                        : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? 'text-primary-600' : 'text-gray-400'}`} />
                                    <span className="font-semibold text-lg">{tab.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-9">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full flex flex-col"
                                >
                                    <div className="mb-8">
                                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-${featuresData[activeTab as keyof typeof featuresData].color}-50 text-${featuresData[activeTab as keyof typeof featuresData].color}-700 w-fit`}>
                                            Feature Spotlight
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuresData[activeTab as keyof typeof featuresData].title}</h2>
                                        <p className="text-xl text-gray-600">{featuresData[activeTab as keyof typeof featuresData].description}</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {featuresData[activeTab as keyof typeof featuresData].features.map((feature, i) => (
                                            <div key={i} className="group p-6 rounded-2xl border border-gray-100 bg-white hover:border-primary-100 hover:shadow-lg transition-all duration-300">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-${featuresData[activeTab as keyof typeof featuresData].color}-50 text-${featuresData[activeTab as keyof typeof featuresData].color}-600 group-hover:scale-110 transition-transform`}>
                                                    <feature.icon className="w-6 h-6" />
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Day in the Life Timeline */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 to-gray-900 -z-10" />
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">A Day in the Life with TechDine</h2>
                        <p className="text-gray-400">See how operations flow seamlessly from morning to night.</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Thread Line */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 md:-ml-[1px]" />

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                        }`}
                                >
                                    <div className="flex-1 md:text-right">
                                        {index % 2 === 0 && (
                                            <div className="hidden md:block">
                                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                                <p className="text-primary-400 font-mono mb-2">{item.time}</p>
                                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Icon Node */}
                                    <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary-600 border-4 border-gray-900 flex items-center justify-center shadow-lg shadow-primary-500/20">
                                        <item.icon className="w-5 h-5 text-white" />
                                    </div>

                                    <div className="flex-1 pl-12 md:pl-0">
                                        <div className="md:hidden">
                                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                            <p className="text-primary-400 font-mono mb-2">{item.time}</p>
                                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                        {index % 2 !== 0 && (
                                            <div className="hidden md:block text-left">
                                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                                <p className="text-primary-400 font-mono mb-2">{item.time}</p>
                                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">Why Upgrade?</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-gray-100">
                                    <th className="py-4 px-6 text-left text-gray-500 font-medium">Feature</th>
                                    <th className="py-4 px-6 text-center text-red-500 font-bold bg-red-50/50 rounded-t-lg">Legacy POS</th>
                                    <th className="py-4 px-6 text-center text-primary-600 font-bold bg-primary-50/50 rounded-t-lg">TechDine</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { feature: 'Cloud Access', old: false, new: true },
                                    { feature: 'Hardware Dependent', old: true, new: false },
                                    { feature: 'Auto-Backup', old: false, new: true },
                                    { feature: 'Mobile Reporting', old: false, new: true },
                                    { feature: 'WhatsApp Integration', old: false, new: true },
                                    { feature: 'Free Updates', old: false, new: true },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                                        <td className="py-4 px-6 text-center bg-red-50/30">
                                            {row.old ? (
                                                <Check className="w-5 h-5 text-red-500 mx-auto" />
                                            ) : (
                                                <X className="w-5 h-5 text-gray-300 mx-auto" />
                                            )}
                                        </td>
                                        <td className="py-4 px-6 text-center bg-primary-50/30">
                                            {row.new ? (
                                                <Check className="w-6 h-6 text-primary-600 mx-auto" />
                                            ) : (
                                                <X className="w-5 h-5 text-gray-300 mx-auto" />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">See the difference in your bottom line</h2>
                    <Link
                        to="/demo"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25 hover:scale-105"
                    >
                        Calculate Your Savings
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
