/*
    if(조건식1){
        조건식1이 true이면 실행
    }else if(조건식2){
        조건식2가 true이면 실행
    }esle{
    그 외일 경우 실행
    }
*/
// alert("testing...");
// 나이에 따라서 입장료 계산
let age = Number(prompt("나이를 입력해주세요"));
let charge = 0;

if (age > 0 && age < 8 && age==parseInt(age)) {
    document.write("미취학 아동입니다. <br>");
    charge = 1000;
} else if (age>=8 && age < 14 && age==parseInt(age)) {
    document.write("초등학생입니다. <br>");
    charge = 2000;
} else if(age>=14 && age < 20  && age==parseInt(age)){
    document.write("중,고등학생입니다. <br>");
    charge = 2500;
} else if(age>=20  && age==parseInt(age)){
    document.write("성인입니다. <br>");
    charge = 3000;
} else{
    document.write("정확한 나이를 입력해주세요 <br>");
    charge = 99999000;

}

document.write("입장료는 <span>", charge, "원</span> 입니다.")

