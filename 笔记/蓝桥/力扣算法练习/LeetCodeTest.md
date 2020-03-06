# LeetCodeTest

## 一、简单

### 1.[数组、哈希表]两数之和

给定一个整数数组` nums` 和一个目标值 `target`，请你在该数组中找出和为目标值的那 **两个** 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

**示例:**

>  给定 nums = [2, 7, 11, 15], target = 9
>
>  
>
>  因为 nums[0] + nums[1] = 2 + 7 = 9
>
>  所以返回 [0, 1]

**题解：**

**一遍哈希表：**

事实证明，我们可以一次完成。在进行迭代并将元素插入到表中的同时，我们还会回过头来检查表中是否已经存在当前元素所对应的目标元素。如果它存在，那我们已经找到了对应解，并立即将其返回。

**代码实现：**

```java
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class TestOne {
	public static void main(String[] args) {
		int[] nums = { 2, 7, 11, 15 };
		System.out.println(Arrays.toString(twoSum(nums, 9)));
	}

	public static int[] twoSum(int[] nums, int target) {
		Map<Integer, Integer> map = new HashMap<Integer, Integer>();
		for (int i = 0; i < nums.length; i++) {
			int complement = target - nums[i];
			if (map.containsKey(complement)) {
				return new int[] { map.get(complement), i };
			}
			map.put(nums[i], i);
		}
		throw new IllegalArgumentException("No two sum solution");
	}

}

```



### 2.[数学]回文数

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

**示例 1:**

> 输入: 121
> 输出: true

**示例 2:**

> 输入: -121
> 输出: false
> 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

**示例 3:**

> 输入: 10
> 输出: false
> 解释: 从右向左读, 为 01 。因此它不是一个回文数。

**题解：**

**进阶解法---数学解法：**

通过取整和取余操作获取整数中对应的数字进行比较。

举个例子：1221 这个数字。

- 通过计算 1221 / 1000， 得首位1
- 通过计算 1221 % 10， 可得末位 1
- 进行比较
- 再将 22 取出来继续比较

**动画描述**

![img](img\6df9cbf08ef47a1761e7426aab48228a8dcfc9c5f89c82b44148ad0e24efe511-file_1558924390360)

**代码实现**

~~~java
public class TestOne {
	public static void main(String[] args) {
		System.out.println(isPalindrome(10201));
	}

	public static boolean isPalindrome(int x) {
		// 边界判断
		if (x < 0)
			return false;
		int div = 1;
		//	
		while (x / div >= 10) {
			div *= 10;
		}
		while (x > 0) {
			int left = x / div;
			int right = x % 10;
			if (left != right) {
				return false;
			}
			x = (x % div) / 10;
			div /= 100;
		}
		return true;
	}

}

~~~



### 3.完美数

对于一个 **正整数**，如果它和除了它自身以外的所有正因子之和相等，我们称它为“完美数”。

给定一个 **整数**` n`， 如果他是完美数，返回 `True`，否则返回 `False`

 

**示例：**

> 输入: 28
> 输出: True
> 解释: 28 = 1 + 2 + 4 + 7 + 14

**提示：**

输入的数字` n` 不会超过 100,000,000. (1e8)



**题解：**

+ 标签：数学

+ 首先由于完美数的定义，需要排除自身，所以数字 **1** 一定不是完美数

+ 其次我们需要计算 `num` 除了它自身以外的所有正因子之和 sum，正因子必然是成对出现的，故而我们只需要遍历到 `num `的平方根 `sqrt `即可
  + 以 **36** 为例，它的非自身外正因子有，`1、2、3、4、6、9、12、18`，其中 **1** 和 **6** 单独计算，`[2, 18]、[3, 12]、[4, 9]`都是对应关系、
  + 所以只需要遍历到 **36** 的平方根 **6** 就可以获取全部正因子
  + **1** 单独计算的原因是要排除自身，**6**单独计算的原因是 `6 * 6 = 36`，两个值相同，故而只能计算一遍
  
+ 时间复杂度：$O(\sqrt{n})$，n 为 `num `的大小
  
    **Tips：完美数只有 6, 28, 496, 8128, 33550336 这几个，可以通过判断该数字是否为以下几个来解决**



**代码实现**

~~~java
public class TestOne {
	public static void main(String[] args) {
		System.out.println(checkPerfectNumber(-11));

	}

	public static boolean checkPerfectNumber(int num) {
		if (num == 1 || num < 0) {
			return false;
		}
		int sum = 1; // 正整数一定会有一个1，同时不用考虑自身，所以单独处理
		int i = 2;
		double sqrt = Math.sqrt(num);// Math.sqrt()该函数是开平方根
		for (; i < sqrt; i++) {
			if (num % i == 0) {
				sum += i;
				sum += num / i;
			}
		}
		// 此处单独处理的原因在于只需要加1次i值，如果在循环中会加2次
		if (i * i == num) {
			sum += i;
		}
		return sum == num;

	}

}

~~~





### 4.整数翻转

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

**示例 1:**

> 输入: 123
> 输出: 321

 **示例 2:**

> 输入: -123
> 输出: -321

**示例 3:**

> 输入: 120
> 输出: 21

**注意:**

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 $[−2^31,  2^31 − 1]$。请根据这个假设，如果反转后整数溢出那么就返回 0。



**题解：**

将传入的数字先转换成字符串
在将字符串转换成对应字符数组
将字符数组翻转
将翻转之后的字符数组转换成字符串
将字符串转换成整型

**注意：**

因为要考虑翻转之后的数字可能太大，造成整型溢出问题，所以要捕获一下异常
如果出现了异常，那肯定就是溢出了，所以直接返回0

**代码实现：**

~~~java
public class TestOne {
	public static void main(String[] args) {
		System.out.println(reverse(123));
	}

	public static int reverse(int x) {
		String num = Integer.toString(x);
		char[] arr = num.toCharArray();
		char tmp = ' ';
		String str = "";
		int j = arr.length - 1;

		if (x > 0) {
			for (int i = 0; i < arr.length / 2; i++) {
				tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
				j--;
			}

		} else if (x < 0) {
			for (int i = 1; i <= arr.length / 2; i++) {
				tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
				j--;
			}
		}
		for (int k = 0; k < arr.length; k++) {
			str += arr[k];
		}

        // 因为要考虑翻转之后的数字可能太大，造成整型溢出问题，所以要捕获一下异常
        // 如果出现了异常，那肯定就是溢出了，所以直接返回0
		try {
			int n = Integer.valueOf(str);
			return n;
		} catch (Exception e) {
			return 0;
		}

	}

}

~~~



### 5.[数组、双指针]删除排序数组中的重复项

给定一个排序数组，你需要在**原地**删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在**原地修改输入数组**并在使用 O(1) 额外空间的条件下完成。

**示例 1:**

> 给定数组 nums = [1,1,2], 
> 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
> 你不需要考虑数组中超出新长度后面的元素。

**示例 2:**

> 给定 nums = [0,0,1,1,1,2,2,3,3,4],
> 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
> 你不需要考虑数组中超出新长度后面的元素。

**说明:**

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以“**引用**”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

> // **nums** 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
> int len = removeDuplicates(nums);
>
> // 在函数里修改输入数组对于调用者是可见的。
> // 根据你的函数返回的长度, 它会打印出数组中**该长度范围内**的所有元素。
> for (int i = 0; i < len; i++) {
>  print(nums[i]);
> }



**题解：**

**双指针法算法**

数组完成排序后，我们可以放置两个指针 $i$ 和 $j$，其中$ i$是慢指针，而 $j $是快指针。只要 $nums[i]=nums[j]$，我们就增加$ j $以跳过重复项。

当我们遇到 $nums[j] \neq nums[i] $时，跳过重复项的运行已经结束，因此我们必须把它（$nums[j]）$的值复制到 $nums[i + 1]$。然后递增$ i$，接着我们将再次重复相同的过程，直到 $j $到达数组的末尾为止。

**复杂度分析**

- 时间复杂度：$O(n)$，假设数组的长度是 $n$，那么 $i $和 $j $分别最多遍历 $n$ 步。
- 空间复杂度：$O(1)$。



**代码实现：**

~~~java

public class TestOne {
	public static void main(String[] args) {
		int[] nums = { 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 };
		System.out.println(removeDuplicates(nums));
	}

	public static int removeDuplicates(int[] nums) {
		if (nums.length == 0)
			return 0;
		int i = 0;
		for (int j = 1; j < nums.length; j++) {
			if (nums[j] != nums[i]) {
				i++;
				nums[i] = nums[j];
			}
		}
		return i + 1;
	}

}

~~~



### 6.[集合]杨辉三角(集合方法)

 给定一个非负整数 *numRows，*生成杨辉三角的前 *numRows* 行。 

![PascalTriangleAnimated2](img\PascalTriangleAnimated2.gif)

在杨辉三角中，每个数是它左上方和右上方的数的和。

**示例:**

> 输入: 5
> 输出:
> [
>      [1],
>     [1,1],
>    [1,2,1],
>   [1,3,3,1],
>  [1,4,6,4,1]
> ]



**题解：**

**动态规划：**

**思路：**

 如果能够知道一行杨辉三角，我们就可以根据每对相邻的值轻松地计算出它的下一行。 

**算法：**

虽然这一算法非常简单，但用于构造杨辉三角的迭代方法可以归类为动态规划，因为我们需要基于前一行来构造每一行。

