let btnSubmit = document.getElementById('btn-submit');
let carts = [];
let btnPrint = document.getElementById('btn-print');

function submitHandler() {
    let id;
    if(carts.length === 0) {
        id = 1;
    } else {
        id = carts[carts.length - 1].id + 1;
    }
    let barangValue = document.getElementById('barang').value;
    let hargaValue = document.getElementById('harga').value;
    let namaValue = document.getElementById('nama').value;
    let tempObj = {
        id,
        nama: barangValue,
        harga: +hargaValue
    }
    document.getElementById('nama-cart').innerHTML = namaValue;
    carts.push(tempObj);
    getCarts()
    console.log(tempObj);
}

function getCarts() {
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    carts.forEach(cart => {
        tbody.innerHTML += `<tr>
            <td>${cart.id}</td>
            <td>${cart.nama}</td>
            <td>${cart.harga}</td>
        </tr>`
    })
}

function printHandler() {
    document.querySelector('.form-box').style.display = 'none';
    btnPrint.style.display = 'none';
    window.print();
    console.log('tekan print');
}



btnSubmit.addEventListener('click', submitHandler);
btnPrint.addEventListener('click', printHandler);