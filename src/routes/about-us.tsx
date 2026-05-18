import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — The Dental Roots | Excellence in Dentistry" },
      { name: "description", content: "Meet the team behind India's leading dental clinic. Dr. Dheeraj Setia and 20+ specialists dedicated to world-class dental care in Delhi & Gurgaon." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { n: "22+", l: "Years of Experience" },
  { n: "10 Lac+", l: "Successful Patients" },
  { n: "1 Lac+", l: "Dental Implants Treated" },
];

const teamMembers = [
  { name: "Dr. Priyanka Bhat", designation: "Prosthodontics, Crown and Bridge and Implantology (B.D.S., M.D.S.)", image: "/assets/images/about/dr_priyanka-img.webp", description: "Dr Priyanka has done her BDS and MDS from the prestigious RGUHS in Prosthodontics in 2018. She specialises in crowns, bridges, implants, implant supported dentures, complete and partial dentures. She is also certified for Full Arch Immediate Loading Neoarch Protocol." },
  { name: "Dr. Tanmay Mittal", designation: "Orthodontics and Dentofacial Orthopaedics (B.D.S, M.D.S)", image: "/assets/images/about/tanmay-img.webp", description: "Dr. Tanmay Mittal is a distinguished Orthodontist with over ten years of clinical experience. He completed his master's at HP Government Dental College. He has completed more than 700 Invisalign cases, earning Diamond Provider status for 2023 and 2024." },
  { name: "Dr. Sarveshwari Singh", designation: "Conservative Dentist & Endodontist (B.D.S, M.D.S)", image: "/assets/images/about/dr-sarveshwari-new.webp", description: "Dr. Sarveshwari Singh holds a Masters in Conservative Dentistry and Endodontics from Sardar Patel Postgraduate Institute. With over 9 years of clinical experience, she specializes in aesthetic and restorative procedures and complex root canal treatments." },
  { name: "Dr. Esha Goel", designation: "Specialist Endodontist (B.D.S., MClinDent Endo, M Endo RCSEd)", image: "/assets/images/about/esha-img.webp", description: "Dr. Esha is a Specialist Endodontist with a master's degree from King's College London. She graduated with distinction and was awarded the prestigious KCL Endodontology Shield. She also holds M Endo RCSEd from The Royal College of Surgeons of Edinburgh." },
  { name: "Dr. Vijay Siwach", designation: "Oral and Maxillofacial Surgery (B.D.S, M.D.S)", image: "/assets/images/about/vijay-siwach.webp", description: "Dr. Vijay Siwach is a highly respected Oral and Maxillofacial Surgeon. He served as Ex-Professor at SGT University and Ex-Senior Consultant at Artemis Hospital. His expertise includes oral surgery, dentoalveolar procedures, and trauma management." },
  { name: "Dr. Ritika Gupta", designation: "General Dentist (B.D.S.)", image: "/assets/images/about/dr-Ritika-new.webp", description: "Over 10 years of experience specializing in smile designing and restoring smiles with Dental Veneers. She has worked at Max Saket City hospital and has been crafting smiles with veneers, whitening, and cosmetic dentistry for 7 years." },
  { name: "Dr. Ankita Shah", designation: "MDS — Founder of Dentician & TMJ, Tongue Tie and Sleep Institute", image: "/assets/images/about/Dr-ankita.webp", description: "Dr. Ankita Shah is a leading Airway Focused Dentist and Director of the TMJ, Tongue Tie and Sleep Institute. President of the India Airway Co-LAB Chapter. The first and only Indian Ambassador trained by the renowned ENT & Sleep Surgeon Dr. Soroush Zaghi." },
  { name: "Dr. Sharda", designation: "Conservative and Endodontic Dentistry (BDS, MDS)", image: "/assets/images/about/Dr_Sharda.webp", description: "Dr. Sharda is a senior endodontist with 15 years of experience. Her expertise includes root canal and aesthetic fillings. She is Ex-Senior Resident of Dr. RML Hospital Delhi and has many national and international publications to her name." },
  { name: "Dr. Prerna Jeloka", designation: "Conservative and Endodontic Dentistry (BDS, MDS)", image: "/assets/images/about/Dr_Prerna.webp", description: "Gold medallist from Rajiv Gandhi University of Health Sciences. She has pursued her masters in Aesthetics and ROOT CANAL speciality and is the centre head at the Tata Primanti clinic." },
  { name: "Dr. Aditi Chaturvedi", designation: "BDS and MDS in Periodontology and Oral Implantology (Gold Medallist)", image: "/assets/images/about/dr_Aditi_Chaturvedi.webp", description: "Gold Medallist from SGT University. Winner of multiple best paper and poster awards at state and national levels. Expert in flap surgeries, perio-aesthetic procedures, and implants using Scalpel, Electrocautery, and Laser." },
  { name: "Dr. Aditi Malhotra", designation: "General Dentist (BDS)", image: "/assets/images/about/Dr_Aditi.webp", description: "Graduated from SGT University, Gurgaon. Her areas of interest include smile makeovers, cosmetic dentistry, teeth whitening, and restorative dentistry." },
  { name: "Dr. Anchal Bhat", designation: "Conservative Dentistry & Endodontics (MDS)", image: "/assets/images/about/Anchal.webp", description: "BDS from Manipal College of Dental Sciences, MDS from Bapuji Dental College. Associate Fellowship in Laser Dentistry from World Clinical Laser Institute, USA. Expert in aesthetic dentistry and painless root canal treatment." },
  { name: "Dr. Gopika Sharma", designation: "Pedodontist (BDS, MDS)", image: "/assets/images/about/Gopika.webp", description: "Ex-HOD Dentistry Phoenix Hospital, Delhi. Ex-Consultant Apollo Clinic, Gurgaon. Masters in Pedodontics from Rajiv Gandhi University, Karnataka in 2002. Dedicated to making dental visits fun and comfortable for children." },
  { name: "Dr. Anushka Ahuja", designation: "Conservative Dentist & Endodontist (MDS)", image: "/assets/images/about/anushka-img.webp", description: "MDS from Manipal College of Dental Sciences. Expert in painless root canal treatments and tooth-colored restorations." },
  { name: "Dr. Anushri Mahrishi", designation: "General & Cosmetic Dentist", image: "/assets/images/about/anushri-img.webp", description: "Practicing General Dentist in India for over 6 years, also holds a license from the Australian Dental Council. Alum of Manipal College of Dental Sciences. Expert in cosmetic restoration for trauma patients." },
  { name: "Dr. Guneet Gill", designation: "Oral and Maxillofacial Surgery", image: "/assets/images/about/guneet-img.webp", description: "15 years of experience in Oral and Maxillofacial Surgery. Specializes in wisdom tooth removal, jaw fractures, and TMJ problems with an atraumatic and painless approach." },
  { name: "Dr. Harshita Gupta", designation: "Eminent Orthodontist | Invisalign Gold Provider", image: "/assets/images/about/harshita-img.webp", description: "Topper from Pt. B. D. Sharma University. Invisalign Gold Provider. Specializes in Invisalign, lingual braces, Damon braces, cleft orthodontics, and surgical orthodontics." },
  { name: "Dr. Jasmine Sachdeva", designation: "Conservative Dentist & Endodontist (Root Canal Specialist)", image: "/assets/images/about/jasmine-img.webp", description: "MDS from Government Dental College, Ahmedabad. Trained in Dental Microscopes. Comprehensive training in Dental Implantology including Implant Prosthetics." },
  { name: "Dr. Nivea", designation: "Consultant Prosthodontist & Implant Prosthesis Specialist (BDS, MDS)", image: "/assets/images/about/nivea-img.webp", description: "Prosthodontist specializing in designing custom solutions such as crowns, bridges, dentures, dental implants, and implant-supported prostheses." },
  { name: "Dr. Rishba Singh", designation: "Pediatric & Preventive Dentist", image: "/assets/images/about/rishba-img.webp", description: "Specialist in pediatric and preventive dentistry. Expert in behavior management for children. Known for making dental visits stress-free and enjoyable for kids and parents." },
  { name: "Dr. Shradha Verma", designation: "General Dentist", image: "/assets/images/about/shradha-img.webp", description: "Graduate of Sri Rajiv Gandhi College of Dental Sciences. Internship at Maulana Azad Institute. Expertise in preventive care, restorative procedures, surgical extractions, and endodontics." },
  { name: "Dr. Smiti Bhardwaj", designation: "MDS (Periodontics & Implantology)", image: "/assets/images/about/smiti-img.webp", description: "Over 15 years of clinical expertise in periodontal and implant care. Former Senior Scientist at Maulana Azad Institute of Dental Sciences. Recognized with a Letter of Appreciation from the Prime Minister's Office in 2019." },
  { name: "Dr. Somya Tyagi", designation: "Consultant Endodontist & Aesthetic Dentist (BDS, MDS, FAGE)", image: "/assets/images/about/somya-img.webp", description: "Training from Manipal College of Dental Sciences and Atal Bihari Vajpayee Medical University. Expert in complex endodontic cases, re-interventions, severely curved canals, and microscope-enhanced endodontics." },
  { name: "Dr. Varun Nakra", designation: "Oral & Maxillofacial Surgeon (BDS, MDS)", image: "/assets/images/about/varun-img.webp", description: "MDS from SDM College of Dental Sciences. Senior Resident at Maulana Azad Institute of Dental Sciences. Dedicated to pain-free experience in dental extractions, implants, jaw cysts & tumors." },
];

