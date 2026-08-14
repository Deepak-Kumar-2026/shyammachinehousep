import { jsPDF } from 'jspdf';
import { Certificate } from '../types';
import { COMPANY_INFO } from '../data/companyData';

export const generateCertificatePDF = (cert: Certificate) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const isGST = cert.id === 'gst-certificate' || cert.category === 'GOVT GST';
  const isMSME = cert.id === 'udyam-msme-certificate' || cert.category === 'GOVT MSME';

  // Background Canvas Style
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Outer Border Frame
  doc.setLineWidth(1);
  doc.setDrawColor(15, 23, 42); // slate-900
  doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

  doc.setLineWidth(0.3);
  doc.setDrawColor(234, 88, 12); // orange-600
  doc.rect(12, 12, pageWidth - 24, pageHeight - 24);

  // Top Header Emblem Banner
  doc.setFillColor(15, 23, 42);
  doc.rect(12, 12, pageWidth - 24, 22, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('GOVERNMENT OF INDIA REGISTRATION CERTIFICATE', pageWidth / 2, 22, { align: 'center' });

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(249, 115, 22);
  doc.text('OFFICIAL VERIFICATION DOCUMENT • SHYAM MACHINE HOUSE', pageWidth / 2, 29, { align: 'center' });

  let curY = 44;

  if (isGST) {
    // GST CERTIFICATE FORM GST REG-06
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(15, 23, 42);
    doc.text('Form GST REG-06', pageWidth / 2, curY, { align: 'center' });

    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139);
    doc.text('[See Rule 10(1)]', pageWidth / 2, curY + 5, { align: 'center' });

    doc.setFontSize(14);
    doc.setTextColor(15, 23, 42);
    doc.text('Registration Certificate', pageWidth / 2, curY + 12, { align: 'center' });

    curY += 22;

    // Reg Number Box
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(20, curY, pageWidth - 40, 14, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(234, 88, 12);
    doc.text(`Registration Number (GSTIN): ${cert.number}`, pageWidth / 2, curY + 9, { align: 'center' });

    curY += 22;

    // Grid details
    const rows = [
      ['1. Legal Name', COMPANY_INFO.legalName],
      ['2. Trade Name, if any', COMPANY_INFO.name],
      ['3. Additional trade names', 'None'],
      ['4. Constitution of Business', 'Partnership'],
      ['5. Address of Principal Place', `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.locality}, ${COMPANY_INFO.address.city} - 110032`],
      ['6. Date of Liability', '24/06/2024'],
      ['7. Period of Validity', 'From 24/06/2024 To Not Applicable'],
      ['8. Type of Registration', 'Regular'],
      ['9. Particulars of Approving', 'Delhi Sales Tax Authority']
    ];

    rows.forEach(([label, val]) => {
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(226, 232, 240);
      doc.rect(20, curY, 50, 10, 'S');
      doc.rect(70, curY, pageWidth - 90, 10, 'S');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(15, 23, 42);
      doc.text(label, 23, curY + 6.5);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 65, 85);
      doc.text(val, 73, curY + 6.5);

      curY += 10;
    });

    curY += 6;

    // Annexure B Partners
    doc.setFillColor(241, 245, 249);
    doc.rect(20, curY, pageWidth - 40, 8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text('Annexure B - Details of Managing / Authorized Partners', 23, curY + 5.5);

    curY += 10;

    const partners = [
      ['1. Partner Name', 'SRISHTY JAIN', 'Designation', 'PARTNER (Delhi)'],
      ['2. Partner Name', 'YASH SHARMA', 'Designation', 'PARTNER (Delhi)']
    ];

    partners.forEach(([p1, n1, d1, v1]) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(15, 23, 42);
      doc.text(`${p1}: ${n1}`, 23, curY + 4);
      doc.text(`${d1}: ${v1}`, 110, curY + 4);
      curY += 8;
    });

    curY += 6;

    // Digital Signature stamp box
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(20, curY, pageWidth - 40, 25, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text('Signature / Digital Verification:', 25, curY + 7);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text('Digitally signed by DS GOODS AND SERVICES TAX NETWORK 07', 25, curY + 13);
    doc.text('Approved Officer: Sarbjit Kaur (Sales Tax Officer Class II / AVATO, Delhi)', 25, curY + 18);
    doc.text('Date of Issue: 24/06/2024', 25, curY + 23);

  } else if (isMSME) {
    // MSME UDYAM REGISTRATION CERTIFICATE
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(15, 23, 42);
    doc.text('UDYAM REGISTRATION CERTIFICATE', pageWidth / 2, curY, { align: 'center' });

    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139);
    doc.text('Ministry of Micro, Small and Medium Enterprises', pageWidth / 2, curY + 5, { align: 'center' });

    curY += 15;

    // Udyam Number Box
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(20, curY, pageWidth - 40, 14, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(234, 88, 12);
    doc.text(`UDYAM REGISTRATION NUMBER: ${cert.number}`, pageWidth / 2, curY + 9, { align: 'center' });

    curY += 22;

    const msmeRows = [
      ['NAME OF ENTERPRISE', COMPANY_INFO.name],
      ['TYPE OF ENTERPRISE', 'MICRO ENTERPRISE (Classification Year: 2024-25)'],
      ['MAJOR ACTIVITY', 'MANUFACTURING & WHOLESALE TRADING'],
      ['NAME OF UNIT(S)', 'SHYAM MACHINE HOUSE'],
      ['OFFICIAL ADDRESS', `${COMPANY_INFO.address.street}, SHAHDARA, DELHI - 110032`],
      ['MOBILE & EMAIL', `Mobile: ${COMPANY_INFO.phone} | Email: ${COMPANY_INFO.email}`],
      ['DATE OF INCORPORATION', '01/05/2024'],
      ['DATE OF COMMENCEMENT', '01/05/2024'],
      ['DATE OF REGISTRATION', '21/02/2025']
    ];

    msmeRows.forEach(([label, val]) => {
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(226, 232, 240);
      doc.rect(20, curY, 60, 10, 'S');
      doc.rect(80, curY, pageWidth - 100, 10, 'S');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(15, 23, 42);
      doc.text(label, 23, curY + 6.5);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      doc.text(val, 83, curY + 6.5);

      curY += 10;
    });

    curY += 6;

    // NIC Codes table
    doc.setFillColor(241, 245, 249);
    doc.rect(20, curY, pageWidth - 40, 8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text('NATIONAL INDUSTRY CLASSIFICATION (NIC CODES)', 23, curY + 5.5);

    curY += 10;

    const nicTable = [
      ['NIC 2 Digit: 28', 'NIC 4 Digit: 2817', 'NIC 5 Digit: 28170 - Manufacture of office machinery', 'Manufacturing'],
      ['NIC 2 Digit: 46', 'NIC 4 Digit: 4659', 'NIC 5 Digit: 46593 - Wholesale of electrical machinery', 'Trading']
    ];

    nicTable.forEach(([n2, n4, n5, act]) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(51, 65, 85);
      doc.text(`${n5} [${act}]`, 23, curY + 4);
      curY += 7;
    });
  }

  // Common Footer Stamp
  doc.setFillColor(15, 23, 42);
  doc.rect(12, pageHeight - 22, pageWidth - 24, 10, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text('SHYAM MACHINE HOUSE • OFFICIAL CERTIFICATE RECORD', pageWidth / 2, pageHeight - 16, { align: 'center' });

  // Save PDF
  doc.save(`${cert.id}_${cert.number}.pdf`);
};
