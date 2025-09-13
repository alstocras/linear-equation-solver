function solve() {
    let equation = document.getElementById("equation").value;
    let ans = document.getElementById("ans");
    let node = math.parse(equation);
    ans.textContent = equation + ' = ' + node.evaluate(); 
}