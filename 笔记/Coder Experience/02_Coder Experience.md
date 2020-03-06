### ArrayList原理

~~~java
package cn.itcast.list;

import java.util.ArrayList;

/*

集合的体系：
----------| Collection  单列集合的根接口
----------------| List 如果实现了List接口的集合类，具备的特点： 有序，可重复。
--------------------| ArrayList   ArrayList 底层是维护了一个Object数组实现 的， 特点: 查询速度快，增删慢。
什么时候使用ArrayList: 如果目前的数据是查询比较多，增删比较少的时候，那么就使用ArrayList存储这批数据。  比如 ：高校的 图书馆


--------------------| LinkedList
--------------------| Vector(了解即可)

----------------| Set  如果实现了Set接口的集合类， 具备的特点： 无序，不可重复。

ArrayList 特有的方法：

	ensureCapacity(int minCapaci上ty)
	trimToSize()  
	

笔试题目： 使用ArrayList无参的构造函数创建一个 对象时， 默认的容量是多少? 如果长度不够使用时又自增增长多少？
	ArrayList底层是维护了一个Object数组实现 的，使用无参构造函数时，Object数组默认的容量是10，当长度不够时，自动增长0.5倍。
	




 */
public class Demo6 {
	
	public static void main(String[] args) {
		ArrayList list = new ArrayList();
		
		
	}
	
}

~~~



###### ArrayList练习

~~~java
package cn.itcast.list;

import java.util.ArrayList;
import java.util.Iterator;

/*

*/
class Book{
	
	int id;
	
	String name;// 名字

	public Book(int id, String name) {
		this.id = id;
		this.name = name;
	}
	
	@Override
	public String toString() {
		return "{ 书号："+ this.id+" 书名："+ this.name+" }";
	
	}
	
	@Override
	public boolean equals(Object obj) {
		Book book =(Book)obj;
		return this.id==book.id;
	}
	
	
}

// 需求： 编写一个函数清除集合中重复元素。 如果书号是一样就视为重复元素。  要求： 遍历集合元素的时候必须使用迭代器。  get 迭代器

public class Demo7 {
	
	public static void main(String[] args) {
		ArrayList list=  new ArrayList();
		list.add(new Book(110,"java编程思想"));
		list.add(new Book(220,"java核心技术"));
		list.add(new Book(330,"深入javaweb"));
		list.add(new Book(110,"javas神书"));
		
		ArrayList list2 = clearRepeat(list);
		System.out.println("新集合的元素是："+ list2);
	}
	
	
	public static ArrayList  clearRepeat(ArrayList list){
		//创建一个新的集合
		ArrayList newList = new ArrayList();
		//获取迭代器
		Iterator it = list.iterator();
		while(it.hasNext()){
			Book book = (Book) it.next();  //从旧集合中获取的元素
			if(!newList.contains(book)){
				//如果新集合没有包含该书籍，那么就存储到新集合中
				newList.add(book);
			}
		}
		return newList;
		
	}
	
	
}

~~~



### LinkedList特有的方法

~~~java
package cn.itcast.list;

import java.util.Iterator;
import java.util.LinkedList;
/*

集合的体系：
----------| Collection  单列集合的根接口
----------------| List 如果实现了List接口的集合类，具备的特点： 有序，可重复。
--------------------| ArrayList   ArrayList 底层是维护了一个Object数组实现 的， 特点: 查询速度快，增删慢。
什么时候使用ArrayList: 如果目前的数据是查询比较多，增删比较少的时候，那么就使用ArrayList存储这批数据。  比如 ：高校的 图书馆

--------------------| LinkedList   LinkedList底层是使用了链表数据结构实现的，  特点： 查询速度慢，增删快。

--------------------| Vector(了解即可)

----------------| Set  如果实现了Set接口的集合类， 具备的特点： 无序，不可重复。

Linkedlist特有的方法：
	1：方法介绍
	            addFirst(E e) 
				addLast(E e) 
		
				getFirst() 
				getLast() 
				
				removeFirst() 
				removeLast() 
	
	2：数据结构
				1：栈 （1.6）  : 主要是用于实现堆栈数据结构的存储方式。
					先进后出
					push() 
					pop()
				2：队列（双端队列1.5）： 主要是为了让你们可以使用LinkedList模拟队列数据结构的存储方式。
					先进先出
					offer()
					poll()
					
	3：返回逆序的迭代器对象      
			descendingIterator()   返回逆序的迭代器对象
*/

public class Demo8 {
	
	public static void main(String[] args) {
		LinkedList list= new LinkedList();
		list.add("张三");
		list.add("李四");
		list.add("王五");
/*
		list.addFirst("狗娃"); //把元素添加到集合的首位置上。
		list.addLast("狗剩");  //把元素添加到集合的末尾处。
		

		System.out.println("获取集合中首位置的元素:"+list.getFirst());
		System.out.println("获取集合中末尾的元素："+ list.getLast());
	
		System.out.println("删除集合中的首位置元素并返回："+ list.removeFirst());
		System.out.println("删除集合中的末尾素并返回："+ list.removeLast());
			
		
		list.push("狗娃");   //将该元素插入此集合的开头处。 
		System.out.println("删除集合的首元素："+list.pop()); // 移除并返回集合中的第一个元素 

		
		list.offer("狗剩");
		System.out.println("删除集合的首元素: "+list.poll());
	
		System.out.println("集合中的元素："+ list);
		*/	
		Iterator  it = list.descendingIterator();
		while(it.hasNext()){
			System.out.println(it.next());
		}
		
		
	}

}

~~~



###### 栈、队列

~~~java
package cn.itcast.list;

import java.util.LinkedList;

/*
1：栈 （1.6）  : 主要是用于实现堆栈数据结构的存储方式。
	先进后出
	push() 
	pop()
2：队列（双端队列1.5）： 主要是为了让你们可以使用LinkedList模拟队列数据结构的存储方式。
	先进先出
	offer()
	poll()
	
机试题目： 使用LinkedList实现堆栈数据结构的存储方式与队列的数据结构存储方式。	
*/

// 使用LinkedList模拟堆栈的数据结构存储方式
class StackList{
	
	LinkedList list;
	
	public StackList(){
		list = new LinkedList();
	}
	
	//进栈
	public void add(Object o){
		list.push(o);
	}
	
	//弹栈 : 把元素删除并返回。
	public Object pop(){
		return list.pop();
	} 
	
	//获取元素个数
	public int size(){
		return list.size();
	}
	
}

//使用LinkedList模拟队列的存储方式
class TeamList{
	
	LinkedList list;
	
	public TeamList(){
		list = new LinkedList();
	}
	
	public void add(Object o){
		list.offer(o);
	}
	
