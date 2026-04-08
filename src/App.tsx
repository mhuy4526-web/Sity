/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Users, 
  ArrowRight, 
  CheckCircle2,
  Mail,
  Phone,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect, FormEvent } from "react";

const services = [
  {
    title: "Quản lý Tài khoản",
    description: "Chăm sóc và tối ưu hóa hồ sơ cá nhân/doanh nghiệp trên đa nền tảng.",
    icon: <Users className="w-6 h-6" />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Bảo mật & Hỗ trợ",
    description: "Bảo vệ tài khoản khỏi xâm nhập và hỗ trợ lấy lại quyền truy cập.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Tăng trưởng Tương tác",
    description: "Chiến lược tăng follow, like và comment thật cho bài viết của bạn.",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    title: "Phân tích & Báo cáo",
    description: "Theo dõi chỉ số hiệu quả và đề xuất hướng đi tối ưu nhất.",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "bg-purple-100 text-purple-600"
  }
];

const testimonials = [
  {
    name: "Nguyễn Văn A",
    role: "Chủ shop thời trang",
    content: "Dịch vụ rất chuyên nghiệp, fanpage của tôi đã tăng trưởng vượt bậc sau 1 tháng.",
    avatar: "https://picsum.photos/seed/user1/100/100"
  },
  {
    name: "Trần Thị B",
    role: "KOL / Influencer",
    content: "Hỗ trợ bảo mật cực kỳ an tâm. Tôi không còn lo lắng về việc bị hack tài khoản nữa.",
    avatar: "https://picsum.photos/seed/user2/100/100"
  },
  {
    name: "Lê Văn C",
    role: "CEO Tech Startup",
    content: "Đội ngũ nhiệt tình, báo cáo chi tiết giúp tôi hiểu rõ khách hàng của mình hơn.",
    avatar: "https://picsum.photos/seed/user3/100/100"
  }
];

const projects = [
  {
    title: "Tăng trưởng Fanpage Thời trang",
    category: "Quản lý & Tăng trưởng",
    result: "+50k Follower",
    image: "https://picsum.photos/seed/proj1/600/400"
  },
  {
    title: "Bảo mật tài khoản KOL",
    category: "Bảo mật",
    result: "100% An toàn",
    image: "https://picsum.photos/seed/proj2/600/400"
  },
  {
    title: "Chiến dịch Viral Video",
    category: "Sáng tạo nội dung",
    result: "2M+ Views",
    image: "https://picsum.photos/seed/proj3/600/400"
  }
];

const pricing = [
  {
    name: "Cơ bản",
    price: "2.000.000",
    features: ["Quản lý 1 Fanpage", "10 bài viết/tháng", "Hỗ trợ bảo mật cơ bản", "Báo cáo hàng tháng"],
    recommended: false
  },
  {
    name: "Chuyên nghiệp",
    price: "5.000.000",
    features: ["Quản lý 3 nền tảng", "25 bài viết/tháng", "Tăng trưởng tương tác", "Hỗ trợ 24/7", "Chạy quảng cáo cơ bản"],
    recommended: true
  },
  {
    name: "Doanh nghiệp",
    price: "Liên hệ",
    features: ["Quản lý đa kênh", "Nội dung không giới hạn", "Chiến lược Viral", "Quản lý khủng hoảng", "Phân tích chuyên sâu"],
    recommended: false
  }
];

