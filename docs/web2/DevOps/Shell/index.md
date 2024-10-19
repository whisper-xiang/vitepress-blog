# Shell

## 一、概念

### 1. Shell

`Shell` 是一种用户与操作系统之间的接口，也被称为“命令行解释器”或“命令行界面”（CLI），用于解释用户的命令并将它们传递给操作系统执行。

#### 1.1 Shell 有两种主要类型：

1. 图形化 `Shell`：如 `Windows` 的桌面环境、macOS 的 `Finder` 等。
2. 命令行 `Shell`：通过文本命令与系统交互，如 `Bash、Zsh、Cmd` 等。

#### 1.2 Shell 的作用

1. 命令解释：将用户输入的命令（如 `ls、cd、mkdir`）解释为系统可以理解的操作。
2. 脚本编写：用来编写脚本文件，自动执行一系列命令和任务。
3. 环境管理：管理系统环境变量、用户配置，并通过这些变量来控制操作系统的行为。
4. 任务控制：提供了任务控制（如后台任务运行），并允许用户查看和控制正在运行的进程。

#### 1.3 Shell 的类型

不同的操作系统和平台提供不同类型的命令行 `Shell` 实现。常见的 `Shell` 包括：

- `Bash（Bourne Again Shell）`：Linux 和 macOS 上常见的 Shell，支持复杂的脚本和命令操作。
- `Zsh（Z Shell）`：Bash 的增强版，提供更多的特性，如更智能的自动补全、插件支持等。
- `Cmd`：Windows 上的命令提示符，简单但功能有限，适用于基本的系统管理任务。
- `PowerShell`：Windows 上的另一种命令行 Shell，支持对象和更复杂的脚本操作。
- `Fish（Friendly Interactive Shell）`：另一个现代 Shell，注重易用性和用户友好性。

#### 1.4 与 Linux 的关系

1. `Shell` 命令：
   - `Shell` 是一个命令解释器，负责解释和执行用户输入的命令。`Shell` 提供了一些内置命令，比如 `cd、echo、exit` 等，这些命令是由 `Shell` 自身实现的，不依赖于外部程序。
   - 例如：`cd` 用于更改目录，它是 `Shell` 自带的一个内置命令。
2. `Linux` 命令：
   - Linux 命令通常是外部程序或工具，由操作系统提供，并存储在系统的某些目录中（例如 `/bin, /usr/bin` 等）。当用户在 `Shell` 中输入这些命令时，`Shell` 会查找这些程序的路径并执行它们。
   - 例如：`ls、cp、grep` 等命令都是 `Linux` 系统提供的外部命令，而不是 `Shell` 自身的内置功能。
3. 二者的关系：

   - `Shell` 作为命令解释器，可以执行内置的 `Shell` 命令和 `Linux` 系统命令。
   - `Linux` 系统命令可以看作是操作系统提供的外部工具和程序，它们是 `Shell` 调用来执行任务的。

### 2. Shell 脚本

**Shell 脚本** 是一种用来编写命令行任务自动化的程序脚本，通常由一系列 `Shell` 命令组成，主要目的是通过自动化的方式执行一系列的系统命令、处理文件、运行程序等任务。

这些脚本可以运行在命令行解释器（如 `Bash、Zsh、Cmd 或 PowerShell`）之上，脚本文件名可以使用 `.sh` 扩展名，但这不是必须的，只要系统能识别即可。

#### 2.1 Shell 脚本的用途

1. 系统管理：自动化执行备份、软件安装、日志管理等任务。
2. 文件处理：批量重命名文件、移动文件、查找/替换内容等。
3. 任务调度：结合系统的任务调度工具（如 cron），定期执行维护任务。
4. 部署脚本：用于自动化应用程序的部署和环境配置。
5. 自动化测试：自动执行测试用例或软件的构建和部署流程。

#### 2.2 Shell 脚本的基本结构

```shell
#!/bin/bash
# 这是一个简单的 Shell 脚本示例

name="Yun"
echo "Hello, $name!"

# 循环示例
for i in {1..3}; do
  echo "Iteration $i"
done

# 条件示例
if [ "$name" == "Yun" ]; then
  echo "Welcome, Yun!"
else
  echo "Who are you?"
fi

```

