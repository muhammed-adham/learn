import React, { useState, useEffect } from 'react';
import {
    BookOpen,
    Calendar,
    MessageCircle,
    Bell,
    User,
    Search,
    Clock,
    FileText,
    Video,
    Download,
    Star,
    TrendingUp,
    Award,
    PlayCircle,
    CheckCircle,
    AlertCircle,
    Menu,
    X,
    Home,
    Users,
    Settings,
    LogOut,
    GraduationCap,
    Heart,
    MapPin,
    Palette,
    Eye,
    Zap,
    Sparkles,
    Globe,
    Camera,
    RefreshCw,
    Save,
    Paintbrush,
    Sliders
} from 'lucide-react';

const CustomizableTeacherLMS = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Template Selection States
    const [headerTemplate, setHeaderTemplate] = useState(1);
    const [courseTemplate, setCourseTemplate] = useState(1);
    const [announcementTemplate, setAnnouncementTemplate] = useState(1);
    const [sidebarTemplate, setSidebarTemplate] = useState(1);
    const [dashboardTemplate, setDashboardTemplate] = useState(1);

    // Template Customizer Visibility
    const [showCustomizer, setShowCustomizer] = useState(false);
    const [activeCustomizerTab, setActiveCustomizerTab] = useState('templates'); // 'templates' or 'colors'
    

    // Color Customization State
    const [colorScheme, setColorScheme] = useState({
        primary: '#3B82F6', // blue-500
        secondary: '#8B5CF6', // violet-500
        accent: '#10B981', // emerald-500
        background: '#F9FAFB', // gray-50
        surface: '#FFFFFF', // white
        text: '#1F2937', // gray-800
        textSecondary: '#6B7280' // gray-500
    });

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

    // Teacher Configuration (Customizable)
    const teacherConfig = {
        name: "أ. شيشتاوي شيبوب",
        subject: "اللغة العربية",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=150&h=150&fit=crop&crop=face",
        experience: "15 سنة خبرة",
        school: "مدرسة النيل الثانوية",
        motto: "التعلم رحلة، والنجاح وجهة",
        totalStudents: 127,
        rating: 4.9,
        theme: colorScheme
    };

    const studentData = {
        name: "أحمد محمد",
        grade: "الثانوية العامة - الصف الثالث",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        overallProgress: 85
    };

    // Helper function to generate dynamic styles based on color scheme
    const getColoredStyle = (type, variant = 'default') => {
        const { primary, secondary, accent } = colorScheme;

        const colorMap = {
            primary: {
                bg: `rgb(${hexToRgb(primary).join(', ')})`,
                bgLight: `rgba(${hexToRgb(primary).join(', ')}, 0.1)`,
                text: primary,
                border: primary
            },
            secondary: {
                bg: `rgb(${hexToRgb(secondary).join(', ')})`,
                bgLight: `rgba(${hexToRgb(secondary).join(', ')}, 0.1)`,
                text: secondary,
                border: secondary
            },
            accent: {
                bg: `rgb(${hexToRgb(accent).join(', ')})`,
                bgLight: `rgba(${hexToRgb(accent).join(', ')}, 0.1)`,
                text: accent,
                border: accent
            }
        };

        return colorMap[type] || colorMap.primary;
    };

    // Helper function to convert hex to RGB
    const hexToRgb = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ] : [59, 130, 246]; // fallback to blue
    };

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

    // Template Variations for Headers with dynamic colors
    const HeaderTemplates = {
        1: ({ teacher, student }) => {
            const primaryStyle = getColoredStyle('primary');
            const secondaryStyle = getColoredStyle('secondary');

            return (
                <div
                    className="rounded-3xl p-8 text-white relative overflow-hidden"
                    style={{
                        background: `linear-gradient(to right, ${primaryStyle.bg}, ${secondaryStyle.bg})`
                    }}
                >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-6 space-x-reverse">
                                <img src={teacher.avatar} className="w-20 h-20 rounded-3xl object-cover border-4 border-white/30" />
                                <div>
                                    <h1 className="text-3xl font-bold mb-2">منصة {teacher.name}</h1>
                                    <p className="text-blue-100 text-lg">{teacher.subject}</p>
                                    <p className="text-blue-100 text-sm">{teacher.school}</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold">{student.overallProgress}%</div>
                                <div className="text-blue-100">تقدمك</div>
                            </div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                            <p className="text-lg font-medium italic">"{teacher.motto}"</p>
                        </div>
                    </div>
                </div>
            );
        },

        2: ({ teacher, student }) => {
            const primaryStyle = getColoredStyle('primary');
            const accentStyle = getColoredStyle('accent');

            return (
                <div className="bg-white rounded-3xl shadow-2xl p-8 border-t-8" style={{ borderColor: primaryStyle.bg }}>
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-6 space-x-reverse">
                            <div className="relative">
                                <img src={teacher.avatar} className="w-24 h-24 rounded-2xl object-cover" />
                                <div
                                    className="absolute -bottom-2 -right-2 text-white text-xs px-2 py-1 rounded-full"
                                    style={{ backgroundColor: accentStyle.bg }}
                                >
                                    ⭐ {teacher.rating}
                                </div>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold text-gray-800 mb-2">{teacher.name}</h1>
                                <p className="text-xl font-semibold" style={{ color: primaryStyle.text }}>{teacher.subject}</p>
                                <p className="text-gray-500">{teacher.experience} • {teacher.totalStudents} طالب</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div
                                className="rounded-2xl p-4"
                                style={{ background: `linear-gradient(to right, ${primaryStyle.bgLight}, ${accentStyle.bgLight})` }}
                            >
                                <div className="text-2xl font-bold" style={{ color: primaryStyle.text }}>{student.overallProgress}%</div>
                                <div className="text-sm" style={{ color: primaryStyle.text }}>إنجازك معي</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="rounded-2xl p-6 border"
                        style={{
                            background: `linear-gradient(to right, ${primaryStyle.bgLight}, ${accentStyle.bgLight})`,
                            borderColor: primaryStyle.border
                        }}
                    >
                        <p className="text-center text-lg font-medium text-gray-700">"{teacher.motto}"</p>
                    </div>
                </div>
            );
        },

        3: ({ teacher, student }) => {
            const primaryStyle = getColoredStyle('primary');
            const secondaryStyle = getColoredStyle('secondary');
            const accentStyle = getColoredStyle('accent');

            return (
                <div className="relative">
                    <div
                        className="rounded-3xl p-1"
                        style={{ background: `linear-gradient(135deg, ${primaryStyle.bg}, ${secondaryStyle.bg}, ${accentStyle.bg})` }}
                    >
                        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8">
                            <div className="text-center mb-6">
                                <div className="relative inline-block mb-4">
                                    <img src={teacher.avatar} className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-white shadow-2xl" />
                                    <div
                                        className="absolute -top-2 -right-2 text-white p-2 rounded-full"
                                        style={{ background: `linear-gradient(45deg, ${accentStyle.bg}, #F59E0B)` }}
                                    >
                                        <Star className="w-5 h-5" />
                                    </div>
                                </div>
                                <h1
                                    className="text-4xl font-bold mb-2"
                                    style={{ background: `linear-gradient(45deg, ${primaryStyle.bg}, ${secondaryStyle.bg})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                                >
                                    {teacher.name}
                                </h1>
                                <p className="text-xl text-gray-600 mb-2">{teacher.subject}</p>
                                <div className="flex items-center justify-center space-x-2 space-x-reverse text-gray-500">
                                    <MapPin className="w-4 h-4" />
                                    <span>{teacher.school}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div
                                    className="text-center p-3 rounded-2xl"
                                    style={{ background: `linear-gradient(135deg, ${primaryStyle.bgLight}, ${primaryStyle.bgLight})` }}
                                >
                                    <div className="text-2xl font-bold" style={{ color: primaryStyle.text }}>{teacher.rating}</div>
                                    <div className="text-xs" style={{ color: primaryStyle.text }}>تقييم</div>
                                </div>
                                <div
                                    className="text-center p-3 rounded-2xl"
                                    style={{ background: `linear-gradient(135deg, ${accentStyle.bgLight}, ${accentStyle.bgLight})` }}
                                >
                                    <div className="text-2xl font-bold" style={{ color: accentStyle.text }}>{teacher.totalStudents}</div>
                                    <div className="text-xs" style={{ color: accentStyle.text }}>طالب</div>
                                </div>
                                <div
                                    className="text-center p-3 rounded-2xl"
                                    style={{ background: `linear-gradient(135deg, ${secondaryStyle.bgLight}, ${secondaryStyle.bgLight})` }}
                                >
                                    <div className="text-2xl font-bold" style={{ color: secondaryStyle.text }}>{student.overallProgress}%</div>
                                    <div className="text-xs" style={{ color: secondaryStyle.text }}>تقدمك</div>
                                </div>
                            </div>

                            <div className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4">
                                <p className="font-medium text-gray-700 italic">"{teacher.motto}"</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };

    // Template Variations for Course Cards with dynamic colors
    const CourseTemplates = {
        1: ({ courses }) => {
            const primaryStyle = getColoredStyle('primary');

            return (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course, index) => {
                        const colorType = index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'accent';
                        const courseStyle = getColoredStyle(colorType);

                        return (
                            <div key={course.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                                <div
                                    className="h-32 relative"
                                    style={{ backgroundColor: courseStyle.bg }}
                                >
                                    <div className="absolute inset-0 bg-black/10"></div>
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                                        {course.level}
                                    </div>
                                    <div className="absolute bottom-4 right-4 text-white">
                                        <div className="text-2xl font-bold">{course.progress}%</div>
                                        <div className="text-sm opacity-90">مكتمل</div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{course.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                                        <div
                                            className="h-2 rounded-full"
                                            style={{
                                                background: `linear-gradient(to right, ${courseStyle.bg}, ${courseStyle.bg})`,
                                                width: `${course.progress}%`
                                            }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-4 space-x-reverse text-sm text-gray-500">
                                            <span>{course.assignments} واجب</span>
                                            <span>{course.students} طالب</span>
                                        </div>
                                        <button
                                            className="font-medium hover:opacity-80"
                                            style={{ color: courseStyle.text }}
                                        >
                                            دخول
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        },

        2: ({ courses }) => {
            return (
                <div className="grid md:grid-cols-2 gap-6">
                    {courses.map((course, index) => {
                        const colorType = index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'accent';
                        const courseStyle = getColoredStyle(colorType);

                        return (
                            <div key={course.id} className="bg-white rounded-2xl shadow-lg p-6 border-l-8 hover:shadow-xl transition-shadow" style={{ borderColor: courseStyle.border }}>
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-3 space-x-reverse mb-2">
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center"
                                                style={{ backgroundColor: courseStyle.bg }}
                                            >
                                                <BookOpen className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-800">{course.name}</h3>
                                                <p className="text-sm text-gray-500">{course.level}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-bold" style={{ color: courseStyle.text }}>{course.progress}%</div>
                                        <div className="text-xs text-gray-500">مكتمل</div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>التقدم العام</span>
                                        <span>{course.progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                        <div
                                            className="h-3 rounded-full"
                                            style={{
                                                backgroundColor: courseStyle.bg,
                                                width: `${course.progress}%`
                                            }}
                                        ></div>
                                    </div>

                                    <div className="flex justify-between items-center pt-4 border-t">
                                        <div className="flex space-x-6 space-x-reverse text-sm text-gray-500">
                                            <span className="flex items-center">
                                                <FileText className="w-4 h-4 ml-1" />
                                                {course.assignments}
                                            </span>
                                            <span className="flex items-center">
                                                <Users className="w-4 h-4 ml-1" />
                                                {course.students}
                                            </span>
                                        </div>
                                        <button
                                            className="text-white px-4 py-2 rounded-xl transition-colors hover:opacity-90"
                                            style={{ backgroundColor: courseStyle.bg }}
                                        >
                                            متابعة التعلم
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        },

        3: ({ courses }) => {
            return (
                <div className="space-y-6">
                    {courses.map((course, index) => {
                        const colorType = index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'accent';
                        const courseStyle = getColoredStyle(colorType);

                        return (
                            <div key={course.id} className="bg-gradient-to-r from-white to-gray-50 rounded-3xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center space-x-6 space-x-reverse">
                                        <div className="relative">
                                            <div
                                                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                                                style={{ backgroundColor: courseStyle.bg }}
                                            >
                                                <BookOpen className="w-10 h-10 text-white" />
                                            </div>
                                            <div className="absolute -top-2 -left-2 bg-yellow-400 text-yellow-800 text-xs px-2 py-1 rounded-full font-bold">
                                                {course.progress}%
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-800 mb-1">{course.name}</h3>
                                            <p className="text-gray-600 mb-2">{course.description}</p>
                                            <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500">
                                                <span
                                                    className="px-3 py-1 rounded-full text-white"
                                                    style={{ backgroundColor: courseStyle.bg }}
                                                >
                                                    {course.level}
                                                </span>
                                                <span>{course.students} طالب مسجل</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <button
                                            className="text-white px-8 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105"
                                            style={{ background: `linear-gradient(45deg, ${courseStyle.bg}, ${getColoredStyle('secondary').bg})` }}
                                        >
                                            دخول الفصل
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 gap-4">
                                    <div
                                        className="text-center p-3 rounded-xl"
                                        style={{ backgroundColor: courseStyle.bgLight }}
                                    >
                                        <div className="text-lg font-bold" style={{ color: courseStyle.text }}>{course.assignments}</div>
                                        <div className="text-xs" style={{ color: courseStyle.text }}>واجبات</div>
                                    </div>
                                    <div
                                        className="text-center p-3 rounded-xl"
                                        style={{ backgroundColor: getColoredStyle('accent').bgLight }}
                                    >
                                        <div className="text-lg font-bold" style={{ color: getColoredStyle('accent').text }}>{course.discussions}</div>
                                        <div className="text-xs" style={{ color: getColoredStyle('accent').text }}>مناقشات</div>
                                    </div>
                                    <div
                                        className="text-center p-3 rounded-xl"
                                        style={{ backgroundColor: getColoredStyle('secondary').bgLight }}
                                    >
                                        <div className="text-lg font-bold" style={{ color: getColoredStyle('secondary').text }}>12</div>
                                        <div className="text-xs" style={{ color: getColoredStyle('secondary').text }}>دروس</div>
                                    </div>
                                    <div className="text-center p-3 bg-purple-50 rounded-xl">
                                        <div className="text-lg font-bold text-purple-600">4.8</div>
                                        <div className="text-xs text-purple-500">تقييم</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        }
    };

    // Template Variations for Announcements with dynamic colors
    const AnnouncementTemplates = {
        1: ({ announcements }) => {
            const primaryStyle = getColoredStyle('primary');
            const accentStyle = getColoredStyle('accent');

            return (
                <div className="space-y-4">
                    {announcements.map((announcement, index) => {
                        const colorType = announcement.type === 'urgent' ? 'secondary' :
                            announcement.type === 'celebration' ? 'accent' : 'primary';
                        const announcementStyle = getColoredStyle(colorType);

                        return (
                            <div
                                key={announcement.id}
                                className="p-4 rounded-2xl border-r-4"
                                style={{
                                    backgroundColor: announcementStyle.bgLight,
                                    borderColor: announcementStyle.border
                                }}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-gray-800">{announcement.title}</h3>
                                    <span className="text-sm text-gray-500">{announcement.time}</span>
                                </div>
                                <p className="text-gray-600">{announcement.content}</p>
                            </div>
                        );
                    })}
                </div>
            );
        },

        2: ({ announcements }) => (
            <div className="grid gap-4">
                {announcements.map((announcement, index) => {
                    const colorType = announcement.type === 'urgent' ? 'secondary' :
                        announcement.type === 'celebration' ? 'accent' : 'primary';
                    const announcementStyle = getColoredStyle(colorType);

                    return (
                        <div key={announcement.id} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start space-x-4 space-x-reverse">
                                <div
                                    className="p-3 rounded-full"
                                    style={{
                                        backgroundColor: announcementStyle.bgLight,
                                        color: announcementStyle.text
                                    }}
                                >
                                    <Bell className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-gray-800 text-lg">{announcement.title}</h3>
                                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{announcement.time}</span>
                                    </div>
                                    <p className="text-gray-600 mb-3">{announcement.content}</p>
                                    <div className="flex items-center justify-between">
                                        <span
                                            className="text-xs px-3 py-1 rounded-full text-white"
                                            style={{ backgroundColor: announcementStyle.bg }}
                                        >
                                            {announcement.targetLevel}
                                        </span>
                                        <button
                                            className="text-sm font-medium hover:opacity-80"
                                            style={{ color: announcementStyle.text }}
                                        >
                                            قراءة المزيد
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        ),

        3: ({ announcements }) => (
            <div className="space-y-3">
                {announcements.map((announcement, index) => {
                    const colorType = announcement.type === 'urgent' ? 'secondary' :
                        announcement.type === 'celebration' ? 'accent' : 'primary';
                    const announcementStyle = getColoredStyle(colorType);

                    return (
                        <div
                            key={announcement.id}
                            className="bg-gradient-to-r from-white to-gray-50 rounded-xl p-4 border-l-4 hover:shadow-md transition-shadow"
                            style={{ borderColor: announcementStyle.border }}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center space-x-3 space-x-reverse">
                                    <div
                                        className="w-2 h-2 rounded-full"
                                        style={{ backgroundColor: announcementStyle.bg }}
                                    ></div>
                                    <h3 className="font-semibold text-gray-800">{announcement.title}</h3>
                                </div>
                                <span className="text-xs text-gray-500">{announcement.time}</span>
                            </div>
                            <p className="text-gray-600 text-sm mr-5">{announcement.content}</p>
                        </div>
                    );
                })}
            </div>
        )
    };

    // Template Variations for Sidebar with dynamic colors
    // const SidebarTemplates = {
    //     1: ({ teacher, student, items, activeTab, setActiveTab, setSidebarOpen }) => {
    //         const primaryStyle = getColoredStyle('primary');
    //         const secondaryStyle = getColoredStyle('secondary');

    //         return (
    //             <div className="bg-white shadow-xl">
    //                 <div
    //                     className="p-6 border-b border-gray-100 text-white"
    //                     style={{ background: `linear-gradient(to right, ${primaryStyle.bg}, ${secondaryStyle.bg})` }}
    //                 >
    //                     <div className="flex items-center space-x-3 space-x-reverse mb-4">
    //                         <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
    //                             <GraduationCap className="w-6 h-6 text-white" />
    //                         </div>
    //                         <div>
    //                             <h2 className="text-lg font-bold">منصة {teacher.name}</h2>
    //                             <p className="text-sm text-blue-100">{teacher.subject}</p>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <div className="p-6 border-b border-gray-100">
    //                     <div className="flex items-center space-x-4 space-x-reverse">
    //                         <img src={student.avatar} className="w-12 h-12 rounded-2xl object-cover" />
    //                         <div className="flex-1">
    //                             <h3 className="font-semibold text-gray-800">{student.name}</h3>
    //                             <p className="text-sm text-gray-500">{student.grade}</p>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <nav className="p-6 space-y-2">
    //                     {items.map(item => (
    //                         <button
    //                             key={item.id}
    //                             onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
    //                             className={`w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-2xl transition-all ${activeTab === item.id ? 'text-white' : 'text-gray-600 hover:bg-gray-50'
    //                                 }`}
    //                             style={activeTab === item.id ? { backgroundColor: primaryStyle.bg } : {}}
    //                         >
    //                             <item.icon className="w-5 h-5" />
    //                             <span className="font-medium">{item.label}</span>
    //                         </button>
    //                     ))}
    //                 </nav>
    //             </div>
    //         );
    //     },

    //     2: ({ teacher, student, items, activeTab, setActiveTab, setSidebarOpen }) => {
    //         const primaryStyle = getColoredStyle('primary');
    //         const accentStyle = getColoredStyle('accent');

    //         return (
    //             <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
    //                 <div className="p-6 border-b border-gray-700">
    //                     <div className="text-center mb-6">
    //                         <img
    //                             src={teacher.avatar}
    //                             className="w-16 h-16 rounded-full mx-auto mb-3 border-2"
    //                             style={{ borderColor: accentStyle.bg }}
    //                         />
    //                         <h2 className="text-xl font-bold">{teacher.name}</h2>
    //                         <p className="text-gray-300 text-sm">{teacher.subject}</p>
    //                     </div>

    //                     <div className="bg-gray-800 rounded-2xl p-4">
    //                         <div className="flex items-center space-x-3 space-x-reverse">
    //                             <img src={student.avatar} className="w-10 h-10 rounded-xl object-cover" />
    //                             <div>
    //                                 <h3 className="font-medium">{student.name}</h3>
    //                                 <p className="text-xs text-gray-400">{student.grade}</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <nav className="p-6 space-y-1">
    //                     {items.map(item => (
    //                         <button
    //                             key={item.id}
    //                             onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
    //                             className={`w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-xl transition-all ${activeTab === item.id ? 'text-gray-900' : 'text-gray-300 hover:bg-gray-700'
    //                                 }`}
    //                             style={activeTab === item.id ? { backgroundColor: accentStyle.bg } : {}}
    //                         >
    //                             <item.icon className="w-5 h-5" />
    //                             <span className="font-medium">{item.label}</span>
    //                         </button>
    //                     ))}
    //                 </nav>
    //             </div>
    //         );
    //     },

    //     3: ({ teacher, student, items, activeTab, setActiveTab, setSidebarOpen }) => {
    //         const primaryStyle = getColoredStyle('primary');

    //         return (
    //             <div className="bg-gradient-to-b from-indigo-50 to-white border-l border-indigo-100">
    //                 <div className="p-6 border-b border-indigo-100">
    //                     <div className="flex items-center space-x-4 space-x-reverse mb-4">
    //                         <div className="relative">
    //                             <img src={teacher.avatar} className="w-14 h-14 rounded-2xl object-cover" />
    //                             <div
    //                                 className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white"
    //                                 style={{ backgroundColor: getColoredStyle('accent').bg }}
    //                             ></div>
    //                         </div>
    //                         <div>
    //                             <h2 className="text-lg font-bold text-gray-800">{teacher.name}</h2>
    //                             <p className="text-sm" style={{ color: primaryStyle.text }}>{teacher.subject}</p>
    //                         </div>
    //                     </div>

    //                     <div
    //                         className="rounded-2xl p-3"
    //                         style={{ backgroundColor: primaryStyle.bgLight }}
    //                     >
    //                         <div className="flex items-center space-x-3 space-x-reverse">
    //                             <img src={student.avatar} className="w-8 h-8 rounded-lg object-cover" />
    //                             <div className="flex-1">
    //                                 <h3 className="text-sm font-medium text-gray-800">{student.name}</h3>
    //                                 <p className="text-xs text-gray-500">{student.overallProgress}% مكتمل</p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 <nav className="p-6 space-y-1">
    //                     {items.map(item => (
    //                         <button
    //                             key={item.id}
    //                             onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
    //                             className={`w-full flex items-center space-x-3 space-x-reverse px-3 py-2 rounded-xl transition-all ${activeTab === item.id
    //                                     ? 'border-l-4'
    //                                     : 'text-gray-600 hover:bg-indigo-50'
    //                                 }`}
    //                             style={activeTab === item.id ? {
    //                                 backgroundColor: primaryStyle.bgLight,
    //                                 color: primaryStyle.text,
    //                                 borderColor: primaryStyle.border
    //                             } : {}}
    //                         >
    //                             <item.icon className="w-4 h-4" />
    //                             <span className="text-sm font-medium">{item.label}</span>
    //                         </button>
    //                     ))}
    //                 </nav>
    //             </div>
    //         );
    //     }
    // };

    const SidebarTemplates = {
  1: ({ teacher, student, items, activeTab, setActiveTab, setSidebarOpen }) => {
    const primaryStyle = getColoredStyle('primary');
    const secondaryStyle = getColoredStyle('secondary');

    return (
      <div className="bg-white shadow-xl h-full flex flex-col">
        {/* Header */}
        <div
          className="p-6 border-b border-gray-100 text-white"
          style={{ background: `linear-gradient(to right, ${primaryStyle.bg}, ${secondaryStyle.bg})` }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold">منصة {teacher.name}</h2>
                <p className="text-sm text-blue-100">{teacher.subject}</p>
              </div>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-white/20 rounded-xl transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
            <div className="text-sm opacity-90">أنت طالب في منصة</div>
            <div className="font-bold">{teacher.name}</div>
          </div>
        </div>

        {/* Student Info */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-4 space-x-reverse">
            <img 
              src={student.avatar} 
              alt={student.name}
              className="w-12 h-12 rounded-2xl object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{student.name}</h3>
              <p className="text-sm text-gray-500">{student.grade}</p>
              <div className="flex items-center mt-1">
                <div className="w-16 bg-gray-200 rounded-full h-1.5 ml-2">
                  <div 
                    className="bg-green-500 h-1.5 rounded-full" 
                    style={{ width: `${student.overallProgress}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">{student.overallProgress}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-6 space-y-2 flex-1">
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-2xl transition-all duration-200 ${
                activeTab === item.id 
                  ? 'text-white' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              style={activeTab === item.id ? { backgroundColor: primaryStyle.bg } : {}}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Teacher Contact */}
        <div className="p-6 border-t border-gray-100">
          <div 
            className="rounded-2xl p-4 border"
            style={{ 
              backgroundColor: primaryStyle.bgLight,
              borderColor: primaryStyle.borderLight
            }}
          >
            <div className="flex items-center space-x-3 space-x-reverse mb-2">
              <img 
                src={teacher.avatar} 
                alt={teacher.name}
                className="w-10 h-10 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-800">تواصل مع المعلم</div>
                <div className="text-xs text-gray-500">{teacher.name}</div>
              </div>
            </div>
            <button 
              className="w-full text-white text-sm py-2 rounded-xl transition-colors"
              style={{ backgroundColor: primaryStyle.bg }}
            >
              إرسال رسالة
            </button>
          </div>
        </div>

        {/* Logout */}
        <div className="p-6 pt-0">
          <button className="w-full flex items-center justify-center space-x-2 space-x-reverse px-4 py-3 text-red-600 hover:bg-red-50 rounded-2xl transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">مغادرة المنصة</span>
          </button>
        </div>
      </div>
    );
  },

  2: ({ teacher, student, items, activeTab, setActiveTab, setSidebarOpen }) => {
    const primaryStyle = getColoredStyle('primary');
    const accentStyle = getColoredStyle('accent');

    return (
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div className="text-center flex-1">
              <img
                src={teacher.avatar}
                className="w-16 h-16 rounded-full mx-auto mb-3 border-2"
                style={{ borderColor: accentStyle.bg }}
              />
              <h2 className="text-xl font-bold">{teacher.name}</h2>
              <p className="text-gray-300 text-sm">{teacher.subject}</p>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-gray-700 rounded-xl transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-4 text-center mb-4">
            <div className="text-sm opacity-90">أنت طالب في منصة</div>
            <div className="font-bold">{teacher.name}</div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <img src={student.avatar} className="w-10 h-10 rounded-xl object-cover" />
              <div className="flex-1">
                <h3 className="font-medium">{student.name}</h3>
                <p className="text-xs text-gray-400">{student.grade}</p>
                <div className="flex items-center mt-1">
                  <div className="w-16 bg-gray-700 rounded-full h-1.5 ml-2">
                    <div 
                      className="h-1.5 rounded-full" 
                      style={{ 
                        width: `${student.overallProgress}%`,
                        backgroundColor: accentStyle.bg
                      }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-400">{student.overallProgress}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-6 space-y-1 flex-1">
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id ? 'text-gray-900' : 'text-gray-300 hover:bg-gray-700'
              }`}
              style={activeTab === item.id ? { backgroundColor: accentStyle.bg } : {}}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Teacher Contact */}
        <div className="p-6 border-t border-gray-700">
          <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
            <div className="flex items-center space-x-3 space-x-reverse mb-2">
              <img 
                src={teacher.avatar} 
                alt={teacher.name}
                className="w-10 h-10 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-300">تواصل مع المعلم</div>
                <div className="text-xs text-gray-500">{teacher.name}</div>
              </div>
            </div>
            <button 
              className="w-full text-white text-sm py-2 rounded-xl transition-colors"
              style={{ backgroundColor: accentStyle.bg }}
            >
              إرسال رسالة
            </button>
          </div>
        </div>

        {/* Logout */}
        <div className="p-6 pt-0">
          <button className="w-full flex items-center justify-center space-x-2 space-x-reverse px-4 py-3 text-red-400 hover:bg-gray-700 rounded-2xl transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">مغادرة المنصة</span>
          </button>
        </div>
      </div>
    );
  },

  3: ({ teacher, student, items, activeTab, setActiveTab, setSidebarOpen }) => {
    const primaryStyle = getColoredStyle('primary');
    const accentStyle = getColoredStyle('accent');

    return (
      <div className="bg-gradient-to-b from-indigo-50 to-white border-l border-indigo-100 h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-indigo-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="relative">
                <img src={teacher.avatar} className="w-14 h-14 rounded-2xl object-cover" />
                <div
                  className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white"
                  style={{ backgroundColor: accentStyle.bg }}
                ></div>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">{teacher.name}</h2>
                <p className="text-sm" style={{ color: primaryStyle.text }}>{teacher.subject}</p>
              </div>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-indigo-100 rounded-xl transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="rounded-2xl p-3 text-center mb-3" style={{ backgroundColor: primaryStyle.bgLight }}>
            <div className="text-sm" style={{ color: primaryStyle.text }}>أنت طالب في منصة</div>
            <div className="font-bold text-gray-800">{teacher.name}</div>
          </div>

          <div className="rounded-2xl p-3" style={{ backgroundColor: primaryStyle.bgLight }}>
            <div className="flex items-center space-x-3 space-x-reverse">
              <img src={student.avatar} className="w-8 h-8 rounded-lg object-cover" />
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-800">{student.name}</h3>
                <p className="text-xs text-gray-500">{student.grade}</p>
                <div className="flex items-center mt-1">
                  <div className="w-16 bg-gray-200 rounded-full h-1.5 ml-2">
                    <div 
                      className="h-1.5 rounded-full" 
                      style={{ 
                        width: `${student.overallProgress}%`,
                        backgroundColor: accentStyle.bg
                      }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">{student.overallProgress}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-6 space-y-1 flex-1">
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 space-x-reverse px-3 py-2 rounded-xl transition-all ${
                activeTab === item.id
                  ? 'border-l-4'
                  : 'text-gray-600 hover:bg-indigo-50'
              }`}
              style={activeTab === item.id ? {
                backgroundColor: primaryStyle.bgLight,
                color: primaryStyle.text,
                borderColor: primaryStyle.border
              } : {}}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Teacher Contact */}
        <div className="p-6 border-t border-indigo-100">
          <div className="rounded-2xl p-4 border border-indigo-100">
            <div className="flex items-center space-x-3 space-x-reverse mb-2">
              <img 
                src={teacher.avatar} 
                alt={teacher.name}
                className="w-10 h-10 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-800">تواصل مع المعلم</div>
                <div className="text-xs text-gray-500">{teacher.name}</div>
              </div>
            </div>
            <button 
              className="w-full text-white text-sm py-2 rounded-xl transition-colors"
              style={{ backgroundColor: accentStyle.bg }}
            >
              إرسال رسالة
            </button>
          </div>
        </div>

        {/* Logout */}
        <div className="p-6 pt-0">
          <button className="w-full flex items-center justify-center space-x-2 space-x-reverse px-4 py-3 text-red-600 hover:bg-red-50 rounded-2xl transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">مغادرة المنصة</span>
          </button>
        </div>
      </div>
    );
  }
};



    // Mock Data
    const courses = [
        {
            id: 1,
            name: "اللغة العربية - الصف الأول الثانوي",
            level: "الأول الثانوي",
            progress: 78,
            assignments: 3,
            discussions: 12,
            students: 35,
            color: "from-blue-500 to-blue-600",
            description: "أساسيات النحو والصرف والأدب العربي"
        },
        {
            id: 2,
            name: "اللغة العربية - الصف الثاني الثانوي",
            level: "الثاني الثانوي",
            progress: 92,
            assignments: 1,
            discussions: 8,
            students: 42,
            color: "from-purple-500 to-purple-600",
            description: "البلاغة والنقد الأدبي"
        },
        {
            id: 3,
            name: "اللغة العربية - الصف الثالث الثانوي",
            level: "الثالث الثانوي",
            progress: 65,
            assignments: 5,
            discussions: 15,
            students: 50,
            color: "from-green-500 to-green-600",
            description: "التحضير لامتحان الثانوية العامة"
        }
    ];

    const announcements = [
        {
            id: 1,
            title: "جلسة مراجعة خاصة قبل الامتحان",
            content: "سأعقد جلسة مراجعة إضافية يوم السبت في الساعة 3 عصراً",
            time: "منذ ساعتين",
            type: "urgent",
            targetLevel: "الثالث الثانوي"
        },
        {
            id: 2,
            title: "تحديث في منهج الأدب العربي",
            content: "تم إضافة قصائد جديدة من العصر الحديث مع شرح مفصل",
            time: "منذ 5 ساعات",
            type: "info",
            targetLevel: "جميع المستويات"
        },
        {
            id: 3,
            title: "تهنئة للطلاب المتفوقين",
            content: "أهنئ طلابي المتفوقين في امتحان الشهر الماضي، واصلوا التميز!",
            time: "منذ يوم واحد",
            type: "celebration",
            targetLevel: "جميع المستويات"
        }
    ];

    const sidebarItems = [
        { id: 'dashboard', label: 'الرئيسية', icon: Home },
        { id: 'courses', label: 'المواد الدراسية', icon: BookOpen },
        { id: 'assignments', label: 'الواجبات', icon: FileText },
        { id: 'discussions', label: 'المناقشات', icon: MessageCircle },
        { id: 'calendar', label: 'الجدول الدراسي', icon: Calendar },
        { id: 'grades', label: 'درجاتي', icon: Award },
        { id: 'teacher-info', label: 'عن المعلم', icon: GraduationCap },
        { id: 'profile', label: 'ملفي الشخصي', icon: User }
    ];

    // Template Customizer Component
    const TemplateCustomizer = () => (
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

            <div className="p-6 space-y-8 overflow-y-auto h-full pb-32">
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
                                        const randomPalette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
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
    );

    const renderDashboard = () => (
        <div className="space-y-8">
            {/* Dynamic Header based on selected template */}
            {HeaderTemplates[headerTemplate]({ teacher: teacherConfig, student: studentData })}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'المواد المسجلة', value: courses.length, icon: BookOpen, colorType: 'primary' },
                    { label: 'الواجبات المعلقة', value: '3', icon: FileText, colorType: 'secondary' },
                    { label: 'الإعلانات الجديدة', value: announcements.length, icon: Bell, colorType: 'accent' },
                    { label: 'المعدل العام', value: `${studentData.overallProgress}%`, icon: Award, colorType: 'primary' }
                ].map((item, index) => {
                    const itemStyle = getColoredStyle(item.colorType);
                    return (
                        <div
                            key={index}
                            className="text-white p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer hover:opacity-90"
                            style={{ backgroundColor: itemStyle.bg }}
                        >
                            <item.icon className="w-8 h-8 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-center">{item.value}</div>
                            <div className="text-sm text-center opacity-90">{item.label}</div>
                        </div>
                    );
                })}
            </div>

            {/* Announcements Section */}
            <div className="bg-white rounded-3xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                        <Bell className="w-6 h-6 ml-3" style={{ color: getColoredStyle('accent').text }} />
                        رسائل من {teacherConfig.name.split(' ')[1]}
                    </h2>
                </div>
                {AnnouncementTemplates[announcementTemplate]({ announcements })}
            </div>
        </div>
    );

    const renderCourses = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">مواد {teacherConfig.name}</h1>
                <div
                    className="text-sm px-3 py-2 rounded-full text-white"
                    style={{ backgroundColor: getColoredStyle('primary').bg }}
                >
                    متخصص في {teacherConfig.subject}
                </div>
            </div>
            {CourseTemplates[courseTemplate]({ courses })}
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'courses': return renderCourses();
            case 'assignments': return <div className="text-center py-20 text-gray-500">قريباً - صفحة الواجبات</div>;
            case 'discussions': return <div className="text-center py-20 text-gray-500">قريباً - صفحة المناقشات</div>;
            case 'calendar': return <div className="text-center py-20 text-gray-500">قريباً - الجدول الدراسي</div>;
            case 'grades': return <div className="text-center py-20 text-gray-500">قريباً - صفحة الدرجات</div>;
            case 'teacher-info': return <div className="text-center py-20 text-gray-500">قريباً - صفحة المعلم</div>;
            case 'profile': return <div className="text-center py-20 text-gray-500">قريباً - الملف الشخصي</div>;
            default: return renderDashboard();
        }
    };

    return (
        <div className="flex min-h-screen" style={{ backgroundColor: colorScheme.background }} dir="rtl">
            {/* Template Customizer */}
            {TemplateCustomizer()}

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

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Dynamic Sidebar */}
            <div className={`fixed lg:static inset-y-0 right-0 z-50 w-80 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
                } transition-transform duration-300 ease-in-out`}>
                {SidebarTemplates[sidebarTemplate]({
                    teacher: teacherConfig,
                    student: studentData,
                    items: sidebarItems,
                    activeTab,
                    setActiveTab,
                    setSidebarOpen
                })}
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="shadow-sm border-b border-gray-100 px-6 py-4" style={{ backgroundColor: colorScheme.surface }}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 space-x-reverse">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
                            >
                                <Menu className="w-5 h-5 text-gray-600" />
                            </button>
                            <div>
                                <h1 className="text-2xl font-bold" style={{ color: colorScheme.text }}>
                                    {sidebarItems.find(item => item.id === activeTab)?.label || 'الرئيسية'}
                                </h1>
                                <p style={{ color: colorScheme.textSecondary }}>منصة {teacherConfig.name} للتعلم</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 space-x-reverse">
                            <div className="relative">
                                <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors relative">
                                    <Bell className="w-6 h-6 text-gray-600" />
                                    <div
                                        className="absolute -top-1 -left-1 w-4 h-4 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: getColoredStyle('accent').bg }}
                                    >
                                        <span className="text-xs text-white font-medium">{announcements.length}</span>
                                    </div>
                                </button>
                            </div>

                            <div className="hidden md:flex items-center space-x-3 space-x-reverse">
                                <img
                                    src={studentData.avatar}
                                    alt={studentData.name}
                                    className="w-10 h-10 rounded-2xl object-cover"
                                />
                                <div>
                                    <div className="text-sm font-medium" style={{ color: colorScheme.text }}>{studentData.name}</div>
                                    <div className="text-xs" style={{ color: colorScheme.textSecondary }}>طالب في منصة {teacherConfig.name.split(' ')[1]}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 p-6 overflow-y-auto">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default CustomizableTeacherLMS;