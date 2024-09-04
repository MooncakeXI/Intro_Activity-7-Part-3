document.getElementById('addbutton').addEventListener('click', function() {
    var itemName = document.getElementById('itemname-input').value;
    var itemBuyer = document.getElementById('name-to-add').value;
    var itemPrice = document.getElementById('price-to-add').value;

    if(itemName.trim() === "" || itemBuyer === "--เลือกผู้ฝากซื้อ--" || itemPrice.trim() === "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
    }

    var newRow = document.createElement('tr');
    newRow.className = 'item';

    var cell1 = document.createElement('td');
    cell1.textContent = itemName;
    newRow.appendChild(cell1);

    var cell2 = document.createElement('td');
    cell2.textContent = itemBuyer;
    newRow.appendChild(cell2);

    var cell3 = document.createElement('td');
    cell3.textContent = itemPrice;
    newRow.appendChild(cell3);

    var cell4 = document.createElement('td');
    var deleteButton = document.createElement('button');
    deleteButton.className = 'deletebutton';
    deleteButton.textContent = 'ลบ';
    deleteButton.addEventListener('click', function() {
        newRow.remove();
    });
    cell4.appendChild(deleteButton);
    newRow.appendChild(cell4);

    document.querySelector('#itemlist-table tbody').appendChild(newRow);

    document.getElementById('itemname-input').value = '';
    document.getElementById('name-to-add').value = '--เลือกผู้ฝากซื้อ--';
    document.getElementById('price-to-add').value = '';
});

document.addEventListener("DOMContentLoaded", function() {
    const memberList = document.getElementById("member-list");
    const nameSelect = document.getElementById("name-to-add");

    const defaultOption = document.createElement("option");
    defaultOption.textContent = "--เลือกผู้ฝากซื้อ--";
    nameSelect.appendChild(defaultOption);

    const members = memberList.getElementsByTagName("li");

    for (let i = 0; i < members.length; i++) {
        const option = document.createElement("option");
        option.textContent = members[i].textContent;
        nameSelect.appendChild(option);
    }
});

