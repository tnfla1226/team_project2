let answer = '';

function operation (num) {

    if (num !== '=') {
        const $show = document.getElementById('show');
        $show.value += num;
        console.log($show.value);
    }

}

(function () {

    const $buttons = document.querySelector('.buttons');
    const $answer = document.querySelector('.answer');
    const $show = document.getElementById('show');
    
    // 숫자 버튼 클릭 이벤트 
    $buttons.addEventListener('click', e => {
        if (e.target.matches('.check')) {
            operation(e.target.value);
        }
    });

    $answer.addEventListener('click', e => {
        // answer = String(eval($show.value));
       answer = (new Function ('return '+$show.value))();

        $show.value = $show.value + '=' + String(answer);
        
        // $show.value = $show.value + String(a); 
        
    });
        

    
}) ();