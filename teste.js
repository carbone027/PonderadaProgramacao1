let resultado = 0

for (let i = 10; i >= 0; i -= 2) {
    if (i === 4) {
        continue;
    };
    if (i === 6) {
        break;
    };

    resultado += i;
};

console.log(resultado)