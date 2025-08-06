import React, { useState } from 'react';
import {
    FileText,
    Calendar,
    Clock,
    User,
    Users,
    CheckCircle,
    AlertTriangle,
    XCircle,
    Upload,
    Download,
    Eye,
    Edit,
    Trash2,
    Plus,
    Filter,
    Search,
    Star,
    Award,
    BookOpen,
    MessageCircle,
    Paperclip,
    Send,
    ChevronDown,
    ChevronRight,
    BarChart3,
    TrendingUp,
    PlayCircle,
    Pause,
    RotateCcw,
    Save,
    X,
    Menu,
    Bell,
    Settings
} from 'lucide-react';

const AssignmentPage = () => {
    const [currentView, setCurrentView] = useState('student');
    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showSubmissionModal, setShowSubmissionModal] = useState(false);
    const [expandedAssignment, setExpandedAssignment] = useState(null);
    const [filterStatus, setFilterStatus] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [assignmentTemplate, setAssignmentTemplate] = useState(1);

    // Color scheme
    const colorScheme = {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        accent: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
        success: '#10B981'
    };

    const getColoredStyle = (type) => {
        const hexToRgb = (hex) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? [
                parseInt(result[1], 16),
                parseInt(result[2], 16),
                parseInt(result[3], 16)
            ] : [59, 130, 246];
        };

        const color = colorScheme[type] || colorScheme.primary;
        return {
            bg: `rgb(${hexToRgb(color).join(', ')})`,
            bgLight: `rgba(${hexToRgb(color).join(', ')}, 0.1)`,
            text: color,
            border: color
        };
    };

    // Sample assignment data
    const assignments = [
        {
            id: 1,
            title: "تحليل قصيدة من العصر الجاهلي",
            description: "اختر قصيدة من العصر الجاهلي وحللها من ناحية المعنى والأسلوب والصور البلاغية",
            course: "اللغة العربية - الصف الثاني الثانوي",
            dueDate: "2025-08-15T23:59:00",
            createdDate: "2025-08-01T10:00:00",
            maxPoints: 100,
            status: "pending",
            submissionType: "file",
            allowLateSubmission: true,
            instructions: "يجب أن يتضمن التحليل: المعنى العام، الأسلوب الشعري، الصور البلاغية، والتقييم النقدي",
            attachments: ["rubric.pdf", "sample_analysis.docx"],
            submissions: {
                total: 42,
                submitted: 38,
                graded: 35,
                pending: 3
            },
            studentSubmission: null,
            difficulty: "متوسط",
            estimatedTime: "3-4 ساعات"
        },
        {
            id: 2,
            title: "كتابة مقال عن أهمية الشعر في التراث العربي",
            description: "اكتب مقالاً لا يقل عن 500 كلمة عن دور الشعر في التراث العربي وأثره في المجتمع",
            course: "اللغة العربية - الصف الثالث الثانوي",
            dueDate: "2025-08-20T23:59:00",
            createdDate: "2025-08-05T14:30:00",
            maxPoints: 75,
            status: "submitted",
            submissionType: "both",
            allowLateSubmission: false,
            instructions: "المقال يجب أن يحتوي على مقدمة وثلاث نقاط رئيسية وخاتمة مع استشهادات مناسبة",
            attachments: ["essay_guidelines.pdf"],
            submissions: {
                total: 35,
                submitted: 35,
                graded: 30,
                pending: 5
            },
            studentSubmission: {
                submittedAt: "2025-08-18T15:30:00",
                grade: 68,
                feedback: "مقال جيد لكن يحتاج إلى مزيد من الأمثلة التطبيقية",
                file: "my_essay.docx"
            },
            difficulty: "متقدم",
            estimatedTime: "2-3 ساعات"
        },
        {
            id: 3,
            title: "حفظ وتسميع قصيدة المتنبي",
            description: "احفظ قصيدة 'على قدر أهل العزم' للمتنبي وسجل فيديو للتسميع",
            course: "اللغة العربية - الصف الأول الثانوي",
            dueDate: "2025-08-10T23:59:00",
            createdDate: "2025-07-25T09:00:00",
            maxPoints: 50,
            status: "overdue",
            submissionType: "file",
            allowLateSubmission: true,
            instructions: "سجل فيديو واضح للتسميع مع مراعاة النطق الصحيح والتنغيم المناسب",
            attachments: ["poem_text.pdf", "pronunciation_guide.mp3"],
            submissions: {
                total: 28,
                submitted: 20,
                graded: 18,
                pending: 2
            },
            studentSubmission: null,
            difficulty: "مبتدئ",
            estimatedTime: "1-2 ساعة"
        }
    ];

    const getStatusColor = (status) => {
        switch(status) {
            case 'pending': return getColoredStyle('warning');
            case 'submitted': return getColoredStyle('success');
            case 'overdue': return getColoredStyle('danger');
            case 'graded': return getColoredStyle('primary');
            default: return getColoredStyle('primary');
        }
    };

    const getStatusText = (status) => {
        switch(status) {
            case 'pending': return 'معلق';
            case 'submitted': return 'مُسلم';
            case 'overdue': return 'متأخر';
            case 'graded': return 'مُصحح';
            default: return 'غير محدد';
        }
    };

    const getStatusIcon = (status) => {
        switch(status) {
            case 'pending': return AlertTriangle;
            case 'submitted': return CheckCircle;
            case 'overdue': return XCircle;
            case 'graded': return Star;
            default: return Clock;
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-EG', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getDaysUntilDue = (dueDate) => {
        const now = new Date();
        const due = new Date(dueDate);
        const diffTime = due - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    // Filter assignments
    const filteredAssignments = assignments.filter(assignment => {
        const matchesSearch = assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            assignment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            assignment.course.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesStatus = filterStatus === 'all' || assignment.status === filterStatus;
        
        return matchesSearch && matchesStatus;
    });

    // Assignment Detail Modal
    const AssignmentDetailModal = ({ assignment, onClose }) => {
        if (!assignment) return null;

        const statusStyle = getStatusColor(assignment.status);
        const StatusIcon = getStatusIcon(assignment.status);
        const daysUntilDue = getDaysUntilDue(assignment.dueDate);

        return (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
                    <div 
                        className="p-6 text-white relative"
                        style={{ background: `linear-gradient(135deg, ${statusStyle.bg}, ${getColoredStyle('secondary').bg})` }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 left-4 p-2 hover:bg-white/20 rounded-xl transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="ml-16">
                            <div className="flex items-center space-x-3 space-x-reverse mb-4">
                                <StatusIcon className="w-8 h-8" />
                                <div>
                                    <h2 className="text-2xl font-bold">{assignment.title}</h2>
                                    <p className="text-blue-100">{assignment.course}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
                                    <div className="text-2xl font-bold">{assignment.maxPoints}</div>
                                    <div className="text-sm opacity-90">نقطة</div>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
                                    <div className="text-2xl font-bold">{daysUntilDue > 0 ? daysUntilDue : 0}</div>
                                    <div className="text-sm opacity-90">يوم متبقي</div>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
                                    <div className="text-2xl font-bold">{assignment.difficulty}</div>
                                    <div className="text-sm opacity-90">المستوى</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 overflow-y-auto max-h-[60vh]">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3">وصف المهمة</h3>
                                <p className="text-gray-600 leading-relaxed">{assignment.description}</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3">التعليمات</h3>
                                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                                    <p className="text-gray-700">{assignment.instructions}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border-t border-gray-200 bg-gray-50">
                        <div className="flex space-x-3 space-x-reverse">
                            {assignment.status === 'pending' && (
                                <button
                                    onClick={() => {
                                        onClose();
                                        setShowSubmissionModal(true);
                                        setSelectedAssignment(assignment);
                                    }}
                                    className="flex items-center space-x-2 space-x-reverse text-white px-6 py-3 rounded-xl transition-colors font-medium"
                                    style={{ backgroundColor: statusStyle.bg }}
                                >
                                    <Upload className="w-5 h-5" />
                                    <span>تسليم المهمة</span>
                                </button>
                            )}
                            <button className="flex items-center space-x-2 space-x-reverse bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl transition-colors font-medium">
                                <MessageCircle className="w-5 h-5" />
                                <span>سؤال المعلم</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Submission Modal
    const SubmissionModal = ({ assignment, onClose }) => {
        const [submissionText, setSubmissionText] = useState('');
        const [selectedFile, setSelectedFile] = useState(null);

        if (!assignment) return null;

        const handleSubmit = () => {
            console.log('Submitting assignment:', { text: submissionText, file: selectedFile });
            onClose();
        };

        const wordCount = submissionText.split(' ').filter(word => word.length > 0).length;

        return (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">تسليم المهمة</h2>
                                <p className="text-gray-600">{assignment.title}</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>
                    </div>

                    <div className="p-6 space-y-6 overflow-y-auto max-h-[50vh]">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                رفع ملف
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-600 mb-2">اسحب وأفلت الملف هنا أو انقر للاختيار</p>
                                <p className="text-sm text-gray-500">أنواع الملفات المدعومة: PDF, DOC, DOCX, JPG, PNG</p>
                                <input
                                    type="file"
                                    className="hidden"
                                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                    onChange={(e) => setSelectedFile(e.target.files[0])}
                                />
                            </div>
                            {selectedFile && (
                                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3 space-x-reverse">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-green-700">{selectedFile.name}</span>
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                النص
                            </label>
                            <textarea
                                value={submissionText}
                                onChange={(e) => setSubmissionText(e.target.value)}
                                className="w-full h-40 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                placeholder="اكتب إجابتك هنا..."
                            />
                            <div className="text-sm text-gray-500 mt-2">
                                عدد الكلمات: {wordCount}
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border-t border-gray-200 bg-gray-50">
                        <div className="flex space-x-3 space-x-reverse">
                            <button
                                onClick={handleSubmit}
                                className="flex items-center space-x-2 space-x-reverse bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-colors font-medium"
                                disabled={!selectedFile && !submissionText.trim()}
                            >
                                <Send className="w-5 h-5" />
                                <span>تسليم المهمة</span>
                            </button>
                            <button
                                onClick={onClose}
                                className="flex items-center space-x-2 space-x-reverse bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl transition-colors font-medium"
                            >
                                <span>إلغاء</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Create Assignment Modal
    const CreateAssignmentModal = ({ onClose, onSave }) => {
        const [formData, setFormData] = useState({
            title: '',
            description: '',
            instructions: '',
            course: '',
            dueDate: '',
            maxPoints: 100,
            submissionType: 'both',
            allowLateSubmission: true,
            difficulty: 'متوسط',
            estimatedTime: ''
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            onSave(formData);
        };

        const courses = [
            'اللغة العربية - الصف الأول الثانوي',
            'اللغة العربية - الصف الثاني الثانوي',
            'اللغة العربية - الصف الثالث الثانوي'
        ];

        return (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
                    <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold">إنشاء مهمة جديدة</h2>
                                <p className="text-blue-100">أضف مهمة جديدة لطلابك</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[70vh]">
                        <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        عنوان المهمة *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.title}
                                        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="اكتب عنوان المهمة..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        المادة الدراسية *
                                    </label>
                                    <select
                                        required
                                        value={formData.course}
                                        onChange={(e) => setFormData(prev => ({ ...prev, course: e.target.value }))}
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">اختر المادة</option>
                                        {courses.map(course => (
                                            <option key={course} value={course}>{course}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    وصف المهمة *
                                </label>
                                <textarea
                                    required
                                    value={formData.description}
                                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                                    className="w-full h-32 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    placeholder="اكتب وصفاً مختصراً للمهمة..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    التعليمات التفصيلية *
                                </label>
                                <textarea
                                    required
                                    value={formData.instructions}
                                    onChange={(e) => setFormData(prev => ({ ...prev, instructions: e.target.value }))}
                                    className="w-full h-40 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    placeholder="اكتب التعليمات التفصيلية للمهمة..."
                                />
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        موعد التسليم *
                                    </label>
                                    <input
                                        type="datetime-local"
                                        required
                                        value={formData.dueDate}
                                        onChange={(e) => setFormData(prev => ({ ...prev, dueDate: e.target.value }))}
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        الدرجة القصوى *
                                    </label>
                                    <input
                                        type="number"
                                        required
                                        min="1"
                                        max="1000"
                                        value={formData.maxPoints}
                                        onChange={(e) => setFormData(prev => ({ ...prev, maxPoints: parseInt(e.target.value) }))}
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        مستوى الصعوبة
                                    </label>
                                    <select
                                        value={formData.difficulty}
                                        onChange={(e) => setFormData(prev => ({ ...prev, difficulty: e.target.value }))}
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="مبتدئ">مبتدئ</option>
                                        <option value="متوسط">متوسط</option>
                                        <option value="متقدم">متقدم</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="p-6 border-t border-gray-200 bg-gray-50">
                        <div className="flex space-x-3 space-x-reverse">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="flex items-center space-x-2 space-x-reverse bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors font-medium"
                            >
                                <Save className="w-5 h-5" />
                                <span>إنشاء المهمة</span>
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex items-center space-x-2 space-x-reverse bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl transition-colors font-medium"
                            >
                                <span>إلغاء</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Statistics for teacher/admin
    const ViewStatistics = () => {
        const totalAssignments = assignments.length;
        const pendingAssignments = assignments.filter(a => a.status === 'pending').length;
        const overdueAssignments = assignments.filter(a => a.status === 'overdue').length;
        const completedAssignments = assignments.filter(a => a.status === 'submitted' || a.status === 'graded').length;

        return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl">
                    <div className="flex items-center space-x-3 space-x-reverse">
                        <FileText className="w-8 h-8" />
                        <div>
                            <div className="text-2xl font-bold">{totalAssignments}</div>
                            <div className="text-sm opacity-90">إجمالي المهام</div>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-6 rounded-2xl">
                    <div className="flex items-center space-x-3 space-x-reverse">
                        <Clock className="w-8 h-8" />
                        <div>
                            <div className="text-2xl font-bold">{pendingAssignments}</div>
                            <div className="text-sm opacity-90">معلقة</div>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-2xl">
                    <div className="flex items-center space-x-3 space-x-reverse">
                        <XCircle className="w-8 h-8" />
                        <div>
                            <div className="text-2xl font-bold">{overdueAssignments}</div>
                            <div className="text-sm opacity-90">متأخرة</div>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl">
                    <div className="flex items-center space-x-3 space-x-reverse">
                        <CheckCircle className="w-8 h-8" />
                        <div>
                            <div className="text-2xl font-bold">{completedAssignments}</div>
                            <div className="text-sm opacity-90">مكتملة</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Assignment Templates
    const AssignmentCard = ({ assignment, onSelect, onSubmit }) => {
        const statusStyle = getStatusColor(assignment.status);
        const StatusIcon = getStatusIcon(assignment.status);
        const daysUntilDue = getDaysUntilDue(assignment.dueDate);

        return (
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div
                    className="h-32 relative p-6 text-white"
                    style={{ backgroundColor: statusStyle.bg }}
                >
                    <div className="absolute top-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                            {assignment.maxPoints} نقطة
                        </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                        <div className="flex items-center space-x-2 space-x-reverse">
                            <StatusIcon className="w-5 h-5" />
                            <span className="text-sm">{getStatusText(assignment.status)}</span>
                        </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                        <div className="text-right">
                            <div className="text-sm opacity-90">باقي</div>
                            <div className="font-bold">
                                {daysUntilDue > 0 ? `${daysUntilDue} يوم` : 'منتهي'}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{assignment.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{assignment.description}</p>
                    
                    <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span className="flex items-center">
                                <BookOpen className="w-4 h-4 ml-1" />
                                {assignment.course.split(' - ')[1]}
                            </span>
                            <span className="flex items-center">
                                <Clock className="w-4 h-4 ml-1" />
                                {assignment.estimatedTime}
                            </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span className="flex items-center">
                                <Calendar className="w-4 h-4 ml-1" />
                                {formatDate(assignment.dueDate).split(' ')[0]}
                            </span>
                            <span
                                className="px-2 py-1 rounded-full text-xs text-white"
                                style={{ backgroundColor: statusStyle.bg }}
                            >
                                {assignment.difficulty}
                            </span>
                        </div>
                    </div>

                    <div className="flex space-x-2 space-x-reverse">
                        <button
                            onClick={() => onSelect(assignment)}
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-xl transition-colors text-sm font-medium"
                        >
                            عرض التفاصيل
                        </button>
                        {assignment.status === 'pending' && (
                            <button
                                onClick={() => onSubmit(assignment)}
                                className="flex-1 text-white py-2 px-4 rounded-xl transition-colors text-sm font-medium"
                                style={{ backgroundColor: statusStyle.bg }}
                            >
                                تسليم
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    const AssignmentList = ({ assignment, onSelect, onSubmit }) => {
        const statusStyle = getStatusColor(assignment.status);
        const StatusIcon = getStatusIcon(assignment.status);
        const daysUntilDue = getDaysUntilDue(assignment.dueDate);

        return (
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-8 hover:shadow-xl transition-shadow" style={{ borderColor: statusStyle.border }}>
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <div className="flex items-center space-x-3 space-x-reverse mb-2">
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center"
                                style={{ backgroundColor: statusStyle.bg }}
                            >
                                <FileText className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">{assignment.title}</h3>
                                <p className="text-sm text-gray-500">{assignment.course}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{assignment.description}</p>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold" style={{ color: statusStyle.text }}>{assignment.maxPoints}</div>
                        <div className="text-xs text-gray-500">نقطة</div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div
                        className="text-center p-3 rounded-xl"
                        style={{ backgroundColor: statusStyle.bgLight }}
                    >
                        <StatusIcon className="w-5 h-5 mx-auto mb-1" style={{ color: statusStyle.text }} />
                        <div className="text-sm font-bold" style={{ color: statusStyle.text }}>{getStatusText(assignment.status)}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <Calendar className="w-5 h-5 mx-auto mb-1 text-gray-500" />
                        <div className="text-sm font-bold text-gray-700">
                            {daysUntilDue > 0 ? `${daysUntilDue} يوم` : 'منتهي'}
                        </div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-xl">
                        <Clock className="w-5 h-5 mx-auto mb-1 text-blue-500" />
                        <div className="text-sm font-bold text-blue-700">{assignment.estimatedTime}</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-xl">
                        <BarChart3 className="w-5 h-5 mx-auto mb-1 text-purple-500" />
                        <div className="text-sm font-bold text-purple-700">{assignment.difficulty}</div>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                    <div className="flex space-x-4 space-x-reverse text-sm text-gray-500">
                        <span className="flex items-center">
                            <Users className="w-4 h-4 ml-1" />
                            {assignment.submissions.submitted}/{assignment.submissions.total} طالب
                        </span>
                        <span className="flex items-center">
                            <Paperclip className="w-4 h-4 ml-1" />
                            {assignment.attachments.length} مرفق
                        </span>
                    </div>
                    <div className="flex space-x-2 space-x-reverse">
                        <button
                            onClick={() => onSelect(assignment)}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl transition-colors text-sm font-medium"
                        >
                            عرض التفاصيل
                        </button>
                        {assignment.status === 'pending' && (
                            <button
                                onClick={() => onSubmit(assignment)}
                                className="text-white px-4 py-2 rounded-xl transition-colors text-sm font-medium"
                                style={{ backgroundColor: statusStyle.bg }}
                            >
                                تسليم الآن
                            </button>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    const AssignmentExpanded = ({ assignment, onSelect, onSubmit }) => {
        const statusStyle = getStatusColor(assignment.status);
        const StatusIcon = getStatusIcon(assignment.status);
        const daysUntilDue = getDaysUntilDue(assignment.dueDate);
        const isExpanded = expandedAssignment === assignment.id;

        return (
            <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedAssignment(isExpanded ? null : assignment.id)}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 space-x-reverse flex-1">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: statusStyle.bg }}
                            ></div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-gray-800 mb-1">{assignment.title}</h3>
                                <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500">
                                    <span className="flex items-center">
                                        <StatusIcon className="w-4 h-4 ml-1" />
                                        {getStatusText(assignment.status)}
                                    </span>
                                    <span className="flex items-center">
                                        <Calendar className="w-4 h-4 ml-1" />
                                        باقي {daysUntilDue > 0 ? `${daysUntilDue} يوم` : 'منتهي'}
                                    </span>
                                    <span className="flex items-center">
                                        <Award className="w-4 h-4 ml-1" />
                                        {assignment.maxPoints} نقطة
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 space-x-reverse">
                            <span
                                className="px-3 py-1 rounded-full text-xs font-medium text-white"
                                style={{ backgroundColor: statusStyle.bg }}
                            >
                                {assignment.difficulty}
                            </span>
                            {isExpanded ? <ChevronDown className="w-5 h-5 text-gray-400" /> : <ChevronRight className="w-5 h-5 text-gray-400" />}
                        </div>
                    </div>
                </div>

                {isExpanded && (
                    <div className="border-t border-gray-200 p-6 bg-white">
                        <div className="mb-6">
                            <h4 className="font-semibold text-gray-800 mb-2">وصف المهمة</h4>
                            <p className="text-gray-600 mb-4">{assignment.description}</p>
                            <p className="text-gray-600 text-sm">{assignment.instructions}</p>
                        </div>

                        <div className="flex space-x-3 space-x-reverse">
                            <button
                                onClick={() => onSelect(assignment)}
                                className="flex items-center space-x-2 space-x-reverse bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl transition-colors"
                            >
                                <Eye className="w-4 h-4" />
                                <span>عرض كامل</span>
                            </button>
                            {assignment.status === 'pending' && (
                                <button
                                    onClick={() => onSubmit(assignment)}
                                    className="flex items-center space-x-2 space-x-reverse text-white px-4 py-2 rounded-xl transition-colors"
                                    style={{ backgroundColor: statusStyle.bg }}
                                >
                                    <Upload className="w-4 h-4" />
                                    <span>تسليم المهمة</span>
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const renderAssignments = () => {
        if (filteredAssignments.length === 0) {
            return (
                <div className="text-center py-20">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">لا توجد مهام</h3>
                    <p className="text-gray-500">
                        {searchTerm || filterStatus !== 'all' 
                            ? 'لم نجد مهام تطابق البحث أو الفلتر المحدد' 
                            : 'لا توجد مهام متاحة حالياً'}
                    </p>
                </div>
            );
        }

        const handleSelect = (assignment) => setSelectedAssignment(assignment);
        const handleSubmit = (assignment) => {
            setSelectedAssignment(assignment);
            setShowSubmissionModal(true);
        };

        if (assignmentTemplate === 1) {
            return (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAssignments.map((assignment) => (
                        <AssignmentCard
                            key={assignment.id}
                            assignment={assignment}
                            onSelect={handleSelect}
                            onSubmit={handleSubmit}
                        />
                    ))}
                </div>
            );
        } else if (assignmentTemplate === 2) {
            return (
                <div className="space-y-6">
                    {filteredAssignments.map((assignment) => (
                        <AssignmentList
                            key={assignment.id}
                            assignment={assignment}
                            onSelect={handleSelect}
                            onSubmit={handleSubmit}
                        />
                    ))}
                </div>
            );
        } else {
            return (
                <div className="space-y-4">
                    {filteredAssignments.map((assignment) => (
                        <AssignmentExpanded
                            key={assignment.id}
                            assignment={assignment}
                            onSelect={handleSelect}
                            onSubmit={handleSubmit}
                        />
                    ))}
                </div>
            );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl">
            <div className="container mx-auto px-6 py-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                                {currentView === 'student' ? 'مهامي' : 
                                 currentView === 'teacher' ? 'إدارة المهام' : 'لوحة تحكم المهام'}
                            </h1>
                            <p className="text-gray-600">
                                {currentView === 'student' ? 'تتبع مهامك الدراسية وأداء واجباتك' :
                                 currentView === 'teacher' ? 'إنشاء ومتابعة مهام الطلاب' : 'إحصائيات شاملة لجميع المهام'}
                            </p>
                        </div>
                        
                        {/* View Selector */}
                        <div className="flex items-center space-x-2 space-x-reverse">
                            <div className="bg-white rounded-2xl p-1 shadow-lg">
                                <button
                                    onClick={() => setCurrentView('student')}
                                    className={`px-4 py-2 rounded-xl transition-all ${
                                        currentView === 'student' 
                                            ? 'bg-blue-500 text-white' 
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    طالب
                                </button>
                                <button
                                    onClick={() => setCurrentView('teacher')}
                                    className={`px-4 py-2 rounded-xl transition-all ${
                                        currentView === 'teacher' 
                                            ? 'bg-blue-500 text-white' 
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    معلم
                                </button>
                                <button
                                    onClick={() => setCurrentView('admin')}
                                    className={`px-4 py-2 rounded-xl transition-all ${
                                        currentView === 'admin' 
                                            ? 'bg-blue-500 text-white' 
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    مدير
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Statistics for Teacher/Admin views */}
                    {(currentView === 'teacher' || currentView === 'admin') && <ViewStatistics />}

                    {/* Controls */}
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 md:space-x-reverse">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="البحث في المهام..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div className="flex items-center space-x-4 space-x-reverse">
                            {/* Filter */}
                            <div className="relative">
                                <select
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                    className="appearance-none bg-white border border-gray-300 rounded-2xl px-4 py-3 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="all">جميع المهام</option>
                                    <option value="pending">معلقة</option>
                                    <option value="submitted">مُسلمة</option>
                                    <option value="overdue">متأخرة</option>
                                    <option value="graded">مُصححة</option>
                                </select>
                                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                            </div>

                            {/* Template Selector */}
                            <div className="flex items-center space-x-2 space-x-reverse bg-white rounded-2xl p-1 shadow-lg">
                                {[1, 2, 3].map(num => (
                                    <button
                                        key={num}
                                        onClick={() => setAssignmentTemplate(num)}
                                        className={`w-10 h-10 rounded-xl transition-all ${
                                            assignmentTemplate === num 
                                                ? 'bg-blue-500 text-white' 
                                                : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>

                            {/* Create Assignment (Teacher/Admin only) */}
                            {(currentView === 'teacher' || currentView === 'admin') && (
                                <button
                                    onClick={() => setShowCreateModal(true)}
                                    className="flex items-center space-x-2 space-x-reverse bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition-colors font-medium"
                                >
                                    <Plus className="w-5 h-5" />
                                    <span>مهمة جديدة</span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Assignment List */}
                {renderAssignments()}

                {/* Modals */}
                {selectedAssignment && !showSubmissionModal && (
                    <AssignmentDetailModal
                        assignment={selectedAssignment}
                        onClose={() => setSelectedAssignment(null)}
                    />
                )}

                {showSubmissionModal && selectedAssignment && (
                    <SubmissionModal
                        assignment={selectedAssignment}
                        onClose={() => {
                            setShowSubmissionModal(false);
                            setSelectedAssignment(null);
                        }}
                    />
                )}

                {showCreateModal && (currentView === 'teacher' || currentView === 'admin') && (
                    <CreateAssignmentModal
                        onClose={() => setShowCreateModal(false)}
                        onSave={(newAssignment) => {
                            console.log('Creating new assignment:', newAssignment);
                            setShowCreateModal(false);
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default AssignmentPage;