	public Object remove(){
		return list.poll();
	}
	
	//获取元素个数
	public int size(){
		return list.size();
	}
	
}



public class Demo9 {
	
	public static void main(String[] args) {
		TeamList list=  new TeamList();
		list.add("李嘉诚");
		list.add("马云");
		list.add("王健林");
		
		int size = list.size();
		for(int i = 0 ; i<size ; i++){
			System.out.println(list.remove());
		}
		
		
	}
}

~~~



###### 案例：生成扑克牌

~~~java
package cn.itcast.list;

import java.util.LinkedList;
import java.util.Random;

/*
需求： 使用LinkedList存储一副扑克牌，然后实现洗牌功能。



*/
//扑克类
class Poker{
	
	String  color; //花色
	
	String num;	//点数

	public Poker(String color, String num) {
		super();
		this.color = color;
		this.num = num;
	}

	
	@Override
	public String toString() {
		return "{"+color+num+"}";
	}
}

public class Demo2 {
	
	public static void main(String[] args) {
		LinkedList pokers = createPoker();
		shufflePoker(pokers);
		showPoker(pokers);
	}
	
	
	//洗牌的功能
	public static void shufflePoker(LinkedList pokers){
		//创建随机数对象
		Random random = new Random();
		for(int i = 0 ; i <100; i++){ 
			//随机产生两个索引值
			int index1 = random.nextInt(pokers.size());
			int index2 = random.nextInt(pokers.size());
			//根据索引值取出两张牌，然后交换两张牌的顺序
			Poker poker1 = (Poker) pokers.get(index1);
			Poker poker2 = (Poker) pokers.get(index2);
			pokers.set(index1, poker2);
			pokers.set(index2, poker1);
		}
		
	}
	
	
	
	//显示扑克牌
	public static void showPoker(LinkedList pokers){
		for(int i = 0 ; i<pokers.size() ; i++){
			System.out.print(pokers.get(i));
			//换行
			if(i%10==9){
				System.out.println();
			}
		}
	
	}
	
	
	
	
	//生成扑克牌的方法
	public static LinkedList createPoker(){
		//该集合用于存储扑克对象。
		LinkedList list = new LinkedList();		
		//定义数组存储所有的花色与点数
		String[] colors = {"黑桃","红桃","梅花","方块"};
		String[] nums = {"A","2","3","4","5","6","7","8","9","10","J","Q","K"};
		for(int i = 0 ; i < nums.length ; i++){
			for(int j = 0 ; j<colors.length ; j++){
				list.add(new Poker(colors[j], nums[i]));
			}
		}
		return list;
	}
	
	
}

~~~



###### 案例：年龄排序

~~~java
package cn.itcast.list;

import java.util.LinkedList;


class Person{
	
	String name;
	
	int age;

	public Person(String name, int age) {
		super();
		this.name = name;
		this.age = age;
	}
	
	
	@Override 
	public String toString() {
		return "{ 名字："+ this.name+" 年龄："+ this.age+"}";
	}
	
}


public class Demo3 {

	public static void main(String[] args) {
		LinkedList list = new LinkedList();
		list.add(new Person("狗娃", 7));
		list.add(new Person("狗剩", 17));
		list.add(new Person("铁蛋", 3));
		list.add(new Person("美美", 30));
		
		//编写一个函数根据人的年龄及逆行排序存储。
		for(int i= 0 ; i<list.size() -1 ; i++){
			for(int j = i+1 ; j<list.size() ; j++){
				//符合条件交换位置
				Person p1 = (Person) list.get(i);
				Person p2 = (Person) list.get(j);
				if(p1.age>p2.age){
					//交换位置
					list.set(i, p2);
					list.set(j, p1);
					
				}
			}
		}
		System.out.println(list);
		
		
		
	}
	
	
}

~~~



### Vector

~~~java
package cn.itcast.list;

import java.util.Enumeration;
import java.util.Vector;

/*
集合 的体系：
------------| Collection 单例集合的根接口
----------------| List  如果是实现了List接口的集合类，具备的特点： 有序，可重复。 
-------------------| ArrayList  ArrayList 底层是维护了一个Object数组实现的。 特点： 查询速度快，增删慢。
-------------------| LinkedList LinkedList 底层是使用了链表数据结构实现的， 特点： 查询速度慢，增删快。
-------------------| Vector(了解即可)  底层也是维护了一个Object的数组实现的，实现与ArrayList是一样的，但是Vector是线程安全的，操作效率低。

----------------| Set  如果是实现了Set接口的集合类，具备的特点： 无序，不可重复。

笔试题: 说出ArrayLsit与Vector的区别?
	相同点： ArrayList与Vector底层都是使用了Object数组实现的。
	
	不同点： 
		1. ArrayList是线程不同步的，操作效率高。 
		   Vector是线程同步的，操作效率低。
		2. ArrayList是JDK1.2出现，Vector是jdk1.0的时候出现的。
*/
public class Demo1 {

	public static void main(String[] args) {
		Vector v  =  new Vector();
		//添加元素
		v.addElement("张三");
		v.addElement("李四");
		v.addElement("王五");
		//迭代该集合
		Enumeration e = v.elements(); //获取迭代器
		while(e.hasMoreElements()){
			System.out.println(e.nextElement());
		}
		
		
		
		
	}
}

~~~



### HashSet

~~~java
package cn.itcastset;

import java.util.HashSet;

import javax.print.attribute.HashAttributeSet;
/*
集合 的体系：
------------| Collection 单例集合的根接口
----------------| List  如果是实现了List接口的集合类，具备的特点： 有序，可重复。 
-------------------| ArrayList  ArrayList 底层是维护了一个Object数组实现的。 特点： 查询速度快，增删慢。
-------------------| LinkedList LinkedList 底层是使用了链表数据结构实现的， 特点： 查询速度慢，增删快。
-------------------| Vector(了解即可)  底层也是维护了一个Object的数组实现的，实现与ArrayList是一样的，但是Vector是线程安全的，操作效率低。

----------------| Set  如果是实现了Set接口的集合类，具备的特点： 无序，不可重复。
-------------------| HashSet  底层是使用了哈希表来支持的，特点： 存取速度快. 

hashSet的实现原理：
	往Haset添加元素的时候，HashSet会先调用元素的hashCode方法得到元素的哈希值 ，
	然后通过元素 的哈希值经过移位等运算，就可以算出该元素在哈希表中 的存储位置。
	
	情况1： 如果算出元素存储的位置目前没有任何元素存储，那么该元素可以直接存储到该位置上。

	情况2： 如果算出该元素的存储位置目前已经存在有其他的元素了，那么会调用该元素的equals方法与该位置的元素再比较一次
	，如果equals返回的是true，那么该元素与这个位置上的元素就视为重复元素，不允许添加，如果equals方法返回的是false，那么该元素运行 添加。
	
	
-------------------| TreeSet  
*/
class Person{
	
