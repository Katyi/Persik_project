console.log(true + false)
console.log(12 / "6")
console.log("number" + 15 + 3)
console.log(15 + 3 + "number");
if ([1] > null) { console.log('true') }
console.log([1]);
console.log("foo" + + "bar");
('true' == true) ? console.log(1) : console.log(2);
(false == 'false') ? console.log(1) : console.log(3);
(null == '') ? console.log(1) : console.log(4);
(!!"false" == !!"true") ? console.log(1) : console.log(5);
// [‘x’] == ‘x’
// [] + null + 1
(0 || "0" && {}) ? console.log(1) : console.log(6);
([1,2,3] == [1,2,3]) ? console.log(1) : console.log(7);
console.log({} + [] + {} + [1]);
console.log(!+[] + [] + ![]);
console.log(new Date(0) - 0);
console.log(new Date(0) + 0);
