import { Pill, Plus, Save, X, Package, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const MediceneInput = ({
  title, stock, titleChange, stockChange,
  addMedicene, updateMedicene, isUpdate, cancelUpdate,
}) => {
  return (
    <div className="flex justify-center px-4 mb-8">
      <Card className="w-full max-w-lg border-0 shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Pill className="w-4 h-4 text-white" />
            </div>
            {isUpdate ? "Edit Data Obat" : "Tambah Obat Baru"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="med-title">Nama Obat</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="med-title"
                  type="text"
                  placeholder="Nama obat..."
                  className="pl-10"
                  value={title}
                  onChange={titleChange}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="med-stock">Stok Obat</Label>
              <div className="relative">
                <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="med-stock"
                  type="number"
                  placeholder="Jumlah stok..."
                  className="pl-10"
                  value={stock}
                  onChange={stockChange}
                  min="0"
                />
              </div>
            </div>
          </div>

          {isUpdate ? (
            <div className="flex gap-3">
              <Button className="flex-1 gap-2" onClick={updateMedicene}>
                <Save className="w-4 h-4" />Simpan Perubahan
              </Button>
              <Button variant="outline" className="flex-1 gap-2" onClick={cancelUpdate}>
                <X className="w-4 h-4" />Batalkan
              </Button>
            </div>
          ) : (
            <Button className="w-full gap-2" onClick={addMedicene}>
              <Plus className="w-4 h-4" />Tambah Obat
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MediceneInput;
