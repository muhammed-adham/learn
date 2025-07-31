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
  LogOut
} from 'lucide-react';

const StudentHomePage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Mock data - in real app this would come from API
  const studentData = {
    name: "أحمد محمد",
    grade: "الثانوية العامة - الصف الثالث",
    avatar: "https://mighty.tools/mockmind-api/content/cartoon/10.jpg",
    overallGrade: 85
  };

  const courses = [
    {
      id: 1,
      name: "اللغة العربية",
      teacher: "أ. فاطمة إبراهيم",
      progress: 78,
      nextClass: "2025-01-31T10:00:00",
      assignments: 3,
      discussions: 12,
    //   color: "from-blue-500 to-blue-600"
      color: "from-gray-600 to-gray-900"
    },
    {
      id: 2,
      name: "الرياضيات",
      teacher: "أ. محمد علي",
      progress: 92,
      nextClass: "2025-01-31T12:00:00",
      assignments: 1,
      discussions: 8,
    //   color: "from-purple-500 to-purple-600"
      color: "from-gray-600 to-gray-900"
    },
    {
      id: 3,
      name: "الفيزياء",
      teacher: "د. سارة أحمد",
      progress: 65,
      nextClass: "2025-02-01T09:00:00",
      assignments: 5,
      discussions: 15,
    //   color: "from-green-500 to-green-600"
      color: "from-gray-600 to-gray-900"
    },
    {
      id: 4,
      name: "الكيمياء",
      teacher: "د. يوسف حسن",
      progress: 88,
      nextClass: "2025-02-01T11:00:00",
      assignments: 2,
      discussions: 6,
    //   color: "from-red-500 to-red-600"
      color: "from-gray-600 to-gray-900"
    }
  ];

  const announcements = [
    {
      id: 1,
      title: "امتحان الفيزياء القادم",
      content: "سيكون امتحان الفيزياء يوم الأحد القادم في الساعة 10 صباحاً",
      time: "منذ ساعتين",
      type: "urgent"
    },
    {
      id: 2,
      title: "تحديث في منهج الرياضيات",
      content: "تم إضافة فصل جديد عن التفاضل والتكامل",
      time: "منذ 5 ساعات",
      type: "info"
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: "واجب الرياضيات - الفصل الخامس",
      course: "الرياضيات",
      dueDate: "2025-02-02",
      status: "pending"
    },
    {
      id: 2,
      title: "بحث في الأدب العربي",
      course: "اللغة العربية",
      dueDate: "2025-02-05",
      status: "in-progress"
    },
    {
      id: 3,
      title: "تجربة معملية - الكيمياء",
      course: "الكيمياء",
      dueDate: "2025-02-03",
      status: "completed"
    }
  ];

  const recentLessons = [
    {
      id: 1,
      title: "الشعر في العصر العباسي",
      course: "اللغة العربية",
      type: "video",
      duration: "45 دقيقة",
      completed: true
    },
    {
      id: 2,
      title: "التكامل المحدود",
      course: "الرياضيات",
      type: "pdf",
      duration: "30 دقيقة",
      completed: false
    },
    {
      id: 3,
      title: "قوانين نيوتن للحركة",
      course: "الفيزياء",
      type: "video",
      duration: "50 دقيقة",
      completed: true
    }
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'الرئيسية', icon: Home },
    { id: 'courses', label: 'المواد الدراسية', icon: BookOpen },
    { id: 'assignments', label: 'الواجبات', icon: FileText },
    { id: 'discussions', label: 'المناقشات', icon: MessageCircle },
    { id: 'calendar', label: 'الجدول الدراسي', icon: Calendar },
    { id: 'grades', label: 'الدرجات', icon: Award },
    { id: 'profile', label: 'الملف الشخصي', icon: User },
    { id: 'settings', label: 'الإعدادات', icon: Settings }
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      {/* <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden"> */}
      <div className="bg-gray-800 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">مرحباً، {studentData.name}</h1>
              <p className="text-blue-100 text-lg">{studentData.grade}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{studentData.overallGrade}%</div>
              <div className="text-blue-100">المعدل العام</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold">{courses.length}</div>
              <div className="text-sm text-blue-100">المواد المسجلة</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold">{upcomingTasks.filter(t => t.status === 'pending').length}</div>
              <div className="text-sm text-blue-100">واجبات معلقة</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold">{announcements.length}</div>
              <div className="text-sm text-blue-100">إعلانات جديدة</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
        //   { label: 'المواد الدراسية', icon: BookOpen, color: 'bg-blue-500', action: () => setActiveTab('courses') },
        //   { label: 'الواجبات', icon: FileText, color: 'bg-green-500', action: () => setActiveTab('assignments') },
        //   { label: 'المناقشات', icon: MessageCircle, color: 'bg-purple-500', action: () => setActiveTab('discussions') },
        //   { label: 'الجدول', icon: Calendar, color: 'bg-orange-500', action: () => setActiveTab('calendar') }
          { label: 'المواد الدراسية', icon: BookOpen, color: 'bg-gray-800', action: () => setActiveTab('courses') },
          { label: 'الواجبات', icon: FileText, color: 'bg-gray-800', action: () => setActiveTab('assignments') },
          { label: 'المناقشات', icon: MessageCircle, color: 'bg-gray-800', action: () => setActiveTab('discussions') },
          { label: 'الجدول', icon: Calendar, color: 'bg-gray-800', action: () => setActiveTab('calendar') }
        ].map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className={`${item.color} hover:opacity-90 text-white p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            <item.icon className="w-8 h-8 mx-auto mb-2" />
            <div className="font-medium">{item.label}</div>
          </button>
        ))}
      </div>

      {/* Announcements */}
      <div className="bg-white rounded-3xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <Bell className="w-6 h-6 ml-3 text-yellow-500" />
            الإعلانات الحديثة
          </h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            عرض الكل
          </button>
        </div>
        <div className="space-y-4">
          {announcements.map(announcement => (
            <div key={announcement.id} className={`p-4 rounded-2xl border-r-4 ${
              announcement.type === 'urgent' ? 'bg-red-50 border-red-500' : 'bg-blue-50 border-blue-500'
            }`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-800">{announcement.title}</h3>
                <span className="text-sm text-gray-500">{announcement.time}</span>
              </div>
              <p className="text-gray-600">{announcement.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Upcoming Tasks */}
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <Clock className="w-5 h-5 ml-3 text-orange-500" />
            المهام القادمة
          </h3>
          <div className="space-y-4">
            {upcomingTasks.slice(0, 3).map(task => (
              <div key={task.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{task.title}</div>
                  <div className="text-sm text-gray-500">{task.course}</div>
                  <div className="text-sm text-gray-400">موعد التسليم: {task.dueDate}</div>
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
        <h1 className="text-3xl font-bold text-gray-800">المواد الدراسية</h1>
        <div className="relative">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="البحث في المواد..."
            className="pl-4 pr-10 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 w-80"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className={`h-32 bg-gradient-to-r ${course.color} relative`}>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute bottom-4 right-4 text-white">
                <div className="text-2xl font-bold">{course.progress}%</div>
                <div className="text-sm opacity-90">مكتمل</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h3>
              <p className="text-gray-600 mb-4">{course.teacher}</p>
              
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
                
                <div className="flex justify-between items-center pt-4">
                  <div className="flex space-x-4 space-x-reverse text-sm text-gray-500">
                    <span className="flex items-center">
                      <FileText className="w-4 h-4 ml-1" />
                      {course.assignments}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="w-4 h-4 ml-1" />
                      {course.discussions}
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

  const renderAssignments = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">الواجبات والمهام</h1>
      
      <div className="grid gap-6">
        {upcomingTasks.map(task => (
          <div key={task.id} className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{task.title}</h3>
                <p className="text-gray-600 mb-2">{task.course}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 ml-1" />
                  موعد التسليم: {task.dueDate}
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

  const renderContent = () => {
    switch(activeTab) {
      case 'courses': return renderCourses();
      case 'assignments': return renderAssignments();
      case 'discussions': return <div className="text-center py-20 text-gray-500">قريباً - صفحة المناقشات</div>;
      case 'calendar': return <div className="text-center py-20 text-gray-500">قريباً - الجدول الدراسي</div>;
      case 'grades': return <div className="text-center py-20 text-gray-500">قريباً - صفحة الدرجات</div>;
      case 'profile': return <div className="text-center py-20 text-gray-500">قريباً - الملف الشخصي</div>;
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
        
        {/* Logo and Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3 space-x-reverse gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">مدرستي</h2>
              <p className="text-sm text-gray-500">منصة التعلم</p>
            </div>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Student Info */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-4 space-x-reverse gap-2">
            <img 
              src={studentData.avatar} 
              alt={studentData.name}
              className="w-12 h-12 rounded-2xl object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{studentData.name}</h3>
              <p className="text-sm text-gray-500">{studentData.grade}</p>
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

        {/* Logout */}
        <div className="absolute bottom-6 left-6 right-6">
          <button className="w-full flex items-center justify-center space-x-2 space-x-reverse px-4 py-3 text-red-600 hover:bg-red-50 rounded-2xl transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">تسجيل الخروج</span>
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
                <p className="text-gray-500">مرحباً بك في منصة مدرستي</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="relative">
                <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors relative">
                  <Bell className="w-6 h-6 text-gray-600" />
                  <div className="absolute -top-1 -left-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-medium">2</span>
                  </div>
                </button>
              </div>
              
              <div className="flex items-center space-x-3 space-x-reverse gap-2 ">
                <img 
                  src={studentData.avatar}
                  alt={studentData.name}
                  className="w-10 h-10 rounded-2xl object-cover"
                />
                <div className="hidden md:block">
                  <div className="text-sm font-medium text-gray-800">{studentData.name}</div>
                  <div className="text-xs text-gray-500">طالب</div>
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

export default StudentHomePage;