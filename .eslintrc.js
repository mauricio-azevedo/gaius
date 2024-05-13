module.exports = {
  env: {
    node: true, // Defines `node` as the environment to provide node global variables and Node.js scoping.
    jest: true, // Defines `jest` as the environment to add all Jest testing global variables.
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Extends the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // Adds type-checking rules from @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
  ],
  ignorePatterns: ['.eslintrc.js'], // Ignores the ESLint config file itself from linting
  parser: '@typescript-eslint/parser', // The parser that allows ESLint to lint TypeScript code
  parserOptions: {
    project: 'tsconfig.json', // Path to the TypeScript configuration file
    sourceType: 'module', // Allows using import/export statements
    tsconfigRootDir: __dirname, // Helps to find the project root
  },
  plugins: ['@typescript-eslint/eslint-plugin'], // Uses the TypeScript plugin for ESLint
  root: true, // Marks the current directory as the root of the ESLint configuration (prevents parent configurations from being used)
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error', // Enforces that members of an overloaded function are grouped together.
    '@typescript-eslint/consistent-type-assertions': 'error', // Enforces the use of consistent type assertions.
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowDirectConstAssertionInArrowFunctions: true, // Allows direct const assertions in arrow functions without explicit return types.
        allowExpressions: true, // Allows function expressions with inferred return types.
        allowHigherOrderFunctions: true, // Allows higher-order functions with inferred return types.
        allowTypedFunctionExpressions: true, // Allows typed function expressions with inferred return types.
      },
    ], // Enforces explicit return types on functions and class methods.
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit', // Requires explicit accessibility modifiers on class members.
        overrides: {
          constructors: 'no-public', // Does not require public modifiers on constructors.
        },
      },
    ], // Enforces explicit accessibility modifiers on class properties and methods.
    '@typescript-eslint/explicit-module-boundary-types': 'error', // Enforces explicit return and argument types on exported functions' and classes' public class methods.
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi', // Requires a semicolon at the end of multiline members.
          requireLast: true, // Requires a delimiter at the end of the last member in multiline.
        },
        singleline: {
          delimiter: 'semi', // Requires a semicolon at the end of singleline members.
          requireLast: false, // Does not require a delimiter at the end of the last member in singleline.
        },
        multilineDetection: 'brackets', // Use a semicolon as a delimiter in multiline members that have brackets.
      },
    ], // Enforces consistent member delimiter style in interfaces and type literals.
    '@typescript-eslint/naming-convention': [
      'error',
      { format: ['camelCase'], selector: 'variableLike' }, // Enforces camelCase for variable-like declarations.
      { format: ['PascalCase'], selector: 'typeLike' }, // Enforces PascalCase for type-like declarations.
    ], // Enforces naming conventions for variables, classes, types, etc.
    '@typescript-eslint/no-explicit-any': 'warn', // Warns against using the `any` type.
    '@typescript-eslint/no-floating-promises': 'error', // Requires that promises are handled appropriately.
    '@typescript-eslint/no-inferrable-types': 'off', // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
    '@typescript-eslint/no-non-null-assertion': 'error', // Disallows non-null assertions using the `!` postfix operator.
    '@typescript-eslint/no-unused-vars': 'off', // Disables the rule for no unused variables.
    '@typescript-eslint/no-use-before-define': 'off', // Disallows the use of variables before they are defined.
    '@typescript-eslint/no-var-requires': 'error', // Disallows the use of `require` statements except in import statements.
    '@typescript-eslint/prefer-as-const': 'error', // Enforces the use of `as const` over literal type.
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always', // Requires a space before the parentheses of anonymous functions.
        asyncArrow: 'always', // Requires a space before the parentheses of async arrow functions.
        named: 'never', // Disallows a space before the parentheses of named functions.
      },
    ], // Enforces consistent spacing before function parentheses.
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowAny: false, // Disallows any type in boolean expressions.
        allowNullableBoolean: false, // Disallows nullable boolean types in boolean expressions.
        allowNullableNumber: false, // Disallows nullable number types in boolean expressions.
        allowNullableObject: false, // Disallows nullable object types in boolean expressions.
        allowNullableString: false, // Disallows nullable string types in boolean expressions.
        allowNumber: false, // Disallows number types in boolean expressions.
        allowString: false, // Disallows string types in boolean expressions.
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false, // Allows the rule to run without strict null checks if the user knows what they are doing.
      },
    ], // Enforces strict boolean expressions.
    '@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: true, // Requires explicit types for array destructuring.
        arrowParameter: true, // Requires explicit types for parameters in arrow functions.
        memberVariableDeclaration: true, // Requires explicit types for member variable declarations.
        objectDestructuring: true, // Requires explicit types for object destructuring.
        parameter: true, // Requires explicit types for parameters in functions and methods.
        propertyDeclaration: true, // Requires explicit types for property declarations.
        variableDeclaration: true, // Requires explicit types for variable declarations.
        variableDeclarationIgnoreFunction: false, // Does not ignore functions in variable declarations.
      },
    ], // Enforces explicit type definitions for variables and members.
    'import/no-unresolved': 'error', // Ensures all imported modules can be resolved to actual modules/files.
    'import/order': [
      'error',
      {
        alphabetize: { caseInsensitive: false, order: 'asc' }, // Requires imports to be alphabetized.
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']], // Specifies the order of import groups.
        'newlines-between': 'always', // Requires new lines between import groups.
        pathGroups: [
          {
            group: 'external',
            pattern: '@nestjs/**', // Custom group for NestJS modules.
            position: 'before', // Place NestJS imports before other external imports.
          },
          {
            group: 'internal',
            pattern: '@app/**', // Custom group for app-specific aliases.
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'], // Excludes built-in types from path groups.
      },
    ], // Enforces a convention in the order of require()/import statements.
    'jsdoc/check-alignment': 'error', // Ensures JSDoc comments are aligned.
    'jsdoc/check-indentation': 'error', // Ensures JSDoc comments are properly indented.
    'no-console': 'warn', // Warns or errors on console statements depending on the environment.
    'no-process-exit': 'error', // Disallows the use of `process.exit()`.
    'no-undef': 'off', // Turned off because TypeScript handles undefined variables.
    'no-unused-vars': 'off', // Turned off because @typescript-eslint/no-unused-vars is used instead.
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true, // Use Prettier options from .prettierrc.
      },
    ], // Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
    'promise/catch-or-return': 'error', // Ensures each promise has a catch() or return.
    'promise/no-callback-in-promise': 'error', // Avoids combining callbacks and promises.
    'promise/no-nesting': 'warn', // Avoids nested promises (`.then` inside another `.then`).
    'promise/no-promise-in-callback': 'error', // Avoids using promises inside of callbacks.
    'promise/param-names': 'error', // Ensures promise parameters are named `resolve` and `reject`.
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // Tries to resolve types under `<root>@types` if this is set.
        project: './tsconfig.json', // Path to the TypeScript config to use.
      },
    },
  },
};
