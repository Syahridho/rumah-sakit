import { Pill, Package, Trash2, Pencil } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const MediceneCard = ({ id, title, stock, onDelete, onEdit }) => {
  const stockNum = parseInt(stock, 10);
  const stockStatus =
    isNaN(stockNum) ? "outline"
    : stockNum === 0 ? "destructive"
    : stockNum <= 10 ? "warning"
    : "success";

  const stockLabel =
    stockNum === 0 ? "Habis"
    : stockNum <= 10 ? "Hampir habis"
    : "Tersedia";

  return (
    <Card id={id} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="h-1 w-full gradient-primary" />
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
              <Pill className="w-4 h-4 text-violet-600" />
            </div>
            <div>
              <p className="font-bold text-sm text-foreground leading-tight">{title}</p>
              <div className="flex items-center gap-1 mt-0.5 text-xs text-muted-foreground">
                <Package className="w-3 h-3" />
                Stok: <span className="font-semibold text-foreground">{stock}</span>
              </div>
            </div>
          </div>
          <Badge variant={stockStatus}>{stockLabel}</Badge>
        </div>

        <div className="flex gap-2">
          <Button variant="destructive" size="sm" className="flex-1 gap-1.5 text-xs h-8" onClick={onDelete}>
            <Trash2 className="w-3.5 h-3.5" />Hapus
          </Button>
          <Button variant="outline" size="sm" className="flex-1 gap-1.5 text-xs h-8" onClick={onEdit}>
            <Pencil className="w-3.5 h-3.5" />Edit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MediceneCard;
