import { useState } from "react";
import { loginUserAPI } from "../config/redux/action/action";
import { connect } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, Hospital, LogIn, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

const Login = ({ isLoading, loginAPI }) => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [manyRequest, setManyRequest] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const onSubmitHandle = async () => {
    setInvalidEmail(false);
    setInvalidPassword(false);
    setManyRequest(false);
    const res = await loginAPI(form).catch((err) => err);
    if (res === true) {
      setForm({ email: "", password: "" });
      navigate("/");
    } else if (res === "auth/invalid-email") {
      setInvalidEmail(true);
    } else if (res === "auth/invalid-credential") {
      setInvalidPassword(true);
    } else if (res === "auth/too-many-requests") {
      setManyRequest(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSubmitHandle();
  };

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
          <h1 className="text-4xl font-extrabold">Klinik Sas</h1>
          <p className="text-white/80 max-w-xs text-base leading-relaxed">
            Platform manajemen klinik modern untuk pasien, dokter, dan admin.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[["8+", "Dokter"], ["2K+", "Pasien"], ["10+", "Tahun"]].map(([v, l]) => (
              <div key={l} className="bg-white/15 rounded-2xl py-4 px-2">
                <div className="text-2xl font-bold">{v}</div>
                <div className="text-xs text-white/70">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-10 bg-background">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Hospital className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">Klinik Sas</span>
          </div>

          <Card className="border-0 shadow-xl shadow-black/5">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-2xl text-center">Selamat Datang Kembali 👋</CardTitle>
              <CardDescription className="text-center">Masuk ke akun Anda untuk melanjutkan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Error alerts */}
              {(invalidEmail || invalidPassword || manyRequest) && (
                <div className="flex items-center gap-2.5 bg-destructive/10 text-destructive text-sm px-4 py-3 rounded-lg">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {invalidEmail && "Format email tidak valid."}
                  {invalidPassword && "Email atau password salah."}
                  {manyRequest && "Terlalu banyak percobaan, coba lagi nanti."}
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
                    onKeyDown={handleKeyDown}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forget" className="text-xs text-primary hover:underline font-medium">Lupa password?</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPass ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    value={form.password}
                    onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                    onKeyDown={handleKeyDown}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button className="w-full gap-2" size="lg" onClick={onSubmitHandle} disabled={isLoading}>
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
                    <LogIn className="w-4 h-4" />
                    Masuk
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Belum punya akun?{" "}
                <Link to="/regis" className="text-primary font-semibold hover:underline">
                  Daftar sekarang
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
  loginAPI: (data) => dispatch(loginUserAPI(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
