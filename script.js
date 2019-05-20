const gridContainer = document.querySelector('.container');
const skins = document.querySelector('.skins');
const champions = document.querySelector('.champions');
const history = document.querySelector('.history');
const pay = document.querySelector('.pay');
let gridTotal = 20;
let flagHis = 0; //kiem tra xem da ve bang lich su hay chua
let flagPay = 0; //kiem tra xem da ve bang thanh toan hay chua

//Ham nay de ve cac o chua cac tuong hoac trang phuc
function drawGridCAS(gridTotal, championOrSkin) {
    gridContainer.style.flexWrap = "wrap";
    let remainder = gridTotal % 5;
    if (remainder != 0)
        gridTotal = gridTotal + 5 - remainder; /*Cong them de so o luc nay la so chia het cho 4 de
                                            lay chinh xac chieu cao khung container can xac dinh */
    let numberOfRow = gridTotal / 5;
    gridContainer.style.height = `${300 * numberOfRow + numberOfRow * 20}px`;
    if (remainder != 0)
        gridTotal = gridTotal - (5 - remainder); /*Hoan tra lai gia tri that cho tong so o */
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
        costIP.textContent = '6300';

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
    drawGridCAS(gridTotal, "champions");
}

function drawSkins() {
    gridTotal = 46;
    drawGridCAS(gridTotal, "skins");
}

//Ham nay de ve bang lich su
function drawHistoryTable() {
    //Tao khung cho bang 
    gridContainer.style.height = '500px';
    gridContainer.style.border = '2px solid #785a28';
    gridContainer.style.flexDirection = "row-reverse";

    //Ve cot the hien gia
    const costColumn = document.createElement('div');
    costColumn.setAttribute('id', 'costAndDateColumn');
    gridContainer.appendChild(costColumn);

    //Ve cot the hien ngay mua
    const dateColumn = document.createElement('div');
    dateColumn.setAttribute('id', 'costAndDateColumn');
    gridContainer.appendChild(dateColumn);

    //Ve cot the hien thong tin va tuong hoac trang phuc
    const ChamOrSkinColumn = document.createElement('div');
    ChamOrSkinColumn.setAttribute('id', 'InfoChamOrSkin');
    ChamOrSkinColumn.style.width = '780px';
    gridContainer.appendChild(ChamOrSkinColumn);

    //Ve 1 dong cho tung cot thong tin tuong hoac trang phuc, ngay mua va gia
    const row1Info = document.createElement('div');
    row1Info.setAttribute('id', 'createRow');
    row1Info.style.borderBottom = '2px solid #785a28';
    row1Info.textContent = "Tướng / Trang Phục";
    
    ChamOrSkinColumn.appendChild(row1Info);
    
    const row1Date = document.createElement('div');
    row1Date.setAttribute('id', 'createRow');
    row1Date.textContent = "Ngày Mua";
    row1Date.style.borderBottom = '2px solid #785a28';
    dateColumn.appendChild(row1Date);

    const row1Cost = document.createElement('div');
    row1Cost.setAttribute('id', 'createRow');
    row1Cost.textContent = "Giá";
    row1Cost.style.borderBottom = '2px solid #785a28';
    costColumn.appendChild(row1Cost);
}

//Xoa bang lich su
function deleteHisTab() {
    costColumn = document.querySelector('#costAndDateColumn');
    costColumn.parentNode.removeChild(costColumn);

    dateColumn = document.querySelector('#costAndDateColumn');
    dateColumn.parentNode.removeChild(dateColumn);

    ChamOrSkinColumn = document.querySelector('#InfoChamOrSkin');
    ChamOrSkinColumn.parentNode.removeChild(ChamOrSkinColumn);

    gridContainer.style.height = null;
    gridContainer.style.border = null;
    gridContainer.style.flexDirection = null;

}

