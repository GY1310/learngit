### File类

~~~java
package cn.itcast.file;

import java.io.File;

/*
IO流(Input Output) ：

IO技术主要的作用是解决设备与设备之间 的数据传输问题。 比如： 硬盘--->内存          内存的数据---->硬盘上            把键盘的数据------->内存中

IO技术的应用场景：
	 导出报表 ， 上传大头照   、 下载 、 解释xml文件 ... 

数据保存到硬盘上，该数据就可以做到永久性的保存。   数据一般是以文件的形式保存到硬盘上

sun使用了一个File类描述了文件或者文件夹的。

File类可以描述一个文件或者一个文件夹。


File类的构造方法：

	File(String pathname)  指定文件或者文件夹的路径创建一个File文件。
	
	File(File parent, String child)   根据 parent 抽象路径名和 child 路径名字符串创建一个新 File 实例。 

	File(String parent, String child) 

目录分隔符：  在windows机器上 的目录分隔符是 \  ,在linux机器上的目录分隔符是/ .

注意：  在windows上面\ 与 / 都可以使用作为目录分隔符。 而且，如果写/ 的时候只需要写一个即可。


*/
public class Demo1 {
	
	public static void main(String[] args) {
		//File file = new File("F:"+File.separator+"a.txt"); //  在linux机器上是不是一个合法路径？？？ 
		File file = new File("F:/a.txt"); 
		
		/*File parentFile = new File("F:\\");
		File file = new File("F:\\","a.txt");*/
		System.out.println("存在吗？ "+ file.exists());  // exists 判断该文件是否存在，存在返回true，否则返回false。
//		System.out.println("目录分隔符："+ File.separator);
	}
	
	
	
}

~~~



###### 路径问题

~~~java
package cn.itcast.file;

import java.io.File;

/*
路径问题： 

绝对路径： 该文件在硬盘上 的完整路径。绝对路径一般都是以盘符开头的。

相对路径:  相对路径就是资源文件相对于当前程序所在的路径。

 . 当前路径
 
 .. 上一级路径
 
注意： 如果程序当前所在的路径与资源文件不是在同一个盘下面，是没法写相对路径 的。

   
*/
public class Demo2 {

	public static void main(String[] args) {
		File file = new  File(".");
		System.out.println("当前路径是："+ file.getAbsolutePath());
		
		File file2 = new File("..\\..\\a.txt");
		System.out.println("存在吗？"+ file2.exists());
		
	}
	
}

~~~



###### 创建

~~~java
package cn.itcast.file;

import java.io.File;
import java.io.IOException;

/*
创建：
	createNewFile()	在指定位置创建一个空文件，成功就返回true，如果已存在就不创建然后返回false
	mkdir()			在指定位置创建目录，这只会创建最后一级目录，如果上级目录不存在就抛异常。
	mkdirs()		在指定位置创建目录，这会创建路径中所有不存在的目录。
	renameTo(File dest)	重命名文件或文件夹，也可以操作非空的文件夹，文件不同时相当于文件的剪切,剪切时候不能操作非空的文件夹。移动/重命名成功则返回true，失败则返回false。

*/

public class Demo3 {
	
	public static void main(String[] args) throws IOException {
		File file = new File("F:\\aa");
		System.out.println("创建成功了吗？"+file.createNewFile()); //createNewFile 创建一个指定的文件，如果该文件存在了，则不会再创建，如果还没有存在则创建。创建成功返回true，否则返回false。
		
		File dir = new  File("F:\\a.txt");
		System.out.println("创建文件夹成功吗？"+dir.mkdir()); // mkdir 创建一个单级文件夹，
		dir = new File("F:\\aa\\bb");
		System.out.println("创建多级文件夹："+ dir.mkdirs());
		
		//renameTo()  如果目标文件与源文件是在同一个路径下，那么renameTo的作用是重命名， 如果目标文件与源文件不是在同一个路径下，那么renameTo的作用就是剪切，而且还不能操作文件夹。 
		File destFile = new File("F:\\aaaaaaw");
		System.out.println("重命名成功吗？"+file.renameTo(destFile)) ; 
		
	}

}

~~~



###### 删除&判断

~~~java
package cn.itcast.file;

import java.io.File;

/*
删除：
delete()		删除文件或一个空文件夹，如果是文件夹且不为空，则不能删除，成功返回true，失败返回false。
deleteOnExit()	在虚拟机终止时，请求删除此抽象路径名表示的文件或目录，保证程序异常时创建的临时文件也可以被删除


	判断：
		exists()		文件或文件夹是否存在。
		isFile()		是否是一个文件，如果不存在，则始终为false。
		isDirectory()	是否是一个目录，如果不存在，则始终为false。
		isHidden()		是否是一个隐藏的文件或是否是隐藏的目录。
		isAbsolute()	测试此抽象路径名是否为绝对路径名。



*/
public class Demo4 {
	
	public static void main(String[] args) {
	/*	
	    删除的。
	 * File file = new File("F:\\a.txt");
		System.out.println("删除成功吗？ "+ file.delete()); //delete方法不能用于删除非空的文件夹。 delete方法会马上删除一个文件。
		file.deleteOnExit();  //jvm退出的时候删除文件。  一般用于删除临时 文件。		
		System.out.println("哈哈哈");
		
		判断
	*/
		File file = new File("..\\..\\a.txt");
		System.out.println("存在吗？"+ file.exists());
		System.out.println("判断是否是一个文件："+file.isFile()); //如果是文件返回true，否则返回false.
		System.out.println("判断是否是一个文件夹："+ file.isDirectory()); // 是文件夹返回ture，否则返回false.
		System.out.println("是隐藏的 文件吗："+ file.isHidden());
		System.out.println("是绝对路吗？"+ file.isAbsolute());
	}	

}

~~~



###### 获取

~~~java
package cn.itcast.file;

import java.io.File;
import java.sql.Date;
import java.text.SimpleDateFormat;

/*
获取：
	getName()		获取文件或文件夹的名称，不包含上级路径。
	getPath()       返回绝对路径，可以是相对路径，但是目录要指定
	getAbsolutePath()	获取文件的绝对路径，与文件是否存在没关系
	length()		获取文件的大小（字节数），如果文件不存在则返回0L，如果是文件夹也返回0L。
	getParent()		返回此抽象路径名父目录的路径名字符串；如果此路径名没有指定父目录，则返回null。
	lastModified()	获取最后一次被修改的时间。
	

*/
public class  Demo5{

