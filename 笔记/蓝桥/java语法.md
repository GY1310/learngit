### 1.System.out.printf语法

 除了System.out.print(ln),java中还有一种输出命令，而且比以上两种更为复杂、强大，那就是System.out.printf 

**基本格式**

 基本格式：格式控制符以一个%开始，一个字母结束，字母规定了方法按照何种方式打印这个值，例如d表示十进制整数（int）,f表示浮点数（double）. 

%d代替后面的参数，格式字符串中的格式控制字符的个数必须与后面提供的参数个数相匹配。

常用格式控制符



<img src="C:\Users\GY\Desktop\笔记\蓝桥\img\20180401202714498.png" alt="20180401202714498"  />

 string同理，只是将d换成s. 



### 2.java中int和String类型之间的转换

**int –> String**

int i=123;

String s="";

第一种方法：s=i+""; //会产生两个String对象

第二种方法：s=String.valueOf(i); //直接使用String类的静态方法，只产生一个对象

第三种方法：Integer.toString(i);

**String –> int**

s="123";

int i;

第一种方法：i=Integer.parseInt(s); //直接使用静态方法，不会产生多余的对象，但会抛出异常

第二种方法：i=Integer.valueOf(s).intValue(); //Integer.valueOf(s) 相当于 new Integer(Integer.parseInt(s))，也会抛异常，但会多产生一个对象

【Double, Float, Long ,Byte, Short与字符串之间的转换方法大同小异】





