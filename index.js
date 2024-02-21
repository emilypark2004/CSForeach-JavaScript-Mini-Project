async function fetchData(){
    try{

        const wordName = document.getElementById("name").value;
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        
        const data = await response.json();
        
        const meanings = data[0].meanings;

        const meaningsContainer = document.getElementById('meanings');
        meaningsContainer.innerHTML = '';

        meanings.forEach(meaning => {
            const partOfSpeech = meaning.partOfSpeech;
            const definitions = meaning.definitions;

            const meaningElement = document.createElement('div');
            meaningElement.innerHTML = `
                <h3>${partOfSpeech}</h3>
                <ul>
                    ${definitions.map(definition => `<li>${definition.definition}</li>`).join('')}
                </ul>
            `;
            meaningsContainer.appendChild(meaningElement);
        });       
        document.getElementById('word').textContent = `Word: ${word}`;
    }
    catch(error){
        console.error(error);
    }
}
