let products = [
    matHang1 = {
        name: 'Mặt Hàng A', donGia: 25000, soLuong: 200, luuTru: ' A'
    },
    matHang2 = {
        name: 'Mặt Hàng B', donGia: 20000, soLuong: 300, luuTru: ' A'
    },
    matHang3 = {
        name: 'Mặt Hàng C', donGia: 18000, soLuong: 80, luuTru: ' B'
    },
    matHang4 = {
        name: 'Mặt Hàng D', donGia: 12000, soLuong: 1200, luuTru: ' C'
    },
    matHang5 = {
        name: 'Mặt Hàng E', donGia: 14000, soLuong: 200, luuTru: ' B'
    },
    matHang6 = {
        name: 'Mặt Hàng F', donGia: 16000, soLuong: 800, luuTru: ' D'
    },
];
let accounts = [
    'nhan vien 1',
    'nhan vien 2',
    'nhan vien 3',
]
let passWords = [
    123,
    456,
    789,
]
let flag;
let phienLamViec;
function drawAddForm() {
    let drawAdd = `<table id="table1">
            <tr >
                <td>Tên:</td>
                <td><input type="text" id="newName"></td>
                <td rowspan="4"><button id="add" onclick="addNewProduct()">Add</button></td>
            </tr>
            <tr>
                <td>Số Lượng:</td>
                <td><input type="text" id="soLuong"></td>
            </tr>
            <tr>
                <td>Đơn Giá:</td>
                <td><input type="text" id="donGia"></td>
            </tr>
            <tr>
                <td>Lưu Kho:</td>
                <td><input type="text" id="luuKho"></td>
            </tr>
            
            
        </table>`;
    document.getElementById('divForm').innerHTML = drawAdd;
}


function drawDivLogin() {
    let divLogin = `<div id="logOut">
            <h3 style="color: red ">phiên làm việc của :</h3> <h2>${phienLamViec}</h2>
            <button id="dangXuat" onclick="dangXuat()">Đăng xuất</button>
        </div>`;
    document.getElementById('divLogin').innerHTML = divLogin;
}
function dangXuat() {
    let xacNhan = confirm('bạn có chắc chắn muốn đăng xuất ???');
    if(xacNhan) {
        let dangNhap =`    <div class="divCon" id="divTieuDe">
        <h2>ỨNG DỤNG QUẢN LÝ SẢN PHẨM</h2>
    </div>

    <div class="divCon" id="divLogin">
        <input type="text" id="account" placeholder="account name">
        <input type="text" id="password" placeholder="password">
        <input type="button" id="nut1" onclick="kiemTra()"onmouseover="mouseOver1()" onmouseout="mouseOut1()"
               value="Log In" ></div>
        <div class="divCon" id="divForm" ></div><div class="divCon" id="drawFormAddButton"></div>
        <div class="divCon" id="drawFormEditButton"></div><div id="divTable" class="divCon"></div>`;
        document.getElementById('divTong').innerHTML = dangNhap;
    }
    return;
}
function drawAddButton() {
    let addButton = `<input type="button" id="nut1" onclick="drawAddForm()" value="Add Product"
               onmouseover="mouseOver1()" onmouseout="mouseOut1()" >`;
    document.getElementById('drawFormAddButton').innerHTML = addButton;
}

function drawEditForm(index) {
    flag = index;
    let doiTuong1 = `Tên: ${products[index].name}   `
    let doiTuong2 = `Số lượng: ${products[index].soLuong}   (chiếc)`
    let doiTuong3 = `Đơn giá: ${products[index].donGia}    vnd`
    let doiTuong4 = `Kho: ${products[index].luuTru}    `

    let drawAdd = `<table id="table2">
            <tr>
                <td >Sản phẩm cũ:</td>
                <td >
                    <input type="text" id="oldName">
                    <input type="text" id="oldSoLuong">
                    <input type="text" id="oldDonGia">
                    <input type="text" id="oldLuuTru">
                </td>
                <td></td>
            </tr>
            <tr >
                <td>Tên (new):</td>
                <td><input type="text" id="editName"></td>
                <td colspan="4"><button id="accept" onclick="editedProduct()">Accept</button></td>
            </tr>
            <tr>
                <td>Số Lượng (new):</td>
                <td><input type="text" id="editSoLuong"></td>
                
            </tr>
            <tr>
                <td>Đơn Giá (new):</td>
                <td><input type="text" id="editDonGia"></td>
                
            </tr>
            <tr>
                <td>Lưu Kho (new):</td>
                <td><input type="text" id="editLuuKho"></td>
                
            </tr>
            </table>`;
    document.getElementById('divForm').innerHTML = drawAdd;
    document.getElementById('oldName').value = doiTuong1;
    document.getElementById('oldSoLuong').value = doiTuong2;
    document.getElementById('oldDonGia').value = doiTuong3;
    document.getElementById('oldLuuTru').value = doiTuong4;
}

function showAllProduct() {
    let table = `<table id="table1"><tr><td style="color: red" colspan="2"><b>Product Name</b></td>
    <td style="color: red; text-align: right" colspan="3"><b>${products.length} products</b></td></tr>`;
    for (let i = 0; i < products.length; i++) {
        table += `<tr><td colspan="3">${i + 1}. ${products[i].name}</td>
        <td><button  onclick="drawEditForm(${i})">Edit</button></td>
        <td><button onclick="deleteProduct(${i})">Delete</button></td></tr>`;
    }
    table += '</table>';
    document.getElementById('divTable').innerHTML = table;
}

