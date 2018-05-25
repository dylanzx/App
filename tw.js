process.stdin.resume();
process.stdin.setEncoding('ascii');

let input = "";
let input_array = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    input_array = input.split("\n");
    let nLine = 0;

    while (nLine < input_array.length) {
        let line = input_array[nLine++].trim();
        if (line === '') {
            continue;
        }
        let input_arrays = line.split(' ');
        let a = +input_arrays[0];
        console.log(tw(a));

        function tw(num) {
            /***
             * 输入num 是一个数字
             * 输出为一个字符串
             * */
            let str = num + '';
            let len = str.length;

            let line1 = '', line2 = '', line3 = '';
            for (let j = 0; j < len; j++) {
                /*
                * 循环把每个数字的三行保存
                * */

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
                /*
                * 第一行
                * */
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
                /*
                * 第二行
                * */
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
                /*
                * 第三行
                * */
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

    }
});