首先，我们会生成整个` triangle` 列表，三角形的每一行都以子列表的形式存储。然后，我们会检查行数为 0 的特殊情况，否则我们会返回 [1]。如果 $numRows > 0$，那么我们用 [1] 作为第一行来初始化 `triangle `with [1]，并按如下方式继续填充：

![未标题1](img\未标题1.gif)

**代码实现：**

~~~java
import java.util.ArrayList;
import java.util.List;

public class TestOne {
	public static void main(String[] args) {
		// 测试输出杨辉三角
		for (List list : generate(5)) {
			System.out.println(list);
		}
	}

	public static List<List<Integer>> generate(int numRows) {
		List<List<Integer>> triangle = new ArrayList<List<Integer>>();

		// 如果用户输入的数字是0，则不会生成杨辉三角
		if (numRows == 0) {
			return triangle;
		}

		// 第一行一定是一个1
		triangle.add(new ArrayList<Integer>());
		triangle.get(0).add(1);

		// 因为第一行上一步已经生成了，所以直接从第二行开始
		for (int rowNum = 1; rowNum < numRows; rowNum++) {
			List<Integer> row = new ArrayList<Integer>();
			List<Integer> prevRow = triangle.get(rowNum - 1);

			// 每一行第一个元素总是1
			row.add(1);

			// 每个三角形元素（除了每行的第一个和最后一个之外）
			// 等于上边一行的左边和右边元素之和
			// 因为每一行第一个元素已经为1了，所以直接从第二个元素开始
			for (int j = 1; j < rowNum; j++) {
				row.add(prevRow.get(j - 1) + prevRow.get(j));
			}

			// 每一行最后一个元素总是1
			row.add(1);

			triangle.add(row);
		}

		return triangle;
	}

}

~~~



### 7.[数组]杨辉三角(一维数组方法)

**图解：**

![20181028122731117](img\20181028122731117.png)

**代码实现：**

~~~java

public class TestOne {
	public static void main(String[] args) {
		// 利用一位数组打印输出杨辉三角
		value(5);
	}
	
	public static void value(int n) {
		int i=1;
		int triggle[] = new int[n];
		for(i=0;i<n;i++) {
			triggle[i]=1;//末尾元素一直为1
			for (int j=i-1;j>0;j--){
				triggle[j]= triggle[j-1]+triggle[j];
			}
			for(int k=n-i-1;k>0;k--) {//打印空格
				System.out.print(" ");
			}
			for (int j=0;j<=i;j++) {//输出该行的一维数组
				System.out.print(triggle[j]+" ");
			}
			System.out.println();
		}
		
	}


}

~~~





### 8.[分治、数组、递归]二分查找算法

**分治法：**

**二分查找操作的数据集是一个有序的数据集**。开始时，先找出有序集合中间的那个元素。如果此元素比要查找的元素大，就接着在较小的一个半区进行查找；反之，如果此元素比要找的元素小，就在较大的一个半区进行查找。在每个更小的数据集中重复这个查找过程，直到找到要查找的元素或者数据集不能再分割。

**二分查找能应用于任何类型的数据，只要能将这些数据按照某种规则进行排序**。然而，正因为它依赖于一个有序的集合，这使得它在处理那些频繁插入和删除操作的数据集时不太高效。这是因为，对于插入和操作来说，为了保证查找过程正常进行，必须保证数据集始终有序。相对于查找来说，维护一个有序数据集的代价更高。此外，元素必须存储在连续的空间中。**因此，当待搜索的集合是相对静态的数据集时，此时使用二分查找是最好的选择**。



**图示：**



![img](img\1281268-20180509063436446-1450605939.png)



**代码实现：**

~~~java
import java.util.Arrays;

public class TestOne {
	public static void main(String[] args) {
		int arr[] = { 9, 1, 2, 6, 4, 8 };
		Arrays.sort(arr);
		// 调用递归方法的二分查找法
		System.out.println(binarySearch(arr, 0, arr.length - 1, 4));
		// 调用非递归方法的二分查找法
		System.out.println(binarySearch2(arr, 4));

	}

	// 二分查找法
	// 二分查找的前提是有序数组

	/**
	 * @param arr
	 *            要查找的有序数组
	 * @param left
	 *            查找范围的最左边的下标
	 * @param right
	 *            查找范围的最右边的下标
	 * @param findVal
	 *            要查找的值
	 * @return 如果找到了要查找的值，则返回该数字的下标，如果没有找到则返回-1
	 */
	public static int binarySearch(int[] arr, int left, int right, int findVal) {

		if (left > right) {
			return -1;
		}

		int mid = (left + right) / 2;
		int midVal = arr[mid];

		if (findVal < midVal) {
			return binarySearch(arr, left, mid - 1, findVal);
		} else if (findVal > midVal) {
			return binarySearch(arr, mid + 1, right, findVal);
		} else {
			return mid;
		}

	}

	// 二分查找法非递归的方式
	public static int binarySearch2(int[] arr, int findVal) {
		int left = 0;
		int right = arr.length - 1;

		while (left <= right) {
			int mid = (left + right) / 2;

			if (findVal == arr[mid]) { // 说明继续查找
				return mid;
			} else if (findVal < arr[mid]) {
				right = mid - 1;
			} else if (findVal > arr[mid]) {
				left = mid + 1;
			}

		}

		return -1;
	}

}

~~~



### 9.[数学]斐波那契数

斐波那契数，通常用 `F(n)` 表示，形成的序列称为**斐波那契数列**。该数列由 `0 `和` 1` 开始，后面的每一项数字都是前面两项数字的和。也就是：

> F(0) = 0,   F(1) = 1
> F(n) = F(n - 1) + F(n - 2), 其中 n > 1.

 给定 `n`，计算 `F(n)`。

**示例 1：**

> 输入：2
> 输出：1
> 解释：F(2) = F(1) + F(0) = 1 + 0 = 1.

**示例 2：**

> 输入：3
> 输出：2
> 解释：F(3) = F(2) + F(1) = 1 + 1 = 2.

**示例 3：**

> 输入：4
> 输出：3
> 解释：F(4) = F(3) + F(2) = 2 + 1 = 3.

**提示：**

* 0 ≤ `n `≤ 30



**代码实现：**

~~~java
public class TestOne {
	public static void main(String[] args) {

		System.out.println(fib(5));

	}

	// 求斐波那契数列
	public static int fib(int n) {
		if (n == 0 || n == 1 || n == 2) {
			return 1;
		}
		int n1 = 1;
		int n2 = 1;
		int result = 0;
		for (int i = n; i > 2; i--) {
			result = n1 + n2;
			n1 = n2;
			n2 = result;
		}

		return result;
	}

}

~~~



### 10.[数学]斐波那契数列

写一个函数，输入 `n `，求斐波那契（Fibonacci）数列的第 `n` 项。斐波那契数列的定义如下：

> F(0) = 0,   F(1) = 1
> F(N) = F(N - 1) + F(N - 2), 其中 N > 1.

斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

 

**示例 1：**

> 输入：n = 2
> 输出：1

**示例 2：**

> 输入：n = 5
> 输出：5

**提示：**

0 <= `n` <= 100

**代码实现：**

~~~java
public class TestOne {
	public static void main(String[] args) {

		System.out.println(fib(3));
	}

	public static int fib(int n) {
		if (n == 0) {
			return 0;
		}
		if (n == 1) {
			return 1;
		}
		int n1 = 0;
		int n2 = 1;
		int result = 0;
		for (int i = n; i >= 2; i--) {
			result = n1 + n2;
			n1 = n2;
			n2 = result % 1000000007;
		}

		return n2;
	}

}

~~~



### 11.[动态规划、递归]爬楼梯

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**注意：**给定 n 是一个正整数。

**示例 1：**

>输入： 2
>输出： 2
>解释： 有两种方法可以爬到楼顶。
>
>1.  1 阶 + 1 阶
>2.  2 阶

**实例2：**

> 输入： 3
> 输出： 3
> 解释： 有三种方法可以爬到楼顶。
>
> 1.  1 阶 + 1 阶 + 1 阶
> 2.  1 阶 + 2 阶
> 3.  2 阶 + 1 阶



**解决方法：**

**方法一：暴力法**

在暴力法中，我们将会把所有可能爬的阶数进行组合，也就是 1 和 2 。而在每一步中我们都会继续调用 climbStairs 这个函数模拟爬 11 阶和 22 阶的情形，并返回两个函数的返回值之和。

$climbStairs(i,n)=climbStairs(i+1,n)+climbStairs(i+2,n)$

其中i定义了当前的阶数，而n定义了目标阶数

 在 n = 5 时的递归树将是这样的： 

![07a21d45a33309d39925127eb0a8611fce5212cb932e4a6fe9914b30c885d1f6-file_1555697913334](img\07a21d45a33309d39925127eb0a8611fce5212cb932e4a6fe9914b30c885d1f6-file_1555697913334.jpg)





**代码实现：**

~~~java
public class TestOne {
	public static void main(String[] args) {

		System.out.println(climbStairs(5));
	}

	public static int climbStairs(int n) {
        return climb_Stairs(0, n);
    }
    public static int climb_Stairs(int i, int n) {
        if (i > n) {
            return 0;
        }
        if (i == n) {
            return 1;
        }
        return climb_Stairs(i + 1, n) + climb_Stairs(i + 2, n);
    }


}

~~~



**方法二：记忆法递归**

