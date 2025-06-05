const sec = document.getElementById("click1");
sec.addEventListener( 'click', ()=>{
    const listContainer = document.getElementById("OpnCls1");
    const rotateIcon = document.getElementById("click1");

    if (listContainer.style.display === 'block') {
        listContainer.style.display = 'none';
        rotateIcon.style.rotate ='0deg'
        rotateIcon.style.color = 'red';

    } else {
        listContainer.style.display = 'block';  
        rotateIcon.style.rotate ='-90deg';
        rotateIcon.style.color = 'yellow';
    }
})

const click2 = document.getElementById("click2");
click2.addEventListener('click', ()=>{
    const list2 = document.getElementById("OpnCls2");
    const rotateIcon2 = document.getElementById("click2");

    if (list2.style.display === 'block') {
        list2.style.display = 'none';
        rotateIcon2.style.rotate = '0deg';
        rotateIcon2.style.color = 'red';
    } else {
        list2.style.display = 'block';
        rotateIcon2.style.rotate = '-90deg';
        rotateIcon2.style.color = 'yellow';
    }
})