1. **Shebang**

在脚本文件的第一行用于指定脚本解释器的特殊注释行。  
 它告诉操作系统该脚本应使用哪个解释器来执行。

```shell
# 指定 Bash 解释器 确保系统在执行脚本时使用 Bash 来解析和执行命令。
#!/bin/bash

# 指定 Zsh 解释器 确保系统在执行脚本时使用 Zsh 来解析和执行命令。
#!/bin/zsh

# 使用 env 命令来查找并执行指定的解释器。常用于保证脚本在不同环境中的兼容性。
#!/usr/bin/env bash
```

- 使用 `#!/bin/bash` 和 `#!/bin/zsh` 适合在你确定脚本将运行在特定环境的情况下。
- 使用 `#!/usr/bin/env` 适合在跨平台或多人协作的项目中，以确保脚本能够在不同的系统上无缝运行。

2. **注释**

```shell
# 这是一个注释
```

3. **变量**

```shell
variable_name="variable_value"
```

4. **命令**

```shell
command_name
```

5. **函数**

```shell
function_name() {
    command1
    command2
    ...
    commandN
}
```

6. **条件判断**

```shell
if condition
then
    command1
    command2
    ...
    commandN
fi
```

### 3. 脚本支持的语言类型

`Shell` 脚本主要是用 `Shell` 语言（如 `Bash、Zsh、Sh`）编写的，但你也可以使用 `Python、Perl、Ruby、PHP、Node.js` 等语言，只需要在脚本的开头使用适当的 `Shebang` 来指定解释器。

```shell
#!/bin/bash

#!/usr/bin/python
#!/usr/bin/perl
#!/usr/bin/php
#!/usr/bin/node
```

## 二、Shell 命令

### 1. 变量

#### 1.1 定义变量

```shell
# 定义变量
variable_name="variable_value"

# 通过命令赋值
variable_name=$(command)
```

变量名的命名规则：

- 变量名和等号之间不能有空格
- 区分大小写
- 不能使用特殊字符，如 `@#$%^&*()+=` 等
- 不能使用空格
- 不能使用数字开头
- 不能使用下划线开头
- 不能使用减号开头

#### 1.2 使用变量

使用一个定义过的变量，只要在变量名前面加美元符号即可，如：

```shell
variable_name="variable_value"

# 变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界
echo $variable_name
echo ${variable_name}
```

#### 1.3 Shell 变量分类

`Shell` 变量分为两种类型：

- 局部变量：在当前 `Shell` 进程中有效的变量，脚本中定义的变量默认就是局部变量。
- 环境变量：可以从当前 `Shell` 传递到子进程的变量。通过 export 命令可以将局部变量升级为环境变量。

```shell
# 局部变量
variable_name="variable_value"

# 环境变量
export variable_name="variable_value"
```

#### 1.4 特殊变量

`Shell` 中有一些预定义的特殊变量，它们通常用于脚本参数传递和脚本控制：

- `$0`：当前脚本的文件名。
- `$1, $2, ...`：传递给脚本或函数的参数。
- `$#`：传递给脚本或函数的参数个数。
- `$@`：所有参数的列表，参数以空格分隔。
- `$?`：**上一个命令的退出状态，返回 0 表示成功，非 0 表示失败。**（常用）
- `$$`：当前 Shell 进程的进程 ID。
- `$!`：后台运行的最后一个进程的进程 ID。

### 2. 注释

以 `#` 开头的行都是注释，会被解释器忽略。

```shell
# 这是一个注释
```

`sh`里没有多行注释，只能每一行加一个`#`号

### 3. 字符串

字符串可以用单引号，也可以用双引号，也**可以不用引号（不推荐）**

```shell
# 单引号
  # 单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的
  # 单引号字串中不能出现单引号（对单引号使用转义符后也不行）
str='this is a string'

# 双引号
  # 双引号里可以有变量
  # 双引号里可以出现转义字符
str="this is a string"

```

#### 3.1 字符串操作