	public static void main(String[] args) {
		File file = new File("..\\..\\a.txt");
		System.out.println("文件名："+ file.getName());
		System.out.println("获取绝对路径："+ file.getPath());
		System.out.println("getAbsolutePath获取绝对路径："+file.getAbsolutePath());
		System.out.println("获取文件的的大小(字节为单位)："+ file.length());
		System.out.println("获取文件的父路径："+ file.getParent());
		
		//使用毫秒值转换成Date对象
		long lastModified = file.lastModified();
		Date date = new Date(lastModified);	
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy年MM月dd日  HH:mm:ss");
		System.out.println("获取最后一次的修改时间(毫秒值)："+ dateFormat.format(date) );
		
	}
	
	
}

~~~



###### 文件夹相关

~~~java
package cn.itcast.file;

import java.io.File;

/*
文件夹相关：
	staic File[] listRoots()	列出所有的根目录（Window中就是所有系统的盘符）
	list()						返回目录下的文件或者目录名，包含隐藏文件。对于文件这样操作会返回null。
	listFiles()					返回目录下的文件或者目录对象（File类实例），包含隐藏文件。对于文件这样操作会返回null。


	list(FilenameFilter filter)	返回指定当前目录中符合过滤条件的子文件或子目录。对于文件这样操作会返回null。
	listFiles(FilenameFilter filter)	返回指定当前目录中符合过滤条件的子文件或子目录。对于文件这样操作会返回null。
*/
public class Demo6 {
	
	public static void main(String[] args) {
		/*File[] roots = File.listRoots(); //列出所有的根目录
		for(File file  : roots){
			System.out.println(file);
		}*/
		
		File file = new File("F:\\1208\\day17");
		
		/*
		String[] fileNames = file.list(); //把 当前文件夹下面的所有子文件名与子文件夹名 存储到一个String类型 的数组中 返回。
		for(String fileName : fileNames){
			System.out.println(fileName);
		}*/
		
		
		File[] files = file.listFiles(); // 把 当前文件夹下面的所有子文件与子文件夹都使用了一个FIle对象描述，然后把这些File对象存储到一个FIle数组中返回
		for(File fileItem : files){
			System.out.println("文件名："+ fileItem.getName());
		}
		
		
		
	}

}

~~~



###### 案例

~~~java
package cn.itcast.file;

import java.io.File;
import java.io.FilenameFilter;
/*
需求1 ：  指定一个文件夹，然后该文件夹下面所有java文件。

需求2： 指定一个文件夹，然后列出文件夹下面的所有子文件与文件夹，但是格式要如下:
 
文件：
	文件名1
	文件名2
	文件名3
	..

文件夹：
	文件夹名1
	文件夹名2
	文件夹名3
	....

	listFiles(FilenameFilter filter)	返回指定当前目录中符合过滤条件的子文件或子目录。对于文件这样操作会返回null。
list(fileNameFilter filter)	返回指定当前目录中符合过滤条件的子文件或子目录。对于文件这样操作会返回null。

*/

// 自定义一个文件名过滤器
class MyFilter implements FilenameFilter{

	@Override
	public boolean accept(File dir, String name) {
		//System.out.println("文件夹:"+dir+" 文件名："+ name);
		return name.endsWith(".java");
	}
	
}



public class Demo7 {
	
	public static void main(String[] args) {
		File dir = new File("F:\\1208\\day06\\代码\\day06");
		listJava2(dir);
		
	}
	
	public static void listJava2(File dir){
		File[] files = dir.listFiles(new MyFilter()); //得到文件夹下面的所有子文件与文件夹。
		for(File file : files){
			System.out.println(file.getName());
		}
	}
	
	
	
	
	//列出所有的java文件
	public static void listJava(File dir){
		File[] files = dir.listFiles(); //获取到了所有的子文件
		for(File file : files){
			String fileName = file.getName();
			/*if(fileName.endsWith(".java")&&file.isFile()){
				System.out.println(fileName);
			}*/
			
			if(fileName.matches(".+\\.java")&&file.isFile()){
				System.out.println(fileName);
			}
			
		}
	}
	
	
	
	public static void listFile(File dir){
		File[] files = dir.listFiles();//获取到所有的子文件
		System.out.println("文件：");
		for(File fileItem : files){
			if(fileItem.isFile()){
				System.out.println("\t"+fileItem.getName());
			}
		}
		
		
		System.out.println("文件夹：");
		for(File fileItem : files){
			if(fileItem.isDirectory()){
				System.out.println("\t"+fileItem.getName());
			}
		}
		
		
	}
	

	
}

~~~



### FileInputStream

~~~java
package cn.itcast.input;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

/*
 File类: 用于描述一个文件或者文件夹的。
 
 通过File对象我们可以读取文件或者文件夹的属性数据，如果我们需要读取文件的内容数据，那么我们需要使用IO流技术。
 
IO流（Input Output）

IO流解决问题： 解决设备与设备之间的数据传输问题。  内存--->硬盘   硬盘--->内存


IO流技术：


IO流分类：
	如果是按照数据的流向划分：
		
		输入流
		
		
		输出流
		
	如果按照处理的单位划分：
	
		字节流: 字节流读取得都是文件中二进制数据，读取到二进制数据不会经过任何的处理。
		
		
		字符流： 字符流读取的数据是以字符为单位的 。 字符流也是读取文件中的二进制数据，不过会把这些二进制数据转换成我们能 识别的字符。  
				字符流 = 字节流 + 解码
				
输入字节流：
--------| InputStream 所有输入字节流的基类  抽象类
------------| FileInputStream  读取文件数据的输入字节流 
			
使用FileInputStream读取文件数据的步骤：
	1. 找到目标文件
	2. 建立数据的输入通道。
	3. 读取文件中的数据。
	4. 关闭 资源.


				 
 */
public class Demo1 {
	
	public static void main(String[] args) throws IOException {
		readTest4();
	}
	
