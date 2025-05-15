const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


button.addEventListener("click", function () {

    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;


        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.style.color = "red";
        deleteButton.style.fontStyle = "bold";
        li.append(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);

        })



    }

});






input.value = '';
input.focus();