const faqs = [
  {
    q: "Dịch vụ có cam kết hiệu quả không?",
    a: "Chúng tôi cam kết các chỉ số tăng trưởng thật dựa trên hợp đồng rõ ràng. Nếu không đạt KPI, chúng tôi sẽ hoàn tiền hoặc hỗ trợ thêm miễn phí."
  },
  {
    q: "Thời gian triển khai trong bao lâu?",
    a: "Thông thường quy trình bắt đầu từ 3-5 ngày sau khi ký kết hợp đồng và nhận bàn giao tài khoản."
  },
  {
    q: "Tài khoản của tôi có an toàn không?",
    a: "Bảo mật là ưu tiên hàng đầu. Chúng tôi sử dụng các phương thức đăng nhập an toàn và cam kết không tiết lộ thông tin khách hàng."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", href: "#home" },
    { name: "Dịch vụ", href: "#services" },
    { name: "Dự án", href: "#portfolio" },
    { name: "Bảng giá", href: "#pricing" },
    { name: "Về tôi", href: "#about" },
    { name: "Liên hệ", href: "#contact" }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 font-bold text-xl tracking-tight"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <span className="gradient-text">SMM Support</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95">
              Bắt đầu ngay
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-slate-600"
                  >
                    {link.name}
                  </a>
                ))}
                <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">
                  Bắt đầu ngay
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-100/50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Chuyên gia hỗ trợ mạng xã hội
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Nâng tầm <span className="gradient-text">Thương hiệu</span> của bạn trên Social Media
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                Chúng tôi cung cấp giải pháp toàn diện từ bảo mật, quản lý đến tăng trưởng tương tác, giúp bạn tập trung vào việc sáng tạo nội dung.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-2 group">
                  Liên hệ tư vấn <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                  Xem bảng giá
                </button>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/face${i}/100/100`}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-bold text-slate-900">500+ Khách hàng</div>
                  <div className="text-slate-500">Đã tin tưởng sử dụng dịch vụ</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 glass rounded-[2.5rem] p-4 shadow-2xl overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/social/800/1000" 
                  alt="Social Media Management"
                  className="rounded-[2rem] w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                        <BarChart3 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-medium">Tăng trưởng tuần này</div>
                        <div className="text-lg font-bold text-slate-900">+124% Follower</div>
                      </div>
                    </div>
                    <div className="text-green-500 font-bold">+2.4k</div>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="bg-blue-600 h-full"
                    />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-3xl flex items-center justify-center text-white shadow-xl rotate-12 z-20"
              >
                <Instagram className="w-12 h-12" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-xl -rotate-12 z-20"
              >
                <Facebook className="w-10 h-10" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-base font-bold text-blue-600 uppercase tracking-widest mb-4">Dịch vụ của chúng tôi</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Giải pháp toàn diện cho mạng xã hội</h3>
            <p className="text-lg text-slate-600">Chúng tôi không chỉ quản lý, chúng tôi xây dựng sự hiện diện số bền vững cho bạn.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3 transition-all">
                  Tìm hiểu thêm <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-base font-bold text-blue-600 uppercase tracking-widest mb-4">Dự án tiêu biểu</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">Những kết quả thực tế chúng tôi đã đạt được</h3>
            </div>
            <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Xem tất cả dự án <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-[2.5rem] overflow-hidden shadow-xl"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="text-blue-400 text-sm font-bold mb-2">{project.category}</div>
                  <h4 className="text-white text-2xl font-bold mb-2">{project.title}</h4>
                  <div className="text-green-400 font-black text-xl">{project.result}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/expert/800/800" 
                  alt="Expert Profile"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl shadow-2xl max-w-[240px]">
                <div className="text-4xl font-black text-blue-600 mb-1">05+</div>
                <div className="text-sm font-bold text-slate-900 uppercase tracking-wider">Năm kinh nghiệm</div>
                <p className="text-xs text-slate-500 mt-2">Đã thực hiện hàng ngàn dự án lớn nhỏ trên toàn quốc.</p>
              </div>
            </div>

            <div>
              <h2 className="text-base font-bold text-blue-600 uppercase tracking-widest mb-4">Về tôi</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">Người đứng sau những chiến dịch thành công</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Tôi là một chuyên gia về Social Media Marketing với hơn 5 năm kinh nghiệm. Tôi đã giúp hàng trăm cá nhân và doanh nghiệp tối ưu hóa sự hiện diện của họ trên mạng xã hội, từ việc xây dựng nội dung đến bảo mật tài khoản.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Chiến lược tăng trưởng đột phá",
                  "Hỗ trợ kỹ thuật 24/7",
                  "Bảo mật tài khoản tuyệt đối",
                  "Cam kết hiệu quả bằng con số"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                Xem hồ sơ năng lực
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-base font-bold text-blue-600 uppercase tracking-widest mb-4">Bảng giá</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Lựa chọn gói dịch vụ phù hợp</h3>
            <p className="text-lg text-slate-600">Chúng tôi cung cấp các gói linh hoạt để đáp ứng mọi nhu cầu từ cá nhân đến doanh nghiệp lớn.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-10 rounded-[3rem] border ${plan.recommended ? "border-blue-600 shadow-2xl shadow-blue-100" : "border-slate-100 bg-slate-50"}`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Phổ biến nhất
                  </div>
                )}
                <div className="text-xl font-bold text-slate-900 mb-2">{plan.name}</div>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                  {plan.price !== "Liên hệ" && <span className="text-slate-500 font-medium">VNĐ/tháng</span>}
                </div>
                <div className="space-y-4 mb-10">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-600 font-medium">{f}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.recommended ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200" : "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50"}`}>
                  Chọn gói này
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-blue-400 font-bold uppercase tracking-widest mb-4">Đánh giá</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold">Khách hàng nói gì về chúng tôi</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={t.avatar} 
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
                <p className="text-slate-300 italic leading-relaxed">"{t.content}"</p>
                <div className="flex gap-1 mt-6 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Zap key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-base font-bold text-blue-600 uppercase tracking-widest mb-4">Hỏi đáp</h2>
            <h3 className="text-4xl font-extrabold text-slate-900">Câu hỏi thường gặp</h3>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                  {faq.q}
                </h4>
                <p className="text-slate-600 leading-relaxed pl-9">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -z-10 skew-x-12" />
            
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-base font-bold text-blue-600 uppercase tracking-widest mb-4">Liên hệ</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">Sẵn sàng để bắt đầu?</h3>
                <p className="text-lg text-slate-600 mb-12">
                  Đừng ngần ngại liên hệ với tôi để nhận được sự tư vấn tốt nhất cho chiến dịch của bạn.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-medium">Email cho tôi</div>
                      <div className="text-xl font-bold text-slate-900">contact@smmsupport.vn</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-medium">Hotline / Zalo</div>
                      <div className="text-xl font-bold text-slate-900">090 123 4567</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-medium">Mạng xã hội</div>
                      <div className="flex gap-4 mt-1">
                        <Facebook className="w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors" />
                        <Instagram className="w-5 h-5 text-slate-400 hover:text-pink-600 cursor-pointer transition-colors" />
                        <Twitter className="w-5 h-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                {formStatus === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">Gửi thành công!</h4>
                    <p className="text-slate-600 mb-8">Cảm ơn bạn đã quan tâm. Chúng tôi sẽ liên hệ lại trong vòng 24 giờ.</p>
                    <button 
                      onClick={() => setFormStatus("idle")}
                      className="text-blue-600 font-bold hover:underline"
                    >
                      Gửi tin nhắn khác
                    </button>
                  </motion.div>
                ) : (
                  <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Họ và tên</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Nguyễn Văn A"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Số điện thoại</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="090..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Dịch vụ quan tâm</label>
                      <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all">
                        <option>Quản lý Tài khoản</option>
                        <option>Bảo mật & Hỗ trợ</option>
                        <option>Tăng trưởng Tương tác</option>
                        <option>Phân tích & Báo cáo</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Lời nhắn</label>
                      <textarea 
                        required
                        rows={4}
                        placeholder="Tôi muốn tư vấn về..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                      />
                    </div>
                    <button 
                      disabled={formStatus === "submitting"}
                      className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Đang gửi...
                        </>
                      ) : "Gửi yêu cầu ngay"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <span className="gradient-text">SMM Support</span>
          </div>
          
          <div className="text-sm text-slate-500">
            © 2026 SMM Support Portfolio. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Điều khoản</a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Bảo mật</a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