//Ham nay de ve bang thanh toan
function drawPayTable() {
    //Tao khung cho bang 
    gridContainer.style.height = '500px';
    gridContainer.style.border = '2px solid #785a28';
    gridContainer.style.flexDirection = "row-reverse";
    gridContainer.style.marginBottom = '100px';
    gridContainer.style.justifyContent = 'center';

    //Tao cot the hien gia
    costColumn = document.createElement('div');
    costColumn.setAttribute('id', 'costAndDateColumn');
    costColumn.style.position = "relative";
    gridContainer.appendChild(costColumn);

    //Tao cot the hien ten tuong hoac trang phuc
    ChamOrSkinColumn = document.createElement('div');
    ChamOrSkinColumn.setAttribute('id', 'InfoChamOrSkin');
    ChamOrSkinColumn.style.width = '950px';
    ChamOrSkinColumn.style.position = "relative";
    gridContainer.appendChild(ChamOrSkinColumn);

    //Ve 1 dong cho tung cot thong tin tuong hoac trang phuc va gia
    row1Info = document.createElement('div');
    row1Info.setAttribute('id', 'createRow');
    row1Info.textContent = "Tướng / Trang Phục";
    row1Info.style.borderBottom = '2px solid #785a28';
    ChamOrSkinColumn.appendChild(row1Info);

    row1Cost = document.createElement('div');
    row1Cost.setAttribute('id', 'createRow');
    row1Cost.textContent = "Giá";
    row1Cost.style.borderBottom = '2px solid #785a28';
    costColumn.appendChild(row1Cost);

    const rowSum = document.createElement('div');
    rowSum.setAttribute('id', 'createRow');
    rowSum.style.bottom = '0';
    rowSum.style.position = "absolute";
    rowSum.style.borderTop = '2px solid #785a28';
    rowSum.textContent = "Tổng";
    ChamOrSkinColumn.appendChild(rowSum);

    const rowSumCost = document.createElement('div');
    rowSumCost.setAttribute('id', 'createRow');
    rowSumCost.style.bottom = '0';
    rowSumCost.style.position = "absolute";
    rowSumCost.style.borderTop = '2px solid #785a28';
    costColumn.appendChild(rowSumCost);

    const payButton = document.createElement('button');
    payButton.setAttribute('id', 'payButton');
    payButton.textContent = "Thanh toán";
    gridContainer.appendChild(payButton);
}

function deletePayTable() {
    costColumn = document.querySelector('#costAndDateColumn');
    costColumn.parentNode.removeChild(costColumn);

    ChamOrSkinColumn = document.querySelector('#InfoChamOrSkin');
    ChamOrSkinColumn.parentNode.removeChild(ChamOrSkinColumn);

    payButton = document.querySelector('#payButton');
    payButton.parentNode.removeChild(payButton);

    gridContainer.style.height = null;
    gridContainer.style.border = null;
    gridContainer.style.flexDirection = null;
    gridContainer.style.marginBottom = null;
    gridContainer.style.justifyContent = null;

}

champions.addEventListener('click', ()=> {
    if (flagHis == 1) {
        deleteHisTab();
        flagHis = 0;
    }
    if (flagPay == 1) {
        deletePayTable();
        flagPay = 0;
    }
    deleteGrid();
    drawChampions();
    champions.style.opacity = "0.5";
    skins.style.opacity = "1";
    history.style.opacity = "1";
    pay.style.opacity = "1";
    buySomeThing();
})

skins.addEventListener('click', ()=> {
    if (flagHis == 1) {
        deleteHisTab();
        flagHis = 0;
    }
    if (flagPay == 1) {
        deletePayTable();
        flagPay = 0;
    }
    deleteGrid();
    drawSkins();
    skins.style.opacity = "0.5";
    champions.style.opacity = "1";
    history.style.opacity = "1";
    pay.style.opacity = "1";
    buySomeThing();
})

history.addEventListener('click',()=> {
    if (flagPay == 1) {
        deletePayTable();
        flagPay = 0;
    }
    deleteGrid();
    drawHistoryTable();
    history.style.opacity = "0.5";
    champions.style.opacity = "1";
    skins.style.opacity = "1";
    pay.style.opacity = "1";
    flagHis = 1;
})

pay.addEventListener('click', ()=> {
    if (flagHis == 1) {
        deleteHisTab();
        flagHis = 0;
    }
    deleteGrid();
    drawPayTable();
    pay.style.opacity = "0.5";
    history.style.opacity = "1";
    champions.style.opacity = "1";
    skins.style.opacity = "1";
    flagPay = 1;
    let button1 = document.querySelector('#payButton');
    button1.addEventListener('click', ()=> {
        notificationPay();
    })
})

function notificationBuy() {
    if (confirm('Bạn có chắc muốn thêm vào giỏ hàng không?')) {
        alert('Đã thêm vào giỏ hàng');
    }
}

function notificationPay() {
    if (confirm('Bạn có chắc muốn thanh toán không?')) {
        alert('Cảm ơn bạn đã mua hàng');
    }
}

function buySomeThing() {
    let RPButtons = document.querySelectorAll('#costRPTable');
        RPButtons.forEach((RPButton) => {
            RPButton.addEventListener('click', () => {
                notificationBuy();
            })
        })

    let IPButtons = document.querySelectorAll('#costIPTable');
    IPButtons.forEach((IPButton) => {
        IPButton.addEventListener('click', () => {
            notificationBuy();
        })
    })
}

champions.style.opacity = "0.5";
drawChampions();
buySomeThing();
    