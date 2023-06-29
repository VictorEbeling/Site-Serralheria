// theme switch example for demo

function iterateThroughClass(listOfElements, classToRemove, ClassToAdd){
    listOfElements.forEach(element => {
        element.classList.replace(classToRemove, ClassToAdd)
    });
}



document.getElementById('dark-mode-switch').addEventListener('click',()=>{
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark')
        document.getElementById('moon-svg').setAttribute('href', 'node_modules/bootstrap-icons/bootstrap-icons.svg#moon')
        iterateThroughClass(document.getElementsByClassName('bg-custom-dark-yellow'),'bg-custom-dark-yellow', 'bg-custom-yellow')
    }
    else {
        document.body.classList.add('dark')
        document.getElementById('moon-svg').setAttribute('href', 'node_modules/bootstrap-icons/bootstrap-icons.svg#moon-fill')
        iterateThroughClass(document.getElementsByClassName('bg-custom-yellow'), 'bg-custom-yellow', 'bg-custom-dark-yellow')

    }

})