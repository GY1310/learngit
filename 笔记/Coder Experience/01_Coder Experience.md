# Coder Experience (Java)



### 数组排序算法

###### 方法一：

```java
//思路：使索引值为0的元素与其他元素挨个比较一次，如果发现有比0号索引值大的元素，则交换位置
public class Demo1 {

    public static void main(String[] args) {
        int[] arr = { 4, 7, 2, 0, 3, 5, 8 };
        getOrder(arr);
    }

    public static void getOrder(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[i]) {
                    int tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            }
        }
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}

```

###### 方法二：

```java
//冒泡排序：冒泡排序的思想就是使用相邻的两个元素挨个比较一次，符合条件交换位置
public class Demo1 {

    public static void main(String[] args) {
        int[] arr = { 4, 7, 2, 0, 3, 5, 8 };
        getOrder(arr);
    }

    public static void getOrder(int[] arr) {
        for (int j = 0; j < arr.length - 1; j++) {//控制轮数
            //把最大的放在最后一个位置
        	//老二放在倒数第二个位置
            for (int i = 0; i < arr.length - 1 - j; i++) {//找出一个最大值
			   //相邻的元素比较
                if (arr[i] > arr[i + 1]) {
                    int tmp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = tmp;
                }
            }

        }
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);

        }
    }
}

```



### 二分查找法

​	需求：定义一个函数接收数组对象和一个要查找的目标元素，函数要返回该目标元素在数组中的索引值，

如果目标元素不存在与数组中，那么返回-1表示。

```java
/*思路：定义三个变量分别记录要查找元素的范围最大索引值、最小索引值、中间的索引值，每次都是使用中间索引值的元素与目标元素比较一次，如果不是我们所需要的元素，那么缩小查找范围(二分法只适用于排过顺序数组)
*/

public class Demo1 {

    public static void main(String[] args) {
        int[] arr = { 0, 1, 2, 3, 4, 5, 6 };
        System.out.println(halfSearch(arr, 5));
        System.out.println(halfSearch(arr, 8));
    }

    public static int halfSearch(int[] arr, int target) {
        // 定义三个变量，分别记录最大、最小、中间的查找范围索引值
        int max = arr.length - 1;
        int min = 0;
        int mid = arr.length / 2;
        while (true) {
            if (target > arr[mid]) {
                min = mid + 1;
            } else if (target < arr[mid]) {
                max = mid - 1;
            } else {
                // 找到了元素
                return mid;
            }
            // 没有找到的情况
            if (min > max) {
                return -1;
            }
            // 重新计算中间值
            mid = (min + max) / 2;
        }

    }
}

```



### 清除重复元素

~~~java
/*
11.目前有数组” int[] arr =  {11,2, 4, 2, 10, 11}，
定义一个函数清除该数组的重复元素，返回的数组存储了那些非重复的元素而且数组不准浪费长度。

分析：
	1. 确定新数组的长度。  原数组的长度-重复元素个数


*/
import java.util.*;
class Demo12 {

	public static void main(String[] args) 
	{
		int[] arr =  {11,2, 4, 2, 10, 11};
		arr = clearRepeat(arr);
		System.out.println("清除重复元素的数组："+ Arrays.toString(arr));
	}

	public static int[] clearRepeat(int[] arr){
		//先计算出重复元素的格式:
		int count = 0; //记录重复元素的个数
		for(int i = 0 ; i < arr.length-1 ; i++){
			for(int j = i+1 ; j<arr.length ; j++){
				if(arr[i]==arr[j]){
					count++;
					break;
				}
			}
		}
		
		//新数组 的长度
		int newLength = arr.length - count;
		//创建一个新的数组
		int[] newArr = new int[newLength];

		int index = 0 ; 	//新数组的索引值

		
		//遍历旧数组
		for(int i = 0  ; i< arr.length ; i++){
			int temp = arr[i];  //旧数组中的元素 
			boolean flag = false;  //默认不是重复元素
			
			
			//拿着旧数组 的元素 与新数组的每个元素比较一次。
			for(int j = 0 ; j< newArr.length ; j++){
				if(temp==newArr[j]){
					flag = true;
					break;
				}
			}
			
			if(flag == false){
				newArr[index++] = temp;
			}
		}
		
		return newArr;
	}
	
}

~~~





### 数组练习

```java
/*
需求： 目前存在数组：int[] arr = {0,0,12,1,0,4,6,0} ，编写一个函数
接收该数组，然后把该数组的0清空，然后返回一个不存在0元素的数组。

步骤：
	1. 计算机新数组的长度。  原来的数组长度-0的个数


*/
import java.util.*;
class Demo7 
{
	public static void main(String[] args) 
	{
		int[] arr = {0,0,12,1,0,4,6,0};
		arr = clearZero(arr);
		System.out.println("数组的元素："+Arrays.toString(arr));
	}


	public static  int[] clearZero(int[] arr){
		//统计0的个数
		int count = 0;	//定义一个变量记录0的个数
		for(int i = 0 ; i<arr.length ; i++){
			if(arr[i]==0){
				count++;
			}
		}

		//创建一个新的数组
		int[] newArr = new int[arr.length-count];
			
		int index  =0 ; //新数组使用的索引值
		//把非的数据存储到新数组中。
		for(int i = 0; i<arr.length ; i++){
			if(arr[i]!=0){
				newArr[index] = arr[i];
				index++;
			}
		}
		return newArr;
	}
}

```



### 数组元素翻转

​	需求： 定义 一个函数接收一个char类型的数组对象,然后翻转数组中的元素。

```java

class Demo13 
{
	public static void main(String[] args) 
	{
		//System.out.println("Hello World!");
		char[] arr = {'a','b','c','d','e'};
		reverse(arr);

	}

	public static void reverse(char[] arr){
		for(int startIndex = 0 ,endIndex = arr.length-1 ;   startIndex<endIndex ; startIndex++,endIndex--){
			char temp = arr[startIndex];
			arr[startIndex] = arr[endIndex];
			arr[endIndex] = temp;
		}

		//遍历数组，查看效果
		System.out.print("目前的元素：");
		for (int i = 0 ; i<arr.length  ;i++){
			System.out.print(arr[i]+",");
		}

	}
}

```



### 计算二维数组偶数元素总和

​	需求：定义一个二维数组，计算该二维数组中偶数元素的总和

```java
public class Demo1 {

    public static void main(String[] args) {
        int sum = 0;
        int[][] arr = { { 1, 2, 3, 4, 5 }, { 6, 7, 8, 9, 10 }, { 11, 12, 13, 14, 15 }, { 16, 17, 18, 19, 20 },
                { 21, 22, 23, 24, 25 }, { 26, 27, 28, 29, 30 } };
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                if (arr[i][j] % 2 == 0) {
                    sum++;
                }
            }
        }
        //查看输出结果
        System.out.println("该数组中偶数元素的总和为:"+sum);    

    }
}

```



### 面向对象实例

```java
//车类
class Car {

    // 事物的公共属性使用成员变量来描述
    String name; // 名字的属性
    String color; // 颜色属性
    int wheel; // 轮子数

    // 事物的公共行为使用函数来描述
    public void run() {
        System.out.println("车子跑起来了......");
    }
}

public class Demo1 {

    public static void main(String[] args) {
        // 使用Car类生命了一个c变量，c变量指向了一个车对象
        Car c = new Car();
        // 设置车对象的属性值
        c.name = "BMW";
        c.color = "white";
        c.wheel = 4;
        // 访问车的属性值
        System.out.println("名字：" + c.name + "\n颜色：" + c.color + "\n轮子：" + c.wheel);
        c.run();
    }
}

```



### 封装



```java
/*
面向对象三大特征：
	1. 封装
	2. 继承
	3  多态。

需求：  使用java类描述百合网的会员。

问题： 性别有问题？？

根本原因： 由于其他人可以直接操作sex属性。可以对sex属性进行了直接的赋值。

封装:


权限修饰符：权限修饰符就是控制变量可见范围的。

public :  公共的。 public修饰的成员变量或者方法任何人都可以直接访问。

private ： 私有的， private修饰的成员变量或者方法只能在本类中进行直接访问。


封装的步骤：
	1. 使用private修饰需要被封装的属性。
	2. 提供一个公共的方法设置或者获取该私有的成员属性。
			 命名规范：
				set属性名();
				get属性名(); 

疑问： 封装一定要提供get或者set方法吗？
		不一定， 根据需求而定的。

规范 ： 在现实开发中一般实体类的所有成员属性（成员变量）都要封装起来。

实体类：实体类就是用于描述一类 事物的就称作为实体类。


工具类(Arrays数组的工具类):


封装的好处：
	1. 提高数据的安全性。
	2. 操作简单。 
	3. 隐藏了实现。

*/
 class Member{
	
	public	String name; //名字

	private	String sex; //性别

	public	int salary; //薪水



	
	//定义一个公共的方法设置sex属性
	public void setSex(String s){
		if (s.equals("男")||s.equals("女")){ //注意： 如果比较两个字符串的内容是否一致，不要使用==比较， 使用equals方法。
			sex = s;
		}else{
			//默认是男
			sex = "男";
		}
	}

	//定义一个公共的方法获取sex属性
	public String getSex(){
		return sex;
	}



	//聊天
	public void talk(){
		System.out.println(name+"聊得非常开心");
	}
}

class Demo5{

	public static void main(String[] args) 
	{
		Member m = new Member();
		m.name="狗娃";
		m.setSex("女");
		m.salary  = 800;
		System.out.println("姓名："+ m.name+" 性别："+ m.getSex()+" 薪水："+ m.salary);
	}
}

```



### 计算器

```java
/*
需求： 使用java类描述一个计算器类，计算器具备操作数1， 操作数2 、操作符三个公共 的属性
，还具备计算的功能行为。 

要求： 不能直接对操作数1，操作数2，运算符这些属性进行直接 的赋值，要封装起来。 (+ - * /  )

根据需求提供get或者set方法。

	需要提供set方法
*/


//计算器类
class Calculator{

	private int num1; //操作数1

	private int num2;  //操作数2
 
	private	char option ; //运算符
	

	//提供公共的方法设置属性值....					
	public void initCalculator(int n1 , int n2 , char o){
		num1 = n1;
		num2 = n2;
		if(o=='+'||o=='-'||o=='*'||o=='/'){
			option = o;
		}else{
			option = '+';	
		}
	
	}


	//计算的功能
	public void calculate(){
		switch(option){
			case '+':
				System.out.println("做加法运算,结果是："+(num1+num2));
				break;
			case '-':
				System.out.println("做减法运算,结果是："+(num1-num2));
				break;
			case '*':
				System.out.println("做乘法运算,结果是："+(num1*num2));
				break;
			case '/':
				System.out.println("做除法运算,结果是："+(num1/num2));
				break;
		}
	}


}

class Demo6 
{
	public static void main(String[] args) 
	{
		//创建了一个计算器对象
		Calculator c = new Calculator();
		//设置属性值
		c.initCalculator(1,2,'a');
		//调用计算器的计算功能
		c.calculate();


	}
}

```



### 构造函数实例

```java
/*
java是 面向对象的语言： "万物皆对象": 任何事物都可以使用类进行描述。


需求： 使用java类描述 一个婴儿.

在现实生活中有两种婴儿， 一种婴儿一出生就具备了名字(白户)，还有一种婴儿就是 出生之后才有名字 的(黑户)。


构造函数：

构造函数的作用： 给对应的对象进行初始化。


构造函数的定义的格式：
	
	修饰符  函数名(形式参数){
		函数体...
	}

构造函数要注意的细节：
	1. 构造函数 是没有返回值类型的。
	2. 构造函数的函数名必须要与类名一致。
	3. 构造函数并不是由我们手动调用的，而是在创建对应的对象时，jvm就会主动调用到对应的构造函数。
	4. 如果一个类没有显式的写上一个构造方法时，那么java编译器会为该类添加一个无参的构造函数的。
	5. 如果一个类已经显式的写上一个构造方法时,那么java编译器则 不会再为该类添加 一个无参 的构造方法。
	6. 构造函数是 可以在一个类中以函数重载 的形式存在多个 的。


疑问：创建对象时，jvm就会调用到对应的构造方法，那么我们以前没有学构造方法，那么
以前创建对象时，jvm是否 也会调用构造方法呢？如果有？构造方法从何而来呢？
				
			会调用， java编译器在编译的 时候给加上去的。

jdk提供了一个java开发工具(javap.exe)给我们进行反编译的。


javap 反编译工具的使用格式：
		
		javap -c -l -private 类名

疑问： java编译器添加 的无参构造方法的权限修饰符是 什么？
		与类的权限修饰是一致的。


构造函数与普通 函数的区别：	
	1. 返回值类型的区别：
		1. 构造函数是没有返回值类型 的，
		2. 普通函数是有返回值类型的，即使函数没有返回值，返回值类型也要写上void。
	2. 函数名的区别：
		1. 构造函数的函数名必须要与类名一致，
		2. 普通函数的函数名只要符合标识符的命名规则即可。
	3. 调用方式的区别：
		1. 构造函数是 在创建对象的时候由jvm调用的。
		2. 普通函数是由我们使用对象调用的，一个对象可以对象多次普通 的函数，
	4. 作用上的区别：
		1. 构造函数 的作用用于初始化一个对象。
		2. 普通函数是用于描述一类事物的公共行为的。


*/

//婴儿类
class Baby{
	
	int id; //身份证
 
	String  name;  //名字

	//构造函数
	public  Baby(int i , String n){
		id  = i;
		name = n;
		System.out.println("baby的属性初始化完毕！！");
	}

	//无参 的构造函数
	public Baby(){
		System.out.println("无参的构造函数被调用了..");
	}

	
	//哭
	public void cry(){
		System.out.println(name+"哇哇哭...");
	}	
}


class Demo2 
{
	public static void main(String[] args) 
	{	
		//创建一个baby对象
		Baby b1 = 	new Baby(110,"狗娃"); //婴儿诞生   白户
		System.out.println("编号："+ b1.id +" 姓名："+ b1.name);
		b1.cry();
		b1.cry();

	

		/*
		//黑户
		Baby b2 = new Baby();
		new Baby();

		b2.id = 112;
		b2.name = "狗剩";
		System.out.println("编号："+ b2.id +" 姓名："+ b2.name);
		*/
	}
}

```



### 构造代码块1

```java
/*
构造代码块：

构造代码块的作用：给对象进行统一的初始化。

构造函数的作用： 给对应的对象进行初始化。


构造代码块的格式：
	
	{
		构造代码块
	}

注意： 构造代码块的大括号必须位于成员 位置上。


代码块的类别：
	1. 构造代码块。
	2. 局部代码块.   大括号位于方法之内。  作用：缩短局部 变量 的生命周期，节省一点点内存。
	3. 静态代码块  static 
*/

class Baby{
	
	int id; //身份证
 
	String  name;  //名字
	
	//构造代码块...
	{
		//System.out.println("构造代码块的代码执行了......");
		
	}

	//带参构造函数
	public  Baby(int i , String n){
		id  = i;
		name = n;
	}
	
	//无参构造方法
	public Baby(){
	}

	public void cry(){
		System.out.println(name+"哇哇哭...");
	}	
}



class Demo4 
{
	public static void main(String[] args) 
	{
		Baby b1 = new Baby(110,"狗娃");  //  狗娃 狗剩 铁蛋
		System.out.println("编号："+ b1.id + " 名字："+b1.name);
		/*
		System.out.println("编号："+ b1.id + " 名字："+b1.name);
	
		new Baby(112,"狗剩");
		new Baby();
		*/
		/*
		new Baby(110,"狗娃");
		new Baby(112,"狗剩");
		new Baby();
		*/
	}
}

```



### 构造代码块2

```java
/*
构造 代码块要注意的事项：
	1. java编译器编译一个java源文件的时候，会把成员变量的声明语句提前至一个类的最前端。
	2. 成员变量的初始化工作其实都在在构造函数中执行的。
	3. 一旦经过java编译器编译后，那么构造代码块的代码块就会被移动构造函数中执行，是在构造函数之前执行的，构造函数的中代码是最后执行 的。
	4. 成员变量的显示初始化与构造代码块 的代码是按照当前代码的顺序执行的。
*/
class Demo5 
{

	
	
	//构造函数
	public Demo5(){   //构造函数
		i = 300000000;	
	}
		
	//构造代码块   //构造代码块的初始化
	{
		i = 200000000;
	}
	
	int i = 100000000;	 //成员变量的显初始化

		

	public static void main(String[] args) 
	{
		Demo5 d = new Demo5();
		System.out.println("i = "+d.i); //    双、吴、刘 ：2000   ：
	}
}

```



### this关键字

```java
/*
需求： 使用java类描述一个动物。

问题：存在同名的成员变量与局部变量时，在方法的内部访问的是局部变量(java 采取的是就近原则的机制访问的。)。


this关键字：

this关键字代表了所属函数的调用者对象。


this关键字作用：
	1. 如果存在同名成员变量与局部变量时，在方法内部默认是访问局部变量的数据，可以通过this关键字指定访问成员变量的数据。
	2. 在一个构造函数中可以调用另外一个构造函数初始化对象。


this关键字调用其他的构造函数要注意的事项：
	1. this关键字调用其他的构造函数时，this关键字必须要位于构造函数中 的第一个语句。
	2. this关键字在构造函数中不能出现相互调用 的情况，因为是一个死循环。

this关键字要注意事项：
	1. 存在同名的成员变量与局部变量时，在方法的内部访问的是局部变量(java 采取的是“就近原则”的机制访问的。)
	2. 如果在一个方法中访问了一个变量，该变量只存在成员变量的情况下，那么java编译器会在该变量的 前面添加this关键字。



*/
class Animal{

	String name ;  //成员变量

	String color;

	public Animal(String n , String c){
		name = n;
		color = c;
	}
	
	//this关键字代表了所属函数的调用者对象
	public void eat(){
		//System.out.println("this:"+ this);
		String name = "老鼠"; //局部变量
		System.out.println(name+"在吃..."); //需求： 就要目前的name是成员变量的name.
		
	}
}

class Demo6 
{
	public static void main(String[] args) 
	{
		Animal dog = new Animal("狗","白色");  //现在在内存中存在两份name数据。

		Animal cat = new Animal("猫","黑色");
		cat.eat();
		
	
	}
}

```

 

