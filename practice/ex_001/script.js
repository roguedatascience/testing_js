let cnt = 0
let cnttxt = document.getElementById("cnt1")
let prevtxt = document.getElementById("svd1")

function incrm() {
    cnt = cnt + 1
    cnttxt.textContent = cnt
}

function sve() {
    prevtxt.textContent += cnt + " - "
    cnt = 0
    cnttxt.textContent = cnt
}