	int id;
	
	String name;

	public Person(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
	@Override
	public String toString() {
		return "{ 编号:"+ this.id+" 姓名："+ this.name+"}";
	}
	
	@Override
	public int hashCode() {
		System.out.println("=======hashCode=====");
		return this.id;
	}
	
	
	@Override
	public boolean equals(Object obj) {
		System.out.println("======equals======");
		Person p = (Person)obj;
		return this.id==p.id;
	}
	
}



public class Demo2 {
	
	public static void main(String[] args) {
	/*
		HashSet set = new HashSet();
		set.add("狗娃");
		set.add("狗剩");
		set.add("铁蛋");
		System.out.println("集合的元素："+ set);
	*/	
		
		HashSet set = new HashSet();
		set.add(new Person(110,"狗娃"));
		set.add(new Person(220,"狗剩"));
		set.add(new Person(330,"铁蛋"));
		//在现实生活中只要编号一致就为同一个人.
		System.out.println("添加成功吗？"+set.add(new Person(110,"狗娃")));
		System.out.println("集合的元素："+set);
		
	}
	
}

~~~



###### 案例

~~~java
package cn.itcastset;

import java.util.HashSet;
import java.util.Scanner;

/*
 需求： 接受键盘录入用户名与密码，如果用户名与密码已经存在集合中，那么就是视为重复元素，不允许添加到HashSet中。
 
 */
class User{
	
	String userName;
	
	String password;

	public User(String userName, String password) {
		super();
		this.userName = userName;
		this.password = password;
	}
	
	@Override
	public String toString() {
		return "{ 用户名："+this.userName+" 密码："+ this.password+"}";
	}

	@Override
	public boolean equals(Object obj) {
		User user = (User)obj;
		return this.userName.equals(user.userName)&&this.password.equals(user.password);
	}
	
	@Override
	public int hashCode() { //  abc 123   ， 123 abc
		return userName.hashCode()+password.hashCode();
	}
	
}

public class Demo3 {
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		HashSet set = new HashSet();
		
		
		while(true){
			System.out.println("请输入用户名:");
			String userName = scanner.next();
			System.out.println("请输入密码：");
			String password = scanner.next();
			//创建一个对象
			User user = new User(userName, password);
			if(set.add(user)){
				System.out.println("注册成功...");
				System.out.println("当前的用户有："+ set);
			}else{
				System.out.println("注册失败...");
			}
		}
		
		
		
		
	}

}

~~~



### TreeSet

~~~java
package cn.itcastset;

import java.util.TreeSet;

/*
集合 的体系：
------------| Collection 单例集合的根接口
----------------| List  如果是实现了List接口的集合类，具备的特点： 有序，可重复。 
-------------------| ArrayList  ArrayList 底层是维护了一个Object数组实现的。 特点： 查询速度快，增删慢。
-------------------| LinkedList LinkedList 底层是使用了链表数据结构实现的， 特点： 查询速度慢，增删快。
-------------------| Vector(了解即可)  底层也是维护了一个Object的数组实现的，实现与ArrayList是一样的，但是Vector是线程安全的，操作效率低。

----------------| Set  如果是实现了Set接口的集合类，具备的特点： 无序，不可重复。
-------------------| HashSet  底层是使用了哈希表来支持的，特点： 存取速度快. 

hashSet的实现原理：
	往Haset添加元素的时候，HashSet会先调用元素的hashCode方法得到元素的哈希值 ，
	然后通过元素 的哈希值经过移位等运算，就可以算出该元素在哈希表中 的存储位置。
	
	情况1： 如果算出元素存储的位置目前没有任何元素存储，那么该元素可以直接存储到该位置上。

	情况2： 如果算出该元素的存储位置目前已经存在有其他的元素了，那么会调用该元素的equals方法与该位置的元素再比较一次
	，如果equals返回的是true，那么该元素与这个位置上的元素就视为重复元素，不允许添加，如果equals方法返回的是false，那么该元素运行 添加。
-------------------| TreeSet   如果元素具备自然顺序 的特性，那么就按照元素自然顺序的特性进行排序存储。
*/
public class Demo5 {
	
	public static void main(String[] args) {
		TreeSet tree = new TreeSet();
	/*	tree.add(1);
		tree.add(10);
		tree.add(7);
		tree.add(19);
		tree.add(9);*/
		
		tree.add('b');
		tree.add('f');
		tree.add('a');
		tree.add('c');

		
		System.out.println(tree);
		
		
		
	}
	
}

~~~



### TreeSet添加自定义元素

~~~java
package cn.itcastset;

import java.util.Comparator;
import java.util.TreeSet;

/*
 treeSet添加自定义元素:
 
 treeSet要注意的事项：
 	1. 往TreeSet添加元素的时候，如果元素本身具备了自然顺序的特性，那么就按照元素自然顺序的特性进行排序存储。
 	2. 往TreeSet添加元素的时候，如果元素本身不具备自然顺序的特性，那么该元素所属的类必须要实现Comparable接口，把元素
 	的比较规则定义在compareTo(T o)方法上。 
 	
 	3. 如果比较元素的时候，compareTo方法返回 的是0，那么该元素就被视为重复元素，不允许添加.(注意：TreeSet与HashCode、equals方法是没有任何关系。)
 	
 	4. 往TreeSet添加元素的时候, 如果元素本身没有具备自然顺序 的特性，而元素所属的类也没有实现Comparable接口，那么必须要在创建TreeSet的时候传入一个
 	比较器。
 	
 	5.  往TreeSet添加元素的时候，如果元素本身不具备自然顺序的特性，而元素所属的类已经实现了Comparable接口， 在创建TreeSet对象的时候也传入了比较器
 	那么是以比较器的比较规则优先使用。
 	
 	
 	
 	
 	如何自定义定义比较器： 自定义一个类实现Comparator接口即可，把元素与元素之间的比较规则定义在compare方法内即可。
 		
 		自定义比较器的格式 ：
 			
 			class  类名  implements Comparator{
 			
 			}
 	
 	推荐使用：使用比较器(Comparator)。 
 	
 
 */
class  Emp implements Comparable<Emp>{
	
	int id;
	
	String name;
	
	int salary;

	public Emp(int id, String name, int salary) {
		super();
		this.id = id;
		this.name = name;
		this.salary = salary;
	}
	
	@Override
	public String toString() {
		return "{ 编号："+  this.id+" 姓名："+ this.name+" 薪水："+ this.salary+"}";
	}

