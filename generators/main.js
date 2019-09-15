class Cat {
  constructor(prefix, suffix) {
    this.prefix = prefix;
    this.suffix = suffix;
  }

  Name() {
    return `${this.prefix}${this.suffix}`.toUpperCase()
  }
}

let generatedCat = new Cat('needle','whisker');

const displayName = document.querySelector('#displayName')
displayName.textContent = generatedCat.Name();