	//方式4：使用缓冲数组配合循环一起读取。28
	public static void readTest4() throws IOException{
		long startTime = System.currentTimeMillis();
		//找到目标文件
		File file = new File("F:\\美女\\1.jpg");
		//建立数据的输入通道
		FileInputStream fileInputStream = new FileInputStream(file);
		//建立缓冲数组配合循环读取文件的数据。
		int length = 0; //保存每次读取到的字节个数。
		byte[] buf = new byte[1024]; //存储读取到的数据    缓冲数组 的长度一般是1024的倍数，因为与计算机的处理单位。  理论上缓冲数组越大，效率越高
		
		while((length = fileInputStream.read(buf))!=-1){ // read方法如果读取到了文件的末尾，那么会返回-1表示。
			System.out.print(new String(buf,0,length));
		}
		
		//关闭资源
		fileInputStream.close();
		

		long endTime = System.currentTimeMillis();
		System.out.println("读取的时间是："+ (endTime-startTime)); //446
	}
	
	
	//方式3：使用缓冲 数组 读取。    缺点： 无法读取完整一个文件的数据。     12G
	public static void readTest3() throws IOException{
		//找到目标文件
		File file = new File("F:\\a.txt");
		//建立数据的输入通道
		FileInputStream fileInputStream = new FileInputStream(file);
		//建立缓冲字节数组，读取文件的数据。
		byte[] buf = new byte[1024];  //相当于超市里面的购物车。
		int length = fileInputStream.read(buf); // 如果使用read读取数据传入字节数组，那么数据是存储到字节数组中的，而这时候read方法的返回值是表示的是本次读取了几个字节数据到字节数组中。
		System.out.println("length:"+ length);
		
		//使用字节数组构建字符串
		String content = new String(buf,0,length);
		System.out.println("内容："+ content);
		//关闭资源
		fileInputStream.close();
	}
	
	
    
    
	
	//方式2 ： 使用循环读取文件的数据
	public static void readTest2() throws IOException{
		long startTime = System.currentTimeMillis();
		//找到目标文件
		File file = new File("F:\\美女\\1.jpg");
		//建立数据的输入通道
		FileInputStream fileInputStream = new FileInputStream(file);
		//读取文件的数据
		int content = 0; //声明该变量用于存储读取到的数据
		while((content = fileInputStream.read())!=-1){
			System.out.print((char)content);
		}
		//关闭资源
		fileInputStream.close();
		
		long endTime = System.currentTimeMillis();
		System.out.println("读取的时间是："+ (endTime-startTime)); //446
	}
	
	
	
	//读取的方式一缺陷： 无法读取完整一个文件 的数据.
	public static void readTest1() throws IOException{
		//1. 找到目标文件
		File file = new File("F:\\a.txt");
		//建立数据的输入通道。
		FileInputStream fileInputStream = new FileInputStream(file);
		//读取文件中的数据
		int content = fileInputStream.read(); // read() 读取一个字节的数据，把读取的数据返回。
		System.out.println("读到的内容是："+ (char)content);
		//关闭资源    实际上就是释放资源。 
		 fileInputStream.close();
	}
	
	
}

~~~



###### FileInputStream读取文件要注意的细节

~~~java
package cn.itcast.input;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
/*
 问题1： 读取完一个文件的数据的时候，我不关闭资源有什么影响?
 答案： 资源文件一旦 使用完毕应该马上释放，否则其他的程序无法对该资源文件进行其他 的操作。
 
 
 
 
 
 */
import java.util.Arrays;


public class Demo2 {

	public static void main(String[] args) throws IOException {
		//找到目标文件
		File file = new File("F:\\day18-day21.IO.doc");
		//建立数据的输入通道
		FileInputStream fileInputStream = new FileInputStream(file);
		//建立缓冲字节数组读取文件
		byte[] buf = new byte[8];
		int length = 0 ;
		
		while((length = fileInputStream.read(buf))!=-1){
			System.out.print(new String(buf));  // aaaa   bbba  bbb' '
//		System.out.println(Arrays.toString(buf));
		}
		//释放文件资源
		fileInputStream.close();
		
	
	}
	
}

~~~



### OutPutStream

~~~java
package cn.itcast.output;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

/*
 输出字节流：
 
 --------| OutputStream 是所有输出字节流 的父类。  抽象类
 -----------| FileOutStream 向文件输出数据的输出字节流。
 
FileOutputStream如何使用呢？
	1. 找到目标文件
	2. 建立数据的输出通道。
	3. 把数据转换成字节数组写出。
	4. 关闭资源

FileOutputStream要注意的细节：
	1. 使用FileOutputStream 的时候，如果目标文件不存在，那么会自动创建目标文件对象。 
	2. 使用FileOutputStream写数据的时候，如果目标文件已经存在，那么会先清空目标文件中的数据，然后再写入数据。
	3.使用FileOutputStream写数据的时候, 如果目标文件已经存在，需要在原来数据基础上追加数据的时候应该使用new FileOutputStream(file,true)构造函数，第二参数为true。
	4.使用FileOutputStream的write方法写数据的时候，虽然接收的是一个int类型的数据，但是真正写出的只是一个字节的数据，只是
	把低八位的二进制数据写出，其他二十四位数据全部丢弃。
	 
	 00000000-000000000-00000001-11111111   511
	 
	 
	 11111111---> -1 


	 
 */


public class Demo1 {
	
	public static void main(String[] args) throws IOException {
		writeTest3();
	}
	
	
	//使用字节数组把数据写出。
	public static void writeTest3() throws IOException{
		//找到目标文件
		File file = new File("F:\\b.txt");
		//建立数据输出通道
		FileOutputStream fileOutputStream = new FileOutputStream(file);
		//把数据写出。
		String data = "abc";
		byte[] buf = data.getBytes();
		fileOutputStream.write(buf, 0, 3); // 0 从字节数组的指定索引值开始写， 2：写出两个字节。

		//关闭资源
		fileOutputStream.close();
	}
		
	
	
	//使用字节数组把数据写出。
	public static void writeTest2() throws IOException{
		//找到目标文件
		File file = new File("F:\\b.txt");
		//建立数据输出通道
		FileOutputStream fileOutputStream = new FileOutputStream(file,true);
		//把数据写出。
		String data = "\r\nhello world";
		fileOutputStream.write(data.getBytes());
		//关闭资源
		fileOutputStream.close();
	}
	
	
	
