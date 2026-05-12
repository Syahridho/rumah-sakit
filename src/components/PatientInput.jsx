import { User, Phone, CalendarDays, Stethoscope, MessageSquare, Users, ChevronDown, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const doctors = [
  { value: "nadia@gmail.com", label: "Dr. Nadia Arifin — Umum" },
  { value: "adrian@gmail.com", label: "Dr. Adrian Putra — Anak" },
  { value: "lina@gmail.com", label: "Dr. Lina Santosa — THT" },
  { value: "raditya@gmail.com", label: "Dr. Raditya Pratama — Kulit" },
  { value: "anita@gmail.com", label: "Dr. Anita Wijaya — Gigi" },
  { value: "farida@gmail.com", label: "Dr. Farida Rahayu — Mata" },
  { value: "amanda@gmail.com", label: "Dr. Amanda Susanto — Jantung" },
  { value: "dian@gmail.com", label: "Dr. Dian Utami — Psikolog" },
];

const PatientInput = ({
  name, gender, date, phone, doctor, complaints,
  onChange, onSubmit, onUpdate, isUpdate, onCancel, alertLogin,
}) => {
  return (
    <div className="flex justify-center px-4">
      <Card className="w-full max-w-lg border-0 shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Stethoscope className="w-4 h-4 text-white" />
            </div>
            {isUpdate ? "Edit Data Janji" : "Buat Janji Baru"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {alertLogin && (
            <div className="flex items-center gap-2 bg-destructive/10 text-destructive text-sm px-4 py-3 rounded-lg">
              <AlertCircle className="w-4 h-4 shrink-0" />
              Anda harus login terlebih dahulu untuk membuat janji.
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Nama */}
            <div className="sm:col-span-2 space-y-1.5">
              <Label htmlFor="name">Nama Pasien</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="name" type="text" placeholder="Nama lengkap"
                  className="pl-10"
                  value={name}
                  onChange={(e) => onChange(e, "name")}
                />
              </div>
            </div>

            {/* Gender */}
            <div className="space-y-1.5">
              <Label htmlFor="gender">Jenis Kelamin</Label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none z-10" />
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none z-10" />
                <Select
                  id="gender" value={gender}
                  onChange={(e) => onChange(e, "gender")}
                  className="pl-10"
                >
                  <option value="Laki-Laki">Laki-Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </Select>
              </div>
            </div>

            {/* Tanggal */}
            <div className="space-y-1.5">
              <Label htmlFor="date">Tanggal Janji</Label>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  id="date" type="date"
                  className="pl-10"
                  value={date}
                  onChange={(e) => onChange(e, "date")}
                />
              </div>
            </div>

            {/* No HP */}
            <div className="space-y-1.5">
              <Label htmlFor="phone">No. HP</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="phone" type="text" placeholder="+628..."
                  className="pl-10"
                  value={phone}
                  onChange={(e) => onChange(e, "phone")}
                />
              </div>
            </div>

            {/* Dokter */}
            <div className="space-y-1.5">
              <Label htmlFor="doctor">Pilih Dokter</Label>
              <div className="relative">
                <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none z-10" />
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none z-10" />
                <Select
                  id="doctor" value={doctor}
                  onChange={(e) => onChange(e, "doctor")}
                  className="pl-10"
                >
                  {doctors.map((d) => (
                    <option key={d.value} value={d.value}>{d.label}</option>
                  ))}
                </Select>
              </div>
            </div>

            {/* Keluhan */}
            <div className="sm:col-span-2 space-y-1.5">
              <Label htmlFor="complaints">Keluhan</Label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Textarea
                  id="complaints"
                  placeholder="Ceritakan keluhan Anda..."
                  className="pl-10 min-h-[100px]"
                  value={complaints}
                  onChange={(e) => onChange(e, "complaints")}
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          {isUpdate ? (
            <div className="flex gap-3 pt-2">
              <Button className="flex-1" onClick={onUpdate}>Simpan Perubahan</Button>
              <Button variant="outline" className="flex-1" onClick={onCancel}>Batalkan</Button>
            </div>
          ) : (
            <Button className="w-full gap-2 mt-2" onClick={onSubmit}>
              <CalendarDays className="w-4 h-4" />
              Buat Janji
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientInput;
