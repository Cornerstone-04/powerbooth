import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { site } from "@/lib/site";
import { Shield, Clock, Users, Phone, Mail } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { features } from "./data/features";
import { gallery } from "./data/gallery";
import { personJsonLD } from "./data/person-jsonLD";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-brand-gold text-white font-semibold px-3 py-1 rounded-xl">
                SONCAP Certified
              </Badge>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-brand-coal mb-6">
              Power Safety Boot
              <span className="block text-2xl lg:text-3xl text-gray-600 font-normal mt-2">
                Nigerian-engineered protection
              </span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              SONCAP-certified safety boots designed for Nigerian industries.
              Steel-toe protection that won&apos;t quit, even in the toughest
              industrial environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                asChild
                className="rounded-full bg-brand-coal hover:bg-brand-coal/90 text-white font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank">
                  <FaWhatsapp className="size-5 text-green-500 mr-2" />
                  WhatsApp to Order
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full text-white bg-brand-gold hover:bg-brand-gold/90 hover:text-white font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl flex justify-center items-center"
              >
                <a href="/product">View Full Specs</a>
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-gold" />
                <span>SKU: {site.sku}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold" />
                <span>Lagos Same-Day Delivery</span>
              </div>
            </div>
          </div>

          {/* hero image */}
          <div className="relative animate-fade-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-3xl transform rotate-3"></div>
            <Image
              src="/boots-side.png"
              alt="Power Safety Boot - Steel toe protection for Nigerian industries"
              width={800}
              height={600}
              className="rounded-3xl shadow-2xl object-contain w-full h-auto relative z-10 transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-coal mb-4">
            Triple Protection System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for Nigerian conditions. Tested in the harshest industrial
            environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = () => (
              <feature.icon className="w-10 h-10 text-brand-gold" />
            );
            return (
              <Card
                key={feature.title}
                className="shadow-xl border-0 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon />
                  </div>
                  <h3 className="font-bold text-2xl text-brand-coal mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.desc}
                  </p>
                  <Badge
                    variant="secondary"
                    className="bg-brand-gold/10 text-brand-coal"
                  >
                    {feature.highlight}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-coal mb-4">
            See the Difference
          </h2>
          <p className="text-xl text-gray-600">
            Professional photography showing every detail
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {gallery.map(({ img, title, desc }) => (
            <div key={img} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={`/${img}`}
                  alt={`${title} - Power Safety Boot`}
                  width={800}
                  height={600}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="font-bold text-xl mb-2">{title}</h3>
                    <p className="text-sm">{desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIRECTOR */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-coal mb-4">
            Meet Our Director
          </h2>
          <p className="text-xl text-gray-600">
            Led by an experienced director, Power Booth Nigeria Limited is
            committed to certified safety solutions for Nigerian industries.{" "}
          </p>
        </div>
        <div className="rounded-3xl border bg-white shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-3 gap-0">
            {/* Photo */}
            <div className="relative md:col-span-1 bg-gray-50 flex items-center justify-center p-8">
              {/* <div className="relative w-48 h-48"> */}
              <Image
                src={site.director.photo || site.logo}
                alt={`${site.director.name} — ${site.director.title}`}
                fill
                className="rounded-2xl object-cover shadow-lg"
              />
              {/* </div> */}
            </div>

            {/* Info */}
            <div className="md:col-span-2 p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className="bg-brand-gold text-white font-semibold px-3 py-1 rounded-xl">
                  {" "}
                  Leadership
                </Badge>
                <span className="text-sm text-gray-500">
                  Power Booth Nigeria Limited
                </span>
              </div>

              <h2 className="text-3xl font-bold text-brand-coal">
                {site.director.name}
              </h2>
              <p className="text-brand-coal/80 mt-1">{site.director.title}</p>

              <p className="mt-5 text-gray-700 leading-relaxed">
                {site.director.bio}
              </p>

              {/* Contact chips */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="outline" className="rounded-full">
                  <a href={`tel:${site.director.phone}`}>
                    {" "}
                    <Phone className="size-4 mr-1" /> Call Director
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a href={`mailto:${site.director.email}`}>
                    <Mail className="size-4 mr-1" />
                    Email Director
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a
                    href={site.director.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="size-4 mr-1" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>

              {/* Sub-points (credibility without hype) */}
              <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border p-4">
                  <p className="font-semibold">Safety Focus</p>
                  <p className="text-gray-600 mt-1">
                    Commitment to SON/SONCAP compliance and practical PPE
                    selection.
                  </p>
                </div>
                <div className="rounded-xl border p-4">
                  <p className="font-semibold">Customer-first</p>
                  <p className="text-gray-600 mt-1">
                    Supports site assessments and sizing guidance for teams.
                  </p>
                </div>
                <div className="rounded-xl border p-4">
                  <p className="font-semibold">Local Reliability</p>
                  <p className="text-gray-600 mt-1">
                    Lagos same-day dispatch options and nationwide delivery
                    partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Person JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={personJsonLD}
        />
      </section>

      {/* ENHANCED CTA STRIP */}
      <section className="bg-brand-coal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Ready to Protect Your Team?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Join companies who trust Power Safety Boots. Get bulk pricing,
              fast delivery, and unmatched protection.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-white text-brand-coal hover:bg-white/90 font-semibold text-xl px-12 py-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank">
                <FaWhatsapp className="size-6 mr-1" />
                Reach out on WhatsApp{" "}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-brand-gold text-white hover:bg-brand-gold/90 font-semibold text-xl px-12 py-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <a href="/contact">Other Contact Options</a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-6 h-6 text-brand-gold" />
              <span>SONCAP Certified Quality</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6 text-brand-gold" />
              <span>Same-Day Lagos Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Users className="w-6 h-6 text-brand-gold" />
              <span>Bulk & Corporate Orders</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
