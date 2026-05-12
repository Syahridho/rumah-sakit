import { useEffect, useState } from "react";
import { Menu, X, Hospital, LogIn, LogOut, UserPlus, LayoutDashboard, Users, Pill, Stethoscope } from "lucide-react";
import { signOutAPI, checkLogin } from "../config/redux/action/action";
import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = ({ isLoading, isLogin, isAdmin, isDoctor, checkLogin, signOut }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem("dataUser"));
    checkLogin(userLocal);

    const handleResize = () => {
      if (window.innerWidth >= 768) setNavOpen(false);
    };
    const handleScroll = () => setScrolled(window.scrollY > 10);

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onHandleSignOut = async () => {
    const res = await signOut().catch((e) => e);
    if (res === true) navigate("/");
  };

  const navLinkClass = ({ isActive }) =>
    cn(
      "flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200",
      isActive
        ? "bg-primary/10 text-primary"
        : "text-foreground/70 hover:text-foreground hover:bg-muted"
    );

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass shadow-lg shadow-black/5" : "bg-white/95 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-md shadow-primary/30 group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-200">
              <Hospital className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">Klinik Sas</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {isAdmin ? (
              <>
                <NavLink to="/" className={navLinkClass}><LayoutDashboard className="w-4 h-4" />Beranda</NavLink>
                <NavLink to="/data-pasien" className={navLinkClass}><Users className="w-4 h-4" />Data Pasien</NavLink>
                <NavLink to="/data-obat" className={navLinkClass}><Pill className="w-4 h-4" />Data Obat</NavLink>
              </>
            ) : isDoctor ? (
              <>
                <NavLink to="/" className={navLinkClass}><LayoutDashboard className="w-4 h-4" />Beranda</NavLink>
                <NavLink to="/data-pasien-dokter" className={navLinkClass}><Stethoscope className="w-4 h-4" />Pasien Dokter</NavLink>
              </>
            ) : (
              <>
                <a href="#home" className={cn("flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 text-foreground/70 hover:text-foreground hover:bg-muted")}>Beranda</a>
                <a href="#desc" className={cn("flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 text-foreground/70 hover:text-foreground hover:bg-muted")}>Tentang</a>
                <a href="#contact" className={cn("flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 text-foreground/70 hover:text-foreground hover:bg-muted")}>Kontak</a>
              </>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            {isLogin ? (
              <Button
                variant="outline"
                size="sm"
                onClick={onHandleSignOut}
                disabled={isLoading}
                className="gap-2"
              >
                <LogOut className="w-4 h-4" />
                Keluar
              </Button>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => navigate("/login")} className="gap-2">
                  <LogIn className="w-4 h-4" />
                  Masuk
                </Button>
                <Button size="sm" onClick={() => navigate("/regis")} className="gap-2">
                  <UserPlus className="w-4 h-4" />
                  Daftar
                </Button>
              </>
            )}
          </div>

          {/* Mobile Burger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-1 animate-fade-in">
            {isAdmin ? (
              <>
                <NavLink to="/" className={navLinkClass} onClick={() => setNavOpen(false)}><LayoutDashboard className="w-4 h-4" />Beranda</NavLink>
                <NavLink to="/data-pasien" className={navLinkClass} onClick={() => setNavOpen(false)}><Users className="w-4 h-4" />Data Pasien</NavLink>
                <NavLink to="/data-obat" className={navLinkClass} onClick={() => setNavOpen(false)}><Pill className="w-4 h-4" />Data Obat</NavLink>
              </>
            ) : isDoctor ? (
              <>
                <NavLink to="/" className={navLinkClass} onClick={() => setNavOpen(false)}><LayoutDashboard className="w-4 h-4" />Beranda</NavLink>
                <NavLink to="/data-pasien-dokter" className={navLinkClass} onClick={() => setNavOpen(false)}><Stethoscope className="w-4 h-4" />Pasien Dokter</NavLink>
              </>
            ) : (
              <>
                <a href="#home" className="flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-muted" onClick={() => setNavOpen(false)}>Beranda</a>
                <a href="#desc" className="flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-muted" onClick={() => setNavOpen(false)}>Tentang</a>
                <a href="#contact" className="flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-muted" onClick={() => setNavOpen(false)}>Kontak</a>
              </>
            )}
            <div className="pt-3 border-t border-border flex gap-2">
              {isLogin ? (
                <Button variant="outline" size="sm" onClick={onHandleSignOut} disabled={isLoading} className="w-full gap-2">
                  <LogOut className="w-4 h-4" />Keluar
                </Button>
              ) : (
                <>
                  <Button variant="outline" size="sm" onClick={() => { navigate("/login"); setNavOpen(false); }} className="flex-1 gap-2">
                    <LogIn className="w-4 h-4" />Masuk
                  </Button>
                  <Button size="sm" onClick={() => { navigate("/regis"); setNavOpen(false); }} className="flex-1 gap-2">
                    <UserPlus className="w-4 h-4" />Daftar
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  isLogin: state.isLogin,
  isAdmin: state.isAdmin,
  isDoctor: state.isDoctor,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
  checkLogin: (user) => dispatch(checkLogin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
