import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — The Dental Roots" },
      { name: "description", content: "Welcome to The Dental Roots' FAQs, where we answer your important questions about dental care." },
    ],
  }),
  component: FaqsPage,
});

const faqs = [
  { q: "Will I have pain during the treatment or after it?", a: "One of the frequently asked questions — toothache is the main reason for patients seeking treatment. Fortunately, modern anesthetics can make the procedure pain free in most cases. Seeking treatment early makes the procedure more comfortable, so don't wait. When diagnosed early, treatment can be almost pain free. For the first few days after treatment, there may be some sensitivity to biting pressure and tender gums, especially if there was pain or infection before the procedure. Sometimes over-the-counter anti-inflammatory medications are recommended as prescribed by the doctor." },
  { q: "Should I be worried about my bleeding gums?", a: "Bleeding, red, or swollen gums are typically an early indication of gum disease. Other symptoms include bad breath or a metallic taste in the mouth, loose teeth, pockets between teeth, and tooth sensitivity. If caught in its early stages, gum disease can be reversed. However, if it's left to progress, gum disease becomes a chronic infection that requires continual maintenance. Schedule an appointment with your dentist if you notice any change in your soft-tissues (gums)." },
  { q: "Why are x-rays required for dental treatment, will it harm me?", a: "No. While x-rays will be necessary during your treatment, we use an advanced non-film computerized system, called digital radiography such as Digital RVG (Radiovisiography). This uses radiation levels as low as 80-90 percent less than those of conventional dental X-ray film. We have latest state-of-the-art equipment in our Radiology Lab to ensure this." },
  { q: "How I can make my smile look better?", a: "If your teeth already look balanced and symmetrical, but are too yellow, brown, gray, or stained, then the best solution is teeth whitening. In two to four sittings teeth whitening can completely change your look. On the other hand, if your front teeth are a little too short, spaced unevenly, chipped, cracked, stained, or filled with all kinds of fillings, then using dental veneers/laminates (preceded by orthodontic treatment if required) will definitely give you the best end result." },
  { q: "How can I get a smile makeover done and make sure I will like the end results?", a: "Our specialists have been enhancing and designing smiles for many years. We have found that when we give more control to our patients, we get better results. Initially, we use a series of before/after photos to narrow down the variables concerning an individual's case. We can do a cosmetic mock-up directly on your model teeth. You can see exactly how you will look with your new smile. It is here where we can make any needed changes, so that you are completely satisfied." },
  { q: "How can I prevent tooth staining?", a: "A variety of factors contribute to tooth discoloration, including excessive coffee and tea consumption, smoking, aging, heredity, and medications. Surface stains — those caused by foods, beverages, and tobacco — can typically be prevented with proper oral hygiene. Brush and floss after any stain-causing activity. If your teeth have yellow or orange tinges, our doctors can remove the stains with professional teeth whitening and brighten your smile up to 10 shades." },
  { q: "What is the difference between metal crown and metal free crowns?", a: "The technologies are completely different. First of all, traditional metal or porcelain-metal caps or crowns have all-metal underside. The porcelain is placed over the metal to hide the dark metal. The metal free restorations are usually prepared as inlays and sometimes as crowns when needed. The metal-free components are made of all-ceramic, composite polymers, or fiber reinforced polymer. These are then fused, or bonded to the natural part of the teeth with resin cements that polymerize and seal the space between the restoration and the tooth." },
  { q: "What is dental implant? Am I a candidate for dental implants?", a: "A dental implant serves as the replacement for the root portion of a missing natural tooth. A dentist surgically places the implant made of pure and sterilized titanium into either the upper or lower jawbone. After a period of two to four months of healing, the implant integrates with the bone and becomes a secure anchor for a replacement tooth. If you are missing one or more teeth, then you are a candidate for a dental implant." },
  { q: "What are veneers?", a: "Porcelain veneers are thin pieces of porcelain used to recreate the natural look of teeth, while also providing strength and resilience comparable to natural tooth enamel. It is often the material of choice for those looking to make slight position alterations, or to change tooth shape, size, and/or color. Porcelain veneers are a very successful option in many situations where the original tooth has developed poor color, shape, and contours." },
  { q: "I am getting a root canal treatment done. Do I need a crown after it?", a: "You may need to have a crown fitted over your tooth that has had root canal treatment. This is because after root canal therapy, the treated tooth becomes brittle and has increased chances of getting fractured. Hence, a crown or cap helps to strengthen and protect your tooth from further damage. Crowns/caps are made out of a material like porcelain." },
  { q: "What is orthodontic treatment? Why is it required?", a: "Orthodontic treatment is the correction of crooked teeth and jaws. It can be one of the best investments you make for your child's health. Crooked teeth and jaws can interfere with jaw function and speech, and lead to long-term dental problems such as tooth wear and gum damage. Orthodontic treatment fixes these problems, laying the foundation for long-term dental health." },
  { q: "If I require fillings, what type should I get?", a: "Where silver amalgam and gold were all that were used in the past for fillings in molars and premolars, dental health professionals frequently use tooth-colored porcelain or composite materials that are strong and extremely wear resistant. You can even give your teeth a face lift by removing your old metal fillings and replacing them with tooth colored ones." },
  { q: "My gums bleed when I brush or floss. Is this normal?", a: "Healthy tissue doesn't bleed. This is most likely a sign of early gingivitis. If you experience bleeding gums, see your dental health professional immediately to review proper brushing and flossing techniques. Schedule a soft tissue evaluation with your dentist that will include x-rays and oral prophylaxis cleaning. Gum bleeding must be taken seriously because if left untreated, it will lead to periodontal disease." },
  { q: "What can I do about my bad breath and bleeding gums?", a: "Proper brushing and flossing normally reduces the bacteria that cause bad breath. The new addition to effective oral hygiene has been tongue cleaning. Since research shows that 85% of bad breath can be controlled by removing bacteria that colonizes on the back of the tongue, it's a good idea to use a tongue cleaner at least once a day." },
  { q: "When do wisdom teeth erupt? What are the symptoms of impacted wisdom teeth?", a: "Wisdom teeth erupt at the age of 18 to 25 years. Symptoms of impacted wisdom teeth typically include pain and swelling of the gum line and lower face. If left untreated infection is possible, only intensifying the pain. Regular appointments with a dentist should identify problems related to wisdom teeth before they become significant." },
  { q: "What to say to kids?", a: "Read your child a book about going to the dentist. Be positive about going to the dentist! Do not talk about being afraid of the dentist. Do not talk about pain. Answer your child's questions about going to the dentist. Establish a habit for your child of going to the dentist regularly. A first dental visit should be a positive experience for your child." },
];

function FaqsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white text-ink overflow-x-hidden">
      <SiteHeader />

      {/* Banner */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden mt-16">
        <img src="/assets/images/faq/banner.webp" alt="FAQ" className="absolute inset-0 w-full h-full object-cover object-top" fetchPriority="high"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/images/dental-roots-bg.webp"; }} />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-1/85 via-brand-1/40 to-transparent" />
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-brand-4" />
            <span className="text-[10px] tracking-[0.35em] uppercase text-brand-4 font-semibold">Help Center</span>
            <span className="w-8 h-px bg-brand-4" />
          </div>
          <h1 className="font-serif font-light text-white text-[clamp(32px,5vw,68px)] leading-[1.08] mb-3">Frequently Asked Questions</h1>
          <p className="text-white/75 font-light text-lg max-w-xl mx-auto">Welcome to The Dental Roots' FAQs, where we answer your important questions about dental care.</p>
        </div>
      </section>

      {/* FAQ content */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[200px_1fr] gap-12">

          {/* Leaf decoration */}
          <div className="hidden md:block">
            <div className="sticky top-24">
              <img src="/assets/images/icon_leaf.webp" alt="Leaf" className="w-full max-w-[160px]" loading="lazy"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
              <div className="mt-8 bg-brand-1 text-white p-6 rounded-sm text-center">
                <p className="font-serif text-lg mb-3">Have more questions?</p>
                <a href="tel:+918130750008" className="text-brand-4 text-sm font-semibold hover:underline block mb-2">+91 81307 50008</a>
                <a href="https://wa.me/918130750008" target="_blank" rel="noopener noreferrer"
                  className="text-brand-4 text-sm font-semibold hover:underline block">WhatsApp Us</a>
              </div>
            </div>
          </div>

          {/* FAQ accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-brand-3/20 rounded-sm overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between bg-white hover:bg-brand-6/30 transition-colors">
                  <span className="font-serif text-[15px] pr-4 text-ink">{faq.q}</span>
                  <span className={`text-brand-2 text-2xl flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 py-5 bg-brand-6/30 text-ink-2 text-[13px] leading-relaxed border-t border-brand-3/10">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-brand-1 text-center">
        <h2 className="font-serif font-light text-3xl md:text-5xl text-white mb-4">
          Still Have <em className="italic text-brand-4">Questions?</em>
        </h2>
        <p className="text-white/70 font-light mb-8 max-w-lg mx-auto">Our team of dental specialists is here to help. Book a free consultation and get all your questions answered.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+918130750008" className="inline-flex items-center px-8 py-4 bg-white text-brand-1 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-brand-4 transition-all rounded-full">
            Call Us Now
          </a>
          <a href="https://wa.me/918130750008" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border border-white text-white text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white/10 transition-all rounded-full">
            WhatsApp Us
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
