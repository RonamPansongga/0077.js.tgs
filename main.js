let salesData = [];

const productInput = document.getElementById('product');
const amountInput = document.getElementById('amount');
const salesTable = document.getElementById('sales-table');
const totalAmount = document.getElementById('total-amount');
const salesForm = document.getElementById('sales-form');

function addSale() {
    const product = productInput.value;
    const amount = parseInt(amountInput.value);
    if (product && amount) {
        salesData.push({ product, amount });
        updateSalesTable();
        updateTotal();
        clearForm();
    }
}


function updateSalesTable() {
    salesTable.innerHTML = "";
    salesData.forEach((sale, index) => {
        const row = salesTable.insertRow();
        const productCell = row.insertCell(0);
        const amountCell = row.insertCell(1);
        const deleteCell = row.insertCell(2);

        productCell.innerHTML = sale.product;
        amountCell.innerHTML = sale.amount;
        deleteCell.innerHTML = `<button onclick="deleteSale(${index})">Hapus</button>`;
    });
}


function updateTotal() {
    const total = salesData.reduce((acc, sale) => acc + sale.amount, 0);
    totalAmount.textContent = total;
}


function deleteSale(index) {
    if (confirm("Apakah Anda yakin ingin menghapus penjualan ini?")) {
        salesData.splice(index, 1);
        updateSalesTable();
        updateTotal();
    }
}


function clearForm() {
    productInput.value = "";
    amountInput.value = "";
}


function resetSalesData() {
    salesData = [];
    updateSalesTable();
    updateTotal();
}


salesForm.addEventListener('submit', function (e) {
    e.preventDefault();
    addSale();
});
