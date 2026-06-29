class DynamicArray {
    private capacity: number
    private numbers: number[]
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity
        this.numbers = new Array()
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.numbers[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.numbers[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.numbers.length < this.capacity) {
            this.numbers.push(n)
        } else {
            this.resize()
            this.numbers.push(n)
        }
    }

    /**
     * @returns {number}
     */
    popback(): number {
        return this.numbers.pop()
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.numbers.length
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity
    }
}
