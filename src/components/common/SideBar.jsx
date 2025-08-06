import React, { useState } from 'react'
import {
    BookOpen,
    Calendar,
    MessageCircle,
    User,
    FileText,
    Award,
    Home,
    GraduationCap,
    X,
    LogOut,
    Menu,
    Bell
} from 'lucide-react';
import Dashboard from './Dashboard';

const SideBar = ({ colorScheme, getColoredStyle, headerTemplate, sidebarTemplate, announcementTemplate, recentActivity }) => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(false);

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

    // Student Data (Customizable)
    const studentData = {
        name: "أحمد محمد",
        grade: "الثانوية العامة - الصف الثالث",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        overallProgress: 85
    };

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

    // Template Variations for Sidebar with dynamic colors
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
                            <div className="flex items-center space-x-3 space-x-reverse gap-2">
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
                    </div>

                    {/* Student Info */}
                    <div className="p-6 border-b border-gray-100">
                        <div className="flex items-center space-x-4 space-x-reverse gap-2">
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
                                className={`w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-2xl transition-all duration-200 ${activeTab === item.id
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
                            <div className="flex items-center space-x-3 space-x-reverse mb-2 gap-2">
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
                        <div className="bg-gray-800 rounded-2xl p-4">
                            <div className="flex items-center space-x-3 space-x-reverse gap-2">
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
                                className={`w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-xl transition-all ${activeTab === item.id ? 'text-gray-900' : 'text-gray-300 hover:bg-gray-700'
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
                            <div className="flex items-center space-x-3 space-x-reverse mb-2 gap-2">
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
                            <div className="flex items-center space-x-4 space-x-reverse gap-2">
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
                        <div className="rounded-2xl p-3" style={{ backgroundColor: primaryStyle.bgLight }}>
                            <div className="flex items-center space-x-3 space-x-reverse gap-2">
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
                                className={`w-full flex items-center space-x-3 space-x-reverse px-3 py-2 rounded-xl transition-all ${activeTab === item.id
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
                            <div className="flex items-center space-x-3 space-x-reverse mb-2 gap-2">
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

    //mock data
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

    return (
        <>
            <div className="flex min-h-screen" style={{ backgroundColor: colorScheme.background }} dir="rtl">
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
                                    {/* <p style={{ color: colorScheme.textSecondary }}>منصة {teacherConfig.name} للتعلم</p> */}
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

                                {/* <div className="hidden md:flex items-center space-x-3 space-x-reverse gap-2">
                                    <img
                                        src={studentData.avatar}
                                        alt={studentData.name}
                                        className="w-10 h-10 rounded-2xl object-cover"
                                    />
                                    <div>
                                        <div className="text-sm font-medium" style={{ color: colorScheme.text }}>{studentData.name}</div>
                                        <div className="text-xs" style={{ color: colorScheme.textSecondary }}>طالب في منصة {teacherConfig.name.split(' ')[1]}</div>
                                        <p className="text-sm text-gray-500">{studentData.grade}</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </header>
                    <Dashboard
                        colorScheme={colorScheme}
                        getColoredStyle={getColoredStyle}
                        headerTemplate={headerTemplate}
                        announcementTemplate={announcementTemplate}
                        recentActivity={recentActivity}
                    />
                </div>
            </div>
        </>
    )
}

export default SideBar