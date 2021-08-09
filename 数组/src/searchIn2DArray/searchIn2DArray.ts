export const searchIn2DArray = (arr: Array<Array<number>>, target: number): boolean => {
    let x:number = 0, y:number = arr.length-1;
    const len:number = arr.length;
    while (x < len && y >= 0){
        const current: number = arr[x][y];
        if( current === target){
            return true;
        } else if(current < target){
            x++;
        } else if(current > target){
            y--
        }
    }
    return false
}