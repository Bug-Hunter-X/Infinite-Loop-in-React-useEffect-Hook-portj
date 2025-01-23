# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by incorrect state update logic within the `useEffect` hook.

## Bug Description

The `MyComponent` component uses `useState` to manage a count.  The `useEffect` hook attempts to increment the count on every render, leading to an infinite loop because the dependency array is empty. 

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the browser console for errors or the component rendering continuously.