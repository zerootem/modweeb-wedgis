import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// صفحة تسجيل الدخول
function Login() {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `<!-- الصق هنا محتوى ملف "<script src=https://cdn.tailwindcss.com></script>
<style>
  .logo-icon{width:40px;height:40px;border-radius:50%}.card{background:#fff;border-radius:20px;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);border:1px solid #e5e7eb;width:320px;padding:0;margin:0 auto}.button{display:inline-flex;align-items:center;justify-content:center;border-radius:6px;font-size:12px;font-weight:500;transition:all .2s;cursor:pointer;text-decoration:none;border:none;padding:8px 16px}.button-outline{background:0 0;border:1px solid #d1d5db;color:#374151}.button-outline:hover{background:#f9fafb}.button-black{background:#000;color:#fff}.button-black:hover{background:#262626}.link{color:#6b7280;text-decoration:underline;text-underline-offset:4px}.link:hover{color:#111827}.login-fullpage{position:fixed;inset:0;background:#fff;z-index:9999;display:flex;align-items:center;justify-content:center;min-height:100vh;height:100vh;overflow:hidden}.login-container{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:0}.max-w-md{max-width:340px!important}.card{width:100%;max-width:360px}.toast{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#dc2626;color:#fff;padding:10px 20px;border-radius:8px;font-size:14px;opacity:0;transition:opacity .3s ease-in-out;z-index:1000000}.toast.active{opacity:1}.btn-small{padding:4px 9px;font-size:11px}@media (max-width:360px){.card{max-width:95vw}}body,html{overflow:hidden!important}.card,.card *{margin:0!important}.btn-small{padding:6px 10px;font-size:12px;border-radius:15px}</style>


<div class=login-fullpage>
<div class="login-container w-full">
<div class="mx-auto w-full max-w-md space-y-5 text-center">
<div class="flex items-center justify-center gap-2 text-sm font-semibold text-neutral-700 -mt-4 mb-2">
<svg viewBox="0 0 514 514" class=logo-icon>
<path class=part1 fill=rgba(225,20,98,0.9) d="M195 167.9c-3.4 1.7-8 7.3-28 33.2l-8.8 11.5 14 18.2 14 18.2 3.8-3.4c6.6-6 14.2-7 21.3-2.8 2.5 1.5 19 22.2 68 85.9 6.5 8.4 13 16 14.5 17.1 6.5 4.5 15.5 5.5 20.2 2.2 2.7-1.9 43-53 43-54.5a301 301 0 0 0-24.2-30.3c-.5.2-5.5 6.4-11.1 13.7-9.5 12.4-13 16.2-14 15L273 247c-58.8-76.2-59.3-76.8-63.1-79a15.7 15.7 0 0 0-15-.1"/>
<path class=part2 fill=rgba(111,202,220,0.9) d="M104 180.4c-2 1.3-4.8 4.6-6.3 7.4-5.7 10.6-4.6 20.3 3.7 31C182 322.5 204.4 351 206.1 352c7 3.7 12.7 2.8 18-2.8a948 948 0 0 0 29.2-37c.6-.8-3-6-11.3-16.8L230 280l-4.5 3.2c-8.6 6.1-19.4 4.8-27-3.4-1.7-1.8-19.4-24.3-39.3-50a1327.4 1327.4 0 0 0-39.2-49.2c-4.1-3.5-11-3.6-16-.2"/>
<path class=part3 fill=rgba(61,184,143,0.9) d="M312 173.6c-2 1.2-35.7 43.5-42.7 53.4-1 1.5.4 3.8 10.3 16.6l12.4 15.7a87 87 0 0 0 13-15c6.7-8.7 12.8-15.8 13.5-15.8 1.3 0 39 47.6 44.2 56a950 950 0 0 0 35.7 45.4c3 2.4 10.8 2.6 15.2.3 10-5.1 16.2-17.1 13.4-25.6-.6-1.9-9.5-14.3-19.8-27.5L362.5 220a1046 1046 0 0 1-29-38.4c-4.1-6.6-8.5-9.5-14.4-9.5-2.5 0-5.7.8-7.1 1.6"/>
<path class=part4 fill=rgba(233,169,32,0.9) d="M106.8 282.6c-24.2 31.2-24.8 32-26.3 36.4a26.2 26.2 0 0 0 4.1 24.5c4.7 6.2 12 8.2 18.3 5a830 830 0 0 0 43.3-54c.6-1.1-21.2-30.7-23.2-31.4a191 191 0 0 0-16.2 19.5m298.8-118c-3 .8-8.8 4.8-12.2 8.4a446.8 446.8 0 0 0-26.1 38c-.3 1.1 4 7.6 11.4 17.3 11 14.7 11.9 15.5 13.3 13.7l14-20a4025 4025 0 0 1 16.2-23.3c8.5-12 7-28.6-2.9-33.3a26 26 0 0 0-13.7-.8"/>
</svg>
Modweeb Design
</div>
<div class="card mx-auto">
<div class="space-y-0.2 text-center p-4 pb-0">
<b class="text-lg font-bold text-neutral-900 mb-1">مرحباً بعودتك</b>
<p class="text-neutral-500 text-xs">تسجيل الدخول باستخدام حسابك الاجتماعي</p>
</div>
<div class="p-4 pt-2">
<div class="grid gap-4">
<button id=custom-google-btn class="button button-outline w-full" style=border-radius:15px>
<svg class="w-4 h-4 ml-2" xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill=#4285F4 />
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill=#34A853 />
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill=#FBBC05 />
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill=#EA4335 />
</svg>
تسجيل الدخول باستخدام Google
</button>
<div class="flex gap-2">
<a href=https://t.me/modweeb target=_blank rel="noopener noreferrer" class="button button-black flex-1 btn-small"><svg xmlns=http://www.w3.org/2000/svg width=18 height=18 viewBox="0 0 24 24" fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round class="ml-1 h-4 w-4 lucide lucide-send">
<path d="M22 2L11 13"/>
<path d="M22 2l-7 20-4-9-9-4 20-7z"/>
</svg>تيليجرام</a>
<a href=https://www.blogger.com/followers/follow/2986788159829882847 target=_blank rel="noopener noreferrer" class="button button-black flex-1 btn-small"><svg xmlns=http://www.w3.org/2000/svg width=18 height=18 viewBox="0 0 24 24" fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round class="ml-1 h-4 w-4 lucide lucide-rss">
<path d="M4 11a9 9 0 0 1 9 9"/>
<path d="M4 4a16 16 0 0 1 16 16"/>
<circle cx=5 cy=19 r=1 />
</svg>تابع المدونة</a>
</div>
</div>
</div>
</div>
<p class="px-6 text-center text-xs text-neutral-500 mt-2">
بالنقر على متابعة، فإنك توافق على
<a href=/p/terms.html class=link>شروط الخدمة</a>
و
<a href=/p/privacy-policy.html class=link>سياسة الخصوصية</a>.
</p>
</div>
</div>
</div>
<div id=toastMessage class=toast></div>
<script src="https://accounts.google.com/gsi/client" async defer onload="initGSI()"></script>

<script>function notify(e){if(window.opener&&window.opener.PU&&"function"==typeof window.opener.PU.tNtf)window.opener.PU.tNtf(e);else{const o=document.getElementById("toastMessage");o&&(o.innerText=e,o.classList.add("active"),setTimeout((()=>{o.classList.remove("active")}),3e3))}}async function getUserInfo(e){try{notify("جارٍ تسجيل الدخول، يرجى الانتظار...");const o=await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:"Bearer "+e}});if(!o.ok)throw new Error("Failed to fetch user info");const t=await o.json(),n={type:"loginSuccess",user:{name:t.name,email:t.email,image:t.picture}};if(window.opener){const e=window.location.origin.includes("blogspot")?"https://modweeb.com":window.location.origin;window.opener.postMessage(n,e),notify("تم تسجيل الدخول بنجاح!"),setTimeout((()=>window.close()),1e3)}else{localStorage.setItem("userLoggedIn","true"),localStorage.setItem("userName",t.name),localStorage.setItem("userEmail",t.email),localStorage.setItem("userPicture",t.picture),localStorage.getItem("userJoinDate")||localStorage.setItem("userJoinDate",// التنسيق: Oct 30, 2025
(new Date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}
));const e=new URLSearchParams(window.location.search).get("cbu")||"/";notify("تم تسجيل الدخول بنجاح!"),setTimeout((()=>window.location.href=e),1e3)}}catch(e){console.error("Error fetching user info:",e),notify("فشل تسجيل الدخول. يرجى المحاولة مرة أخرى.")}}// ... (دالة notify و دالة getUserInfo هنا)

let client;
// هذه هي الدالة الجديدة التي ستحل محل window.onload
function initGSI(){
  // تم نقل كل المنطق الذي كان داخل window.onload إلى هنا
  "undefined"!=typeof google&&void 0!==google.accounts?(client=google.accounts.oauth2.initTokenClient({client_id:"36053852280-iqmfrcu1m2vd8ai6sc4e10r6afaiiln0.apps.googleusercontent.com",scope:"openid profile email",callback:e=>{e&&e.access_token?getUserInfo(e.access_token):notify("لم يتم العثور على رمز الوصول. يرجى المحاولة مرة أخرى.")}}),document.getElementById("custom-google-btn").addEventListener("click",(function(){client.requestAccessToken()}))):notify("فشل تحميل مكتبة جوجل للمصادقة. يرجى التحقق من اتصالك بالإنترنت.")
}
// تم حذف window.onload بالكامل
</script>" كاملاً -->`
    }} />
  )
}