### this关键字调用本类的构造方法

```java
/*
this关键字调用其他的构造函数要注意的事项：
	1. this关键字调用其他的构造函数时，this关键字必须要位于构造函数中 的第一个语句。
	2. this关键字在构造函数中不能出现相互调用 的情况，因为是一个死循环。

*/
class Student{

	int id;  //身份证

	String name;  //名字

	//目前情况：存在同名 的成员 变量与局部变量，在方法内部默认是使用局部变量的。
	public Student(int id,String name){  //一个函数的形式参数也是属于局部变量。
		this(name); //调用了本类的一个参数的构造方法
		//this(); //调用了本类无参的 构造方法。
		this.id = id; // this.id = id 局部变量的id给成员变量的id赋值
		System.out.println("两个参数的构造方法被调用了...");
	}
	
	
	public Student(){
		System.out.println("无参的构造方法被调用了...");
	}

	public Student(String name){
		this.name = name;
		System.out.println("一个参数的构造方法被调用了...");
	}

}


class Demo7 
{
	public static void main(String[] args) 
	{
		Student s = new Student(110,"铁蛋");
		System.out.println("编号："+ s.id +" 名字：" + s.name);
/*
	
		Student s2 = new Student("金胖子");
		System.out.println("名字：" + s2.name);
	*/
	}
}

```



### this关键字联系

```java
/*
需求： 使用java定义一个人类，人具备 id、name 、 age三个属性， 还具备一个比较年龄的方法。
要求： 必须 要 写上构造函数，构造函数也必须要使用上this关键字。
*/

class Person{
		
	int id; //编号

	String name; //姓名
  
	int age;  //年龄

	//构造函数
	public Person(int id,String name ,int age){
		this.id  = id;
		this.name = name;
		this.age = age;
	}

	//比较年龄的方法
	public void compareAge(Person p2){
		if(this.age>p2.age){
			System.out.println(this.name+"大!");
		}else if(this.age<p2.age){
			System.out.println(p2.name+"大!");
		}else{
			System.out.println("同龄");
		}
	}
}


class Demo8{

	public static void main(String[] args) 
	{
		Person p1 = new Person(110,"狗娃",17);
		Person p2 = new Person(119,"铁蛋",9);
		p1.compareAge(12);

	}
}

```



### static修饰成员变量

```java
/*
static(静态\修饰符)

	1. static修饰成员变量 ：如果有数据需要被共享给所有对象使用时，那么就可以使用static修饰。
		
		静态成员变量的访问方式：
				
				方式1： 可以使用对象进行访问。
					格式： 对象.变量名。
				
				方式二： 可以使用类名进行访问。
					格式： 类名.变量名;
	
			注意： 
				1. 非静态的成员变量只能使用对象进行访问，不能使用类名进行访问。
				2. 千万不要为了方便访问数据而使用static修饰成员变量，只有成员变量的数据是真正需要被共享的时候
				才使用static修饰。
			
		static修饰成员变量的应用场景： 如果一个数据需要被所有对象共享使用的时候，这时候即可好实用static修饰。


	2. static修饰成员函数:

*/

class Student{

	static	String name;  //非静态成员变量
	
	static	String  country  = "中国";	  //静态的成员变量
	
	public Student(String name){
		this.name = name;
	}
}


class Demo10 {


	public static void main(String[] args) 
	{
		Student s1 = new Student("狗娃");
		Student s2 = new Student("狗剩");
		
		//System.out.println("国籍："+ Student.country);
		System.out.println("名字："+ s1.name);
		System.out.println("名字："+ s2.name);
	}
}

```



### static修饰成员变量的应用场景

```java
/*
需求： 统计一个类被使用了多少次创建对象，该类对外显示被创建的次数。
*/
class Emp{
	
	//非静态的成员变量。
	static	int count = 0;	//计数器

	String name;
	
	//构造代码块
	{
		count++;
	}

	public Emp(String name){
		this.name = name;

	}

	public Emp(){  //每创建一个对象的时候都会执行这里 的代码
		
	}
	
	public void showCount(){
		System.out.println("创建了"+ count+"个对象");
	}
}

class Demo11 
{
	public static void main(String[] args) 
	{
		Emp e1 = new Emp();
		Emp e2 = new Emp();
		Emp e3 =new Emp();
		e3.showCount();
	}
}

```



### 静态函数

```java
/*
static（静态、修饰符）
	

	static修饰成员变量时：static修饰成员变量时,那么该成员变量的数据就是一个共享的数据.
	
		静态成员变量的访问方式：
			
				方式一： 使用对象进行访问。
						对象.属性名
				方式二：可以使用类名进行访问。
						类名.属性名
		注意：
			1. 非静态成员变量不能类名直接访问，只能使用对象进行访问。
			2. 千万不要为了方便访问成员变量而使用static修饰，一定要是该数据是共享数据 时才使用static修饰。

	static修饰方法（静态的成员方法）:
		
		访问方式：
			
			方式一：可以使用对象进行访问。
					对象.静态的函数名();

			方式二：可以使用类名进行访问。
					类名.静态函数名字。
		
		推荐使用是类名直接访问静态的成员。

静态的成员变量与非静态的成员变量的区别：
	1. 作用上的区别：
		1. 静态的成员变量的作用共享一个 数据给所有的对象使用。
		2. 非 静态的成员变量的作用是描述一类事物的公共属性。
	2. 数量与存储位置上的区别：
		1. 静态成员变量是存储方法 区内存中，而且只会存在一份数据。
		2. 非静态的成员变量是存储在堆内存中，有n个对象就有n份数据。
	3. 生命周期的区别：
		1. 静态的成员变量数据是随着类的加载而存在，随着类文件的消失而消失。
		2.非静态的成员数据是随着对象的创建而存在，随着 对象被垃圾回收器回收而消失。



静态函数要注意的事项：
	1. 静态函数是可以调用类名或者对象进行调用的，而非静态函数只能使用对象进行调用。
	2. 静态的函数可以直接访问静态的成员，但是不能直接访问非静态的成员。	
		原因：静态函数是可以使用类名直接调用的，这时候可能还没有存在对象，
		而非静态的 成员数据是随着对象 的存在而存在的。

	3. 非静态的函数是可以直接访问静态与非静态的成员。
		原因：非静态函数只能由对象调用，当对象存在的时候，静态数据老早就已经存在了，而非静态
		数据也随着对象的创建而存在了。

	4. 静态函数不能出现this或者super关键字。
		原因：因为静态的函数是可以使用类名调用的，一旦使用类名调用这时候不存在对象，而this
		关键字是代表了一个函数 的调用者对象，这时候产生了冲突。

静态的数据的生命周期：静态的成员变量数据是优先于对象存在的。


static什么时候修饰一个函数？
	
	如果一个函数没有直接访问到非静态的成员时，那么就可以使用static修饰了。 一般用于工具类型的方法
	

静态函数不能访问非静态的成员？
	 静态函数只要存在有对象，那么也可以访问非 静态的数据。只是不能直接访问而已。








	
*/
class Student{

	String name; //名字

	static	String country = "中国"; //国籍

	//静态代码块 ：静态代码块是在Student.class文件加载到内存的时候就马上执行的。
	static{
		System.out.println("静态代码块执行了...");
	}

	//构造函数
	public Student(String name){
		this.name = name;
	}
	
	//非静态的成员函数
	public  void study(){
		System.out.println("好好学习"+this);
	}


	//静态函数
	public static void sleep(){  //静态方法与非静态方法的字节码文件是同时存在内存中 的。 只是静态的成员变量数据是优先于对象存在而已。
		Student s= new Student("铁蛋");
		System.out.println(s.name+"呼呼大睡...");
	}
}


class Demo2 
{
	public static void main(String[] args) 
	{
		
		Student.sleep();
	//	Student s = new Student("狗娃");
	
	}
}

```



### 静态函数实例：数组工具类

```java
/*
需求：编写一个数组的工具类。
	Arrays.toString（）   [1,2,3,4];
	sort()
*/

//数组工具类
class ArrayTool{

	public static String toString(int[] arr){
		String result  = "";
		for(int i = 0;  i < arr.length ; i++){
			if (i==0){
				result+="["+arr[i]+",";
			}else if(i==(arr.length-1)){
				result+= arr[i]+"]";
			}else{
				result+=arr[i]+",";
			}
		}
		return result;
	}
public  static  String toString(int [] arr){
	String result="";
	for(int i=0;i<arr.length;i++){
		if(i==0){
			result="["+arr[i]+","+result;
		}else if(i==(arr.length-1)){
			result=arr[i]+"]";
		}else{
			result=arr[i]+","+result;
		}
	}
}

	public static void sort(int[] arr){
		for(int i = 0; i < arr.length-1 ; i++){
			for(int j = i+1 ; j<arr.length ; j++){
				if(arr[i]>arr[j]){
					int temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}	
	}

}



class Demo3 
{
	public static void main(String[] args) 
	{
		int[] arr = {12,1,456,165};
		//ArrayTool tool = new ArrayTool();

		ArrayTool.sort(arr);
		String info = ArrayTool.toString(arr);
		System.out.println("数组的元素："+ info);
	}
}

```



### main函数详解

```java
/*
main函数的详解：
	
	public ： 公共的。 权限是最大，在任何情况下都可以访问。 private  
		原因： 为了保证让jvm在任何情况下都可以访问到main方法。

	static:  静态。静态可以让jvm调用main函数的时候更加的方便。不需要通过对象调用。
		
	void:  没有返回值。 因为返回的数据是 给 jvm，而jvm使用这个数据是没有意义的。所以就不要了。
	

	main: 函数名。   注意： main并不是关键字,只不过是jvm能识别的一个特殊的函数名而已。
	
	
	arguments ：担心某些程序在启动需要参数。


*/
class Demo4 {

	public static  void main(String[] args) 
	{
		System.out.println("数组的长度："+ args.length);
		for(int i = 0 ; i <args.length ; i++){
			System.out.print(args[i]+",");
		}

		Scanner scanner = new Scanner(System.in);

		
	}
}

```



### 单例设计模式

```java
/*
单例设计模式：保证一个类在内存中只有一个对象。

模式：模式就是解决 一类 问题的固定步骤 。

模式的概念最早起源于建筑行业....

建房子的步骤都是一样子：
	
	打地基-----> 浇柱子------->盖楼面--------->砌墙--------->封顶---->装修-----入住

软件行业中23种设计模式：

	单例设计模式
	模板设计模式
	装饰者设计模式
	观察者设计模式
	工厂设计模式

单例设计模式的步骤：	


饿汉单例设计模式
	1. 私有化构造函数。
	2. 声明本类的引用类型变量，并且使用该变量指向本类对象。
	3. 提供一个公共静态的方法获取本类的对象。

懒汉单例设计模式：
	1. 私有化构造函数。
	2. 声明本类的引用类型变量，但是不要创建对象，
	3. 提供公共静态 的方法获取本类 的对象，获取之前先判断是否已经创建了本类 对象
	，如果已经创建了，那么直接返回对象即可，如果还没有创建，那么先创建本类的对象，
	然后再返回。


推荐使用： 饿汉单例设计模式。  因为懒汉单例设计模式会存在线程安全问题，目前还不能保证一类在内存中只有一个对象。


*/


//饿汉单例设计模式 ----> 保证Single在内存中只有一个对象。
class Single{
    
	//声明本类的引用类型变量，并且使用该变量指向本类对象
	private static	Single s = new Single();

	//私有化构造函数
	private Single(){}

	//提供一个公共静态的方法获取本类的对象
	public	static  Single getInstance(){
		return s;
	}
}

class Test{
public static Test t=new Test();
private Test{}
public static Test getInstance(){
return t;
}
}

class Test{
public static Test t;
private Test{}
public static Test getInstance(){
if(t==null){
t=new Test();
}
return t;
}
}

//懒汉单例设计模式 ----> 保证Single在在内存中只有一个对象。

class Single2{
	
	//声明本类的引用类型变量，不创建本类的对象
	private static Single2 s;

	//私有化了构造函数
	private Single2(){}

	//
	public static Single2 getInstance(){
		if(s==null){
			s = new Single2();
		}
		return s;
	}
}





class Demo5 
{
	public static void main(String[] args) 
	{
		Single2 s1 = Single2.getInstance();
		Single2 s2 = Single2.getInstance();
		System.out.println("是同一个对象吗？"+ (s1==s2));

	}
}

```



### 继承1

~~~java
/*
目前存在的问题：
	1. 无法描述清楚这两个类之间的继承关系。
	2. 存在着重复代码。

面向对象的三大特征：
	1. 封装
	2. 继承
	3. 多态.

继承：继承是通过关键字extends体现的。

继承的格式：

	class 类名1 extends 类名2{
	
	}


继承要注意的事项：
	1. 千万不要为了减少重复代码而去继承，只有真正存在着继承关系的时候才去继承。
	2. 父类私有的成员不能被继承。
	3. 父类的构造函数不能被继承。
	4. 创建子类对象时默认会先调用父类无参的构造函数。

*/
//人类 
class Person{
	
	String name;

	private	int age;

	public  Person(String name){
		this.name = name;
	}

	public Person(){
		System.out.println("Person类的构造方法被调用了....");
	}

	public void eat(){
		System.out.println(name+"在吃饭...");
	}
}

//学生类
class Student extends Person {  // Student 就称作为Person类的子类， Person类就称作为Student的父类(超类、基类)

	int num; //学号

	public Student(){
		System.out.println("Student类的构造方法被调用了....");
	}

	public void study(){
		System.out.println(name+"good good study , day day up");
	}	
}




class Demo7 
{
	public static void main(String[] args) 
	{
		Student s = new Student();
		
		/*
		s.name = "狗娃";
		System.out.println("名字："+ s.name);
		s.eat();
		*/
	}
}

~~~



### 继承2

~~~java
/*
疑问： 为什么要调用父类的构造方法啊？这样子做的意义在那？

	调用父类 的构造方法是可以初始化从父类继承下去的属性的。

*/ 
class Fu{
	
	int x = 10;

	String name;

	public Fu(String name){
		this.name = name;
		System.out.println("Fu类d带参的构造方法...");
	}

	public Fu(){
		System.out.println("Fu类无参的构造方法...");
	}
}


class Zi extends Fu{

	int x = 20;

	public Zi(String name){
		super(name); //指定调用父类一个参数的构造函数。
	}


	public void print(){
		System.out.println("x1 = "+ x);
	}

}


class Demo8 
{
	public static void main(String[] args) 
	{
		Zi z = new Zi("大头儿子"); 
		System.out.println("name= "+z.name);

	}
}

~~~



### super关键字

~~~java
/*
super关键字：

super关键字代表了父类空间的引用。

super关键字的 作用：
	1. 子父类存在着同名的成员时，在子类中默认是访问子类的成员，可以通过super关键字指定访问父类的成员。
	2. 创建子类对象时，默认会先调用父类无参的构造方法，可以通过super关键字指定调用父类的构造方法。

super关键字调用父类构造方法要注意的事项：
	1. 如果在子类的构造方法上没有指定调用父类的构造方法，那么java编译器会在子类的构造方法上面加上super()语句。
	2. super关键字调用父类的构造函数时，该语句必须要是子类构造函数中的第一个语句。
	3. super与this关键字不能同时出现在同一个构造函数中调用其他的构造函数。因为两个语句都需要第一个语句。


super关键字与this关键字的区别：
	1. 代表的事物不一致。
			1. super关键字代表的是父类空间的引用。	
			2. this关键字代表的是所属函数的调用者对象。
	2. 使用前提不一致。
			1. super关键字必须要有继承关系才能使用。
			2. this关键字不需要存在继承关系也可使用。
	3. 调用构造函数的区别：
			1. super关键字是调用父类的构造函数。
			2. this关键字是调用本类的构造函数。
*/
class Fu{
		
	int x = 10;

	String name;


	public Fu(){
		System.out.println("Fu类无参的构造方法..");
	}

	public Fu(String name){
		this.name = name;
		System.out.println("Fu类带参的构造方法..");
	}


	public void eat(){
		System.out.println("小头爸爸吃番薯..");
	}
}


class Zi extends Fu{
	
	int x = 20; 

	int num;
	
	public Zi(String name,int num){
		super(name); //指定调用了父类带参的 构造方法...
		this(); // 调用本类无参构造方法..
		//super(); //指定调用了父类无参构造方法。。。
		System.out.println("Zi类带参的构造方法..");
	}

	public Zi(){
		System.out.println("Zi类无参的构造方法..");
	}


	public void print(){
		System.out.println("x = " +super.x);
	}

	public void eat(){
		System.out.println("大头儿子吃龙虾..");
	}
}

class Demo9 {

	public static void main(String[] args) 
	{
		Zi z = new Zi("狗娃");

	
	}
}

~~~



### 方法的重写

