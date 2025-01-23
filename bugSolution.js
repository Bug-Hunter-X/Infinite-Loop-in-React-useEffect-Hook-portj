```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: setCount only once after the component mounts
    const interval = setInterval(() => {
       setCount(prevCount => prevCount + 1);
    }, 1000); // Update every 1000ms

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return <div>Count: {count}</div>;
}
```