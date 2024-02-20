async function fetchData(){
    try{

        const wordName = document.getElementById("name").value;
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        
        const phonetics = data[0].phonetics;

        const phoneticsContainer = document.getElementById('phonetics');
        phoneticsContainer.innerHTML = '';

        phonetics.forEach(phonetic => {
            const text = phonetic.text;
            const audio = phonetic.audio;
        
            const phoneticElement = document.createElement('div');
            phoneticElement.innerHTML = `
                <p>Text: ${text}</p>
                <p>Audio: <a href="${audio}" target="_blank">Listen</a></p>
            `;
            phoneticsContainer.appendChild(phoneticElement);
        });

        document.getElementById('word').textContent = `Word: ${word}`;
    }
    catch(error){
        console.error(error);
    }
}
