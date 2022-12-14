class Order{
    //constructor
    constructor(name, type, content, date){
        this.name = name;
        this.date = date;
        this.content = content;
        this.type = type;
    }
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let formname = document.getElementById("name").value;
    let formdate = document.getElementById("date").value;
    let formcontent = document.getElementById("content").value;
    let formtype = document.getElementById("type").value;
    //create new object of class order
    let newOrder = new Order(formname, formtype, formcontent, formdate);
    //push new order onto array
    orderArray.push(newOrder);
    displayOrder(orderArray);
    console.log(orderArray);
});

var orderArray = [];

function removeOrder(){
    //remove oldest order from array
    orderArray.shift();
    displayOrder(orderArray);
}

function displayOrder(order){
    document.getElementById("order-list").innerHTML= JSON.stringify(order, null, 4).replace(/]|[[]/g, '');
}