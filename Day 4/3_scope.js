var global_x = 10;
console.log("global_x variable: " + global_x);

function foo()
{
    var local_x = 20
    console.log("global_x variable: " + global_x);
    console.log("local_x variable: " + local_x)
}

foo();

// below statement will generate error as local_x is local variable of foo function
// console.log("local_x variable: " + local_x)