	//每次只能写一个字节的数据出去。
	public static void writeTest1() throws IOException{
		//找到目标文件
		File file = new File("F:\\b.txt");
		//建立数据的输出通道
		FileOutputStream fileOutputStream = new FileOutputStream(file);
		//把数据写出
		fileOutputStream.write('h');
		fileOutputStream.write('e');
		fileOutputStream.write('l');
		fileOutputStream.write('l');
		fileOutputStream.write('o');
		//关闭资源
		fileOutputStream.close();
		
		
	}
	
	
}

~~~



###### 案例：拷贝一张图片

~~~java
package cn.itcast.output;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

/*
需求： 拷贝一张图片。
*/
public class CopyImage {
	
	
	public static void main(String[] args) throws IOException {
		//找到目标文件
		File inFile = new File("F:\\美女\\1.jpg");
		File destFile = new File("E:\\1.jpg");
		//建立数据的输入输出通道
		FileInputStream fileInputStream = new  FileInputStream(inFile);
		FileOutputStream fileOutputStream = new FileOutputStream(destFile); //追加数据....
		
		//每新创建一个FileOutputStream的时候，默认情况下FileOutputStream 的指针是指向了文件的开始的位置。 每写出一次，指向都会出现相应移动。
		//建立缓冲数据，边读边写
		byte[] buf = new byte[1024]; 
		int length = 0 ; 
		while((length = fileInputStream.read(buf))!=-1){ //最后一次只剩下了824个字节
			fileOutputStream.write(buf,0,length); //写出很多次数据，所以就必须要追加。
		}
		//关闭资源 原则： 先开后关，后开先关。
		fileOutputStream.close();
		fileInputStream.close();
	}

}

~~~



### IO异常处理

~~~java
package cn.itcast.exception;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import javax.management.RuntimeErrorException;

/*
 IO异常 的处理

 */
public class Demo1 {

	public static void main(String[] args) {
	//	readTest();
		
		copyImage();
	}

	// 拷贝图片
	public static void copyImage() {
		FileInputStream fileInputStream = null;
		FileOutputStream fileOutputStream = null;

		try {
			// 找到目标文件
			File inFile = new File("F:\\美女\\1.jpg");
			File outFile = new File("E:\\1.jpg");
			// 建立输入输出通道
			fileInputStream = new FileInputStream(inFile);
			fileOutputStream = new FileOutputStream(outFile);
			// 建立缓冲数组，边读边写
			byte[] buf = new byte[1024];
			int length = 0;
			while ((length = fileInputStream.read(buf)) != -1) {
				fileOutputStream.write(buf, 0, length);
			}
		} catch (IOException e) {
			System.out.println("拷贝图片出错...");
			throw new RuntimeException(e);
		} finally {
			// 关闭资源
			try {
				if (fileOutputStream != null) {
					fileOutputStream.close();
					System.out.println("关闭输出流对象成功...");
				}
			} catch (IOException e) {
				System.out.println("关闭输出流资源失败...");
				throw new RuntimeException(e);
			} finally {
				if (fileInputStream != null) {
					try {
						fileInputStream.close();
						System.out.println("关闭输入流对象成功...");
					} catch (IOException e) {
						System.out.println("关闭输入流对象失败...");
						throw new RuntimeException(e);
					}
				}

			}
		}
	}

	public static void readTest() {
		FileInputStream fileInputStream = null;
		try {
			// 找到目标文件
			File file = new File("F:\\aaaaa.txt");
			// 建立数据输入通道
			fileInputStream = new FileInputStream(file);
			// 建立缓冲数组读取数据
			byte[] buf = new byte[1024];
			int length = 0;
			while ((length = fileInputStream.read(buf)) != -1) {
				System.out.print(new String(buf, 0, length));
			}
		} catch (IOException e) {
			/*
			 * //处理的代码... 首先你要阻止后面的代码执行,而且要需要通知调用者这里出错了... throw new
			 * RuntimeException(e);
			 * //把IOException传递给RuntimeException包装一层，然后再抛出，这样子做的目的是
			 * 为了让调用者使用变得更加灵活。
			 */
			System.out.println("读取文件资源出错....");
			throw new RuntimeException(e);
		} finally {
			try {
				if (fileInputStream != null) {
					fileInputStream.close();
					System.out.println("关闭资源成功...");
				}
			} catch (IOException e) {
				System.out.println("关闭资源失败...");
				throw new RuntimeException(e);
			}
		}
	}

}
 
~~~



### 缓冲输入字节流

~~~java
package cn.itcast.buffered;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

/*
 我们清楚读取文件数据使用缓冲数组读取效率更高，sun也知道使用缓冲数组读取效率更高，那么
 这时候sun给我们提供了一个------缓冲输入字节流对象,让我们可以更高效率读取文件。
 
 
输入字节流体系： 
----| InputStream  输入字节流的基类。 抽象
----------| FileInputStream 读取文件数据的输入字节流
----------| BufferedInputStream 缓冲输入字节流    缓冲输入字节流的出现主要是为了提高读取文件数据的效率。    
其实该类内部只不过是维护了一个8kb的字节数组而已。 

注意： 凡是缓冲流都不具备读写文件的能力。

使用BufferedInputStream的步骤	:
	1. 找到目标文件。
	2. 建立数据 的输入通道
	3. 建立缓冲 输入字节流流
	4. 关闭资源
 
 
 */


public class Demo1 {
	
	public static void main(String[] args) throws IOException {
		readTest2();
	}
	
	public static void readTest2() throws IOException{
		//找到目标文件
		File file = new File("F:\\a.txt");
		
		FileInputStream fileInputStream= new FileInputStream(file);
		BufferedInputStream bufferedInputStream= new BufferedInputStream(fileInputStream);
		bufferedInputStream.read();
		
		
		
		FileOutputStream fileOutputStream= new FileOutputStream(file);
		BufferedOutputStream bufferedOutputStream= new BufferedOutputStream(fileOutputStream);
		fileOutputStream.write(null);
		
		//读取文件数据
		int content = 0 ;
		//疑问二：BufferedInputStream出现 的目的是了提高读取文件的效率，但是BufferedInputStream的read方法每次读取一个字节的数据
		//而FileInputStreram每次也是读取一个字节的数据，那么BufferedInputStream效率高从何而来？
		while((content = fileInputStream.read())!=-1){
			System.out.print((char)content);
		}
		
		//关闭资源
		bufferedInputStream.close();//调用BufferedInputStream的close方法实际上关闭的是FileinputStream.
	}

	
	