~~~java
/*
目前的问题：父类的功能无法满足子类的需求。

方法重写的前提： 必须要存在继承的关系。

方法的重写: 子父类出了同名的函数，这个我们就称作为方法的重写。

什么是时候要使用方法的重写：父类的功能无法满足子类的需求时。

方法重写要注意的事项：
	1.方法重写时， 方法名与形参列表必须一致。
	2.方法重写时，子类的权限修饰符必须要大于或者等于父类的权限修饰符。
	3.方法重写时，子类的返回值类型必须要小于或者 等于父类的返回值类型。
	4.方法重写时， 子类抛出的异常类型要小于或者等于父类抛出的异常类型。
			Exception(最坏)
			RuntimeException(小坏)

方法的重载：在一个类中 存在两个或者两个 以上的同名函数,称作为方法重载。

方法重载的要求
	1. 函数名要一致。
	2. 形参列表不一致（形参的个数或形参 的类型不一致）
	3. 与返回值类型无关。

*/
class Animal{  //大的数据 类型 
}

class Fish extends Animal{  //Fish小 的数据类型。
}


class Fu{

	String name;

	public Fu(String name){
		this.name = name;
	}

	public Animal eat() throws RuntimeException {
		System.out.println(name+"吃番薯...");
		return new Animal();
	}
}


class Zi extends Fu{

	String num;
	
	public Zi(String name){
		super(name);//指定调用 父类带参的构造方法
	}


	//重写父类的eat方法
	public Animal eat() throws Exception{
		System.out.println("吃点开胃菜..");
		System.out.println("喝点汤....");
		System.out.println("吃点龙虾....");
		System.out.println("吃青菜....");
		System.out.println("喝两杯....");
		System.out.println("吃点甜品....");	
		return new Animal();
	}

}

class Demo10{

	public static void main(String[] args) 
	{
		Zi z = new Zi("大头儿子");
		z.eat();
	
	}
}

~~~



### 继承练习

~~~java
/*
需求：使用java描述一下普通的学生、 java基础班的学生、 就业班的学生。
所有的学生都会学习。但是学习的内容不一样。
普通 的学生： 马克思列宁主义。
基础班的学生：学习的是 javase。
就业班学生： javaee+android.
*/

//普通的学生类
class Student{

	String name;

	//构造函数
	public Student(String name){
		this.name = name;
	}
	
	public void study(){
		System.out.println(name+"学习马克思列宁主义");
	}
}

//基础班的学生是属于学生中一种
class BaseStudent extends Student{


	public BaseStudent(String name){
		super(name);//指定调用父类构造函数
	}

	//重写
	public void study(){
		System.out.println(name+"学习javase..");
	}
}


//就业班学生 也是属于普通学生中一种
class WorkStudent extends Student{
	
	//构造 函数
	public WorkStudent(String name){
		super(name);
	}
		//重写
	public void study(){
		System.out.println(name+"学习javaee+android..");
	}
}


class Demo11 
{
	public static void main(String[] args) 
	{
		//System.out.println("Hello World!");
		
		BaseStudent s = new BaseStudent("居东东");
		s.study();

		//创建一个就业班的学生
		WorkStudent w = new WorkStudent("张三");
		w.study();
	}
}

~~~



### instanceof 关键字

~~~java
/*
instanceof 关键字

instanceof关键字的作用：判断一个对象是否属于指定的类别。

instanceof关键字的使用前提：判断的对象与指定的类别必须要存在继承或者实现的关系。

instanceof关键字的使用格式：
		
		对象  instanceof 类别

instanceof关键字的作用： 目前没用。但是后天我们学习 到了多态之后就非常有用。
一般我们做强制类型转换之前都会使用该关键字先判断一把，然后在进行转换的。


*/
class Animal{

	String name;

	String color;

	public Animal(String name, String color){
		this.name = name;
		this.color = color;
	}
}


//狗是属于动物中一种
class Dog extends Animal {

	public Dog(String name,String color){
		super(name,color); //指定调用父类两个 参数的构造函数。
	}

	public void bite(){
		System.out.println(name+"咬人!!");
	}
}

//老鼠 也是属于动物中一种
class Mouse extends  Animal{
	
	public Mouse(String name,String color){
		super(name,color);
	}
	
	public void dig(){
		System.out.println(name+"打洞..");
	}

}

class Demo12{

	public static void main(String[] args) 
	{
		Dog d = new Dog("哈士奇","白色");
		System.out.println("狗是狗类吗？"+ (d instanceof Dog));
		System.out.println("狗是动物类吗？"+ (d instanceof Animal));	
		//System.out.println("狗是老鼠类吗？"+ (d instanceof Mouse));		// false true
		
		Animal a = new Animal("狗娃","黄色"); //狗娃是人
		System.out.println("动物都是狗吗？"+ (a instanceof Dog));


	}
}

~~~



### final关键字

~~~java
/*
final(最终、修饰符)  
	
final关键字的用法：
	1. final关键字修饰一个基本类型的变量时，该变量不能重新赋值，第一次的值为最终的。
	2. fianl关键字修饰一个引用类型变量时，该变量不能重新指向新的对象。
	3. final关键字修饰一个函数的时候，该函数不能被重写。
	4. final关键字修饰一个类的时候，该类不能被继承。


常量 的修饰符一般为： public static final 

*/

//圆形
class Circle{

	double r; //半径

	public static final double pi = 3.14; //固定不变的

	public Circle(double r){
		this.r = r;
	}

	//计算面积
	public final void getArea(){
		System.out.println("圆形的面积是："+r*r*pi);
	}
}



class Demo2 extends Circle
{
	
	public Demo2(double r){
		super(r);
	}

	public static void main(String[] args) 
	{
		/*
		final Circle c = new Circle(4.0);
		test(c);
		*/	
		Demo2 c = new Demo2(4.0);
		c.getArea();
	}
	

	
	public static void test(Circle c){
		c = new Circle(5.0);  //c变量又重新指向了新的对象。
		c.getArea();
	}

}

~~~



### 抽象类

~~~java
/*
抽象类：

目前存在的问题：
	1. 动物类的run方法描述的不正确。
	2. 没有强制要子类一定要重写run方法。

抽象类的应用场景：
	我们在描述一类事物的时候，发现该种事物确实存在着某种行为，
但是这种行为目前是不具体的，那么我们可以抽取这种行为 的声明，但是
不去实现该种行为，这时候这种行为我们称作为抽象的行为，我们就需要使用抽象类。

抽象类的好处: 强制要求子类一定要实现指定的方法。


抽象类要注意的细节：
	1. 如果一个函数没有方法体，那么该函数必须要使用abstract修饰,把该函数修饰成抽象 的函数。。
	2. 如果一个类出现了抽象的函数，那么该类也必须 使用abstract修饰。
	3. 如果一个非抽象类继承了抽象类，那么必须要把抽象类的所有抽象方法全部实现。
	4. 抽象类可以存在非抽象方法，也可以存在抽象的方法.
	5. 抽象类可以不存在抽象方法的。 
	5. 抽象类是不能创建对象的。
		疑问：为什么抽象类不能创建对象呢？
		因为抽象类是存在抽象方法的，如果能让抽象类创建对象的话，那么使用抽象的对象
		调用抽象方法是没有任何意义的。
	6. 抽象类是存在构造函数的，其构造函数是提供给子类创建对象的时候初始化父类的属性的。



*/
//动物类--->抽象类
abstract class Animal{
	
	String name;

	String  color;

	public Animal(String  name,String color){
		this.name = name;
		this.color = color;
	}
	

	//非抽象的方法
	public void eat(){
		System.out.println(name+"吃粮食");
	}

	//移动...
	public abstract void run();
}



//狗 是属于动物中一种 
class Dog extends Animal{

	public Dog(String name,String color){
		super(name,color);
	}

	public void run(){
		System.out.println(name+"四条腿跑得很快...");
	}
}


//鱼 是属于动物中一种
class Fish extends Animal{


	public Fish(String name,String color){
		super(name,color);
	}


	public void run(){
		System.out.println(name+"摇摇尾巴游啊游！");
	}
}


class Demo3 {

	public static void main(String[] args) 
	{
		/*
		Dog d = new Dog("牧羊犬","棕色");
		d.run();

		//创建一个鱼对象
		Fish f  = new Fish("锦鲤","金黄色");
		f.run();
		*/

		Animal a = new Animal();

	}
}

~~~



### 抽象类的练习

~~~java
/*
需求： 描述一个图形、圆形、 矩形三个类。不管哪种图形都会具备计算面积
与周长的行为，但是每种图形计算的方式不一致而已。

常量的命名规范：全部字母大写，单词与单词 之间 使用下划线分隔。


abstract不能与以下关键字共同修饰一个方法：
	1. abstract不能与private共同修饰一个方法。
	2. abstract 不能与static共同修饰一个方法。
	3. abstract 不能与final共同修饰一个方法。

*/
//abstract 抽象

//图形类
abstract class MyShape{ 

	String name;

	public MyShape(String name){
		this.name = name;
	}

	public  abstract void getArea();
	
	public abstract void getLength();
}

//圆形 是属于图形类的一种
class Circle extends MyShape{
	
	double r;

	public static final double PI = 3.14;

	public Circle(String name,double r){
		super(name);
		this.r =r;
	}

	public  void getArea(){
		System.out.println(name+"的面积是："+PI*r*r);
	}
	
	public  void getLength(){
		System.out.println(name+"的周长是："+2*PI*r);
	}
}

class Circle extends MyShape(){
	
	double r;
	
	public static final double PI=3.14;
	
	public Circle(String name,double r){
	super(name);
	this.r=r;
	}
	public void getArea(){
	System.out.println(name+"的面积是："+PI*r*r);
	}
	public void getLength(){
	System.out.println(name+"的周长是："+2*PI*r);
	}
}

//矩形 属于图形中的 一种
class Rect extends MyShape{

	int width;

	int height;

	public Rect(String name,int width, int height){
		super(name);
		this.width = width;
		this.height = height;
	}

	public  void getArea(){
		System.out.println(name+"的面积是："+width*height);
	}
	
	public  void getLength(){
		System.out.println(name+"的周长是："+2*(width+height));
	}
}

class Demo4 
{
	public static void main(String[] args) 
	{
		//System.out.println("Hello World!");
	
		Circle c = new Circle("圆形",4.0);
		c.getArea();
		c.getLength();

		//矩形
		Rect r = new Rect("矩形",3,4);
		r.getArea();
		r.getLength();
	
	}
}

~~~



### 值交换

~~~java
/*
值传递: 调用一个方法的时候，传递给方法的参数 ，实际上传递变量所存储的值。

*/
import java.util.*;
class Person{

	int x =10;
}


class Demo5 
{
	public static void main(String[] args) 
	{
		/*
		int a = 3;
		int b = 5; 
		changeValue(a,b);
		System.out.println("交换之后的值：a = "+a +" b="+b); 

		int[] arr = {23,10,9};
		changeArr(arr,1,2);
		System.out.println("数的元素："+ Arrays.toString(arr));// 9 ,10
			*/
		Person p = new Person();
		changeObj(p,20);
		System.out.println("x = "+ p.x);
	}
	
	public static void changeObj(Person p ,int x){
		p.x = x;
	}



	
	//需求2： 定义一个函数交换数组中两个 元素的位置。
	public  static void changeArr(int[] arr , int index1,  int  index2){
		int temp = arr[index1];
		arr[index1] = arr[index2];
		arr[index2] = temp;
	
	}


	//需求1：定义一个函数交换两个基本类型变量的值。 
	public static void changeValue(int a , int b){
		int temp = a;
		a = b;
		b = temp;
		System.out.println("方法内部交换的值：a = "+a +" b="+b);
	}

}

~~~



### 接口的基本概述1

~~~java

/*
接口的作用：
	1. 程序的解耦。  （低耦合）
	2. 定义约束规范。
	3. 拓展功能。


*/

//普通的铅笔类
class Pencil{
	
	String name;

	public Pencil(String name){
		this.name = name;
	}

	public void write(){
		System.out.println(name+"沙沙的写...");
	}
}


//橡皮接口
interface Eraser{
	
	public void remove();
}


//带橡皮的铅笔
class PencilWithEraser extends Pencil implements Eraser {

	public PencilWithEraser(String name){
		super(name);
	}


	public void remove(){
		System.out.println("涂改,涂改....");
	}
}


class Demo8 
{
	public static void main(String[] args) 
	{
		//System.out.println("Hello World!");
	
		PencilWithEraser p = new PencilWithEraser("2B铅笔");
		p.write();
		p.remove();
	
	}
}

~~~



### 接口的基本概述2

~~~java
/*
需求：在现实生活中有部分同学在学校期间只会学习，但是有部分学生除了学习外还会赚钱。
interface （定义接口）
implements (实现接口)

分析：
	普通的学生类
	接口
	会挣钱的学生
*/

//普通的学生类
class Student{

	String name;

	public Student(String name){
		this.name = name;
	}

	public void study(){
		System.out.println(name+"好好学习");
	}
}


//挣钱是学生拓展的功能---定义在接口上
interface Money{

	public void makeMoney();
}


//会挣钱的学生
class MoneyStudent extends Student implements Money{

	public MoneyStudent(String name){
		super(name);
	}

	public void makeMoney(){
		System.out.println(name+"好好挣钱，然后交学费！");
	}

}


class Demo9 
{
	public static void main(String[] args) 
	{
		Student s = new Student("李金华");
		s.study();
		//s.makeMoney();
		
		MoneyStudent m = new MoneyStudent("孙双双");
		m.study();
		m.makeMoney();
	
	}


}

~~~



### 接口与类和接口之间的关系

~~~java
/*
类与接口之间关系： 实现关系。

类与接口要注意的事项：
	1. 非抽象类实现一个接口时，必须要把接口中所有方法全部实现。
	2. 抽象类实现一个接口时，可以实现也可以不实现接口中的 方法。
	3. 一个类可以实现多个接口 。
		
		疑问： java为什么不支持多继承，而支持了多实现呢？
			class A{
				
				public void print(){
					System.out.println("AAAAAA");
				}
			}

			class B{

				public void print(){
					System.out.println("BBBBBB");
				}
			}


			class C extends A ,B{
			
			}
			
			new C().print();
	
接口与接口之间关系： 继承关系。

接口与接口之间要注意事项：
	1. 一个接口是可以继承多个接口的。


*/



interface A{

	public void print();
}


interface C{
	
	public void getArea();
}


interface B extends A,C{ // B接口继承A接口

	public void test();
}



class Demo10 implements B{

	public static void main(String[] args) 
	{
		Demo10 d = new Demo10();
		d.print();

	}

	public void getArea(){}


	public void test(){}


	public void print(){
		System.out.println("这个是A接口的print方法...");
	}
}

~~~



### 多态

~~~java
/*
面向对象的三大特征：
	1. 封装
	2. 继承。
	3. 多态

多态：一个对象具备多种形态。(父类的引用类型变量指向了子类的对象)

或者是接口 的引用类型变量指向了接口实现类的对象)

多态的前提：必须存在继承或者实现 关系。

    动物  a  = new   狗();

多态要注意 的细节：
	1.  多态情况下，子父类存在同名的成员变量时，访问的是父类的成员变量。
	2.  多态情况下，子父类存在同名的非静态的成员函数时，访问的是子类的成员函数。
	3.  多态情况下，子父类存在同名的静态的成员函数时，访问的是父类的成员函数。

	4.  多态情况下，不能访问子类特有的成员。

总结：多态情况下，子父类存在同名的成员时，访问的都是父类的成员，除了在同名非静态函数时才是访问子类的。

编译看左边，运行不一定看右边。

编译看左边：java编译器在编译的时候，会检查引用类型变量所属的类是否具备指定的成员，如果不具备马上编译报错。


*/


//动物类
abstract class Animal{

	String name;

	String  color = "动物色";

	public Animal(String name){
		this.name = name;
	}

	public abstract void run();

	public static void eat(){
		System.out.println("动物在吃..");
	}

}

//老鼠
class  Mouse extends Animal{

	String color = "黑色";

	public Mouse(String name){
		super(name);
	}
	
	public  void run(){
		System.out.println(name+"四条腿慢慢的走!");
	}

	public static void eat(){
		System.out.println("老鼠在偷吃..");
	}

	//老鼠特有方法---打洞
	public void dig(){
		System.out.println("老鼠在打洞..");
	}
}



class Fish extends Animal {

	public Fish(String name){
		super(name);
	}
	
	
	public  void run(){
		System.out.println(name+"摇摇尾巴游..");
	}
}


class Demo11 
{
	public static void main(String[] args) 
	{
		/*
		Mouse m = new Mouse("老鼠");
		System.out.println(m.color);
		
		//多态： 父类的引用类型变量指向子类的对象
		*/
		Animal a = new Mouse("老鼠");
		a.dig();
		//a.eat();
	}	
}

~~~



### 多态的应用

~~~java
/*
多态的应用：
  1. 多态用于形参类型的时候，可以接收更多类型的数据 。
  2. 多态用于返回值类型的时候，可以返回更多类型的数据。



多态的好处： 提高了代码的拓展性。

需求1： 定义一个函数可以接收任意类型的图形对象，并且打印图形面积与周长。
*/

//图形类
abstract class MyShape{

	public abstract void getArea();

	public abstract void getLength();	
}



class Circle extends MyShape{

	public static final double PI = 3.14;

	double r;

	public Circle(double r){
		this.r =r ;	
	}

	public  void getArea(){
		System.out.println("圆形的面积："+ PI*r*r);
	}

	public  void getLength(){
		System.out.println("圆形的周长："+ 2*PI*r);
	}
}


class Rect  extends MyShape{

	int width;

	int height;

	public Rect(int width , int height){
		this.width = width;
		this.height = height;
	}

	public  void getArea(){
		System.out.println("矩形的面积："+ width*height);
	}

	public  void getLength(){
		System.out.println("矩形的周长："+ 2*(width+height));
	}
}



class Demo12 {

