function isPalindrome(x) {
  // your code here
  if (x.toLowerCase().split("").reverse().join("") == x.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
