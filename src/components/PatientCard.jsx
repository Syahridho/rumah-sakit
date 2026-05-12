import { User, CalendarDays, Phone, Stethoscope, MessageSquare, CheckCircle2, Clock, Trash2, Pencil } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const doctorMap = {
  "nadia@gmail.com": "Dr. Nadia Arifin (Umum)",
  "adrian@gmail.com": "Dr. Adrian Putra (Anak)",
  "lina@gmail.com": "Dr. Lina Santosa (THT)",
  "raditya@gmail.com": "Dr. Raditya Pratama (Kulit)",
  "anita@gmail.com": "Dr. Anita Wijaya (Gigi)",
  "farid@gmail.com": "Dr. Farida Rahayu (Mata)",
  "amanda@gmail.com": "Dr. Amanda Susanto (Jantung)",
  "dian@gmail.com": "Dr. Dian Utami (Psikolog)",
};

const PatientCard = ({ id, name, gender, date, phone, doctor, complaint, isDone, onDelete, onUpdate }) => {
  return (
    <Card id={id} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Color strip top */}
      <div className={`h-1.5 w-full ${isDone ? "bg-emerald-500" : "gradient-primary"}`} />
      <CardContent className="p-5 space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <User className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground text-sm leading-tight">{name}</p>
              <p className="text-xs text-muted-foreground">{gender}</p>
            </div>
          </div>
          <Badge variant={isDone ? "success" : "default"} className="shrink-0">
            {isDone ? <><CheckCircle2 className="w-3 h-3 mr-1" />Selesai</> : <><Clock className="w-3 h-3 mr-1" />Menunggu</>}
          </Badge>
        </div>

        {/* Details */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarDays className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Stethoscope className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="text-xs">{doctorMap[doctor] || doctor}</span>
          </div>
          <div className="flex items-start gap-2 text-muted-foreground">
            <MessageSquare className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
            <span className="text-xs line-clamp-2">{complaint}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          <Button variant="destructive" size="sm" className="flex-1 gap-1.5 text-xs h-8" onClick={onDelete}>
            <Trash2 className="w-3.5 h-3.5" />Hapus
          </Button>
          <Button variant="outline" size="sm" className="flex-1 gap-1.5 text-xs h-8" onClick={onUpdate}>
            <Pencil className="w-3.5 h-3.5" />Update
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientCard;