在上一种方法中，我们计算每一步的结果时出现了冗余。另一种思路是，我们可以把每一步的结果存储在 memo 数组之中，每当函数再次被调用，我们就直接从 memo 数组返回结果。

在 memo 数组的帮助下，我们得到了一个修复的递归树，其大小减少到n。



**代码实现：**

~~~java
public class TestOne {
	public static void main(String[] args) {

		System.out.println(climbStairs(5));
	}

	public static int climbStairs(int n) {
		int memo[] = new int[n + 1];
		return climb_Stairs(0, n, memo);
	}

	public static int climb_Stairs(int i, int n, int memo[]) {
		if (i > n) {
			return 0;
		}
		if (i == n) {
			return 1;
		}
		if (memo[i] > 0) {
			return memo[i];
		}
		memo[i] = climb_Stairs(i + 1, n, memo) + climb_Stairs(i + 2, n, memo);
		return memo[i];
	}

}

~~~



**方法三：动态规划**

不难发现，这个问题可以被分解为一些包含最优子结构的子问题，即它的最优解可以从其子问题的最优解来有效地构建，我们可以使用动态规划来解决这一问题。

第 i 阶可以由以下两种方法得到：

1.在第$ (i-1) $阶后向上爬 1 阶。

2.在第 $(i-2)$ 阶后向上爬 2 阶。

所以到达第 $i$ 阶的方法总数就是到第 $(i−1)$ 阶和第 $(i−2)$ 阶的方法数之和。

令 $dp[i]$ 表示能到达第 $i$ 阶的方法总数：

$dp[i]=dp[i-1]+dp[i-2]$

**示例：**

![tc](img\tc.gif)



**代码实现：**

~~~java
public class TestOne {
	public static void main(String[] args) {

		System.out.println(climbStairs(5));
	}

	public static int climbStairs(int n) {
		if (n == 1) {
			return 1;
		}
		int[] dp = new int[n + 1];
		dp[1] = 1;
		dp[2] = 2;
		for (int i = 3; i <= n; i++) {
			dp[i] = dp[i - 1] + dp[i - 2];
		}
		return dp[n];
	}

}

~~~



### 12.最大子序和

给定一个整数数组 `nums `，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

**示例:**

> 输入: [-2,1,-3,4,-1,2,1,-5,4],
> 输出: 6
> 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。



**思路：**

* 这道题用动态规划的思路并不难解决，比较难的是后文提出的用分治法求解，但由于其不是最优解法，所以先不列出来
* 动态规划的是首先对数组进行遍历，当前最大连续子序列和为 sum，结果为 ans
* 如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字
* 如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字
* 每次比较 sum 和 ans的大小，将最大值置为ans，遍历结束返回结果
* 时间复杂度：O(n)O(n)



**图解：**

![tc2](img\tc2.gif)



**代码实现：**

~~~java
public class TestOne {

	public static void main(String[] args) {

		int arr[]={-2,3,-1,1,-3};
		System.out.println(maxSubArray(arr));
	}
	public static int maxSubArray(int[] nums) {
        int ans = nums[0];
        int sum = 0;
        for(int num: nums) {
            if(sum > 0) {
                sum += num;
            } else {
                sum = num;
            }
            ans = Math.max(ans, sum);
        }
        return ans;
    }
}	
	
	
~~~



### 13.买卖股票的最佳时机

给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。

**示例 1:**

> 输入: [7,1,5,3,6,4]
> 输出: 5
> 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
>      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。

**示例 2:**

> 输入: [7,6,4,3,1]
> 输出: 0
> 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。



**方法：一次遍历**

假设给定的数组为：

[7, 1, 5, 3, 6, 4]

如果我们在图表上绘制给定数组中的数字，我们将会得到：

![Profit Graph](img\cc4ef55d97cfef6f9215285c7573027c4b265c31101dd54e8555a7021c95c927-file_1555699418271)

使我们感兴趣的点是上图中的峰和谷。我们需要找到最小的谷之后的最大的峰。
我们可以维持两个变量——minprice 和 maxprofit，它们分别对应迄今为止所得到的最小的谷值和最大的利润（卖出价格与最低价格之间的最大差值）。



**代码实现：**

~~~java
public class TestOne {

	public static void main(String[] args) {

		int arr[] = {7,1,5,3,6,4 };
		System.out.println(maxProfit(arr));

	}

	
	 public static int maxProfit(int prices[]) {
	        int minprice = Integer.MAX_VALUE;
	        int maxprofit = 0;
	        for (int i = 0; i < prices.length; i++) {
	            if (prices[i] < minprice)
	                minprice = prices[i];
	            else if (prices[i] - minprice > maxprofit)
	                maxprofit = prices[i] - minprice;
	        }
	        return maxprofit;
	    }

}
~~~



### 14.[动态规划]打家劫舍

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

**示例 1:**

> 输入: [1,2,3,1]
> 输出: 4
> 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
>      偷窃到的最高金额 = 1 + 3 = 4 。

**示例 2:**

> 输入: [2,7,9,3,1]
> 输出: 12
> 解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
>      偷窃到的最高金额 = 2 + 9 + 1 = 12 。



**思路：**

* 标签：动态规划

* 动态规划方程：`dp[n] = MAX( dp[n-1], dp[n-2] + num )`

* 由于不可以在相邻的房屋闯入，所以在当前位置 `n `房屋可盗窃的最大值，要么就是 `n-1` 房屋可盗窃的最大值，要么就是 `n-2` 房屋可盗窃的最大值加上当前房屋的值，二者之间取最大值

* 举例来说：1 号房间可盗窃最大值为 3 即为 `dp[1]=3`，2 号房间可盗窃最大值为 44 即为 `dp[2]=4`，3 号房间自身的值为 2 即为 `num=2`，那么 `dp[3] = MAX( dp[2], dp[1] + num ) = MAX(4, 3+2) = 5`，3 号房间可盗窃最大值为 5

* 时间复杂度：O(n)，n为数组长度

**图解：**



![tc3](img\tc3.gif)



**代码实现：**

~~~java
public class TestOne {

	public static void main(String[] args) {

		int arr[] = { 3,1,2,4 };
		System.out.println(rob(arr));

	}

	public static int rob(int[] nums) {
		int len = nums.length;
		if (len == 0)
			return 0;
		int[] dp = new int[len + 1];
		dp[0] = 0;
		dp[1] = nums[0];
		for (int i = 2; i <= len; i++) {
			int a = dp[i - 1];
			int b = dp[i - 2];
			int c = nums[i - 1];
			dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
		}
		return dp[len];
	}

}

~~~





























## 二、中等









## 三、困难

### 1.[数组]寻找两个有序数组的中位数

给定两个大小为 m 和 n 的有序数组 `nums1` 和 `nums2`。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 `nums1 `和` nums2` 不会同时为空。

**示例 1:**

> nums1 = [1, 3]
> nums2 = [2]
> 则中位数是 2.0

**示例 2:**

> nums1 = [1, 2]
> nums2 = [3, 4]
> 则中位数是 (2 + 3)/2 = 2.5



**代码实现：**

~~~java
import java.util.Arrays;

public class TestOne {
	public static void main(String[] args) {

		int [] nums1 = {1,2,3};
		int [] nums2 = {4,5,6};
		System.out.println(findMedianSortedArrays(nums1,nums2));
	}

	// 寻找两个有序数组的中位数
	public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
		// 先计算出两个数组的长度之和
		int length = nums1.length+nums2.length;
		// 根据两个数组长度之和，创建一个新的数组
		int [] nums = new int[length];
		//第一轮循环将第一个数组赋值给新创建的数组
		for(int i = 0;i<nums1.length;i++){
			nums[i]=nums1[i];
		}
		//第二轮循环将第二个数组赋值给新创建的数组
		int a = nums.length-1;
		for(int j = 0;j<nums2.length;j++){
			nums[a]=nums2[j];
			a--;
		}
		// 将数组排序，以便与找中位数
		Arrays.sort(nums);
		// 
		int tmp = nums.length/2;
		// 判断是否是偶数长度的数组，如果是，则中位数就需要将两个中位数相加再除以二
		// 如果是奇数长度的数组，就返回中位数下标的数字
		if(nums.length%2==0){
			double d =nums[tmp]+nums[tmp-1];
			return d/2;
		}
		
		return nums[tmp];
		
	}

}

~~~



## 四、蓝桥杯

### 1.[数学]生日蜡烛问题

**生日蜡烛**

某人从某年开始每年都举办一次生日party，并且每次都要吹灭与年龄数相同根数的蜡烛。

现在算起来，它一共吹灭了236根蜡烛。

请问，它从多少次开始过生日party的

请填写它开始过生日party的年龄数。

**注意：**

你提交的应该是一个整数，不要填写任何多余的内容或说明性文字。

**代码实现：**

~~~java
public class TestOne {
	public static void main(String[] args) {
		// 生日蜡烛
		// 调用循环的方法求解
		birth1();
		// 调用递归的方法求解
		birth2(1, 0);

	}

	// 循环的方法求解
	public static void birth1() {

		for (int i = 1; i < 100; i++) {
			int count = 0;
			for (int j = i; j < 100; j++) {
				count += j;
				if (count == 236) {
					System.out.println("这个人从" + i + "岁开始过生日的");
                    break;
				}
				if (count > 236) {
					break;
				}
			}
		}

	}

