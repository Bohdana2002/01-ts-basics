function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]);           // 1
getFirstElement<string>(["a", "b", "c"]);     // "a"
getFirstElement<boolean>([true, false, true]); // true

console.log(getFirstElement<number>(([1, 2, 3])))
console.log(getFirstElement<string>(["a", "b", "c"]))
console.log(getFirstElement<boolean>([true, false, true]))

// getFirstElement<number>([1, 2, "5"]); // перевірка відповідно до пункту 4 - TypeScript забороняє змішаний масив при явному <number> 