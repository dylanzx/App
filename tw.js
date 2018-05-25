function tw(num) {
    let str = num + '';
    let len = str.length;

    let line1 = '', line2 = '', line3 = '';
    for (let j = 0; j < len; j++) {

        if (j < len - 1) {
            line1 += lineOne(parseInt(str[j])) + ' ';
            line2 += lineTow(parseInt(str[j])) + ' ';
            line3 += lineThree(parseInt(str[j])) + ' '
        } else {
            line1 += lineOne(parseInt(str[j]));
            line2 += lineTow(parseInt(str[j]));
            line3 += lineThree(parseInt(str[j]))
        }
    }
    return line1 + '\n' + line2 + '\n' + line3;

    function lineOne(x) {
        let tmp = "";
        switch (x) {
            case 0:
            case 2:
            case 3:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                tmp = "._.";
                break;
            case 1:
            case 4:
                tmp = "...";
                break;
        }
        return tmp;
    }

    function lineTow(x) {
        let tmp = "";
        switch (x) {
            case 0:
                tmp = "|.|";
                break;
            case 1:
            case 7:
                tmp = "..|";
                break;
            case 2:
            case 3:
                tmp = "._|";
                break;
            case 4:
            case 8:
            case 9:
                tmp = "|_|";
                break;
            case 5:
            case 6:
                tmp = "|_.";
                break;
        }
        return tmp;
    }

    function lineThree(x) {
        let tmp = "";
        switch (x) {
            case 0:
            case 6:
            case 8:
                tmp = "|_|";
                break;
            case 1:
            case 4:
            case 7:
            case 9:
                tmp = "..|";
                break;
            case 2:
                tmp = "|_.";
                break;
            case 3:
            case 5:
                tmp = "._|";
                break;
        }
        return tmp;
    }

}

console.log(tw(1234567890));
console.log(tw(0));