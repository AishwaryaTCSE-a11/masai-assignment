
function pattern(n){
    for (let i = 1; i <= n; i++) {
        let temp = "";
        for (let j = 1; j <= n - i; j++) {
            temp += " ";
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            temp += "*";
        }
        console.log(temp);
    }
    let trunk = "";
    for (let i = 1; i < n; i++) {
        trunk += " ";
    }
    trunk += "|";
    console.log(trunk);
}

pattern(5)