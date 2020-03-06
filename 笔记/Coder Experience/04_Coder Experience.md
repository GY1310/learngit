### SequenceInputStream(序列流)

~~~java
package cn.itcast.other;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.SequenceInputStream;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.Vector;

/*
SequenceInputStream(序列流)

  
 
 
 
需求：把a.txt与b.txt 文件的内容合并。

 */
public class Demo1 {
	
	public static void main(String[] args) throws IOException {
		merge3();
	}
	
	//把三个文件合并成一个文件
	public static void merge3() throws IOException{
		//找到目标文件
		File file1 = new File("F:\\a.txt");
		File file2 = new File("F:\\b.txt");
		File file3 = new File("F:\\c.txt");
		File file4 = new File("F:\\d.txt");
		
		
		//建立对应 的输入输出流对象
		FileOutputStream fileOutputStream = new FileOutputStream(file4);
		FileInputStream fileInputStream1 = new FileInputStream(file1);
		FileInputStream fileInputStream2 = new FileInputStream(file2);
		FileInputStream fileInputStream3 = new FileInputStream(file3);

		//创建序列流对象
		Vector<FileInputStream> vector = new Vector<FileInputStream>();
		vector.add(fileInputStream1);
		vector.add(fileInputStream2);
		vector.add(fileInputStream3);
		Enumeration<FileInputStream> e = vector.elements();

		SequenceInputStream sequenceInputStream = new SequenceInputStream(e);
		
		//读取文件数据
		byte[] buf = new byte[1024];
		int length = 0; 
		
		while((length = sequenceInputStream.read(buf))!=-1){
			fileOutputStream.write(buf,0,length);
		}
		
		//关闭资源
		sequenceInputStream.close();
		fileOutputStream.close();
		
	}
	
	
	
//	使用SequenceInputStream合并文件。
	public static void merge2() throws IOException{
		//找到目标文件
		File inFile1 = new File("F:\\a.txt");
		File inFile2 = new File("F:\\b.txt");
		File outFile = new File("F:\\c.txt");
		//建立数据的输入输出通道
		FileOutputStream fileOutputStream = new FileOutputStream(outFile);
		
		FileInputStream fileInputStream1 = new FileInputStream(inFile1);
		FileInputStream fileInputStream2 = new FileInputStream(inFile2);
		//建立序列流对象
		SequenceInputStream inputStream = new SequenceInputStream(fileInputStream1,fileInputStream2);
		byte[] buf = new byte[1024];
		int length = 0 ; 
		
		while((length = inputStream.read(buf))!=-1){
			fileOutputStream.write(buf,0,length);
		}
		//关闭资源
		inputStream.close();
		fileOutputStream.close();

	}
	
	
	//需求：把a.txt与b.txt 文件的内容合并。
	public static void merge1() throws IOException{
		//找到目标文件
		File inFile1 = new File("F:\\a.txt");
		File inFile2 = new File("F:\\b.txt");
		File outFile = new File("F:\\c.txt");
		//建立数据的输入输出通道
		FileOutputStream fileOutputStream = new FileOutputStream(outFile);
		FileInputStream fileInputStream1 = new FileInputStream(inFile1);
		FileInputStream fileInputStream2 = new FileInputStream(inFile2);
		
		//把输入流存储到集合中，然后再从集合中读取
		ArrayList<FileInputStream> list = new ArrayList<FileInputStream>();
		list.add(fileInputStream1);
		list.add(fileInputStream2);
		
		//准备一个缓冲数组
		byte[] buf = new byte[1024];
		int length = 0 ; 
		
		for(int i = 0 ; i< list.size() ; i++){
			FileInputStream fileInputStream = list.get(i);
			while((length = fileInputStream.read(buf))!=-1){
				fileOutputStream.write(buf,0,length);
			}
			//关闭资源
			fileInputStream.close();
		}
		fileOutputStream.close();
		
	}

}

~~~



### 案例：合并切割mp3

~~~java
package cn.itcast.other;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.SequenceInputStream;
import java.util.Enumeration;
import java.util.Vector;

/*
 
 需求： 把一首mp3先切割成n份，然后再把这些文件合并起来。
 
 */


public class Demo2 {

	public static void main(String[] args) throws IOException {
//		cutFile();
		mergeFlile();
	}
	
	//合并
	public static void mergeFlile() throws IOException{
		//找到目标文件
		File dir = new File("F:\\music");
		//通过目标文件夹找到所有的MP3文件，然后把所有的MP3文件添加到vector中。
		Vector<FileInputStream> vector = new Vector<FileInputStream>();
		File[] files = dir.listFiles();
		for(File file : files){
			if(file.getName().endsWith(".mp3")){
				vector.add(new FileInputStream(file));
			}
		}
		//通过Vector获取迭代器
		Enumeration<FileInputStream> e = vector.elements();
		//创建序列流
		SequenceInputStream inputStream = new SequenceInputStream(e);
		//建立文件的输出通道
		FileOutputStream fileOutputStream = new FileOutputStream("F:\\合并.mp3");
		//建立缓冲数组读取文件
		byte[] buf = new byte[1024];
		int length = 0 ; 
		while((length =  inputStream.read(buf))!=-1){
			fileOutputStream.write(buf,0,length);
		}
		//关闭资源
		fileOutputStream.close();
		inputStream.close();
		
	}
	
	
	