	public static void main(String[] args) 
	{
		/*
		//System.out.println("Hello World!");
		Circle c = new Circle(4.0);
		print(c);

		Rect r = new Rect(3,4);
		print(r);
		*/

		MyShape m = getShape(0); //调用了使用多态的方法，定义的变量类型要与返回值类型一致。
		m.getArea();
		m.getLength();
		

	}


	//需求1： 定义一个函数可以接收任意类型的图形对象，并且打印图形面积与周长。
	public static void print(MyShape s){ // MyShpe s = new Circle(4.0);
		s.getArea();
		s.getLength();
	}


	// 需求2： 定义一个函数可以返回任意类型的图形对象。
	public static MyShape  getShape(int i){
		if (i==0){
			return new Circle(4.0);
		}else{
			return new Rect(3,4);
		}
	}


}

~~~



### 强制类型转换

~~~java
/*
目前多态情况下不能访问子类特有的成员。

如果需要访问子类特有的成员，那么需要进行类型强制转换.


基本数据类型的转换
	
	小数据类型-------->大的数据类型      自动类型转换

	大数据类型--------->小数据类型       强制类型转换     小数据类型  变量名 = （小数据类型）大数据类型;


引用数据类型的转换
	
	小数据类型--------->大数据类型     自动类型转换。

	大数据类型--------->小数据类型      强制类型转换

类型转换最场景的问题： java.lang.ClassCastException。 强制类型转换失败。


*/
//动物类
abstract class Animal{

	String name;

	public Animal(String name){
		this.name = name;
	}

	public abstract void run();
}

//老鼠
class  Mouse extends Animal{


	public Mouse(String name){
		super(name);
	}
	
	public  void run(){
		System.out.println(name+"四条腿慢慢的走!");
	}

	//老鼠特有方法---打洞
	public void dig(){
		System.out.println("老鼠在打洞..");
	}
}



//鱼
class Fish extends Animal{

	public Fish(String name){
		super(name);
	}

	public  void run(){
		System.out.println(name+"摇摇尾巴游啊游 !");
	}


	//吹泡泡
	public void bubble(){
		System.out.println(name+"吹泡泡...!");
	}

}




class Demo2 
{
	public static void main(String[] args) 
	{
		/*
		Animal a = new Mouse("老鼠");  //多态
		//调用子类特有的方法
		Mouse m  = (Mouse)a;  //强制类型转换
		m.dig();
		*/

		Mouse m = new Mouse("米老鼠");
		Fish f = new Fish("草鱼");

		print(f);

	}


	//需求： 定义一个函数可以接收任意类型的动物对象，在函数内部要调用到动物特有的方法。
	public static void print(Animal a){ // Animal a   = new Mouse("米老鼠");
		if(a instanceof Fish){
			Fish f = (Fish)a;
			f.bubble();
		}else if(a instanceof Mouse){
			Mouse m = (Mouse)a;
			m.dig();
		}
	}


}

~~~



### 接口关系下的多态

~~~java
/*
多态： 父类的引用类型变量指向了子类的对象或者是接口类型的引用类型变量指向了接口实现类 的对象。

实现关系下的多态：
	
	接口  变量  = new  接口实现类的对象。
*/

interface Dao{  //接口的方法全部都是非静态的方法。

	public void add();

	public void delete();
}



//接口的实现类
class UserDao implements Dao{
	
	public void add(){
		System.out.println("添加员工成功！！");
	}

	public void delete(){
		System.out.println("删除员工成功！！");
	}

}

class Demo3 
{
	public static void main(String[] args) 
	{
		//实现关系下的多态
		Dao d = new UserDao(); //接口的引用类型变量指向了接口实现类的对象。
		d.add();


	}
}

~~~



### 成员内部类

~~~java
/*
内部类：一个类定义在另外一个类的内部，那么该类就称作为内部类。

内部类的class文件名： 外部类$内部类.  好处：便于区分该class文件是属于哪个外部类的。

内部类的类别：

	1. 成员内部类:
			
			成员内部类的访问方式：
					
					方式一：在外部类提供一个方法创建内部类的对象进行访问。
					
					方式2二：在其他类直接创建内部类的对象。 格式：外部类.内部类  变量名 = new 外部类().new 内部类();
			
			注意： 如果是一个静态内部类，那么在其他类创建 的格式：
					外部类.内部类  变量名 = new 外部类.内部类();


		   内部类的应用场景： 我们在描述A事物的时候，发现描述的A事物内部还存在另外一个比较
		   复杂的事物B时候，而且这个比较复杂事物B还需要访问A事物的属性等数据，那么这时候
		   我们就可以使用内部类描述B事物。

		   比如： 人--->心脏

		   class 人{
			
			血

			氧气

			等....

			class 心脏{
			
			}		

		   }

		   内部类的好处：内部类可以直接访问外部类的所有成员。

			

			内部类要注意的细节：
				1. 如果外部类与内部类存在同名的成员变量时，在内部类中默认情况下是访问内部类的成员变量。
				   可以通过"外部类.this.成员变量名" 指定访问外部类的 成员。
				2. 私有的成员内部类只能在外部类提供一个方法创建内部类的对象进行访问，不能在其他类创建对象了。
				3. 成员内部类一旦出现了静态的成员，那么该类也必须 使用static修饰。

	局部内部类：

*/

//外部类
class Outer{
	
	//成员变量
	int x = 100; // Outer.class文件被加载到内存的时候存在内存中。  静态的成员数据是不需要对象存在才能访问。

	//成员内部类
	static	class Inner{      
		
		static	int i = 10;

		public void print(){
			System.out.println("这个是成员内部类的print方法！"+i);
		}
	}

	
	//在外部的方法中创建了内部类的对象，然后调用内部 方法。
	public void instance(){
		Inner inner = new Inner();
		inner.print();
	}

}



//其他类
class Demo4 
{
	public static void main(String[] args) 
	{
		/*
		System.out.println(Outer.Inner.i);
		
		Outer outer = new Outer();
		outer.instance();
		
		
		Outer.Inner inner = new Outer().new Inner();
		inner.print();
		*/


		Outer.Inner inner = new Outer.Inner();
		inner.print();
	}
}

~~~



### 局部内部类

~~~java
/*
局部内部类： 在一个类 的方法内部定义另外一个类，那么另外一个类就称作为局部内部类。

局部内部类要注意的细节：
	1. 如果局部 内部类访问了一个局部变量，那么该局部变量必须使用final修饰、



*/
class  Outer{

	String name= "外部类的name";

	public void test(){
		//局部变量
		final	int y =100;  // y 什么时候从内存中消失？ 方法执行完毕之后y消失。

		//局部内部类
		class Inner{     /*
							当test方法执行完毕之后，那么y马上从内存中消失，而Inner对象在方法
							执行完毕的时候还没有从内存中消失，而inner对象的print方法还在访问着
							y变量，这时候的y变量已经消失了，那么就给人感觉y的生命变量已经被延长了
							.

							解决方案： 如果一个局部内部类访问一个局部变量的时候，那么就让该局部内部类
							访问这个局部 变量 的复制品。				
						*/
			int x = 10;

			public void print(){
				System.out.println("这个是局部内部类的print方法.."+y);
			}	
		}
		
		Inner inner = new Inner();  //这个inner对象什么时候消失？  Inner对象的生命周期比局部变量y的生命周期要长。
		inner.print();
	}


}





class Demo5 
{
	public static void main(String[] args) 
	{
		Outer outer = new Outer();
		outer.test();
	}
}

~~~



###　匿名内部类

~~~java
/*

匿名内部类：没有类名的类就称作为匿名内部类。

匿名内部类的好处：简化书写。

匿名内部类的使用前提：必须存在继承或者实现关系才能使用。


匿名内部类一般是用于实参。


*/

abstract class Animal{
	
	public abstract Animal run();

	public abstract void sleep();
}


class Outer{

	public void print(){
		//需求： 在方法内部定义一个类继承Animal类，然后调用run方法与sleep()。
		
		/*
		//局部内部类
		class Dog extends Animal{
			
			public void run(){
				System.out.println("狗在跑..");
			}

			public void sleep(){
				System.out.println("狗趴在睁开眼睛睡..");
			}
		}
		
		//创建对象
		Dog d = new Dog();
		d.run();	
		d.sleep();
		*/	
		//匿名内部类 ：匿名内部类只是没有类名，其他的一概成员都是具备的。
		// 匿名内部类与Animal是继承 的关系。  目前是创建Animal子类的对象. 
	Animal	a = new Animal(){  //多态
		
			//匿名内部的成员 
			public Animal run(){
				System.out.println("狗在跑..");
				return this;
			}
			
			public void sleep(){
				System.out.println("狗趴在睁开眼睛睡..");
			}

			//特有的方法
			public void bite(){
				System.out.println("狗在咬人..");
			}
	
		};
	
		a.bite();
		a.run();
		a.sleep();
		
	}
}



class Demo6 
{
	public static void main(String[] args) 
	{
		//System.out.println("Hello World!");
		
		Outer outer = new Outer();
		outer.print();
	
	}
}

~~~



### 实现关系下的匿名内部类

~~~java

//实现关系下匿名内部类
interface Dao{

	public void add();
}


class Outer{

	public void print(){
		//创建一个匿名内部类的对象
		new Dao(){   //不是接口不能创建对象吗？怎么现在又可以了？
			 
			 public void add(){
				System.out.println("添加成功");
			 }
		}.add();
	}
}



class Demo7 
{
	public static void main(String[] args) 
	{
		test(new Dao(){
			
			public void add(){
				System.out.println("添加员工成功");
			}
		});


	}

	//调用这个方法...
	public static void  test(Dao d){  //形参类型是一个接口引用..
		d.add();
	}
}

~~~



### 异常

~~~java
/*
异常：

我们的java程序也是会存在某些不正常 的情况的，这些不正常的 情况我们就统称异常。


异常体系：
--------| Throwable
------------| Error
------------| Exception


Throwable常用的方法：
	toString()  返回当前异常对象的完整类名+病态信息。
	getMessage() 返回的是创建Throwable传入的字符串信息。
	printStackTrace() 打印异常的栈信息。
*/

class Demo8 
{
	public static void main(String[] args) 
	{
		/*
		//创建了一个Throwable对象。
		Throwable t = new Throwable("头晕，感冒..");
		String info = t.toString();
		String message = t.getMessage();
		System.out.println("toString: "+ info);  // java.lang.Throwable  包名+类名 = 完整类名
		System.out.println("message: "+ message);
		*/
		test();
	}

	public static void test(){
		//
		Throwable t = new Throwable();
		t.printStackTrace();
	}
}

~~~



### 错误

~~~java
/*
异常的体系：
----------| Throwable  所以异常或者错误类的超类
--------------|Error  错误   错误一般是用于jvm或者是硬件引发的问题，所以我们一般不会通过代码去处理错误的。
--------------|Exception 异常   是需要通过代码去处理的。

如何区分错误与异常呢：
	如果程序出现了不正常的信息，如果不正常的信息的类名是以Error结尾的，那么肯定是一个错误。
	如果是以Exception结尾的，那么肯定就是一个异常。


*/
class Demo9 
{
	public static void main(String[] args) 
	{
		//java虚拟机在默认的情况下只能管理64m内存。
		byte[] buf = new byte[1024*1024];
		System.out.println("Hello World!");
	}
}

~~~



### 捕获处理异常

~~~java
/*


疑问： 下面的信息是通过printStackTrace方法打印出来，那么异常对象从何而来呢？ 
	Exception in thread "main" java.lang.ArithmeticException: / by zero
        at Demo10.div(Demo10.java:10)
        at Demo10.main(Demo10.java:5)
	
jvm运行到a/b这个语句的时候，发现b为0，除数为0在我们现实生活中是属于
不正常的情况，jvm一旦发现了这种不正常的情况时候，那么jvm就会马上创建
一个对应的异常对象，并且会调用这个异常对象 的printStackTrace的方法来处理。


异常的处理：

	 方式一：捕获处理

	  捕获处理的格式：
			
			try{
				可能发生异常的代码；

			}catch(捕获的异常类型 变量名){
				处理异常的代码....
			}
	
		
		捕获处理要注意的细节：
			1. 如果try块中代码出了异常经过了处理之后，那么try-catch块外面的代码可以正常执行。
			2. 如果try块中出了异常的代码，那么在try块中出现异常代码后面的代码是不会执行了。
			3. 一个try块后面是可以跟有多个catch块的，也就是一个try块可以捕获多种异常的类型。
			4. 一个try块可以捕获多种异常的类型,但是捕获的异常类型必须从小到大进行捕获，否则编译报错。


疑问一 : 异常的处理感觉没有多大作用，因为都是输出一个话而已?
		异常处理非常有用，只不过是由于我们目前所接触的知识点太过于局限而已。

疑问二： 以后捕获处理 的时候是否就是捕获Exception即可？
	错的，因为我们在现实开发中遇到不同的异常类型的时候，我往往会有不同 的处理方式。
	所以要分开不同的异常类型处理。
		

*/
class Demo10 
{
	public static void main(String[] args) 
	{
		int[] arr = null;
		div(4,0,arr);
	}


	public static void div(int a , int b,int[] arr){
		int c = 0;
		try{
			c = a/b;  //jvm在这句话的时候发现了不正常的情况，那么就会创建一个对应的异常对象。
			System.out.println("数组的长度："+ arr.length);
		}catch(ArithmeticException e){
			//处理异常的代码....
			System.out.println("异常处理了....");
			System.out.println("toString:"+ e.toString());
		}catch(NullPointerException e){
			System.out.println("出现了空指针异常....");
		}catch(Exception e){  
			System.out.println("我是急诊室，包治百病！");
		}
	
		System.out.println("c="+c);
	}


}

~~~



### 抛出处理

~~~java

/*
异常的处理方式----抛出处理
	
抛出处理（throw throws）


抛出处理要注意的细节：
	1. 如果一个方法的内部抛出了一个异常 对象，那么必须要在方法上声明抛出。
	2. 如果调用了一个声明抛出异常 的方法，那么调用者必须要处理异常。
	3. 如果一个方法内部抛出了一个异常对象，那么throw语句后面的代码都不会再执行了（一个方法遇到了throw关键字，该方法也会马上停止执行的）。
	4. 在一种情况下，只能抛出一种类型异常对象。

throw 与throws两个关键字：
	1. throw关键字是用于方法内部的，throws是用于方法声声明上的。
	2. throw关键字是用于方法内部抛出一个异常对象的，throws关键字是用于在方法声明上声明抛出异常类型的。
	3. throw关键字后面只能有一个异常对象，throws后面一次可以声明抛出多种类型的 异常。


疑问：何时使用抛出处理？何时捕获处理？原则是如何？
	如果你需要通知到调用者，你代码出了问题，那么这时候就使用抛出处理.
	如果代码是直接与用户打交道遇到了异常千万不要再抛，再抛的话，就给了用户了。
	这时候就应该使用捕获处理。

*/
class Demo11 
{
	public static void main(String[] args) 
	{
		try{
			int[] arr = null;
			div(4,0,arr); //调用了一个 声明抛出异常类型 的方法
		}catch(Exception e){
			System.out.println("出现异常了...");
			e.printStackTrace();
		}
		
	}


	public static void div(int a, int b,int[] arr) throws Exception,NullPointerException {
		if(b==0){
			throw new Exception(); //抛出一个异常对象...
		}else if(arr==null){
			throw new  NullPointerException();
		}
		int c = a/b;
		System.out.println("c="+c);
	}
}

~~~



### 自定义异常类

~~~java
/*
sun提供了很多的异常类给我们用于描述程序中各种的不正常情况，但是sun 给我
提供异常类还不足以描述我们现实生活中所有不正常情况，那么这时候我们就需要
自定义异常类。

需求: 模拟feiQ上线的时候,如果没有插上网线，那么就抛出一个没有插上网线的异常，
如果已经插上了网上，那么就正常显示好友列表。


自定义异常类的步骤：  自定义一个类继承Exception即可。
	


*/

//自定义了一个没有网线的异常类了。
class NoIpException extends Exception{


	public NoIpException(String message){
		super(message);  //调用了Exception一个参数的构造函数。
	}

}



class Demo2 
{
	public static void main(String[] args) 
	{
		String ip = "192.168.10.100";
		ip = null;
		try{
			feiQ(ip);  // 如果调用了一个声明抛出异常类型的方法，那么调用者必须要处理。
		
		
		}catch(NoIpException e){
			e.printStackTrace();
			System.out.println("马上插上网线！");
		}
		

	}


	public static void feiQ(String ip) throws NoIpException{
		if(ip==null){
			throw new  NoIpException("没有插网线啊，小白！");
		}
		System.out.println("正常显示好友列表..");
	}


}

~~~



### 运行时和编译时异常

~~~java
/*

异常体系：
--------| Throwable  所有错误或者异常的父类
--------------| Error（错误）
--------------| Exception(异常) 异常一般都通过代码处理 

------------------| 运行时异常: 如果一个方法内部抛出了一个运行时异常，那么方法上 可以声明也可以不 声明，调用者可以以处理也可以不处理。
------------------| 编译时异常(非运行时异常、受检异常):  如果一个方法内部抛出了一个编译时异常对象，那么方法上就必须要声明，而且调用者也必须要处理。

运行时异常： RuntimeException以及RuntimeException子类 都是属于运行时异常。

编译时异常： 除了运行时异常就是编译异常。


疑问： 为什么java编译器会如此严格要求编译时异常，对运行时异常如此宽松？

	运行时异常都是可以通过程序员良好的编程习惯去避免，所以java编译器就没有严格要求处理运行时异常。


*/
import java.security.acl.*;
class Demo4 
{
	public static void main(String[] args) throws InterruptedException
	{
			int[] arr = null;
			div(4,0,arr);
		
		 Object o = new Object();
		 o.wait();
	}