	//读取文件的时候我们都是使用缓冲数组读取。效率会更加高
	public static void readTest() throws IOException{
		File file = new File("F:\\a.txt");
		//建立数组通道
		FileInputStream fileInputStream = new FileInputStream(file);
		//建立缓冲数组读取数据
		byte[] buf = new byte[1024*8];
		int length = 0; 
		while((length = fileInputStream.read(buf))!=-1){
			System.out.print(new String(buf,0,length));
		}
		//关闭资源
		fileInputStream.close();
	}
	
	
}

~~~



### 缓冲输出字节流

~~~java
package cn.itcast.buffered;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

/*
输出字节流
--------| OutputStream  所有输出字节流的基类  抽象类
------------| FileOutputStream 向文件 输出数据 的输出字节流
------------| Bufferedoutputstream  缓冲输出字节流    BufferedOutputStream出现的目的是为了提高写数据的效率。 
        						内部也是维护了一个8kb的字节数组而已。
 
 使用BufferedOutputStream的步骤：
 	1. 找到目标文件
 	2. 建立数据的输出通道

 
BufferedOutputStream 要注意的细节
	1. 使用BufferedOutStream写数据的时候，它的write方法是是先把数据写到它内部维护的字节数组中。
 	2. 使用BufferedOutStream写数据的时候，它的write方法是是先把数据写到它内部维护的字节数组中，如果需要把数据真正的写到硬盘上面，需要
 	调用flush方法或者是close方法、 或者是内部维护的字节数组已经填满数据的时候。
 	

 
 */
public class Demo2 {

	public static void main(String[] args) throws IOException {
		//找到目标文件
		File file = new File("F:\\a.txt");
		//建立数据的输出通道
		FileOutputStream  fileOutputStream = new FileOutputStream(file);
		//建立缓冲输出字节流对象
		BufferedOutputStream bufferedOutputStream  = new BufferedOutputStream(fileOutputStream);
		//把数据写出
		bufferedOutputStream.write("hello world".getBytes()); 
		//把缓冲数组中内部的数据写到硬盘上面。
		//bufferedOutputStream.flush();
		bufferedOutputStream.close();
	}
	
}


~~~



### 案例：缓冲字节流拷贝图片

~~~java
package cn.itcast.buffered;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

/*
练习： 使用缓冲输入输出字节流拷贝一个图片。

*/
public class CopyImage {

	public static void main(String[] args) throws IOException {
		//找到目标文件
		File  inFile = new File("F:\\美女\\1.jpg");
		File outFile = new File("E:\\1.jpg");
		//建立数据输入输出通道
		FileInputStream fileInputStream = new FileInputStream(inFile);
		FileOutputStream fileOutputStream = new FileOutputStream(outFile);
		//建立缓冲输入输出流
		BufferedInputStream bufferedInputStream = new BufferedInputStream(fileInputStream);
		BufferedOutputStream bufferedOutputStream = new BufferedOutputStream(fileOutputStream);
		//边读边写
		int content = 0; 
		// int length = bufferedInputStream.read(buf);   如果传入了缓冲数组，内容是存储到缓冲数组中，返回值是存储到缓冲数组中的字节个数。
		while((content = bufferedInputStream.read())!=-1){ // 如果使用read方法没有传入缓冲数组，那么返回值是读取到的内容。
			bufferedOutputStream.write(content);
//			bufferedOutputStream.flush();
		}
		//关闭资源
		bufferedInputStream.close();
		bufferedOutputStream.close();
		
		
		
	}
	
}

~~~



### 使用字节流读写中文

~~~java
package cn.itcast.reader;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Arrays;

public class Demo1 {
	
	public static void main(String[] args) throws IOException {
//		writeTest();
		readrTest();
	}
	
	
	//使用字节流读取中文
	public static void readrTest() throws IOException{
		//找到目标文件
		File file = new File("F:\\a.txt");
		//建立数据的输入通道
		FileInputStream fileInputStream = new FileInputStream(file);
		//读取内容
		//int content = 0;
		
		/*while((content = fileInputStream.read())!=-1){ //出现乱码的原因： 一个中文在gbk码表中默认是占两个字节，
													   // 目前你只读取了一个字节而已，所以不是一个完整的中文。
			System.out.print((char)content);
		}*/
		
		byte[] buf = new byte[2];
		for(int i = 0 ; i < 3 ; i++){
			fileInputStream.read(buf);
			System.out.print(new String(buf));
		}
		//关闭资源
		fileInputStream.close();
		
	}
	
	
	
	
	//使用字节流写中文。   字节流之所以能够写中文是因为借助了字符串的getBytes方法对字符串进行了编码（字符---->数字）。 
	public static void writeTest() throws IOException{
		//找到目标文件
		File file = new File("F:\\a.txt");
		//建立数据的输出通道
		FileOutputStream fileOutputStream  = new FileOutputStream(file);
		//准备数据，把数据写出。
		String data = "大家好";
		byte[] buf = data.getBytes();	//把字符串转换成字节数组
		System.out.println("输出的内容："+ Arrays.toString(buf));
		fileOutputStream.write(buf);
		///关闭资源
		fileOutputStream.close();
	}

}

~~~



### 输入字符流

~~~java
package cn.itcast.reader;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

/*
字节流：字节流读取的是文件中的二进制数据，读到的数据并不会帮你转换成你看得懂的字符。 
 
字符流： 字符流会把读取到的二进制的数据进行对应 的编码与解码工作。   字符流 = 字节流 + 编码(解码)
 
输入字符流：
----------| Reader 输入字符流的基类   抽象类
-------------| FileReader 读取文件的输入字符流。


FileReader的用法：
	1. 找到目标文件
	2. 建立数据的输入通道
	3. 读取数据
	4. 关闭资源
	
	

 */
public class Demo2 {

	public static void main(String[] args) throws IOException {
		readTest2();
	}
	
