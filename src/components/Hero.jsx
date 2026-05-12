import { CalendarCheck, ArrowRight, Star, Shield, Clock } from "lucide-react";
import { Button } from "./ui/button";
import hero from "./../assets/hero.png";

const stats = [
  { label: "Dokter Spesialis", value: "8+" },
  { label: "Pasien Terlayani", value: "2K+" },
  { label: "Tahun Pengalaman", value: "10+" },
];

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/60 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
              <Star className="w-3.5 h-3.5 fill-primary" />
              Klinik Terpercaya #1 di Kota
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Kesehatan Anda,{" "}
              <span className="text-gradient">Prioritas Kami</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Buat janji dengan dokter spesialis pilihan Anda kapan saja dan di mana saja. Layanan kesehatan modern untuk keluarga Indonesia.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Button size="lg" asChild className="gap-2 shadow-lg shadow-primary/30">
                <a href="#desc">
                  <CalendarCheck className="w-5 h-5" />
                  Buat Janji Sekarang
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild className="gap-2 text-primary">
                <a href="#desc">
                  Pelajari Lebih
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-6 pt-4">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-gradient">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: Shield, text: "Dokter Bersertifikat" },
                { icon: Clock, text: "Layanan 24/7" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
                  <Icon className="w-3.5 h-3.5 text-primary" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center relative">
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/40 rounded-full blur-2xl scale-110" />
              <img
                src={hero}
                alt="Dokter Klinik Sas"
                className="relative w-72 h-auto md:w-96 drop-shadow-2xl animate-fade-in"
              />
              {/* Floating card */}
              <div className="absolute -bottom-4 -left-8 glass rounded-2xl px-4 py-3 shadow-xl animate-fade-in hidden md:block">
                <p className="text-xs text-muted-foreground">Pasien Hari Ini</p>
                <p className="text-2xl font-bold text-primary">24+</p>
              </div>
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-xl animate-fade-in hidden md:block">
                <p className="text-xs text-muted-foreground">Rating Klinik</p>
                <p className="text-2xl font-bold text-amber-500">4.9 ⭐</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