	public static void div(int a , int b ,int[] arr) {
		if(b==0){
			return;
		}
		int c = a/b;
		System.out.println("c = "+c);

		if(arr!=null){
			System.out.println("数组的长度： "+arr.length);
		}
	}
}

~~~



### finally块

~~~java
/*
finally 块；

finally块的 使用前提是必须要存在try块才能使用。

finally块的代码在任何情况下都会执行的，除了jvm退出的情况。

finally非常适合做资源释放的工作，这样子可以保证资源文件在任何情况下都 会被释放。



try块的三种组合方式：


第一种： 比较适用于有异常要处理，但是没有资源要释放的。
		 try{

			可能发生异常的代码
	
			}catch(捕获的异常类型 变量名){
				处理异常的代码
			}

第二种：比较适用于既有异常要处理又要释放资源的代码。
		
		try{

			可能发生异常的代码
	
			}catch(捕获的异常类型 变量名){
				处理异常的代码
			}finally{ 
				释放资源的代码;
			}

第三种： 比较适用于内部抛出的是运行时异常，并且有资源要被释放。
		   try{

			可能发生异常的代码
	
			}finally{ 
				释放资源的代码;
			}
	
*/


class Demo5 
{
	public static void main(String[] args) 
	{
		//System.out.println("Hello World!");
		div(4,0);
	}


	public static void div(int a, int b){
		try{
			if(b==0){
				System.exit(0);//退出jvm
			}
			int c = a/b;
			System.out.println("c="+ c);

		}catch(Exception e){
			System.out.println("出了除数为0的异常...");
			throw e;
		}finally{
			System.out.println("finall块的代码执行了..");
		}
	}
}

~~~



### finally释放资源的代码

~~~java
/*
fianlly释放资源的代码


*/
import java.io.*;
class Demo6 
{
	public static void main(String[] args) 
	{
		FileReader fileReader = null;
		try{
			//找到目标文件
			File file = new File("f:\\a.txt");
			//建立程序与文件的数据通道
			fileReader = new FileReader(file);
			//读取文件
			char[] buf = new char[1024];
			int length = 0; 
			length = fileReader.read(buf);
			System.out.println("读取到的内容："+ new String(buf,0,length));
		}catch(IOException e){
			System.out.println("读取资源文件失败....");
		}finally{
			try{
				//关闭资源
				fileReader.close();
				System.out.println("释放资源文件成功....");
			}catch(IOException e){
				System.out.println("释放资源文件失败....");
			}
		}

	}
}

~~~



### 包

~~~java
/*
包: 

java中的包就相当于windows文件夹。

包的作用：
	1. 解决类名重复产生冲突的问题。
	2. 便于软件版本的发布。


定义包的格式：
	package 包名;

包名命名规范：包名全部小写。

包语句要注意的事项：
	1. package语句必须位于java文件中中第一个语句。
	2. 如果一个类加上了包语句，那么该类的完整类名就是: 包名.类名
	3. 一个java文件只能有一个包语句。


问题：  每次编译的时候都需要自己创建一个文件夹，把对应 的class文件存储 到文件夹中。烦！！！
	
		javac -d 指定类文件的存放路径   java源文件





*/
package aa;

class Demo1 
{
	
	public static void main(String[] args) 
	{
		System.out.println("这个是Demo1的main方法...");
	}
}

~~~



### 导包语句

~~~java
/*
有了包之后类与类之间的访问：

问题： 有了包之后类与类之间的访问每次都必须 要写上包名！烦！！！！

解决方案： sum提供导包语句让我们解决该问题。

导包语句作用：简化书写。 (误区： 把一个类导入到内存中)

导包语句的格式：
			 import 包名.类名;   （导入xxx包中某个类）

导包语句要注意的细节：
	 1. 一个java文件中可以出现多句导包语句。
	 2. "*"是 导包语句的通配符。可以匹配任何 的类名。
	 3. import aa.*; 是不会作用于aa包下面的子包的。
	
推荐使用：import 包名.类名;   因为使用*通配符会导致结构不清晰。

什么时候使用import语句: 
	1. 相互访问的两个类不是在同一个包下面，这时候就需要使用到导包语句。
	2. java.lang 是默认导入 的，不需要我们自己导入。

*/
package aa;
public class Demo3 
{
	/*
	static{
		System.out.println("这个是Dmeo3的静态代码块...");
	}
	*/


	public void print(){
		System.out.println("这个是Dmeo3的print方法...");
	}
}

~~~



###　权限修饰符

~~~java
/*
权限修饰符： 权限修饰符就是控制被修饰的成员的范围可见性。

			public(公共)        protected(受保护)           default(缺省)       private (大到小)

同一个类      true                 true                        true                 true


同一个包      true                 true                        true                  false

  
子父类        true                  true                      false                   false


不同包        true                 false                      false                   false


注意： 在不同包下面只有public 与 protected 可以访问，而且protected必须是在继承关系下才能够访问。


*/
package aa;
public class Demo7 
{
	protected   int i =10;

}

~~~



### jar包

~~~java
/*
打jar包: 需要使用到jdk的开发工具（jar.exe）.
	
jar的用法：
	
使用格式：
 
	jar cvf jar文件的名字  class文件或者是文件夹 

打jar包要注意的事项：
	1. 一个程序打完了jar之后 必须要在清单文件上指定入口类： 格式 Main-Class: 包名.类名
	2. jar包双击运行仅对于图形化界面的程序起作用，对控制台的程序不起作用。


jar文件的作用：
	1. 方便用户快速运行一个项目。
	2. 提供工具类以jar包的形式给别人使用。 


如果使用jar包里面的类必须要先设置classpath路径。

jre = jvm+ 核心类库

*/
package qq;
import javax.swing.*;
class Demo9 
{
	public static void main(String[] args) 
	{
		System.out.println("QQ程序..");
		JFrame frame = new JFrame("QQ程序");
		frame.setSize(400,500);
		frame.setVisible(true); //设置窗口可见。
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}
}

~~~



### 模板模式

~~~java
/*
模板模式 ：解决某类事情的步骤有些是固定的，有些是会发生变化的，那么这时候我们可以
为这类事情提供一个模板代码，从而提高效率 。


需求；编写一个计算程序运行时间 的模板。

模板模式的步骤：
	1. 先写出解决该类事情其中 的一件的解决方案。
	2. 分析代码，把会发生变化的代码抽取出来独立成一个方法。把该方法描述成一个抽象的方法。
	3. 使用final修饰模板方法，防止别人 重写你的模板方法。

*/
abstract class MyRuntime{
	
	public final void getTime(){
		long startTime = System.currentTimeMillis();	//记录开始的时间
		code();
		long endTime = System.currentTimeMillis();  //记录结束的时间.
		System.out.println("运行时间 ："+ (endTime-startTime));
	}

	public abstract void code();
}




class Demo11 extends MyRuntime
{
	public static void main(String[] args) 
	{
		Demo11 d = new Demo11();
		d.getTime();
	}


	
	//code方法内部就写要计算运行时间 的代码；
	public  void code(){
		int i = 0;
		while(i<100){
			System.out.println("i="+i);
			i++;
		}

	}
}

~~~



### object类

~~~java
package cn.itcast.object;
/*
java是面向对象的语言，核心思想：找适合 的对象做适合 的事情：
	
	方式一：自定义类，然后通过自定义的类创建对象。
	
	方式二：sun提供了很多的类给我使用，我们只需要认识这些类，我们就可以通过这些类创建对象了。
	
Object类是所有类的终极父类。 任何一个类都继承了Object类。


Object类：


Object类常用的方法：
	toString();     返回该对象的字符串表示。 返回一个字符串用于描述该对象的。
疑问： toString() 有何作用？	  重写toString之后，我们直接输出一个对象的时候，就会输出符合我们所需求的格式数据。
	
	equals(Object obj)   用于比较两个对象的内存地址，判断两个对象是否为同一个对象。
	
	hashCode()   返回该对象的哈希码值(大家可以把哈希码就 理解成是对象的内存地址)/


java中的规范：一般我们重写了一个类的equals方法，我们都会重写它的hashCode方法。



java是开源....源代码公开...

查看源代码的方式：
	方式一： 按住ctrl键，单击你需要看的源代码.
	
	方式二：把光标移动到你需要查看代码处按下F3.
	

为什么我们要查看源代码：
	1，查看源代码可以了解别人是如何写出这个技术的，让我们了解的更加的深入。
	2. 吸收大牛的思想。

看源代码最忌讳的一点： 不要每行代码都弄懂是什么意思，能看个大概 猜出他意思就足矣。
 */

class Person{
	
	int id;
	
	String name;

	public Person(int id, String name) {
		this.id = id;
		this.name = name;
	}

	public Person() {
	}
	
	//目前我需要直接输出一个对象的时候，输出 的格式是： 编号：110 姓名： 狗娃  这种格式。 目前Object的
//	toString方法无法满足子类的需求，那么这时候我们就应该对Object类的toString进行重写。
	@Override
	public String toString() {
		return "编号："+ this.id + " 姓名："+this.name;
	}
	
	
	//为什么要重写：Object的equals方法默认比较的是两个对象的内存地址，我目前需要比较的是两个对象的身份证，所以Object类的equals方法不符合我现在的需求。
	@Override
	public boolean equals(Object obj) { 
		Person p  = (Person)obj;
		return this.id== p.id;
	}
	
	@Override
	public int hashCode() {
		return  this.id;
	}
	
		
}


public class Demo1 {

	public static void main(String[] args) {
		
		/*
		Object o = new Object();
		System.out.println(o.toString());  // java.lang.Object@18b3364    返回的字符串表示： 完整类名+@+ 对象的哈希码
		System.out.println(o);  // 通过查看源代码得知，直接输出一个对象 的时候，实际上在println方法内部会调用这个 调用的toString方法，把把toString方法返回的内容输出。
		//疑问： 为什么直接输出一个对象的时候和输出对象的toString方法返回的字符串结果是一样的呢？
		
		
		Person  p1 = new Person(110,"狗娃");
		System.out.println("p1:"+p1);  
		//如果我们能够输出一个p对象的时候，输出的格式： 编号：110 姓名： 狗娃..
		Person  p2 = new Person(112,"狗剩");
		System.out.println("p2:"+p2);  
		*/
		
		
		Person p1 = new Person(110,"狗娃");
		Person p2 = new Person(110,"陈富贵");
		//需求：在现实生活中只要两个人的身份证一致，那么就是同一个人。
		System.out.println("p1与p2是同一个对象吗？"+ p1.equals(p2));
		
		System.out.println("p1哈希码:"+ p1.hashCode());
		System.out.println("p2哈希码:"+ p2.hashCode());
		
		
	}
	
	
	
}

~~~



### 字符串的入门

~~~java
package cn.itcsat.string;
/*
 String 字符串类:
  
 笔试题目：new String("abc")创建了几个对象？
  两个对象， 一个对象是 位于字符串常量池中，一个对象是位于堆内存中。
  
  
  
  
 */


public class Demo1 {
	
	public static void main(String[] args) {
		
		String str1 = "hello";
		String str2 = "hello";
		String str3 = new String("hello");
		String str4 = new String("hello");
		System.out.println("str1==str2?"+(str1==str2));  // true  
		System.out.println("str2==str3?"+(str2==str3));  //false
		System.out.println("str3==str4?"+(str3==str4));  // false
		System.out.println("str3.equals(str2)?"+(str3.equals(str4))); //true
		//是String类重写了Object的equals方法，比较的是两个字符串对象 的内容 是否一致。
		// "=="用于比较 引用数据类型数据的时候比较的是两个对象 的内存地址，equals方法默认情况下比较也是两个对象 的内存地址。
		
		test(null);
	}
	
	public static void test(String str){
		if("中国".equals(str))
		{
			System.out.println("回答正确");
		}else{
			System.out.println("回答错误");
		}
	}
	
}

~~~



###　字符串的方法

###### 	String的构造方法

~~~java
package cn.itcsat.string;
/*
 String 的构造方法：
 
 	String()  创建一个空内容 的字符串对象。
 	String(byte[] bytes)  使用一个字节数组构建一个字符串对象
 	String(byte[] bytes, int offset, int length) 
 		bytes :  要解码的数组
 		offset： 指定从数组中那个索引值开始解码。
 		length：　要解码多个元素。
 	
 	String(char[] value)  使用一个字符数组构建一个字符串。	
 	String(char[] value, int offset, int count)  使用一个字符数组构建一个字符串， 指定开始的索引值，与使用字符个数。
	String(int[] codePoints,int offset,int count)
	String(String original) 

记住： 使用字节数组或者字符数组都可以构建一个字符串对象。


 */
public class Demo2 {
	
	public static void main(String[] args) {
		String str = new String();
		byte[] buf = {97,98,99};
		
		str = new String(buf); //使用一个字节数组构建一个字符串对象
		str = new String(buf,1,2);   //使用一个字节数组构建一个字符串对象,指定开始解码 的索引值和解码的个数。
		
		char[] arr = {'明','天','是','圣','诞'};
		str = new String(arr); //使用字符数组构建一个字符串
		str = new String(arr,3,2);
		
		int[] 	buf2 = {65,66,67};
		str = new String(buf2,0,3);
		
		str = new String("abc");
		
		
		System.out.println("字符串的内容："+str);
		
		
		
		
	}
	
}

~~~



###### 	获取方法

~~~java
package cn.itcsat.string;
/*
2.2	获取方法
	int length()  获取字符串的长度
	char charAt(int index) 获取特定位置的字符 (角标越界)
	int indexOf(String str) 查找子串第一次出现的索引值,如果子串没有出现 在字符串中，那么则返回-1表示。
	int lastIndexOf(String str) 查找子串最后一次出现的索引值 , 如果子串没有出现 在字符串中，那么则返回-1表示
*/

public class Demo3 {
	
	public static void main(String[] args) {
		String str = "abc中国ab中国";
		System.out.println("字符串的字符 个数: " + str.length() );
		System.out.println("根据索引值获取对应 的字符:"+ str.charAt(3));
		System.out.println("查找子串第一次出现的索引值：" + str.indexOf("中国"));
		System.out.println("查找子串最后一次出现的索引值：" + str.lastIndexOf("中国"));
		
	}
	

}

~~~



###### 	判断的方法

~~~java
package cn.itcsat.string;

import java.util.Arrays;

/*
2.3	判断方法
	boolean endsWith(String str) 是否以指定字符结束
	boolean isEmpty()是否长度为0 如：“” null V1.6
	boolean contains(CharSequences) 是否包含指定序列 应用：搜索
	boolean equals(Object anObject) 是否相等
	boolean equalsIgnoreCase(String anotherString) 忽略大小写是否相等

2.4	转换方法     
char[] toCharArray()  将字符串转换为字符数组
byte[]	getBytes();

字节数组与字符数组、字符串他们三者之间是可以互相转换。

*/
public class Demo4 {
	
	public static void main(String[] args) {
		String str = "Demo.java";
		System.out.println("是否以指定 的字符串结束:"+ str.endsWith("ja"));
		//str = "";
		System.out.println("判断字符串是否为空内容："+str.isEmpty());
		System.out.println("判断字符串是否包含指定的内容："+ str.contains("Demo"));
		System.out.println("判断两个 字符串的内容是否一致："+ "DEMO.JAVA".equals(str));
		System.out.println("判断两个字符串的内容是否一致(忽略大小写比较):"+ "DEMO.JAVA".equalsIgnoreCase(str));
		
		
		//转换的方法
		char[] buf = str.toCharArray();  //把字符串转换字符数组
		System.out.println("字符数组："+ Arrays.toString(buf));
		byte[] buf2 = str.getBytes();	//把字符串转字节数组
		System.out.println("字节数组："+ Arrays.toString(buf2));
	}

}

~~~



###### 	其他方法

~~~java
package cn.itcsat.string;

import java.util.Arrays;

/*
 其他方法
	String replace(String oldChar, String newChar) 替换
	String[] split(String regex) 切割
	
	String substring(int beginIndex)   指定开始 的索引值截取子串
	String substring(int beginIndex, int endIndex)指定开始 与结束的索引值截取子串
	
	String toUpperCase() 转大写
	String toLowerCase() 转小写
	String trim() 去除字符串首尾的空格
	


	
*/

public class Demo5 {
	
	public static void main(String[] args) {
		String str = "今天晚上不考试";
		System.out.println("指定新内容替换旧 的内容:"+ str.replace("不", "要好好"));
		str = "大家-下-午-好";
		String[] arr = str.split("-"); //根据指定的字符进行切割 。
		System.out.println("字符串数组的内容："+ Arrays.toString(arr));
		str = "广州传智播客";
		System.out.println("指定开始的索引值截取子串:"+ str.substring(2));
		System.out.println("指定开始的索引值截取子串:"+ str.substring(2,6)); //包头不包尾  注意：截取的内容是包括开始的索引值，不包括结束的索引值， 截取的位置是结束的索引值-1.
		
		str = "abC中国";
		System.out.println("转大写：" + str.toUpperCase());
		str = "AbdfSDD"; 
		System.out.println("转小写："+ str.toLowerCase());
		
		str = "         大家最近        都非常努力            ";
		System.out.println("去除字符串首尾的空格："+ str.trim());
		
		
	}


}

~~~



### 字符串练习1

~~~java
package cn.itcsat.string;
/*
需求1：自己实现trim的方法。

需求2： 获取上传文件名  "D:\\20120512\\day12\\Demo1.java"。

需求3：	将字符串对象中存储的字符反序。    新中国好     -----> 好国中新

需求4： 求一个子串在整串中出现的次数 。 
	

*/
public class Demo6 {
	
