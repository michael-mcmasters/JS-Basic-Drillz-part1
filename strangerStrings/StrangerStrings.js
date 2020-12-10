class StrangerStrings {

    getHelloWorld() {
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment) {
        return firstSegment + secondSegment;
    }

    getPrefix(input) {
        return input.substring(0, 3);
    }

    getSuffix(input) {
        return input.substring(3, 6);
    }

    getMiddleCharacter(input) {
        let middle = Math.floor(input.length / 2);
        return input[middle];
    }

    getFirstWord(input) {
        return input.split(" ")[0];
    }

    getSecondWord(spaceDelimnatedInput) {
        return spaceDelimnatedInput.split(" ")[1];
    }

    reverse(input) {
        let reversed = "";
        for (let i = input.length - 1; i >= 0; i--) {
            reversed += input.charAt(i);
        }
        return reversed;
    }
}

module.exports = StrangerStrings;