	//@Override //元素与元素之间的比较规则。
	// 负整数、零或正整数，根据此对象是小于、等于还是大于指定对象。 
	public int compareTo(Emp o) {
//		System.out.println(this.name+"compare"+ e.name);
		return this.salary- o.salary;
	}	
}


//自定义一个比较器
class MyComparator implements Comparator<Emp>{

	@Override
	public int compare(Emp o1, Emp o2) {
		return o1.id-o2.id;
	}
	
	//根据第一个参数小于、等于或大于第二个参数分别返回负整数、零或正整数。 
	/*@Override
	public int compare(Object o1, Object o2) {
		Emp e1 = (Emp) o1;
		Emp e2 = (Emp) o2;
		return e1.id - e2.id;
	}*/
	
	
}




public class Demo6 {
	
	public static void main(String[] args) {
		//创建一个比较器对象
		MyComparator comparator = new MyComparator();
		//创建TreeSet的时候传入比较器
		TreeSet tree = new TreeSet(comparator);
		
		tree.add(new Emp(110, "老陆", 100));
		tree.add(new Emp(113, "老钟", 200));
		tree.add(new Emp(220, "老汤", 300));
		tree.add(new Emp(120, "老蔡", 500));
		System.out.println("集合的元素："+tree);
		
	}
}

~~~



### TreeSet对字符串进行排序

~~~java
package cn.itcastset;

import java.util.TreeSet;
/*
TreeSet是可以对字符串进行排序 的， 因为字符串已经实现了Comparable接口。

字符串的比较规则：
	
	情况一： 对应位置有不同的字符出现， 就比较的就是对应位置不同的字符。

	情况 二：对应位置上 的字符都一样，比较的就是字符串的长度。
	


 */


public class Demo7 {
	
	public static void main(String[] args) {
		/*TreeSet tree = new TreeSet();
		tree.add("abcccccccccccccccccc");
		tree.add("abc");
		System.out.println(tree);*/
		
		System.out.println("abw".compareTo("abcccccccccccc"));
		
	}

}

~~~



### TreeSet对字符串中数值排序

~~~java
package cn.itcastset;

import java.util.Iterator;
import java.util.TreeSet;
/*
需求：将字符串中的数值进行排序。
		例如String str="8 10 15 5 2 7"; ---->   "2 5 7 8 10 15"
*/

public class Demo8 {
	
	public static void main(String[] args) {
		String str="8 10 15 5 2 7";
		String[] datas = str.split(" ");
		
		TreeSet tree = new TreeSet();
		for(int i = 0 ; i<datas.length ; i++){
			tree.add(Integer.parseInt( datas[i])); // 字符串转int类型数据是需要使用Integer.parseInt()
		}
		
		//遍历treeSet的元素拼接成对应的字符串
		Iterator it = tree.iterator();
		while(it.hasNext()){
			System.out.print(it.next()+" ");
		}
		
	}

}

~~~



### 泛型

~~~java

import java.util.Iterator;
import java.util.TreeSet;
/*
需求：将字符串中的数值进行排序。
		例如String str="8 10 15 5 2 7"; ---->   "2 5 7 8 10 15"
*/

public class Demo8 {
	
	public static void main(String[] args) {
		String str="8 10 15 5 2 7";
		String[] datas = str.split(" ");
		
		TreeSet tree = new TreeSet();
		for(int i = 0 ; i<datas.length ; i++){
			tree.add(Integer.parseInt( datas[i])); // 字符串转int类型数据是需要使用Integer.parseInt()
		}
		
		//遍历treeSet的元素拼接成对应的字符串
		Iterator it = tree.iterator();
		while(it.hasNext()){
			System.out.print(it.next()+" ");
		}
		
	}

}

~~~



###### 方法自定义泛型

~~~java
package cn.itcast.genrictiry;
/*
 需求： 定义一个方法可以接收任意类型的参数，而且返回值类型必须 要与实参的类型一致。
 
 自定义泛型：  自定义泛型就是一个数据类型的占位符或者是一个数据类型的变量。
 
 方法上自定义泛型：
 	
 	修饰符  	<声明自定义的泛型>返回值类型    函数名(使用自定义泛型 ...){
 	
 	}

 
在泛型中不能使用基本数据类型，如果需要使用基本数据类型，那么就使用基本数据类型对应的包装类型。

 byte----> Byte
 short---> Short 
 int----> Integer
 long----> Long 
 
 double ----> Double 
 float -----> Float
 
 boolean-----Boolean
 
 char-------》 Character 
 
 
 方法泛型注意的事项：
 	1. 在方法上自定义泛型，这个自定义泛型的具体数据类型是在调用该 方法的时候传入实参时确定具体的数据类型的。
 	2. 自定义泛型只要符合标识符 的命名规则即可, 但是自定义泛型我们一般都习惯使用一个大写字母表示。  T Type  E Element
 	
 */


public class Demo2 {

	public static void main(String[] args) {
		String str = getData("abc");
		Integer i = getData(123);
	}
	
	
	public static <abc>abc getData(abc o){
		
		return o;
	}
}

~~~



###### 类自定义泛型

~~~java
package cn.itcast.genrictiry;

import java.util.ArrayList;

/*
 需求： 编写一个数组 的工具类
 
 泛型类：
 
泛型类的定义格式：
	
	class 类名<声明自定义泛型>{
	
	}
 
泛型类要注意的事项：
 	1. 在类上自定义泛型的具体数据类型是在使用该类的时候创建对象时候确定的。
 	2. 如果一个类在类上已经声明了自定义泛型，如果使用该类创建对象 的时候没有指定 泛型的具体数据类型，那么默认为Object类型
 	3.在类上自定义泛型不能作用于静态的方法，如果静态的方法需要使用自定义泛型，那么需要在方法上自己声明使用。
 
 
 
 */

class MyArrays<T>{
	

	//元素翻转
	public void reverse(T[] arr){
		for(int startIndex = 0, endIndex = arr.length-1 ; startIndex<endIndex ; startIndex++,endIndex--){
			T temp  = arr[startIndex];
			arr[startIndex] = arr[endIndex];
			arr[endIndex] = temp;
		}
		
	}
	
	//
	public String toString(T[] arr){
		StringBuilder sb = new StringBuilder();
		for(int i = 0 ; i < arr.length ; i++){
			if(i==0){
				sb.append("["+arr[i]+",");
			}else if(i==arr.length-1){
				sb.append(arr[i]+"]");
			}else{
				sb.append(arr[i]+",");
			}
		}
		return sb.toString();
	}
	
	
	public static <T>void print(T[] t){
		
	
		
	}
	
	
}



public class Demo3 {
	
