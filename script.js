const gridContainer = document.querySelector('.container');
const skins = document.querySelector('.skins');
const champions = document.querySelector('.champions');
let gridTotal = 20;

//Ham nay de ve cac o chua cac tuong hoac trang phuc
function drawGrid(gridTotal, championOrSkin) {
    let remainder = gridTotal % 4;
    if (remainder != 0)
        gridTotal = gridTotal + 4 - remainder; /*Cong them de so o luc nay la so chia het cho 4 de
                                            lay chinh xac chieu cao khung container can xac dinh */
    let numberOfRow = gridTotal / 4;
    gridContainer.style.height = `${300 * numberOfRow + numberOfRow * 2}px`;
    if (remainder != 0)
        gridTotal = gridTotal - (4 - remainder); /*Hoan tra lai gia tri that cho tong so o */
    for (i = 0; i < gridTotal; i++) {
        div = document.createElement('div');
        div.setAttribute('id', 'box');
        gridContainer.appendChild(div);
    }

    let img = new Array(gridTotal);
    for (i = 0; i < gridTotal; i++) {
        img[i] = new Image();
        img[i].src = 'Images/' + `${championOrSkin}` + '/image' + `${i+1}` + '.jpg';
        img[i].style.height = '100%';
        img[i].style.width = '100%';
    }
    const grid = document.querySelectorAll('#box');
    for (i = 0; i < grid.length; i++) {
        grid[i].appendChild(img[i]);
        rpTable = document.createElement("button");
        rpTable.setAttribute('id', 'costRPTable');

        imgRP = document.createElement("img");
        imgRP.src = 'Images/RPIcon.png';
        imgRP.setAttribute('id', 'image');

        rpTable.appendChild(imgRP);

        costRP = document.createElement('div');
        costRP.setAttribute('id', 'cost');
        costRP.textContent = '99';

        rpTable.appendChild(costRP);

        ipTable = document.createElement("button");
        ipTable.setAttribute('id', 'costIPTable');

        imgIP = document.createElement("img");
        imgIP.src = 'Images/IPIcon.png';
        imgIP.setAttribute('id', 'image');

        ipTable.appendChild(imgIP);

        costIP = document.createElement('div');
        costIP.setAttribute('id', 'cost');
        costIP.textContent = '200';

        ipTable.appendChild(costIP);

        div = document.createElement('div');
        div.setAttribute('id', 'costTable');
        div.appendChild(rpTable);
        div.appendChild(ipTable);

        grid[i].appendChild(div);
    }
}

//Xoa cac o chua cac tuong hoac trang phuc
function deleteGrid() {
    let boxes = document.querySelectorAll('#box');
    boxes.forEach((box) => {
        box.parentNode.removeChild(box);
    })
}

function drawChampions() {
    gridTotal = 20;
    drawGrid(gridTotal, "champions");
}

function drawSkins() {
    gridTotal = 46;
    drawGrid(gridTotal, "skins");
}

skins.addEventListener('click', ()=> {
    deleteGrid();
    drawSkins();
    skins.style.opacity = "0.5";
    champions.style.opacity = "1";
})

champions.addEventListener('click', ()=> {
    deleteGrid();
    drawChampions();
    champions.style.opacity = "0.5";
    skins.style.opacity = "1";
})

champions.style.opacity = "0.5";
drawChampions();