var total = document.querySelector("#total_main");

var actual_total = total.innerHTML
var cost1 = document.querySelector("#cost1_main"); // selects button
var cost2 = document.querySelector("#cost2_main");
var cost3 = document.querySelector("#cost3_main");
var cost4 = document.querySelector("#cost4_main");

var main_cost1 = document.querySelector("#cost1_main_cost")
var actual_total_main_cost1 = main_cost1.innerHTML;
var main_cost2 = document.querySelector("#cost2_main_cost")
var main_cost3 = document.querySelector("#cost3_main_cost")
var main_cost4 = document.querySelector("#cost4_main_cost")

cost1.addEventListener("click", function() {
    total.innerHTML = Number(total.innerHTML) + Number(main_cost1.innerHTML);
});

cost2.addEventListener("click", function() {
    total.innerHTML = Number(total.innerHTML) + Number(main_cost2.innerHTML);
})
cost3.addEventListener("click", function() {
    total.innerHTML = Number(total.innerHTML) + Number(main_cost3.innerHTML);
})
cost4.addEventListener("click", function() {
    total.innerHTML = Number(total.innerHTML) + Number(main_cost4.innerHTML);
})

var reset = document.querySelector("#click_me");

reset.addEventListener("click", function() {
    total.innerHTML = 0;
})