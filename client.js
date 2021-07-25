console.log('testing JS 😀');

let allEmployees = []

$(document).ready(onReady);
function onReady(){
    console.log('so ready 🇺🇸');
//button to submit information on form
    $('#submitBtn').on('click', onSubmit)

//when we submit the employee form
    $('#employeeForm').on('submit', onSubmit)

//button to delete information
    $(document).on('click', '#deleteBtn', deleteFunction)
}

function activationFunction(){
    onsubmit();
    deleteFunction();
}

function onSubmit(event){
    console.log('event', event);
    
    event.preventDefault();

    console.log('onSubmit');

    //grab values from form
    let employee = {
    firstName: $('#firstNameInput').val(),
    lastName: $('#lastNameInput').val(),
    jobID: $('#idInput').val(),
    jobTitle: $('#jobInput').val(),
    annualSalary:  Number($('#salaryInput').val()),
    };
    allEmployees.push(employee)

    console.log('all of the employees', allEmployees);

    //focus on name input
    $('firstNameInput').focus();

    //Clear form Input
    $('#firstNameInput').val('')
    $('#lastNameInput').val('')
    $('#salaryInput').val('')
    $('#idInput').val('')
    $('#salaryInput').val('')
    

    //rendering of employee
    $('#employeeTable').append(` 
         <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.jobID}</td>
            <td>${employee.jobTitle}</td>
            <td>$${employee.annualSalary}</td>
            <td><button id= "deleteBtn">Delete</button></td>
        </tr>`
    );
    //calculate Monthly Cost
    let annualSalaryCost = 0 
    for (let employee of allEmployees){
       annualSalaryCost += employee.annualSalary;
    }
    let monthlyCost = annualSalaryCost / 12;

    if (monthlyCost > 20000) {
        $('#totalSalary').css('background-color', 'red');
    }

    $('#totalSalary').text(monthlyCost.toFixed(2));
   
    };

function deleteFunction() {
    $(this).closest("tr").remove()
     
};