	// 递归的方法求解
	/**
	 * @param N
	 * 代表预测的从多少岁开始过生日
	 * @param count
	 * 代表一共吹了多少只蜡烛,每一次递归肯定都要把count置零
	 */
	public static void birth2(int N, int count) {

		for (int n = N; n < 100; n++) {
			count += n;
			if (count == 236) {
				System.out.println("这个人从" + N + "岁开始过生日的");
				return;
			}

			if (count > 236) {
				break;
			}
		}

		if (count > 236) {
			birth2(N + 1, 0);
		}

	}

}

~~~



### 2.水仙花数(非LeetCode)



**问题描述：**

 		输出所有的**水仙花数**，所谓的**水仙花数**是指一个三位数其各位数字的立方和等于该数本身，例如`153`是**水仙花数**，因为：$153 = 1^3 + 5^3 + 3^3$。 



**问题分析：**

 		根据**水仙花数**的定义，判断一个数是否为**水仙花数**，最重要的是要把给出的三位数的**个位**、**十位**、**百位**分别拆分，并求其立方和（设为`sum`），若`sum`与给出的三位数相等， 三位数为**水仙花数**，反之，则不是。 



**代码实现：**

~~~java
public class TestOne {
	public static void main(String[] args) {

		System.out.println(shui(153));

	}

	// 判断输入的数字是不是水仙花数
	public static boolean shui(int x) {
		int tmp = x;
		int div = 1;
		int sum = 0; // sum用来记录每个位的数字的三次方的总和
		while (x / div >= 10) {
			div *= 10;
		}

		while (tmp > 0) {
			int a = tmp / div;
			sum = sum + a * a * a;
			System.out.println(sum);
			tmp = tmp % div;
			div /= 10;
		}

		return sum == x;

	}

}

~~~



### 3.[数学]求兔子总对数



**问题描述：**

有一对兔子，从出生后第3个月起每个月都生一对兔子，小兔子长到第三个月后每个月又生一对兔子，假如兔子都不死，问每个月的兔子总数为多少？



**分析：**

第一个月-----------------1

第二个月-----------------1

第三个月-----------------2

第四个月-----------------3

第五个月-----------------5

第六个月-----------------8

第七个月-----------------13

从中发现，从第三个月开始，前两个月兔子数之后为第三个兔子总数。

那程序就好办了，迭代。

**图解：**

![img](img\1316763-20180705220019604-697465512.png)



**代码实现：**

~~~java
public class TestOne {
	public static void main(String[] args) {
		// 设置测试时间为第五个月
		int n = 5;
		// 数组解法
		System.out.println("第" + n + "个月，兔子的总数为" + fun1(n));
		//循环解法
		System.out.println("第" + n + "个月，兔子的总数为" + fun2(n));
		// 递归解法
		System.out.println("第" + n + "个月，兔子的总数为" + fun3(n));
		
	}
	
	
	// 斐波那契数列,求兔子的对数
	// 斐波那契数列特点：每一项等于前两项之和
	// 数组解法
	public static int fun1(int n) {
		if (n == 0 || n == 1 || n == 2) {
			return 1;
		}
		int[] arr = new int[n];
		arr[0] = 1;
		arr[1] = 1;

		for (int i = 2; i < n; i++) {
			arr[i] = arr[i - 1] + arr[i - 2];
		}
		return arr[n - 1];

	}
	
	//循环解法
	public static int fun2(int n){
		if (n == 0 || n == 1 || n == 2) {
			return 1;
		}
		int n1=1;
		int n2=1;
		int result = 0;
		for(int i = n;i>2;i--){
			result = n1+n2;
			n1 = n2;
			n2 = result;
		}
		
		return result;
	}
	
	// 递归解法
	public static int fun3(int n){
		if (n == 0 || n == 1 || n == 2) {
			return 1;
		}
		
		return fun3(n-1)+fun3(n-2);
	}

}

~~~



### 4.三天打鱼两天晒网

 			中国有句俗语叫“三天打鱼两天晒网”。某人从1990年1月1日（将该日记为第1天）起开始“三天打鱼两天晒网”，问这个人在以后的某一天是“打鱼”还是“晒网”？并输出该日是从1990年1月1日起的第几天？



**示例：**

>输入：fun(1990,1,2)
>
>输出：这一天在晒网	该日是从1990年1月1日的第2天
>
>



**代码实现：**

~~~java
import java.util.Calendar;
import java.util.Date;

public class TestOne {
	public static void main(String[] args) {
		
		// 测试该日是在打鱼还是在晒网
		fun(1990, 1, 2);

	}

	public static void fun(int year, int month, int day) {
		// 判断输入的日期是否正常
		if (month > 12 || month < 1 || day < 0 || year < 0) {
			System.out.println("输入有误");
			return;
		}
		// 判断除了二月的其他月份的天数是否正常
		if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8
				|| month == 10 || month == 12) {
			if (day > 31) {
				System.out.println("输入有误");
				return;
			}
		} else {
			if (day > 30) {
				System.out.println("输入有误");
				return;
			}
		}
		// 判断平年或者是闰年二月份的天数是否正常
		if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
			if (month == 2) {
				if (day > 29) {
					System.out.println("输入有误");
					return;
				}
			}
		} else {
			if (month == 2) {
				if (day > 28) {
					System.out.println("输入有误");
					return;
				}
			}
		}

		// 判断某一天是在打鱼还是在晒网
		Calendar c = Calendar.getInstance();
		c.set(1990, 1, 1);
		Date date1 = c.getTime();
		c.set(year, month, day);

		Date date2 = c.getTime();
		// s代表从这一天到某天的毫秒数
		long s = (long) date2.getTime() - (long) date1.getTime();
		// n代表从这一天到某天的天数
		long n = s / 1000 / 60 / 60 / 24 + 1;
		int a = (int) (n % 5);

		if (a > 0 && a <= 3) {
			System.out.printf("这一天在打鱼\t");
		} else if (a > 3 || a == 0) {
			System.out.printf("这一天在晒网\t");
		}

		// 该日是从1900年1月1日的第10天
		System.out.println("该日是从1900年1月1日的第" + n + "天");

	}

}

~~~



### 5.角谷猜想

**问题描述：**
你听说过角谷猜想吗？
任意的正整数，比如 5， 我们从它开始，如下规则计算：
如果是偶数，则除以2，如果是奇数，则乘以3再加1.
如此循环，最终必会得到“1” !
比如 5 的处理过程是：

> 5
> 16
> 8
> 4
> 2
> 1

一个正整数经过多少步才能变成1， 称为角谷步数。
对于5而言，步数也是5
对于1，步数为0
本题的要求是，从标准输入给定一个整数n（1<n<300）表示角谷步数
求满足这个角谷步数的最小的正整数
**例如：**

> 输入：3
> 则输出：8

> 输入：4
> 则输出：16

> 输入：7
> 则输出：3



**代码实现：**

~~~java

public class TestOne {
	public static void main(String[] args) {
		int tmp = 1;
		while(fun(tmp)!=10){
			tmp++;
		}
		
		System.out.println(tmp);

	}

	public static int fun(int n) {
		int num = 0;//角谷步数
		
		while (true) {
			if (n == 1) {
				break;
			}
			if (n % 2 == 0) {
				n = n / 2;
			} else {
				n = n * 3 + 1;
			}
			num++;
		}
		return num;
		
	}
	

}

~~~



### 6.求100以内的素数

 素数(质数)是指在大于1的自然数中，除了1和它本身以外不再有其他因数的自然数。 

**代码实现：**

~~~java
import java.util.ArrayList;

public class TestOne {

	public static void main(String[] args) {
		print(100);
	}

	public static void print(int n) {
		ArrayList<Integer> list = new ArrayList<Integer>();
		boolean flag = true;
		
		for (int i = 2; i <= n; i++) {
			flag = true;
			for (int j = 2; j <= Math.sqrt(i); j++) {
				if (i % j == 0) {
					flag = false;
					break;
				}
			}
			if (flag == true) {
				list.add(i);
			}
		}

		System.out.println(list);
	}

}

~~~

<br><br>

### 7.煤球数目

有一堆煤球，堆成三角菱锥形。具体：
第一层放1个，
第二层3个(排列成三角形),
第三层6个(排列成三角形)，
第四层10个(排列成三角形)，
......
如果有100层，共有多少个煤球？
请填写煤球总数目的数字。
答案是：171700


<br><br>

**代码实现：**
~~~java


public class TestOne {

	public static void main(String[] args) {

		fun();

	}

	public static void fun() {

		int sum = 1;
		int ans = 1;
		for (int i = 2; i <= 100; i++) {
			ans = ans + i;
			sum = sum + ans;

			System.out.println(sum);
		}

	}

}


~~~


## 五、计蒜客训练

注意事项(java组)
程序处理完一个用例的数据后，立即退出(`return`),千万不要循环等待下一个用例的输入。不要使用package语句。
注意：选手代码的主类名必须为：`Main`，否则会判定为无效代码。
比如下面这段代码就是无效代码，因为其中使用了package语句，并且主类名部位`Main`：

~~~java

package temp;
class Circle {
	public static void main(String[] args) {
		//.....
	}
}

~~~

还有一点就是尽量不要超出所以给的空间限制，通常为128mb，超过了可能会出现异常。
如下代码可以计算出$S(n)=n+n^2$，则空间复杂度为$O(n^2)$






~~~java

int a[n]
int b[n][n]

~~~



<br><br><br><br>

### 2.字符串和日期
<br><br>
#### 1.三角形输出

给定一个层数n，输出字母三角形

**输入格式：**
输入一个整数$n(0<n\leq26>)$

