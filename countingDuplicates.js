function duplicateCount(text){
    //...
    let answer = "";
    let letter = "";
    let count = 0;
    let x = 0;
    let found = false;
    let lower = text.toLowerCase();
    let used = [];
    for (let i = 0; i < (text.length - 1); i++) {
        count = 0;
        if ((lower.indexOf(lower[i], i + 1) >= 0) && (!(used.includes(lower[i])))) {
            used.push(lower[i]);
            letter = text[i];
            found = true;
            x = lower.indexOf(lower[i], i + 1);
            count++; 
            while (found) {
                if (lower.indexOf(lower[i], x + 1) >= 0) {
                    console.log(count)
                    count++; 
                    x = lower.indexOf(lower[i], i + 1);
                } else {
                    found = false;
                }
            }
            console.log(letter, "was found", count, "times");
        }
    }
  }