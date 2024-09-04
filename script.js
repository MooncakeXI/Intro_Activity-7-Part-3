document.addEventListener("DOMContentLoaded", () => {
    const names = ["สุวิจักขณ์ ภู่ภักดีพันธ์","ญาดา โพนไสว","พัชรพล ศรีสุวรรณ์","พศิน เพชรฤาชัย"];

    const memberList = document.getElementById("member-list");
    names.forEach(name => {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        memberList.appendChild(listItem);
    });

    const selectElement = document.getElementById("name-to-add");

    const defaultOption = document.createElement("option");
    defaultOption.textContent = "--เลือกผู้ฝากซื้อ--";
    defaultOption.value = "--เลือกผู้ฝากซื้อ--";
    selectElement.appendChild(defaultOption);

    names.forEach(name => {
        const option = document.createElement("option");
        option.textContent = name;
        option.value = name;
        selectElement.appendChild(option);
    });

    document.getElementById('addbutton').addEventListener('click', function() {
        const itemName = document.getElementById('itemname-input').value;
        const itemBuyer = document.getElementById('name-to-add').value;
        const itemPrice = document.getElementById('price-to-add').value;

        if (itemName.trim() === "" || itemBuyer === "--เลือกผู้ฝากซื้อ--" || itemPrice.trim() === "") {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน");
            return;
        }

        const newRow = document.createElement('tr');
        newRow.className = 'item';

        const cell1 = document.createElement('td');
        cell1.textContent = itemName;
        newRow.appendChild(cell1);

        const cell2 = document.createElement('td');
        cell2.textContent = itemBuyer;
        newRow.appendChild(cell2);

        const cell3 = document.createElement('td');
        cell3.textContent = itemPrice;
        newRow.appendChild(cell3);

        const cell4 = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.className = 'deletebutton';
        deleteButton.textContent = 'ลบ';
        deleteButton.addEventListener('click', function() {
            newRow.remove();
        });
        cell4.appendChild(deleteButton);
        newRow.appendChild(cell4);

        document.querySelector('#itemlist-table tbody').appendChild(newRow);

        document.getElementById('name-to-add').value = '--เลือกผู้ฝากซื้อ--';
        document.getElementById('itemname-input').value = '';
        document.getElementById('price-to-add').value = '';
    });
});
