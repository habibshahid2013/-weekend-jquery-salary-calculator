console.log('testing JS 😀');

$(document).ready(onReady);
function onReady(){
    console.log('so ready 🇺🇸');
//button to submit information on form
    $('#submitBtn').on('click', onSubmit)

//when we submit the product form
    $('#productForm').on('submit', onSubmit)
}

function onSubmit(event){
    console.log('event', event);
    
    event.preventDefault();

    console.log('onSubmit');

    //grab values from form
    let product = {
    name: $('#nameInput').val(),
    color: $('#colorInput').val(),
    size: $('#sizeInput').val(),
    price:  Number($('#priceInput').val()),
    };

    console.log('product', product);

    //focus on name input
    $('nameInput').focus();

    //Clear form Input
    $('#nameInput').val('')
    $('#colorInput').val('')
    $('#priceInput').val('')

    //clear form input
    $('#productTable').append(` 
         <tr>
            <td>${product.name}</td>
            <td>${product.color}</td>
            <td>${product.size}</td>
            <td>${product.price}</td>
        </tr>`
    )

};
