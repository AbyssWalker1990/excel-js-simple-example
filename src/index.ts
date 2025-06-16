import ExcelJS from "exceljs";
import { productTrackingList } from "./resources/product-tracking-list";

async function createExcelFile() {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("My Sheet");

  worksheet.columns = [
    {
      header: "ID",
      key: "id",
      width: 35,
      style: { alignment: { horizontal: "center", vertical: "middle" } },
    },
    {
      header: "Number of Packages",
      key: "numberOfPackages",
      width: 10,
      style: { alignment: { horizontal: "center", vertical: "middle" } },
    },
    {
      header: "Net Weight",
      key: "netWeight",
      width: 10,
      style: { alignment: { horizontal: "center", vertical: "middle" } },
    },
    {
      header: "Employee",
      key: "employee",
      width: 30,
      style: { alignment: { horizontal: "center", vertical: "middle" } },
    },
    {
      header: "Nomenclature Product",
      key: "nomenclatureProduct",
      width: 30,
      style: { alignment: { horizontal: "center", vertical: "middle" } },
    },
    {
      header: "Product Grade",
      key: "productGrade",
      width: 20,
      style: { alignment: { horizontal: "center", vertical: "middle" } },
    },
    {
      header: "Packaging Type",
      key: "packagingType",
      width: 30,
      style: { alignment: { horizontal: "center", vertical: "middle" } },
    },
    {
      header: "Farm Location",
      key: "farmLocation",
      width: 20,
      style: { alignment: { horizontal: "center", vertical: "middle" } },
    },
    {
      header: "Measuring Unit",
      key: "measuringUnit",
      width: 15,
      style: { alignment: { horizontal: "center", vertical: "middle" } },
    },
    {
      header: "Status",
      key: "status",
      width: 15,
      style: { alignment: { horizontal: "center", vertical: "middle" } },
    },
    {
      header: "Created At",
      key: "createdAt",
      width: 20,
      style: {
        numFmt: "yyyy-mm-dd hh:mm:ss",
        alignment: { horizontal: "center", vertical: "middle" },
      },
    },
    {
      header: "Updated At",
      key: "updatedAt",
      width: 20,
      style: {
        numFmt: "yyyy-mm-dd hh:mm:ss",
        alignment: { horizontal: "center", vertical: "middle" },
      },
    },
    {
      header: "Amount",
      key: "amount",
      width: 10,
      style: { alignment: { horizontal: "center", vertical: "middle" } },
    },
    {
      header: "Rate",
      key: "rate",
      width: 10,
      style: { alignment: { horizontal: "center", vertical: "middle" } },
    },
  ];

  productTrackingList.forEach((item) => {
    worksheet.addRow(item);
  });

  await workbook.xlsx.writeFile("output.xlsx");
}

createExcelFile();
