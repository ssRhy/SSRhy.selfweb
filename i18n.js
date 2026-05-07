// Internationalization (i18n) Module
const translations = {
  en: {
    // Navigation
    'nav.brief-intro': 'Brief Intro',
    'nav.skills': 'Skills',
    'nav.experiences': 'Experiences',
    'nav.fun-facts': 'Fun Facts',

    // Index page
    'index.welcome': 'Welcome to SSR\'s Website',
    'index.explore': 'Explore',

    // First page
    'firstpage.title': 'About Me',
    'firstpage.intro': 'Hi, I am Horin, ssR.',
    'firstpage.description': 'I am a computer and electronic engineer, designer and maker.',
    'firstpage.love': 'I love using technology to create weird, wonderful, and mostly useful things.',
    'firstpage.me': 'Me',

    // About page
    'about.title': 'Technical Skills',
    'about.embedded': 'Embedded Development',
    'about.hardware': 'Hardware Platforms:',
    'about.languages': 'Languages & Toolchains:',
    'about.systems': 'Systems & Communication:',
    'about.ai': 'AI Algorithm Development',
    'about.deep-learning': 'Deep Learning Frameworks:',
    'about.lightweight': 'Lightweight Models:',
    'about.agent': 'Langchain Agent:',
    'about.web': 'Web / App Development',
    'about.visualization': '3D Visualization:',
    'about.mobile': 'Mobile Development:',
    'about.backend': 'Backend:',
    'about.other': 'Other Professional Skills',
    'about.hci': 'Human-Computer Interaction & Art:',
    'about.business': 'Business Acumen:',
    'about.agent-design': 'Agent architecture design',

    // Work page
    'work.title': 'Works & Achievements',
    'work.projects': 'Projects & Experiences',
    'work.hackathon': 'Hackathon & Competition',
    'work.social': 'Social Activities',

    // Work page - Project 1
    'work.project1.title': 'AI Hardware KickStarter Crowdfunding',
    'work.project1.desc': 'AI hardware going global. Participated in embedded development.',

    // Work page - Project 2 (Company)
    'work.project2.title': 'Shenzhen Jiayi Wuxing Technology Co., Ltd.',
    'work.project2.desc': 'Responsible for product frontend development and server deployment. Implemented user interactions and improved user experience. Designed and implemented a complete redemption code verification system, supporting batch generation, validity management, and exception handling. Completed server and database setup and deployment, optimized response time, and successfully launched the project for online operation.',

    // Work page - Project 3
    'work.project3.title': 'Hyper 3D Agent System',
    'work.project3.desc': 'Built an AI Native multimodal Agentic interactive 3D modeling system based on Langchain.',

    // Work page - Project 4 (Robot)
    'work.robot.title': 'Light Dance Robot',
    'work.robot.desc': 'The wheel-legged robot generates music and lights in real time according to your dance moves and dances with you.',

    // Awards
    'award.scalable-hci.title': 'Scalable HCI 2025 "AdventureX & MIT Midea Lab" Hackathon First Prize',
    'award.adventurez.title': 'AdventureX2025 Emotiv BCI Best Creativity Award and Multi-agent Runner-up.',
    'award.geek-camp.title': 'Shenzhen Institute of Innovation Geek Camp Hackathon',
    'award.pose.title': 'AI Health Posture Reminder System',
    'award.pose.desc': 'Led the development of an AI health posture reminder system based on edge computing, National Third Prize.',
    'award.robomaster.title': 'The 24th National College Student Robot Competition RoboMaster 2025 Mecha Master University League & RAICOM Robot Competition',
    'award.baidu.title': 'China Robotics and AI Competition Baidu Apollo Spark Autonomous Driving Competition',
    'award.shenicest.title': 'SheNicest Core Member',
    'award.shenicest.desc': 'Participated in the organization of Shenzhen Hardware Hackathon, including player recruitment, on-site execution, and business recruitment...',

    // Contact page
    'contact.title': 'Fun Facts',
    'contact.hobbies': 'Hobbies',
    'contact.hobbies-desc': 'Enjoys photography; playing chess; sometimes ponders philosophy; loves delicious food. Likes to participate in Hackathons, travel around, and meet all kinds of interesting people!',
    'contact.daily': 'Daily Life',
    'contact.daily-desc': 'I have a cat and a group of great friends. Used to be a football team goalkeeper #Tifosi. Not very good at expressing myself, but I like innovative, bold, and ambitious things. I make plans but also embrace spontaneity...',
    'contact.connect': 'Connect with SSR',
    'contact.follow': 'Follow me to learn more:',
    'contact.visit': 'Visit my ',
    'contact.blog': 'Blog →',

    // Hobby captions
    'hobby.photography': 'Photography',
    'hobby.travel': 'Travel',
    'hobby.explore': 'Explore',
    'hobby.moments': 'Moments',
    'hobby.cat': 'My Kitty',
    'hobby.friends': 'Friends',
    'hobby.tifosi': '#Tifosi',
    'hobby.tech': 'Tech Life',

    // Award pages
    'award.robot.title': 'Light Dance Robot',
    'award.robot.desc': 'The wheel-legged robot generates music and lights in real time according to your dance moves, dancing with you. Through edge computing and motion capture technology, it realizes emotional interaction between robot and human.',
    'award.shenzhen.title': 'Shenzhen Hackathon',
    'award.shenzhen.desc': 'Shenzhen Hackathon project achievements showcase.',
    'award.robomaster.detail.title': 'RoboMaster 2025',
    'award.robomaster.detail.desc': 'The 24th National College Student Robot Competition RoboMaster 2025 Mecha Master University League & RAICOM Robot Competition.',

    // Common
    'common.back': '← Back to Works',
    'common.open': 'Open ↗',
    'common.me': 'Me',
  },
  zh: {
    // Navigation
    'nav.brief-intro': '简介',
    'nav.skills': '技能',
    'nav.experiences': '经历',
    'nav.fun-facts': '趣事',

    // Index page
    'index.welcome': '欢迎来到 SSR 的网站',
    'index.explore': '探索',

    // First page
    'firstpage.title': '关于我',
    'firstpage.intro': '你好，我是韩蕴',
    'firstpage.description': '我是一名计算机与电子工程师、设计师和创客。',
    'firstpage.love': '我喜欢用科技创造奇特、有趣且有用的东西。',
    'firstpage.me': '我',

    // About page
    'about.title': '技术技能',
    'about.embedded': '嵌入式开发',
    'about.hardware': '硬件平台：',
    'about.languages': '语言与工具链：',
    'about.systems': '系统与通信：',
    'about.ai': 'AI 算法开发',
    'about.deep-learning': '深度学习框架：',
    'about.lightweight': '轻量级模型：',
    'about.agent': 'Langchain Agent：',
    'about.web': '网页 / 应用开发',
    'about.visualization': '3D 可视化：',
    'about.mobile': '移动开发：',
    'about.backend': '后端：',
    'about.other': '其他专业技能',
    'about.hci': '人机交互与艺术：',
    'about.business': '商业洞察：',
    'about.agent-design': 'Agent 架构设计',

    // Work page
    'work.title': '作品与成就',
    'work.projects': '项目与经验',
    'work.hackathon': '黑客松与竞赛',
    'work.social': '社会活动',

    // Work page - Project 1
    'work.project1.title': 'AI 硬件 KickStarter 众筹',
    'work.project1.desc': 'AI 硬件众筹。参与嵌入式开发。',

    // Work page - Project 2 (Company)
    'work.project2.title': '深圳甲乙无形科技有限公司',
    'work.project2.desc': '负责产品前端开发和服务器部署。实现用户交互并提升用户体验。设计并实现了完整的兑换码验证系统，支持批量生成、有效期管理和异常处理。完成服务器和数据库的搭建与部署，优化响应时间，成功上线运营。',

    // Work page - Project 3
    'work.project3.title': 'Hyper 3D Agent 系统',
    'work.project3.desc': '基于 Langchain 构建的 AI 原生多模态 Agent 交互式 3D 建模系统。',

    // Work page - Project 4 (Robot)
    'work.robot.title': '光影舞蹈机器人',
    'work.robot.desc': '轮腿机器人根据你的舞步实时生成音乐和灯光，与你共舞。',

    // Awards
    'award.scalable-hci.title': 'Scalable HCI 2025 "AdventureX & MIT Midea Lab" 黑客松 一等奖',
    'award.adventurez.title': 'AdventureX2025 Emotiv BCI 最佳创意奖及多智能体亚军',
    'award.geek-camp.title': '深圳科创院极客训练营黑客松',
    'award.pose.title': 'AI 健康坐姿提醒系统',
    'award.pose.desc': '主导开发了基于边缘计算的 AI 健康坐姿提醒系统，荣获国家三等奖。',
    'award.robomaster.title': '第二十四届全国大学生机器人大赛 RoboMaster 2025 机甲大师高校联赛暨 RAICOM 机器人竞赛',
    'award.baidu.title': '中国机器人及人工智能大赛百度 Apollo Spark 自动驾驶竞赛',
    'award.shenicest.title': 'SheNicest 核心成员',
    'award.shenicest.desc': '参与组织举办深圳硬件黑客松，包括选手招募、现场执行...',

    // Contact page
    'contact.title': '趣味生活',
    'contact.hobbies': '爱好',
    'contact.hobbies-desc': '喜欢摄影、下棋、有时思考哲学、热爱美食。喜欢参加黑客松、四处旅行，认识各种有趣的人！',
    'contact.daily': '日常生活',
    'contact.daily-desc': '我有一只猫和一群好朋友。曾经当过足球队守门员 #Tifosi。不太擅长表达自己，但我喜欢创新、大胆、有野心的事情。我会做计划但也喜欢随性...',
    'contact.connect': '关注 SSR',
    'contact.follow': '关注我了解更多：',
    'contact.visit': '访问我的 ',
    'contact.blog': '博客 →',

    // Hobby captions
    'hobby.photography': '摄影',
    'hobby.travel': '旅行',
    'hobby.explore': '探索',
    'hobby.moments': '瞬间',
    'hobby.cat': '我的猫咪',
    'hobby.friends': '朋友们',
    'hobby.tifosi': '#Tifosi',
    'hobby.tech': '科技生活',

    // Award pages
    'award.robot.title': '光影舞蹈机器人',
    'award.robot.desc': '轮腿机器人根据你的舞步实时生成音乐和灯光，与你共舞。通过边缘计算和动作捕捉技术，实现机器人与人的情感交互。',
    'award.shenzhen.title': '深圳黑客松',
    'award.shenzhen.desc': '深圳黑客松项目成果展示。',
    'award.robomaster.detail.title': 'RoboMaster 2026',
    'award.robomaster.detail.desc': '第二十四届全国大学生机器人大赛 RoboMaster 2026 机甲大师高校联赛。',

    // Common
    'common.back': '← 返回作品',
    'common.open': '查看 ↗',
    'common.me': '我',
  }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'en';

// Initialize i18n
function initI18n() {
  currentLang = localStorage.getItem('lang') || 'en';
  document.documentElement.lang = currentLang;
  translatePage();
  updateLangButton();
}

// Get translation
function t(key) {
  return translations[currentLang][key] || key;
}

// Translate all elements with data-i18n attribute
function translatePage() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT' && el.placeholder !== undefined) {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });
}

// Toggle language
function toggleLang() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  localStorage.setItem('lang', currentLang);
  document.documentElement.lang = currentLang;
  translatePage();
  updateLangButton();
}

// Update language button text
function updateLangButton() {
  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.textContent = currentLang === 'en' ? '中文' : 'EN';
  }
}

// Run on page load
document.addEventListener('DOMContentLoaded', initI18n);