	public static void main(String[] args) {
		String str  ="        传智        播客             ";	
		System.out.println(myTrim(str));
		
		str =  "D:\\20120512\\day12\\Demo1.java";
		getFileName(str);
		
		str = "新中国好";
		System.out.println("翻转后的字符串："+ reverse(str));
		
		str = "abcjavaabcjavaphpjava";  //java
		getCount(str, "java");
		
	}
	
	
	//统计子串出现 的次数
	public static void getCount(String str,String target){
		int count = 0 ; //用于记录出现的次数
		int fromIndex  = 0; // 记录从那个索引值开始寻找目标子串
		while((fromIndex = str.indexOf(target, fromIndex))!=-1){
			//如果indexof方法返回 的不是-1，那么就是已经找到了目标 元素。
			count++;
			fromIndex = fromIndex+target.length();
		}
		System.out.println("出现的次数："+ count);
	}
	
	
	
	public static String reverse(String str){
		char[] arr = str.toCharArray();
		for(int startIndex = 0 , endIndex=arr.length-1 ; startIndex<endIndex; startIndex++,endIndex--){
				char temp = arr[startIndex];
				arr[startIndex] = arr[endIndex];
				arr[endIndex] = temp;
		}
		//使用字符数组构建一个字符串。
		return new String(arr);
	}
	
	
	
	
	
	//需求2： 获取上传文件名  "D:\\20120512\\day12\\Demo1.java"。
	public static void getFileName(String path){
		int index = path.lastIndexOf("\\");
		String fileName = path.substring(index+1);
		System.out.println("文件名："+ fileName);
	}
	
	
	
//	需求1：自己实现trim的方法。
	public static String myTrim(String str){
		//先转换成字符 数组
		char[] arr = str.toCharArray();
		//定义两个 变量记录开始与结束 的索引值
		int startIndex = 0 ;
		int endIndex = arr.length -1;
		//确定开始 的索引值
		while(true){
			if(arr[startIndex]==' '){
				startIndex++;
			}else{
				break;
			}
		}
		//确定结束 的索引值：
		while(true){
			if(arr[endIndex]==' '){
				endIndex--;
			}else{
				break;
			}
		}
		//截取子串返回
		return str.substring(startIndex,endIndex+1);		
	}
	

}

~~~



### StringBuffer类

~~~java
package cn.itcast.stringbuffer;
/*
 字符串特点：字符串是常量；它们的值在创建之后不能更改.
 
 字符串的内容一旦发生了变化，那么马上会创建一个新 的对象。
 
 注意： 字符串的内容不适宜频繁修改，因为一旦修改马上就会创建一个新的对象。
 
 如果需要频繁修改字符串 的内容，建议使用字符串缓冲 类（StringBuffer）。
 
 
 StringBuffer 其实就是一个存储字符 的容器。

如果需要频繁修改字符串 的内容，建议使用字符串缓冲 类（StringBuffer）。


StringBuffer 其实就是一个存储字符 的容器。

笔试题目：使用Stringbuffer无 参的构造函数创建 一个对象时，默认的初始容量是多少？ 如果长度不够使用了，自动增长多少倍？
	StringBuffer 底层是依赖了一个字符数组才能存储字符数据 的，该字符串数组默认 的初始容量是16， 如果字符数组的长度不够使用 死，自动增长1倍。


容器的具备 的行为
	
	增加
	
	
	
	删除
	
	
	
	修改
	
	
	
	查看
	
	
	
	
	判断 




*/
 
 */
public class Demo1 {
	
	public static void main(String[] args) {
		String str1 = "hello";
		String str2	= str1+" world";
		System.out.println("str1与str2是同一个 对象吗？"+(str1==str2));


		//先使用StringBuffer无参的构造函数创建一个字符串缓冲类。
		StringBuffer sb = new StringBuffer(); 
		sb.append("java");
		sb.append("java");
		sb.append("java");
		sb.append("java");
		sb.append("java");
		
		System.out.println(sb);
		
		
	}

}

~~~



### 字符串缓冲类(StringBuilder)

~~~java
package cn.itcast.stringbuffer;
/*
如果需要频繁修改字符串 的内容，建议使用字符串缓冲 类（StringBuffer）。


StringBuffer 其实就是一个存储字符 的容器。

笔试题目：使用Stringbuffer无 参的构造函数创建 一个对象时，默认的初始容量是多少？ 如果长度不够使用了，自动增长多少倍？
	StringBuffer 底层是依赖了一个字符数组才能存储字符数据 的，该字符串数组默认 的初始容量是16， 如果字符数组的长度不够使用 死，自动增长1倍。


StringBuffer 是一个存储字符的容器 

容器的具备 的行为
	
	String 
	
	增加
		append(boolean b)    可以添加任意类型 的数据到容器中
		insert(int offset, boolean b)  指定插入的索引值，插入对应 的内容。 

	删除
		delete(int start, int end)  根据指定的开始与结束的索引值删除对应的内容。
		deleteCharAt(int index)   根据指定 的索引值删除一个字符。
	
	
	修改
	
		replace(int start, int end, String str) 根据指定 的开始与结束索引值替代成指定的内容。
		reverse()   翻转字符串缓冲类的内容。  abc--->cba
		
        setCharAt(int index, char ch)  把指定索引值的字符替换指定的字符。 
        substring(int start, int end)  根据指定的索引值截取子串。
		ensureCapacity(int minimumCapacity)  指定StringBuffer内部的字符数组长度的。
		
	查看
		indexOf(String str, int fromIndex) 查找指定的字符串第一次出现的索引值,并且指定开始查找的位置。
		lastIndexOf(String str) 
		
		capacity() 查看当前字符数组的长度。 
		length() 
		
		charAt(int index) 
		toString()   把字符串缓冲类的内容转成字符串返回。
		

StringBuffer 与 StringBuilder的相同处与不同处：
	
	相同点：
		1. 两个类都是字符串缓冲类。
		2. 两个类的方法都是一致的。
	不同点：
		1. StringBuffer是线程安全的,操作效率低 ，StringBuilder是线程非安全的,操作效率高。
		2. StringBuffer是jdk1.0出现 的，StringBuilder 是jdk1.5的时候出现的。
		
推荐使用： StringBuilder，因为操作效率高。
		


		
		
		
		
*/

public class Demo2 {
	
	public static void main(String[] args) {
		//先使用StringBuffer无参的构造函数创建一个字符串缓冲类。
		StringBuffer sb = new StringBuffer(); 
		sb.append("abcjavaabc");
		/*
		添加 
		sb.append(true);
		sb.append(3.14f);
		插入
		
		sb.insert(2, "小明");
		*/
		
		/*
		删除
		sb.delete(2, 4); //  删除的时候也是包头不包尾
		sb.deleteCharAt(3); //根据指定 的索引值删除一个字符
		
		修改	
		sb.replace(2, 4, "陈小狗");
		
		sb.reverse(); // 翻转字符串的内容
		
		sb.setCharAt(3, '红');
		
		String subString = sb.substring(2, 4);
		System.out.println("子串的内容："+ subString);
		
		查看
	
		int index = sb.indexOf("abc", 3);
		System.out.println("索引值为："+index);
			
		sb.append("javajava");
		System.out.println("查看字符数组的长度："+ sb.capacity());
		*/
		
		System.out.println("存储的字符个数："+sb.length());
		System.out.println("索引指定的索引值查找字符："+sb.charAt(2) );
		System.out.println("字符串缓冲类的内容："+ sb);
		
		String content = sb.toString();
		test(content);
	}
	
	public static void test(String str){
		
	}
	
}

~~~



### System类

~~~java
package cn.itcast.other;

import java.util.Arrays;
import java.util.Properties;

/*
 System  系统类 主要用于获取系统的属性数据。
 	
System类常用的方法：
 	arraycopy(Object src, int srcPos, Object dest, int destPos, int length) 一般
 		src - 源数组。
		srcPos - 源数组中的起始位置。
		dest - 目标数组。
		destPos - 目标数据中的起始位置。
		length - 要复制的数组元素的数量。
		
	currentTimeMillis()  获取当前系统系统。       重点
	exit(int status)  退出jvm  如果参数是0表示正常退出jvm，非0表示异常退出jvm。    一般

	gc()    建议jvm赶快启动垃圾回收期回收垃圾。
	getenv(String name) 根据环境变量的名字获取环境变量。
	getProperty(key) 
	
	
		
	finalize()  如果一个对象被垃圾回收 器回收的时候，会先调用对象的finalize()方法。
 */

class Person{
	
	String name;

	public Person(String name) {
		this.name = name;
	}
	
	@Override
	public void finalize() throws Throwable {
		super.finalize();
		System.out.println(this.name+"被回收了..");
	}
}



public class Demo1 {
	
	public static void main(String[] args) {
		/*
		int[] srcArr = {10,12,14,16,19};
		//把srcArr的数组元素拷贝 到destArr数组中。
		int[] destArr = new int[4];
		
		System.arraycopy(srcArr, 1, destArr, 0,4);
		//System.exit(0); //jvm退出..  注意： 0或者非0的 数据都可以退出jvm。对于用户而言没有任何区别。
		System.out.println("目标数组的元素："+ Arrays.toString(destArr)); // 0 14 16 0
		System.out.println("当前的系统时间：" + System.currentTimeMillis());
		System.out.println("环境变量："+System.getenv("JAVA_HOME"));
		
		
		for(int i = 0 ; i<4; i++){
			new Person("狗娃"+i);
			System.gc(); //建议马上启动垃圾回收期
		}
		
		Properties properties = System.getProperties();  //获取系统的所有属性。
		properties.list(System.out);
		*/
		String value = System.getProperty("os.name");//根据系统的属性名获取对应的属性值
		System.out.println("当前系统："+value);
	}
	
}

~~~



### RunTime类

~~~java
package cn.itcast.other;

import java.io.IOException;

import javax.management.RuntimeErrorException;

/*
 RunTime   该类类主要代表了应用程序运行的环境。
 	
 	getRuntime()  返回当前应用程序的运行环境对象。
 	exec(String command)  根据指定的路径执行对应的可执行文件。
 	freeMemory()   返回 Java 虚拟机中的空闲内存量。。 以字节为单位
 	maxMemory()    返回 Java 虚拟机试图使用的最大内存量。
 	totalMemory()    返回 Java 虚拟机中的内存总量
 	
 	
 
 */
public class Demo2 {

	public static void main(String[] args) throws IOException, InterruptedException {
		Runtime runtime = Runtime.getRuntime();
//		Process process = runtime.exec("C:\\Windows\\notepad.exe");
//		Thread.sleep(3000); //让当前程序停止3秒。
//		process.destroy();
		System.out.println(" Java虚拟机中的空闲内存量。"+runtime.freeMemory());
		System.out.println("Java 虚拟机试图使用的最大内存量:"+ runtime.maxMemory());
		System.out.println("返回 Java 虚拟机中的内存总量:"+ runtime.totalMemory());
	}
}

~~~



### 日期及其格式化类

~~~java
package cn.itcast.other;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;


/*
日期类 Date 
 

Calendar
 
 
日期格式化类    SimpleDateFormat
 
 */
public class Demo3  {
	
	public static void main(String[] args) throws ParseException {
		/*Date date = new Date(); // 获取当前的系统时间
		System.out.println("年份："+ date.getYear());*/
		/*
		Calendar calendar = Calendar.getInstance(); //获取当前的系统时间。
		System.out.println("年："+ calendar.get(Calendar.YEAR));
		System.out.println("月："+ (calendar.get(Calendar.MONTH)+1));
		System.out.println("日："+ calendar.get(Calendar.DATE));
		
		System.out.println("时："+ calendar.get(Calendar.HOUR_OF_DAY));
		System.out.println("分："+ calendar.get(Calendar.MINUTE));
		System.out.println("秒："+ calendar.get(Calendar.SECOND));
		
		// 显示 当前系统时间: 2014年12月26日  xx时xx分xx秒   
		
		 *  日期格式化类    SimpleDateFormat 
		 *  		作用1： 可以把日期转换转指定格式的字符串     format()
		 *  		作用2： 可以把一个 字符转换成对应的日期。    parse()   生日
		 *  	
		 */
		Date date = new Date(); //获取当前的系统时间。
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy年MM月dd日   HH:mm:ss") ; //使用了默认的格式创建了一个日期格式化对象。
		String time = dateFormat.format(date);  //可以把日期转换转指定格式的字符串
		System.out.println("当前的系统时间："+ time);
		
		String birthday = "2000年12月26日   11:29:08";
		Date date2 = dateFormat.parse(birthday);  //注意： 指定的字符串格式必须要与SimpleDateFormat的模式要一致。
		System.out.println(date2);
		
		Date date21 =new Date();
		SimpleDateFormat dateFormat2 = new SimpleDateFormat("yyyy年MM月dd日  HH:mm:ss");
		String time2 =dateFormat.format(date21);
		String time21=dateFormat.format(date);
		System.out.println("当前的系统时间："+time);
		String birthday1= "2000年12月26日  11:28:08";
		Date date22=dateFormat.parse(birthday1);
		System.out.println(date22);
	}
} 
~~~



### Math数学类

~~~java
package cn.itcast.other;
/*
 Math 数学类， 主要是提供了很多的数学公式。
 
 abs(double a)  获取绝对值
 ceil(double a)  向上取整
 floor(double a)  向下取整
 round(float a)   四舍五入
 random()   产生一个随机数. 大于等于 0.0 且小于 1.0 的伪随机 double 值
 
 */


public class Demo4 {
	
	public static void main(String[] args) {
		System.out.println("绝对值:"+Math.abs(-3));
		System.out.println("向上取整："+Math.ceil(3.14));
		System.out.println("向下取整："+Math.floor(-3.14)); //
		System.out.println("四舍五入:"+Math.round(3.54));
		System.out.println("随机数："+Math.random());
		
	}
	
}

~~~



### Random随机数类

~~~java
package cn.itcast.other;

import java.util.Random;
/*
随机数类
Random


需求： 编写一个函数随机产生四位的验证码。

 */

public class Demo5 {

	public static void main(String[] args) {
		/*
		Random random = new Random();
		int randomNum = random.nextInt(10)+1; //产生 的 随机数就是0-10之间
		System.out.println("随机数："+ randomNum);
		*/
		char[] arr = {'中','国','传','a','Q','f','B'};
		StringBuilder sb = new StringBuilder();
		Random random = new Random();
		//需要四个随机数，通过随机数获取字符数组中的字符，
		for(int i  = 0 ; i< 4 ; i++){
			int index = random.nextInt(arr.length);  //产生的 随机数必须是数组的索引值范围之内的。
			sb.append(arr[index]);
		}
		System.out.println("验证码："+ sb);
		
		
	}
	
}

~~~



### 自定义线程

~~~java
package cn.itcast.thread;
/*
 进程 ：  正在执行的程序称作为一个进程。  进程负责了内存空间的划分。
 
问题： windows号称是多任务的操作系统,那么windows是同时运行多个应用程序吗？
	
	从宏观的角度： windows确实是在同时运行多个应用程序。
	
	从微观角度： cpu是做了一个快速切换执行的动作，由于速度态度，所以我感觉不到在切换 而已。

线程： 线程在一个进程 中负责了代码的执行，就是进程中一个执行路径，

多线程： 在一个进程中有多个线程同时在执行不同的任务。

疑问 ：线程负责了代码 的执行，我们之前没有学过线程，为什么代码可以执行呢？
	运行任何一个java程序，jvm在运行的时候都会创建一个main线程执行main方法中所有代码。

一个java应用程序至少有几个线程？
	至少有两个线程， 一个是主线程负责main方法代码的执行，一个是垃圾回收器线程,负责了回收垃圾。

多线程的好处：
	1. 解决了一个进程能同时执行多个任务的问题。
	2. 提高了资源的利用率。

多线程 的弊端：
	1. 增加cpu的负担。
	2. 降低了一个进程中线程的执行概率。
	3. 引发了线程安全 问题。
	4. 出现了死锁现象。
	
如何创建多线程：
	
	创建线程的方式：
	
		方式一：
			1. 自定义一个类继承Thread类。
			2. 重写Thread类的run方法 , 把自定义线程的任务代码写在run方法中
				疑问： 重写run方法的目的是什么？  
			   每个线程都有自己的任务代码，jvm创建的主线程的任务代码就是main方法中的所有代码, 自定义线程的任务代码就写在run方法中，自定义线程负责了run方法中代码。	
			3. 创建Thread的子类对象，并且调用start方法开启线程。
				
			注意：	一个线程一旦开启，那么线程就会执行run方法中的代码，run方法千万不能直接调用，直接调用run方法就相当调用了一个普通的方法而已
				并没有开启新的线程。
			
 */
public class Demo1 extends Thread {
	
	@Override  //把自定义线程的任务代码写在run方法中。
	public void run() {
		for(int i  = 0 ; i < 100 ; i++){
			System.out.println("自定义线程："+i);
		}
	}
	
	
	public static void main(String[] args) {
		//创建了自定义的线程对象。
		Demo1 d = new Demo1();
		//调用start方法启动线程
		d.start();
		
		for(int i  = 0 ; i < 100 ; i++){
			System.out.println("main线程："+i);
		}
	}

	
	
}

~~~



### 线程常用方法

~~~java
package cn.itcast.thread;
/*
 线程常用的方法：
 	 Thread(String name)     初始化线程的名字
	 setName(String name)    设置线程对象名
	 getName()             返回线程的名字
	 
	 
	 sleep()                 线程睡眠指定的毫秒数。 静态的方法， 那个线程执行了sleep方法代码那么就是那个线程睡眠。
	 
	 currentThread()      返回当前的线程对象，该方法是一个静态的方法， 注意： 那个线程执行了currentThread()代码就返回那个线程 的对象。
	 
	 getPriority()             返回当前线程对象的优先级   默认线程的优先级是5
	 setPriority(int newPriority) 设置线程的优先级    虽然设置了线程的优先级，但是具体的实现取决于底层的操作系统的实现（最大的优先级是10 ，最小的1 ， 默认是5）。
	 
 */