**输出格式：**
按照题目描述，输出字母三角形

**样例输入1**

>2

**样例输出1**

>&nbsp;&nbsp;A
>BBB

**样例输入2**

>3

**样例输出2**

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A
>&nbsp;&nbsp;&nbsp;BBB
>CCCCC

**代码实现：**
~~~java

public class TestOne {

	public static void main(String[] args) {

		fun2(9);

	}

	public static void fun2(int n) {
		for (int i = 1; i <= n; i++) {
			for (int j = n; j > i; j--) { // 控制每行的空格数
				System.out.print(" ");
			}

			for (int j = 1; j < i * 2; j++) // 控制每行的字母数
			{
				System.out.print((char) (i + 64));
			}

			System.out.println();
		}

	}

}


~~~

<br><br>

#### 2.升级版三角形
这次我们输出一个稍微复杂的三角形，输入一个大写字母(A-Z)或者一个数字(1-9)。比如输入的是F的时候，输出：

>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABA
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABCBA
>&nbsp;&nbsp;&nbsp;&nbsp;ABCDCBA
>&nbsp;&nbsp;ABCDEDCBA
>ABCDEFEDCBA

输入是3的时候，输出：
>&nbsp;&nbsp;&nbsp;&nbsp;1
>&nbsp;&nbsp;121
>12321

**代码实现：**
~~~java

public class TestOne {

	public static void main(String[] args) {

		fun3('I');
		fun3('9');
		
		fun2(9);
		
		fun(9);

	}

	public static void fun3(char c) {

		if (c <= 'Z' && c >= 'A') {
			for (int i = 'A'; i <= c; i++) {
				for (int j = c; j > i; j--) {
					System.out.print(" ");
				}

				for (int j = 'A'; j < i; j++) {
					System.out.print((char) j);
				}

				for (int j = i; j >= 'A'; j--) {
					System.out.print((char) j);
				}

				System.out.println();
			}
		} else if (c >= '1' && c <= '9') {

			for (int i = '1'; i <= c; i++) {
				for (int j = c; j > i; j--) {
					System.out.print(" ");
				}

				for (int j = '1'; j < i; j++) {
					System.out.print((char) j);
				}

				for (int j = i; j >= '1'; j--) {
					System.out.print((char) j);
				}

				System.out.println();
			}

		}
	}

	

	public static void fun(int n) {
		for (int i = 1; i <= n; i++) {
			for (int j = n; j > i; j--) { // 控制每行的空格数
				System.out.print(" ");
			}

			for (int j = 1; j < i; j++) // 输出正序字母
			{
				System.out.print(j);
			}

			for (int j = i; j >= 1; j--) // 输出反序字母
			{
				System.out.print(j);
			}

			System.out.println();
		}

	}
	public static void fun2(int n) {

		for (int i = 1; i <= n; i++) {
			for (int j = n; j > i; j--) { // 控制每行的空格数
				System.out.print(" ");
			}

			for (int j = 1; j < i; j++) // 输出正序字母
			{
				System.out.print((char) (j + 64));
			}

			for (int j = i; j >=1; j--) // 输出反序字母
			{
				System.out.print((char) (j + 64));
			}

			System.out.println();
		}

	}

}



~~~




<br><br>

####　3.造房子


蒜头君最近迷上了一款游戏《我的世界》。有一天蒜头君发现了一块荒野的土地上有很多宝藏，蒜头君想在土地上建造一圈围栏从而把宝藏围起来。

假设地图是一个m行n列的方格地图，地图上每个格子*代表一个宝藏。比如2行2列的地图如下：
>**
>**

蒜头君对应要建造的围栏如下：
>+-+-+
>| \* | \* |
>+-+-+
>| \* | \* |
>+-+-+


**代码实现：**

~~~java

public class TestOne {

	public static void main(String[] args) {

		fun(3, 5);

	}

	public static void fun(int m, int n) {
		for (int i = 1; i <= m; i++) {
			for (int j = 1; j <= n; j++) {
				System.out.print("+-");
			}
			System.out.println("+");
			for (int j = 1; j <= n; j++) {
				System.out.print("|*");
			}
			System.out.println("|");
		}
		for (int j = 1; j <= n; j++) {
			System.out.print("+-");
		}
		System.out.println("+");
	}

}

~~~



<br><br>

#### 字符串

Java中`String`类有一个方法`compareTo(String ss)`字符串比较功能。用`String`对象和传进来的`ss`对象从第一个字符开始朱字符比较ASCII码，返回第一个不相同的ASCII码的插值，如果两个字符串完全相同，返回0

~~~java

		String str1 = "Hello";
		String str2 = "jisuanke";
		int res = str1.compareTo(str2);
		if (res > 0) {
			System.out.println(str1 + " is greater than " + str2);
		} else if (res == 0) {
			System.out.println(str1 + " is same as " + str2);
		} else {
			System.out.println(str1 + " is less than " + str2);
		}

~~~

**Java常用字符串方法**
方法名    | 功能
----------|---------------------
compareTo | 字符串比较
charAt    | 获取字符传的某个字符串
indexOf   | 子串查找

<br><br>

#### 4.对称字符串

蒜头君认为对称是一种美，他希望任何东西都是对称的，连字符串都不放过。蒜头君在沙盘上写了这样一些字符串：

$A_1:$ `A`
$A_2:$ `ABA`
$A_3:$ `ABACABA`
$A_4:$ `ABACABADABACABA`

...

对于给定的$N$，你能够根据规律输出$A_N吗$？

**输入格式**

仅有一个数：$N(N\leq20)$

**输出格式**

一行字符串，表示字符串$A_N$

**样例输入**

>2

**样例输出**

>ABA

**代码实现：**

~~~java

public class TestOne {

	public static void main(String[] args) {
		
		fun(5);
		
	}

	public static void fun(int n){
		String str = "A";
		
		for(int i = 1;i<n;i++){
			str=str+(char)(i+65)+str;
		}
		
		System.out.println(str);
		
	}

}

~~~



<br><br> 

#### 5.寻找字符串

某天，蒜头君和花椰妹在公园里散步，走着走着，我的天！它们都各自捡到了一串漂亮的字符串，然而蒜头君好奇心比较重，它想知道自己的字符串在花椰妹的字符串出现了多少次，例如花椰妹的字符串为`abababa`,蒜头君的字符串为`aba`，那么蒜头君的字符串在花椰子妹的字符串中出现了3次。蒜头君一向比较傲娇，于是向你请教，你可以帮帮他吗？

**输入格式**

输入包含两行，第一行为花椰妹见到的字符串，第二行为蒜头君捡到的字符串。两个字符串可能包含除了换行、回车以外的任何字符。两个字符串长度均不大于1000。

**输出格式**

请你帮花椰妹找哦出它的字符串里出现了多少次蒜头君的字符串。

**样例输入1**

>i miss you
>you

**样例输出1**

>1

**样例输入2**

>ossosso
>osso

**样例输出2**

>2


**代码实现：**

~~~java

public class TestOne {

	public static void main(String[] args) {

		String str1 = "i loyouve you";
		String str2 = "you";

		fun(str1, str2);

	}

	public static void fun(String str1, String str2) {
		// 先把字符串转换成字符数组
		char[] c1 = str1.toCharArray();
		char[] c2 = str2.toCharArray();
		// 用ans来存放匹配到的次数
		int ans = 0;
		for (int i = 0; i < c1.length; i++) {
			// 设置一个信号量flag，如果此次匹配失败则设置为false
			boolean flag = true;
			for (int j = 0; j < c2.length; j++) {
				if (c1[i + j] != c2[j]) {
					flag = false;
					break;
				}
			}

			if (flag == true) {
				ans++;
			}

		}

		System.out.println("一共匹配上的次数:" + ans);
	}
	
}

~~~



<br><br>

#### 日期计算

日期的计算不管是在竞赛还是在实际应用中都是一个比较重要的方面。比较常识的知识就不在赘述了。闰年是一类比较特殊的年份，闰年比平年在2月份多一天。下面就说一下闰年的判定：

1.年份非整百而且能被4整除的为闰年。
2.年份能被400整除的是闰年。

需要特别注意的是，能被100整除的年份，必须要被400整除才是闰年。

~~~java

if(year % 400 == 0 || (year % 100!= 0 && year % 4 == 0)){
	return 1;
}

return 0;

~~~

 <br><br>

经常会遇到别人问你几月几号是星期几的情况，如何不查日历直接用程序算出来呢？一种简单的方法是，记住很久以前的某一天是星期几，比如公元1年1月1日是星期一。然后一天一模拟，算出日期是星期几。这种方法很容易理解，但是实现起来大妈可能比较长。除此之外，有一个公式可以快速地根据日期计算这一天是星期几，这被称为**蔡基姆拉尔森计算公式**。

假设星期为`w`，年份为`y`，月份为`d`。

$w=(d + 2*m + 3*(m+1)/5 + y + y/4 - y/100 + y/400)\%7$

**注意每年的1，2月要当成上一年13，14月计算，上述除法均为整除**


<br><br>

#### 6.蒜头君的生日

蒜头君的生日快到了，蒜头君希望是在周末，蒜头君请你帮忙算出他生日在星期几。

**输入格式**

输入三个正整数，分别表示年、月、日。保证输入年份合法。

**输出格式**

输出星期几。
用`Monday`、`Tuesday`、`Wednesday`、`Thursday`、`Friday`、`Saturday`、`Thunday`

