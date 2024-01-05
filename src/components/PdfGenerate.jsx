import { FaRegFilePdf } from "react-icons/fa6";
import jsPDF from "jspdf";

const PdfGenerate = ({ data }) => {
  const pdfGenerate = (data) => {
    console.log("Pdf", data);
    var doc = new jsPDF("portrait", "px", [320, 400], "false");

    doc.setFont("times", "bold");
    doc.setFontSize(24);
    doc.text("Klinik SAS", 30, 25);
    doc.setFont("times", "bold");
    doc.setFontSize(12);
    doc.text("Jl.Apel No.5", 30, 38);

    doc.line(30, 44, 290, 44);
    doc.line(30, 46, 290, 46);
    const imgData = "./public/icons.png";
    doc.addImage(imgData, "PNG", 250, 0, 40, 40);

    doc.setFont("times", "normal");
    doc.setFontSize(14);

    doc.text(`Tanggal`, 30, 70);
    doc.text(`Jam`, 30, 90);
    doc.text("Nama", 30, 110);
    doc.text("Email", 30, 130);
    doc.text("Keluhan", 30, 150);
    doc.text("Dokter", 30, 170);
    doc.text("Obat", 30, 190);

    doc.text(`: ${formatDate(new Date())}`, 100, 70);
    doc.text(`: ${formatHour(new Date())}`, 100, 90);
    doc.text(`: ${data.data.name}`, 100, 110);
    doc.text(`: ${data.data.email}`, 100, 130);
    doc.text(`: ${data.data.complaints}`, 100, 150);
    doc.text(
      `: ${
        data.data.doctor === "nadia@gmail.com"
          ? "Dr. Nadia Arifin (Umum)"
          : data.data.doctor === "adrian@gmail.com"
          ? "Dr. Adrian Putra (Anak)"
          : data.data.doctor === "lina@gmail.com"
          ? "Dr. Lina Santosa (THT)"
          : data.data.doctor === "raditya@gmail.com"
          ? "Dr. Raditya Pratama (Kulit)"
          : data.data.doctor === "anita@gmail.com"
          ? "Dr. Anita Wijaya (Gigi)"
          : data.data.doctor === "farid@gmail.com"
          ? "Dr. Farida Rahayu (Mata)"
          : data.data.doctor === "amanda@gmail.com"
          ? "Dr. Amanda Susanto (Jantung)"
          : data.data.doctor === "dian@gmail.com"
          ? "Dr. Dian Utami (Psikolog)"
          : "Dokter"
      }`,
      100,
      170
    );
    doc.text(`:`, 100, 190);
    let yOffset = 190;

    if (Array.isArray(data.data.medicene) && data.data.medicene.length > 0) {
      for (const medic of data.data.medicene) {
        const medicineText = `${medic.title} ${medic.qty}x`;
        doc.text(`- ${medicineText}`, 105, yOffset);
        yOffset += 15;
      }
    }

    doc.text(
      `${
        data.data.doctor === "nadia@gmail.com"
          ? "Dr. Nadia Arifin"
          : data.data.doctor === "adrian@gmail.com"
          ? "Dr. Adrian Putra"
          : data.data.doctor === "lina@gmail.com"
          ? "Dr. Lina Santosa"
          : data.data.doctor === "raditya@gmail.com"
          ? "Dr. Raditya Pratama"
          : data.data.doctor === "anita@gmail.com"
          ? "Dr. Anita Wijaya"
          : data.data.doctor === "farid@gmail.com"
          ? "Dr. Farida Rahayu"
          : data.data.doctor === "amanda@gmail.com"
          ? "Dr. Amanda Susanto"
          : data.data.doctor === "dian@gmail.com"
          ? "Dr. Dian Utami"
          : "Dokter"
      }`,
      190,
      360
    );

    doc.save("bon.pdf");
  };

  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  };

  const formatHour = (date) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleTimeString("id-ID", options);
  };
  return (
    <button onClick={() => pdfGenerate(data)}>
      <FaRegFilePdf />
    </button>
  );
};

export default PdfGenerate;