public class Demo3 extends Thread {
	
	public Demo3(String name){
		super(name); //调用了Thread类的一个 参数的构造方法。
	}
	
	
	@Override
	public void run() {
		/*System.out.println("this:"+ this);
		System.out.println("当前线程对象：" + Thread.currentThread());	*/
		
		for (int i = 0; i < 100 ; i++) {
			System.out.println(Thread.currentThread().getName()+":"+i);
			
			
			/*try {
				Thread.sleep(100);  //为什么在这里不能抛出异常，只能捕获？？ Thread类的run方法没有抛出异常类型，所以子类不能抛出异常类型。
			} catch (InterruptedException e) {
				e.printStackTrace();
			} */
		}
		
		
	}
	
	
	public static void main(String[] args) throws InterruptedException {
		//创建了一个线程对象
		Demo3 d = new Demo3("狗娃");
		d.setPriority(10); //设置线程 的优先级。 优先级的数字越大，优先级越高  ， 优先级的范围是1~10
		d.start();
		
		for (int i = 0; i < 100 ; i++) {
			System.out.println(Thread.currentThread().getName()+":"+i);
		}
		
		/*
		System.out.println("自定义线程的优先级："+d.getPriority());  //线程的优先级默认是5
		System.out.println("主线程的优先级："+Thread.currentThread().getPriority());
		
		
		d.start();
		
		d.setName("铁蛋"); //setName设置线程的名字
		d.start(); //开启线程 
		
		Thread mainThread = Thread.currentThread();
		System.out.println("主线程的名字："+ mainThread.getName());
	*/
	}

}

~~~



### 线程安全问题

~~~java
package cn.itcast.thread;
/*
 需求： 模拟3个窗口同时在售50张 票 。
 
问题1 ：为什么50张票被卖出了150次？

出现 的原因： 因为num是非静态的，非静态的成员变量数据是在每个对象中都会维护一份数据的,三个线程对象就会有三份。

解决方案：把num票数共享出来给三个线程对象使用。使用static修饰。

问题2： 出现了线程安全问题 ?

线程 安全问题的解决方案：sun提供了线程同步机制让我们解决这类问题的。
	
	java线程同步机制的方式：
	
		方式一：同步代码块
			
			同步代码块的格式：
				
				synchronized(锁对象){
					需要被同步的代码...
				}

同步代码块要注意事项：
		1. 任意的一个对象都可以做为锁对象。
		2. 在同步代码块中调用了sleep方法并不是释放锁对象的。
		3. 只有真正存在线程安全问题的时候才使用同步代码块，否则会降低效率的。
		4. 多线程操作的锁 对象必须 是唯一共享 的。否则无效。
		

需求： 一个银行账户5000块，两夫妻一个拿着 存折，一个拿着卡，开始取钱比赛，每次只能取一千块，要求不准出现线程安全问题。
		
		
		
		方式二：同步函数

出现线程安全问题的根本原因：
	1. 存在两个或者两个以上 的线程对象,而且线程之间共享着一个资源。
	2. 有多个语句操作了共享资源。
	

 
 */

class SaleTicket extends Thread{
		
	
	 static int num = 50;//票数  非静态的成员变量,非静态的成员变量数据是在每个对象中都会维护一份数据的。
	 
     static	Object o = new Object();
	
	 public SaleTicket(String name) {
		super(name);
	}
	
	@Override
	public void run() {
		while(true){
			//同步代码块
			synchronized ("锁") {				
				if(num>0){
					System.out.println(Thread.currentThread().getName()+"售出了第"+num+"号票");
					try {
						Thread.sleep(100);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
					num--;
				}else{
					System.out.println("售罄了..");
					break;
				}
			}
			
		}
	}	
	
	
} 


public class Demo4 {
	
	public static void main(String[] args) {
		//创建三个线程对象，模拟三个窗口
		SaleTicket thread1 = new SaleTicket("窗口1");
		SaleTicket thread2 = new SaleTicket("窗口2");
		SaleTicket thread3 = new SaleTicket("窗口3");
		//开启线程售票
		thread1.start();
		thread2.start();
		thread3.start();
		
	}
	
}

~~~



### 同步函数

~~~java
package cn.itcast.thread;
/*
进程: 进程就是正在运行的应用程序。 进程了负责了内存空间划分。

线程： 一个进程中的 代码是由线程去执行的，线程也就是进程中一个执行路径。

多线程： 一个进程中有多个线程可以同时执行任务。


多线程 的好处：
	1. 解决一个进程中可以同时执行多个任务的问题。
	2. 提高了资源利用率。

多线程的弊端：
	1. 增加了cpu的负担。
	2. 降低了一个进程中线程 的执行概率。
	3. 出现了线程 安全问题。
	4. 会引发死锁现象。
	

自定义线程 的实现方式：
	
	方式一 ： 
		1. 自定义一个类继承Thread类。
		2. 重写Thread类的run方法，把自定义线程的任务代码写在run方法上。
		3. 创建Thread的子类对象，并且调用start方法启动一个线程。 
		
	注意：千万不要直接调用run方法，调用start方法的时候线程就会开启，线程一旦开启就会执行run方法中代码，如果直接调用
	run方法，那么就 相当于调用了一个普通的方法而已。
	
	
线程安全问题：

线程安全出现 的根本原因：
	1. 存在两个或者两个以上 的线程对象共享同一个资源。
	2. 多线程操作共享资源的代码 有多句。
	


线程安全问题的解决方案：
	
	方式一： 可以使用同步代码块去解决。
	
	格式：
		synchronized(锁对象){
			需要被同步的代码
		}
	
同步代码块要注意的事项：
	1. 锁对象可以是任意的一个对象。
	2. 一个线程在同步代码块中sleep了，并不会释放锁对象。
	3. 如果不存在着线程安全问题，千万不要使用同步代码块，因为会降低效率。
	4. 锁对象必须是多线程共享的一个资源，否则锁不住。
	
	
	方式二：同步函数  ：  同步函数就是使用synchronized修饰一个函数。
	
	同步函数要注意的事项 ：
		1. 如果是一个非静态的同步函数的锁 对象是this对象，如果是静态的同步函数的锁 对象是当前函数所属的类的字节码文件（class对象）。
		2. 同步函数的锁对象是固定的，不能由你来指定 的。

	
	推荐使用： 同步代码块。
		原因：
			1. 同步代码块的锁对象可以由我们随意指定，方便控制。同步函数的锁对象是固定 的，不能由我们来指定。
			2. 同步代码块可以很方便控制需要被同步代码的范围，同步函数必须是整个函数 的所有代码都被同步了。
			


需求： 一个银行账户5000块，两夫妻一个拿着 存折，一个拿着卡，开始取钱比赛，每次只能取一千块，要求不准出现线程安全问题。
		
*/

class BankThread extends Thread{
	
	static	int count = 5000;
	
	public BankThread(String name){
		super(name);
	}
	
	@Override  //
	public synchronized  void run() {
		while(true){
			synchronized ("锁") {				
				if(count>0){
					System.out.println(Thread.currentThread().getName()+"取走了1000块,还剩余"+(count-1000)+"元");
					count= count - 1000;
				}else{
					System.out.println("取光了...");
					break;
				}
			}
		}
	}	
	
	
	//静态的函数---->函数所属 的类的字节码文件对象--->BankThread.class  唯一的。
	public static synchronized  void getMoney(){
		
	}
	
}


public class Demo1 {

	public static void main(String[] args) {
		//创建两个线程对象
		BankThread thread1 = new BankThread("老公");
		BankThread thread2 = new BankThread("老婆");
		//调用start方法开启线程取钱
		thread1.start();
		thread2.start();
		
		
	}
	
}

~~~



### 死锁现象

~~~java
package cn.itcast.thread;
/*
java中同步机制解决了线程安全问题，但是也同时引发死锁现象。

死锁现象：

死锁现象出现 的根本原因：
	1. 存在两个或者两个以上的线程。
	2. 存在两个或者两个以上的共享资源。
	
死锁现象的解决方案： 没有方案。只能尽量避免发生而已。

 */

class DeadLock extends Thread{
	
	public DeadLock(String name){
		super(name);
	}
	
	
	public void run() {
		if("张三".equals(Thread.currentThread().getName())){
			synchronized ("遥控器") {
				System.out.println("张三拿到了遥控器，准备 去拿电池!!");
				synchronized ("电池") {
					System.out.println("张三拿到了遥控器与电池了，开着空调爽歪歪的吹着...");
				}
			}
		}else if("狗娃".equals(Thread.currentThread().getName())){
			synchronized ("电池") { 
				System.out.println("狗娃拿到了电池，准备去拿遥控器!!");
				synchronized ("遥控器") {
					System.out.println("狗娃拿到了遥控器与电池了，开着空调爽歪歪的吹着...");
				}
			}
			
		}	
	}
	
	
}

public class Demo2 {

	public static void main(String[] args) {
		DeadLock thread1 = new DeadLock("张三");
		DeadLock thread2 = new DeadLock("狗娃");
		//开启线程
		thread1.start();
		thread2.start();
		
		
	}
	
}

~~~



### 线程的实现方式

~~~java
	package cn.itcast.thread;
/*
自定义线程的创建方式:

方式一 ： 
	1. 自定义一个类继承Thread类。
	2. 重写Thread类的run方法，把自定义线程的任务代码写在run方法上。
	3. 创建Thread的子类对象，并且调用start方法启动一个线程。 
		
	注意：千万不要直接调用run方法，调用start方法的时候线程就会开启，线程一旦开启就会执行run方法中代码，如果直接调用
	run方法，那么就 相当于调用了一个普通的方法而已。

方式二：
	1. 自定义一个类实现Runnable接口。
	2. 实现Runnable接口 的run方法，把自定义线程的任务定义在run方法上。
	3. 创建Runnable实现类对象。
	4. 创建Thread类 的对象，并且把Runnable实现类的对象作为实参传递。
	5. 调用Thread对象 的start方法开启一个线程。


问题1： 请问Runnable实现类的对象是线程对象吗？
	Runnable实现类的对象并 不是一个线程对象，只不过是实现了Runnable接口 的对象而已。
	只有是Thread或者是Thread的子类才是线程 对象。

问题2： 为什么要把Runnable实现类的对象作为实参传递给Thread对象呢？作用是什么？
	作用就是把Runnable实现类的对象的run方法作为了线程的任务代码去执行了。

推荐使用： 第二种。 实现Runable接口的。 
原因： 因为java单继承 ,多实现的。



 */

public class Demo3 implements Runnable{

	@Override
	public void run() {
		/*System.out.println("this："+ this);
		System.out.println("当前线程："+ Thread.currentThread());*/
		for(int i = 0 ; i < 100 ; i++){
			System.out.println(Thread.currentThread().getName()+":"+i);
		}
	}
	
	public static void main(String[] args) {
		//创建Runnable实现类的对象
		Demo3 d = new Demo3();
		//创建Thread类的对象， 把Runnable实现类对象作为实参传递。
		Thread thread = new Thread(d,"狗娃");  //Thread类使用Target变量记录了d对象，
		//调用thread对象的start方法开启线程。
		thread.start();
		
		
		for(int i = 0 ; i < 100 ; i++){
			System.out.println(Thread.currentThread().getName()+":"+i);
		}
		
	} 
	
	/*
	  Thread类 的run方法
	  
	 *  @Override
	    public void run() {
	        if (target != null) {
	            target.run();  //就相当于Runnable实现类的对象的run方法作为了Thread对象的任务代码了。
	        }
	    }
	*/
}

~~~



### 线程的实现方式2

~~~java
package cn.itcast.thread;

class SaleTicket implements Runnable{
	
	int  num = 50; // 票数
	
	@Override
	public void run() {
		while(true){
			synchronized ("锁") {
				if(num>0){
					System.out.println(Thread.currentThread().getName()+"售出了第"+ num+"号票");
					num--;
				}else{
					System.out.println("售罄了..");
					break;
				}	
			}
		}		
	}
}


public class Demo4 {
	
	public static void main(String[] args) {
		//创建了一个Runnable实现类的对象
		SaleTicket saleTicket = new SaleTicket();
		//创建三个线程对象模拟三个窗口
		Thread thread1 = new Thread(saleTicket,"窗口1");
		Thread thread2 = new Thread(saleTicket,"窗口2");
		Thread thread3 = new Thread(saleTicket,"窗口3");
		//开启线程售票
		thread1.start();
		thread2.start();
		thread3.start();
		
		
	}

}

~~~



### 线程通讯

~~~java
package cn.itcast.thread;
/*
 线程通讯： 一个线程完成了自己的任务时，要通知另外一个线程去完成另外一个任务.
 
生产者与消费者


wait():  等待   如果线程执行了wait方法，那么该线程会进入等待的状态，等待状态下的线程必须要被其他线程调用notify方法才能唤醒。
notify()： 唤醒    唤醒线程池等待线程其中的一个。
notifyAll() : 唤醒线程池所有等待 线程。


wait与notify方法要注意的事项：
	1. wait方法与notify方法是属于Object对象 的。
	2. wait方法与notify方法必须要在同步代码块或者是同步函数中才能 使用。
	3. wait方法与notify方法必需要由锁对象调用。
	
问题一：出现了线程安全问题。 价格错乱了...
 
 */

//产品类
class Product{
	
	String name;  //名字
	
	double price;  //价格
	
	boolean flag = false; //产品是否生产完毕的标识，默认情况是没有生产完成。
	
}

//生产者
class Producer extends Thread{
	
	Product  p ;  	//产品
	
	public Producer(Product p) {
		this.p  = p ;
	}
	
	
	
