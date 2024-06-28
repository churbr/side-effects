# Side Effects

### What are Side Effects?

Side effects are 'tasks' or anything that is not related to a React component or anything that is outside the scope of React.

An example would be an HTTP Request to an external API, or a localStorage in your browser because Local Storage is a Web API and not a part of React universe.

## Notes:

- There are 2 arguments in useEffect() hook. First is the side effect function, second is a dependecy
- If you put an empty array [] in the second argument of useEffect() hook. It will only execute the side effect function after component is done

```javascript
useEffect(() => {
  // Side effect code here...
}, []);
```

- If the dependecy array has values. React will check those dependency array specified and it will only execute the side effect function everytime those dependency values change.

```javascript
useEffect(() => {
  // Side effect code here...
}, [dependency1, dependency2]);
```

- If there is no value(s) specified in the dependency array, it doesn't have to wait for a value to change to re-execute the side effect function. Hence, the side effect function will only execute once.
- If you omit the dependency array (_not specifying the 2nd argument_), it will still execute the side effect function after every app component render cycle. But be careful, because this can result into an infinite loop if you have a state updating function within it

```javascript
useEffect(() => {
  // Side effect code here...
}); // Not specifying the second argument
```

- **Do not use useEffect() hook inside a component function!** You can only use this hook inside a Component, but not inside the Component's functions. Or in other words, they must only be used in the root level of your Component function

- Do not overuse useEffect() hook, it will cause some performance issues. Remember, this is an extra execution cycle. Not all side effects require the usage of useEffect() because using it unnecessarily is a bad practice.
- Remember that useEffect will run after the component has finished execution, which is after the JSX code has been returned
