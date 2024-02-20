async function fetchData(){
    try{

        const wordName = document.getElementById("name").value;
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
      
        const word = responseData[0].word;

        const resultContainer = document.getElementById("result");
        resultContainer.innerHTML = `
            <h2>Fruit Information</h2>
            <p><strong>Family:</strong> ${word}</p>
        `;
    }
    catch(error){
        console.error(error);
    }
}
