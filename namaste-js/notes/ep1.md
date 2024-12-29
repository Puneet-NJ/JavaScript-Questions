# How JS Works & EC (ep-1)

**Everything in JavaScript happens inside the Execution Context**

Hence, whenever a JavaScript code is run a Execution Context is created(Global EC). This EC has 2 parts to it i.e. Memory and Code part

| **Memory** | **Code** |
| ---------- | -------- |
|            |          |
|            |          |

Here,

- Memory part: Stores a key-value pair of all the variable and function declaration. This is also known as Variable Environment.
- Code part: This is where the code is actually executed. This is also known as Thread of Execution.

How is the code executed?

JavaScript is synchronous, single-threaded language i.e. the code execution is handled only by a single thread and is synchronous i.e. executed in a particular order.
