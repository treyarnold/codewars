function duplicateCount(text){
    //...
    let answer = "";
    let foundLetter = "";
    let count;
    let x = 0;
    let found = false;
    let lower = text.toLowerCase();
    let used = [];
    for (let i = 0; i < (text.length - 1); i++) {
        count = 0;
        let currentPosition = lower.indexOf(lower[i], i + 1);
        if ((currentPosition >= 0) && (!(used.includes(lower[i])))) {
            used.push(lower[i]);
            foundLetter = text[i];
            found = true;
            x = currentPosition;
            count = 2;
            while (found) {
                if ((lower.indexOf(lower[i], x + 1) >= 0) && (x < lower.length)) {
                    console.log(count)
                    count++; 
                    x = lower.indexOf(lower[i], x + 1);
                } else {
                    found = false;
                }
            }
            console.log(foundLetter, "was found", count, "times");
        }
    }
  }