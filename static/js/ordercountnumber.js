const ordercountnumber = document.querySelector('.order-count-item');
const btnAddList = document.querySelectorAll('.btn-add-text');

let orderCount = 0;

btnAddList.forEach((btnAdd) => {
    btnAdd.addEventListener('click', (event) => {
        const productId = event.target.dataset.id;
        orderCount++;

        ordercountnumber.innerHTML = `<span class="order-count-item">���������� �������� ������� � ����� ������: </span><span class="order-count">${orderCount}</span> `;
    });
});