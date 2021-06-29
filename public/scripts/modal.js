export default function Modal(){

    const modalWrapper = document.querySelector('.modalWrapper')

    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener('click', close)

    function open(){
        // funcionalidade de atribuir o active para o modal
        modalWrapper.classList.add("active")
    }
    function close(){
        // funcionalidade de remover o active para o modal
        modalWrapper.classList.remove("active")
    }

    return {
        open, 
        close
    }
}