const gridContainer = document.querySelector('.container');
const gridTotal = 50;

function drawGrid(gridTotal) {
    let remainder = gridTotal % 4;
    gridTotal = gridTotal + 4 - remainder; /*Cong them de so o luc nay la so chia het cho 4 de
                                            lay chinh xac chieu cao khung container can xac dinh */
    let numberOfRow = gridTotal / 4;
    gridContainer.style.height = `${300 * numberOfRow + numberOfRow * 2}px`;
    gridTotal = gridTotal - (4 - remainder); /*Hoan tra lai gia tri that cho tong so o */
    for (i = 0; i < gridTotal; i++) {
        div = document.createElement('div');
        div.setAttribute('id', 'box');
        gridContainer.appendChild(div);
    }
}

drawGrid(gridTotal);