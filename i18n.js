const T = {
  en: {
    brand: 'DateCalc 📅',
    home: 'Home', between: 'Days Between', add: 'Add/Sub Days', age: 'Age Calc', weekday: 'Weekday',
    hero_title: 'Date & Time Calculators',
    hero_desc: 'Free online tools to calculate days between dates, add or subtract days, find your exact age, and more.',
    tool1_t: 'Days Between Dates', tool1_d: 'Calculate the exact number of days between any two dates.',
    tool2_t: 'Add / Subtract Days', tool2_d: 'Find a future or past date by adding or subtracting days.',
    tool3_t: 'Age Calculator', tool3_d: 'Know your precise age in years, months, days & hours.',
    tool4_t: 'Day of Week', tool4_d: 'Find what day of the week any date falls on + history.',
    start_date: 'Start Date', end_date: 'End Date', calc: 'Calculate',
    result_days: '{n} days', result_detail: 'That\'s {w} weeks and {d} days, or about {m} months.',
    base_date: 'Base Date', days_to_add: 'Days to Add/Subtract', add_sub: 'Add / Subtract',
    result_date: 'Result: {d}',
    birthday: 'Your Birthday', calc_age: 'Calculate Age',
    age_result: '{y} years, {m} months, {d} days',
    age_detail: 'That\'s {td} total days · ~{h} hours · Next birthday in {nb} days!',
    pick_date: 'Pick a Date', find_weekday: 'Find Weekday',
    weekday_result: '{d} is a {w}',
    on_this_day: 'On This Day in History',
    footer: '© 2026 DateCalc — Free date calculators',
    donate_label: 'Buy me a coffee ☕',
    lang_btn: '中文',
  },
  zh: {
    brand: 'DateCalc 📅',
    home: '首页', between: '日期间隔', add: '日期加减', age: '年龄计算', weekday: '星期查询',
    hero_title: '日期时间计算器',
    hero_desc: '免费在线工具：计算两个日期之间的天数、日期加减、精确年龄、星期几查询等。',
    tool1_t: '日期间隔计算', tool1_d: '计算任意两个日期之间的精确天数。',
    tool2_t: '日期加减', tool2_d: '在某个日期上加减天数，得到目标日期。',
    tool3_t: '年龄计算器', tool3_d: '精确到年、月、日、小时的年龄计算。',
    tool4_t: '星期几查询', tool4_d: '查询任意日期是星期几，以及历史上的今天。',
    start_date: '开始日期', end_date: '结束日期', calc: '计算',
    result_days: '{n} 天', result_detail: '即 {w} 周零 {d} 天，约 {m} 个月。',
    base_date: '基准日期', days_to_add: '加/减天数', add_sub: '加减计算',
    result_date: '结果日期：{d}',
    birthday: '你的生日', calc_age: '计算年龄',
    age_result: '{y} 年 {m} 个月 {d} 天',
    age_detail: '共 {td} 天 · 约 {h} 小时 · 距下次生日还有 {nb} 天！',
    pick_date: '选择日期', find_weekday: '查询星期几',
    weekday_result: '{d} 是 {w}',
    on_this_day: '历史上的今天',
    footer: '© 2026 DateCalc — 免费日期计算器',
    donate_label: '请我喝杯咖啡 ☕',
    lang_btn: 'EN',
  }
};

let lang = localStorage.getItem('dc_lang') || (navigator.language.startsWith('zh') ? 'zh' : 'en');

function t(key) { return T[lang][key] || T['en'][key] || key; }

function toggleLang() {
  lang = lang === 'en' ? 'zh' : 'en';
  localStorage.setItem('dc_lang', lang);
  applyI18n();
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  const lb = document.getElementById('langBtn');
  if (lb) lb.textContent = t('lang_btn');
}

document.addEventListener('DOMContentLoaded', applyI18n);

const WEEKDAYS_EN = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const WEEKDAYS_ZH = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
function weekdayName(d) { return lang==='zh' ? WEEKDAYS_ZH[d] : WEEKDAYS_EN[d]; }

function fmtDate(d) {
  return d.toLocaleDateString(lang==='zh'?'zh-CN':'en-US',{year:'numeric',month:'long',day:'numeric'});
}