```shell
# 获取字符串长度
str="this is a string"
echo ${#str}  # 输出 16

# 提取子字符串
str="this is a string"
echo ${str:0:5}  # 输出 this
echo ${str:7}  # 输出 is a string， 如果省略长度，则会从起始位置提取到字符串的末尾：

# 查找子字符串
str="this is a string"
echo `expr index "$str" is`  # 输出 3  要在linux下运行，mac下会报错

# 字符串拼接
str1="this is "
str2="a string"
echo ${str1}${str2}  # 输出 this is a string

# 字符串替换
str="this is a string is"
# 只替换第一个匹配的子串
echo ${str/is/IS}  # 输出 this IS a string is
# 替换所有匹配的子串
echo ${str//is/IS}  # 输出 this IS a string IS

# 字符串比较
str1="Hello"
str2="World"
# 通过 = 和 != 操作符可以进行相等或不相等的比较
if [ "$str1" = "$str2" ]; then
    echo "字符串相等"
else
    echo "字符串不相等"
fi

# 检查字符串是否为空
# -z 表示字符串为空，-n 表示字符串不为空
str="Hello"
# 检查字符串是否为空
[ -z "$str" ] && echo "字符串为空" || echo "字符串不为空"
[ -n "$str" ] && echo "字符串不为空" || echo "字符串为空"
```

### 4. 数组

#### 4.1 普通数组

```shell
# 定义数组
# 使用 () 来定义数组，数组的各个元素之间用空格分隔。
array_name=(value1 value2)

# 读取数组
# 使用 ${array_name[index]} 来读取数组中的元素。
echo ${array_name[0]}  # 输出 value1
#  获取数组的所有元素
echo ${array_name[@]}  # 输出 value1 value2

# 修改数组元素
array_name[1]="blueberry"
echo ${array_name[1]}  # 输出：blueberry

# 追加元素
array_name[2]="cherry"
echo ${array_name[2]}  # 输出：cherry

# 获取数组长度   ${#数组名[@]}
echo ${#array_name[@]}  # 输出：2
```

#### 4.2 关联数组

关联数组是 Shell 4.0 及以上版本引入的一种数据结构，它允许使用字符串作为数组索引。
需要注意，关联数组必须先通过 declare -A 进行声明。

```shell
# 声明关联数组
declare -A ass_array
# 给关联数组赋值
ass_array["key1"]="value1"
ass_array["key2"]="value2"

# 读取关联数组
echo ${ass_array["key1"]}  # 输出：value1

# 获取关联数组的所有元素
echo ${ass_array[@]}  # 输出：value1 value2
# 获取关联数组的键
echo ${!ass_array[@]}  # 输出：key1 key2

# 修改关联数组元素
ass_array["key1"]="new_value"
echo ${ass_array["key1"]}  # 输出：new_value

# 获取关联数组的长度
echo ${#ass_array[@]}  # 输出：2

# 删除关联数组元素
unset ass_array["key1"]
echo ${#ass_array[@]}  # 输出：1
# 删除整个数组
unset ass_array
echo ${#ass_array[@]}  # 输出：0
```

#### 4.3 数组遍历

```shell
# 遍历普通数组
for value in ${array_name[@]}; do
    echo $value
done

# 遍历关联数组: 与普通数组类似，但使用 ${!数组名[@]} 来遍历键。
for key in ${!ass_array[@]}; do
    echo "$key => ${ass_array[$key]}"
done
```

### 5. 管道

管道是 `Shell` 中用于将一个命令的输出作为另一个命令的输入的一种机制。  
通过使用管道，可以将多个简单的命令组合起来执行复杂的任务。管道符号是竖线符号 `|`。

```shell
# 使用 `ls` 列出当前目录中的所有文件，并通过 `grep` 过滤出包含 "txt" 的文件
ls | grep "txt"

# 多重管道
# 先使用 `ps` 列出所有进程，再通过 `grep` 过滤出包含 "bash" 的进程，最后使用 `wc -l` 计算结果行数
ps aux | grep "bash" | wc -l

# 管道与重定向结合
# 将 `ls` 命令的输出通过管道传递给 `grep` 命令，同时将结果写入到 `output.txt` 文件中
ls | grep "txt" > output.txt

# 管道与错误处理
# 管道默认只传递标准输出，而不会传递标准错误（错误消息）。
# 如果需要将错误消息也通过管道传递，可以使用 2>&1 将标准错误重定向到标准输出。

# 将 `ls` 的标准错误（如果有）也传递给 `grep`
ls invalid_directory 2>&1 | grep "No such"
```

