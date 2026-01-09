export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },







"longest-substring-without-repeating": {
  id: "longest-substring-without-repeating",
  title: "Longest Substring Without Repeating Characters",
  difficulty: "Medium",
  category: "String • Sliding Window",

  description: {
    text: "Given a string s, find the length of the longest substring without repeating characters.",
    notes: [
      "A substring is a contiguous sequence of characters within the string.",
      "Characters in the substring must be unique."
    ]
  },

  examples: [
    {
      input: 's = "abcabcbb"',
      output: "3",
      explanation:
        'The answer is "abc", with the length of 3.'
    },
    {
      input: 's = "bbbbb"',
      output: "1",
      explanation:
        'The answer is "b", with the length of 1.'
    }
  ],

  constraints: [
    "0 ≤ s.length ≤ 10⁵",
    "s consists of English letters, digits, symbols and spaces"
  ],

  starterCode: {
    javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Expected: 1`,

    python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))     # Expected: 1`,

    java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // 3
        System.out.println(lengthOfLongestSubstring("bbbbb"));    // 1
    }
}`
  },

  expectedOutput: {
    javascript: "3\n1",
    python: "3\n1",
    java: "3\n1"
  }
}
,



"median-of-two-sorted-arrays": {
  id: "median-of-two-sorted-arrays",
  title: "Median of Two Sorted Arrays",
  difficulty: "Hard",
  category: "Binary Search",

  description: {
    text: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    notes: [
      "The overall run time complexity should be O(log (m+n)).",
      "You may assume nums1 and nums2 cannot both be empty."
    ]
  },

  examples: [
    {
      input: "nums1 = [1,3], nums2 = [2]",
      output: "2.0",
      explanation:
        "Merged array is [1,2,3], median is 2."
    },
    {
      input: "nums1 = [1,2], nums2 = [3,4]",
      output: "2.5",
      explanation:
        "Merged array is [1,2,3,4], median is (2 + 3) / 2 = 2.5."
    }
  ],

  constraints: [
    "0 ≤ nums1.length ≤ 1000",
    "0 ≤ nums2.length ≤ 1000",
    "-10⁶ ≤ nums1[i], nums2[i] ≤ 10⁶"
  ],

  starterCode: {
    javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Write your solution here
}

// Test cases
console.log(findMedianSortedArrays([1,3], [2]));    // Expected: 2.0
console.log(findMedianSortedArrays([1,2], [3,4]));  // Expected: 2.5`,

    python: `def findMedianSortedArrays(nums1, nums2):
    # Write your solution here
    pass

# Test cases
print(findMedianSortedArrays([1,3], [2]))    # Expected: 2.0
print(findMedianSortedArrays([1,2], [3,4]))  # Expected: 2.5`,

    java: `class Solution {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        return 0.0;
    }

    public static void main(String[] args) {
        System.out.println(findMedianSortedArrays(new int[]{1,3}, new int[]{2}));     // 2.0
        System.out.println(findMedianSortedArrays(new int[]{1,2}, new int[]{3,4}));   // 2.5
    }
}`
  },

  expectedOutput: {
    javascript: "2\n2.5",
    python: "2.0\n2.5",
    java: "2.0\n2.5"
  }
}
,


"split-array-largest-sum": {
  id: "split-array-largest-sum",
  title: "Split Array Largest Sum",
  difficulty: "Hard",
  category: "Binary Search",

  description: {
    text: "Given an array nums and an integer k, split nums into k non-empty continuous subarrays. Minimize the largest sum among these subarrays.",
    notes: [
      "Each subarray must contain at least one element.",
      "Binary search is applied on the answer space."
    ]
  },

  examples: [
    {
      input: "nums = [7,2,5,10,8], k = 2",
      output: "18",
      explanation:
        "Split into [7,2,5] and [10,8]. The largest sum is 18."
    },
    {
      input: "nums = [1,2,3,4,5], k = 2",
      output: "9",
      explanation:
        "Split into [1,2,3] and [4,5]. Largest sum is 9."
    }
  ],

  constraints: [
    "1 ≤ nums.length ≤ 1000",
    "0 ≤ nums[i] ≤ 10⁶",
    "1 ≤ k ≤ nums.length"
  ],

  starterCode: {
    javascript: `function splitArray(nums, k) {
  // Write your solution here
}

// Test cases
console.log(splitArray([7,2,5,10,8], 2)); // Expected: 18
console.log(splitArray([1,2,3,4,5], 2));  // Expected: 9`,

    python: `def splitArray(nums, k):
    # Write your solution here
    pass

# Test cases
print(splitArray([7,2,5,10,8], 2))  # Expected: 18
print(splitArray([1,2,3,4,5], 2))   # Expected: 9`,

    java: `class Solution {
    public static int splitArray(int[] nums, int k) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(splitArray(new int[]{7,2,5,10,8}, 2)); // 18
        System.out.println(splitArray(new int[]{1,2,3,4,5}, 2));  // 9
    }
}`
  },

  expectedOutput: {
    javascript: "18\n9",
    python: "18\n9",
    java: "18\n9"
  }
}
,"house-robber": {
  id: "house-robber",
  title: "House Robber",
  difficulty: "Medium",
  category: "Dynamic Programming",

  description: {
    text: "You are given an integer array nums representing the amount of money of each house. You cannot rob adjacent houses.",
    notes: [
      "If you rob the current house, you cannot rob the previous one.",
      "Return the maximum amount of money you can rob."
    ]
  },

  examples: [
    {
      input: "nums = [1,2,3,1]",
      output: "4",
      explanation:
        "Rob house 1 (1) and house 3 (3) for a total of 4."
    },
    {
      input: "nums = [2,7,9,3,1]",
      output: "12",
      explanation:
        "Rob houses with money 2, 9, and 1 for a total of 12."
    }
  ],

  constraints: [
    "1 ≤ nums.length ≤ 100",
    "0 ≤ nums[i] ≤ 400"
  ],

  starterCode: {
    javascript: `function rob(nums) {
  // Write your solution here
}

// Test cases
console.log(rob([1,2,3,1]));    // Expected: 4
console.log(rob([2,7,9,3,1]));  // Expected: 12`,

    python: `def rob(nums):
    # Write your solution here
    pass

# Test cases
print(rob([1,2,3,1]))    # Expected: 4
print(rob([2,7,9,3,1]))  # Expected: 12`,

    java: `class Solution {
    public static int rob(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(rob(new int[]{1,2,3,1}));    // 4
        System.out.println(rob(new int[]{2,7,9,3,1}));  // 12
    }
}`
  },

  expectedOutput: {
    javascript: "4\n12",
    python: "4\n12",
    java: "4\n12"
  }
}
,

