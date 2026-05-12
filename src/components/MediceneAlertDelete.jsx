import { AlertTriangle, Trash2, X } from "lucide-react";
import { Button } from "./ui/button";

const MediceneAlertDelete = ({ action, cancel }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={cancel}
      />
      {/* Dialog */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 w-80 mx-4 animate-fade-in">
        <button
          className="absolute top-3 right-3 p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
          onClick={cancel}
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col items-center text-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">
            <AlertTriangle className="w-7 h-7 text-red-600" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Hapus Data?</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Data yang dihapus tidak dapat dikembalikan. Apakah Anda yakin?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-5">
          <Button variant="outline" onClick={cancel} className="gap-1.5">
            <X className="w-4 h-4" />Batal
          </Button>
          <Button variant="destructive" onClick={action} className="gap-1.5">
            <Trash2 className="w-4 h-4" />Hapus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MediceneAlertDelete;