### 6. 重定向

将命令的输出保存到文件中，或者将文件的内容作为命令的输入，还可以处理错误输出。

在 `Shell` 中，每个进程默认有三个与终端交互的文件描述符：

- 标准输入（stdin）：文件描述符 0，通常从键盘输入。
- 标准输出（stdout）：文件描述符 1，通常输出到终端。
- 标准错误（stderr）：文件描述符 2，用于输出错误消息，默认输出到终端。

#### 6.1 重定向输出

```shell
# 将 `ls` 命令的输出写入到 `output.txt` 文件中
ls > output.txt

# 追加标准输出到文件
ls >> output.txt # 使用 >> 可以将输出追加到文件末尾，而不是覆盖原有内容。
```

#### 6.2 输入重定向

使用 `<` 将文件内容作为命令的标准输入。

```shell
# 使用 file.txt 作为标准输入，传递给 `grep` 进行处理
grep "pattern" < file.txt
```

#### 6.3 错误重定向

标准错误输出（stderr）可以使用 2> 重定向到文件中。类似地，2>> 会将错误消息追加到文件中。

```shell
# 重定向错误输出到文件:
# 将 `ls` 命令的错误信息保存到 error.log 文件中
ls invalid_dir 2> error.log

# 追加错误输出到文件
ls invalid_dir 2>> error.log
```

#### 6.4 合并标准输出和错误输出

可以用 2>&1 来将标准错误重定向到标准输出，然后再将标准输出重定向到文件。

```shell
# 将 `ls` 命令的标准输出和错误输出都写入到 `output.txt` 文件中
ls invalid_dir > output.txt 2>&1
```

#### 6.5 /dev/null

`/dev/null` 是一个特殊的文件，任何重定向到它的内容都会被丢弃。常用于忽略命令的输出或错误信息。

```shell
# 忽略命令的标准输出
ls > /dev/null

# 忽略命令的标准错误
ls invalid_dir 2> /dev/null

# 忽略命令的所有输出（包括标准输出和标准错误）
ls invalid_dir > /dev/null 2>&1
```

### 7. 条件判断

#### 7.1 条件判断语句

- if 语句基本格式

```shell
if [ 条件 ]; then  # 条件：用 [] 或 test 表示，可以是数值、字符串或文件判断。
    命令1
    命令2
else
    命令3
fi
```

- 文件判断

  可以用来检查文件是否存在、是否是目录、是否可读写等。
  | 判断条件 | 说明 |
  | --------- | ------------------ |
  | -e 文件名 | 判断文件是否存在 |
  | -f 文件名 | 判断是否为普通文件 |
  | -d 文件名 | 判断是否为目录 |
  | -r 文件名 | 判断文件是否可读 |
  | -w 文件名 | 判断文件是否可写 |
  | -x 文件名 | 判断文件是否可执行 |

```shell
if [ -e $file ]; then
    echo "文件存在"
fi
```

- 字符串判断

  可以用来比较两个字符串是否相等、是否包含子字符串等。
  | 判断条件 | 说明 |
  | ------------------ | ----------------------------- |
  | -z 字符串 | 判断字符串是否为空（长度为 0） |
  | -n 字符串 | 判断字符串是否不为空 |
  | 字符串 1 = 字符串 2 | 判断两个字符串是否相等 |
  | 字符串 1 != 字符串 2 | 判断两个字符串是否不相等 |

