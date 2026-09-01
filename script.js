let sushi = 0;
let lasagna = 0;
let paella = 0;
let bites = 0;
let bell = 0;
let lentil = 0;
let rice = 0;
let rings = 0;

let total = 0;
let ress;

let paid = 0;
function showTotal()
{
    sushi = document.getElementById('sushi').value;
    lasagna = document.getElementById('lasagna').value;
    paella = document.getElementById('paella').value;
    bites = document.getElementById('bites').value;
    bell = document.getElementById('bell').value;
    lentil = document.getElementById('lentil').value;
    rice = document.getElementById('rice').value;
    rings = document.getElementById('rings').value;

    total += Number(sushi * 10) +  Number(lasagna * 20) + Number(paella * 25) + Number(bites * 3) + Number(bell * 10) + Number(lentil * 15) +
            Number(rice * 20) + Number(rings * 10);
    
    ress = document.getElementById('res');
    ress.textContent = `Your total is $${total}`;
}

function payment()
{
    paid = document.getElementById('pay').value;
    if(paid < total)
    {
        alert("Payment Insufficient");
    }

    else if(paid == total)
    {
        alert("enjoy your meal!");
    }

    else
    {
        alert(`Your change is $${paid - total} enjoy your meal`);
    }
}

