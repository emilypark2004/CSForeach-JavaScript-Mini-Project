async function fetchData(){
    try{

        const fruitName = document.getElementById("name").value;
        const response = await fetch(`https://www.fruityvice.com/api/fruit/${fruitName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
      
        const family = data.family;
        const order = data.order;
        const genus = data.genus;

        const resultContainer = document.getElementById("result");
        resultContainer.innerHTML = `
            <h2>Fruit Information</h2>
            <p style="color: red;">Name: ${fruitName}</p>
            <p><strong>Family:</strong> ${family}</p>
            <p><strong>Order:</strong> ${order}</p>
            <p><strong>Genus:</strong> ${genus}</p>
        `;
    }
    catch(error){
        console.error(error);
    }
}