- 数值判断

  可以对数值进行比较，包括等于、大于、小于等。
  | 判断条件 | 说明 |
  | --------- | ----------------------- |
  | n1 -eq n2 | 判断两个数是否相等 |
  | n1 -ne n2 | 判断两个数是否不相等 |
  | n1 -gt n2 | 判断 n1 是否大于 n2 |
  | n1 -lt n2 | 判断 n1 是否小于 n2 |
  | n1 -ge n2 | 判断 n1 是否大于等于 n2 |
  | n1 -le n2 | 判断 n1 是否小于等于 n2 |

```shell
if [ $n1 -eq $n2 ]; then
    echo "两个数相等"
fi
```

- 复合条件判断

  可以使用 -a、-o 或逻辑运算符 &&、|| 来组合多个条件判断。

```shell
# 使用 -a（与）和 -o（或）
if [ $num -gt 5 -a $num -lt 15 ]; then
    echo "num 在 5 和 15 之间"
fi

# 使用 && 和 ||
if [ $num -gt 5 ] && [ $num -lt 15 ]; then
    echo "num 在 5 和 15 之间"
fi
```

- -a 和 -o：适用于 test 和 [] 中的条件判断
- && 和 ||：适用于整个 Shell 命令的逻辑控制

### 8. 流程控制

#### 8.1 if 语句

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

#### 8.2 if else 语句

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

#### 8.3 for 语句

```shell
for var in item1 item2 item3 item4 item5
do
    command1
    command2
    ...
    commandN
done
```

#### 8.4 while 语句

```shell
while condition
do
    command
done
```

#### 8.5 case 语句

```shell
case 变量 in
    值1)
        command1
        command2
        ...
        commandN
        ;;
esac

# 举例
case $var in
    "value1")
        echo "Matched value1"
        ;;
esac

```

### 9. 函数

#### 9.1 函数定义

```shell
# 形式1：
function 函数名 {
    命令1
    命令2
    ...
}

# 形式2：
函数名() {
    命令1
    命令2
    ...
}
```

#### 9.2 函数调用

通过函数名来调用

```shell
# 定义函数
greet() {
    echo "Hello, $1!"
}

# 调用函数并传递参数
greet "Alice" # 输出：Hello, Alice!
```

#### 9.3 函数参数

函数可以像脚本一样接收参数。函数内部可以通过特殊变量 `$1, $2, … `来访问参数：

- `$1, $2, …`：表示第 1、2、… 个参数。
- `$#`：表示参数的个数。
- `$@`：表示所有参数，参数之间保持独立。
- `$*`：表示所有参数，参数之间会被合并成一个字符串。

```shell
function add() {
    echo $(($1 + $2))
}

add 1 2 # 输出：3
```

#### 9.3 函数返回值

- 使用 `return` 返回状态码

```shell
# 函数可以使用 return 语句返回一个状态码（只能是整数）。
# return 的值可以通过 $? 来获取。
# 注意，return 返回的不是函数结果，而是状态码，通常用于表示函数执行成功或失败。
function add() {
    return $(($1 + $2))
}
```

- 使用 `echo` 返回字符串
  `echo` 输出结果，并通过命令替换`$(...)` 或反引号 `...` 来获取返回值。

```shell
multiply() {
    echo $(( $1 * $2 ))
}

# 获取函数的输出
result=$(multiply 5 4)
echo "5 * 4 = $result" # 输出：5 * 4 = 20
```

#### 9.4 函数变量

函数中的变量默认是全局的，这意味着它们可以在函数外部访问。  
如果希望函数内部的变量不影响外部，可以使用 `local` 关键字来定义局部变量。

```shell
my_function() {
    local local_var="I'm local"
    global_var="I'm global"
    echo "$local_var"
}

my_function
echo "$global_var"  # 函数外部可以访问
echo "$local_var"   # 函数外部无法访问

# 输出：
# I'm local
# I'm global
```

### 10. 接收用户输入

#### 10.1 read 命令

read 命令用于从标准输入读取一行，并将其存储到变量中。

```shell
#!/bin/bash
echo "请输入您的名字："
read name
echo "你好, $name!"

# 带提示信息
read -p "请输入您的名字：" name
echo "你好, $name!"

# 读取多个输入
read -p "请输入您的名字和年龄：" name age
echo "您的名字是 $name，年龄是 $age"

# 输入密码: -s 选项来隐藏用户输入
read -p "请输入您的密码：" -s password
echo "您的密码是 $password"

#  -t 选项设置 read 命令的超时时间
read -t 5 -p "请在5秒内输入您的名字：" name
echo "您的名字是 $name"
```

