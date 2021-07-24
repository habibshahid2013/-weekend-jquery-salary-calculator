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
    $('#deleteBtn').on('click', deleteFunction)
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
            <td><button>Delete</button></td>
        </tr>`
    );
    //calculate Monthly Cost
    let monthlyCost = 0 
    for (let employee of allEmployees){
        monthlyCost += employee.annualSalary;
     if (monthlyCost > 20000){
         $('#totalSalry').css('background-color', 'red');
     }
    }

    $('#totalSalary').text(employee.annualSalary.toFixed(2));
   
    };

function deleteFunction() {
    $('#employeeTable').empty(` 
         <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.jobID}</td>
            <td>${employee.jobTitle}</td>
        </tr>`
    )

};
