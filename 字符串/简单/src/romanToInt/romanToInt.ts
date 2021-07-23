const symbol: Map<string, number> = new Map<string, number>([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
]);

export default function romanToInt(s:string):number{
    if(typeof(s) !== 'string') return 0;
    let ans: number = 0;
    const n:number = s.length;

    for (let i:number = 0; i < n; i++) {
        // 由于ts在此处检测会提示value可能不为number，故而加||0
        const value:number = symbol.get(s.charAt(i))||0;
        if(i < n - 1 && value < (symbol.get(s.charAt(i+1))||0)) {
            ans -= value;
        } else ans +=value;
    }
    return ans;
}

