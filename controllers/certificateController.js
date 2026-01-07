const Certificate = require("../models/Certificate");
const ExcelJS = require("exceljs");
const PDFDocument = require("pdfkit");
const fs = require("fs");

exports.uploadExcel = async (req, res) => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(req.file.path);

  const sheet = workbook.getWorksheet(1);

  sheet.eachRow(async (row, i) => {
    if (i === 1) return;
    await Certificate.create({
      certificateId: row.values[1],
      studentName: row.values[2],
      domain: row.values[3],
      startDate: row.values[4],
      endDate: row.values[5]
    });
  });

  res.json("Certificates Uploaded");
};

exports.searchCertificate = async (req, res) => {
  const cert = await Certificate.findOne({ certificateId: req.params.id });
  res.json(cert);
};

exports.downloadCertificate = async (req, res) => {
  const cert = await Certificate.findOne({ certificateId: req.params.id });

  const doc = new PDFDocument();
  res.setHeader("Content-Type", "application/pdf");

  doc.text("INTERNSHIP CERTIFICATE\n\n");
  doc.text(`Name: ${cert.studentName}`);
  doc.text(`Domain: ${cert.domain}`);
  doc.text(`Duration: ${cert.startDate} - ${cert.endDate}`);

  doc.pipe(res);
  doc.end();
};
