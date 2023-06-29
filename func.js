// theme switch example for demo

function iterateThroughClass(classToRemove, ClassToAdd){
    while (document.getElementsByClassName(classToRemove).length) {
        document.getElementsByClassName(classToRemove).className = ClassToAdd;
      }
}



document.getElementById('dark-mode-switch').addEventListener('click',()=>{
    if (document.body.classList.contains('bg-custom-dark-yellow')) {
        document.getElementById('moon-svg').setAttribute('href', 'node_modules/bootstrap-icons/bootstrap-icons.svg#moon')
        iterateThroughClass('bg-custom-dark-yellow', 'bg-custom-yellow')
    }
    else {
        document.getElementById('moon-svg').setAttribute('href', 'node_modules/bootstrap-icons/bootstrap-icons.svg#moon-fill')
        iterateThroughClass('bg-custom-yellow', 'bg-custom-dark-yellow')

    }

})