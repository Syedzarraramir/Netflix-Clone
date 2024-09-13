document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const productName = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('price').value);
    const date = document.getElementById('date').value;
    
    const total = price; // Assuming total cost is just the price for simplicity
    const amirPay = total * 0.5;
    const saleemPay = total * 0.5;
    
    generatePDFReport(productName, price, date, amirPay, saleemPay);
});

function generatePDFReport(productName, price, date, amirPay, saleemPay) {
    // PDF generation logic (can use libraries like jsPDF)
    // Example: Create a table with the given details and save as PDF
}
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function generatePDFReport(productName, price, date, amirPay, saleemPay) {
    const doc = new jsPDF();
    
    doc.text('Transaction Report', 14, 16);
    
    doc.autoTable({
        head: [['Product Name', 'Price', 'Date', 'Amir Pay', 'Saleem Pay']],
        body: [
            [productName, price.toFixed(2), date, amirPay.toFixed(2), saleemPay.toFixed(2)]
        ],
        startY: 30
    });
    
    doc.save('transaction_report.pdf');
}
