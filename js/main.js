var productNameInput = document.getElementById('prductNameInput');
var productPriceInput = document.getElementById('prductPriceInput');
var productCategoryInput = document.getElementById('prductCategoryInput');
var productDescriptionInput = document.getElementById('prductDescriptionInput');
var addBtn = document.getElementById('addBtn');
var updateBtn = document.getElementById('updateBtn');

var productContainer 

var currentIndex  

if(localStorage.getItem(`myProducts`) != null) {     
    productContainer = JSON.parse( localStorage.getItem(`myProducts`) );
    // console.log (productContainer)
    displayProduct(productContainer)
}
else {
    productContainer = [];
}

function addProduct(){
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value ,
        category: productCategoryInput.value,
        description: productDescriptionInput.value ,
    }

    productContainer.push(product);
    // console.log(productContainer);
    localStorage.setItem("myProducts" ,JSON.stringify(productContainer) )
    clearForm();
    displayProduct(productContainer)
}


// Clear Function
function clearForm() {
    productNameInput.value = "" ;
    productPriceInput.value = "" ;
    productCategoryInput.value = "" ;
    productDescriptionInput.value = "" ;    
}

// Display Function
function displayProduct(productList){
    var temp = "";
    for( var i = 0; i < productList.length; i++){
        temp += `<tr>
        <td>${i + 1}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].description}</td>
        <td><button onclick = "updateProduct( ${i} )" class="btn btn-outline-primary btn-sm">Update</button></td>
        <td><button onclick = "deleteProduct( ${i} )" class="btn btn-outline-danger btn-sm">Delete</button></td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML = temp;
}

// Search Function
function searchProduct(searchTerm){
    var searchResult = []
    
    for(var i = 0; i < productContainer.length ; i++){
        if ( productContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true)
        {
        searchResult.push(productContainer[i]);
        }
    }

    displayProduct(searchResult)
}

// Delete Function
function deleteProduct(deletedIndex){
    productContainer.splice(deletedIndex,1);
    localStorage.setItem("myProducts" ,JSON.stringify(productContainer) );
    displayProduct(productContainer);

}

// Update Function
function updateProduct(updateIndex){
    currentIndex = updateIndex;
    productNameInput.value = productContainer[updateIndex].name;
    productPriceInput.value = productContainer[updateIndex].price;
    productCategoryInput.value = productContainer[updateIndex].category;
    productDescriptionInput.value = productContainer[updateIndex].description;

    updateBtn.classList.replace('d-none', 'd-inline-block');
    addBtn.classList.add('d-none')
    // console.log(currentIndex)

    scroll({
        top:0 , behavior : "smooth"
    })
}

// Add Update Function
function addUpdate(){
    productContainer[currentIndex].name = productNameInput.value;
    productContainer[currentIndex].price = productPriceInput.value;
    productContainer[currentIndex].category = productCategoryInput.value;
    productContainer[currentIndex].description = productDescriptionInput.value ;
    
    localStorage.setItem("myProducts" ,JSON.stringify(productContainer) );
    displayProduct(productContainer);

    updateBtn.classList.replace('d-inline-block','d-none');
    addBtn.classList.replace('d-none', 'd-inline-block')
    clearForm()
}
























// function displayProd (product, index){

//     var buttonTextUpdate = document.createTextNode("Update")
//     var buttonTextDelete = document.createTextNode("Delete")
//     var textIndex = document.createTextNode(index)
//     var textName = document.createTextNode(product.name)
//     var textPrice = document.createTextNode(product.price)
//     var textCategory = document.createTextNode(product.category)
//     var textDescribtion = document.createTextNode(product.description)
//     var updateButton = document.createElement("button")
//     var deleteButton = document.createElement("button")

//     function buttonClass(){
//         var updateButtonClass = updateButton.classList
//         var deleteButtonClass = deleteButton.classList
//         updateButtonClass.add("btn","btn-outline-success","btn-sm")
//         deleteButtonClass.add("btn","btn-outline-danger","btn-sm")
//         console.log(buttonClass)

//     }
//     buttonClass()    

//     var tdIndex = document.createElement("td")
//     var tdName = document.createElement("td")
//     var tdPrice = document.createElement("td")
//     var tdCateg = document.createElement("td")
//     var tdDesc = document.createElement("td")
//     var tdUpdate = document.createElement("td")
//     var tdDelete = document.createElement("td")
   
//     var tableRow = document.createElement("tr");
    
//     tdIndex.appendChild(textIndex)
//     tdName.appendChild(textName)
//     tdPrice.appendChild(textPrice)
//     tdCateg.appendChild(textCategory)
//     tdDesc.appendChild(textDescribtion)
//     updateButton.appendChild(buttonTextUpdate)
//     deleteButton.appendChild(buttonTextDelete)
//     tdUpdate.appendChild(updateButton)
//     tdDelete.appendChild(deleteButton)
    
//     tableRow.appendChild(tdIndex)
//     tableRow.appendChild(tdName)
//     tableRow.appendChild(tdPrice)
//     tableRow.appendChild(tdCateg)
//     tableRow.appendChild(tdDesc)
//     tableRow.appendChild(tdUpdate)
//     tableRow.appendChild(tdDelete)

//     document.getElementById('tableBody').appendChild(tableRow)
// }