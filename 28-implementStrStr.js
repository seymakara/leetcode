const strStr = (haystack, needle) => {
  // Checking to prevent unecessary verification
  if (needle === '') return 0;
  if (haystack.length < needle.length) return -1;

  // loop through the hay. Do not go until the end of the hay. exclude the length of the needle
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    // if you find a matching letter with the first letter of the needle
    if (haystack[i] === needle[0]) {
      // change the matching flag to true
      let matching = true;
      //start another loop for needle, starting from 1  of needle
      for (let j = 1; j < needle.length; j++) {
        // if not matching change the flag value
        if (haystack[i + j] !== needle[j]) matching = false;
      }
      //if the flag value is still true return i
      if (matching) return i
    }
  }
  // Did not find
  return -1;
};