"longest-increasing-subsequence": {
  id: "longest-increasing-subsequence",
  title: "Longest Increasing Subsequence",
  difficulty: "Medium",
  category: "Dynamic Programming",

  description: {
    text: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    notes: [
      "A subsequence is derived by deleting some or no elements without changing order.",
      "The sequence must be strictly increasing."
    ]
  },

  examples: [
    {
      input: "nums = [10,9,2,5,3,7,101,18]",
      output: "4",
      explanation:
        "The longest increasing subsequence is [2,3,7,101]."
    },
    {
      input: "nums = [0,1,0,3,2,3]",
      output: "4",
      explanation:
        "One possible LIS is [0,1,2,3]."
    }
  ],

  constraints: [
    "1 ≤ nums.length ≤ 2500",
    "-10⁴ ≤ nums[i] ≤ 10⁴"
  ],

  starterCode: {
    javascript: `function lengthOfLIS(nums) {
  // Write your solution here
}

// Test cases
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // Expected: 4
console.log(lengthOfLIS([0,1,0,3,2,3]));        // Expected: 4`,

    python: `def lengthOfLIS(nums):
    # Write your solution here
    pass

# Test cases
print(lengthOfLIS([10,9,2,5,3,7,101,18]))  # Expected: 4
print(lengthOfLIS([0,1,0,3,2,3]))          # Expected: 4`,

    java: `class Solution {
    public static int lengthOfLIS(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLIS(new int[]{10,9,2,5,3,7,101,18})); // 4
        System.out.println(lengthOfLIS(new int[]{0,1,0,3,2,3}));        // 4
    }
}`
  },

  expectedOutput: {
    javascript: "4\n4",
    python: "4\n4",
    java: "4\n4"
  }
}




,




"search-in-rotated-sorted-array": {
  id: "search-in-rotated-sorted-array",
  title: "Search in Rotated Sorted Array",
  difficulty: "Medium",
  category: "Binary Search",

  description: {
    text: "There is an integer array nums sorted in ascending order, which is rotated at an unknown pivot. Given the array nums and a target value, return the index of target if it is in the array, or -1 if it is not.",
    notes: [
      "The array contains distinct values.",
      "You must write an algorithm with O(log n) runtime complexity."
    ]
  },

  examples: [
    {
      input: "nums = [4,5,6,7,0,1,2], target = 0",
      output: "4",
      explanation:
        "Target 0 is found at index 4."
    },
    {
      input: "nums = [4,5,6,7,0,1,2], target = 3",
      output: "-1",
      explanation:
        "Target 3 does not exist in the array."
    }
  ],

  constraints: [
    "1 ≤ nums.length ≤ 5000",
    "-10⁴ ≤ nums[i] ≤ 10⁴",
    "All values of nums are unique",
    "nums is guaranteed to be rotated"
  ],

  starterCode: {
    javascript: `function search(nums, target) {
  // Write your solution here
}

// Test cases
console.log(search([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Expected: -1`,

    python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([4,5,6,7,0,1,2], 0))  # Expected: 4
print(search([4,5,6,7,0,1,2], 3))  # Expected: -1`,

    java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 0)); // 4
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 3)); // -1
    }
}`
  },

  expectedOutput: {
    javascript: "4\n-1",
    python: "4\n-1",
    java: "4\n-1"
  }
}
,

};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },

  
};