	public static void main(String[] args) {
		Integer[] arr = {10,12,14,19};
		
		MyArrays<Integer> tool = new MyArrays<Integer>();
		tool.reverse(arr);
		System.out.println("数组的元素："+tool.toString(arr));
		
		MyArrays<String> tool2 = new MyArrays<String>();
		String[] arr2 = {"aaa","bbb","ccc"};
		tool2.reverse(arr2);
				
		
		ArrayList<String> list = new ArrayList<String>();
		
	}
	
}

~~~



###### 泛型接口

~~~java
package cn.itcast.genrictiry;
/*
 泛型接口
 
泛型接口的定义格式: 

	interface 接口名<声明自定义泛型>{
	
	}

泛型接口要注意的事项：
	1. 接口上自定义的泛型的具体数据类型是在实现一个接口的时候指定 的。
	2. 在接口上自定义的泛型如果在实现接口的时候没有指定具体的数据类型，那么默认为Object类型。
	
需求： 目前我实现一个接口的时候，我还不明确我目前要操作的数据类型，我要等待创建接口实现类 对象的时候我才能指定泛型的具体数据类型。
	
	如果要延长接口自定义泛型 的具体数据类型，那么格式如下：
	格式：  
		public class Demo4<T> implements Dao<T>{
		
		}
	
 */

interface Dao<T>{
	
	public void add(T t);	
}

public class Demo4<T> implements Dao<T> {

	public static void main(String[] args) {
		Demo4<String> d = new Demo4<String>();
	}

	public void add(T t){
		
	}


}

~~~



###### 泛型的上下限

~~~java
package cn.itcast.genrictiry;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;

/*
 泛型的上下限：
 
需求1： 定义一个函数可以接收接收任意类型的集合对象， 要求接收的集合对象只能存储Integer或者是Integer的父类类型数据。

需求2： 定义一个函数可以接收接收任意类型的集合对象， 要求接收的集合对象只能存储Number或者是Number的子类类型数据。

泛型中通配符： ？ 
	
	? super Integer : 只能存储Integer或者是Integer父类元素。  泛型 的下限
 	
 	? extends Number ： 只能存储Number或者是Number类型的子类数据。 泛型上限
 	
 */
public class Demo5 {

	public static void main(String[] args) {
		ArrayList<Integer> list1 = new ArrayList<Integer>();
		ArrayList<Number> list2 = new ArrayList<Number>();
		
		HashSet<String> set = new HashSet<String>();
		//getData(set);
		
	}
	
	//泛型的上限
	public static void getData(Collection<? extends Number> c){
		
		
	}
	
	//泛型的下限
	public static void print(Collection<? super Integer> c){
		
	}
	
}

~~~



### Map接口的方法

~~~java
package cn.itcast.map;

import java.util.HashMap;
import java.util.Map;

/*
在现实生活中有些数据是以映射关系存在的，也就是成对存在的，比如： 
	
	民政局 ：
		键                    值
		
		老公                老婆
		身份证            人
		一把要锁       锁
 双列集合：
-------------| Map  如果是实现了Map接口的集合类，具备的特点： 存储的数据都是以键值对的形式存在的，键不可重复，值可以重复。
----------------| HashMap 
----------------| TreeMap
----------------| Hashtable 
 
 Map接口的方法：
 	
 	添加：
 		put(K key, V value) 
 		putAll(Map<? extends K,? extends V> m) 
 	
 	删除
 		remove(Object key) 
 		clear() 

 	获取：
 		get(Object key) 
 		size() 
 	
 	判断：
 		containsKey(Object key) 
 		containsValue(Object value) 
 		isEmpty() 

 
 */
public class Demo2 {
	
	public static void main(String[] args) {
		Map<String,String> map = new HashMap<String, String>();
		//添加方法
		map.put("汪峰", "章子怡");
		map.put("文章", "马伊琍");
		map.put("谢霆锋","张柏芝");
		/*
		添加
		System.out.println("返回值："+map.put("谢霆锋","黄菲"));  // 如果之前没有存在该键，那么返回的是null，如果之前就已经存在该键了，那么就返回该键之前对应 的值。
		Map<String,String> map2 = new HashMap<String, String>();
		map2.put("杨振宁", "翁帆");
		map2.put("习总", "彭丽媛");
		map.putAll(map2); // 把map2的元素添加到map集合中。
		
		*/
		
		/*
		删除
		System.out.println("删除的数据是:"+map.remove("汪峰")) ;  //根据键删除一条map中的数据，返回的是该键对应 的值。
		map.clear(); //清空集合中的所有数据。
		*/
		
		/* 获取
		System.out.println("根据指定 的键获取对应的值:"+ map.get("文章"));
		System.out.println("获取map集合键值对个数："+map.size());
		
		
		判断
		System.out.println("判断map集合是否包含指定的键："+ map.containsKey("文章"));
		System.out.println("判断map集合中是否包含指定 的值："+ map.containsValue("张柏芝"));
		map.clear();
		System.out.println("判断map集合是否为空元素："+ map.isEmpty());
		*/
		System.out.println("集合的元素："+ map);
		
		
	}

}
~~~



###### HashMap

~~~java
package cn.itcast.map;

import java.util.HashMap;

/*
双列集合：
-------------| Map  如果是实现了Map接口的集合类，具备的特点： 存储的数据都是以键值对的形式存在的，键不可重复，值可以重复。
----------------| HashMap  底层也是基于哈希表实现 的。
HashMap的存储原理：
	往HashMap添加元素的时候，首先会调用键的hashCode方法得到元素 的哈希码值，然后经过运算就可以算出该
	元素在哈希表中的存储位置。 
	情况1： 如果算出的位置目前没有任何元素存储，那么该元素可以直接添加到哈希表中。
	
	情况2：如果算出 的位置目前已经存在其他的元素，那么还会调用该元素的equals方法与这个位置上的元素进行比较
	，如果equals方法返回 的是false，那么该元素允许被存储，如果equals方法返回的是true，那么该元素被视为
	重复元素，不允存储。

----------------| TreeMap
----------------| Hashtable 

*/
class Person{
	
	int id;
	
	
	String name;


	public Person(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
	@Override
	public String toString() {
		return  "[编号："+this.id+" 姓名："+ this.name+"]";
		
	}	
	
	@Override
	public int hashCode() {
		return this.id;
	}
	
	@Override
	public boolean equals(Object obj) {
		Person p = (Person) obj;
		return this.id== p.id;
	}
}


public class Demo5 {
	