**样例输入1**

>1 1 1

**样例输出1**

>Monday

**样例输入2**

>2016 11 29

**样例输出2**

>Tuesday

**代码实现：**

~~~java

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class TestOne {

	public static void main(String[] args) {

		fun(1997, 10, 7);
		System.out.println(fun2(1997, 10, 7));
	}

	public static void fun(int y, int m, int d) {
		// 因为西方月份是0-11月，所以要加1
		m = m - 1;
		Calendar c = Calendar.getInstance();
		c.set(y, m, d);
		Date date = c.getTime();
		SimpleDateFormat sdf = new SimpleDateFormat("EEEE");
		String week = sdf.format(date);
		System.out.println(week);

	}

	public static int fun2(int y, int m, int d) {
		if (m <= 2) {
			m += 12;
			y--;
		}
		// 用0-6显示星期1-7，所以要在计算结果末尾加1
		return (d + 2 * m + 3 * (m + 1) / 5 + y + y / 4 - y / 100 + y / 400) % 7 + 1;

	}

}

~~~

<br><br>

#### 7.恋爱纪念日
蒜头君和花椰妹谈恋爱啦。祝福他们吧。蒜头君想知道它们的第100天，200天...纪念日。

**输入格式**

输入4个整数y，m，d，k，表示他们在一起的日期，保证是一个1990年1月1日以后的日期，蒜头君想知道他们$k(0\leq k \leq 10000)$天纪念日。

**输出格式**

输出格式按照`yyyy-mm-dd`的格式输出k天纪念日的日期。月份和天数必须各输出2位。保证最后答案年份不超过4位。

**样例输入1**

>2016 10 1 100

**样例输出1**

>2017-01-09

**代码实现：**

~~~java

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class TestOne {

	public static void main(String[] args) {

		fun(1997, 10, 7, 100);
	}

	public static void fun(int y, int m, int d, int k) {
		// 因为西方月份是0-11月，所以要加1
		m = m - 1;
		Calendar c = Calendar.getInstance();
		c.set(y, m, d);
		c.add(Calendar.DATE, k);
		Date date = c.getTime();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		System.out.println(sdf.format(date));

	}

}

~~~

<br><br>


#### 字符串和日期练习题

#### 1.字符串中A的数量

输入一个字符串，统计其中字符`A`的数量并且输出。

**输入格式**

输入共有一行，为一个不带空格的字符串(其中的字符数不超过100)。

**输出格式**

输出一行，包含一个整数，为输入字符串中`A`的数量。

**样例输入1**

>AabdkeaoektA

**样例输出1**

>2

**代码实现：**

~~~java

public class TestOne {

	public static void main(String[] args) {
		
		String str = "AabdkeaoektA";
		fun(str);
		
	}

	public static void fun(String str) {
		
		int count = 0;
		for (int i = 0; i < str.length(); i++) {
			if (str.charAt(i) == 65) {
				count++;
			}
		}

		System.out.println(count);
		
	}
	
	

}

~~~


<br><br>


#### 2.最长的名字

小蒜的课外班上有N个同学，每个同学的名字长度都不一样。小蒜想知道班上谁的名字最长，你能不能帮他找出来呢？

**输入格式**

输入第一行为小蒜 的同学数$N(0 \leq N \leq 100)$
接下来N行每行是一个同学的名字(中间没有空格)。

**输出格式**

输出一行，为名字最长的同学的名字。

**样例输入1**

>3
>TOM
>Gaofei
>Lobs

**样例输出1**

>Gaofei

**样例输入2**

>1
>Jsknme

**样例输出2**

>Jsknme

**代码实现：**

~~~java

import java.util.Scanner;

public class TestOne {

	public static void main(String[] args) {

		fun();

	}

	public static void fun() {

		Scanner sc = new Scanner(System.in);
		int sum = sc.nextInt();
		String[] arr = new String[sum];
		int max = 0;
		for (int i = 0; i < sum; i++) {
			arr[i] = sc.next();
			if (arr[i].length() >= max) {
				max = i;
			}
		}

		System.out.println(arr[max]);

	}

}

~~~


<br><br>


#### 3.字符串

从键盘输入一个长度大于10的字符串，现要求：将字符串中的所有大小写字母都改成该字母的下一个字母。如：最后一个小写字母`z`改成字母`a`；最后一个大写字母`Z`该写成`A`，其他字符依照原有顺序不变。

**输入格式**

输入只有一行，包含1个认读的不带有空格的字符串(其长度在10到1000之间)。

**输出格式**

输出只有一行，即为满足条件的字符串。

**样例输入**

>ABCDZ123abcdefz

**样例输出**

>BCDEA123bcdefga

**代码实现：**

~~~java

public class TestOne {

	public static void main(String[] args) {
		
		String str = "ABCDZ123abcdefz";
		
		fun(str);
		
		
	}
	
	public static void fun(String str) {
		
		char[] arr = str.toCharArray();
		for(int i = 0;i<arr.length;i++){
			if(arr[i]>=65&&arr[i]<=90||arr[i]>=97&&arr[i]<=122){
				if(arr[i]==90){
					arr[i]=65;
				}else if(arr[i]==122){
					arr[i]=97;
				}else {
					arr[i]=(char)(arr[i]+1);
				}
				
			}
		}
		
		
		String str2 = String.valueOf(arr);
		System.out.println(str2);
		
	}
	
	

}

~~~


<br><br>


#### 4.大数的奇偶性判断

从键盘输入一个位数可能最多到达到10000的整数，判断它是否是一个偶数，如果是偶数则输出`yes`否则输出`no`。

注意：`long` `long` 也存不下这么大的数字。

**输入格式**

输入只有一行，包含1个正整数(其长度在1到10000)

**输出格式**

输出只有一行，如果是偶数则输出`yes`否则输出`no`

**样例输入**

>1231393713904

**样例输出**

>yes

**代码实现：**

~~~java

import java.util.Scanner;

public class TestOne {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		String str = sc.next();
		fun(str);

	}

	public static void fun(String str) {
		// 既然没有办法存的下10000位的数字，那我们就把它存放到字符串中，
		// 然后截取最后一位转换成整数判断该位是不是偶数，如果是偶数，则该串数组就是偶数
		int a = Integer.valueOf(str.charAt(str.length() - 1) + "");
		if (a % 2 == 0) {
			System.out.println("yes");
		} else {
			System.out.println("no");
		}

	}

}

~~~


<br><br>

#### 5.字符反转

输入一个字符串，然后把这个字符串翻转输出。

**输入格式**

输入一行一个字符串，不包含空格。

**输出格式**

输出这个字符串的反转。

**样例输入**

>1234567890

**样例输出**

>0987654321

**代码实现：**

~~~java

public class TestOne {

	public static void main(String[] args) {

		String str = "1234567890";

		fun(str);

	}

	public static void fun(String str) {

		for (int i = str.length() - 1; i >= 0; i--) {
			System.out.print(str.charAt(i));
		}

	}

}

~~~


<br><br>

#### 6.最后一个单词的长度

给定由大写，小写字母和空格组成的字符串，返回最后一个单词的长度。

如果输入中不存在单词，返回0

注意：
"单词"是指不包含空格符号的字符串

例如：
对于字符串"hello world"(不带引号),那么返回的结果是5；
对于字符串"abc abc"(不带引号)，那么返回的结果就是3；

**输入格式**

输入仅一行，为字符串s(长度不超过10000)

**样例输入1**

>today is a nice  day

**样例输出1**

>3

**样例输入2**

>the quick brown fox jumps over the lazy dog

**样例输出2**

>3


**代码实现：**

~~~java

public class TestOne {

	public static void main(String[] args) {

		String str = "hello bob this is jack";
		System.out.println(fun(str));

	}

	public static int fun(String str) {

		int len = str.length();
		if (len == 0) {
			return 0;
		}

		for (int i = len - 1; i >= 0; i--) {
			if (str.charAt(i) == ' ') {
				return len - 1 - i;
			} else if (i == 0) {
				return len;
			}
		}

		return 0;
	}

}

~~~

<br><br>


### 4.快速提升代码能力题解



<br>

#### 1.矩阵旋转

给出一个 n * m 的整数矩阵，请你把这个矩阵顺时针旋转90度以后输出。


**输入格式**

第一行输入两个整数 n,m $(1 \leq n,m \leq200)$

接下来 n 行，每行输入 m 个整数，表示输入的矩阵。矩阵中元素都是int范围内的整数。

**输出格式**

输入 m 行， 每行 n 个空格隔开的整数，表示旋转以后的矩阵。注意：每行末尾不能输出多余的空格



**代码展示：**

~~~java

import java.util.Scanner;

public class TestOne {

	public static void main(String[] args) {

		fun();

	}

	public static void fun() {

		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int m = sc.nextInt();

		int[][] arr = new int[n][m];

		for (int i = 0; i < n; i++) {
			for (int j = 0; j < m; j++) {
				arr[i][j] = sc.nextInt();
			}

		}

		System.out.println("生成的矩阵----------");

		for (int i = 0; i < n; i++) {
			for (int j = 0; j < m; j++) {
				System.out.print(arr[i][j] + " ");
			}
			System.out.println();
		}

		System.out.println("旋转后矩阵----------");

		// 顺时针旋转九十度之后的矩阵
		for (int i = 0; i < m; i++) {
			for (int j = n - 1; j >= 0; j--) {
				System.out.print(arr[j][i] + " ");
			}
			System.out.println();
		}

	}
}



