function ktsnt(n) {
    let a = true;
    if (n < 2) {
        a = false;
    }
    else {
        for (let i = 2; i < n-1; i++) {
            if (n % i == 0) {
                a = false;
                break;
            }
        }
    }
    //Kiểm tra biến
    if (a == true) {
        return n;
    }
    else {
        return 0;
    }
}
function allSnt(){
    let n = document.getElementById('number').value;
    let kq = ''
    for (let i = 2; i < n; i++) {
        if(ktsnt(i)){
            kq += i + ' ';
        };        
    }
    document.getElementById('outputSNT').innerHTML = kq;
}
function clickSNT(){
    allSnt();
}