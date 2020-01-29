-WHITEBOARDING

-write a function
-takes a string as only arg
-return boolean
-depending on if the brackets are balanced

-types of brackets
-()
-[]
-{}

- {}	TRUE
- {}(){}	TRUE
- ()[[Extra Characters]]	TRUE
- (){}[[]]	TRUE
- {}{Code}[Fellows](())	TRUE
- [({}]	FALSE
- (](	FALSE
- {(})	FALSE

-PLAN OF ACTION

X-create an empty array
X-create a new string that is only the brackets
-go through the string one character at a time from the beginning
-when it's an open bracket, push it to the array
-when it's a closing bracket, pop the array
-checkt to see if the poped item matches the closing braket in terms of type
-if not return false
-if it does, continue checking
-repeat until end of the string is reached
-if we make it to the end return True