	@Override
	public void run() {
		int i = 0 ; 
		while(true){
		 synchronized (p) {
			if(p.flag==false){
				 if(i%2==0){
					 p.name = "苹果";
					 p.price = 6.5;
				 }else{
					 p.name="香蕉";
					 p.price = 2.0;
				 }
				 System.out.println("生产者生产出了："+ p.name+" 价格是："+ p.price);
				 p.flag = true;
				 i++;
				 p.notifyAll(); //唤醒消费者去消费
			}else{
				//已经生产 完毕，等待消费者先去消费
				try {
					p.wait();   //生产者等待
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
			 
		}	
	  }	
	}
}


//消费者
class Customer extends Thread{
	
	Product p; 
	
	public  Customer(Product p) {
		this.p = p;
	}
	
	
	@Override
	public void run() {
		while(true){
			synchronized (p) {	
				if(p.flag==true){  //产品已经生产完毕
					System.out.println("消费者消费了"+p.name+" 价格："+ p.price);
					p.flag = false; 
					p.notifyAll(); // 唤醒生产者去生产
				}else{
					//产品还没有生产,应该 等待生产者先生产。
					try {
						p.wait(); //消费者也等待了...
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			}
		}	
	}
}

public class Demo5 {
	
	public static void main(String[] args) {
		Product p = new Product();  //产品
		//创建生产对象
		Producer producer = new Producer(p);
		//创建消费者
		Customer customer = new Customer(p);
		//调用start方法开启线程
		producer.start();
		customer.start();
		
		
	}
	
}

~~~



### 线程的停止

~~~java
package cn.itcast.thread;
/*
 线程的停止：
 	1. 停止一个线程 我们一般都会通过一个变量去控制的。
 	2. 如果需要停止一个处于等待状态下的线程，那么我们需要通过变量配合notify方法或者interrupt()来使用。
 */


public class Demo6 extends Thread {
	
	boolean flag = true;
	
	public Demo6(String name){
		super(name);
	}
	
	
	@Override
	public synchronized void run() {
		int i = 0 ;
		while(flag){
			try {
				this.wait(); //狗娃等待..
			
			} catch (InterruptedException e) {
				System.out.println("接收到了异常了....");
			}
			System.out.println(Thread.currentThread().getName()+":"+i);
			i++;
		}
	}
	
	
	
	public static void main(String[] args) {
		Demo6 d = new Demo6("狗娃");
		d.setPriority(10);
		d.start();
		
		for(int i = 0 ; i<100 ; i++){
			System.out.println(Thread.currentThread().getName()+":"+i);
			//当主线程的i是80的时候停止狗娃线程。
			//d.interrupt();  // interrupt()根本就是无法停止一个线程。
			if(i==80){
				d.flag = false;
				d.interrupt(); //把线程的等待状态强制清除，被清除状态的线程会接收到一个InterruptedException。 
				/*synchronized (d) {					
					d.notify();
				}*/
				
				
			}
			
		}
		
		
	}

}

~~~



### 后台线程

~~~java
package cn.itcast.thread;
/*
 守护线程（后台线程）:在一个进程中如果只剩下 了守护线程，那么守护线程也会死亡。
 
 需求： 模拟QQ下载更新包。
 
 一个线程默认都不是守护线程。
 
 */
public class Demo7 extends Thread {
	
	public Demo7(String name){
		super(name);
	}
	
	@Override
	public void run() {
		for(int i = 1 ; i<=100 ; i++){
			System.out.println("更新包目前下载"+i+"%");
			if(i==100){
				System.out.println("更新包下载完毕,准备安装..");
			}
			try {
				Thread.sleep(100);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
	
	public static void main(String[] args) {
		 Demo7 d = new Demo7("后台线程");
		 d.setDaemon(true); //setDaemon() 设置线程是否为守护线程，true为守护线程， false为非守护线程。
		// System.out.println("是守护线程吗？"+ d.isDaemon()); //判断线程是否为守护线程。
		 d.start();
		 
		 for(int i = 1 ; i<=100 ; i++){
			 System.out.println(Thread.currentThread().getName()+":"+i);
		 }
		 
	}

}

~~~



### join方法

~~~java
package cn.itcast.thread;
/*
 join方法。 加入
 
 */

//老妈
class  Mon extends Thread{
	
	public void run() {
		System.out.println("妈妈洗菜");
		System.out.println("妈妈切菜");
		System.out.println("妈妈准备炒菜，发现没有酱油了..");
		//叫儿子去打酱油
		Son s= new Son();
		s.start();
		try {
			s.join();  //加入。 一个线程如果执行join语句，那么就有新的线程加入，执行该语句的线程必须要让步给新加入的线程先完成任务，然后才能继续执行。
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		System.out.println("妈妈继续炒菜");
		System.out.println("全家一起吃饭..");		
	}
} 

class Son extends Thread{
	
	@Override
	public void run() {
		System.out.println("儿子下楼..");
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		System.out.println("儿子一直往前走");
		System.out.println("儿子打完酱油了");
		System.out.println("上楼，把酱油给老妈");
	}
}

public class Demo8 {
	
	public static void main(String[] args) {
		Mon m = new Mon();
		m.start();
		
		
		
	}
}


~~~



### 数组

~~~java
package cn.itcast.collection;
/*
 
数组： 存储同一种数据类型的集合容器.

数组的特点：
	1. 只能存储同一种数据类型的数据。
	2. 一旦初始化，长度固定。 
	3. 数组中的元素与元素之间的内存地址是连续的。
	
注意： Object类型的数组可以存储任意类型的数据。 
 

 需求： 收集我们班同学的兴趣爱好。
 
 数组存储兴趣爱好：
 	String[] arr= new String[1000];
 	
 
 
 */


public class Demo1 {

	public static void main(String[] args) {
		Object[] arr = new Object[10];
		arr[1] = "abc";
		arr[2] = 'a';
		arr[3]  = 12;
		
	}
	
}

~~~



### 集合

~~~java
package cn.itcast.collection;

import java.util.ArrayList;
import java.util.Collection;

/*
 集合：集合是存储对象数据的集合容器。
 
集合比数组的优势：
	1. 集合可以存储任意类型的对象数据，数组只能存储同一种数据类型 的数据。
	2. 集合的长度是会发生变化的，数组的长度是固定的。
	
 
-------| Collection  单例集合的跟接口。 
 ----------| List  如果是实现了List接口的集合类，具备的特点： 有序，可重复。
 ----------| Set   如果是实现了Set接口的集合类，具备特点： 无序，不可重复。

Collection接口中的方法：
	
	增加
		add(E e)  添加成功返回true，添加 失败返回false.
		addAll(Collection c)  把一个集合 的元素添加到另外一个集合中去。
	
	删除
		clear() 
		remove(Object o) 
		
		removeAll(Collection  c) 
		retainAll(Collection  c) 
	
	查看
		size() 

	
	判断
		isEmpty() 
		contains(Object o) 
		containsAll(Collection<?> c) 
	
	迭代
		toArray() 
		iterator() 

 */
public class Demo2 {
	
	public static void main(String[] args) {
		Collection c = new ArrayList();
		c.add("令计划");
		c.add("徐才厚");
		c.add("周永康");
		System.out.println("添加成功吗？"+c.add("郭美美"));
		
		
		//创建集合
		Collection c2 = new ArrayList();
		c2.add("徐才厚");
		c2.add("郭美美");
		c2.add("狗娃");
	
		/*
		c.addAll(c2); // 把c2的元素的添加到c集合 中去。
		*/
		
		/*
		 删除方法:
		c.clear(); //clear()清空集合中的元素
		System.out.println("删除成功吗？"+c.remove("美美"));  // remove 指定集合中的元素删除，删除成功返回true，删除失败返回false.
		
		c.removeAll(c2); //删除c集合中与c2的交集元素。
		
		c.retainAll(c2); //保留c集合与c2的交集元素，其他的元素一并删除。
		*/
		System.out.println("查看元素个数："+c.size());
		
		System.out.println("集合的元素："+ c);
		
	}
	
}

~~~



###### 判断

~~~java
package cn.itcast.collection;

import java.util.ArrayList;
import java.util.Collection;

/*
判断
	isEmpty() 
	contains(Object o) 
	containsAll(Collection<?> c)
*/

class Person{
	
	int id; 
	
	String name;

	public Person(int id, String name) {
		this.id = id;
		this.name = name;
	}

	@Override
	public String toString() {
		return "{编号："+this.id+" 姓名："+ this.name+"}";
	}
	
	@Override
	public boolean equals(Object obj) {
		Person p = (Person)obj;
		return this.id == p.id ;
	}
	
	
	//java规范： 一般重写equlas方法我们都会重写hashCode方法的。
	@Override
	public int hashCode() {
		return this.id;
	}
	
	
	
}


class Dog{}


public class Demo3 {
	
	public static void main(String[] args) {
		/*Collection c = new ArrayList();
		c.add("令计划");
		c.add("徐才厚");
		c.add("周永康");
		System.out.println("判断集合是否为空元素："+ c.isEmpty());
		System.out.println("判断集合中是否存在指定的元素："+ c.contains("薄熙来"));*/
		
		//集合添加自定义的元素
		Collection c = new ArrayList();
		c.add(new Person(110,"狗娃"));
		c.add(new Person(119,"狗剩"));
		c.add(new Person(120,"铁蛋"));
		
		
		Collection c2 = new ArrayList();
		c2.add(new Person(110,"狗娃"));
		c2.add(new Person(119,"狗剩"));
		c2.add(new Person(104,"陈狗剩"));
		
		
		System.out.println("c集合有包含c2集合中的所有元素吗？"+ c.containsAll(c2));
		
		
		//如果在现实生活中，只要身份证编号一致，那么就为同一个人。
		System.out.println("存在该元素吗？"+c.contains(new Person(120,"陈铁蛋"))); // 其实contains方法内部是依赖于equals方法进行比较的。
		System.out.println("集合的元素："+ c);
		
		
	}
}

~~~



###### 迭代

~~~java
package cn.itcast.collection;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

/*
迭代
	toArray() 
*/
public class Demo4 {
	
	public static void main(String[] args) {
		/*Collection c = new ArrayList();
		c.add("令计划");
		c.add("徐才厚");
		c.add("周永康");
		Object[] arr = c.toArray(); //把集合中的元素全部 存储到一个Object的数组中返回。
		System.out.println("数组的元素："+Arrays.toString(arr));*/
		
		
		Collection c = new ArrayList();
		c.add(new Person(110,"狗娃"));
		c.add(new Person(119,"狗剩"));
		c.add(new Person(120,"铁蛋"));
		Object[] arr = c.toArray(); 
		//需求： 把编号是110的人信息 输出。
		for(int i = 0 ; i<arr.length ; i++){ 
			Person p = (Person) arr[i];  //从Object数组中取出的元素只能使用Object类型声明变量接收，如果需要其他 的类型需要进行强制类型转换。
			if(p.id==110){
				System.out.println(p);
			}
		}
		
		
		
	}

}

~~~



###### 迭代器

~~~java
package cn.itcast.collelction;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

/*

------| Collection 单例集合的根接口
----------| List  如果是实现了 List接口的集合类，该集合类具备 的特点： 有序、可重复。
----------| Set   如果是实现了Set接口的集合类，该集合具备的特点： 无序，不可 重复。
 
Collection---迭代的方法：
	toArray() 
	iterator()
	
	
迭代器的作用：就是用于抓取集合中的元素。


迭代器的方法：
	hasNext()   问是否有元素可遍历。如果有元素可以遍历，返回true，否则返回false 。
          	
 	next()    获取元素...
    
      	  
 	remove()  移除迭代器最后一次返回 的元素。


NoSuchElementException 没有元素的异常。 
出现的原因： 没有元素可以被迭代了。。。
	
	
 */
public class Demo2 {
	
	public static void main(String[] args) {
		Collection c = new ArrayList();
		c.add("狗娃");
		c.add("狗剩");
		c.add("铁蛋");
		c.add("美美");
	
		/*//遍历集合的元素------>方式一： 可以使用toArray方法。
		Object[] arr = c.toArray(); // toArray()  把集合 的元素存储到一个 Object的数组中 返回。
		for(int i = 0 ; i<arr.length ; i++){
			System.out.print(arr[i]+",");
		}
		
		//要求使用iterator迭代器遍历。
		*/

		Iterator it = c.iterator();  //返回一个迭代器    疑问：iterator()方法返回的是一个接口类型，为什么接口又可以调用方法可以使用呢？  iterator 实际 上返回的是iterator接口的实现类对象。
		/*
		while(it.hasNext()){ // hasNext() 问是否有元素可以遍历。
			System.out.println("元素："+ it.next()); //获取元素
		}
		*/
		
		/*it.next();
		it.next();
		it.remove();  //删除迭代器最后一次返回的元素。
*/
		
		//清空集合 的元素
		while(it.hasNext()){
			it.next();
			it.remove();
		}
		
		System.out.println("集合的元素："+ c);
		
		
		
		
	}
	
}

~~~



###### 登录注册案例

~~~java
package cn.itcast.collelction;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.Scanner;

/*
 
作业2：使用集合实现注册登陆功能，

第一步： 提示用户选择功能， A（注册）  B(登陆) 。 要求： 功能选择 的时候要忽略大小写。

注册：
	1. 提示用户输入注册的账号(数字)与密码，如果输入账号已经存在集合中，提示用户重新输入。 注册完毕之后，把集合中的所有用户信息打印出来。(使用：toArrry()方法)	
登陆： 
	提示用户输入登陆的账号与密码,如果账号与密码这个用户已经存在集合中，那么登陆成功，否则登陆失败。
 
 
 
 */
//用户
class User{
	
	int id;  //账号
	
	String password;  //密码

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public User(int id, String password) {
		this.id = id;
		this.password = password;
	}
	
	@Override
	public boolean equals(Object obj) {
		User user = (User)obj;
		return this.id==user.id;
	}
	
	@Override
	public String toString() {
		return "{ 账号："+this.id+" 密码："+this.password+"}";
	}
}


public class Demo1 {
	
	static Scanner scanner = new Scanner(System.in);
	
	static Collection users = new ArrayList(); //使用该集合保存所有的用户信息..
	
	public static void main(String[] args) {
		
		while(true){
			System.out.println("请选择功能      A(注册 )    B(登陆)");
			String option = scanner.next();
			if("a".equalsIgnoreCase(option)){
				 reg();
				
				
			}else if("b".equalsIgnoreCase(option)){
				login();

				
			}else{
				System.out.println("你的选择有误,请重新输入");
			}
		}
		
	}
	
	
	

	public static void login() {
		System.out.println("请输入账号：");
		int id = scanner.nextInt();
		System.out.println("请输入密码:");
		String password = scanner.next();
		//判断集合的用户是否存在该用户名与密码
		//遍历集合的元素，查看是否存在该用户信息
		
		boolean isLogin = false; 	//定义变量用于记录是否登陆成功的信息  , 默认是没有登陆成功的
		Iterator it = users.iterator();
		while(it.hasNext()){
			User user = (User) it.next();
			if(user.id==id&&user.password.equals(password)){
				//存在该用户信息，登陆成功...
				isLogin = true;
			}
		}
		
		if(isLogin==true){
			System.out.println("欢迎登陆...");
		}else{
			System.out.println("用户名或者密码错误，登陆失败...");
		}
	}
	
	

	public static void reg() {
		//110  , 220
		User user = null;
		while(true){
				System.out.println("请输入账号:");
				int id = scanner.nextInt();  //220 
				user = new User(id,null);
				if(users.contains(user)){  // contains底层依赖了equals方法。
					//如果存在
					System.out.println("该账号已经存在，请重新输入账号");
				}else{
					//不存在
					break;
				}
		}
		
		System.out.println("请输入密码：");
		String password = scanner.next();
		user.setPassword(password);
		//把user对象保存到集合中
		users.add(user);
		System.out.println("注册成功!");
		System.out.println("当前注册的人员："+users);
	}

}

~~~



### List接口特有的方法

~~~java
package cn.itcast.list;

import java.util.ArrayList;
import java.util.List;


/*
List接口中特有方法：
	添加
		add(int index, E element) 
		addAll(int index, Collection<? extends E> c) 
	获取：
		get(int index) 
		indexOf(Object o) 
		lastIndexOf(Object o) 
		subList(int fromIndex, int toIndex) 
		
	修改：
		set(int index, E element) 
	
List接口中特有的方法具备的特点： 操作的方法都存在索引值。	

只有List接口下面的集合类才具备索引值。其他接口下面的集合类都没有索引值。
	
	
		
ctrl + shift + /  添加多行注释

ctrl  + shift + \  取消多行注释.
*/
public class Demo2 {
	
	public static void main(String[] args) {
		List list=  new ArrayList();
		list.add("狗娃");
		list.add("狗剩");
		list.add("铁蛋");  //把元素添加到集合的末尾处。
		list.add("狗娃");
		
		/*	
	       //添加方法
		list.add(1, "赵本山"); // 把元素添加到集合中的指定索引值位置上。
		List list2 = new ArrayList();
		list2.add("本山");
		list2.add("小沈阳");
		list.addAll(2,list2); //把list2的元素添加到list集合指定索引值的位置上。
		 */
		
		/*
//		获取的方法 
		System.out.println("get方法获取元素："+list.get(1)); //根据索引值获取集合中的元素
		使用get方法遍历集合的元素：
		for (int i = 0; i < list.size() ; i++) {
			System.out.print(list.get(i)+",");
		}
		
		System.out.println("找出指定元素第一次出现在集合中 的索引值："+ list.indexOf("本山"));
		System.out.println("找指定的元素最后一次出现在集合中的索引值："+list.lastIndexOf("狗娃"));
		List subList = list.subList(1, 3); //指定开始与结束的索引值截取集合中的元素。
		System.out.println("子集合的元素是："+ subList);
	 */	
		list.set(3, "赵本山"); //使用指定的元素替换指定索引值位置的元素。
		
		
		System.out.println("集合的元素："+list);
		
		
		
		
	}

}

~~~



###### 迭代

~~~java
package cn.itcast.list;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

/*
迭代
	listIterator() 
	

ListIterator特有的方法：
	
	添加：
		hasPrevious()  判断是否存在上一个元素。
		previous()    当前指针先向上移动一个单位，然后再取出当前指针指向的元素。
		
		next();  先取出当前指针指向的元素，然后指针向下移动一个单位。
		
---------------------------	
	
		add(E e)   把当前有元素插入到当前指针指向的位置上。
		set(E e)   替换迭代器最后一次返回的元素。
		
	
*/
public class Demo3 {
	
	public static void main(String[] args) {
		List list = new ArrayList();
		list.add("狗娃");
		list.add("狗剩");
		list.add("铁蛋");
		list.add("美美");
		
		ListIterator it = list.listIterator(); //返回的是一个List接口中特有的迭代器
		/*System.out.println("有上一个元素吗？"+ it.hasPrevious());
		System.out.println("获取上一个元素："+it.previous());
		it.next();
		System.out.println("获取上一个元素："+ it.previous());
		
		
		while(it.hasNext()){
			it.next();
		}
		
		while(it.hasPrevious()){
			System.out.println("元素："+ it.previous());
		}
		
		
		it.next();
		it.next();
		it.add("张三");
		*/
		it.next();
		it.next();
		it.set("张三");
		
		
		System.out.println("集合的元素："+ list);
		
		
	}

}

~~~

###### 使用三种方式遍历集合的元素
~~~java

package cn.itcast.list;

import java.util.List;
import java.util.ArrayList;
import java.util.ListIterator;

/*
练习： 使用三种方式遍历集合的元素. 	
第一种： 使用get方法遍历。
第二种： 使用迭代器正序遍历。
第三种： 使用迭代器逆序遍历。

*/
public class Demo4 {
	
	public static void main(String[] args) {
		List list = new ArrayList();
		list.add("张三");
		list.add("李四");
		list.add("王五");
		
		System.out.println("======get方法遍历=======");
		for(int i = 0 ; i<list.size() ; i++){
			System.out.print(list.get(i)+",");
		}
		
		System.out.println("\r\n======使用迭代器正序遍历==========");
		ListIterator it = list.listIterator();	//获取到迭代器
		while(it.hasNext()){
			System.out.print(it.next()+",");
		}
		
		System.out.println("\r\n======使用迭代器逆序遍历==========");
		while(it.hasPrevious()){
			System.out.print(it.previous()+",");
		}
		
		
	}

}


~~~



###### 迭代器注意事项

~~~java
package cn.itcast.list;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

/*
 
 迭代器在变量元素的时候要注意事项： 在迭代器迭代元素 的过程中，不允许使用集合对象改变集合中的元素 个数，如果需要添加或者删除只能使用迭代器的方法进行操作。
 
 如果使用过了集合对象改变集合中元素个数那么就会出现ConcurrentModificationException异常。	
 
 迭代元素 的过程中: 迭代器创建到使用结束的时间。
 
 */

public class Demo5 {
	
	public static void main(String[] args) {
		List list = new ArrayList();
		list.add("张三");
		list.add("李四");
		list.add("王五");
		
		ListIterator it = list.listIterator();	//获取到迭代器
	/*	while(it.hasNext()){
			System.out.print(it.next()+",");
			//it.add("aa"); // 把元素添加到当前指针指向位置
			list.add("aa");  // add方法是把元素添加到集合的末尾处的。
//			list.remove("张三");
		}*/
		
		list.add("aa");
		it.next();
		
		
		
		System.out.println("\r\n集合的元素："+ list);
	}

}

~~~














