function generateEngineer() {
return `

<div class="card rounded shadow m-4 col-3" style="width: 15rem;">
    <div class="card-header bg-primary text-white">
        <p>${this.name}</p>
        <p><i class="fas fa-glasses"></i>Engineer</p>
    </div>
    <div>
        <ul class="list-group col">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">Email: ${this.email}</li>
            <li class="list-group-item">Github: ${this.github}</li>
        </ul>
    </div>
</div>
`
};

module.exports = generateEngineer;