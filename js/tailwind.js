<!DOCTYPE html>

<html class="dark" lang="en"><head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <script src="js/tailwind.js"></script>
    <link href="https://fonts.googleapis.com" rel="preconnect"/>
    <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
    <link href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,800;0,900;1,800;1,900&amp;family=Manrope:wght@400;500;700;800&amp;display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
    <style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .surface-transition {
            transition: background-color 0.3s ease;
        }
        .no-line-rule {
            border: none !important;
        }
        body {
            background-color: #0E0E0E;
            color: #FFFFFF;
            font-family: 'Manrope', sans-serif;
            overflow-x: hidden;
        }
    </style>
    <script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                  "surface-container-high": "#20201F",
                  "surface-container-lowest": "#000000",
                  "error-container": "#A70138",
                  "surface-variant": "#262626",
                  "surface-dim": "#0E0E0E",
                  "on-secondary": "#570017",
                  "surface": "#0E0E0E",
                  "surface-container-highest": "#262626",
                  "secondary-fixed-dim": "#FFAEB4",
                  "on-tertiary-fixed": "#2A0044",
                  "primary": "#FF8E7D",
                  "on-tertiary-fixed-variant": "#56197D",
                  "primary-fixed-dim": "#FF5B47",
                  "on-primary-container": "#4F0000",
                  "inverse-on-surface": "#565555",
                  "inverse-surface": "#FCF9F8",
                  "outline-variant": "#484847",
                  "tertiary-fixed": "#D697FF",
                  "secondary": "#FE7E8D",
                  "surface-bright": "#2C2C2C",
                  "on-tertiary": "#55187C",
                  "surface-tint": "#FF8E7D",
                  "surface-container": "#1A1A1A",
                  "inverse-primary": "#C20001",
                  "on-error-container": "#FFB2B9",
                  "primary-dim": "#EB0002",
                  "secondary-container": "#842133",
                  "on-surface": "#FFFFFF",
                  "primary-container": "#FF7764",
                  "on-secondary-fixed": "#6a0c22",
                  "tertiary-fixed-dim": "#C889F1",
                  "on-error": "#490013",
                  "tertiary": "#DDA6FF",
                  "on-primary": "#650000",
                  "error-dim": "#D73357",
                  "surface-container-low": "#131313",
                  "on-secondary-fixed-variant": "#912B3C",
                  "tertiary-dim": "#C587EE",
                  "on-surface-variant": "#ADAAAA",
                  "secondary-dim": "#F47785",
                  "error": "#FF6E84",
                  "secondary-fixed": "#FFC2C6",
                  "primary-fixed": "#FF7764",
                  "on-tertiary-container": "#4A0671",
                  "outline": "#767575",
                  "tertiary-container": "#D394FD",
                  "on-secondary-container": "#FFC0C5",
                  "background": "#0E0E0E",
                  "on-primary-fixed-variant": "#610000",
                  "on-primary-fixed": "#000000",
                  "on-background": "#FFFFFF"
              },
              "borderRadius": {
                  "DEFAULT": "1rem",
                  "lg": "2rem",
                  "xl": "3rem",
                  "full": "9999px"
              },
              "fontFamily": {
                  "headline": ["Epilogue"],
                  "display": ["Epilogue"],
                  "body": ["Manrope"],
                  "label": ["Manrope"]
              }
          },
      }
  }