~~~



<br><br>


#### 2.最大子矩阵(困难)暴力枚举法

本题可用动态规划方法

给定一个 n * m 的矩阵A，求A中的一个非空子矩阵，使这个子矩阵中的元素和最大。其中， A 的子矩阵指 A 中行和列均连续的一部分。

**输入格式**

输入的第一行包含两个整数
n,m $(1 \leq n,m\leq 50)$,分别表示矩阵 A 的行数和列数。

接下来 n 行，每行 m 个整数，表示矩阵
$A_{i,j}(-1000\leq A_{i,j} \leq 1000)$

**输出格式**

输出一行，包含一个整数，表示 A 中最大子矩阵的元素和。

**样例输入**

>3 3
>2 -4 1
>-1 2 1
>4 -2 2

**样例输出**

>6

**代码实现：**

~~~java

public class TestOne {

	public static void main(String[] args) {

		fun();

	}

	public static void fun() {

		int[][] A = { { 2, -4, 1 }, { -1, 2, 1 }, { 4, -2, 2 } };
		int ans = Integer.MIN_VALUE;// ans存储最终答案

		// 通过暴力枚举上下左右边界
		for (int u = 0; u < 3; u++) {// 上边界
			for (int d = u; d < 3; d++) {// 下边界
				for (int l = 0; l < 3; l++) {// 左边界
					for (int r = l; r < 3; r++) {// 有边界
						int tmp = 0;// 临时变量存储子矩阵元素之和
						for (int p = u; p <= d; p++) {
							for (int q = l; q <= r; q++) {
								tmp += A[p][q];
							}
						}
						ans = Math.max(ans, tmp);
					}
				}
			}
		}

		System.out.println(ans);

	}
}


~~~

<br><br>

####　3.数组去重和排序

数组去重和排序

**代码实现：**

~~~java

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class TestOne {

	public static void main(String[] args) {

		int[] arr = new int[1000];
		for (int i = 0; i < 1000; i++) {
			arr[i] = (int) (Math.random() * 1000);
		}
		
		fun(arr);

	}

	public static void fun(int[] arr) {
		Arrays.sort(arr);
		// Set集合不可以存储重复的元素，所以正好利用这个特点去重
		Set<Integer> set = new HashSet<Integer>();

		for (int i = 0; i < 1000; i++) {
			set.add(arr[i]);
		}

		for (int a : set) {
			System.out.print(a + " ");
		}

	}
}


~~~




















<br><br> <br><br> <br><br>  <br><br> <br><br> <br><br>

### 5.枚举算法

**枚举**就是根据提出的问题，一一列出该问题的所有可能的解，并在逐一列举的过程中，检验每个可能解是否是问题的真正解，如果是就采纳这个解，如果不是就继续判断下一个。

枚举法一般比较直观，容易理解，但是由于要检查所有可能的解，因此运行效率比较低。

能够用枚举法解决的题目往往是最简单的一类题目。这总题目具有以下特点：

* 解枚举范围是有穷的
* 检验条件是确定的





#### 1.年龄问题

某君说“我的年龄是一个两位数，我比儿子大27岁，如果把我的年龄的两位数字交换位置，刚好就是我儿子的年龄”

请你计算：某君的年龄一共有多少种可能情况？



**分析：**

题目给出某君的年龄是两位数，那么年龄的范围是[10,99]内的整数。

检验条件也是确定的，只要把枚举的年龄的各位与十位交换，如果发现比原数字刚好小27，那么他就是真正的解



**代码实现：**

~~~java
public class TestOne {

	public static void main(String[] args) {
		fun();
	}

	public static void fun() {
		for (int i = 10; i <= 99; i++) {
			int a = i / 10;
			int b = i % 10;
			int c = b * 10 + a;
			if (i - c == 27) {
				System.out.print(i + "\t");
			}
		}
	}
}

~~~

<br>


#### 2.水仙花数



如果一个三位数，它的每个位上的数字的三次米之和等于它本真，那么我们就称这个数字为水仙花数。现在，我们要求出所有的水仙花数




**枚举范围：**

就是所有的三位数，从100到999

**条件判断：**

只要把枚举的数字，个十百位分别算出来，然后在计算他们的三次幂之和，判断与原数字是否相等就可以了。



**代码实现：**

~~~java
public class TestOne {

	public static void main(String[] args) {
		fun();
	}

	public static void fun(){
		for(int i = 100;i<=999;i++){
			int a = i/100;
			int b = i%100/10;
			int c = i%10;
			a = a*a*a;
			b = b*b*b;
			c=c*c*c;
			if(a+b+c==i){
				System.out.print(i+"\t");
			}
		}
	}
}

~~~

<br>

#### 3.质数

输出n到m之间所有的质数



**代码实现：**

~~~java
import java.util.ArrayList;
import java.util.List;

public class TestOne {

	public static void main(String[] args) {
		fun(1, 100);
	}
	

	public static void fun(int n, int m) {
		List<Integer> list = new ArrayList<Integer>();
		boolean flag = true;
		if(n==1){
			n =n+1;
		}
		
		for (int i = n; i <= m; i++) {
			flag = true;
			for (int j = 2; j <= Math.sqrt(i); j++) {
				if (i % j == 0) {
					flag = false;
					break;
				}

			}
			if (flag == true) {
				list.add(i);
			}
		}

		System.out.println(list);

	}
}

~~~

<br>

#### 4.猜字符串

我们随机生成一个长度为4的值包含大写字母的字符串，如果要一个一个手动去猜，那就太费劲了。

这么麻烦的事情，我们 可以交给电脑去自行枚举。



**代码实现：**

~~~java

public class TestOne {

	public static void main(String[] args) {
		fun();
	}
	
	
	/*
	 * 猜字符串是什么，猜对了就输出猜对了，猜错了就什么也不输出
	 * 
	 * 这个我们就需要用到ascii码表 大写字母A是65 小写字母a是97
	 * 
	 */
	public static void fun() {

		String str = "STRING";
		char[] charArray = str.toCharArray();
		int count = 0;
		String str2 = "";
		for (int j = 0; j < charArray.length; j++) {
			for (int i = 65; i <= 90; i++) {
				if (i == charArray[j]) {
					str2 += (char) i;
					count++;

				}
			}
			if (count == charArray.length) {
				System.out.printf("猜对了,答案是:" + str2);
			}
		}

	}

	
}

~~~

<br>

#### 5.回文数字

观察数字 12321，123321，都有一个共同的特征，就是无论从左到右读还是从右向左读，都是相同的。这样的数字叫做回文数字。

现在要从5位或者6位的十进制数字中找出各个数位之和等于n的回文数字



**代码实现：**

~~~java

public class TestOne {

	public static void main(String[] args) {
		for (int i = 10000; i < 999999; i++) {
			fun(i, 48);
		}
	}

	/**
	 * @param n
	 *            输入的数字
	 * @param target
	 *            判断所有位之和是不是等于target
	 */
	public static void fun(int n, int target) {
		int arr[] = new int[6];
		int sum = 0; // sum 用来存放所有位数之和
		int x = n; // x 用来接收 传入的数字n
		for (int i = 0; i < arr.length; i++) {
			arr[i] = x % 10;
			sum = sum + x % 10;
			x = x / 10;
		}

		// count 用来判断回文数字的有多少位相同的
		int count = 0;
		if (arr[5] != 0) {

			for (int i = 0, j = 5; i < arr.length / 2; i++, j--) {
				if (arr[i] == arr[j]) {
					count++;
				}
				if (count == 3 && sum == target) {
					System.out.println(n);
				}
			}
		} else {
			for (int i = 0, j = 4; i < arr.length / 2; i++, j--) {
				if (arr[i] == arr[j]) {
					count++;
				}
				if (count == 3 && sum == target) {
					System.out.println(n);
				}
			}
		}

	}
}

~~~

<br>

#### 6.四叶玫瑰

如果一个四位数，它的每个位上的数字的4次幂之和等于它本身，那么我们就称这个数字为一个四叶玫瑰数。现在，我们要求出n以内所有的四叶玫瑰数。



**代码实现：**

~~~java
public class TestOne {

	public static void main(String[] args) {
		fun();
	}


	// 四叶玫瑰 每个位的四次幂之和等于该数本身就叫做四叶玫瑰
	public static void fun() {
		for (int i = 1000; i <= 9999; i++) {
			int a = i / 1000;

			int b = i % 1000 / 100;

			int c = i % 100 / 10;
			int d = i % 10;
			a = a * a * a * a;
			b = b * b * b * b;
			c = c * c * c * c;
			d = d * d * d * d;
			if (a + b + c + d == i) {
				System.out.println(i);
			}
		}
	}

}

~~~

<br>

#### 7.吹蜡烛

**生日蜡烛**

某人从某年开始每年都举办一次生日party，并且每次都要吹灭与年龄数相同根数的蜡烛。

现在算起来，它一共吹灭了236根蜡烛。

请问，它从多少次开始过生日party的

请填写它开始过生日party的年龄数。



**注意：**

你提交的应该是一个整数，不要填写任何多余的内容或说明性文字。



**代码实现：**

~~~java
public class TestOne {
	public static void main(String[] args) {
		// 生日蜡烛
		// 调用循环的方法求解
		birth1();
		// 调用递归的方法求解
		birth2(1, 0);

	}

