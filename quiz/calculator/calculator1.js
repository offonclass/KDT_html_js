    // 임시 저장소 선언

    let tempArray = []; // 숫자 하나하나를 임시로 받아낼 공간
    let tempStr = ""; // tempArray를 하나의 문자열로 합칠 공간
    let tempNum = 0; // 만들어진 한개의 수 임시 저장
    let numbers = []; // 계산될 모든 수를 여기에 저장
    let cal = 0; // 이전 연산값 // 더하기(1), 빼기(2), 곱하기(3), 나누기(4)
    let result = 0; // 계산값 저장






    // 숫자 입력 함수
    let inputNum = function (x) {
        tempArray.push(x); // 문자열로 받고 배열에 밀어넣기
        tempStr = tempArray.join(''); // 하나의 문자열로 합치기
        tempNum = Number(tempStr); // 문자열을 실수로 바꿔 저장
        console.log(tempNum);
        document.getElementById("screenNum").innerHTML = tempNum;
    }





    // 사칙연산 함수 (이전에 클릭한 사칙연산 기준)
    let calculate = function (x) {

        // 연산기호 출력
        switch (x) {
            case 1:
                document.getElementById("screenNum").innerHTML = '+';
                console.log('+');
                break;
            case 2:
                document.getElementById("screenNum").innerHTML = '-';
                console.log('-');
                break;
            case 3:
                document.getElementById("screenNum").innerHTML = 'x';
                console.log('x');
                break;
            case 4:
                document.getElementById("screenNum").innerHTML = '÷';
                console.log('÷');
                break;
        }

        numbers.push(tempNum) // numbers(배열)에 완성된 실수 저장

        // 임시 저장소 초기화
        tempArray = [];
        tempStr = "";
        tempNum = 0;

        // 이전에 클릭했던 사칙연산 버튼(cal값)을 통해 계산

        if (numbers.length === 1) {   //첫 연산 시도라면
            result = numbers[0];
        } else {
            switch (cal) {
                case 1:
                    result = result + numbers[(numbers.length - 1)]
                    break;
                case 2:
                    result = result - numbers[(numbers.length - 1)]
                    break;
                case 3:
                    result = result * numbers[(numbers.length - 1)]
                    break;
                case 4:
                    result = result / numbers[(numbers.length - 1)]
                    break;
            }
        }
        cal = x;
    }




    // 모든 전역변수 초기화
    let allClear = function () {
        tempArray = [];
        tempStr = "";
        tempNum = 0;
        numbers = [];
        cal = 0;
        result = 0;
        console.log('All Clear!!!');
        document.getElementById("screenNum").innerHTML = 'All Clear!!';
        
        setInterval(document.getElementById("screenNum").innerHTML = '', 2000)

    }





    let outputResult = function () {
        numbers.push(tempNum) // numbers(배열)에 완성된 실수 저장

        // 임시 저장소 초기화
        tempArray = [];
        tempStr = "";
        tempNum = 0;

        if (numbers.length === 1) {
            result = numbers[0];
        } else {
            switch (cal) {
                case 1:
                    result = result + numbers[(numbers.length - 1)]
                    break;
                case 2:
                    result = result - numbers[(numbers.length - 1)]
                    break;
                case 3:
                    result = result * numbers[(numbers.length - 1)]
                    break;
                case 4:
                    result = result / numbers[(numbers.length - 1)]
                    break;
            }
        }
        console.log("계산값 : " + result);
        document.getElementById("screenNum").innerHTML = result;
        numbers = [];
        cal = 0;
        result = 0;
    }


