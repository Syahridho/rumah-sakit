import { AlertTriangle, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4 animate-fade-in">
        <div className="w-24 h-24 rounded-3xl gradient-primary flex items-center justify-center mx-auto shadow-xl shadow-primary/30">
          <AlertTriangle className="w-12 h-12 text-white" />
        </div>
        <div>
          <h1 className="text-8xl font-extrabold text-gradient">404</h1>
          <p className="text-2xl font-bold text-foreground mt-2">Halaman Tidak Ditemukan</p>
          <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
            Halaman yang Anda cari tidak ada atau telah dipindahkan.
          </p>
        </div>
        <Button size="lg" asChild className="gap-2">
          <Link to="/">
            <Home className="w-5 h-5" />
            Kembali ke Beranda
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