</script>
</head>
<body class="bg-background text-on-background selection:bg-primary-dim selection:text-white">
<!-- TopNavBar Shell -->
<nav class="fixed top-0 w-full z-50 h-20 bg-neutral-950/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(235,0,2,0.08)] flex justify-between items-center px-6 md:px-12 no-line-rule surface-transition">
    <div class="flex items-center gap-12">
        <span class="font-['Epilogue'] italic font-black text-3xl tracking-tighter text-white">STEREO</span>
        <div class="hidden md:flex gap-8 font-['Manrope'] text-sm tracking-widest uppercase">
            <a class="text-white border-b-2 border-[#EB0002] hover:text-[#EB0002] transition-colors duration-300" href="#">Home</a>
            <a class="text-neutral-400 hover:text-[#EB0002] transition-colors duration-300" href="#">Explore</a>
            <a class="text-neutral-400 hover:text-[#EB0002] transition-colors duration-300" href="#">Channels</a>
            <a class="text-neutral-400 hover:text-[#EB0002] transition-colors duration-300" href="#">Library</a>
        </div>
    </div>
    <div class="flex items-center gap-6">
        <div class="hidden lg:flex items-center bg-surface-container-highest px-4 py-2 rounded-full gap-3">
            <span class="material-symbols-outlined text-neutral-400 text-lg">search</span>
            <input class="bg-transparent border-none focus:ring-0 text-sm w-48 text-white placeholder-neutral-500" placeholder="Search streams..." type="text"/>
        </div>
        <div class="flex items-center gap-4 text-white">
            <span class="material-symbols-outlined hover:text-[#EB0002] cursor-pointer">notifications</span>
            <span class="material-symbols-outlined hover:text-[#EB0002] cursor-pointer">account_circle</span>
        </div>
    </div>
</nav>
<!-- SideNavBar Shell (Desktop Only) -->
<aside class="hidden md:flex fixed left-0 top-0 h-screen w-20 z-40 bg-[#0E0E0E] flex-col items-center py-24 gap-8 bg-gradient-to-r from-[#1A1A1A] to-transparent flat no shadows">
    <div class="flex flex-col items-center gap-1 mb-12">
        <span class="font-['Epilogue'] italic font-black text-white text-xl">S.</span>
        <span class="font-['Manrope'] font-medium text-[8px] tracking-[0.2em] uppercase text-neutral-500">Premium</span>
    </div>
    <div class="flex flex-col gap-10">
        <a class="flex flex-col items-center gap-2 group text-[#EB0002] border-r-4 border-[#EB0002] pr-2 shadow-[0_0_20px_rgba(235,0,2,0.2)]" href="#">
            <span class="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform duration-200" style="font-variation-settings: 'FILL' 1;">home</span>
            <span class="font-['Manrope'] font-medium text-[10px] tracking-[0.2em] uppercase">Home</span>
        </a>
        <a class="flex flex-col items-center gap-2 group text-neutral-500 hover:text-white hover:scale-110 transition-all duration-200" href="#">
            <span class="material-symbols-outlined text-2xl">movie</span>
            <span class="font-['Manrope'] font-medium text-[10px] tracking-[0.2em] uppercase">Movies</span>
        </a>
        <a class="flex flex-col items-center gap-2 group text-neutral-500 hover:text-white hover:scale-110 transition-all duration-200" href="#">
            <span class="material-symbols-outlined text-2xl">tv</span>
            <span class="font-['Manrope'] font-medium text-[10px] tracking-[0.2em] uppercase">Series</span>
        </a>
        <a class="flex flex-col items-center gap-2 group text-neutral-500 hover:text-white hover:scale-110 transition-all duration-200" href="#">
            <span class="material-symbols-outlined text-2xl">bookmarks</span>
            <span class="font-['Manrope'] font-medium text-[10px] tracking-[0.2em] uppercase">List</span>
        </a>
    </div>
