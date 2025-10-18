# Version control system (VCS)
## Types of VCS
* Local
* Centralize
* Distributed
# Git 
## Three stages of GIT
* Working Directory
* Staging Area
* Repository
## Git command
* initialize a new Git repository: git init
* set up Git repository:\
`Local setting applies only on the current repository`\
git config user.name "<name>"\
git config user.email "<email>"\
`Global setting applies to all repositories on the system`\
git config --global user.name "<name>"\
git config --global user.email "<email>"
* add file to staging:\
`add single file`\
git add <file_name>\
`add all files`\
git add .
* commit: git commit -m "message"
* check commit log: git log
* check files' status: git status
`files in red: on working directory`\
`file in green: on staging`\
* git convension: <type>: <short description>\
`minor change type`: chore\
`new feature type`: feat\
`issue fixing type`: fix 
# Javascript basic
* Write to the console: console.log("Hello world!");
* Execute script on terminal: node relative-path
* Variable:\
`var`: Used to initialize to value, redeclared and its value can be reassigned.`var x= value;`\
`let`: Similar to var but is block scoped `let y= value;`\
`const`: Used to declare a fixed value that cannot be changed `const z= value;`.
* Datatypes: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object.\
`String`: Series of multiple characters written in quotes `var x= number;`.\
`Number`: Numeric values can be real number or integers `var x= number;`.\
`Boolean`: Has only two values true or false `var x= true/false;`.
* Comparision: Comparison operator is used to compare two operands (==, ===,!=,>,<,>=,<=)
* A unary operator: performs an action on a single operand, such as incrementing, decrementing, or negating a value:\
`Increment (\(++\))`: Increases the value by one.\  
`Decrement (\(--\))`: Decreases the value by one.\
`Unary Minus (\(-\))`: Inverts the sign of the operand, changing a positive number to negative and vice versa.\
`Logical NOT (\(!\))`: Inverts a boolean value (e.g., true becomes false).  \
`Address-of (&)`: Returns the memory address of an operand.  Indirection ()*: Accesses the value that a pointer points to. 
* Arithmetic operator: Used to perform basic arithmetic operations on variables(operands) `+,-,*,/,%,++,--`
* Condition: `if (condition){//code}`
* Loops: for, while, do-while, for-in\
`for`: Loops over a block of with conditions specified in the beginning.\
Syntax:
for (initialization condition; testing condition;increment/decrement)
{
    statement(s)
}
* format code: Mac: `Option + Shift + F` and Window: `Alt + Shift + F`
