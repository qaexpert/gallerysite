document.addEventListener("DOMContentLoaded", function() {
        const orderCountItem = document.querySelector(".order-count-item");
        const btnAddList = document.querySelectorAll(".btn-add-text");

        let orderCount = 0;

        btnAddList.forEach((btnAdd) => {
            btnAdd.addEventListener('click', (event) => {
                //const productId = event.target.dataset.id;
                orderCount++;

                orderCountItem.innerHTML = `<span class="order-count-item">Количество товарных позиций в Вашем заказе: </span><span class="order-count">${orderCount}</span> `;
            });
        });
    });