	//切割MP3
	public static void cutFile() throws IOException{
		File file = new File("F:\\美女\\1.mp3");
		//目标文件夹
		File dir = new File("F:\\music");
		//建立数据的输入通道
		FileInputStream fileInputStream = new FileInputStream(file);
		//建立缓冲数组读取
		byte[] buf = new byte[1024*1024];
		int length = 0;
		for(int i = 0 ;  (length = fileInputStream.read(buf))!=-1 ; i++){
			FileOutputStream fileOutputStream =	new FileOutputStream(new File(dir,"part"+i+".mp3"));
			fileOutputStream.write(buf,0,length);
			fileOutputStream.close();
		}
		//关闭资源
		fileInputStream.close();
	}
	
	
}

~~~



### 对象的输入输出流

~~~java
package cn.itcast.other;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

/*
 对象的输入输出流 : 对象的输入输出流 主要的作用是用于写对象的信息与读取对象的信息。 对象信息一旦写到文件上那么对象的信息就可以做到持久化了
 
 对象的输出流： ObjectOutputStream .
 
对象的输入流: ObjectInputStream 
 
 
 ObjectOutputStream的使用步骤：
 	1. 
 
 对象输入输出流要注意的细节：
 	1. 如果对象需要被写出到文件上，那么对象所属的类必须要实现Serializable接口。 Serializable接口没有任何的方法，是一个标识接口而已。
 	2. 对象的反序列化创建对象的时候并不会调用到构造方法的、
 	3. serialVersionUID 是用于记录class文件的版本信息的，serialVersionUID这个数字是通过一个类的类名、成员、包名、工程名算出的一个数字。
 	4. 使用ObjectInputStream反序列化的时候，ObjeectInputStream会先读取文件中的serialVersionUID，然后与本地的class文件的serialVersionUID
 	进行对比，如果这两个id不一致，那么反序列化就失败了。
 	5. 如果序列化与反序列化的时候可能会修改类的成员，那么最好一开始就给这个类指定一个serialVersionUID，如果一类已经指定的serialVersionUID，然后
 	在序列化与反序列化的时候，jvm都不会再自己算这个 class的serialVersionUID了。
 	6. 如果一个对象某个数据不想被序列化到硬盘上，可以使用关键字transient修饰。
 	7. 如果一个类维护了另外一个类的引用，那么另外一个类也需要实现Serializable接口。
 	
 */
class Address implements Serializable{
	
	String country; 
	
	String city;
	
	public Address(String country,String city){
		this.country = country;
		this.city = city;
	}
	
}



class User implements Serializable{
	
	private static final long serialVersionUID = 1L;

	String userName ;
	
	String password;
	
	transient int age;  // transient 透明
	
	Address address ;
	

	public User(String userName , String passwrod) {
		this.userName = userName;
		this.password = passwrod;
	}
	
	
	public User(String userName , String passwrod,int age,Address address) {
		this.userName = userName;
		this.password = passwrod;
		this.age = age;
		this.address = address;
	}
	
	@Override
	public String toString() {
		return "用户名："+this.userName+ " 密码："+ this.password+" 年龄："+this.age+" 地址："+this.address.city;
	}
}

public class Demo3 {
	
	public static void main(String[] args) throws IOException, Exception {
		writeObj();
//		readObj();
	}
	
	//把文件中的对象信息读取出来-------->对象的反序列化
	public static void readObj() throws  IOException, ClassNotFoundException{
		//找到目标文件
		File file = new File("F:\\obj.txt");
		//建立数据的输入通道
		FileInputStream fileInputStream = new FileInputStream(file);
		//建立对象的输入流对象
		ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);
		//读取对象信息
		User user = (User) objectInputStream.readObject(); //创建对象肯定要依赖对象所属 的class文件。
		System.out.println("对象的信息："+ user);
	}
	
	
	
	
	

	//定义方法把对象的信息写到硬盘上------>对象的序列化。
	public static void writeObj() throws IOException{
		//把user对象的信息持久化存储。
		Address address = new Address("中国","广州");
		User user = new User("admin","123",15,address);
		//找到目标文件
		File file = new File("F:\\obj.txt");
		//建立数据输出流对象
		FileOutputStream fileOutputStream = new FileOutputStream(file);
		//建立对象的输出流对象
		ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);
		//把对象写出
		objectOutputStream.writeObject(user);
		//关闭资源
		objectOutputStream.close();
		
		
	}
}
 
