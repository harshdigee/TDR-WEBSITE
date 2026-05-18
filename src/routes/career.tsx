import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Careers — The Dental Roots" },
      { name: "description", content: "We're always on the lookout for new talent to join our departments across all of our locations at The Dental Roots." },
    ],
  }),
  component: CareerPage,
});

const whyWorkCards = [
  { icon: "/assets/images/career/icon1.webp", title: "Role", text: "Opportunity to make a real difference supplemented by great camaraderie, autonomy at work and super-fast speed to action." },
  { icon: "/assets/images/career/icon3.webp", title: "Leadership", text: "Humble, Capable and visionary leadership. Top-notch Advisory Board." },
  { icon: "/assets/images/career/icon3.webp", title: "Culture", text: "High on meritocracy: You hustle, you perform, you get rewarded. Deep rooted values (DELITE – Decisive, Empathy, Lean, Innovative, Trustworthy, Excellent Customer Service)." },
];

const currentOpenings = [
  {
    designation: "Front Office Executive",
    type: "Full Time",
    description: `<ul><li>Telephone Skills & Verbal Communication</li><li>Microsoft Office Skills</li><li>Patient Focus & Professionalism</li><li>Can handle Admin & Reception work</li><li>Managing all other responsibilities of front desk and receptionist role</li><li>Billing the patients & Scheduling appointments</li></ul>`,
  },
  {
    designation: "Experienced General Dentist (BDS)",
    type: "Full Time",
    description: `<ul><li>Minimum experience of three years in clinical practice</li><li>Performing basic general dental procedures independently</li><li>Diagnosis and treatment planning</li><li>Well versed with advanced dental technology</li></ul>`,
  },
  {
    designation: "Prosthodontist",
    type: "Full Time",
    description: `<ul><li>Minimum experience of one year in clinical practice</li><li>Diagnosis and treatment planning</li><li>Well versed with prosthodontic procedures like full-mouth rehabilitation, hybrid dentures, all on 4/6/8 implant dentures</li><li>Performing all such procedures independently</li></ul>`,
  },
];

function CareerPage() {
  const [openJob, setOpenJob] = useState<number | null>(null);
  const [scrollTo, setScrollTo] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", mobile: "", applyFor: "", messages: "", resume: null as File | null });
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.type === "file" && target.files) {
      setForm((p) => ({ ...p, resume: target.files![0] }));
      setFileName(target.files![0]?.name || "");
    } else {
      setForm((p) => ({ ...p, [target.name]: target.value }));
    }
  };

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* Banner */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/career/banner.webp" alt="Careers" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-1/85 via-brand-1/55 to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16 grid md:grid-cols-2 items-end gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4"><span className="w-8 h-px bg-brand-4" /><span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Join Our Team</span></div>
            <h1 className="font-serif font-light text-white text-[clamp(36px,5vw,72px)] leading-[1.08] mb-3">Careers</h1>
          </div>
          <div>
            <p className="text-white/80 font-light text-lg mb-6">We're always on the lookout for new talent to join our departments across all of our locations.</p>
            <button onClick={() => document.getElementById("career-form")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center px-8 py-4 bg-white text-brand-1 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-4 transition-all rounded-full">
              Join Now
            </button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-light text-[clamp(26px,3.5vw,46px)] mb-4">Why Work <em className="italic text-brand-2">With Us?</em></h2>
            <p className="text-ink-2 max-w-2xl mx-auto leading-relaxed">Our success is based on teamwork, working together to have an environment based on dignity and respect across the wide variety of job roles that exist within our clinic. We actively encourage and promote the development of employees throughout the clinic, nurturing and growing talented individuals to become the next generation of leaders within our business.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyWorkCards.map((card) => (
              <div key={card.title} className="bg-brand-6/30 border border-brand-3/10 p-8 rounded-sm text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 mx-auto mb-5">
                  <img src={card.icon} alt={card.title} className="w-full h-full object-contain" loading="lazy" />
                </div>
                <h3 className="font-serif text-xl mb-3">{card.title}</h3>
                <p className="text-ink-2 text-[13px] leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 px-6 md:px-12 bg-brand-6/30">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-serif font-light text-[clamp(26px,3.5vw,46px)] text-center mb-10">Current <em className="italic text-brand-2">Openings</em></h2>
          <div className="space-y-3">
            {currentOpenings.map((job, i) => (
              <div key={i} className="bg-white border border-brand-3/20 rounded-sm overflow-hidden">
                <button onClick={() => setOpenJob(openJob === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-brand-6/30 transition-colors">
                  <span className="font-serif text-[17px]">{job.designation}</span>
                  <span className={`text-brand-2 text-xl transition-transform ${openJob === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openJob === i && (
                  <div className="px-6 pb-6">
                    <p className="text-[12px] text-ink-2 mb-1"><strong>Function:</strong> {job.designation}</p>
                    <p className="text-[12px] text-ink-2 mb-4"><strong>Type:</strong> {job.type}</p>
                    <p className="font-semibold text-[13px] mb-2">Responsibilities:</p>
                    <div className="text-[13px] text-ink-2 leading-relaxed [&_ul]:space-y-1.5 [&_li]:flex [&_li]:gap-2"
                      dangerouslySetInnerHTML={{ __html: job.description }} />
                    <button onClick={() => document.getElementById("career-form")?.scrollIntoView({ behavior: "smooth" })}
                      className="mt-5 inline-flex items-center px-6 py-3 bg-brand-1 text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-2 transition-colors rounded-full">
                      Apply Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="career-form" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-brand-6/30 border border-brand-3/10 rounded-sm p-8 md:p-12">
            <h2 className="font-serif font-light text-[clamp(24px,3vw,40px)] mb-2">Interested in Joining Us?</h2>
            <p className="text-ink-2 text-[13px] mb-8">Submit your CV, we will contact you as soon as we have relevant openings.</p>
            <form className="grid md:grid-cols-2 gap-5" onSubmit={(e) => { e.preventDefault(); setLoading(true); setTimeout(() => setLoading(false), 2000); }}>
              <input name="name" required placeholder="Full Name*" className="border border-brand-3/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white" onChange={handleChange} />
              <input name="email" type="email" required placeholder="Email Address*" className="border border-brand-3/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white" onChange={handleChange} />
              <input name="mobile" type="tel" required placeholder="Contact Number*" className="border border-brand-3/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white" onChange={handleChange} />
              <select name="applyFor" required className="border border-brand-3/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white text-ink-2" onChange={handleChange}>
                <option value="">Applying For*</option>
                {currentOpenings.map((j) => (
                  <option key={j.designation} value={j.designation}>{j.designation}</option>
                ))}
              </select>
              <textarea name="messages" rows={4} required placeholder="Message*" className="md:col-span-2 border border-brand-3/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-brand-2 bg-white resize-none" onChange={handleChange} />
              <div className="md:col-span-2 relative border border-brand-3/20 rounded-sm bg-white overflow-hidden">
                <input name="resume" type="file" accept=".docx,.pdf" required className="w-full px-4 py-3 text-sm opacity-0 absolute inset-0 cursor-pointer" onChange={handleChange} />
                <div className="px-4 py-3 flex items-center gap-3 text-ink-2 text-sm pointer-events-none">
                  <span>📎</span>
                  <span>{fileName || "Attach Resume (.pdf / .docx)"}</span>
                </div>
              </div>
              <div className="md:col-span-2">
                <button type="submit" disabled={loading}
                  className="w-full bg-brand-1 text-white py-4 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-2 transition-colors rounded-sm disabled:opacity-50">
                  {loading ? "Submitting..." : "Apply Now"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
