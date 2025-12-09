import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default defineNuxtPlugin(() => {
  const exportToExcel = (data, filename = "export") => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    const excelFile = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    saveAs(new Blob([excelFile]), `${filename}.xlsx`);
  };

  return {
    provide: {
      exportExcel: exportToExcel
    }
  };
});
