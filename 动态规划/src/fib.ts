export default (n: number): number => {
    if( n <= 1) return n;
    let cur: number = 1, prev: number = 0;
    for (let i = 1; i < n; i++) {
        const r: number = cur + prev;
        prev = cur;
        cur = r;
    }
    return cur;
}