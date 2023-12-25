
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('form').addEventListener('submit', function (event) {
            event.preventDefault();
            var formData = new FormData(event.target);
            var formObject = {};
            
            formData.forEach(function (value, key) {
                formObject[key] = value;
            });

            var formDataJSON = JSON.stringify(formObject);
            //const formDataObj = Object.fromEntries(formData.entries());
            console.log(formDataJSON);
            
        });
    });