~~~



### Properties配置文件

~~~java
package cn.itcast.other;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

/*
 对象的输入输出流 : 对象的输入输出流 主要的作用是用于写对象的信息与读取对象的信息。 对象信息一旦写到文件上那么对象的信息就可以做到持久化了
 
 对象的输出流： ObjectOutputStream .
 
对象的输入流: ObjectInputStream 
 
 
 ObjectOutputStream的使用步骤：
 	1. 
 
 对象输入输出流要注意的细节：
 	1. 如果对象需要被写出到文件上，那么对象所属的类必须要实现Serializable接口。 Serializable接口没有任何的方法，是一个标识接口而已。
 	2. 对象的反序列化创建对象的时候并不会调用到构造方法的、
 	3. serialVersionUID 是用于记录class文件的版本信息的，serialVersionUID这个数字是通过一个类的类名、成员、包名、工程名算出的一个数字。
 	4. 使用ObjectInputStream反序列化的时候，ObjeectInputStream会先读取文件中的serialVersionUID，然后与本地的class文件的serialVersionUID
 	进行对比，如果这两个id不一致，那么反序列化就失败了。
 	5. 如果序列化与反序列化的时候可能会修改类的成员，那么最好一开始就给这个类指定一个serialVersionUID，如果一类已经指定的serialVersionUID，然后
 	在序列化与反序列化的时候，jvm都不会再自己算这个 class的serialVersionUID了。
 	6. 如果一个对象某个数据不想被序列化到硬盘上，可以使用关键字transient修饰。
 	7. 如果一个类维护了另外一个类的引用，那么另外一个类也需要实现Serializable接口。
 	
 */
class Address implements Serializable{
	
	String country; 
	
	String city;
	
	public Address(String country,String city){
		this.country = country;
		this.city = city;
	}
	
}



class User implements Serializable{
	
	private static final long serialVersionUID = 1L;

	String userName ;
	
	String password;
	
	transient int age;  // transient 透明
	
	Address address ;
	

	public User(String userName , String passwrod) {
		this.userName = userName;
		this.password = passwrod;
	}
	
	
	public User(String userName , String passwrod,int age,Address address) {
		this.userName = userName;
		this.password = passwrod;
		this.age = age;
		this.address = address;
	}
	
	@Override
	public String toString() {
		return "用户名："+this.userName+ " 密码："+ this.password+" 年龄："+this.age+" 地址："+this.address.city;
	}
}

public class Demo3 {
	
	public static void main(String[] args) throws IOException, Exception {
		writeObj();
//		readObj();
	}
	
	//把文件中的对象信息读取出来-------->对象的反序列化
	public static void readObj() throws  IOException, ClassNotFoundException{
		//找到目标文件
		File file = new File("F:\\obj.txt");
		//建立数据的输入通道
		FileInputStream fileInputStream = new FileInputStream(file);
		//建立对象的输入流对象
		ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);
		//读取对象信息
		User user = (User) objectInputStream.readObject(); //创建对象肯定要依赖对象所属 的class文件。
		System.out.println("对象的信息："+ user);
	}
	
	
	
	
	

	//定义方法把对象的信息写到硬盘上------>对象的序列化。
	public static void writeObj() throws IOException{
		//把user对象的信息持久化存储。
		Address address = new Address("中国","广州");
		User user = new User("admin","123",15,address);
		//找到目标文件
		File file = new File("F:\\obj.txt");
		//建立数据输出流对象
		FileOutputStream fileOutputStream = new FileOutputStream(file);
		//建立对象的输出流对象
		ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);
		//把对象写出
		objectOutputStream.writeObject(user);
		//关闭资源
		objectOutputStream.close();
		
		
	}
}

~~~



###### 案例

~~~java
package cn.itcast.other;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Properties;

/*
 
 需求： 使用properties实现本软件只能 运行三次，超过了三次之后就提示购买正版，退jvm.
 
 */

public class Demo5 {
	
	public static void main(String[] args) throws IOException {
		File file = new File("F:\\count.properties");
		if(!file.exists()){
			//如果配置文件不存在，则创建该配置文件
			file.createNewFile();
		}
		
		//创建Properties对象。
		Properties properties = new Properties();
		//把配置文件的信息加载到properties中
		properties.load(new FileInputStream(file));
		FileOutputStream fileOutputStream = new FileOutputStream(file);

		int count = 0; //定义该变量是用于保存软件的运行次数的。
		//读取配置文件的运行次数
		String value = properties.getProperty("count");
		if(value!=null){
			count = Integer.parseInt(value);
		}
		
		//判断使用的次数是否已经达到了三次，
		if(count==3){
			System.out.println("你已经超出了试用次数，请购买正版软件！！");
			System.exit(0);
		}

		count++;
		System.out.println("你已经使用了本软件第"+count+"次");
		properties.setProperty("count",count+"");
		//使用Properties生成一个配置文件
		properties.store(fileOutputStream,"runtime");
		
	}

}

