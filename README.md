# TypeScript Type Error: Passing Array to Function Expecting String

This repository demonstrates a common type error in TypeScript where a function expecting a string argument is passed an array of strings.  The `bug.ts` file contains the erroneous code, while `bugSolution.ts` shows the corrected version.

The error arises from a mismatch between the function's expected type and the actual type of the argument provided.  This is a fundamental concept in statically typed languages like TypeScript, where type checking helps prevent runtime errors.

## How to Reproduce
1. Clone the repository.
2. Navigate to the project directory.
3. Compile and run `bug.ts` (you'll see a type error).
4. Compile and run `bugSolution.ts` (this will work correctly).