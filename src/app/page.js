"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [modalType, setModalType] = useState(null);

  const listPrestasi = [
    {
      nama: "Pesta Gendang Nusantara",
      lokasi: "Malacca, Malaysia (January 2024)",
      fotos: ["/malay1.jpeg", "/malay2.jpeg", "/malay3.jpeg"]
    },
    {
      nama: "Festival Gelar Serumpun Melayu",
      lokasi: "Medan (October 2022)",
      fotos: ["/medan1.jpeg", "/medan2.jpeg", "/medan3.jpeg"]
    },
    {
      nama: "Sibu International Dance Festival",
      lokasi: "Sibu Serawak, Malaysia (June 2022)",
      fotos: ["/SIDF1.jpeg", "/SIDF2.jpeg", "/SIDF3.jpeg"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-slate-200 font-sans relative overflow-hidden">
      
      {/* 3D BUBBLE & HOLOGRAM BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`, backgroundSize: '60px 60px', transform: 'perspective(1000px) rotateX(60deg)', maskImage: 'linear-gradient(to bottom, transparent, black)' }}></div>
        
        {/* Real 3D Glass Bubbles */}
        <div className="absolute top-[15%] left-[10%] w-40 h-40 rounded-full bg-blue-500/10 border border-white/20 backdrop-blur-md shadow-[inset_0_10px_30px_rgba(255,255,255,0.2)] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[5%] w-64 h-64 rounded-full bg-indigo-500/5 border border-white/10 backdrop-blur-xl animate-bounce duration-[8s]"></div>
        <div className="absolute top-[50%] right-[20%] w-20 h-20 rounded-full bg-blue-400/10 border border-white/5 blur-sm"></div>
      </div>

      <div className="relative z-10">
        <section className="max-w-6xl mx-auto py-24 px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.2em]">System Analyst Portfolio // 2026</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
                RATNA NUR<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">AENI FILLAH</span>
              </h1>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed text-justify max-w-xl border-l-2 border-blue-500/50 pl-6 italic bg-white/5 py-4 rounded-r-2xl">
              "Saya mahasiswa aktif semester 6 Program Studi D4 Teknologi Rekayasa Perangkat Lunak yang memiliki minat besar di bidang System Analyst dan Technical Writer. Fokus saya adalah menjembatani kebutuhan pengguna dengan dokumentasi teknis yang terstruktur."
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => setModalType('pendidikan')} className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-105 transition-all">
                Pendidikan
              </button>
              <Link href="/proyek" className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all">
                Pengalaman Proyek
              </Link>
              <button onClick={() => setModalType('prestasi')} className="px-8 py-4 text-blue-400 font-bold hover:underline decoration-2 underline-offset-8">
                Prestasi_
              </button>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center relative">
            <div className="relative w-80 h-[30rem] rounded-[3rem] overflow-hidden border-2 border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.2)] bg-slate-900">
              <Image src="/profil.jpeg" alt="Ratna" fill className="object-cover opacity-90" priority unoptimized />
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-24 px-6">
          <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 p-12 shadow-2xl">
            <h3 className="text-3xl font-black text-white mb-16 text-center tracking-tight">Keahlian & Kompetensi_</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Hard Skills", items: ['Analisis Sistem', 'Analisis Kebutuhan', 'Manajemen Basis Data', 'Perancangan Sistem', 'Pemrograman Web'] },
                { title: "Tools", items: ['Draw.io', 'StarUML', 'MySQL', 'Laravel', 'VS Code', 'Figma', 'Flutter'] },
                { title: "Programming", items: ['HTML', 'Python', 'PHP', 'Dart'] }
              ].map((cat, i) => (
                <div key={i} className="space-y-6">
                  <h4 className="text-blue-400 font-mono text-xs uppercase tracking-widest">{cat.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="px-4 py-2 bg-blue-500/5 rounded-lg text-xs font-bold border border-blue-500/20 hover:border-blue-500/50 transition-all">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-20 text-center border-t border-white/5">
          <p className="text-slate-600 text-[10px] font-mono tracking-[0.5em] uppercase">
            © 2026 RATNA NUR AENI FILLAH // ANALYST PORTFOLIO
          </p>
        </footer>
      </div>

      {/* MODAL SYSTEM */}
      {modalType && (
        <div className="fixed inset-0 bg-[#0a0a0c]/90 backdrop-blur-xl z-50 flex items-center justify-center p-4">
          <div className="bg-[#111114] border border-blue-500/30 rounded-[2rem] max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-[0_0_100px_rgba(59,130,246,0.2)] animate-in zoom-in-95 duration-300">
            <button onClick={() => setModalType(null)} className="absolute top-6 right-6 text-slate-400 hover:text-white text-2xl font-bold">✕</button>
            <div className="p-10 md:p-16">
              {modalType === 'pendidikan' ? (
                <div className="space-y-12">
                  <h3 className="text-3xl font-black text-white tracking-tighter border-l-4 border-blue-500 pl-6 uppercase">Riwayat Pendidikan</h3>
                  <div className="space-y-10">
                    {[
                      { degree: "D4 Teknologi Rekayasa Perangkat Lunak", school: "Politeknik Negeri Subang", year: "2023 - 2027" },
                      { degree: "Rekayasa Perangkat Lunak", school: "SMK Negeri 2 Subang", year: "2020 - 2023" }
                    ].map((edu, i) => (
                      <div key={i} className="border-b border-white/5 pb-8 last:border-0">
                        <p className="text-2xl font-black text-white">{edu.degree}</p>
                        <p className="text-blue-400 font-bold mt-1 uppercase text-sm tracking-widest">{edu.school} — {edu.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-20">
                   <h3 className="text-3xl font-black text-white tracking-tighter border-l-4 border-blue-500 pl-6 uppercase">Prestasi</h3>
                   {listPrestasi.map((item, idx) => (
                    <div key={idx} className="space-y-8">
                      <div className="border-b border-white/10 pb-4">
                        <p className="font-black text-white text-2xl">{item.nama}</p>
                        <p className="text-blue-400 font-mono text-xs uppercase mt-2 tracking-widest">{item.lokasi}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {item.fotos.map((foto, i) => (
                          <div key={i} className="aspect-[4/5] relative rounded-xl overflow-hidden border border-white/10 bg-slate-900 shadow-lg">
                            <Image src={foto} alt="Dokumentasi" fill className="object-cover opacity-80" unoptimized />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}