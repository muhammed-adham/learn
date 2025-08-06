import React, { useState } from 'react'
import {
    BookOpen,
    Bell,
    Star,
    CheckCircle,
    Menu,
    X,
    Settings,
    Palette,
    Eye,
    Zap,
    Sparkles,
    RefreshCw,
    Paintbrush,
    Sliders,
    History
} from 'lucide-react';

const TemplateCustomizer = ({ 
    colorScheme,
    setColorScheme,
    getColoredStyle,
    setShowCustomizer,
    showCustomizer,
    setSidebarTemplate,
    sidebarTemplate,
    headerTemplate,
    setHeaderTemplate,
    setAnnouncementTemplate,
    announcementTemplate,
    setRecentActivity,
    recentActivity
}) => {
    const [courseTemplate, setCourseTemplate] = useState(1);
    const [dashboardTemplate, setDashboardTemplate] = useState(1);

    // Template Customizer Visibility
    const [activeCustomizerTab, setActiveCustomizerTab] = useState('templates'); // 'templates' or 'colors'

    // Predefined Color Palettes
    const colorPalettes = [
        {
            name: 'الأزرق الكلاسيكي',
            colors: { primary: '#3B82F6', secondary: '#8B5CF6', accent: '#10B981' }
        },
        {
            name: 'الأخضر الطبيعي',
            colors: { primary: '#059669', secondary: '#0D9488', accent: '#F59E0B' }
        },
        {
            name: 'البنفسجي الملكي',
            colors: { primary: '#7C3AED', secondary: '#EC4899', accent: '#06B6D4' }
        },
        {
            name: 'البرتقالي الدافئ',
            colors: { primary: '#EA580C', secondary: '#DC2626', accent: '#65A30D' }
        },
        {
            name: 'الوردي العصري',
            colors: { primary: '#EC4899', secondary: '#F97316', accent: '#8B5CF6' }
        },
        {
            name: 'التركوازي الهادئ',
            colors: { primary: '#0891B2', secondary: '#059669', accent: '#7C2D12' }
        }
    ];

    // Color Picker Component
    const ColorPicker = ({ label, value, onChange, icon: Icon }) => (
        <div className="space-y-3">
            <div className="flex items-center space-x-3 space-x-reverse">
                <Icon className="w-5 h-5" style={{ color: value }} />
                <label className="text-sm font-medium text-gray-700">{label}</label>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse">
                <input
                    type="color"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-12 h-12 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-gray-300"
                />
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono"
                    placeholder="#000000"
                />
            </div>
        </div>
    );

    //Generate Harmonious Random Palette
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function generateRandomPalette() {
        return {
            name: 'لوحة عشوائية',
            colors: {
                primary: getRandomColor(),
                secondary: getRandomColor(),
                accent: getRandomColor()
            }
        };
    }
    return (
        <>
            <div style={{ backgroundColor: colorScheme.background }} dir="rtl">
                <div className={`fixed left-0 top-0 h-full w-full  z-60 ${showCustomizer ? 'after:content-[""] after:absolute after:inset-0 after:bg-black after:opacity-20 after:z-0' : '-translate-x-full'}`}>
                    {/* // Template Customizer Component */}
                    <div className={`fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${showCustomizer ? 'translate-x-0' : '-translate-x-full'

                        }`}>
                        <div
                            className="p-6 border-b border-gray-200 text-white"
                            style={{ background: `linear-gradient(to right, ${getColoredStyle('primary').bg}, ${getColoredStyle('secondary').bg})` }}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3 space-x-reverse">
                                    <Palette className="w-6 h-6" />
                                    <h3 className="text-lg font-bold">تخصيص المنصة</h3>
                                </div>
                                <button
                                    onClick={() => setShowCustomizer(false)}
                                    className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Customizer Tabs */}
                            <div className="flex mt-4 bg-white/20 rounded-xl p-1">
                                <button
                                    onClick={() => setActiveCustomizerTab('templates')}
                                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${activeCustomizerTab === 'templates' ? 'bg-white text-gray-800' : 'text-white/80 hover:text-white'
                                        }`}
                                >
                                    <Sliders className="w-4 h-4 mx-auto mb-1" />
                                    القوالب
                                </button>
                                <button
                                    onClick={() => setActiveCustomizerTab('colors')}
                                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${activeCustomizerTab === 'colors' ? 'bg-white text-gray-800' : 'text-white/80 hover:text-white'
                                        }`}
                                >
                                    <Paintbrush className="w-4 h-4 mx-auto mb-1" />
                                    الألوان
                                </button>
                            </div>
                        </div>

                        <div className="p-6 space-y-8 overflow-y-auto h-full pb-48">
                            {activeCustomizerTab === 'templates' ? (
                                <>
                                    {/* Header Templates */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                            <Sparkles className="w-5 h-5 ml-2 text-yellow-500" />
                                            قالب الترويسة
                                        </h4>
                                        <div className="grid grid-cols-3 gap-3">
                                            {[1, 2, 3].map(num => (
                                                <div
                                                    key={num}
                                                    onClick={() => setHeaderTemplate(num)}
                                                    className={`relative cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${headerTemplate === num ? 'ring-2' : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                    style={headerTemplate === num ? {
                                                        borderColor: getColoredStyle('primary').border,
                                                        '--tw-ring-color': getColoredStyle('primary').border
                                                    } : {}}
                                                >
                                                    <div className={`h-16 ${num === 1 ? '' :
                                                        num === 2 ? 'bg-white border-t-4' :
                                                            ''
                                                        }`}
                                                        style={
                                                            num === 1 ? { background: `linear-gradient(to right, ${getColoredStyle('primary').bg}, ${getColoredStyle('secondary').bg})` } :
                                                                num === 2 ? { borderColor: getColoredStyle('primary').bg } :
                                                                    { background: `linear-gradient(135deg, ${getColoredStyle('primary').bg}, ${getColoredStyle('secondary').bg}, ${getColoredStyle('accent').bg})` }
                                                        }
                                                    ></div>
                                                    <div className="p-2 text-center">
                                                        <span className="text-xs font-medium">قالب {num}</span>
                                                    </div>
                                                    {headerTemplate === num && (
                                                        <div
                                                            className="absolute top-1 right-1 text-white p-1 rounded-full"
                                                            style={{ backgroundColor: getColoredStyle('primary').bg }}
                                                        >
                                                            <CheckCircle className="w-3 h-3" />
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Course Templates */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                            <BookOpen className="w-5 h-5 ml-2 text-blue-500" />
                                            قالب المواد
                                        </h4>
                                        <div className="grid grid-cols-3 gap-3">
                                            {[1, 2, 3].map(num => (
                                                <div
                                                    key={num}
                                                    onClick={() => setCourseTemplate(num)}
                                                    className={`relative cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${courseTemplate === num ? 'ring-2' : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                    style={courseTemplate === num ? {
                                                        borderColor: getColoredStyle('primary').border,
                                                        '--tw-ring-color': getColoredStyle('primary').border
                                                    } : {}}
                                                >
                                                    <div
                                                        className="h-16"
                                                        style={{ backgroundColor: getColoredStyle('primary').bgLight }}
                                                    >
                                                        <div className="p-2">
                                                            <div className="w-full h-2 bg-white/50 rounded-full mb-1"></div>
                                                            <div className="w-3/4 h-1 bg-white/30 rounded-full"></div>
                                                        </div>
                                                    </div>
                                                    <div className="p-2 text-center">
                                                        <span className="text-xs font-medium">قالب {num}</span>
                                                    </div>
                                                    {courseTemplate === num && (
                                                        <div
                                                            className="absolute top-1 right-1 text-white p-1 rounded-full"
                                                            style={{ backgroundColor: getColoredStyle('primary').bg }}
                                                        >
                                                            <CheckCircle className="w-3 h-3" />
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Announcement Templates */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                            <Bell className="w-5 h-5 ml-2 text-yellow-500" />
                                            قالب الإعلانات
                                        </h4>
                                        <div className="grid grid-cols-3 gap-3">
                                            {[1, 2, 3].map(num => (
                                                <div
                                                    key={num}
                                                    onClick={() => setAnnouncementTemplate(num)}
                                                    className={`relative cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${announcementTemplate === num ? 'ring-2' : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                    style={announcementTemplate === num ? {
                                                        borderColor: getColoredStyle('primary').border,
                                                        '--tw-ring-color': getColoredStyle('primary').border
                                                    } : {}}
                                                >
                                                    <div className="h-16 p-2 bg-gray-50">
                                                        {num === 1 && <div className="h-3 rounded mb-1 border-r-2" style={{ backgroundColor: getColoredStyle('primary').bgLight, borderColor: getColoredStyle('primary').border }}></div>}
                                                        {num === 2 && <div className="flex items-start space-x-2 space-x-reverse"><div className="w-3 h-3 rounded-full mt-1" style={{ backgroundColor: getColoredStyle('primary').bg }}></div><div className="flex-1"><div className="h-2 bg-gray-300 rounded mb-1"></div><div className="h-1 bg-gray-200 rounded"></div></div></div>}
                                                        {num === 3 && <div className="h-3 bg-gray-200 rounded mb-1 border-l-2" style={{ borderColor: getColoredStyle('primary').border }}></div>}
                                                        <div className="h-2 bg-gray-200 rounded mb-1"></div>
                                                        <div className="h-1 bg-gray-100 rounded"></div>
                                                    </div>
                                                    <div className="p-2 text-center">
                                                        <span className="text-xs font-medium">قالب {num}</span>
                                                    </div>
                                                    {announcementTemplate === num && (
                                                        <div
                                                            className="absolute top-1 right-1 text-white p-1 rounded-full"
                                                            style={{ backgroundColor: getColoredStyle('primary').bg }}
                                                        >
                                                            <CheckCircle className="w-3 h-3" />
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Recent Activity */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                            <History className="w-5 h-5 ml-2 text-orange-500" />
                                            قالب النشاظات
                                        </h4>
                                        <div className="grid grid-cols-3 gap-3">
                                            {[1, 2, 3].map(num => (
                                                <div
                                                    key={num}
                                                    onClick={() => setRecentActivity(num)}
                                                    className={`relative cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${recentActivity === num ? 'ring-2' : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                    style={recentActivity === num ? {
                                                        borderColor: getColoredStyle('primary').border,
                                                        '--tw-ring-color': getColoredStyle('primary').border
                                                    } : {}}
                                                >
                                                    <div className="h-16 p-2 bg-gray-50">
                                                        {num === 1 && <div className="h-3 rounded mb-1 border-r-2" style={{ backgroundColor: getColoredStyle('primary').bgLight, borderColor: getColoredStyle('primary').border }}></div>}
                                                        {num === 2 && <div className="flex items-start space-x-2 space-x-reverse"><div className="w-3 h-3 rounded-full mt-1" style={{ backgroundColor: getColoredStyle('primary').bg }}></div><div className="flex-1"><div className="h-2 bg-gray-300 rounded mb-1"></div><div className="h-1 bg-gray-200 rounded"></div></div></div>}
                                                        {num === 3 && <div className="h-3 bg-gray-200 rounded mb-1 border-l-2" style={{ borderColor: getColoredStyle('primary').border }}></div>}
                                                        <div className="h-2 bg-gray-200 rounded mb-1"></div>
                                                        <div className="h-1 bg-gray-100 rounded"></div>
                                                    </div>
                                                    <div className="p-2 text-center">
                                                        <span className="text-xs font-medium">قالب {num}</span>
                                                    </div>
                                                    {recentActivity === num && (
                                                        <div
                                                            className="absolute top-1 right-1 text-white p-1 rounded-full"
                                                            style={{ backgroundColor: getColoredStyle('primary').bg }}
                                                        >
                                                            <CheckCircle className="w-3 h-3" />
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Sidebar Templates */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                            <Menu className="w-5 h-5 ml-2 text-green-500" />
                                            قالب الشريط الجانبي
                                        </h4>
                                        <div className="grid grid-cols-3 gap-3">
                                            {[1, 2, 3].map(num => (
                                                <div
                                                    key={num}
                                                    onClick={() => setSidebarTemplate(num)}
                                                    className={`relative cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${sidebarTemplate === num ? 'ring-2' : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                    style={sidebarTemplate === num ? {
                                                        borderColor: getColoredStyle('primary').border,
                                                        '--tw-ring-color': getColoredStyle('primary').border
                                                    } : {}}
                                                >
                                                    <div className={`h-16 ${num === 2 ? 'bg-gradient-to-b from-gray-800 to-gray-900' :
                                                        num === 3 ? '' : ''
                                                        }`}
                                                        style={
                                                            num === 1 ? { background: `linear-gradient(to bottom, ${getColoredStyle('primary').bg}, ${getColoredStyle('secondary').bg})` } :
                                                                num === 3 ? { background: `linear-gradient(to bottom, ${getColoredStyle('primary').bgLight}, white)` } : {}
                                                        }
                                                    >
                                                        <div className="p-2 space-y-1">
                                                            <div className={`h-1 rounded ${num === 2 ? 'bg-white/30' : 'bg-white/50'}`} style={num === 3 ? { backgroundColor: getColoredStyle('primary').bg, opacity: 0.3 } : {}}></div>
                                                            <div className={`h-1 rounded ${num === 2 ? 'bg-white/20' : 'bg-white/30'}`} style={num === 3 ? { backgroundColor: getColoredStyle('primary').bg, opacity: 0.2 } : {}}></div>
                                                            <div className={`h-1 rounded`} style={
                                                                num === 2 ? { backgroundColor: getColoredStyle('accent').bg } :
                                                                    num === 3 ? { backgroundColor: getColoredStyle('primary').bg, opacity: 0.4 } :
                                                                        { backgroundColor: 'rgba(255,255,255,0.4)' }
                                                            }></div>
                                                        </div>
                                                    </div>
                                                    <div className="p-2 text-center">
                                                        <span className="text-xs font-medium">قالب {num}</span>
                                                    </div>
                                                    {sidebarTemplate === num && (
                                                        <div
                                                            className="absolute top-1 right-1 text-white p-1 rounded-full"
                                                            style={{ backgroundColor: getColoredStyle('primary').bg }}
                                                        >
                                                            <CheckCircle className="w-3 h-3" />
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quick Presets */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                            <Zap className="w-5 h-5 ml-2 text-purple-500" />
                                            تصاميم جاهزة
                                        </h4>
                                        <div className="space-y-3">
                                            <button
                                                onClick={() => {
                                                    setHeaderTemplate(1);
                                                    setCourseTemplate(1);
                                                    setAnnouncementTemplate(1);
                                                    setSidebarTemplate(1);
                                                    setRecentActivity(1)
                                                }}
                                                className="w-full p-3 border rounded-xl text-right hover:shadow-md transition-all"
                                                style={{
                                                    background: `linear-gradient(to right, ${getColoredStyle('primary').bgLight}, ${getColoredStyle('secondary').bgLight})`,
                                                    borderColor: getColoredStyle('primary').border
                                                }}
                                            >
                                                <div className="font-medium text-gray-800">التصميم الكلاسيكي</div>
                                                <div className="text-sm text-gray-500">تصميم أنيق ومهني</div>
                                            </button>

                                            <button
                                                onClick={() => {
                                                    setHeaderTemplate(2);
                                                    setCourseTemplate(2);
                                                    setAnnouncementTemplate(2);
                                                    setSidebarTemplate(2);
                                                    setRecentActivity(2)
                                                }}
                                                className="w-full p-3 border rounded-xl text-right hover:shadow-md transition-all"
                                                style={{
                                                    background: `linear-gradient(to right, ${getColoredStyle('accent').bgLight}, ${getColoredStyle('primary').bgLight})`,
                                                    borderColor: getColoredStyle('accent').border
                                                }}
                                            >
                                                <div className="font-medium text-gray-800">التصميم المتقدم</div>
                                                <div className="text-sm text-gray-500">عصري ومليء بالميزات</div>
                                            </button>

                                            <button
                                                onClick={() => {
                                                    setHeaderTemplate(3);
                                                    setCourseTemplate(3);
                                                    setAnnouncementTemplate(3);
                                                    setSidebarTemplate(3);
                                                    setRecentActivity(3)
                                                }}
                                                className="w-full p-3 border rounded-xl text-right hover:shadow-md transition-all"
                                                style={{
                                                    background: `linear-gradient(to right, ${getColoredStyle('secondary').bgLight}, ${getColoredStyle('accent').bgLight})`,
                                                    borderColor: getColoredStyle('secondary').border
                                                }}
                                            >
                                                <div className="font-medium text-gray-800">التصميم الإبداعي</div>
                                                <div className="text-sm text-gray-500">ملون وجذاب للطلاب</div>
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Color Customization */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                                            <Palette className="w-5 h-5 ml-2 text-purple-500" />
                                            تخصيص الألوان
                                        </h4>

                                        {/* Color Preview */}
                                        <div className="mb-8 p-4 rounded-2xl border-2" style={{ borderColor: getColoredStyle('primary').border }}>
                                            <h5 className="text-sm font-medium text-gray-700 mb-3">معاينة الألوان</h5>
                                            <div className="grid grid-cols-3 gap-3">
                                                <div
                                                    className="h-12 rounded-xl flex items-center justify-center text-white text-xs font-medium"
                                                    style={{ backgroundColor: colorScheme.primary }}
                                                >
                                                    الأساسي
                                                </div>
                                                <div
                                                    className="h-12 rounded-xl flex items-center justify-center text-white text-xs font-medium"
                                                    style={{ backgroundColor: colorScheme.secondary }}
                                                >
                                                    الثانوي
                                                </div>
                                                <div
                                                    className="h-12 rounded-xl flex items-center justify-center text-white text-xs font-medium"
                                                    style={{ backgroundColor: colorScheme.accent }}
                                                >
                                                    المميز
                                                </div>
                                            </div>
                                        </div>

                                        {/* Color Pickers */}
                                        <div className="space-y-6">
                                            <ColorPicker
                                                label="اللون الأساسي"
                                                value={colorScheme.primary}
                                                onChange={(color) => setColorScheme(prev => ({ ...prev, primary: color }))}
                                                icon={Palette}
                                            />

                                            <ColorPicker
                                                label="اللون الثانوي"
                                                value={colorScheme.secondary}
                                                onChange={(color) => setColorScheme(prev => ({ ...prev, secondary: color }))}
                                                icon={Sparkles}
                                            />

                                            <ColorPicker
                                                label="اللون المميز"
                                                value={colorScheme.accent}
                                                onChange={(color) => setColorScheme(prev => ({ ...prev, accent: color }))}
                                                icon={Star}
                                            />
                                        </div>
                                    </div>

                                    {/* Predefined Color Palettes */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                            <Eye className="w-5 h-5 ml-2 text-indigo-500" />
                                            لوحات الألوان الجاهزة
                                        </h4>
                                        <div className="space-y-3">
                                            {colorPalettes.map((palette, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setColorScheme(prev => ({ ...prev, ...palette.colors }))}
                                                    className="w-full p-4 border border-gray-200 rounded-xl text-right hover:shadow-md transition-all hover:border-gray-300"
                                                >
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="font-medium text-gray-800">{palette.name}</span>
                                                        <div className="flex space-x-1 space-x-reverse">
                                                            <div
                                                                className="w-4 h-4 rounded-full border border-gray-200"
                                                                style={{ backgroundColor: palette.colors.primary }}
                                                            ></div>
                                                            <div
                                                                className="w-4 h-4 rounded-full border border-gray-200"
                                                                style={{ backgroundColor: palette.colors.secondary }}
                                                            ></div>
                                                            <div
                                                                className="w-4 h-4 rounded-full border border-gray-200"
                                                                style={{ backgroundColor: palette.colors.accent }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Color Actions */}
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                            <Settings className="w-5 h-5 ml-2 text-gray-500" />
                                            إجراءات الألوان
                                        </h4>
                                        <div className="space-y-3">
                                            <button
                                                onClick={() => setColorScheme({
                                                    primary: '#3B82F6',
                                                    secondary: '#8B5CF6',
                                                    accent: '#10B981',
                                                    background: '#F9FAFB',
                                                    surface: '#FFFFFF',
                                                    text: '#1F2937',
                                                    textSecondary: '#6B7280'
                                                })}
                                                className="w-full flex items-center justify-center space-x-2 space-x-reverse p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                                            >
                                                <RefreshCw className="w-4 h-4" />
                                                <span className="font-medium">استعادة الألوان الافتراضية</span>
                                            </button>

                                            <button
                                                onClick={() => {
                                                    const randomPalette = generateRandomPalette();
                                                    setColorScheme(prev => ({ ...prev, ...randomPalette.colors }));
                                                }}
                                                className="w-full flex items-center justify-center space-x-2 space-x-reverse p-3 text-white rounded-xl transition-colors hover:opacity-90"
                                                style={{ backgroundColor: getColoredStyle('primary').bg }}
                                            >
                                                <Sparkles className="w-4 h-4" />
                                                <span className="font-medium">لوحة ألوان عشوائية</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Live Preview Toggle */}
                                    <div className="bg-gray-50 rounded-2xl p-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h5 className="font-medium text-gray-800">المعاينة المباشرة</h5>
                                                <p className="text-sm text-gray-500">تطبيق الألوان فوراً أثناء التغيير</p>
                                            </div>
                                            <div
                                                className="w-6 h-6 rounded-full flex items-center justify-center"
                                                style={{ backgroundColor: getColoredStyle('accent').bg }}
                                            >
                                                <Eye className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Customizer Toggle Button */}
                <button
                    onClick={() => setShowCustomizer(true)}
                    className="fixed left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-r-2xl shadow-lg hover:shadow-xl transition-all duration-300 z-40 hover:scale-105"
                    style={{ background: `linear-gradient(135deg, ${getColoredStyle('primary').bg}, ${getColoredStyle('secondary').bg})` }}
                >
                    <div className="flex flex-col items-center space-y-1">
                        <Palette className="w-5 h-5" />
                        <span className="text-xs font-medium">تخصيص</span>
                    </div>
                </button>
            </div >
        </>
    )
}

export default TemplateCustomizer