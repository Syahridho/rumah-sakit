import { HeartPulse, Users, Stethoscope, Pill, Phone, MapPin, Mail, ChevronRight, Activity, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  { icon: Stethoscope, title: "Dokter Umum", desc: "Konsultasi penyakit umum dengan dokter berpengalaman", color: "text-blue-600 bg-blue-50" },
  { icon: HeartPulse, title: "Jantung", desc: "Pemeriksaan dan penanganan penyakit jantung", color: "text-red-600 bg-red-50" },
  { icon: Activity, title: "Kulit & Kecantikan", desc: "Perawatan kulit dan masalah dermatologi", color: "text-pink-600 bg-pink-50" },
  { icon: Users, title: "Anak", desc: "Layanan kesehatan khusus untuk anak-anak", color: "text-emerald-600 bg-emerald-50" },
  { icon: Pill, title: "Farmasi", desc: "Obat-obatan berkualitas dan konsultasi farmasi", color: "text-violet-600 bg-violet-50" },
  { icon: Clock, title: "Psikolog", desc: "Layanan kesehatan mental dan konseling", color: "text-amber-600 bg-amber-50" },
];

const Desc = ({ isAdmin, isDoctor }) => {
  const role = isAdmin ? "Admin" : isDoctor ? "Dokter" : "Pengunjung";

  return (
    <section id="desc" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Welcome Banner */}
        <div className="relative overflow-hidden rounded-3xl gradient-primary text-white p-8 md:p-12 mb-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-8 w-40 h-40 rounded-full bg-white blur-2xl" />
            <div className="absolute bottom-4 left-8 w-28 h-28 rounded-full bg-white blur-2xl" />
          </div>
          <div className="relative text-center">
            <p className="text-white/70 text-sm font-medium mb-2 uppercase tracking-widest">Selamat Datang, {role}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              Klinik Sas — Melayani Dengan Hati
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-base leading-relaxed">
              Tempat di mana kesehatan dan pelayanan unggul bertemu. Kami berkomitmen memberikan layanan medis terbaik untuk Anda dan keluarga.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Layanan Kami</p>
          <h2 className="text-3xl font-extrabold text-foreground">Spesialisasi Dokter</h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Tersedia 8 dokter spesialis yang siap melayani kebutuhan kesehatan Anda</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {services.map(({ icon: Icon, title, desc, color }, i) => (
            <Card key={i} className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-foreground mb-1.5">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <div className="flex items-center gap-1 mt-3 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Selengkapnya <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact */}
        <div id="contact" className="bg-muted/50 rounded-3xl p-8 md:p-10">
          <div className="text-center mb-8">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Hubungi Kami</p>
            <h2 className="text-2xl font-extrabold">Informasi Kontak</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Phone, title: "Telepon", val: "+62 812-3456-7890" },
              { icon: Mail, title: "Email", val: "info@klinik-sas.co.id" },
              { icon: MapPin, title: "Alamat", val: "Jl. Sehat No. 1, Jakarta" },
            ].map(({ icon: Icon, title, val }, i) => (
              <div key={i} className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm">
                <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">{title}</p>
                  <p className="font-semibold text-foreground text-sm">{val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Desc;
