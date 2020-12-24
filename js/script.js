function changeClass() {
    setTimeout(()=>{
        let tags=document.querySelector('.tags')
        tags.classList.add('active-new')
        let tagsNew=document.querySelector('.tags-new')
        tagsNew.classList.add('active-new')
    },500)
}
changeClass()



const mySiema = new Siema({
    perPage: {
        1289:3,
        800:2,
        320:1
    },
    loop: true    
});

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());

let pinkButton = document.querySelectorAll('.pink-button')

pinkButton[0].addEventListener('click', () => {
    document.querySelector('.popup-purple').classList.add('popup-active')
})

pinkButton[1].addEventListener('click', () => {
    document.querySelector('.popup-purple').classList.add('popup-active')
})

let orangeButton = document.querySelectorAll('.orange-button')
orangeButton[0].addEventListener('click', () => {
    document.querySelector('.popup-purple').classList.add('popup-active')
})

orangeButton[1].addEventListener('click', () => {
    document.querySelector('.popup-purple').classList.add('popup-active')
})

orangeButton[2].addEventListener('click', () => {
    document.querySelector('.popup-purple').classList.add('popup-active')
})

document.querySelector('.popup-purple-but').addEventListener('click', (event) => {
        event.preventDefault();

        let myInput = document.querySelectorAll('.popup-call-input')
        console.log(myInput[0].value);

        for (let index = 0; index < myInput.length; index++) {
            myInput[index].style.border='none'           
        }
        if (myInput[0].value && myInput[1].value && myInput[2].value) {
            
            for (let index = 0; index < myInput.length; index++) {
                myInput[index].value=""           
            }

            document.querySelector('.popup-purple').classList.remove('popup-active')
            setTimeout(() => {
            document.querySelector('.complete').classList.add('but-active')
            setTimeout(()=>{
                document.querySelector('.complete').classList.add('but-active-hide')
            },4000)
            }, 1200);
        }
        else{
            if (!myInput[0].value) {
                myInput[0].style.border='2px solid blue'
            }

            if (!myInput[1].value) {
                myInput[1].style.border='2px solid blue'
            }

            if (!myInput[2].value) {
                myInput[2].style.border='2px solid blue'
            }
        }
})

document.querySelector('.popup-cross').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.popup-purple').classList.remove('popup-active')
})


document.querySelector('.bars-burger').addEventListener('click', () => {
    document.querySelector('.header-nav').classList.toggle('header-nav-new')
    
})