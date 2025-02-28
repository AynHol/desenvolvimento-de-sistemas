async function addPerson(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;

    if (!name || !age || !email || !phone || !address || !city || !state) {
        alert("Há informações faltando...");
        return;
    }

    const person = {
        name: name,
        age: age,
        email: email,
        phone: phone,
        address: address,
        city: city,
        state: state,
    };

    await fetch("http://localhost:3000/person", {
        method: "POST",
        body: JSON.stringify(person),
        headers: { "Content-type": "application/json" },
    });

    const response = await fetch("http://localhost:3000/person", {
        method: "GET",
    });

    const personListElement = document.createElement("div");
    personListElement.classList.add("person-list-item");
    personListElement.innerHTML = `
    <h1>${response.name}</h1>
    <h2>${response.age}</h2>
    <h2>${response.email}</h2>
    <h2>${response.phone}</h2>
    <h2>${response.address}</h2>
    <h2>${response.city}</h2>
    <h2>${response.state}</h2>
    `;

    const personList = document.getElementById("person-list");
    personList.appendChild(personListElement);
}