	//使用缓冲字符数组读取文件。
	public static void readTest2() throws IOException{
		//找到目标文件
		File file = new File("F:\\1208project\\day21\\src\\day21\\Demo1.java");
		// 建立数据的输入通道
		FileReader fileReader = new FileReader(file);
		//建立缓冲字符数组读取文件数据
		char[] buf = new char[1024];
		int length = 0 ; 
		while((length = fileReader.read(buf))!=-1){
			System.out.print(new String(buf,0,length));
		}
	}
	
	
	
	
	public static void readTest1() throws IOException{
		//找到目标文件
		File file = new File("F:\\1208project\\day21\\src\\day21\\Demo1.java");
		//建立数据的输入通道
		FileReader fileReader = new FileReader(file);
		int content = 0 ;
		while((content = fileReader.read())!=-1){ //每次只会读取一个字符，效率低。
			System.out.print((char)content);
		}
		//关闭资源
		fileReader.close();
	}
	
}

~~~



### 输出字符流

~~~java
package cn.itcast.writer;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;

/*
输出字符流:

------| Writer 输出字符流的基类。 抽象类
-----------| FileWriter 向文件数据数据的输出字符流

FileWriter的使用步骤：
	1. 找到目标文件。
	2. 建立数据输出通道
	3. 写出数据。
	4. 关闭资源
	
FileWriter要注意的事项：
	1. 使用FileWriter写数据的时候，FileWriter内部是维护了一个1024个字符数组的，写数据的时候会先写入到它内部维护的字符数组中，如果需要
	把数据真正写到硬盘上，需要调用flush或者是close方法或者是填满了内部的字符数组。
	2. 使用FileWriter的时候，如果目标文件不存在，那么会自动创建目标文件。
	3.使用FileWriter的时候， 如果目标文件已经存在了，那么默认情况会先情况文件中的数据，然后再写入数据 ， 如果需要在原来的基础上追加数据，
	需要使用“new FileWriter(File , boolean)”的构造方法，第二参数为true。
	

练习： 使用字符流拷贝一个文本文件(java文件). 
接着使用字符流拷贝一个图片（观察图片的大小变化，思考为什么会这样子??）

 */
public class Demo1 {

	public static void main(String[] args) throws IOException {
		writeTest1();
	}
	
	public static void  writeTest1() throws IOException{
		//找到目标文件
		File file = new File("F:\\a.txt");
		//建立数据输出通道
		FileWriter fileWriter = new FileWriter(file,true);
		//准备数据，把数据写出
		String data = "今天天气非常好！！";
		fileWriter.write(data);  //字符流具备解码的功能。
		//刷新字符流
//		fileWriter.flush();
		//关闭资源
		fileWriter.close();
		
		
		
	}
}

~~~



### 使用字符流拷贝文件

~~~java
package cn.itcast.writer;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
/*
何时使用字符流，何时使用字节流？依据是什么？

使用字符流的应用场景： 如果是读写字符数据的时候则使用字符流。

使用字节流的应用场景： 如果读写的数据都不需要转换成字符的时候，则使用字节流。 
 
 
 */
//使用字符流拷贝图片  （无法打开拷贝完成的图片）
public class Copy {
	public static void main(String[] args) throws IOException {
		BufferedReader bufferedReader = new BufferedReader(new FileReader("F:\\Test.txt"));
		BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter("E:\\Test.exe"));
		String line=null;
		while((line = bufferedReader.readLine())!=null){
		bufferedWriter.write(line);
		}
		bufferedWriter.close();
		bufferedReader.close();
	}
	

}

~~~



### 使用字节流读取中文

~~~java
package cn.itcast.writer;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;

//使用字节流读取中文
public class Demo2 {

	public static void main(String[] args) throws IOException {
		File file = new File("F:\\a.txt");
		FileInputStream fileInputStream = new FileInputStream(file);
		byte[] buf = new byte[1024];
		int length = 0;
		while((length = fileInputStream.read(buf))!=-1){
			System.out.println(new String(buf,0,length)); //借用字符串的解码功能。
		}
	}
}

~~~



### 缓冲输入字符流

~~~java
package cn.itcast.buffered;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;

/*
输入字符流:
-------| Reader 所有输入字符流的基类。 抽象类
----------| FileReader 读取文件字符串的输入字符流。
----------| BufferedReader   缓冲输入字符流  。 缓冲 输入字符流出现的目的是为了提高读取文件 的效率和拓展了FileReader的功能。  其实该类内部也是维护了一个字符数组

记住：缓冲流都不具备读写文件的能力。

BufferedReader的使用步骤：
	1.找到目标文件
	2 .建立数据的输入通道。
	
	


 */
public class Demo1 {

	public static void main(String[] args) throws IOException {
//		 readTest1();
		File file  = new File("F:\\1208project\\day21\\src\\cn\\itcast\\buffered\\Demo1.java");
		//建立数据的输入通道。
		FileReader fileReader = new FileReader(file);
		String line =  null;
		
		while((line = myReadLine(fileReader))!=null){
			System.out.println(line);
		}
	}
	
	
	
	//自己去实现readLine方法。
	public static String myReadLine(FileReader fileReader) throws IOException{
		//创建一个字符串缓冲类对象
		StringBuilder sb = new StringBuilder();  //StringBuilder主要是用于存储读取到的数据
		int content = 0 ;
		while((content = fileReader.read())!=-1){
			if(content=='\r'){
				continue;
			}else if(content=='\n'){
				break;
			}else{
				//普通字符
				sb.append((char)content);
			}
		}
		//代表已经读取完毕了。
		if(content ==-1){
			return null;
		}
		
		return sb.toString();  
	}
	
	
	
	
	
	
	
	public static void readTest1() throws IOException{
		//找到目标文件
		File file  = new File("F:\\a.txt");
		//建立数据的输入通道。
		FileReader fileReader = new FileReader(file);
		//建立缓冲输入字符流
		BufferedReader bufferedReader = new BufferedReader(fileReader);
		//读取数据
		/*int content = bufferedReader.read();  //读到了一个字符。 读取到的字符肯定也是从Bufferedreader内部的字符数组中获取的到。所以效率高。
		System.out.println((char)content);*/
		//使用BUfferedReader拓展的功能，readLine()  一次读取一行文本，如果读到了文件的末尾返回null表示。
		String line =  null;
		while((line = bufferedReader.readLine())!=null){ // 虽然readLine每次读取一行数据，但是但会的line是不包含\r\n的、
			System.out.println(Arrays.toString("aaa".getBytes()));
		}
		//关闭资源
		bufferedReader.close();
		
	}
	
}

~~~



### 缓冲输出字符流

~~~java
package cn.itcast.buffered;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