function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4" onClick={onClose}>
      <div className="relative w-full max-w-3xl aspect-video" onClick={(e) => e.stopPropagation()}>
        <iframe src={src} className="w-full h-full rounded-lg" allow="autoplay; encrypted-media" allowFullScreen title="Video" />
        <button onClick={onClose} className="absolute -top-10 right-0 text-white text-xl font-bold hover:text-brand-4">✕ Close</button>
      </div>
    </div>
  );
}

function TeamModal({ member, onClose }: { member: typeof teamMembers[0] | null; onClose: () => void }) {
  if (!member) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 overflow-y-auto" onClick={onClose}>
      <div className="relative bg-white max-w-2xl w-full rounded-2xl overflow-hidden my-4" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-8 h-8 bg-brand-6 rounded-full flex items-center justify-center text-ink hover:bg-brand-5 transition-colors text-sm">✕</button>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-48 shrink-0">
            <img src={member.image} alt={member.name} className="w-full h-56 md:h-full object-cover" loading="lazy" />
          </div>
          <div className="p-7 flex-1 overflow-y-auto max-h-[70vh]">
            <h3 className="font-serif text-2xl font-medium mb-1">{member.name}</h3>
            <p className="text-[10px] tracking-[0.2em] uppercase text-brand-2 font-semibold mb-4">{member.designation}</p>
            <div className="w-12 h-px bg-brand-2 mb-4" />
            <p className="text-sm text-ink-2 leading-relaxed">{member.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  const [videoSrc, setVideoSrc] = useState("");
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* ─── BANNER ─── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/about-us-banner.webp" alt="About Us" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high" onError={(e) => { (e.target as HTMLImageElement).src = "/assets/images/dental-roots-bg.webp"; }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-4" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Excellence in Dentistry</span>
          </div>
          <h1 className="font-serif font-light text-white text-[clamp(32px,5vw,68px)] leading-[1.08] tracking-tight mb-4 max-w-2xl">
            About The Dental Roots
          </h1>
          <p className="text-white/70 font-light max-w-lg">India's leading and most trusted dental clinic, delivering world-class care across Delhi & Gurugram.</p>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-brand-1 py-14 px-6 md:px-12">
        <div className="max-w-[1260px] mx-auto">
          <div className="grid grid-cols-3 gap-0.5">
            {stats.map((s, i) => (
              <div key={s.l} className={`text-center py-8 px-4 ${i < stats.length - 1 ? "border-r border-brand-3/30" : ""}`}>
                <div className="font-serif font-light text-white text-4xl md:text-5xl leading-none mb-2">{s.n}</div>
                <div className="text-[9px] tracking-[0.25em] uppercase text-brand-4 font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR STORY ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Our Philosophy</span>
            </div>
            <h2 className="font-serif font-light text-[clamp(28px,4vw,52px)] leading-[1.08] tracking-tight mb-5">
              Experience a whole new <em className="italic text-brand-2">kind of smile</em>
            </h2>
            <div className="space-y-4 text-sm text-ink-2 leading-relaxed">
              <p>Traditional craftsmanship meets the best cutting-edge technology to deliver restorative dentistry with natural results and enduring benefits. Every treatment is a testament to our unwavering commitment to excellence.</p>
              <p>From our four state-of-the-art clinics across Delhi and Gurgaon, we serve patients from over 40 countries who trust us for life-changing smile transformations.</p>
            </div>
          </div>
          <div className="relative">
            <img src="/assets/images/dheera-bg-img.webp" alt="The Dental Roots Clinic" className="w-full rounded-2xl object-cover aspect-[4/3]" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ─── DR. DHEERAJ BIO ─── */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 overflow-hidden">
        <img src="/assets/images/dheera-bg-img.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" loading="lazy" />
        <div className="absolute inset-0 bg-brand-1/90" />
        <div className="relative z-10 max-w-[1260px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-brand-4" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Our Founder</span>
            </div>
            <h2 className="font-serif font-light text-[clamp(28px,4vw,52px)] leading-[1.1] tracking-tight mb-4">
              Dr. Dheeraj Setia
            </h2>
            <p className="text-[11px] tracking-[0.3em] uppercase text-brand-4 font-medium mb-6">Founder — Chief Endodontist & Implantologist</p>
            <blockquote className="font-serif font-light text-xl italic text-white/85 leading-relaxed mb-8">
              "<span className="text-brand-4 not-italic">Dentistry</span> isn't just about fixing teeth. It's about restoring confidence, comfort, and trust — patient by patient, smile by smile."
            </blockquote>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setVideoSrc("https://www.youtube.com/embed/v5pb0_-tZzI?autoplay=1")}
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/30 text-white text-[10px] tracking-[0.22em] uppercase font-semibold hover:bg-white/10 transition-colors rounded-full"
              >
                <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-xs">▶</span>
                Watch Video
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-72 h-72">
              <img
                src="/assets/images/about/dr-dheeraj.webp"
                alt="Dr. Dheeraj Setia"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = "/assets/images/home-team1.webp"; }}
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-2 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FULL TEAM ─── */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Our Team</span>
              <span className="w-8 h-px bg-brand-2" />
            </div>
            <h2 className="font-serif font-light text-[clamp(32px,4vw,56px)] leading-[1.08] tracking-tight">
              The Dental Roots <em className="italic text-brand-2">Team</em>
            </h2>
            <p className="text-ink-3 font-light mt-4 max-w-xl mx-auto">Our award-winning dental team are committed to providing exceptional dental care for all patients.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.5">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden bg-white border border-brand-3/10 cursor-pointer hover:-translate-y-1 transition-all"
                onClick={() => setSelectedMember(member)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).src = "/assets/images/home-team1.webp"; }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brand-1/95 to-transparent text-white translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-serif text-sm font-medium">{member.name}</h3>
                  <p className="text-[9px] text-brand-5 mt-0.5 leading-snug line-clamp-2">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATIONS ─── */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-brand-2" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-2 font-semibold">Multiple Locations</span>
              <span className="w-8 h-px bg-brand-2" />
            </div>
            <h2 className="font-serif font-light text-[clamp(28px,4vw,48px)] leading-[1.08] tracking-tight">
              Multiple Locations, <em className="italic text-brand-2">One Standard of Care</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5">
            {[
              { img: "/assets/images/multiple-location-img1.webp", link: "https://maps.app.goo.gl/koQWeTU73tQaobSc9", title: "Golf Course Road — Gurugram" },
              { img: "/assets/images/panchshhel-img-new.webp", link: "https://maps.app.goo.gl/2xkk3DzcCL9LC1zt9", title: "Panchsheel Park — Delhi" },
              { img: "/assets/images/tata-parmiti-img.webp", link: "https://maps.app.goo.gl/Vv3v8asauAvwTcBR7", title: "Tata Primanti — Gurugram" },
              { img: "/assets/images/sushant-lock-img1.webp", link: "https://maps.app.goo.gl/7YBPSFCwhjPcZQwD9", title: "Sushant Lok — Gurugram" },
            ].map((loc) => (
              <a key={loc.title} href={loc.link} target="_blank" rel="noreferrer" className="group relative overflow-hidden aspect-[3/4] block">
                <img src={loc.img} alt={loc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-1/90 via-brand-1/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="font-serif text-base font-medium">{loc.title}</h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-brand-4 mt-1">Get Directions →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <VideoModal src={videoSrc} onClose={() => setVideoSrc("")} />
      <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  );
}
