function isAnagram(str1, str2) {
  const clean1 = str1.toLowerCase().split("").sort().join("");
  const clean2 = str2.toLowerCase().split("").sort().join("");

  return clean1 === clean2;
}

console.log(isAnagram("Listen", "Silent")); // true
console.log(isAnagram("Hello", "World"));   // false