/*
输出字符流
----------| Writer  所有输出字符流的基类，  抽象类。
--------------- | FileWriter 向文件输出字符数据的输出字符流。 
----------------| BufferedWriter 缓冲输出字符流          缓冲输出字符流作用： 提高FileWriter的写数据效率与拓展FileWriter的功能。
BufferedWriter内部只不过是提供了一个8192长度的字符数组作为缓冲区而已，拓展了FileWriter的功能。

BufferedWriter如何使用？
	1. 找到目标文件
 	2. 建立数据的输出通道



 */
public class Demo2 {

	public static void main(String[] args) throws IOException {
		//找到目标文件
		File file = new File("F:\\a.txt");
		//建立数据的输出通道
		FileWriter fileWriter = new FileWriter(file,true);
		//建立缓冲输出流对象
		BufferedWriter bufferedWriter = new BufferedWriter(fileWriter); 
		//写出数据
//		bufferedWriter.newLine(); //newLine() 换行。 实际上就是向文件输出\r\n.
		bufferedWriter.write("\r\n");
		bufferedWriter.write("前两天李克强来萝岗！！");
		//关闭资源
		bufferedWriter.flush();
//		bufferedWriter.close();
		
	}
	
}

~~~



### 缓冲输入输出字符流注册登录

~~~java
package cn.itcast.buffered;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

/*
练习： 缓冲输入输出字符流用户登陆注册...
	
*/
public class Login {
	
	static Scanner scanner = new Scanner(System.in);

	public static void main(String[] args) throws IOException {
		while(true){
			System.out.println("请选择功能： A(注册)   B(登陆)");
			String option =  scanner.next();
			if("a".equalsIgnoreCase(option)){
				//注册
				reg();
				
			}else if("b".equalsIgnoreCase(option)){
				//登陆
				login();
				
			}else{
				System.out.println("你的输入有误,请重新输入...");
			}	
		}
	}
	
	
	//登陆
	public static void login() throws IOException{
		System.out.println("请输入用户名：");
		String userName = scanner.next();
		System.out.println("请 输入密码：");
		String password = scanner.next();
		String info = userName+" "+ password;
		//读取文件的信息，查看是否有该用户的信息存在，如果存在则登陆成功。
		//建立数据的输入通道
		//建立缓冲输入字符流
		BufferedReader bufferedReader = new BufferedReader(new FileReader("F:\\users.txt"));
		String line = null;
		
		boolean isLogin = false; // 用于记录是否登陆成功的标识， 默认是登陆失败的。
		//不断的读取文件的内容
		while((line = bufferedReader.readLine())!=null){
			if(info.equals(line)){
				isLogin = true;
				break;
			}
		}
		
		if(isLogin){
			System.out.println("欢迎"+userName+"登陆成功...");
		}else{
			System.out.println("不存在该用户信息，请注册!!");
		}
		
		
		
	}
	
	
	
	
	//注册
	public static void reg() throws IOException{
		System.out.println("请输入用户名：");
		String userName = scanner.next();
		System.out.println("请 输入密码：");
		String password = scanner.next();
		String info = userName+" "+ password;
		//把用户的注册的信息写到文件上
		File file = new File("F:\\users.txt");
		FileWriter fileWriter = new FileWriter(file,true);
		//建立缓冲输出字符流
		BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
		//把用户信息写出
		
		bufferedWriter.write(info);
		bufferedWriter.newLine();
		//关闭资源
		bufferedWriter.close();
		
	}

}

~~~



### 装饰者设计模式1

~~~java
package other;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;

/*
 装饰者设计模式：增强一个类的功能，而且还可以让这些装饰类互相装饰。
 
 BufferedReader是不是拓展了FileReader的功能。
 BuferedWriter 也是拓展了FileWriter的功能。
 
 需求1： 编写一个类拓展BufferedReader的功能， 增强readLine方法返回 的字符串带有行号。
 
  需求2：编写一个类拓展BufferedReader的功能， 增强readLine方法返回 的字符串带有分号。
  
  需求3： 编写一个类拓展BufferedReader的功能， 增强readLine方法返回 的字符串带有双引号。
  
 
 需求4： 编写一个类拓展BufferedReader的功能， 增强readLine方法返回 的字符串带有行号+ 分号。
  
 需求5： 编写一个类拓展BufferedReader的功能， 增强readLine方法返回 的字符串带有分号+ 双引号。

 需求6： 编写一个类拓展BufferedReader的功能， 增强readLine方法返回 的字符串带有双引号+ 行号。
   
 需求7： 编写一个类拓展BufferedReader的功能， 增强readLine方法返回 的字符串带有行号+ 分号+双引号。
 
----| Reader
-----------| BufferedReader
---------------| BufferedLineNum  带行号
---------------| BufferedSemi    带分号
---------------| BufferedQuto   带双引
---------------| 子类.. 
---------------|

增强一个类的功能时候我们可以选择使用继承：
	
	通过继承实现增强一个类的功能优点：   代码结构清晰，通俗易懂。
	
	缺点： 使用不灵活，会导致继承的体系过于庞大。
	
 
 
 
 */
class BufferedLineNum extends BufferedReader{
	//行号
	int count = 1 ;

	public BufferedLineNum(Reader in) {
		super(in);
	}
	
	@Override
	public String readLine() throws IOException {
		String line = super.readLine(); 
		if(line ==null){
			return null;
		}
		line = count+" "+ line;
		count++;
		return line;
	}	
}


//带分号的缓冲输入字符流
class BufferedSemi extends BufferedReader{

	public BufferedSemi(Reader in) {
		super(in);
	}
	
	@Override
	public String readLine() throws IOException {
		String line =  super.readLine();
		if(line==null){
			return null;
		}
		line = line+";";
		return line;
	}
}


//带双引号的缓冲输入字符流
class  BufferedQuto extends BufferedReader{

	public BufferedQuto(Reader in) {
		super(in);
	}
	
	@Override
	public String readLine() throws IOException {
		String line = super.readLine();
		if(line==null){
			return null;
		}
		line = "\""+line+"\"";
		return line;
	}
}





public class Demo1 {

