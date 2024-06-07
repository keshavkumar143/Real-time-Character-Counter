document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.querySelector('#textArea');
    const countDiv = document.querySelector('.count');
    const copyButton = document.querySelector('#copyButton');

    const updateCharacterCount = () => {
        const characterCount = textArea.value.length;
        countDiv.textContent = `Total Characters : ${characterCount}`;
    };

    textArea.addEventListener('input', updateCharacterCount);

    copyButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(textArea.value);
            alert('Text copied to clipboard');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });

    
    updateCharacterCount();
});