#### 10.2 通过 stdin 输入

可以使用 < 来将文件作为标准输入传递给脚本。

```shell
#!/bin/bash
read line
echo "你输入的内容是：$line"

# 运行时
./script.sh < input.txt  # 这将读取 input.txt 文件的第一行作为输入。
```

> 使用 `read` 命令时，它默认只读取一行输入。因此，当运行 `./script.sh < input.txt` 时，`read` 命令确实**只会读取** `input.txt` 文件的第一行内容。

#### 10.3 通过 cat 或管道输入

```shell
#!/bin/bash
cat input.txt | ./script.sh
```

其中，`input.txt` 的内容会通过管道传递给脚本。

### 11. 脚本执行

#### 11.1 直接执行脚本

```shell
# 赋予可执行权限
chmod +x script.sh

# 相对路径或绝对路径执行脚本
./script.sh
/path/to/script.sh

```

#### 11.2 使用解释器运行脚本

即使脚本没有执行权限，也可以通过显式调用解释器来执行脚本。常用的解释器有 /bin/bash, /bin/sh, /bin/zsh 等。

```shell
bash script.sh
zsh script.sh
sh script.sh
```

#### 11.3 使用 source 或 . 命令执行

当你希望脚本中的变量和函数影响当前 Shell 会话（而不是启动一个新的子 Shell），可以使用 source 或 . 来运行脚本。  
这种方式不会启动一个新的进程，而是将脚本中的内容加载到当前 Shell 环境中。

```shell
source script.sh
. script.sh
```

#### 11.4 在后台运行脚本

如果想让脚本在后台运行，可以在执行脚本时添加 & 符号。

```shell
./script.sh &
```

#### 11.5 通过环境变量 PATH 运行脚本

如果想要在任意目录下都能执行某个脚本，可以将脚本所在目录添加到系统的 PATH 环境变量中。  
这样就不需要指定脚本的路径，直接通过脚本名运行即可。

```shell
# .zshrc 或 .bashrc 中添加
export PATH=$PATH:/path/to/script/directory
```

#### 11.6 使用 nohup 保持脚本运行

有时你希望在关闭终端后脚本依然继续运行，可以使用 nohup 命令。nohup 会忽略挂起信号，从而保证脚本继续执行。

```shell
nohup ./script.sh &
```

这将使脚本即使在关闭终端后也能继续运行。执行结果会写入默认的 nohup.out 文件中

#### 11.7 定时执行脚本

可以使用 crontab 命令来定时执行脚本。

```shell
crontab -e

# 添加定时任务
# 分 时 日 月 周
0 12 * * * /path/to/script.sh
```

这种方式非常适合自动化脚本任务，例如每天备份数据、定时清理文件等。

```shell
# 查看定时任务
crontab -l

# 删除定时任务
crontab -r
```

### 12. 常用的命令

#### 12.1 文件与目录操作

| 命令   | 说明                 |
| ------ | -------------------- |
| ls     | 列出目录内容         |
| cd     | 切换目录             |
| pwd    | 显示当前目录         |
| mkdir  | 创建目录             |
| touch  | 创建文件             |
| rm     | 删除文件             |
| rm -r  | 删除目录             |
| rm -rf | 强制删除目录及其内容 |
| cp     | 复制文件或目录       |
| mv     | 移动文件或目录       |

#### 12.2 文件查看与编辑

| 命令 | 说明             |
| ---- | ---------------- |
| head | 显示文件开头内容 |
| cat  | 显示文件内容     |
| more | 分页显示文件内容 |
| less | 分页显示文件内容 |
| tail | 显示文件结尾内容 |
| grep | 搜索文件内容     |
| wc   | 统计文件内容     |
| nano | 文本编辑器       |
| vim  | 文本编辑器       |
| vi   | 文本编辑器       |

#### 12.3 文件权限

