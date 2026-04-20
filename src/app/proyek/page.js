import Image from 'next/image';
import Link from 'next/link';

export default function ProyekPage() {
  const projects = [
    {
      title: "Digitalisasi Pencatatan Toko Kue",
      client: "Missnana.cake - Subang",
      period: "Feb - Jul 2024",
      img: "/projects/project1.jpeg",
      desc: [
        "Di sini saya belajar bahwa masalah UMKM seringkali ada pada data yang tercecer. Saya membantu merapikan alur stok dan uang masuk agar pemilik toko tidak lagi pusing menghitung manual.",
        "Tugas saya adalah memastikan ide-ide dari hasil diskusi diubah menjadi alur yang masuk akal bagi pengembang, sehingga sistem yang dibangun benar-benar menyelesaikan masalah di lapangan."
      ]
    },
    {
      title: "Sistem Reservasi Klinik Pratama",
      client: "Klinik Pratama Amanah - Subang",
      period: "Feb - Jul 2025",
      img: "/projects/project2.jpeg",
      desc: [
        "Proyek ini mengajarkan saya pentingnya mendengar. Saya bersama teman-teman saya turun langsung menemui perawat dan admin untuk memahami kenapa sistem lama mereka terasa lambat.",
        "Hasilnya, kami merancang solusi rekam medis digital yang lebih ringkas. Fokus saya adalah membuat pekerjaan mereka lebih cepat dan pasien tidak perlu menunggu terlalu lama."
      ]
    },
    {
      title: "Pengembangan ChatBot AI Akademis",
      client: "FMIPA Universitas Padjadjaran",
      period: "Agu - Jan 2026",
      img: "/projects/muara2.jpeg",
      desc: [
        "Dalam proyek tim ini, saya bersama rekan pengembang merancang fondasi awal bagaimana chatbot ini harus berinteraksi. Fokus utama kami adalah memastikan chatbot mampu menyajikan data riset yang kompleks dengan cara yang mudah dimengerti.",
        " Kontribusi spesifik saya dalam diskusi tim adalah membantu memetakan logika percakapan dan mendokumentasikan kebutuhan data, sehingga tim pengembang memiliki panduan yang jelas saat masuk ke tahap implementasi teknis."
      ]
    }
  ];

  return (
    <main className="min-h-screen relative bg-[#0a0a0c] font-sans text-slate-200 overflow-x-hidden">
      
      {/* BACKGROUND LAYER (Bubbles & Grid) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-[20%] right-[-5%] w-72 h-72 rounded-full bg-blue-500/10 border border-white/10 backdrop-blur-xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[5%] w-96 h-96 rounded-full bg-indigo-500/5 border border-white/5 backdrop-blur-md animate-bounce duration-[10s]"></div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-md text-blue-400 border border-blue-500/30 px-6 py-3 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all mb-12 shadow-lg">
          ← Kembali
        </Link>

        <header className="mb-20 space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            Cerita Proyek<span className="text-blue-500">_</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl italic">Pengalaman saya dalam merancang solusi digital, dari UMKM hingga riset akademis.</p>
        </header>

        {/* PROJECT LIST */}
        <section className="space-y-40">
          {projects.map((proj, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start group">
              <div className="lg:col-span-5 relative">
                <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-blue-500 z-20"></div>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image src={proj.img} alt={proj.title} fill className="object-cover opacity-90 group-hover:opacity-100 transition-opacity" unoptimized />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.2em]">{proj.period}</span>
                  <h3 className="text-3xl md:text-4xl font-black text-white mt-2 leading-tight">{proj.title}</h3>
                  <p className="text-blue-400/80 font-bold text-sm mt-1">{proj.client}</p>
                </div>

                <div className="space-y-4">
                  {proj.desc.map((d, i) => (
                    <p key={i} className="text-slate-400 text-lg leading-relaxed text-justify">{d}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* --- CONTACT SECTION (FOOTER) --- */}
        <footer className="mt-40 pt-20 border-t border-white/10 text-center space-y-10 pb-20">
          <div className="space-y-4">
            <h4 className="text-2xl font-black text-white tracking-tight">Mari Terhubung!</h4>
            <p className="text-slate-500">Tertarik berkolaborasi? Hubungi saya melalui platform di bawah ini:</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:ratnafillah1304@gmail.com" className="group flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl hover:bg-blue-600 transition-all">
              <span className="text-slate-300 group-hover:text-white">Email</span>
            </a>
            <a href="https://www.linkedin.com/in/ratnanuraenifillah?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" className="group flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl hover:bg-blue-700 transition-all">
              <span className="text-slate-300 group-hover:text-white">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/ratnanuraf?igsh=eGxiY2sydjh4N2Vi" target="_blank" className="group flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl hover:bg-pink-600 transition-all">
              <span className="text-slate-300 group-hover:text-white">Instagram</span>
            </a>
          </div>

          <p className="text-slate-700 text-[10px] font-mono uppercase tracking-[0.5em] pt-10">
            © 2026 Ratna Nur Aeni Fillah
          </p>
        </footer>
      </div>
    </main>
  );
}