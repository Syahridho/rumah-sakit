import { Hospital, Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 mt-16">
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
                <Hospital className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">Klinik Sas</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Memberikan pelayanan kesehatan berkualitas dengan dokter berpengalaman dan fasilitas modern.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Layanan</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Dokter Umum", "Spesialis Anak", "THT", "Kulit & Kecantikan", "Jantung", "Psikolog"].map((s) => (
                <li key={s} className="hover:text-primary transition-colors cursor-pointer">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Kontak</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" />+62 812-3456-7890</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" />info@klinik-sas.co.id</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />Jl. Sehat No. 1, Jakarta</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-sm text-muted-foreground">© 2024 Klinik Sas. Semua hak dilindungi.</p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Dibuat dengan <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> untuk kesehatan Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
