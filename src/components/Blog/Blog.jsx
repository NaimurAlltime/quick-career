import React from "react";

const Blog = () => {
  return (
    <div className="mt-5 md:mx-24">
      <div class="w-3/5">
        <p class="text-2xl">
          <span class="text-2xl font-semibold">Question-1:</span> When should
          you use context API?
        </p>
        <p class="text-justify">
          <span class="text-2xl font-semibold">Answer: </span>
          Context API in React JS is an in-built API feature of React that
          manages props and states globally. Simply said, it is a way of passing
          the data from the parent to the child component it's final
          destination, without going through every other child component. Apply
          it sparingly because it makes component reuse more difficult. If you
          only want to avoid passing some props through many levels, component
          composition is often a simpler solution than context.
        </p>
      </div>
      <div class="mt-5 w-3/5">
        <p class="text-2xl">
          <span class="text-2xl font-semibold">Question-2: </span> What is a
          custom hook?
        </p>
        <p class="text-justify">
          <span class="text-2xl font-semibold">Answer: </span>A custom hook in
          React is a JavaScript function that allows you to extract and reuse
          stateful logic from a component, so that it can be shared between
          components.Custom hooks provide a way to encapsulate complex logic
          into a reusable function. Usually, if there is a requirement to add a
          feature.
        </p>
      </div>
      <div class="mt-5 w-3/5">
        <p class="text-2xl">
          <span class="text-2xl font-semibold">Question-3:</span> What is
          useRef?
        </p>
        <p class="text-justify">
          <span class="text-2xl font-semibold">Answer: </span>
          The useRef hook is the new addition in React 16.8. Before proceeding
          to this article there is a prerequisite to know about the ref in
          react. It allows you to access and modify the properties of a DOM
          element or any other value that needs to persist across renders,
          without triggering a re-render.
        </p>
      </div>
      <div class="mt-5 w-3/5">
        <p class="text-2xl">
          <span class="text-2xl font-semibold">Question-4: </span> What is
          useMemo?
        </p>
        <p class="text-justify">
          <span class="text-2xl font-semibold">Answer: </span> useMemo is a hook
          in React that allows you to memoize the result of a function so that
          it is only recomputed when one of its dependencies has changed. It is
          used to optimize the performance of a component by reducing
          unnecessary re-computations.
        </p>
      </div>
    </div>
  );
};

export default Blog;
