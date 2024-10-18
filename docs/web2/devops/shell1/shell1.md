# Shell

## shell 和 shell 脚本的概念

Shell 是操作系统中用于解释和执行命令的程序，主要用于和操作系统交互。它可以理解并执行用户输入的命令，或通过脚本文件批量执行一系列命令。常见的 shell 有 Bash（Bourne Again Shell）、Zsh、Fish、Sh 等。

Shell 脚本是由一系列 shell 命令组成的文件，通常用来自动化执行任务。它的文件通常以 .sh 为扩展名。Shell 脚本可以像编程语言一样，包含变量、条件语句、循环等，帮助开发者批量处理系统管理任务、部署应用、数据备份等工作。

## 环境

shell 编程跟 java、php 编程一样，只要有一个能编写代码的文本编辑器和一个能解释执行的脚本解释器就可以了。

### 脚本解释器

- 在 linux 中，脚本解释器通常是 bash，也就是 bash shell
- 在 mac os 中，脚本解释器通常是 zsh，也就是 zsh shell
- 在 windows 中，脚本解释器通常是 cmd，也就是 cmd shell

### Linux

Linux 默认安装就带了 shell 解释器。

### Mac OS

Mac OS 不仅带了 sh、bash 这两个最基础的解释器，还内置了 ksh、csh、zsh 等不常用的解释器。

### Windows 上的模拟器

windows 出厂时没有内置 shell 解释器，需要自行安装，为了同时能用 grep, awk, curl 等工具，最好装一个 cygwin 或者 mingw 来模拟 linux 环境。

- cygwin
- mingw

## 脚本

### 脚本格式

脚本文件以 .sh 为扩展名，内容通常为一系列的 shell 命令，可以直接在终端中执行。

### 变量

```shell
# 定义变量
variable_name="variable_value"

# 使用变量
echo $variable_name
```

- 变量名和等号之间不能有空格

#### 使用变量

使用一个定义过的变量，只要在变量名前面加美元符号即可，如：

```shell
variable_name="variable_value"

# 变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界
echo $variable_name
echo ${variable_name}
```

#### 只读变量

使用 readonly 命令可以将变量定义为只读变量，只读变量的值不能被改变。

```shell
readonly variable_name
```

### 注释

以 `#` 开头的行都是注释，会被解释器忽略。

```shell
# 这是一个注释
```

sh 里没有多行注释，只能每一行加一个#号

```shell
#--------------------------------------------
# 这是一个自动打ipa的脚本，基于webfrogs的ipa-build书写：https://github.com/webfrogs/xcode_shell/blob/master/ipa-build

# 功能：自动为etao ios app打包，产出物为14个渠道的ipa包
# 特色：全自动打包，不需要输入任何参数
#--------------------------------------------

##### 用户配置区 开始 #####
#
#
# 项目根目录，推荐将此脚本放在项目的根目录，这里就不用改了
# 应用名，确保和Xcode里Product下的target_name.app名字一致
#
##### 用户配置区 结束  #####
```

### 字符串

字符串可以用单引号，也可以用双引号，也可以不用引号

```shell
# 单引号
  # 单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的
  # 单引号字串中不能出现单引号（对单引号使用转义符后也不行）
str='this is a string'

# 双引号
  # 双引号里可以有变量
  # 双引号里可以出现转义字符
str="this is a string"

# 不用引号
str=this is a string
```

#### 字符串操作

- 获取字符串长度

```shell
str="this is a string"
echo ${#str}  # 输出 16
```

- 提取子字符串

```shell
str="this is a string"
echo ${str:0:5}  # 输出 this
```

- 查找子字符串

```shell
str="this is a string"
echo `expr index "$str" is`  # 输出 3  要在linux下运行，mac下会报错
```

### 数组

### 管道

### 条件判断

### 流程控制

#### if

```shell
if condition
then
    command1
    command2
    ...
    commandN
fi
```

写成一行（适用于终端命令提示符）：

```shell
if `ps -ef | grep ssh`;  then echo hello; fi
```

- if else

```shell
if condition
then
    command1
    command2
    ...
    commandN
else
    command
fi
```

#### for

```shell
for var in item1 item2 item3 item4 item5
do
    command1
    command2
    ...
    commandN
done
```

#### while

```shell
while condition
do
    command
done
```

#### case

```shell
case 变量 in
    值1)
        command1
        command2
        ...
        commandN
        ;;
esac
```

case 的语法和 C family 语言差别很大，它需要一个 esac（就是 case 反过来）作为结束标记，每个 case 分支用右圆括号，用两个分号表示 break

### 函数

```shell
[ function ] funname [()]
{
    action;
    [return int;]
}
```

- 函数返回值，只能通过 `$?` 来获得

### 用户输入

### 常用的命令

### 脚本执行
