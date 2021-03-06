function assert(condition, char) {

    if (!condition) {
        throw message || "Assertion failed" + char;
    }
}