// صفحة إدارة الحساب
function Account() {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `<!-- الصق هنا محتوى ملف "<script src=https://cdn.tailwindcss.com></script>
<style>.logo-icon{width:40px;height:40px;border-radius:50%}.card{background:#fff;border-radius:20px;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);border:1px solid #e5e7eb;width:340px;padding:0;margin:0 auto}.button{display:inline-flex;align-items:center;justify-content:center;border-radius:6px;font-size:11px;font-weight:500;transition:all .2s;cursor:pointer;text-decoration:none;border:none;padding:4px 9px 4px 9px;gap:4px}.button svg{width:17px;height:17px;margin-left:5px;margin-right:0;vertical-align:middle}.button-black{background:#000;color:#fff}.button-black:hover{background:#262626}.button-outline{background:0 0;border:1px solid #d1d5db;color:#374151}.button-outline:hover{background:#f9fafb}.link{color:#6b7280;text-decoration:underline}.link:hover{color:#111827}.login-fullpage{position:fixed;inset:0;background:#fff;z-index:9999;display:flex;align-items:center;justify-content:center;min-height:100vh;height:100vh;overflow:hidden}.card-content{padding:17px 17px 13px 17px!important}.profile-row{display:flex;align-items:center;gap:10px;margin-bottom:12px;margin-top:4px}.avatar-preview{width:48px;height:48px;border-radius:50%;object-fit:cover;border:2px solid #e5e7eb;flex-shrink:0;box-shadow: 0 1px 3px rgba(0,0,0,.08)}.profile-names{display:flex;flex-direction:column;align-items:flex-start;gap:2px;margin-top:2px}.profile-name{font-size:15px;font-weight:700;color:#222;margin-bottom:2px;margin-top:2px;line-height:1.2}.profile-date{color:#888;font-size:11px;margin-bottom:1px}
/* التعديلات الجديدة للتنسيق */
.header-and-settings-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}
.settings-btn{background:0 0;border:1px solid transparent;color:#888;font-size:17px;cursor:pointer;padding:3px 6px;border-radius:6px;transition:background .15s;margin:0;display:flex;align-items:center;gap:3px;}.settings-btn:hover{background:#f3f4f6;color:#222;border:1px solid #e5e7eb;}
.settings-btn-text {
    font-size: 10px; /* تصغير حجم الخط */
    font-weight: 400; /* تقليل سمك الخط */
    color: #6b7280;
    margin-left: 0 !important;
}
.settings-btn svg {
    width: 15px; /* تصغير حجم الأيقونة قليلاً */
    height: 15px;
}
/* نهاية التعديلات الجديدة للتنسيق */
.settings-panel{display:none;background:#f8fafc;border-radius:12px;margin-top:6px;padding:10px 10px 2px 10px;text-align:right;border:1px solid #e5e7eb}.settings-panel.active{display:block;animation:fadeIn .25s}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.input{border:1px solid #d1d5db;border-radius:6px;padding:5px 8px;font-size:13px;width:100%;margin-top:3px;margin-bottom:7px}.modal-bg{background:rgba(0,0,0,.3);position:fixed;inset:0;z-index:999999;display:flex;align-items:center;justify-content:center}.modal-content{background:#fff;border-radius:16px;box-shadow:0 2px 16px rgba(0,0,0,.09);padding:20px 14px 14px 14px;min-width:260px;max-width:95vw}.toast{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#333;color:#fff;padding:10px 20px;border-radius:8px;font-size:14px;opacity:0;transition:opacity .3s ease-in-out;z-index:1000000}.toast.active{opacity:1}.text-xs{font-size:12px}.text-sm{font-size:13px}.text-base{font-size:15px}.profile-details-grid {
    display: grid;
    grid-template-columns: 1fr; 
    gap: 5px;
    width: 100%;
    align-items: start;
    margin-top: 5px;
}
.profile-info-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    line-height: 1.2;
}
.profile-info-label {
    font-size: 11px;
    color: #6b7280;
    font-weight: 400;
    flex-shrink: 0;
}
.profile-info-value {
    font-size: 12px;
    font-weight: 600;
    color: #1f2937;
    text-align: right;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
@media (max-width:400px){.card{max-width:97vw}.card-content{padding:8px 3vw 7px 3vw!important}}body,html{overflow:hidden!important}</style>

<div class=login-fullpage>
<div class="mx-auto w-full max-w-md space-y-5 text-center -mt-16">
<div class="flex items-center justify-center gap-2 text-sm font-extrabold text-neutral-700 -mt-4 mb-1">
<svg viewBox="0 0 514 514" class=logo-icon>
<path class=part1 fill=rgba(225,20,98,0.9) d="M195 167.9c-3.4 1.7-8 7.3-28 33.2l-8.8 11.5 14 18.2 14 18.2 3.8-3.4c6.6-6 14.2-7 21.3-2.8 2.5 1.5 19 22.2 68 85.9 6.5 8.4 13 16 14.5 17.1 6.5 4.5 15.5 5.5 20.2 2.2 2.7-1.9 43-53 43-54.5a301 301 0 0 0-24.2-30.3c-.5.2-5.5 6.4-11.1 13.7-9.5 12.4-13 16.2-14 15L273 247c-58.8-76.2-59.3-76.8-63.1-79a15.7 15.7 0 0 0-15-.1"/>
<path class=part2 fill=rgba(111,202,220,0.9) d="M104 180.4c-2 1.3-4.8 4.6-6.3 7.4-5.7 10.6-4.6 20.3 3.7 31C182 322.5 204.4 351 206.1 352c7 3.7 12.7 2.8 18-2.8a948 948 0 0 0 29.2-37c.6-.8-3-6-11.3-16.8L230 280l-4.5 3.2c-8.6 6.1-19.4 4.8-27-3.4-1.7-1.8-19.4-24.3-39.3-50a1327.4 1327.4 0 0 0-39.2-49.2c-4.1-3.5-11-3.6-16-.2"/>
<path class=part3 fill=rgba(61,184,143,0.9) d="M312 173.6c-2 1.2-35.7 43.5-42.7 53.4-1 1.5.4 3.8 10.3 16.6l12.4 15.7a87 87 0 0 0 13-15c6.7-8.7 12.8-15.8 13.5-15.8 1.3 0 39 47.6 44.2 56a950 950 0 0 0 35.7 45.4c3 2.4 10.8 2.6 15.2.3 10-5.1 16.2-17.1 13.4-25.6-.6-1.9-9.5-14.3-19.8-27.5L362.5 220a1046 1046 0 0 1-29-38.4c-4.1-6.6-8.5-9.5-14.4-9.5-2.5 0-5.7.8-7.1 1.6"/>
<path class=part4 fill=rgba(233,169,32,0.9) d="M106.8 282.6c-24.2 31.2-24.8 32-26.3 36.4a26.2 26.2 0 0 0 4.1 24.5c4.7 6.2 12 8.2 18.3 5a830 830 0 0 0 43.3-54c.6-1.1-21.2-30.7-23.2-31.4a191 191 0 0 0-16.2 19.5m298.8-118c-3 .8-8.8 4.8-12.2 8.4a446.8 446.8 0 0 0-26.1 38c-.3 1.1 4 7.6 11.4 17.3 11 14.7 11.9 15.5 13.3 13.7l14-20a4025 4025 0 0 1 16.2-23.3c8.5-12 7-28.6-2.9-33.3a26 26 0 0 0-13.7-.8"/>
</svg>
<b class="font-extrabold">Modweeb Design</b>
</div>
<div class="card w-full max-w-sm mx-auto">
<div class=card-content id=accountInfo></div>
<div class="px-4 py-3 flex gap-2 justify-between items-center border-t border-gray-200" id=accountButtons>
<a href=/ class="button button-outline flex-1">
<svg class=line viewBox="0 0 24 24"><path d="M12 18V15"></path><path d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z"></path></svg>
الرئيسية
</a>
<button id=logoutBtn class="button button-black flex-1">
<svg class=line viewBox="0 0 24 24"><path d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54"></path><path d="M15 12H3.62"></path><path d="M5.85 8.6499L2.5 11.9999L5.85 15.3499"></path></svg>
خروج
</button>
</div>
</div>
</div>
<div id=logoutModal class=modal-bg style=display:none>
<div class="modal-content text-center">
<b class="font-bold mb-2 text-base">تأكيد تسجيل الخروج</b>
<p class="text-neutral-600 mb-4 text-sm">هل أنت متأكد أنك تريد تسجيل الخروج؟</p>
<div class="flex gap-2 justify-center">
<a href=/ class="button button-outline flex-1">
<svg class=line viewBox="0 0 24 24"><path d="M12 18V15"></path><path d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z"></path></svg>
الرئيسية
</a>
<button id=cancelLogout class="button button-outline flex-1">إلغاء</button>
<button id=confirmLogout class="button button-black flex-1">تأكيد</button>
</div>
</div>
</div>
<div id=toastMessage class=toast></div>
</div>
<script src=https://accounts.google.com/gsi/client async defer></script>
<script>function notify(t){if(window.PU&&"function"==typeof PU.tNtf)PU.tNtf(t);else{const e=document.getElementById("toastMessage");e&&(e.innerText=t,e.classList.add("active"),setTimeout((()=>{e.classList.remove("active")}),3e3))}}function getUserData(){return{isLoggedIn:"true"===localStorage.getItem("userLoggedIn"),name:localStorage.getItem("userName"),picture:localStorage.getItem("userPicture"),email:localStorage.getItem("userEmail"),joinDate:localStorage.getItem("userJoinDate")}}function clearUserData(){localStorage.removeItem("userLoggedIn"),localStorage.removeItem("userName"),localStorage.removeItem("userEmail"),localStorage.removeItem("userPicture"),localStorage.removeItem("userJoinDate")}function updateAccountInfo(){const t=document.getElementById("accountInfo"),e=document.getElementById("accountButtons");if(!t||!e)return;const{isLoggedIn:n,name:o,picture:a,email:i,joinDate:l}=getUserData();n&&o?(t.innerHTML=`\n                <div class="header-and-settings-row">\n                    <h2 class="text-sm font-bold text-neutral-500 text-right">إدارة الحساب</h2>\n                    <button class="settings-btn" id="showSettingsBtn" title="الإعدادات">\n                      <span class="settings-btn-text">الإعدادات</span>\n                      <svg class='line' viewBox='0 0 24 24'><path d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z' stroke-miterlimit='10'></path><path d='M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z' stroke-miterlimit='10'></path></svg>\n                    </button>\n                </div>\n                <div class="profile-row">\n                    <img id="avatarImg" src="${a||"https://ui-avatars.com/api/?name="+encodeURIComponent(o)+"&background=0D8ABC&color=fff"}" alt="${o}" class="avatar-preview" onerror="this.onerror=null;this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(o)}&background=0D8ABC&color=fff';">\n                    <div class="flex flex-col flex-1 mt-1 gap-1">\n                        \n                        \n                        <div class="profile-details-grid">\n                            <div class="flex flex-col gap-2">\n                                \n                                <div class="profile-info-item">\n                                    <span class="profile-info-label">اسم المستخدم:</span>\n                                    <span class="profile-info-value" id="profileName">${o}</span>\n                                </div>\n                                \n                                <div class="profile-info-item">\n                                    <span class="profile-info-label">البريد الإلكتروني:</span>\n                                    <span class="profile-info-value">${i||"غير متوفر"}</span>\n                                </div>\n                                \n                                <div class="profile-info-item">\n                                    <span class="profile-info-label">تاريخ الانضمام:</span>\n                                    <span class="profile-info-value">${l||"غير محدد"}</span>\n                                </div>\n                            </div>\n                        </div>\n                        \n                    </div>\n                </div>\n                <div class="settings-panel" id="settingsPanel">\n                    <form id="editProfileForm">\n                        \n                        <label class="text-xs text-neutral-500">الاسم:\n                            <input type="text" id="editName" class="input text-neutral-500" value="${o}" maxlength="32" required>\n                        </label>\n                        \n                        \n                        <div class="border-t border-gray-200 mt-2 mb-3"></div>\n\n                        \n                        <div class="text-xs text-neutral-600 mb-1">تغيير الصورة:</div>\n                        \n                        \n                        <label class="text-xs text-neutral-500 block mb-1">\n                          (إما برفع صورة من جهازك)\n                          <input type="file" id="editPic" accept="image/*" class="input" style="padding:0;">\n                        </label>\n\n                        \n                        <div class="border-t border-gray-200 my-3"></div>\n\n                        \n                        <label class="text-xs text-neutral-500 block">\n                          (أو بإضافة رابط مباشر للصورة)\n                          <input type="url" id="editPicUrl" class="input placeholder-neutral-500" placeholder="https://example.com/avatar.jpg">\n                        </label>\n                        \n                        <button type="submit" class="button button-black w-full mt-4">حفظ التعديلات</button>\n                    </form>\n                </div>\n            `,setupEditProfileListeners(),e.style.display="flex"):
 (t.innerHTML='\n                <p class="text-neutral-500 text-sm">لم يتم تسجيل الدخول.</p>\n                <a href="/p/login.html?cbu=/p/account.html" class="button button-black mt-4">تسجيل الدخول</a>\n            ',e.style.display="none")}function setupEditProfileListeners(){const t=document.getElementById("showSettingsBtn"),e=document.getElementById("settingsPanel"),n=document.getElementById("editProfileForm"),o=document.getElementById("editPic"),a=document.getElementById("editPicUrl");t&&(t.onclick=function(){e.classList.toggle("active")}),document.addEventListener("click",(n=>{e&&t&&!e.contains(n.target)&&!t.contains(n.target)&&e.classList.remove("active")})),o&&o.addEventListener("change",(t=>{const e=t.target.files[0];if(e){const t=new FileReader;t.onload=function(t){document.getElementById("avatarImg").src=t.target.result,a&&(a.value="")},t.readAsDataURL(e)}})),a&&a.addEventListener("input",(t=>{document.getElementById("avatarImg").src=t.target.value,o&&(o.value="")})),n&&n.addEventListener("submit",(t=>{t.preventDefault();const n=document.getElementById("editName").value.trim();let l=a?a.value.trim():"";const s=o?o.files[0]:null;if(s){const t=new FileReader;t.onload=function(t){localStorage.setItem("userPicture",t.target.result),localStorage.setItem("userName",n),updateAccountInfo(),notify("تم حفظ التعديلات بنجاح!"),e&&e.classList.remove("active")},t.readAsDataURL(s)}else l&&localStorage.setItem("userPicture",l),localStorage.setItem("userName",n),updateAccountInfo(),notify("تم حفظ التعديلات بنجاح!"),e&&e.classList.remove("active")}))}function handleLogout(){notify("جارٍ تسجيل الخروج، يرجى الانتظار..."),"undefined"!=typeof google&&void 0!==google.accounts&&google.accounts.id.disableAutoSelect(),clearUserData(),setTimeout((()=>{notify("تم تسجيل الخروج بنجاح!"),window.location.href="/p/login.html"}),1e3)}function showLogoutModal(){const t=document.getElementById("logoutModal");t&&(t.style.display="flex")}function hideLogoutModal(){const t=document.getElementById("logoutModal");t&&(t.style.display="none")}document.addEventListener("DOMContentLoaded",(()=>{updateAccountInfo();const t=document.getElementById("logoutBtn"),e=document.getElementById("cancelLogout"),n=document.getElementById("confirmLogout");t&&(t.onclick=showLogoutModal),e&&(e.onclick=hideLogoutModal),n&&(n.onclick=handleLogout)})),window.addEventListener("storage",updateAccountInfo)</script>
" كاملاً -->`
    }} />
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