~~~



### 打印流PrintStream

~~~java
package cn.itcast.other;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;

/*
打印流（printStream）  打印流可以打印任意类型的数据，而且打印数据之前都会先把数据转换成字符串再进行打印。
 
 */

class Animal{
	
	String name;
	
	String color;
	
	public Animal(String name,String color){
		this.name = name;
		this.color = color;
	}
	
	@Override
	public String toString() {
		return "名字："+this.name+ " 颜色："+ this.color;
	}
	
}



public class Demo6 {
	
	public static void main(String[] args) throws IOException {
		/*FileOutputStream fileOutputStream = new FileOutputStream("F:\\a.txt");
		fileOutputStream.write("97".getBytes());
		fileOutputStream.close();*/
		
		
		//打印流可以打印任何类型的数据，而且打印数据之前都会先把数据转换成字符串再进行打印。
		File file = new  File("F:\\a.txt");
		//创建一个打印流
		PrintStream printStream = new PrintStream(file);
		/*
		printStream.println(97);
		printStream.println(3.14);
		printStream.println('a');
		printStream.println(true);
		Animal a = new Animal("老鼠", "黑色");
		printStream.println(a);
		
		
		//默认标准的输出流就是向控制台输出的，
		System.setOut(printStream); //重新设置了标准的输出流对象
		System.out.println("哈哈，猜猜我在哪里！！");
		*/
		
		//收集异常的日志信息。
		File logFile = new File("F:\\2015年1月8日.log");
		PrintStream logPrintStream = new PrintStream( new FileOutputStream(logFile,true) );
		try{
			int c = 4/0;
			System.out.println("c="+c);
			int[] arr = null;
			System.out.println(arr.length);
			
		}catch(Exception e){
			e.printStackTrace(logPrintStream);
			
		}
		
		
		
	}

}

~~~



### 编码与解码

~~~java
package cn.itcast.other;

import java.io.UnsupportedEncodingException;
import java.util.Arrays;
/*
编码与解码 
 
 编码： 把看得懂的字符变成看不懂码值这个过程我们称作为编码。
 
解码： 把码值查找对应的字符，我们把这个过程称作为解码。

注意： 以后编码与解码一般我们都使用统一的码表。否则非常容易出乱码。

 */

public class Demo7 {
	
	public static void main(String[] args) throws Exception {
		/*
		String str = "中国";
		byte[] buf = str.getBytes("utf-8");// 平台默认的编码表是gbk编码表。  编码
		System.out.println("数组的元素："+Arrays.toString(buf)); //
		
		str = new String(buf,"utf-8");  //默认使用了gbk码表去解码。 
		System.out.println("解码后的字符串："+ str);		
		*/
		
		
		/*String str = "a中国"; // ,0, 97, 78, 45, 86, -3
		byte[] buf = str.getBytes("unicode");  //编码与解码的时候指定 的码表是unicode实际上就是用了utf-16.
		System.out.println("数组的内容："+ Arrays.toString(buf));
		*/
		
		
		String str = "大家好";
		byte[] buf = str.getBytes(); //使用gbk进行编码
		System.out.println("字节数组："+ Arrays.toString(buf));  // -76, -13, -68, -46, -70, -61
		
		str = new String(buf,"iso8859-1");
		// 出现乱码之后都可以被还原吗？ 
		
		byte[] buf2 = str.getBytes("iso8859-1");
		str = new String(buf2,"gbk"); 

		System.out.println(str);
		
		
		
		
	}
	
}

~~~



### 转换流

~~~java
package cn.itcast.other;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.InetSocketAddress;
import java.net.Socket;
/*
 转换流:
 
输入字节流的转换流：InputStreamReader 是字节流通向字符流的桥
 	InputStreamReader
 
输出字节流的转换流：
	OutputStreamWriter   可以把输出字节流转换成输出字符流 。  
 	
 
转换流的作用：
	1. 如果目前所 获取到的是一个字节流需要转换字符流使用，这时候就可以使用转换流。  字节流----> 字符流
 	2. 使用转换流可以指定编码表进行读写文件。
 	
 
 */


public class Demo8 {
	
	public static void main(String[] args) throws IOException {
//		readTest();
//		writeTest();'
		
//		writeTest2();
		readTest2();
	}
	
	//使用输入字节流的转换流指定码表进行读取文件数据
	public static void readTest2() throws IOException{
		File file = new File("F:\\a.txt");
		FileInputStream fileInputStream = new FileInputStream(file);
		//创建字节流的转换流并且指定码表进行读取
		InputStreamReader inputStreamReader = new InputStreamReader(fileInputStream,"utf-8");
		char[] buf = new char[1024];
		int length = 0;
		while((length = inputStreamReader.read(buf))!=-1){
			System.out.println(new String(buf,0,length));
		}
		
	}
	
	
	
	
	
