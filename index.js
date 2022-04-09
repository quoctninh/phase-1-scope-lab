var customerName = 'bob'

function upperCaseCustomerName(){
    return customerName = 'BOB'
}

var bestCustomer;
function setBestCustomer(){
    bestCustomer = 'not bob';

}

function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'michael';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Matthew';
    return leastFavoriteCustomer;
}