	// 循环的方法求解
	public static void birth1() {

		for (int i = 1; i < 100; i++) {
			int count = 0;
			for (int j = i; j < 100; j++) {
				count += j;
				if (count == 236) {
					System.out.println("这个人从" + i + "岁开始过生日的");
                    break;
				}
				if (count > 236) {
					break;
				}
			}
		}

	}

	// 递归的方法求解
	/**
	 * @param N
	 * 代表预测的从多少岁开始过生日
	 * @param count
	 * 代表一共吹了多少只蜡烛,每一次递归肯定都要把count置零
	 */
	public static void birth2(int N, int count) {

		for (int n = N; n < 100; n++) {
			count += n;
			if (count == 236) {
				System.out.println("这个人从" + N + "岁开始过生日的");
				return;
			}

			if (count > 236) {
				break;
			}
		}

		if (count > 236) {
			birth2(N + 1, 0);
		}

	}

}


~~~

<br>

#### 8.奖券数目

有些人很迷信数字，比如说带4的数字不吉利。某抽奖活动的奖券号码是位数，(10000-99999),要求其中不要出现带4的号码，主办方想请你计算一下，如果发行号码n到m之间的奖券，在每张奖券不重复的情况下，可以发行多少张？(也就是说不发行带号码4的奖券，一共有多少种)



**代码实现：**

~~~java

public class TestOne {

	public static void main(String[] args) {
		fun();

	}

	public static void fun() {
		int count = 0;
		for (int i = 10000; i <= 99999; i++) {
			if (!judge(i)) {
				count++;
			}

		}

		System.out.println("count:" + count);
 
	}

	public static boolean judge(int n) {
		int x = n;
		for (int i = 1; i <= 5; i++) {
			if (x % 10 == 4) {
				return true;
			}
			x /= 10;

		}

		return false;
	}

}


~~~

<br>

#### 9.方程的解

方程$a^2+b^2+c^2=n$ ，其中 $a>b>c$  ,请你求出它的所有解，结果按照啊的值从小到大输出。





**代码实现：**

~~~java
public class TestOne {

	public static void main(String[] args) {
		fun(50);

	}

	public static void fun(int n) {

		for (int a = 1; a * a <= n; a++) {
			for (int b = a + 1; a * a + b * b <= n; b++) {
				for (int c = b + 1; a * a + b * b + c * c <= n; c++) {
					for (int d = c + 1; a * a + b * b + c * c + d * d <= n; d++) {
						if (a * a + b * b + c * c + d * d == n) {
							System.out.printf("a=%d b=%d c=%d d=%d", a, b, c, d);
						} 
					}
				}
			}
		}

	}

}

~~~

<br>

#### 10.四平方和

四平方和定理，又称之为拉格朗日定理：每个正整数都可以表示为至多四个正整数的平方和。如果把0包括进去，就正好可以表示4个数的平方和。

比如：

$5=0^2+0^2+1^2+2^2$

$7=1^2+1^2+1^2+2^2$

则对于这样一个正整数n，可以表示为：

$n=a^2+b^2+c^2+d^2$

**字典序大小：**

从左到右依次比较，如果相同则比较下一项，直到有一项不同，较小的一方字典序更小，反之字典序更大，所有项均相同则字典序相同。



**代码实现：**

~~~java
public class TestOne {

	public static void main(String[] args) {
		fun(50);

	}

	public static void fun(int n) {
		
		for (int a = 0; a * a <= n; a++) {
			for (int b = a; a * a + b * b <= n; b++) {
				for (int c = b; a * a + b * b + c * c <= n; c++) {
					for (int d = c; a * a + b * b + c * c + d * d <= n; d++) {
						if (a * a + b * b + c * c + d * d == n) {
							System.out.printf("a=%d b=%d c=%d d=%d\n", a, b, c,d);
							 return;
						}
					}

				}
			}
			
		}

	}

}


~~~

<br>

#### 11.装饰效果

现已知彩带由n中不同的颜色顺次相接而成，而每种颜色的装饰效果用一个整数表示(包括正整数，0，或负整数)，从左到右依次为$a_1,a_2,...,a_n$,小明可以从中剪裁出连续的一段来装饰贺卡，而装饰效果就是这一段上哥哥颜色装饰效果的总和，小明需要选取装饰效果最好的一段颜色来制作贺卡(取该段颜色数值之和的最大值)当然，如果所有颜色的装饰效果都只能起到负面作用(即$a_i<0$),小明也可以选择放弃彩带来装饰贺卡(获得的装饰效果为0)。


<br><br>   


**代码实现：**

~~~java

public class TestOne {

	public static void main(String[] args) {

		int[] arr = { 1, 9, -3, 2, -11, 4, -5, 9, -1 };
		fun(arr);

	}

	public static void fun(int[] arr) {
		int ans = arr[0];
		int sum = 0;
		for (int num : arr) {
			if (sum > 0) {
				sum += num;
			} else {
				sum = num;
			}
			ans = Math.max(ans, sum);
		}
		System.out.println(ans);

	}

}


~~~

<br>

#### 12.双节棍
小刚想买两根双节棍，左手一根右手一根。它到商店里，发现共有n根双节棍，每根双节棍都不一样长。它希望买下的两根双节棍长度差尽可能小，请你编程帮他找到两根最合适的双节棍，并输出最小的长度差值。

<br>

**代码实现：**

~~~java

import java.util.Arrays;

public class TestOne {

	public static void main(String[] args) {

		int[] arr = { 1,7,2,9,4,10 };
		fun(arr);
		
	}
	
	public static void fun(int[] arr){

		Arrays.sort(arr);
		int sum = 0;
		int ans = Integer.MAX_VALUE;
		for(int i = 0;i<arr.length-2;i++){
			sum = arr[i+1]-arr[i];
			ans = Math.min(ans, sum);
		}
		
		System.out.println(ans);
		
	}
	

}


~~~

<br><br>



## 六、韩顺平教程

### 1.暴力匹配算法解决字符串匹配问题

应用场景-字符串匹配问题：
1.有一个字符串str1="硅硅谷 尚硅谷你上硅 尚硅谷你尚硅谷你尚硅你好"，和一个子串str2="尚硅谷你尚硅你"
2.现在要判断str1是否含有str2，如果存在，就返回第一次出现的位置，如果没有，则返回-1

**代码实现：**

~~~java

public class TestOne {

	public static void main(String[] args) {

		String str1 = "hemme";
		String str2 = "me";
		System.out.println(fun(str1,str2));
		
	}

	public static int fun(String str1, String str2) {
		char[] s1 = str1.toCharArray();
		char[] s2 = str2.toCharArray();

		int s1Len = s1.length;
		int s2Len = s2.length;

		int i = 0; // i索引指向s1
		int j = 0;// j索引指向s2
		while (i < s1Len && j < s2Len) {
			if (s1[i] == s2[j]) {
				i++;
				j++;
			} else { // 没有匹配成功
				// 如果失败(即s1[i]!=str2[j])
				i = i - j + 1;
				j = 0;
			}
		}

		// 判断是否匹配成功
		if (j == s2Len) {
			return i - j;
		} else {
			return -1;
		}

	}

}



~~~

<br><br>

### 2.kmp算法-字符串匹配


**代码实现：**

~~~java

import java.util.Arrays;

public class TestOne {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str1 = "ABCDAB ABCDABCDABDE";
		String str2 = "ABCDABD";
		// String str2 = "BBC";

		int[] next = kmpNext("ABCDABD"); // [0, 1, 2, 0]
		System.out.println("next=" + Arrays.toString(next));

		int index = kmpSearch(str1, str2, next);
		System.out.println("index=" + index); // 15了

	}

	// 写出我们的kmp搜索算法
	/**
	 * 
	 * @param str1
	 *            源字符串
	 * @param str2
	 *            子串
	 * @param next
	 *            部分匹配表, 是子串对应的部分匹配表
	 * @return 如果是-1就是没有匹配到，否则返回第一个匹配的位置
	 */
	public static int kmpSearch(String str1, String str2, int[] next) {

		// 遍历
		for (int i = 0, j = 0; i < str1.length(); i++) {

			// 需要处理 str1.charAt(i) ！= str2.charAt(j), 去调整j的大小
			// KMP算法核心点, 可以验证...
			while (j > 0 && str1.charAt(i) != str2.charAt(j)) {
				j = next[j - 1];
			}

			if (str1.charAt(i) == str2.charAt(j)) {
				j++;
			}
			if (j == str2.length()) {// 找到了 // j = 3 i
				return i - j + 1;
			}
		}
		return -1;
	}

	// 获取到一个字符串(子串) 的部分匹配值表
	public static int[] kmpNext(String dest) {
		// 创建一个next 数组保存部分匹配值
		int[] next = new int[dest.length()];
		next[0] = 0; // 如果字符串是长度为1 部分匹配值就是0
		for (int i = 1, j = 0; i < dest.length(); i++) {
			// 当dest.charAt(i) != dest.charAt(j) ，我们需要从next[j-1]获取新的j
			// 直到我们发现 有 dest.charAt(i) == dest.charAt(j)成立才退出
			// 这时kmp算法的核心点
			while (j > 0 && dest.charAt(i) != dest.charAt(j)) {
				j = next[j - 1];
			}

			// 当dest.charAt(i) == dest.charAt(j) 满足时，部分匹配值就是+1
			if (dest.charAt(i) == dest.charAt(j)) {
				j++;
			}
			next[i] = j;
		}
		return next;
	}
}


~~~

<br><br>




























<br><br><br><br><br><br><br><br><br><br><br><br>