menu_list_array = ["Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tika Pizza","Deluxe Veggie Pizza","Veg Extravaganze Pizza"]

function getmenu(){
var htmldata;
htmldata-"<ol class-'menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>'+ menu_list_array[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML= htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
menu_list_array.sort();
htmldata="<section class='cards'>"
for(var i=0;i<menu_list_array.length;i++){

    htmldata=htmldata+'<div class="card">'+'<img src = "https://lh3.googleusercontent.com/proxy/xgZzgfoUSWHLBCkukgg0TjdLXGl8sMHedQhgTpgbwD0iLq8AKPuvodDcvpm5-plSgbRxg4A2APjtskS2TdtKwtHrHOif4Yj7F5Th_KiAvqLH0DuufO08yqA3NfFqpMpHpEBwvkCyM7LdBkOfskrqtg"/>' + menu_list_array[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;

}