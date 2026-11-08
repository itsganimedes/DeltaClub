document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentBlock = button.parentElement;
            const isOpen = parentBlock.classList.contains('active');

            // 1. Primero, cerramos TODOS los bloques
            const allBlocks = document.querySelectorAll('.collapsible-block');
            allBlocks.forEach(block => {
                block.classList.remove('active');
                const content = block.querySelector('.collapsible-content');
                content.style.maxHeight = '0px';
            });

            // 2. Si el bloque que clickeaste NO estaba abierto, lo abrimos
            if (!isOpen) {
                parentBlock.classList.add('active');
                const content = parentBlock.querySelector('.collapsible-content');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});