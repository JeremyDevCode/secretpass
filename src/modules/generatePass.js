const charset = {
    lowercase: "abcdefghijklmnñopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~",
};

/**
 * @param length The length of the password that will be generated.
 * @param lowercase Boolean value indicating whether the password includes lowercase letters.
 * @param uppercase Boolean value indicating whether the password includes uppercase letters.
 * @param numbers Boolean value indicating whether the password includes numbers.
 * @param symbols Boolean value indicating whether the password includes symbols.
*/

function generateSecretPass(
    length,
    lowercase,
    uppercase,
    numbers,
    symbols,
) {
    let secretPassTemplate = "";
    let secretPassGenerated = "";

    if (lowercase) secretPassTemplate += charset.lowercase;
    if (uppercase) secretPassTemplate += charset.uppercase;
    if (numbers) secretPassTemplate += charset.numbers;
    if (symbols) secretPassTemplate += charset.symbols;

    let i = 0;
    while (i < length) {
        const randomChar =
            secretPassTemplate[
                Math.floor(Math.random() * secretPassTemplate.length)
            ];
        secretPassGenerated += randomChar;
        i++;
    }
    return secretPassGenerated;
}

export { generateSecretPass }