	public static void main(String[] args) {
		HashMap<Person, String> map = new HashMap<Person, String>();
		map.put(new Person(110,"狗娃"), "001");
		map.put(new Person(220,"狗剩"), "002");
		map.put(new Person(330,"铁蛋"), "003");
		map.put(new Person(110,"狗娃"), "007");  //如果出现了相同键，那么后添加的数据的值会取代之前 的值。
		System.out.println("集合的元素："+ map);
		
		
		
	}
	
}

~~~



###### HashMap迭代

~~~java
package cn.itcast.map;

import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

/*
	迭代：
		keySet() 
		values() 
		entrySet() 

*/
public class Demo3 {

	public static void main(String[] args) {
		Map<String,String> map = new HashMap<String, String>();
		//添加方法
		map.put("汪峰", "章子怡");
		map.put("文章", "马伊琍");
		map.put("谢霆锋","张柏芝");
		map.put("成龙", "林凤娇");
		/*
		//map集合中遍历方式一： 使用keySet方法进行遍历       缺点： keySet方法只是返回了所有的键，没有值。 
		Set<String> keys = map.keySet();  //keySet() 把Map集合中的所有键都保存到一个Set类型 的集合对象中返回。
		Iterator<String> it = keys.iterator();
		while(it.hasNext()){
			String key = it.next();
			System.out.println("键："+ key+" 值："+ map.get(key));
		}
		
		
		
		//map集合的遍历方式二： 使用values方法进行 遍历。    缺点： values方法只能返回所有 的值，没有键。
		Collection<String>  c = map.values(); //values() 把所有的值存储到一个Collection集合中返回。
		Iterator<String> it = c.iterator();
		while(it.hasNext()){
			System.out.println("值："+ it.next());
		}
		*/
		
		//map集合的遍历方式三： entrySet方法遍历。
		Set<Map.Entry<String,String>>  entrys = map.entrySet(); 
		Iterator<Map.Entry<String,String>> it = entrys.iterator();
		while(it.hasNext()){
			Map.Entry<String,String> entry = it.next();
			System.out.println("键："+ entry.getKey()+" 值："+ entry.getValue());
		}
		
	}
	
	

}

~~~





###### TreeMap

~~~java
package cn.itcast.map;

import java.util.Comparator;
import java.util.TreeMap;

/*
双列集合：
-------------| Map  如果是实现了Map接口的集合类，具备的特点： 存储的数据都是以键值对的形式存在的，键不可重复，值可以重复。
----------------| HashMap  底层也是基于哈希表实现 的。
HashMap的存储原理：
	往HashMap添加元素的时候，首先会调用键的hashCode方法得到元素 的哈希码值，然后经过运算就可以算出该
	元素在哈希表中的存储位置。 
	情况1： 如果算出的位置目前没有任何元素存储，那么该元素可以直接添加到哈希表中。
	
	情况2：如果算出 的位置目前已经存在其他的元素，那么还会调用该元素的equals方法与这个位置上的元素进行比较
	，如果equals方法返回 的是false，那么该元素允许被存储，如果equals方法返回的是true，那么该元素被视为
	重复元素，不允存储。

----------------| TreeMap   TreeMap也是基于红黑树（二叉树）数据结构实现 的， 特点：会对元素的键进行排序存储。

TreeMap 要注意的事项：
	1.  往TreeMap添加元素的时候，如果元素的键具备自然顺序，那么就会按照键的自然顺序特性进行排序存储。
	2.  往TreeMap添加元素的时候，如果元素的键不具备自然顺序特性， 那么键所属的类必须要实现Comparable接口，把键
	的比较规则定义在CompareTo方法上。
	
	3. 往TreeMap添加元素的时候，如果元素的键不具备自然顺序特性，而且键所属的类也没有实现Comparable接口，那么就必须
	在创建TreeMap对象的时候传入比较器。
	

----------------| Hashtable 
*/
class Emp {//implements Comparable<Emp>{
	
	String name;
	
	int salary;

	public Emp(String name, int salary) {
		super();
		this.name = name;
		this.salary = salary;
	}
	
	
	@Override
	public String toString() {
		return "[姓名："+this.name+" 薪水："+ this.salary+"]";
	}

/*
	@Override
	public int compareTo(Emp o) {
		return this.salary - o.salary;
	}*/
	
}


//自定义一个比较器
class MyComparator implements Comparator<Emp>{

	@Override
	public int compare(Emp o1, Emp o2) {
		return o1.salary - o2.salary;
	}
	
}




public class Demo6 {
	
	public static void main(String[] args) {
	/*	TreeMap<Character, Integer> tree = new TreeMap<Character, Integer>();
		tree.put('c',10);
		tree.put('b',2);
		tree.put('a',5);
		tree.put('h',12);
		System.out.println(tree);*/
		
		//创建一个自定义比较器
		MyComparator comparator = new MyComparator();
		
		TreeMap<Emp, String> tree = new TreeMap<Emp, String>(comparator);
		tree.put(new Emp("冰冰", 2000),"001");
		tree.put(new Emp("家宝", 1000),"002");
		tree.put(new Emp("习总", 3000),"003");
		tree.put(new Emp("克强", 5000),"005");
		
		tree.put(new Emp("财厚", 5000),"008");
		System.out.println(tree);
		
		
		
		
	}

}

~~~



### Collections工具类

~~~java
/*
 * 集合的工具类(Collections)
 * 
 * 笔试题：说出Collection与Collections的区别？
 * 		1.Collection是一个单例集合的根接口，Collection是操作集合对象的一个工具类。
 * 
 * Collections的常见方法
 * 		1.对list进行二分查找
 * 			int binarySearch(list,key)
 * 			int binarySearch(list,key,Comparator)	
 * 		2.对list集合进行排序
 * 			sort(list)
 * 			sort(list,comparator)
 * 		//按照指定比较器进行排序
 * 		3.对集合取最大值或者最小值
 * 			max(Collection)
 * 			max(Collection,comparator)
 * 			min(Collection)
 * 			min(Collection,comparator)
 * 		4.对list集合进行反转
 * 			reverse(list)
 * 		5.可以将不同步的集合变成同步集合
 * 			Set synchronizedSet(Set<T> s)
 * 			Map synchronizedMap(Map<K,V> m)
 * 			List synchronizedList(List<T> list)
 * 
 * 		
 * 
 * */

class Demo1{
	public static void main(String[] args){
		
	}
}
~~~



### Eclipse基础快捷键

> 快捷键的配置，常用快捷键：
>
> 内容提示：
>
> Alt + /  
>
> 例如: System.out.println(); 语句 ,syso再按住alt 和/ 就会补全.
>
> ​      忘记某个类如何书写,可以写出一部分,按住alt 和/ 就会有提示.
>
> 快速修复：
>
> Ctrl + 1
>
>    例如,程序有编译期异常,或者需要导包.使用该快捷键.会有相关提示.
>
> 导包：
>
> Ctrl + shift + O
>
>    如果需要导入的包比较多,可以一次性全部导入,也会将多余的包清理掉.
>
> 格式化代码块：
>
> Ctrl + Shift + F
>
> 代码位置调换：
>
> Alt+上下键
>
> 添加/除去单行注释 
>
> Ctrl+/
>
> 添加/除去多行注释 
>
> Ctrl+Shift+/
>
> Ctrl+Shift+\
>
> 重置透视图：window->reset perspective
>
>    当eclipse 的Java视图变的很乱的时候,就可以重置透视图,还原为最初的界面.
>
> 大小写转换
>
> 更改为大写 Ctrl+Shift+X
>
> 更改为小写 Ctrl+Shift+Y
>
> 复制行
>
>  Ctrl+Alt+向下键
>
> 查看源代码
>
> 1、Ctrl+单击 需要查看源码的类
>
> 2、Ctrl+Shift+T
>
> 删除:
>
> 1.Ctrl + D            删除当前行
>
>





### 正则表达式

~~~java
/* null */
~~~



### 正则对象

~~~java
/* null */
~~~



### 静态导入

~~~java
package cn.itcast.jdk15;

import java.util.ArrayList;
import java.util.Collections;
/*
 jdk1.5新特性之-------静态导入
 
 静态导入的作用： 简化书写。
 
静态导入可以作用一个类的所有静态成员。 
 
 静态导入的格式：
 	import static 包名.类名.静态的成员；
 
 
静态导入要注意的事项： 
 	1. 如果静态导入的成员与本类的成员存在同名的情况下，那么默认使用本类的静态成员，如果需要指定使用静态导入的成员，那么需要在静态成员前面加上类名
 
 
 */

import static java.util.Collections.sort;
import static java.util.Collections.binarySearch;
import static java.util.Collections.max;

import static java.lang.System.out;

public class Demo1 {

	public static void main(String[] args) {
		ArrayList<Integer> list = new ArrayList<Integer>();
		list.add(13);
		list.add(9);
		list.add(10);
		list.add(19);
		
		//排序
		Collections.sort(list);
		out.println("集合的元素："+ list);
		out.println("索引值："+ binarySearch(list,13));
		out.println("最大值："+ max(list));
	}
	
	public static void sort(ArrayList<Integer> list){
		System.out.println("本类 的sort方法.....");
	}
	
	
	
}

~~~







### 增强for循环

~~~java
package cn.itcast.jdk15;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

/*
jdk1.5出现的新特性---->增强for循环

增强for循环的作用： 简化迭代器的书写格式。(注意：增强for循环的底层还是使用了迭代器遍历。)

增强for循环的适用范围： 如果是实现了Iterable接口的对象或者是数组对象都可以使用增强for循环。

增强for循环的格式：
 	
 	for(数据类型  变量名  :遍历的目标){
 	
 	}

增强for循环要注意的事项：
	1. 增强for循环底层也是使用了迭代器获取的，只不过获取迭代器由jvm完成，不需要我们获取迭代器而已，所以在使用增强for循环变量元素的过程中不准使用集合
	对象对集合的元素个数进行修改。
	2. 迭代器遍历元素与增强for循环变量元素的区别：使用迭代器遍历集合的元素时可以删除集合的元素，而增强for循环变量集合的元素时，不能调用迭代器的remove方法删除元素。
	3. 普通for循环与增强for循环的区别：普通for循环可以没有变量的目标，而增强for循环一定要有变量的目标。

 

 */
public class Demo2 {
	
	public static void main(String[] args) {
		HashSet<String> set = new HashSet<String>();
		//添加元素
		set.add("狗娃");
		set.add("狗剩");
		set.add("铁蛋");
		
		/*
		//使用迭代器遍历Set的集合.
		Iterator<String> it  = set.iterator();
		while(it.hasNext()){
			String temp = it.next();
			System.out.println("元素："+ temp);
			it.remove();
		}
		
		
		//使用增强for循环解决
		for(String item : set){
			System.out.println("元素："+ item);
			
		}
		
		
		
		
		int[] arr = {12,5,6,1};
		
	 	普通for循环的遍历方式
	 	for(int i =  0 ; i<arr.length ; i++){
			System.out.println("元素："+ arr[i]);
		}
		
		//使用增强for循环实现
		for(int item :arr){
			System.out.println("元素："+ item);
		}
		
		
		
		//需求： 在控制台打印5句hello world.
		for(int i = 0 ; i < 5; i++){
			System.out.println("hello world");
		}
		*/
		
		//注意： Map集合没有实现Iterable接口，所以map集合不能直接使用增强for循环，如果需要使用增强for循环需要借助于Collection
		// 的集合。
		HashMap<String, String> map = new HashMap<String, String>();
		map.put("001","张三");
		map.put("002","李四");
		map.put("003","王五");
		map.put("004","赵六");
		Set<Map.Entry<String, String>> entrys = map.entrySet();
		for(Map.Entry<String, String> entry  :entrys){
			System.out.println("键："+ entry.getKey()+" 值："+ entry.getValue());
		}
		
		
	}

}

~~~



### 自定义类使用增强for循环

~~~java
 package cn.itcast.jdk15;

import java.util.Iterator;

//自定一个类使用增强for循环
class MyList implements Iterable<String>{
	
	Object[] arr = new Object[10];
	
	int index = 0 ;	//当前的指针
	
	public void add(Object o){
		arr[index++] = o;  // 1
	}
	
	public int size(){
		return index;
	}

	@Override
	public Iterator<String> iterator() {
		
		
		return new Iterator<String>() {

			int cursor  = 0;

			@Override
			public boolean hasNext() {
				return cursor<index;
			}

			@Override
			public String next() {
				return (String) arr[cursor++];
			}

			@Override
			public void remove() {
				
			}
		};
	}
}

public class Demo3 {
	
	public static void main(String[] args) {
		MyList list = new MyList();
		list.add("张三");
		list.add("李四");
		list.add("王五");
		
		for(String item :list){
			System.out.println(item);
		}
		
		
		
	}
	
}

~~~



### 可变参数

~~~java
package cn.itcast.jdk15;
/*
jdk1.5新特性之------->可变参数

需求： 定义一个函数做加法功能（函数做几个数据 的加法功能是不确定）。

可变参数的格式：
	
	数据类型... 变量名

可变参数要 注意的细节： 
	1. 如果一个函数 的形参使用上了可变参数之后，那么调用该方法的时候可以传递参数也可以不传递参数。
	2. 可变参数实际上是一个数组对象。
	3. 可变参数必须位于形参中的最后一个参数。
	4. 一个函数最多只能有一个可变 参数，因为可变参数要位于形参中最后一个位置上。
	

 
 */
public class Demo4 {

	public static void main(String[] args) {
		int[] arr = {1,2,45,6,7};
		/*System.out.println(arr);
			add(arr);*/
		add();
	}
	
	
	public static void add(int... arr){ //长度是0
		
		int result = 0;
		for(int item : arr){
			result+=item;
		}
		System.out.println("总和："+ result);
	}
	

	
}

~~~



### 自动装箱与拆箱

~~~java
package cn.itcast.jdk15;

import java.util.ArrayList;

/*
 jdk1.5新特性之-----自动装箱与自动拆箱。
 
 java是面向对象 的语言，任何事物都可以使用类进行描述，sun就使用了
 一些类描述java中八种基本数据类型数据
 
 	基本数据类型            包装类型
 	byte     	  Byte
	short      	  Short
	int           Integer
	long          Long 
	
	float          Float
	double         Double 
	
	boolean        Boolean 
	
	char          Character

基本数据类型数据有了对应 的包装 类型的好处：
	
 */
public class Demo5 {
	
	public static void main(String[] args) {
		String str = "12";
		
		//字符串转换成int类型数据。 可以把字符串转换成对应的数字
		int i = Integer.parseInt(str);
		System.out.println(i+1);
		
		//把数字转换成字符串
		System.out.println("把整数转换成对应 的字符串："+Integer.toString(i));
		
		//把整数转换成对应的进制形式
		System.out.println("10的二进制："+ Integer.toBinaryString(10));
		System.out.println("10的二进制："+ Integer.toBinaryString(10));
		System.out.println("10的十六进制："+ Integer.toHexString(10));
		
		
		//可以把字符串当成对应的进行数据帮你转换
		String data = "10";
		int a = Integer.parseInt(data, 2);
		System.out.println("a="+a);
		
		
		//集合： 集合是可以存储任意对象类型数据的容器。
		ArrayList list = new ArrayList();
		list.add(1);
		list.add(2);
		list.add(3);
		
		//自动装箱： 自动把java的基本数据类型数据转换成对象类型数据。
		int temp = 10;  //基本数据类型
		Integer b =temp; //把a存储的值赋予给b变量。
		
		
		//自动拆箱： 把引用类型的数据转换成基本类型的数据
		Integer c = new Integer(13);
		int d = c; //
		System.out.println(d);
		
		
		
		//引用的数据类型
		Integer e = 128;
		Integer f = 128; 
		System.out.println("同一个对象吗？"+(e==f)); // Integer类内部维护 了缓冲数组，该缓冲数组存储的-128~127 这些数据在一个数组中。如果你获取的数据是落入到这个范围之内的，那么就直接从该缓冲区中获取对应的数据。
		
		
	}
	
}

~~~



### 枚举

~~~java
package cn.itcast.jdk15;
/*
 jdk1.5新特性之-----枚举
 
 问题：某些方法所接收的数据必须是在固定范围之内的， 
 
解决方案： 这时候我们的解决方案就是自定义一个类,然后是私有化构造函数，在自定义类中创建本类的对象对外使用。

jdk1.5对以上问题提出了新的解决方案： 就是使用枚举类解决。

一些方法在运行时，它需要的数据不能是任意的，而必须是一定范围内的值，Java5以后可以直接使用枚举予以解决。
 	比如： 方向 , 性别 、 季节 、 星期......
 
 
 */

/*
//自定义一个性别类
class Gender{
	
	String value;
	
	public static final Gender man = new Gender("男");
	
	public static final Gender woman = new Gender("女");
	

	private Gender(String value) {
		this.value = value;
	}
}
*/
enum Gender{
	man("男"),woman("女");
	
	String value;
	
	private Gender(String value){
		this.value = value;
	}
}


class Person{
	
	private String name;
	
	private	Gender sex;


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Gender getSex() {
		return sex;
	}

	public void setSex(Gender sex) {
		this.sex = sex;
	}		
}

public class Demo6 {
	
	public static void main(String[] args) {
		Person p = new Person();
		p.setName("狗娃");
		p.setSex(Gender.woman);
		System.out.println("名字："+ p.getName()+" 性别："+ p.getSex().value);
		
	}
	
}

~~~



### 枚举类

~~~java
package cn.itcast.jdk15;
/*

枚举：一些方法在运行时，它需要的数据不能是任意的，而必须是一定范围内的值，可以直接使用枚举予以解决。


枚举类的定义格式：
	
	enum 类名{
		//枚举值
	}
	
枚举要注意的细节：
	1. 枚举类也是一个特殊的类。
	2. 枚举值默认的修饰符是public static final。
	3. 枚举值就是是枚举值所属的类的类型， 然后枚举值是指向了本类的对象的。
	4. 枚举类的构造方法默认的修饰符是private的。
	5. 枚举类可以定义自己的成员变量与成员函数。
	6. 枚举类可以自定义构造函数，但是构造函数的修饰符必须是private。
	7. 枚举类可以存在抽象 的方法，但是枚举值必须要实现抽象 的方法。
	8. 枚举值必须要位置枚举类 的第一个语句。
	
	
	
 */

//自定义一个枚举类
enum Sex{
	
	
	man("男"){

		@Override
		public void run() {
			System.out.println("男人在跑...");
		}
		
	},woman("女"){

		@Override
		public void run() {
			System.out.println("女人在跑...");
		}
		
		
	}; //枚举值
	
	String value; //成员 变量
	

	//	public static final Sex man = new Sex();
	
	
	//构造函数
	private Sex(String  value){
		this.value = value;
	}
	
	//成员函数
	public void getValue(){
		System.out.println("value :"+ value);
	}
	
	public abstract void run();
	
}

public class Demo7 {
	
	public static void main(String[] args) {
		Sex sex = Sex.man; //获取到了枚举类的对象
		sex.value = "男";
		sex.getValue();
		sex.run();
		
	}
	
}

~~~



### switch适用的数据类型

~~~java
package cn.itcast.jdk15;
/*
 switch适用的数据类型： byte \ char \short \ int \ String\枚举类型
 
 注意： 
 	case语句后面跟的枚举值，只需要单写枚举值即可，不需要再声明该 枚举值是属于哪个枚举类的。
 	
 
 
 */

//季节枚举类
enum Season{
	spring,summer,autumn,winter;
}

enum Person2{
	student,worker;
}


public eclass Demo8 {
	
	public static void main(String[] args) {
		Season season = Season.summer;
		switch(season){
			case spring:
				System.out.println("春天...");
				break;
			case summer:
				System.out.println("夏天...");
				break;
			case autumn:
				System.out.println("秋天...");
				break;
			case winter:
				System.out.println("冬天...");
				break;		
		}
		
		
		
		
		
	}
}

~~~

