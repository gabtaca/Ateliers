class Boutique {
    constructor(name, address, type, articles, totalCash) {
        this.name = name;
        this.address = address;
        this.type = type;
        this.articles = articles;
        this.totalCash = totalCash;
    }


    buy(articleName, price) {
        if (this.articles.includes(articleName)) {
            this.totalCash += price;
            console.log(`Bought ${articleName} for ${price}$. Total cash: ${this.totalCash}$`);
        } else {
            console.log(`${articleName} is not available in ${this.name}`);
        }
    }

    refund(name, amount) {
        if (name === this.name && amount <= this.totalCash) {
            this.totalCash -= amount;
            console.log(`Refunded ${amount}$. Total cash: ${this.totalCash}$`);
            return amount;
        } else {
            console.log(`Refund failed for ${name}`);
            return 0;
        }
    }

    toHtml() {
        const div = document.createElement('div');
        div.innerHTML = `
            <h2>${this.name}</h2>
            <p><strong>Address:</strong> ${this.address}</p>
            <p><strong>Type:</strong> ${this.type}</p>
            <p><strong>Total Cash:</strong> ${this.totalCash}$</p>
            <ul>
                ${this.articles.map(article => `<li>${article}</li>`).join('')}
            </ul>
        `;
        return div;
    }
}


const boutiques = [
    new Boutique("Boutique A", "Adresse A", "Type A", ["Article 1", "Article 2"], 1000),
    new Boutique("Boutique B", "Adresse B", "Type B", ["Article 3", "Article 4"], 1500),
    new Boutique("Boutique C", "Adresse C", "Type C", ["Article 5", "Article 6"], 2000)
];

boutiques.forEach(boutique => document.body.appendChild(boutique.toHtml()));
