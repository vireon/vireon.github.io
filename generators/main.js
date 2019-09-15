class Cat {
  constructor(prefix, suffix) {
    this.prefix = prefix;
    this.suffix = suffix;
  }

  Name() {
    return this.prefix[0].toUpperCase() + this.prefix.slice(1) + this.suffix
  }
}

let generatedCat = new Cat('needle','whisker');

const displayName = document.querySelector('#displayName')
displayName.textContent = generatedCat.Name();