	//使用输出字节流的转换流指定码表写出数据
	public static void writeTest2() throws IOException{
		File file = new File("F:\\a.txt");
		//建立数据的输出通道
		FileOutputStream fileOutputStream = new FileOutputStream(file);
		//把输出字节流转换成字符流并且指定编码表。
		OutputStreamWriter outputStreamWriter = new OutputStreamWriter(fileOutputStream, "utf-8");
		outputStreamWriter.write("新中国好啊");
		//关闭资源
		outputStreamWriter.close();
		
	}
	
	
	
	public static void writeTest() throws IOException{
		File file = new File("F:\\a.txt");
		FileOutputStream fileOutputStream = new FileOutputStream(file);
		//把输出字节流转换成输出字符流。
		OutputStreamWriter outputStreamWriter = new OutputStreamWriter(fileOutputStream);
		
		outputStreamWriter.write("大家好");
		outputStreamWriter.close();
		
	}
	
	
	
	
	public static void readTest() throws IOException{
		InputStream in = System.in; //获取了标准的输入流。
//		System.out.println("读到 的字符："+ (char)in.read());  //read()一次只能读取一个字节。
		//需要把字节流转换成字符流。
		InputStreamReader inputStreamReader = new InputStreamReader(in);
		//使用字符流的缓冲类
		BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
		String line = null;
		while((line = bufferedReader.readLine())!=null){
			System.out.println("内容："+ line);
		}
		
		
	}

}

~~~



### 递归

~~~java
package cn.itcast.other;
/*
 递归：函数的自身调用函数的自身。
 
 递归的使用前提： 必须要有条件的情况下调用。
 
 
需求： 算出5的阶乘。 5! = 5*4 *3 * 2*1 
 
 
 */
public class Demo9 {

	public static void main(String[] args) {
		int result = print(5);
		System.out.println("结果："+ result);
	}
	
	public static int print(int num){
		if(num==1){
			return 1;
		}else{
			return num*print(num-1);
		}
	}
	
	
	
	
	public static int test(int num){
		int result  =  1;
		while(num>0){
			result = result*num;
			num--;
		}
		return result;
	}
}

~~~



###### 案例

~~~java
package cn.itcast.other;

import java.io.File;

/*
 需求1：列出一个文件夹的子孙文件与目录。
 
 2，列出指定目录中所有的子孙文件与子孙目录名，要求名称前面要有相应数量的空格：
		第一级前面有0个，第二级前面有1个，第三级前面有2个...，以此类推。

3，列出指定目录中所有的子孙文件与子孙目录名，要求要是树状结构，效果如下所示：
		|--src
		|   |--cn
		|   |   |--itcast
		|   |   |   |--a_helloworld
		|   |   |   |   |--HelloWorld.java
		|   |   |   |--b_for
		|   |   |   |   |--ForTest.java
		|   |   |   |--c_api
		|   |   |   |   |--Student.java
		|--bin
		|   |--cn
		|   |   |--itcast
		|   |   |   |--i_exception
		|   |   |   |   |--ExceptionTest.class
		|   |   |   |--h_linecount
		|   |   |   |   |--LineCounter3.class
		|   |   |   |   |--LineCounter2.class
		|   |   |   |   |--LineCounter.class
		|--lib
		|   |--commons-io.jar

需求4: 删除一个非空的文件夹。 
 
 
作业：  剪切一个非空目录。

 
 */


public class Demo10 {
	
	public static void main(String[] args) {
	/*	File dir = new File("F:\\1208project\\day22");
		listFiles3(dir,"|--");*/
		
		File dir = new File("F:\\aa");
		deleteDir(dir);
	}
	
	
	//删除了一个非空的目录
	public static void deleteDir(File dir){ // bb
		File[] files = dir.listFiles(); //列出了所有的子文件
		for(File file : files){
			if(file.isFile()){
				file.delete();
			}else if(file.isDirectory()){
				deleteDir(file);
			}
		}
		dir.delete();
	}
	
	
	
	
	public static void listFiles3(File dir,String space){ //space 存储的是空格
		File[] files = dir.listFiles(); //列出所有 的子文件
		for(File file : files){
			if(file.isFile()){
				System.out.println(space+file.getName());
			}else if(file.isDirectory()){
				System.out.println(space+file.getName());
				listFiles3(file,"|   "+space);
			}
			
		}
		
		
	}
	
	
	
