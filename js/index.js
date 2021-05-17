// 처음화면
let i =0;
let timer = setInterval(add, 2840)

const introAni = document.querySelector('.introAni')
const introAniP = document.querySelector('.introAni p')


function add(){
    setTimeout(function(){
        introAni.style.display = 'none'
    }, 800)
    return false
}

//메뉴
let elLabel = document.querySelectorAll('.radio-group label')
for ( let i = 0; i < elLabel.length; i++ ) {
    elLabel[i].addEventListener('mouseover', function(){
        this.classList.add('on')
    })
    elLabel[i].addEventListener('mouseout', function(){
        this.classList.remove('on')
    })
    elLabel[i].addEventListener('click', function(){
        this.classList.add('active')
        for (let j of this.parentNode.children) {
            if (j !== this) {
                j.classList.remove('active')
            }
        }
    })
}

//sns
let elSns = document.querySelectorAll('.protxt > a')
for ( let k = 0; k < elSns.length; k++ ) {
    elSns[k].addEventListener('mouseover', function(){
        this.classList.add('on')
    })
    elSns[k].addEventListener('mouseout', function(){
        this.classList.remove('on')
    })
} 
let cube = document.querySelector('.cube');




const radioGroup = document.querySelector('.radio-group');
let currentClass = '';

function changeSide() {
  let checkedRadio = radioGroup.querySelector(':checked');
  let showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );

