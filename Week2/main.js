// 1. Reverse a number
function q1(num) {
  const intArr = num.toString().split("");
  const newNum = intArr.reverse().join("");
  return parseFloat(newNum) * Math.sign(num);
}
console.log("1. ", q1(32243));

// 2. Check palindrome
function q2(s) {
  if (!s) return true;
  s = s.toLowerCase();
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    // Check left is alphanumeric
    while (
      left < right &&
      !(
        (s.charAt(left) >= "a" && s.charAt(left) <= "z") ||
        (s.charAt(left) >= "0" && s.charAt(left) <= "9")
      )
    ) {
      left++;
    }
    // Check right is alphanumeric
    while (
      left < right &&
      !(
        (s.charAt(right) >= "a" && s.charAt(right) <= "z") ||
        (s.charAt(right) >= "0" && s.charAt(right) <= "9")
      )
    ) {
      right--;
    }
    if (s.charAt(left) != s.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log("2. ", q2("madam"));
console.log("   ", q2("nurses run"));

// 3. String combination
function q3(s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      arr.push(s.slice(i, j));
    }
  }
  return arr;
}
console.log("3. ", q3("dog"));

// 4. Sort characters on alphabetical order
function q4(s) {
  var arr = s.split("");
  var tmp;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr.join("");
  // Way 2
  // return arr.sort().join('');
}
console.log("4. ", q4("webmAster"));

// 5. Convert every first letter to uppercase
function q5(s) {
  const arr = s.split(" ");
  const newarr = arr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return newarr.join(" ");
}
console.log("5. ", q5("the quick brown fox"));

// 6. Find longest word
function q6(s) {
  const arr = s.split(" ");
  let max = arr[0].length,
    maxLoc = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      maxLoc = i;
    }
  }
  return arr[maxLoc];
}
console.log("6. ", q6("Web Development Tutorial"));

// 7. Count the number of vowels in string
function q7(s) {
  return s.match(/[aeiou]/gi).length;
}
console.log("7. ", q7("the quick brown fox"));

// 8. Check if a number is prime or not
function q8(num) {
  if (num <= 1) return false;
  else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
}
console.log("8. ", q8(2));

// 9. Returns type of input
function q9(input) {
  return typeof input;
}
console.log("9. ", q9(2));

// 10. n rows x n cols identity matrix
function q10(n) {
  let x = new Array(n);
  for (let i = 0; i < n; i++) {
    x[i] = new Array(n).fill(0);
    x[i][i] = 1;
  }
  return x;
}
console.log("10. ", q10(3));

// 11. Find second lowest and second greatest
function q11(arr) {
  if (arr.legnth <= 2) return null;
  let i;
  let largest = secondMax = Math.max();
  let smallest = secondMin = Math.min();
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondMax = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondMax) {
      secondMax = arr[i];
    }
    if (arr[i] < smallest) {
      sencondMin = smallest;
      smallest = arr[i];
    } else if (arr[i] != smallest && arr[i] < secondMin) {
      secondMin = arr[i];
    }
  }
  let ans = [];
  ans.push(secondMin);
  ans.push(secondMax);
  return ans;
}
console.log("11. ", q11([1, 2, 3, 4, 5]));
console.log("   ", q11([1, 2]));

// 12. Check if the number is perfect
function q12(num) {
  if (num <= 1) return false;
  else {
    let sum = 1;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        sum = sum + i;
      }
    }
    return sum == num;
  }
}
console.log("12. ", q12(2));
console.log("   ", q12(6));
console.log("   ", q12(10));
console.log("   ", q12(28));
console.log("   ", q12(496));
console.log("   ", q12(500));

// 13. Find all factors of a positive integer
function q13(num) {
  if (num <= 1) return null;
  else {
    let factor = [1, num];
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        factor.push(i);
      }
    }
    return factor;
  }
}
console.log("13. ", q13(2));
console.log("   ", q13(6));
console.log("   ", q13(10));
console.log("   ", q13(28));

// 14. Convert amount to conis
function q14(amount, coins) {
  var ans = [];
  for (let i = 0; i < coins.length; i++) {
    if (amount >= coins[i]) {
      ans.push(coins[i]);
      amount = amount - coins[i];
      i--;
    }
  }
  return ans;
}
console.log("14. ", q14(46, [25, 10, 5, 2, 1]));

// 15. Compute exponent
function q15(b, n) {
  let res = 1;
  let exp;
  if (n < 0) {
    exp = Math.abs(n);
  } else {
    exp = n;
  }
  for (let i = 1; i <= exp; i++) {
    res = res * b;
  }
  return n > 0 ? res : 1 / res;
}
console.log("15. ", q15(2, 3));
console.log("   ", q15(2, -3));