	//列出一个文件夹的子孙文件与目录。
	public static void listFiles2(File dir,String space){ //space 存储的是空格
		File[] files = dir.listFiles(); //列出所有 的子文件
		for(File file : files){
			if(file.isFile()){
				System.out.println(space+file.getName());
			}else if(file.isDirectory()){
				System.out.println(space+file.getName());
				listFiles2(file,"  "+space);
			}
			
		}
		
		
	}
	
	
	
	
	//列出一个文件夹的子孙文件与目录。
	public static void listFiles1(File dir){
		File[] files = dir.listFiles(); //列出所有 的子文件
		for(File file : files){
			if(file.isFile()){
				System.out.println("文件名："+file.getName());
			}else if(file.isDirectory()){
				System.out.println("文件夹："+file.getName());
				listFiles1(file);
			}
			
		}
		
		
	}
	
}

~~~



### 网络编程

~~~java
package cn.itcast.ip;

import java.net.InetAddress;
import java.net.UnknownHostException;

/*
 网络编程： 网络编程主要用于解决计算机与计算机（手机、平板..）之间的数据传输问题。
 
网络编程: 不需要基于html页面就可以达到数据之间的传输。 比如： feiQ , QQ , 微信....

网页编程： 就是要基于html页面的基础上进行数据的交互的。 比如： 珍爱网、 oa(办公自动化)、 高考的报告系统...

计算机网络： 分布在不同地域 的计算机通过外部设备链接起来达到了消息互通、资源共享的效果就称作为一个计算机网络。

网络通讯的三要素：
	1. IP
	2. 端口号。
	3. 协议.
	
192.168.10.1
IP地址：	IP地址的本质就是一个由32位的二进制数据组成的数据。 后来别人为了方便我们记忆IP地址，就把IP地址切成了4份，每份8bit.   2^8 = 0~255
      00000000-00000000-00000000-00000000

IP地址 = 网络号+ 主机号。

IP地址的分类：
	A类地址 = 一个网络号 + 三个主机号     2^24   政府单位
	B类地址 =  两个网络号+ 两个主机号   2^16 事业单位（学校、银行..）
	C类地址= 三个网络号+ 一个主机号  2^8    私人使用..

InetAddress(IP类)

常用的方法：
	getLocalHost();  获取本机的IP地址
	getByName("IP或者主机名") 根据一个IP地址的字符串形式或者是一个主机名生成一个IP地址对象。 (用于获取别人的IP地址对象)

	getHostAddress()  返回一个IP地址的字符串表示形式。
	getHostName()  返回计算机的主机名。
	
	
端口号是没有类描述的。
	端口号的范围： 0~65535
		从0到1023，系统紧密绑定于一些服务。 
		1024~65535  我们可以使用....

网络通讯的协议：
	udp通讯协议
	
	tcp通讯协议。

 */
public class Demo1 {
	
	public static void main(String[] args) throws UnknownHostException {
		//getLocalHost 获取本机的IP地址对象
		/*InetAddress address = InetAddress.getLocalHost();
		System.out.println("IP地址："+address.getHostAddress());
		System.out.println("主机名："+address.getHostName());*/
		
		//获取别人机器的IP地址对象。
		
		
		//可以根据一个IP地址的字符串形式或者是一个主机名生成一个IP地址对象。
		InetAddress address = InetAddress.getByName("Jolly-pc140116");
		System.out.println("IP地址："+address.getHostAddress());
		System.out.println("主机名："+address.getHostName());

		
		
		InetAddress[]  arr = InetAddress.getAllByName("www.baidu.com");//域名
		
		
	}

}

~~~



### udp通讯

###### 发送端

~~~java
package cn.itcast.udp;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.SocketException;

/*
在java中网络通讯业称作为Socket(插座)通讯，要求通讯 的两台器都必须要安装Socket。

不同的协议就有不同 的插座（Socket）

UDP通讯协议的特点：
	1. 将数据极封装为数据包，面向无连接。
	2. 每个数据包大小限制在64K中
	3.因为无连接，所以不可靠
	4. 因为不需要建立连接，所以速度快
	5.udp 通讯是不分服务端与客户端的，只分发送端与接收端。
	
	
	比如： 物管的对讲机, 飞Q聊天、 游戏...

udp协议下的Socket:
	
	DatagramSocket(udp插座服务)
	DatagramPacket(数据包类)
		DatagramPacket(buf, length, address, port)
		buf: 发送的数据内容
		length : 发送数据内容的大小。
		address : 发送的目的IP地址对象
		port : 端口号。

发送端的使用步骤：
	1. 建立udp的服务。
	2. 准备数据，把数据封装到数据包中发送。 发送端的数据包要带上ip地址与端口号。
	3. 调用udp的服务，发送数据。
	4. 关闭资源。


*/


//发送端
public class Demo1Sender {
	
