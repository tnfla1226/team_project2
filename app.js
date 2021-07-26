
let numArray = [];
let val1 = '';
let val2 = '';




function addNum(num) {
    const $show = document.getElementById('show');

    $show.value = $show.value + num;
    $show.setAttribute('value', $show.value);
    numArray.push(+$show.value);

    val2 = numArray[numArray.length-1];
    console.log(val2);
    // console.log(numArray);
  }
  
function calculate(operator) {
    const $show = document.getElementById('show');
    
    if (operator === '+') {
        $show.value = '';
        // $numArray = [];
        // val1 += val2;
        // console.log(val1);
    }
}

//   function calculate() {
//     const $show = document.getElementById('show');
//     const $answer = eval($show.value);
//     const $displayAnswer = document.getElementById('answer');
//     $displayAnswer.value = result;
//   }
  

(function () {

    const $buttons = document.querySelector('.buttons');
    const $show = document.getElementById('show');
    
    // 숫자 버튼 클릭 이벤트 
    $buttons.addEventListener('click', e => {
        if (e.target.matches('.num')) {
            console.log('숫자버튼 클릭댐!');
            addNum(e.target.textContent);
            
        }
    });   

    $buttons.addEventListener('click', e => {
        if (e.target.matches('.plus') || e.target.matches('.minus') || e.target.matches('.divisor') || e.target.matches('.mul')) {
            calculate(e.target.textContent);
        }
        
    });

    // if (e.target.matches('.answer')) {
    //     numArray = [];
    // }

}) ();