module.exports = {
  // Environment settings specify global variables that are predefined.
  env: {
    es2022: true, // Support for ECMAScript 2022 globals and syntax.
    jest: true, // Adds Jest testing framework globals like `describe` and `it`.
    node: true, // Enables Node.js global variables (e.g., `process`) and Node-specific rules.
  },

  // `extends` specifies a list of ESLint configurations to inherit from.
  extends: [
    'plugin:@typescript-eslint/recommended', // Base rules for TypeScript.
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // Rules that require type information.
    'plugin:prettier/recommended', // Integrates Prettier for auto-formatting with ESLint.
    'plugin:jest/recommended', // Recommended Jest rules.
    'plugin:import/errors', // Import plugin to validate correct import declarations.
    'plugin:import/warnings', // Import plugin to give warnings for import declarations.
    'plugin:import/typescript', // Adjust import plugin for TypeScript specifics.
    'plugin:promise/recommended', // Recommended rules for writing Promises.
    'plugin:jsdoc/recommended', // Recommended JSDoc rules for documentation.
  ],

  // Files and folders to ignore.
  ignorePatterns: ['.eslintrc.js'], // ESLint itself will ignore this config file.

  // Parser for parsing TypeScript, allowing ESLint to understand TypeScript syntax.
  parser: '@typescript-eslint/parser',

  // Configuration for the TypeScript parser.
  parserOptions: {
    project: 'tsconfig.json', // Path to TypeScript config file.
    sourceType: 'module', // ECMAScript modules mode.
    tsconfigRootDir: './', // Root directory for relative tsconfig paths.
  },

  // List of plugins that add rules or extend functionality of ESLint.
  plugins: [
    '@typescript-eslint', // TypeScript plugin with specific rules.
    'import', // Plugin to support linting of ES2015+ import/export syntax.
    'promise', // Plugin to enforce best practices for JavaScript promises.
    'jest', // Jest plugin to lint tests.
    'jsdoc', // JSDoc plugin to enforce documentation rules.
    'node', // Node plugin to enforce Node.js specific rules.
    'prettier', // Prettier plugin to integrate code formatting issues into ESLint.
  ],

  // Indicates that this is the root configuration, and ESLint should not search further.
  root: true,

  // Rules for code linting. Each rule can have severity and specific options.
  rules: {
    // TypeScript-specific rules
    '@typescript-eslint/adjacent-overload-signatures': 'error', // Group overloaded methods together.
    '@typescript-eslint/consistent-type-assertions': 'error', // Enforce consistent usage of type assertions (e.g., `<type>value`).
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowDirectConstAssertionInArrowFunctions: false, // Disallow `<type>value` as return in arrow functions.
        allowExpressions: false, // Require explicit return types on all functions.
        allowHigherOrderFunctions: false, // Disallow inferred types on higher-order functions.
        allowTypedFunctionExpressions: true, // Allow return type inference on typed function expressions.
      },
    ], // Require explicit return types on functions and methods.
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit', // Enforce explicit access modifiers on class members.
        overrides: {
          accessors: 'explicit', // Enforce explicit access modifiers on accessors.
          constructors: 'no-public', // Constructors should not have a `public` modifier.
          methods: 'explicit', // Enforce explicit access modifiers on methods.
          parameterProperties: 'explicit', // Enforce explicit access modifiers on parameter properties.
          properties: 'off', // Do not enforce access modifiers on regular properties.
        },
      },
    ], // Enforce explicit access modifiers on class members.
    '@typescript-eslint/explicit-module-boundary-types': 'error', // Require explicit return types for exported functions and class methods.
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi', // Semicolons as delimiters in multiline type declarations.
          requireLast: true, // Require delimiter at the end of the last member.
        },
        multilineDetection: 'brackets', // Multiline detection using brackets.
        singleline: {
          delimiter: 'semi', // Semicolons as delimiters in singleline type declarations.
          requireLast: false, // No delimiter required at the end of the last member in singleline.
        },
      },
    ], // Enforce consistent delimiters in type declarations.
    '@typescript-eslint/naming-convention': [
      'error',
      { format: ['camelCase'], selector: 'variableLike' }, // Enforce camelCase for variables and functions.
      { format: ['PascalCase'], selector: 'typeLike' }, // Enforce PascalCase for types like interfaces and classes.
    ], // Enforce specific casing for names.
    '@typescript-eslint/no-explicit-any': 'error', // Disallow the `any` type to encourage more specific types.
    '@typescript-eslint/no-floating-promises': 'error', // Require handling of promises to avoid unhandled promise rejections.
    '@typescript-eslint/no-inferrable-types': 'off', // Allow explicit types for values with easily inferred types.
    '@typescript-eslint/no-non-null-assertion': 'error', // Disallow non-null assertions (`!`) which can lead to unexpected null errors.
    '@typescript-eslint/no-unused-vars': 'off', // Turn off unused variable checks, rely on TypeScript's compiler instead.
    '@typescript-eslint/no-use-before-define': 'off', // Allow usage of variables before they are defined.
    '@typescript-eslint/no-var-requires': 'error', // Disallow `require` statements except in import statements.
    '@typescript-eslint/prefer-as-const': 'error', // Prefer `as const` over literal types where possible.
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always', // Require a space before anonymous function parentheses.
        asyncArrow: 'always', // Require a space before async arrow function parentheses.
        named: 'never', // Disallow space before named function parentheses.
      },
    ], // Enforce consistent spacing before function parentheses.
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowNullableObject: true, // Allow nullable objects in boolean expressions.
        allowNumber: true, // Allow numbers in boolean expressions.
        allowString: true, // Allow strings in boolean expressions.
      },
    ], // Enforce strict conditions in boolean expressions.
    '@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: true, // Require types on array destructuring.
        arrowParameter: true, // Require types on arrow function parameters.
        memberVariableDeclaration: true, // Require types on class member variables.
        objectDestructuring: true, // Require types on object destructuring.
        parameter: true, // Require types on all function parameters.
        propertyDeclaration: true, // Require types on property declarations.
        variableDeclaration: true, // Require types on variable declarations.
        variableDeclarationIgnoreFunction: false, // Include function variables in the type requirement.
      },
    ], // Enforce explicit type definitions where needed.

    // Import plugin rules
    'import/no-unresolved': 'error', // Ensure all imports point to a file/module that can be resolved.
    'import/order': [
      'error',
      {
        alphabetize: { caseInsensitive: false, order: 'asc' }, // Alphabetize imports.
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']], // Specify group order for import statements.
        'newlines-between': 'always', // Enforce new lines between import groups.
        pathGroups: [
          {
            group: 'external',
            pattern: '@nestjs/**', // Specific pattern for NestJS modules.
            position: 'before', // Position these before other external modules.
          },
          {
            group: 'internal',
            pattern: '@app/**', // Specific pattern for internal path aliases.
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'], // Exclude built-in types from path groups.
      },
    ], // Enforce a consistent order for module imports.

    // JSDoc rules
    'jsdoc/check-alignment': 'error', // Ensure JSDoc comments are aligned properly.
    'jsdoc/check-indentation': 'error', // Ensure JSDoc comments are indented consistently.

    // Other JavaScript rules
    'no-console': 'error', // Disallow the use of `console` statements in the code.
    'no-process-exit': 'error', // Disallow the use of `process.exit()` in Node.js.

    // Prettier rules
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true, // Use the Prettier config file for formatting options.
      },
    ], // Run Prettier as an ESLint rule and report differences.

    // Promise plugin rules
    'promise/catch-or-return': 'error', // Ensure promises either have a `catch` or `return`.
    'promise/no-callback-in-promise': 'error', // Avoid callbacks inside promises to prevent unexpected behavior.
    'promise/no-nesting': 'warn', // Warn against nesting promises unnecessarily.
    'promise/no-promise-in-callback': 'error', // Avoid using promises inside callbacks.
    'promise/param-names': 'error', // Ensure promise parameters are named `resolve` and `reject`.
  },

  // Additional settings for ESLint plugins and integrations.
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'], // Resolve `.ts` files for imports.
      },
      typescript: {
        alwaysTryTypes: true, // Try to resolve types for TypeScript imports.
        project: './tsconfig.json', // Path to TypeScript config for the resolver.
      },
    },
  },
};