	public static void main(String[] args) throws IOException {
		//建立udp的服务
		DatagramSocket datagramSocket = new DatagramSocket();
		//准备数据，把数据封装到数据包中。
		String data = "这个是我第一个udp的例子..";
		//创建了一个数据包
		DatagramPacket packet = new DatagramPacket(data.getBytes(), data.getBytes().length,InetAddress.getLocalHost() , 9090);
		//调用udp的服务发送数据包
		datagramSocket.send(packet);
		//关闭资源 ---实际上就是释放占用的端口号
		datagramSocket.close();
		
	}

}

~~~



###### 接收端

~~~java
package cn.itcast.udp;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;

//接收端
/*
 接收端的使用步骤
 	1. 建立udp的服务
 	2. 准备空 的数据 包接收数据。
 	3. 调用udp的服务接收数据。
 	4. 关闭资源
 
 */
public class Demo1Receive {

	public static void main(String[] args) throws IOException {
		//建立udp的服务 ，并且要监听一个端口。
		DatagramSocket  socket = new DatagramSocket(9090);
		
		//准备空的数据包用于存放数据。
		byte[] buf = new byte[1024];
		DatagramPacket datagramPacket = new DatagramPacket(buf, buf.length); // 1024
		//调用udp的服务接收数据
		socket.receive(datagramPacket); //receive是一个阻塞型的方法，没有接收到数据包之前会一直等待。 数据实际上就是存储到了byte的自己数组中了。
		System.out.println("接收端接收到的数据："+ new String(buf,0,datagramPacket.getLength())); // getLength() 获取数据包存储了几个字节。
		//关闭资源
		socket.close();
		
	}
	
}

~~~



### 飞秋发送消息

~~~java
package cn.itcast.udp;

import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;

/*
 每个网络程序都有自己所处理的特定格式数据,如果接收到的数据不符合指定的格式，那么就会被当成垃圾数据丢弃。(加密..)

 飞Q接收的数据格式：
 version:time :sender : ip: flag:content ;
 版本号          时间         发送人   :IP： 发送的标识符(32): 真正的内容;

 在udp协议中，有一个IP地址称作为广播地址，广播地址就是主机号为255地址。

 给广播IP地址发送消息的时候，在同一个网络段的机器都可以接收 到信息。
 192.168.15.255

 */
//使用udp协议给飞Q发送消息。
public class FeiQDemo {

	public static void main(String[] args) throws IOException {
		// 建立udp的服务
		DatagramSocket socket = new DatagramSocket();
		// 准备数据，把数据封装到数据包中
		String data = getData("feiQ你好！");
		DatagramPacket packet = new DatagramPacket(data.getBytes(),
				data.getBytes().length,
				InetAddress.getByName("192.168.15.255"), 2425);
		// 发送数据
		socket.send(packet);
		// 关闭资源
		socket.close();

	}

	// 把数据拼接成指定格式的数据
	public static String getData(String content) {
		StringBuilder sb = new StringBuilder();
		sb.append("1.0:");
		sb.append(System.currentTimeMillis() + ":");
		sb.append("习大大:");
		sb.append("192.168.10.1:");
		sb.append("32:");
		sb.append(content);

		return sb.toString();
	}

}

~~~



### tcp通讯

###### tcp客户端

~~~java
package cn.itcast.tcp;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.InetAddress;
import java.net.Socket;
import java.net.UnknownHostException;

/*
 
 UDP通讯协议的特点：
	1. 将数据极封装为数据包，面向无连接。
	2. 每个数据包大小限制在64K中
	3.因为无连接，所以不可靠
	4. 因为不需要建立连接，所以速度快
	5.udp 通讯是不分服务端与客户端的，只分发送端与接收端。
	
TCP通讯协议特点：
	1. tcp是基于IO流进行数据 的传输 的，面向连接。
 	2. tcp进行数据传输的时候是没有大小限制的。
 	3. tcp是面向连接，通过三次握手的机制保证数据的完整性。 可靠协议。
 	4. tcp是面向连接的，所以速度慢。
 	5. tcp是区分客户端与服务端 的。
 	
 	比如： 打电话、 QQ\feiQ的文件传输、 迅雷下载.... 
 	
tcp协议下的Socket：
	Socket(客户端) , tcp的客户端一旦启动马上要与服务端进行连接。
	ServerSocket(服务端类)

tcp的客户端使用步骤：
	1. 建立tcp的客户端服务。
	2. 获取到对应的流对象。
	3.写出或读取数据
	4. 关闭资源。


 */

//tcp客户端
public class Demo1Clinet {
	
	public static void main(String[] args) throws IOException{
		//建立tcp的服务
		Socket socket  = new Socket(InetAddress.getLocalHost(),9090);
		//获取到Socket的输出流对象
		OutputStream outputStream = socket.getOutputStream();
		//利用输出流对象把数据写出即可。
		outputStream.write("服务端你好".getBytes());
		
		//获取到输入流对象，读取服务端回送的数据。
		InputStream inputStream = socket.getInputStream();
		byte[] buf = new byte[1024];
		int length = inputStream.read(buf);
		System.out.println("客户端接收到的数据："+ new String(buf,0,length));
		
		//关闭资源
		socket.close();		
	}
}

