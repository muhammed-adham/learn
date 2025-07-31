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
  MapPin
} from 'lucide-react';

const TeacherPersonalLMS = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Teacher Information
  const teacherData = {
    name: "أ. إبراهيم شيبوب",
    subject: "اللغة العربية",
    avatar: "https://mighty.tools/mockmind-api/content/human/104.jpg",
    experience: "15 سنة خبرة",
    school: "مدرسة النيل الثانوية",
    motto: "التعلم رحلة، والنجاح وجهة",
    totalStudents: 127,
    rating: 4.9
  };

  // Student Data
  const studentData = {
    
    name: "أحمد محمد",
    grade: "الثانوية العامة - الصف الثالث",
    avatar: "https://mighty.tools/mockmind-api/content/human/122.jpg",
    enrolledDate: "2024-09-01",
    overallProgress: 85
  };

  // Teacher's courses across different levels
  const courses = [
    {
      id: 1,
      name: "اللغة العربية - الصف الأول الثانوي",
      level: "الأول الثانوي",
      progress: 78,
      nextClass: "2025-01-31T10:00:00",
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
      nextClass: "2025-01-31T12:00:00",
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
      nextClass: "2025-02-01T09:00:00",
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
      content: "سأعقد جلسة مراجعة إضافية يوم السبت في الساعة 3 عصراً لطلاب الثانوية العامة",
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

  const teacherStats = [
    { label: 'إجمالي الطلاب', value: teacherData.totalStudents, icon: Users, color: 'text-blue-600' },
    { label: 'المواد المدرسة', value: courses.length, icon: BookOpen, color: 'text-green-600' },
    { label: 'سنوات الخبرة', value: '15+', icon: Award, color: 'text-purple-600' },
    { label: 'تقييم المعلم', value: teacherData.rating, icon: Star, color: 'text-yellow-600' }
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

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Teacher Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-6 space-x-reverse">
              <img 
                src={teacherData.avatar} 
                alt={teacherData.name}
                className="w-20 h-20 rounded-3xl object-cover border-4 border-white/30"
              />
              <div>
                <h1 className="text-3xl font-bold mb-2">منصة {teacherData.name}</h1>
                <p className="text-blue-100 text-lg flex items-center">
                  <GraduationCap className="w-5 h-5 ml-2" />
                  معلم {teacherData.subject}
                </p>
                <p className="text-blue-100 text-sm flex items-center mt-1">
                  <MapPin className="w-4 h-4 ml-1" />
                  {teacherData.school}
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Heart className="w-6 h-6 ml-2 text-red-300" />
                <span className="text-2xl font-bold">{teacherData.rating}</span>
              </div>
              <div className="text-blue-100 text-sm">تقييم المعلم</div>
            </div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6">
            <p className="text-center text-lg font-medium italic">"{teacherData.motto}"</p>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {teacherStats.map((stat, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-white" />
                <div className="text-xl font-bold">{stat.value}</div>
                <div className="text-xs text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Progress in Teacher's Platform */}
      <div className="bg-white rounded-3xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <TrendingUp className="w-6 h-6 ml-3 text-green-500" />
            تقدمك مع {teacherData.name.split(' ')[1]}
          </h2>
          <div className="text-3xl font-bold text-green-600">{studentData.overallProgress}%</div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-2xl">
            <div className="text-2xl font-bold text-blue-600">{courses.length}</div>
            <div className="text-gray-600">مواد مسجلة</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-2xl">
            <div className="text-2xl font-bold text-green-600">{upcomingTasks.filter(t => t.status === 'completed').length}</div>
            <div className="text-gray-600">واجبات مكتملة</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-2xl">
            <div className="text-2xl font-bold text-purple-600">{upcomingTasks.filter(t => t.status === 'pending').length}</div>
            <div className="text-gray-600">واجبات معلقة</div>
          </div>
        </div>
      </div>

      {/* Teacher's Announcements */}
      <div className="bg-white rounded-3xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <Bell className="w-6 h-6 ml-3 text-yellow-500" />
            رسائل من {teacherData.name.split(' ')[1]}
          </h2>
        </div>
        <div className="space-y-4">
          {announcements.map(announcement => (
            <div key={announcement.id} className={`p-4 rounded-2xl border-r-4 ${
              announcement.type === 'urgent' ? 'bg-red-50 border-red-500' : 
              announcement.type === 'celebration' ? 'bg-green-50 border-green-500' :
              'bg-blue-50 border-blue-500'
            }`}>
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{announcement.title}</h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full mt-1 inline-block">
                    {announcement.targetLevel}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{announcement.time}</span>
              </div>
              <p className="text-gray-600">{announcement.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* My Tasks */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <Clock className="w-5 h-5 ml-3 text-orange-500" />
            واجباتي القادمة
          </h3>
          <div className="space-y-4">
            {upcomingTasks.slice(0, 3).map(task => (
              <div key={task.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{task.title}</div>
                  <div className="text-sm text-gray-500">{task.course}</div>
                  <div className="text-xs text-gray-400 flex items-center justify-between mt-1">
                    <span>موعد التسليم: {task.dueDate}</span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{task.points} نقطة</span>
                  </div>
                </div>
                <div className={`p-2 rounded-full ${
                  task.status === 'completed' ? 'bg-green-100 text-green-600' :
                  task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-red-100 text-red-600'
                }`}>
                  {task.status === 'completed' ? <CheckCircle className="w-5 h-5" /> :
                   task.status === 'in-progress' ? <Clock className="w-5 h-5" /> :
                   <AlertCircle className="w-5 h-5" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Lessons */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <PlayCircle className="w-5 h-5 ml-3 text-blue-500" />
            الدروس الأخيرة
          </h3>
          <div className="space-y-4">
            {recentLessons.map(lesson => (
              <div key={lesson.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className={`p-2 rounded-full ${
                    lesson.type === 'video' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {lesson.type === 'video' ? <Video className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{lesson.title}</div>
                    <div className="text-sm text-gray-500">{lesson.course} • {lesson.duration}</div>
                    <div className="text-xs text-gray-400">{lesson.date}</div>
                  </div>
                </div>
                {lesson.completed && (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">مواد {teacherData.name}</h1>
        <div className="text-sm text-gray-500 bg-gray-100 px-3 py-2 rounded-full">
          متخصص في {teacherData.subject}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className={`h-32 bg-gradient-to-r ${course.color} relative`}>
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
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">التقدم</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${course.color}`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex space-x-4 space-x-reverse text-sm text-gray-500">
                    <span className="flex items-center">
                      <FileText className="w-4 h-4 ml-1" />
                      {course.assignments}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 ml-1" />
                      {course.students}
                    </span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    دخول
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTeacherInfo = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">عن المعلم</h1>
      
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <div className="flex items-center space-x-6 space-x-reverse mb-8">
          <img 
            src={teacherData.avatar} 
            alt={teacherData.name}
            className="w-32 h-32 rounded-3xl object-cover"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{teacherData.name}</h2>
            <p className="text-xl text-gray-600 mb-2">معلم {teacherData.subject}</p>
            <p className="text-gray-500 mb-4">{teacherData.school}</p>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-500 ml-1" />
                <span className="font-bold">{teacherData.rating}</span>
              </div>
              <div className="text-gray-500">•</div>
              <div>{teacherData.experience}</div>
              <div className="text-gray-500">•</div>
              <div>{teacherData.totalStudents} طالب</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-3">فلسفة التدريس</h3>
          <p className="text-gray-700 leading-relaxed">
            "{teacherData.motto}" - أؤمن بأن كل طالب لديه القدرة على التميز والإبداع. 
            أسعى لجعل اللغة العربية ليست مجرد مادة دراسية، بل رحلة استكشاف للثقافة والتراث العربي الغني. 
            من خلال الطرق التفاعلية والتكنولوجيا الحديثة، أهدف إلى إلهام طلابي وتنمية حبهم للغة الضاد.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-gray-800 mb-4">التخصصات</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                النحو والصرف
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                البلاغة والنقد الأدبي
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                الأدب العربي الكلاسيكي والحديث
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                تحضير امتحانات الثانوية العامة
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-gray-800 mb-4">طرق التدريس</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <PlayCircle className="w-5 h-5 text-blue-500 ml-2" />
                دروس تفاعلية بالفيديو
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-5 h-5 text-purple-500 ml-2" />
                مناقشات جماعية
              </li>
              <li className="flex items-center">
                <FileText className="w-5 h-5 text-orange-500 ml-2" />
                واجبات تطبيقية
              </li>
              <li className="flex items-center">
                <Users className="w-5 h-5 text-green-500 ml-2" />
                جلسات مراجعة فردية
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'courses': return renderCourses();
      case 'assignments': return (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">واجباتي مع {teacherData.name.split(' ')[1]}</h1>
          <div className="grid gap-6">
            {upcomingTasks.map(task => (
              <div key={task.id} className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{task.title}</h3>
                    <p className="text-gray-600 mb-2">{task.course}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 ml-1" />
                        موعد التسليم: {task.dueDate}
                      </div>
                      <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {task.points} نقطة
                      </div>
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                    task.status === 'completed' ? 'bg-green-100 text-green-800' :
                    task.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {task.status === 'completed' ? 'مكتمل' :
                     task.status === 'in-progress' ? 'جاري العمل' : 'معلق'}
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 space-x-reverse">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                    عرض التفاصيل
                  </button>
                  {task.status !== 'completed' && (
                    <button className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors">
                      رفع الإجابة
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
      case 'teacher-info': return renderTeacherInfo();
      case 'discussions': return <div className="text-center py-20 text-gray-500">قريباً - المناقشات مع المعلم</div>;
      case 'calendar': return <div className="text-center py-20 text-gray-500">قريباً - جدول حصص المعلم</div>;
      case 'grades': return <div className="text-center py-20 text-gray-500">قريباً - درجاتي مع المعلم</div>;
      case 'profile': return <div className="text-center py-20 text-gray-500">قريباً - ملفي الشخصي</div>;
      case 'settings': return <div className="text-center py-20 text-gray-500">قريباً - الإعدادات</div>;
      default: return renderDashboard();
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50" dir="rtl">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 right-0 z-50 w-80 bg-white shadow-xl transform ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
      } transition-transform duration-300 ease-in-out`}>
        
        {/* Teacher Brand Header */}
        <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold">منصة {teacherData.name}</h2>
                <p className="text-sm text-blue-100">{teacherData.subject}</p>
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
            <div className="font-bold">{teacherData.name}</div>
          </div>
        </div>

        {/* Student Info */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-4 space-x-reverse">
            <img 
              src={studentData.avatar} 
              alt={studentData.name}
              className="w-12 h-12 rounded-2xl object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{studentData.name}</h3>
              <p className="text-sm text-gray-500">{studentData.grade}</p>
              <div className="flex items-center mt-1">
                <div className="w-16 bg-gray-200 rounded-full h-1.5 ml-2">
                  <div 
                    className="bg-green-500 h-1.5 rounded-full" 
                    style={{ width: `${studentData.overallProgress}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">{studentData.overallProgress}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-6 space-y-2">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-2xl transition-all duration-200 ${
                activeTab === item.id 
                  ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Teacher Contact */}
        <div className="absolute bottom-20 left-6 right-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 border border-green-200">
            <div className="flex items-center space-x-3 space-x-reverse mb-2">
              <img 
                src={teacherData.avatar} 
                alt={teacherData.name}
                className="w-10 h-10 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-800">تواصل مع المعلم</div>
                <div className="text-xs text-gray-500">{teacherData.name}</div>
              </div>
            </div>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2 rounded-xl transition-colors">
              إرسال رسالة
            </button>
          </div>
        </div>

        {/* Logout */}
        <div className="absolute bottom-6 left-6 right-6">
          <button className="w-full flex items-center justify-center space-x-2 space-x-reverse px-4 py-3 text-red-600 hover:bg-red-50 rounded-2xl transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">مغادرة المنصة</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-100 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  {sidebarItems.find(item => item.id === activeTab)?.label || 'الرئيسية'}
                </h1>
                <p className="text-gray-500">منصة {teacherData.name} للتعلم</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="relative">
                <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors relative">
                  <Bell className="w-6 h-6 text-gray-600" />
                  <div className="absolute -top-1 -left-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-medium">{announcements.length}</span>
                  </div>
                </button>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse">
                <img 
                  src={studentData.avatar}
                  alt={studentData.name}
                  className="w-10 h-10 rounded-2xl object-cover"
                />
                <div className="hidden md:block">
                  <div className="text-sm font-medium text-gray-800">{studentData.name}</div>
                  <div className="text-xs text-gray-500">طالب في منصة {teacherData.name.split(' ')[1]}</div>
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

export default TeacherPersonalLMS;