| 命令           | 说明                       |
| -------------- | -------------------------- |
| chmod          | 修改文件权限               |
| chmod +x file  | 赋予文件可执行权限         |
| chmod 755 file | 设置文件的权限为 rwxr-xr-x |
| chown          | 修改文件所有者             |
| chgrp          | 修改文件所属组             |

#### 12.4 系统信息与监控

| 命令               | 说明                                     |
| ------------------ | ---------------------------------------- |
| ps                 | 显示当前终端的进程                       |
| ps aux             | 显示所有进程                             |
| top                | 实时进程                                 |
| df -h              | 以人类可读的格式显示磁盘空间使用情况     |
| du -sh dir_or_file | 显示目录或文件的大小                     |
| free -m            | 显示内存使用情况                         |
| uname -a           | 显示操作系统的详细信息                   |
| uptime             | 显示系统运行时间、当前用户数和负载平均值 |
| whoami             | 显示当前用户                             |

#### 12.5 网络操作

| 命令          | 说明             |
| ------------- | ---------------- |
| curl          | 下载文件         |
| wget          | 下载文件         |
| ping          | 测试网络连接     |
| ifconfig      | 显示网络接口配置 |
| netstat       | 显示网络状态     |
| netstat -tuln | 显示监听的端口   |

#### 12.6 搜索与过滤命令

| 命令                                 | 说明                     |
| ------------------------------------ | ------------------------ |
| grep "search_term" file              | 在文件中搜索指定的字符串 |
| grep -r "search_term" dir            | 递归搜索目录中的文件     |
| find /path -name "filename"          | 根据文件名查找文件       |
| find /path -type d -name "dir_name"  | 查找目录                 |
| find /path -type f -name "file_name" | 查找文件                 |
| awk '{print $1}' file                | 打印文件的第一列         |
| wc -l file                           | 统计文件的行数           |

#### 12.7 压缩与解压命令

| 命令                                       | 说明             |
| ------------------------------------------ | ---------------- |
| tar -czvf archive.tar.gz file_or_directory | 创建 gzip 压缩包 |
| tar -xzvf archive.tar.gz                   | 解压 gzip 压缩包 |
| zip archive.zip file_or_directory          | 创建 zip 文件    |
| unzip archive.zip                          | 解压 zip 文件    |

#### 12.8 其他常用命令

| 命令    | 说明               |
| ------- | ------------------ |
| echo    | 输出字符串         |
| date    | 显示当前日期和时间 |
| cal     | 显示日历           |
| history | 显示之前执行的命令 |

## 三、脚本兼容性

### 3.1 bash 和 zsh 的差异语法

Zsh 和 Bash 之间存在一些语法上的不兼容性。这是因为尽管它们都属于 Unix Shell 的家族，并且在设计上有许多相似之处，但它们各自有独特的特性和语法扩展

#### 3.1.1 数组的声明和用法

```shell
# bash
array=(one two three)
echo ${array[1]}  # 输出: two


# zsh
array=(one two three)
echo $array[1]    # 输出: one (Zsh 数组是从 1 开始索引的)
```

#### 3.1.2 条件判断：

```shell
# bash
if [ "$var" = "value" ]; then
    echo "Matched"
fi

# zsh
if [[ "$var" = "value" ]]; then
    echo "Matched"
fi
```

### 3.2 如何尽可能保证脚本兼容性

- 遵循 POSIX 标准，避免使用特定于某个 Shell（如 Bash 或 Zsh）的功能或语法
- 选择合适的 Shebang
- 在不同的 Shell 和操作系统（如 macOS、Linux、Windows）中运行脚本进行测试。
- 使用基本命令，确保这些命令在大多数 Unix 和 Windows 环境中都可用。
- 在脚本中使用条件语句来处理不同环境的差异，例如：

```shell
if [ "$(uname)" = "Darwin" ]; then
    # macOS 特定代码
elif [ "$(expr substr $(uname -s) 1 5)" = "Linux" ]; then
    # Linux 特定代码
else
    # 其他系统处理
fi
```

- 使用工具如 ShellCheck 来检查脚本的语法和兼容性，识别潜在问题。
