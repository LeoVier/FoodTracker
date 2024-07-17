function changeSite() {
    document.body.style.backgroundImage = "none"
    document.body.style.alignItems = "start"
    document.getElementById('response').style.display = "flex"
}

async function loadFood() {
    let barcode = document.getElementById('barcodeInput').value
    const url = 'https://world.openfoodfacts.net/api/v2/product/' + barcode 

    try {
        const response = await fetch(url)

        if (!response.ok){
            throw new Error(`Error! Status: ${response.status}`)
        }

        const data = await response.json()

        document.getElementById('name').innerHTML = 'Produkt: ' + data.product.product_name
        document.getElementById('ingredients').innerHTML = 'Zutaten: ' + data.product.ingredients_text_de
        document.getElementById('categories').innerHTML = 'Kategorien: ' + data.product.categories
        document.getElementById('code').innerHTML = 'Barcode: ' + data.code
        document.getElementById('img').src = data.product.image_front_url

        changeSite()
    }
    catch(error) {
        console.error("Error:", error);
    }
}