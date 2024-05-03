$(document).ready(function(){

    $('.menu-list li').click(function(){
        /* 모든 버튼 클래스 제거 */
        $('.menu-list li').removeClass('active');
    
        /* 클릭한 것만 클래스 추가 */
        $(this).addClass('active');

    });
});