</aside>
<!-- Main Content Canvas -->
<main class="pt-24 md:pl-24 pr-6 md:pr-12 min-h-screen">
<!-- Hero Section -->
<section class="max-w-7xl mx-auto mb-16">
    <div class="flex flex-col lg:flex-row gap-8 items-end justify-between mb-8">
        <div class="space-y-2">
            <span class="text-neutral-500 font-label text-[10px] uppercase tracking-[0.2em]">Wednesday, Oct 24</span>
            <h1 class="font-display font-extrabold text-5xl md:text-6xl tracking-tight text-white italic">Good Evening.</h1>
        </div>
        <div class="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
            <button class="px-6 py-2 bg-[#EB0002] text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(235,0,2,0.4)] hover:scale-105 transition-transform">Trending</button>
            <button class="px-6 py-2 bg-surface-container-highest text-neutral-400 rounded-full text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">Tech</button>
            <button class="px-6 py-2 bg-surface-container-highest text-neutral-400 rounded-full text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">Education</button>
            <button class="px-6 py-2 bg-surface-container-highest text-neutral-400 rounded-full text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">Music</button>
            <button class="px-6 py-2 bg-surface-container-highest text-neutral-400 rounded-full text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">Gaming</button>
        </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[450px]">
<!-- Featured: Continue Watching -->
<div class="lg:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low cursor-pointer">
    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
    <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Cinematic still of a glowing holographic architect working on a complex digital structural grid in a dark void" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiFvvWZvdkmERQJxt3HnWZlKKFy08iYXYGKOWyR8xlApAg1k0AoMEFc0v8W_4ZP81AcF49459zs26zrPK77l0jiBkyLjEmNM90D7mU0NL_zv6XGWEnTlfj2B7Ev9Kd1W29gNlAOhCDSY0tQCUjDGUoVViEG-bJNuVs2Mmy0oIVw-mGBuFD9TrHD-6lPcI43yoJ6cOwiNTcnSovXW4Z-k9bHdOH9YNkNZCC6bM-p5fBgCiA3C4fwLTzOvl5b8zx4TrGTYhcgF6C_rY"/>
    <div class="absolute bottom-0 left-0 p-8 z-20 w-full">
        <span class="inline-block px-3 py-1 bg-[#EB0002] rounded-full text-[9px] font-black uppercase tracking-tighter mb-4">Resume Episode</span>
        <h2 class="font-display font-black text-4xl md:text-5xl italic text-white mb-2 leading-none uppercase">Architects of The Void</h2>
        <p class="text-neutral-400 text-sm max-w-lg mb-6">S1 : E4 • The Neural Geometry of Conscious Space</p>
        <div class="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div class="h-full bg-primary-dim w-[65%] shadow-[0_0_15px_#EB0002]"></div>
        </div>
        <div class="flex justify-between mt-2 text-[10px] uppercase font-bold text-neutral-500 tracking-widest">
            <span>42:15 Left</span>
            <span>65% Complete</span>
        </div>
    </div>
</div>
<!-- Bento Sidebar: Curated & Pro -->
<div class="lg:col-span-4 flex flex-col gap-6">
<!-- Analytics CTA -->
<div class="flex-1 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between relative overflow-hidden group">
    <div class="z-10">
        <h3 class="font-display font-bold text-2xl text-white mb-2 uppercase italic leading-tight">Curated For <br/> Your Mind.</h3>
        <p class="text-neutral-500 text-xs mb-6">Our algorithms have synthesized 12 new patterns based on your recent activity.</p>
    </div>
    <button class="z-10 w-fit px-8 py-3 bg-white/5 backdrop-blur-xl rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white hover:bg-[#EB0002] transition-colors duration-500 no-line-rule">Explore Analytics</button>
    <div class="absolute -right-12 -bottom-12 w-48 h-48 bg-[#EB0002]/10 blur-[80px] rounded-full group-hover:bg-[#EB0002]/20 transition-all duration-700"></div>
</div>
<!-- Pro Feature Card -->
<div class="bg-gradient-to-br from-[#EB0002] to-[#650000] rounded-xl p-8 flex flex-col gap-4 shadow-[0_10px_40px_rgba(235,0,2,0.2)]">
    <div class="flex items-center gap-3">
        <span class="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">sync</span>
        <span class="text-white font-black text-xs uppercase tracking-widest">Stereo Pro</span>
    </div>
    <h3 class="font-display font-black text-xl italic text-white uppercase">Offline Synchronicity</h3>
    <p class="text-white/80 text-[11px] leading-relaxed">Download and sync your streams across the neural net for disconnected playback.</p>
    <a class="text-white text-[10px] font-bold uppercase tracking-widest mt-2 border-b border-white/30 w-fit pb-1 hover:border-white transition-colors" href="#">Upgrade Now</a>
</div>
</div>
</div>
</section>
<!-- Streaming Grid -->
<section class="max-w-7xl mx-auto pb-24">
    <div class="flex items-center justify-between mb-10">
        <div class="flex items-center gap-4">
            <div class="w-1 h-8 bg-primary-dim shadow-[0_0_10px_rgba(235,0,2,0.8)]"></div>
            <h2 class="font-display font-black text-3xl italic text-white uppercase tracking-tighter">Emerging Streams</h2>
        </div>
        <div class="flex gap-4">
            <button class="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-white hover:bg-neutral-800 transition-colors">
                <span class="material-symbols-outlined">chevron_left</span>
            </button>
            <button class="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-white hover:bg-neutral-800 transition-colors">
                <span class="material-symbols-outlined">chevron_right</span>
            </button>
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<!-- Stream Card 1 -->
<div class="group cursor-pointer">
    <div class="aspect-video relative rounded-xl overflow-hidden mb-4 bg-surface-container-low">
        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close-up of highly detailed futuristic circuit board with pulsating red light lines and macro bokeh photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8vZlPf8ars5tXgj0HANpp9Q5mbRPxDFSNzF38_UpMVVJTvmorElzh_HBZRmwPas0KJtXtNaDEW57CNNItGOZUbs-iBplpg6-PdVc_8n_sET3J91Pp3Gjig9r8_vTuKeWVYF12iY3kd00mZnEXJ0Nj-hZR6c6HEDV46fxvxHxXFZgdP7BoRRVN5D0YBqooMac_WM4UdnM_eKWnxkzzH0nP92vm8stuXO4_BA15Xi3scjBu6YaeJbqzh8_sv-59Z8XsfUQ0v_hDpcw"/>
        <div class="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-md rounded text-[10px] font-bold text-white">12:45</div>
        <div class="absolute top-3 left-3 px-2 py-1 bg-[#EB0002] rounded text-[9px] font-black uppercase tracking-tighter text-white">Live</div>
    </div>
    <div class="flex gap-4">
        <div class="w-10 h-10 rounded-full bg-surface-container-highest flex-shrink-0 overflow-hidden">
            <img class="w-full h-full object-cover" data-alt="Portrait of a young creator with neon red rim lighting in a minimalist studio environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp7O9n17q1aZJemA0di0JQoJNsg0Z1JG57AeYJPGaaY_7eFRcRmVvUNtCW3rAO2hx518KZm9Iau6QR9B0YtrGZ1wqe0Ypdjltdo6RpCwF-KkzHnhgUHXdLYRclGnXSbW--Zq7x4YL0dd5Kg7gFjJU5P3-M4bzEF4aqtDh4S7-vctsCwL2A_tVTO98QmwvYzlKoD5c47u8Ela8ni6zQ8bcLlZ9vhZAEJsiM3LKqHV5Zget892uCuSkuY0mYlLxAWgUR-PV3H9w9ISA"/>
        </div>
        <div class="flex flex-col gap-1">
            <h3 class="text-white font-bold text-sm leading-snug group-hover:text-[#EB0002] transition-colors">Decoding the Artificial Mind</h3>
            <div class="flex items-center gap-2 text-[10px] text-neutral-500 uppercase tracking-wider font-medium">
                <span>Neon Theory</span>
                <span>•</span>
                <span>12K Watching</span>
            </div>
        </div>
    </div>
</div>
<!-- Stream Card 2 -->
<div class="group cursor-pointer">
    <div class="aspect-video relative rounded-xl overflow-hidden mb-4 bg-surface-container-low">
        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Atmospheric landscape of a futuristic brutalist city at night with floating red lanterns and heavy fog" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsJVH9xjspCK3ijsNKiTnPKoCVGKSlJOYBQH9DM4CmTXslQ2je0RZqo7tAXQNNuX6PF1B6PlINY1z4YX6uHlhnSeoQ4amtFOGjaYW0Jpbk3XlLwTW6Xi0OIrhfIwnH7HumRTu4lEbJMZQN-6NbRQqYe1yvRWsxnfRwBscuLe6bbo4_NGJgTorcAxXbtxowyJTgQRfMf1D73Uh5qIDqtzgcGmhtTWyLmYiKPieRb_XdJmpJL8nTLvwIIhnseBHYS35Wkte1jgBrTGQ"/>
        <div class="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-md rounded text-[10px] font-bold text-white">45:10</div>
    </div>
    <div class="flex gap-4">
        <div class="w-10 h-10 rounded-full bg-surface-container-highest flex-shrink-0 overflow-hidden">
            <img class="w-full h-full object-cover" data-alt="Abstract icon representing a studio logo with sharp geometric shapes and high contrast black and white design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuyEsBnIl1HJCPb-n7ebw9wVJJLxAlyVFT87XJi0Mp2-KruuubNWCLvUJ54LDAdFInma3UiTuiOTbU6q0WyGHoGIaFWx5geZsykBafDKNMsizAkDRf6fPiv6V8Tf42FAmVH8cTmPC3bSK1DHTqj7wnVlSDpQUOgpzj1eqU14CcSznJpNxj-a7cS7saOV-Uul1XYnDTYQ6_NlWNYB2n11mLai5x5rME27N2aMRzGdymJRXc8C7M7PNeDEcp3wrVPH56zH-gOVKxU2w"/>
        </div>
        <div class="flex flex-col gap-1">
            <h3 class="text-white font-bold text-sm leading-snug group-hover:text-[#EB0002] transition-colors">Urban Brutalism: A Sonic Journey</h3>
            <div class="flex items-center gap-2 text-[10px] text-neutral-500 uppercase tracking-wider font-medium">
                <span>Mono Studio</span>
                <span>•</span>
                <span>2 days ago</span>
            </div>
        </div>
    </div>
</div>
<!-- Stream Card 3 -->
<div class="group cursor-pointer">
    <div class="aspect-video relative rounded-xl overflow-hidden mb-4 bg-surface-container-low">
        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="High-speed photograph of red liquid splashing in a clean white space with sharp dramatic shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlalAJwmnRO0F1pVR_SCyq5y8ha-5iyEphrvkAiveWRMRXQ2uepw7bK_Qh4Hl4HBkP5OGTP8UDgqhNLWCz7keFADsOZCGkzB8TycfOuDoNdOYiO6z5UEWhReG4JG-XipzmPs_MIgM0uUJH0UudqfM76CvODh4SM1WHZNqcj3RTL74YOfKp7eHWMGviLLhvBjBk8BX9yuX0mPjGiBbLeWolmfNPxzCDa1RKNgP3RvkZovDrOgXNO_AZCzO9-AQZGXxDy6yOCqZaxBE"/>
        <div class="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-md rounded text-[10px] font-bold text-white">18:22</div>
    </div>
    <div class="flex gap-4">
        <div class="w-10 h-10 rounded-full bg-surface-container-highest flex-shrink-0 overflow-hidden">
            <img class="w-full h-full object-cover" data-alt="Candid photo of a scientist looking into a microscope with soft red ambient laboratory lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJvD6Yj8-8HI_-upE4q4NfllciTF4BCea4JNUXyevMPXqQS20ji95EykWiK1BpOJiMGg8cnRFmVwKdYOCDAIie5wjr4uNCxCkvCxGL24KYu2f8AYU-wKsfAnv1K8LXHAf3OiKLxh10djAk1CGNyBhcKdN7FsBizSa3E5BQTl6jhWIt3HtU_YGWkh5v97v0J__tCWg452N-K0hdgzp6v66Ik-WNAsidARJFk-F2tOdr0VYeUiAaITF2VEezsY60rnQV6Z_Fg3gxl4s"/>
        </div>
        <div class="flex flex-col gap-1">
            <h3 class="text-white font-bold text-sm leading-snug group-hover:text-[#EB0002] transition-colors">The Physics of Fluid Dynamics</h3>
            <div class="flex items-center gap-2 text-[10px] text-neutral-500 uppercase tracking-wider font-medium">
                <span>Quantum Flux</span>
                <span>•</span>
                <span>85K views</span>
            </div>
        </div>
    </div>
</div>
<!-- Stream Card 4 -->
<div class="group cursor-pointer">
    <div class="aspect-video relative rounded-xl overflow-hidden mb-4 bg-surface-container-low">
        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close-up of a human eye with a digital red iris reflecting a data stream in a dark cinematic setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH6Mr5apD3Dq0I4qj0K8Pf7N2vj3md8w2gjnGOxBp7NtOC0YoSnA4lVc8nRqxxgYmgJDRNKHAg5-nimy0exQSeYLXo1TyfbMI38OeS5EQS3a7BIX54uJ3Kg_KGk66j-C0BWIpYI9_cZ2SdBBwi3ilArR_VQitwlE-vX-vh7bMk86GbHYXTU3LCYZtYJvLwOP51tSw5us5n449mh8GrtoPyQjC6GQkam3XcpK6rfOBGMJ1httNidEZDOo-xjwTsCRGTQyt91epGXvo"/>
        <div class="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-md rounded text-[10px] font-bold text-white">05:55</div>
    </div>
    <div class="flex gap-4">
        <div class="w-10 h-10 rounded-full bg-surface-container-highest flex-shrink-0 overflow-hidden">
            <img class="w-full h-full object-cover" data-alt="Stylized portrait of a female digital artist with holographic makeup and a sharp focused expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABJeW0BaSR3-MyPp7r8Fc4yl2T2D-DSWztsYH0REqzHi8J_FD4LC8hKY80dWOnSido0fvyLZlCNuW4tsaWHY6sJrfvB4Ca1CWE7DS4iCWY52Cbf5sQek8oBtXi8zA0cjKMb0X0W_akKvFkrH8Gjxz8tIZrsJuL12r6lkz5RKEnUQtbPnZn1lo7Unt30dqi1dDaXCmKjmtrz1nqX-s75GDR5whOf4ozttKiWpxVTh9xhb2nuIe29q7AiOIw6iV8vZkGQLqEURBZsMs"/>
        </div>
        <div class="flex flex-col gap-1">
            <h3 class="text-white font-bold text-sm leading-snug group-hover:text-[#EB0002] transition-colors">Visualizing the Incomputable</h3>
            <div class="flex items-center gap-2 text-[10px] text-neutral-500 uppercase tracking-wider font-medium">
                <span>Aether Arts</span>
                <span>•</span>
                <span>3K watching</span>
            </div>
        </div>
    </div>
</div>
</div>
</section>
</main>
<!-- FAB Contextual (Only for home/dashboard) -->
<button class="fixed bottom-8 right-8 w-16 h-16 bg-[#EB0002] rounded-full shadow-[0_0_30px_rgba(235,0,2,0.5)] flex items-center justify-center group hover:scale-110 transition-transform z-50">
    <span class="material-symbols-outlined text-white text-3xl" style="font-variation-settings: 'FILL' 1;">add</span>
    <div class="absolute bottom-full right-0 mb-4 scale-0 group-hover:scale-100 transition-transform origin-bottom-right">
        <div class="bg-surface-container-highest text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full whitespace-nowrap">Start Broadcast</div>
    </div>
</button>
</body></html>