function getFirstEle<T>(agr: T[]) {
    return agr[0]
}


const val1 = getFirstEle(["Himanshu", "Bhushan"])
const val2 = getFirstEle<number>([1, 2])

console.log(val1 + val2)