// 16. Extract unique chars from a string
function q16(s) {
  let res = new Set(),
    ans = "";
  s.split("").forEach((a) =>{
    res.add(a);
  });
  res.forEach((val) => {
    ans = ans + val;
  });
  return ans;
}
console.log("16. ", q16("thequickbrownfoxjumpsoverthelazydog"));
console.log("   ", q16("aaabbxxsdfgdd"));

// 17. # of occurences of each letter in a string
function q17(s) {
  let occMap = new Map();
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (occMap.has(c)) {
      occMap.set(c, occMap.get(c) + 1);
    } else {
      occMap.set(c, 1);
    }
  }
  return occMap;
}
console.log("17. ", q17("abooobmca"));

// 18. Binary search: assume the array is sorted
function q18(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return null;
}
console.log("18. ", q18([1, 3, 5, 7, 9], 5));

// 19. Returns array elements larger than a number
function q19(arr, target) {
  arr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      return arr.slice(i);
    }
  }
  return null;
}
console.log("19. ", q19([5, 6, 8, 2, 1], 5));

// 20. Generate a random string with length n
function q20(n) {
  const charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let res = " ";
  for (let i = 0; i < n; i++) {
    res = res + charList.charAt(Math.floor(Math.random() * charList.length));
  }
  return res;
}
console.log("20. ", q20(6));

// 21. Get all possible subsets with fixed length
function q21(arr, n) {
  let subset = [],
    output;
  for (let i = 0; i < Math.pow(2, arr.length); i++) {
    output = [];
    let x = arr.length - 1;
    while (x >= 0) {
      if ((i & (1 << x)) !== 0) {
        output.push(arr[x]);
      }
      x--;
    }
    if (output.length == n) {
      subset.push(output);
    }
  }
  return subset;
}
console.log("21. ", q21([1, 2, 3], 2));

// 22. Count the occurence of a char in a string
function q22(s, c) {
  let count = 0;
  s.split("").forEach((a) => {
    if (a === c) {
      count += 1;
    }
  });
  return count;
}
console.log("22. ", q22("microsoft.com", "o"));

// 23. Find the first non-repeated char
function q23(s) {
  let res = "";
  let count;
  let arr = s.split("");
  for (let j = 0; j < arr.length; j++) {
    count = 0;
    for (let i = 0; i < s.length; i++) {
      if (arr[j] === arr[i]) {
        count += 1;
      }
    }
    if (count == 1) {
      res = arr[j];
      break;
    }
  }
  return res;
}
console.log("23. ", q23("abacddbec"));

// 24. Bubble sort
function q24(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= i; j--) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(
  "24. ",
  q24([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);
console.log("   ", q24([12, 200,39, 70,81,2]));

// 25. Return the longest country name
function q25(arr){
    let longest = 0, loc;
    arr.forEach((name, index) => {
        if (name.length > longest) {
            loc = index;
            longest = name.length;
        }
    });
    return arr[loc];
}
console.log("25. ", q25(["Australia", "Germany", "United States of America"]));

// 26. Find the longest substring without repeating chars
function q26(s){
    const locations = new Map();
    let maxStart = 0, maxLen = 0 , i;
    let currLen, currStart = 0;
    locations.set(s[0], 0);
    for (i = 1; i < s.length; i++) {
        // If character never appears
        if (!locations.has(s[i])){
            locations.set(s[i], i);
        } else {
            // If character appears after current substring start point
            if (locations.get(s[i]) >= currStart) {
                currLen = i - currStart;
                if (maxLen < currLen) {
                    maxLen = currLen;
                    maxStart = currStart;
                }
                currStart = locations.get(s[i]) + 1;
            }
            locations.set(s[i], i);
        }
    }
    if (maxLen < i - currStart) {
        maxLen = i - currStart;
        maxStart = currStart;
    }
    return s.substr(maxStart, maxLen);
}
console.log("26. ", q26("abcabcdf"));

// 27. Return the longest palindrome in a given string
function q27(s){
    function validP(s){
        return s.split('').reverse().join('') == s;
    }
    let maxLen = 0, maxPa = '';
    for (let i = 0; i < s.length; i++){
        const subStr = s.substr(i, s.length);
        for (let j = subStr.length; j >= 0; j--) {
            const subSub = subStr.substr(0,j);
            if (subSub.length <= 1) continue;

            if (validP(subSub)) {
                if (subSub.length > maxLen) {
                    maxLen = subSub.length;
                    maxPa = subSub;
                }
            }
        }
    }
    return maxPa;
}
console.log("27. ", q27("abracadabra"));
console.log("   ", q27("bananas"));

// 28. Pass a JS function as parameter
function q28(num, myFunc){
    console.log("   ", "Input num is: " + num);
    console.log("   ", "Reversed number is: " + myFunc(num));
}
console.log("28. ");
q28(9801563, q1)

// 29. Get function name
function q29(myFunc){
    return myFunc.name;
}
console.log("29. ", q29(q29));