# Lecture-4 (Let, const and var ki kahani)

### we do investigation wali padhai
--> will see how to do investigation wli padhai from documentation

## How to declare variable
There are many ways but choose one which is easily readable
1. const accountId (preferred coz. easily readable)
2. const accountid
3. const account_Id
4. const account_id

## Let, const & Var
* const --> values can't be changed 
* let can be changed
* var can also be changed but it may face many issue (read below)
* we can declare var without using any keyword but this is nt recommended (e.g., accountCity = "Jaipur")
* declare but didn't assign anything -> gives undefine output (e.g., let accountState;)

* to declare constant -> use 'const' keyword only
* to declare variable -> two way: 'let' & 'var'
   {} -> they are called scope

* but now we don't use 'var' coz. var didn't have control over scope i.e., if someone use the same variable name under scope (e.g., inside loops) then it changes all the variable name.