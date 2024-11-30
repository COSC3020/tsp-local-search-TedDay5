function tsp_ls(distance_matrix) {
    if (distance_matrix <= 1) {
        return 0;
    }
    if (distance_matrix === 2) {
        return Math.min(distance_matrix[0][1], distance_matrix[1][0]);
    }

    var l = distance_matrix.length;
    var squence = [];
    var tmp;
    var minimum = Infinity;

    squence = squential_array(l);

    for(var i = 0; i < l; i++) {
        swap(squence, Math.floor(Math.random() * l), Math.floor(Math.random() * l))
    }

    let attempt = 0;
    let previous = null;
    let fixed = 0;
    let index = 2;

    while(attempt < (l ** 4)) {
        atempt++;
        tmp = distance(distance_matrix, squence);

        if(tmp < minimum) {
            minimum = tmp;
        }

        index = Math.floor(1 + Math.random() * (l - 1));

        if(previous === index) {
            if(index === 1) {
                index++;
            }
            else {
                index--;
            }
        }
        swap(squence, fixed, index);
        previous = index;
    }
    return minimum;
}

function swap(array, element1, element2) {
    var tmp = array[element1];
    array[element1] = array[element2];
    array[element2] = tmp;

    return;
}

function squential_array(i) {
    let sequence = [];

    for(var n = 0; n < i; n++) {
        sequence.push(n)
    }
    return sequence.slice(0,);
}

function distance(distance_matrix, squence) {
    var accumulator = 0;

    for(var j = 1; j < squence.length; j++) {
        accumulator += distance_matrix[squence[j - 1]][squence[j]]
    }
    return accumulator;
}