function kiemTra() {
        let account = document.getElementById('account').value;
        let passWord = document.getElementById('password').value;
        flag = true;
        if (account == '' && passWord == '') {
            alert('Vui lòng điền vào đầy đủ thông tin !!!')
        } else {
            for (let i = 0; i < accounts.length; i++) {
                if (account == accounts[i]) {
                    phienLamViec = accounts[i];
                    flag = false;
                    checkPass(account);
                    document.getElementById('account').value = '';
                    document.getElementById('password').value = '';
                }
            }
            if (flag) {
                xacNhan = confirm('Bạn không phải là nhân viên,' +
                    'bạn có muốn đăng nhập lại không ???')
                if (xacNhan) {
                    document.getElementById('account').value = '';
                    document.getElementById('password').value = '';
                } else {
                    alert('Tạm biệt !!!');
                    document.getElementById('account').value = '';
                    document.getElementById('password').value = '';
                }
            }
        }
}

function checkPass(account) {
    let passWord = document.getElementById('password').value;
    switch (account) {
        case 'nhan vien 1':
            if (passWord == passWords[0]) {
                alert('Xin chào: ' + account);
                drawAddButton();
                // drawEditButton();
                drawDivLogin();
                showAllProduct();
            } else alert('bạn không phải là nhân viên');
            break;
        case 'nhan vien 2':
            if (passWord == passWords[1]) {
                alert('Xin chào: ' + account);
                drawAddButton();
                // drawEditButton();
                drawDivLogin();
                showAllProduct();
            } else alert('bạn không phải là nhân viên');
            break;
        case 'nhan vien 3':
            if (passWord == passWords[2]) {
                alert('Xin chào: ' + account);
                drawAddButton();
                // drawEditButton();
                drawDivLogin();
                showAllProduct();
            } else alert('bạn không phải là nhân viên');
            break;
        default:
            let xacNhan = confirm('Bạn không phải là nhân  viên, bạn có muốn đăng nhập lại không ? ');
            if (xacNhan) {
                alert('Bạn hãy nhập cẩn thận nhé !!!');
                document.getElementById('account').value = '';
                document.getElementById('password').value = '';
            } else {
                alert('Tạm biệt !!!');
                document.getElementById('account').value = '';
                document.getElementById('password').value = '';
            }

    }
}

function addNewProduct() {
    let sanPhamMoi = {name: '', donGia: '', soLuong: '', luuKho: ''}
    let addName = document.getElementById('newName').value;
    let addDonGia = document.getElementById('donGia').value;
    let addSoLuong = document.getElementById('soLuong').value;
    let addLuuKho = document.getElementById('luuKho').value;
    if (addName == '' || addDonGia == '' || addSoLuong == '' || addLuuKho == '') {
        alert('Vui lòng nhập đầy đủ dữ liệu !!!')
    } else {
        sanPhamMoi.name = addName;
        sanPhamMoi.donGia = addDonGia;
        sanPhamMoi.soLuong = addSoLuong;
        sanPhamMoi.luuKho = addLuuKho;
        products.push(sanPhamMoi);
        document.getElementById('newName').value = '';
        document.getElementById('soLuong').value = '';
        document.getElementById('donGia').value = '';
        document.getElementById('luuKho').value = '';
        showAllProduct();
        alert(`Đã thêm ${sanPhamMoi} vào danh sách`)
    }
}

function deleteProduct(index) {
    let answer = confirm('Bạn có muốn xóa không ? ');
    let tenBiXoa = products[index].name;
    if (answer) {
        let deletedProduct = products.splice(index, 1);
        showAllProduct();
        alert(`Đã xóa ${tenBiXoa} !!! `)
    } else {
        alert('Sản phẩm vẫn chưa được xóa !!!')
    }
}

function editProduct(index) {
    flag = index;
    let productDataArr = Object.values(products[index]);
    document.getElementById('editProduct').value = productDataArr;
}

function editedProduct() {
    let sanPham = {name: '', donGia: '', soLuong: '', luuKho: ''}
    let editName = document.getElementById('editName').value;
    let editDonGia = document.getElementById('editDonGia').value;
    let editSoLuong = document.getElementById('editSoLuong').value;
    let editLuuKho = document.getElementById('editLuuKho').value;
    let sanPhamCu = products[flag].name;
    if (editName == '' || editDonGia == '' || editSoLuong == '' || editLuuKho == '') {
        alert('Vui lòng nhập đầy đủ dữ liệu !!!')
    } else {
        sanPham.name = editName;
        sanPham.donGia = editDonGia;
        sanPham.soLuong = editSoLuong;
        sanPham.luuKho = editLuuKho;
        products.splice(flag,1,sanPham);
        document.getElementById('editName').value = '';
        document.getElementById('editDonGia').value = '';
        document.getElementById('editSoLuong').value = '';
        document.getElementById('editLuuKho').value = '';
        showAllProduct();
        alert(`Đã thay đổi thông tin sản phẩm  ${sanPhamCu}`)
    }
}

function mouseOver1() {
    document.getElementById('nut1').style.backgroundColor = 'red';
}

function mouseOut1() {
    document.getElementById('nut1').style.backgroundColor = '#0e8c1b';
}

