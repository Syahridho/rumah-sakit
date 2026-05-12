import { useState } from "react";
import { registerUserAPI } from "../config/redux/action/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, Hospital, UserPlus, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

const Regis = ({ isLoading, regisAPI }) => {
  const [showPass, setShowPass] = useState(false);
  const [allReady, setAllReady] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const onRegis = async () => {
    setSuccess(false); setAllReady(false); setInvalidEmail(false); setInvalidPassword(false);
    const res = await regisAPI(form).catch((err) => err);
    if (res === true) {
      setForm({ email: "", password: "" });
      setSuccess(true);
    } else if (res === "auth/email-already-in-use") setAllReady(true);
    else if (res === "auth/invalid-email") setInvalidEmail(true);
    else if (res === "auth/weak-password") setInvalidPassword(true);
  };

  const hasError = allReady || invalidEmail || invalidPassword;

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 gradient-primary items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative text-white text-center space-y-6">
          <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mx-auto shadow-lg">
            <Hospital className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold">Bergabung Bersama Kami</h1>
          <p className="text-white/80 max-w-xs text-base leading-relaxed">
            Daftarkan diri Anda dan mulai perjalanan sehat bersama Klinik Sas.
          </p>
          <div className="space-y-3 text-left">
            {["Buat janji dengan mudah", "Pantau status kesehatan", "Akses riwayat berobat"].map((f) => (
              <div key={f} className="flex items-center gap-3 bg-white/15 rounded-xl px-4 py-3">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-10 bg-background">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Hospital className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">Klinik Sas</span>
          </div>

          <Card className="border-0 shadow-xl shadow-black/5">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-2xl text-center">Buat Akun Baru 🎉</CardTitle>
              <CardDescription className="text-center">Daftar gratis dan mulai gunakan layanan kami</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {success && (
                <div className="flex items-center gap-2.5 bg-emerald-50 text-emerald-700 text-sm px-4 py-3 rounded-lg border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  Akun berhasil dibuat! Silakan <Link to="/login" className="font-semibold underline ml-1">masuk</Link>.
                </div>
              )}
              {hasError && (
                <div className="flex items-center gap-2.5 bg-destructive/10 text-destructive text-sm px-4 py-3 rounded-lg">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {allReady && "Email ini sudah terdaftar."}
                  {invalidEmail && "Format email tidak valid."}
                  {invalidPassword && "Password minimal 6 karakter."}
                </div>
              )}

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="nama@email.com"
                    className="pl-10"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPass ? "text" : "password"}
                    placeholder="Minimal 6 karakter"
                    className="pl-10 pr-10"
                    value={form.password}
                    onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">Gunakan minimal 6 karakter</p>
              </div>

              <Button className="w-full gap-2" size="lg" onClick={onRegis} disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Memproses...
                  </span>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />
                    Daftar Sekarang
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Sudah punya akun?{" "}
                <Link to="/login" className="text-primary font-semibold hover:underline">
                  Masuk di sini
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ isLoading: state.isLoading });
const mapDispatchToProps = (dispatch) => ({
  regisAPI: (data) => dispatch(registerUserAPI(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Regis);