~~~



###### tcp服务端

~~~java
package cn.itcast.tcp;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

//tcp的服务端
/*
	java.net.BindException:   端口被占用。

ServerSocket的使用 步骤
	1. 建立tcp服务端 的服务。
	2. 接受客户端的连接产生一个Socket.
	3. 获取对应的流对象读取或者写出数据。
	4. 关闭资源。


为什么ServerSocket不设计一个getInputStream与getOutputStream 呢？ 

*/
//服务端
public class Demo1Server {

	public static void main(String[] args) throws Exception {
		//建立Tcp的服务端,并且监听一个端口。
		ServerSocket serverSocket = new ServerSocket(9090);
		//接受客户端的连接
		Socket socket  =  serverSocket.accept(); //accept()  接受客户端的连接 该方法也是一个阻塞型的方法，没有客户端与其连接时，会一直等待下去。
		//获取输入流对象，读取客户端发送的内容。
		InputStream inputStream = socket.getInputStream();
		byte[] buf = new byte[1024];
		int length = 0;
		length = inputStream.read(buf);
		System.out.println("服务端接收："+ new String(buf,0,length));
		
		//获取socket输出流对象，想客户端发送数据
		OutputStream outputStream = socket.getOutputStream();
		outputStream.write("客户端你好啊！".getBytes());
		
		
		//关闭资源
		serverSocket.close();
		
	}
	
}

~~~



### 客户端与服务端聊天

###### 客户端

```java
package cn.itcast.tcp;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.InetAddress;
import java.net.Socket;

/*
 需求： 客户端与服务端一问一答聊天。
 
 
 1.如果使用BuffrerdReader的readline方法一定要加上\r\n才把数据写出。
 2.使用字符流一定要调用flush方法数据才会写出。
 
 */


//聊天的客户端
public class ChatClient {

	public static void main(String[] args) throws IOException {
		//建立tcp的客户端服务
		Socket socket = new Socket(InetAddress.getLocalHost(),9090);
		//获取socket的输出流对象。
		OutputStreamWriter socketOut =	new OutputStreamWriter(socket.getOutputStream());
		//获取socket的输入流对象
		BufferedReader socketReader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
		
		//获取键盘的输入流对象，读取数据
		BufferedReader keyReader = new BufferedReader(new InputStreamReader(System.in));
		
		String line = null;
		//不断的读取键盘录入的数据，然后把数据写出
		while((line = keyReader.readLine())!=null){
			socketOut.write(line+"\r\n");
			//刷新
			socketOut.flush();
			
			//读取服务端回送的数据
			line = socketReader.readLine();
			System.out.println("服务端回送的数据是："+line);
		}
		//关闭资源
		socket.close();
	}
	
	
}

```

###### 服务端

```java
package cn.itcast.tcp;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.ServerSocket;
import java.net.Socket;

/*
 聊天的服务端
 */
public class ChatServer {

	public static void main(String[] args) throws IOException {
		//建立tcp的服务端
		ServerSocket serverSocket = new ServerSocket(9090);
		//接受客户端的连接，产生一个SOcket
		Socket socket = serverSocket.accept();
		//获取到Socket的输入流对象
		BufferedReader socketReader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
		
		//获取到Socket输出流对象
		OutputStreamWriter socketOut =  new OutputStreamWriter(socket.getOutputStream());
		
		//获取键盘的输入流对象
		BufferedReader keyReader = new BufferedReader(new InputStreamReader(System.in));
		
		
		//读取客户端的数据
		String line = null;
		while((line = socketReader.readLine())!=null){
			System.out.println("服务端接收到的数据："+ line);
			
			System.out.println("请输入回送给客户端的数据：");
			line = keyReader.readLine();
			socketOut.write(line+"\r\n");
			socketOut.flush();
		}
		
		//关闭资源
		serverSocket.close();
	}
	
}

```



### 模拟Tomcat

~~~java
package cn.itcast.tcp;

import java.io.IOException;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

//模拟Tomcat服务器
public class TomcatDemo extends Thread {
	
	Socket socket;
	
	public TomcatDemo(Socket socket){
		this.socket = socket;
	}
	
	
	public void run() {
		try {
			//获取socket的输出流对象
			OutputStream outputStream = socket.getOutputStream();
			//把数据写到浏览器上
			outputStream.write("<html><head><title>aaa</title></head><body>你好啊浏览器</body></html>".getBytes());
			socket.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	

	public static void main(String[] args) throws IOException {
		//建立tcp的服务端
		ServerSocket serverSocket = new ServerSocket(9090);
		//不断的接受客户端的连接
		while(true){
			Socket socket = serverSocket.accept();
			new TomcatDemo(socket).start();
		}
	}
	
}

~~~

