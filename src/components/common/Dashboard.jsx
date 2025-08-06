import React, { useState } from 'react'
import {
    BookOpen,
    Bell,
    FileText,
    Star,
    Award,
    Clock,
    AlertCircle,
    CheckCircle,
    PlayCircle,
    Video,
    MapPin
} from 'lucide-react';

const Dashboard = ({ colorScheme, getColoredStyle, headerTemplate, announcementTemplate, recentActivity }) => {

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

    //Mock Data
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

    const upcomingTasks = [
        {
            id: 1,
            title: "تحليل قصيدة 'وطني' لأحمد شوقي",
            course: "اللغة العربية - الثالث الثانوي",
            dueDate: "2025-02-02",
            status: "pending",
            points: 25
        },
        {
            id: 2,
            title: "بحث في الشعر الجاهلي",
            course: "اللغة العربية - الأول الثانوي",
            dueDate: "2025-02-05",
            status: "in-progress",
            points: 30
        },
        {
            id: 3,
            title: "واجب النحو - الجملة الاسمية",
            course: "اللغة العربية - الثاني الثانوي",
            dueDate: "2025-02-03",
            status: "completed",
            points: 20
        }
    ];

    const recentLessons = [
        {
            id: 1,
            title: "الشعر في العصر العباسي",
            course: "الثالث الثانوي",
            type: "video",
            duration: "45 دقيقة",
            completed: true,
            date: "2025-01-29"
        },
        {
            id: 2,
            title: "قواعد الإعراب المتقدمة",
            course: "الثاني الثانوي",
            type: "pdf",
            duration: "30 دقيقة",
            completed: false,
            date: "2025-01-28"
        },
        {
            id: 3,
            title: "المعلقات السبع",
            course: "الأول الثانوي",
            type: "video",
            duration: "50 دقيقة",
            completed: true,
            date: "2025-01-27"
        }
    ];

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

    // Template Variations for Recent Activity
    const RecentActivityTemplates = {
        1: ({ upcomingTasks, recentLessons }) => {
            const primaryStyle = getColoredStyle('primary');
            const accentStyle = getColoredStyle('accent');
            const warningStyle = getColoredStyle('warning');
            const secondaryStyle = getColoredStyle('secondary');

            return (
                <div className="grid md:grid-cols-2 gap-6">
                    {/* My Tasks - Template 1: Classic Design */}
                    <div className="bg-white rounded-3xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                            <Clock className="w-5 h-5 ml-3" style={{ color: warningStyle.text }} />
                            واجباتي القادمة
                        </h3>
                        <div className="space-y-4">
                            {upcomingTasks.slice(0, 3).map(task => {
                                const taskColorType = task.status === 'completed' ? 'accent' :
                                    task.status === 'in-progress' ? 'warning' : 'secondary';
                                const taskStyle = getColoredStyle(taskColorType);

                                return (
                                    <div key={task.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                                        <div className="flex-1">
                                            <div className="font-medium text-gray-800">{task.title}</div>
                                            <div className="text-sm text-gray-500">{task.course}</div>
                                            <div className="text-xs text-gray-400 flex items-center justify-between mt-1">
                                                <span>موعد التسليم: {task.dueDate}</span>
                                                <span
                                                    className="px-2 py-1 rounded-full text-white text-xs"
                                                    style={{ backgroundColor: primaryStyle.bg }}
                                                >
                                                    {task.points} نقطة
                                                </span>
                                            </div>
                                        </div>
                                        <div
                                            className="p-2 rounded-full"
                                            style={{
                                                backgroundColor: taskStyle.bgLight,
                                                color: taskStyle.text
                                            }}
                                        >
                                            {task.status === 'completed' ? <CheckCircle className="w-5 h-5" /> :
                                                task.status === 'in-progress' ? <Clock className="w-5 h-5" /> :
                                                    <AlertCircle className="w-5 h-5" />}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Recent Lessons - Template 1: Classic Design */}
                    <div className="bg-white rounded-3xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                            <PlayCircle className="w-5 h-5 ml-3" style={{ color: primaryStyle.text }} />
                            الدروس الأخيرة
                        </h3>
                        <div className="space-y-4">
                            {recentLessons.map(lesson => {
                                const lessonColorType = lesson.type === 'video' ? 'secondary' : 'primary';
                                const lessonStyle = getColoredStyle(lessonColorType);

                                return (
                                    <div key={lesson.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
                                        <div className="flex items-center space-x-4 space-x-reverse">
                                            <div
                                                className="p-2 rounded-full"
                                                style={{
                                                    backgroundColor: lessonStyle.bgLight,
                                                    color: lessonStyle.text
                                                }}
                                            >
                                                {lesson.type === 'video' ? <Video className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-800">{lesson.title}</div>
                                                <div className="text-sm text-gray-500">{lesson.course} • {lesson.duration}</div>
                                                <div className="text-xs text-gray-400">{lesson.date}</div>
                                            </div>
                                        </div>
                                        {lesson.completed && (
                                            <CheckCircle className="w-5 h-5" style={{ color: accentStyle.text }} />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            );
        },

        2: ({ upcomingTasks, recentLessons }) => {
            const primaryStyle = getColoredStyle('primary');
            const accentStyle = getColoredStyle('accent');
            const warningStyle = getColoredStyle('warning');
            const secondaryStyle = getColoredStyle('secondary');

            return (
                <div className="grid md:grid-cols-2 gap-6">
                    {/* My Tasks - Template 2: Card Style with Gradients */}
                    <div
                        className="rounded-3xl shadow-xl p-6 bg-gradient-to-br from-white to-gray-50"
                        style={{ borderTop: `4px solid ${warningStyle.bg}` }}
                    >
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                            <div
                                className="p-2 rounded-full ml-3"
                                style={{ backgroundColor: warningStyle.bgLight, color: warningStyle.text }}
                            >
                                <Clock className="w-5 h-5" />
                            </div>
                            واجباتي القادمة
                        </h3>
                        <div className="space-y-3">
                            {upcomingTasks.slice(0, 3).map(task => {
                                const taskColorType = task.status === 'completed' ? 'accent' :
                                    task.status === 'in-progress' ? 'warning' : 'secondary';
                                const taskStyle = getColoredStyle(taskColorType);

                                return (
                                    <div
                                        key={task.id}
                                        className="p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                        style={{
                                            background: `linear-gradient(135deg, ${taskStyle.bgLight} 0%, white 100%)`,
                                            borderLeft: `3px solid ${taskStyle.bg}`
                                        }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex-1">
                                                <div className="font-semibold text-gray-800 mb-1">{task.title}</div>
                                                <div className="text-sm text-gray-600 mb-2">{task.course}</div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs text-gray-500">موعد التسليم: {task.dueDate}</span>
                                                    <div className="flex items-center space-x-2 space-x-reverse">
                                                        <span
                                                            className="text-xs px-2 py-1 rounded-full text-white font-medium"
                                                            style={{ backgroundColor: primaryStyle.bg }}
                                                        >
                                                            {task.points} نقطة
                                                        </span>
                                                        <div
                                                            className="p-1 rounded-full"
                                                            style={{ backgroundColor: taskStyle.bg, color: 'white' }}
                                                        >
                                                            {task.status === 'completed' ? <CheckCircle className="w-4 h-4" /> :
                                                                task.status === 'in-progress' ? <Clock className="w-4 h-4" /> :
                                                                    <AlertCircle className="w-4 h-4" />}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Recent Lessons - Template 2: Card Style with Gradients */}
                    <div
                        className="rounded-3xl shadow-xl p-6 bg-gradient-to-br from-white to-gray-50"
                        style={{ borderTop: `4px solid ${primaryStyle.bg}` }}
                    >
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                            <div
                                className="p-2 rounded-full ml-3"
                                style={{ backgroundColor: primaryStyle.bgLight, color: primaryStyle.text }}
                            >
                                <PlayCircle className="w-5 h-5" />
                            </div>
                            الدروس الأخيرة
                        </h3>
                        <div className="space-y-3">
                            {recentLessons.map(lesson => {
                                const lessonColorType = lesson.type === 'video' ? 'secondary' : 'primary';
                                const lessonStyle = getColoredStyle(lessonColorType);

                                return (
                                    <div
                                        key={lesson.id}
                                        className="p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                                        style={{
                                            background: `linear-gradient(135deg, ${lessonStyle.bgLight} 0%, white 100%)`,
                                            borderLeft: `3px solid ${lessonStyle.bg}`
                                        }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-3 space-x-reverse">
                                                <div
                                                    className="p-2 rounded-full"
                                                    style={{ backgroundColor: lessonStyle.bg, color: 'white' }}
                                                >
                                                    {lesson.type === 'video' ? <Video className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-gray-800">{lesson.title}</div>
                                                    <div className="text-sm text-gray-600">{lesson.course} • {lesson.duration}</div>
                                                    <div className="text-xs text-gray-500">{lesson.date}</div>
                                                </div>
                                            </div>
                                            {lesson.completed && (
                                                <div className="flex items-center space-x-2 space-x-reverse">
                                                    <CheckCircle className="w-5 h-5" style={{ color: accentStyle.text }} />
                                                    <span
                                                        className="text-xs px-2 py-1 rounded-full text-white"
                                                        style={{ backgroundColor: accentStyle.bg }}
                                                    >
                                                        مكتمل
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            );
        },

        3: ({ upcomingTasks, recentLessons }) => {
            const primaryStyle = getColoredStyle('primary');
            const accentStyle = getColoredStyle('accent');
            const warningStyle = getColoredStyle('warning');
            const secondaryStyle = getColoredStyle('secondary');

            return (
                <div className="grid md:grid-cols-2 gap-6">
                    {/* My Tasks - Template 3: Minimal List Style */}
                    <div className="bg-white rounded-2xl shadow-sm border p-6">
                        <div className="flex items-center mb-6 pb-4 border-b">
                            <div
                                className="w-1 h-8 rounded-full ml-3"
                                style={{ backgroundColor: warningStyle.bg }}
                            ></div>
                            <h3 className="text-xl font-bold text-gray-800">واجباتي القادمة</h3>
                        </div>
                        <div className="space-y-3">
                            {upcomingTasks.slice(0, 3).map((task, index) => {
                                const taskColorType = task.status === 'completed' ? 'accent' :
                                    task.status === 'in-progress' ? 'warning' : 'secondary';
                                const taskStyle = getColoredStyle(taskColorType);

                                return (
                                    <div
                                        key={task.id}
                                        className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors border-r-2"
                                        style={{ borderColor: taskStyle.bg }}
                                    >
                                        <div
                                            className="w-3 h-3 rounded-full ml-4 flex-shrink-0"
                                            style={{ backgroundColor: taskStyle.bg }}
                                        ></div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-medium text-gray-800 truncate">{task.title}</div>
                                            <div className="text-sm text-gray-500">{task.course}</div>
                                            <div className="flex items-center justify-between mt-1">
                                                <span className="text-xs text-gray-400">{task.dueDate}</span>
                                                <div className="flex items-center space-x-2 space-x-reverse">
                                                    <span
                                                        className="text-xs px-2 py-0.5 rounded text-white"
                                                        style={{ backgroundColor: primaryStyle.bg }}
                                                    >
                                                        {task.points}
                                                    </span>
                                                    <div style={{ color: taskStyle.text }}>
                                                        {task.status === 'completed' ? <CheckCircle className="w-4 h-4" /> :
                                                            task.status === 'in-progress' ? <Clock className="w-4 h-4" /> :
                                                                <AlertCircle className="w-4 h-4" />}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Recent Lessons - Template 3: Minimal List Style */}
                    <div className="bg-white rounded-2xl shadow-sm border p-6">
                        <div className="flex items-center mb-6 pb-4 border-b">
                            <div
                                className="w-1 h-8 rounded-full ml-3"
                                style={{ backgroundColor: primaryStyle.bg }}
                            ></div>
                            <h3 className="text-xl font-bold text-gray-800">الدروس الأخيرة</h3>
                        </div>
                        <div className="space-y-3">
                            {recentLessons.map((lesson, index) => {
                                const lessonColorType = lesson.type === 'video' ? 'secondary' : 'primary';
                                const lessonStyle = getColoredStyle(lessonColorType);

                                return (
                                    <div
                                        key={lesson.id}
                                        className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer border-r-2"
                                        style={{ borderColor: lessonStyle.bg }}
                                    >
                                        <div
                                            className="p-2 rounded-lg ml-4 flex-shrink-0"
                                            style={{ backgroundColor: lessonStyle.bgLight, color: lessonStyle.text }}
                                        >
                                            {lesson.type === 'video' ? <Video className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-medium text-gray-800 truncate">{lesson.title}</div>
                                            <div className="text-sm text-gray-500">{lesson.course}</div>
                                            <div className="flex items-center justify-between mt-1">
                                                <span className="text-xs text-gray-400">{lesson.duration} • {lesson.date}</span>
                                                {lesson.completed && (
                                                    <div className="flex items-center space-x-1 space-x-reverse">
                                                        <CheckCircle className="w-4 h-4" style={{ color: accentStyle.text }} />
                                                        <span className="text-xs" style={{ color: accentStyle.text }}>مكتمل</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <>
            <main className="flex-1 p-6 overflow-y-auto">

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

                    {/* Recent Activity */}
                    {RecentActivityTemplates[recentActivity]({ upcomingTasks, recentLessons })}


                </div>
            </main>

        </>
    )
}

export default Dashboard