	public static void main(String[] args) throws IOException {
		File file = new File("F:\\Demo1.java");
		//建立数据的输入通道
		FileReader fileReader = new FileReader(file);
		//建立带行号的缓冲输入字符流
		BufferedLineNum bufferedLineNum = new BufferedLineNum(fileReader);
		
		//带有分号的缓冲输入字符流
		BufferedSemi bufferedSemi = new BufferedSemi(fileReader);
		
		//带有双引号的缓冲输入字符流
		BufferedQuto bufferedQuto = new BufferedQuto(fileReader);
		
		
		String line = null;
		while((line = bufferedQuto.readLine())!=null){
			System.out.println(line);
		}
		
	}
	
}

~~~



### 装饰者设计模式2

~~~java
package other;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
/*
装饰者设计模式：增强一个类的功能，而且还可以让这些装饰类互相装饰。

装饰者设计模式的步骤：
	1. 在装饰类的内部维护一个被装饰类的引用。
	2. 让装饰类有一个共同的父类或者是父接口。


需求1： 编写一个类拓展BufferedReader的功能， 增强readLine方法返回 的字符串带有行号。
 
 需求2：编写一个类拓展BufferedReader的功能， 增强readLine方法返回 的字符串带有分号。
  
 
 需求3： 编写一个类拓展BufferedReader的功能， 增强readLine方法返回 的字符串带有双引号。
 
 需求4： 编写一个类拓展BufferedReader的功能， 增强readLine方法返回 的字符串带有行号+ 分号。
  
  
 需求5： 编写一个类拓展BufferedReader的功能， 增强readLine方法返回 的字符串带有分号+ 双引号。

 需求6： 编写一个类拓展BufferedReader的功能， 增强readLine方法返回 的字符串带有双引号+ 行号。
   
 需求7： 编写一个类拓展BufferedReader的功能， 增强readLine方法返回 的字符串带有行号+ 分号+双引号。

继承实现的增强类和修饰模式实现的增强类有何区别？

	继承实现的增强类：
		优点：代码结构清晰，而且实现简单. 
		缺点：对于每一个的需要增强的类都要创建具体的子类来帮助其增强，这样会导致继承体系过于庞大。

修饰模式实现的增强类：
		优点：内部可以通过多态技术对多个需要增强的类进行增强， 可以是这些装饰类达到互相装饰的效果。使用比较灵活。
		
		缺点：需要内部通过多态技术维护需要被增强的类的实例。进而使得代码稍微复杂。


*/
import java.io.IOException;


//带行号的缓冲输入字符流
class BufferedLineNum2  extends BufferedReader{  
	
	//在内部维护一个被装饰类的引用。
	BufferedReader bufferedReader;
	
	int count = 1;
	
	public BufferedLineNum2(BufferedReader bufferedReader){
		super(bufferedReader);// 注意： 该语句没有任何的作用，只不过是为了让代码不报错。
		this.bufferedReader = bufferedReader;
	}
	
	
	public String readLine() throws IOException{
		String line = bufferedReader.readLine();
		if(line==null){
			return null;
		}
		line = count+" "+line;
		count++;
		return line;
	}
} 


//带分号缓冲输入字符流
class BufferedSemi2 extends BufferedReader{  //为什么要继承?  是为了让这些装饰类的对象可以作为参数进行传递，达到互相装饰 的效果。

	//在内部维护一个被装饰类的引用。
	BufferedReader bufferedReader;
		
	
	public BufferedSemi2(BufferedReader bufferedReader){ // new BuffereLineNum();
		super(bufferedReader);// 注意： 该语句没有任何的作用，只不过是为了让代码不报错。
		this.bufferedReader = bufferedReader;
	}
	
	public String readLine() throws IOException{
		String line = bufferedReader.readLine();  //如果这里的ReadLine方法是调用了buffereLineNum的readLine方法，问题马上解决。
		if(line==null){
			return null;
		}
		line = line +";";
		return line;
	}
	
}

//缓冲类带双引号
class BufferedQuto2 extends BufferedReader{
	
	//在内部维护一个被装饰的类
	BufferedReader bufferedReader;
	
	public BufferedQuto2(BufferedReader bufferedReader){  //new  BufferedSemi2();
		super(bufferedReader) ; //只是为了让代码不报错..
		this.bufferedReader = bufferedReader;
	}
	
	public String readLine() throws IOException{
		String line = bufferedReader.readLine();  //如果这里的ReadLine方法是调用了buffereLineNum的readLine方法，问题马上解决。
		if(line==null){
			return null;
		}
		line = "\""+line +"\"";
		return line;
	}
	
	
}



public class Demo2 {
	
	public static void main(String[] args) throws IOException {
		File file = new File("F:\\Demo1.java");
		FileReader fileReader = new FileReader(file);
		//建立缓冲输入字符流
		BufferedReader bufferedReader = new BufferedReader(fileReader);
		//建立带行号的缓冲输入字符流
		BufferedLineNum2 bufferedLineNum = new BufferedLineNum2(bufferedReader);
		
		//带分号的缓冲输入字符流
		BufferedSemi2 bufferedSemi2 = new BufferedSemi2(bufferedLineNum);
		
		//带双引号的缓冲输入字符流
		BufferedQuto2 bufferedQuto2 = new  BufferedQuto2(bufferedSemi2);
		
		String line = null;
		while((line = bufferedQuto2.readLine())!=null){
			System.out.println(line);
		}
		
		
		
		
	}
	
}

~~~



### 装饰者设计模式案例

~~~java
package other;

/*练习：
	一家三口每个人都会工作，儿子的工作就是画画，母亲的工作就是在儿子的基础上做一个增强，不单止可以画画，还可以上涂料。
	爸爸的工作就是在妈妈基础上做了增强，就是上画框。
*/

interface Work{
	
	public void work();
}

class Son implements Work{

	@Override
	public void work() {
		System.out.println("画画...");
	}
}


class Mather implements Work{

	//需要被增强的类。
	Work worker;
	
	public Mather(Work worker){
		this.worker = worker;
	}
	
	@Override
	public void work() {
		worker.work();
		System.out.println("给画上颜色..");
	}
}


class Father implements Work{

	//需要被增强的类的引用
	Work worker;
	
	public Father(Work worker){
		this.worker = worker;
	}
	
	
	@Override
	public void work() {
		worker.work();
		System.out.println("上画框...");
	}
	
}


public class Demo3 {
	
	public static void main(String[] args) {
		Son s = new Son();
//		s.work();
		Mather m = new Mather(s);
//		m.work();
		Father f = new Father(s);
		f.work();
		
		
	}
}

~~~

