import { CheckCircle2, FileDown, Clock, Pill } from "lucide-react";
import PdfGenerate from "./PdfGenerate";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const VisitorCard = ({ id, name, date, onDelete, isDone, medicene, data }) => {
  if (isDone) {
    return (
      <Card id={id} className="border-0 shadow-md overflow-hidden">
        <div className="h-1.5 w-full bg-emerald-500" />
        <CardContent className="p-5 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="font-bold text-sm">{name}</p>
              <Badge variant="success" className="mt-0.5">Pemeriksaan Selesai</Badge>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">🎉 Semoga cepat pulih!</p>

          {Array.isArray(medicene) && medicene.length > 0 && (
            <div className="bg-muted/50 rounded-xl p-3 space-y-1.5">
              <p className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                <Pill className="w-3.5 h-3.5 text-primary" />Obat yang Diberikan:
              </p>
              <ul className="space-y-1">
                {medicene.map((m) => (
                  <li key={m.id} className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {m.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <PdfGenerate data={data} icons="true" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card id={id} className="border-0 shadow-md overflow-hidden">
      <div className="h-1.5 w-full gradient-primary" />
      <CardContent className="p-5 space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="font-bold text-sm">{name}</p>
            <Badge variant="default" className="mt-0.5">Menunggu Giliran</Badge>
          </div>
        </div>

        <div className="text-sm text-muted-foreground space-y-1">
          <p>📅 Janji pada: <span className="font-medium text-foreground">{date}</span></p>
          <p className="text-xs">Jangan lupa datang tepat waktu ya!</p>
        </div>

        <Button
          variant="destructive"
          size="sm"
          className="w-full gap-2"
          onClick={() => onDelete(id)}
        >
          Batalkan Janji
        </Button>
      </CardContent>
    </Card>
  );
};

export default VisitorCard;
