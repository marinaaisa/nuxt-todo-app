<template>
  <div class="wrapper">
    <nuxt />
  </div>
</template>
<style lang="scss">
html {
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  font-weight: 400;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: var(--text-color);
  background-color: var(--bg-color);
  height: 100%;
}

:focus {
  outline-color: var(--primary);
  outline: -webkit-focus-ring-color auto 3px;
}

html, body, #__nuxt, #__layout, .wrapper, .index-page {
  display: flex;
  flex-direction: column;
  flex: 1;
}

button {
  cursor: pointer;
}

fieldset {
  border: 0;
  padding: 0;

  legend {
    opacity: 0;
    position: absolute;
  }
}

*,
*:before,
*:after {
  margin: 0;
}

h1 {
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  font-weight: 600;
  color: var(--primary);
  font-size: 2rem;
}

.wrapper {
  margin-top: 3rem;
  width: 100%;
  margin-right: auto;
  margin-left:  auto;
  max-width: 700px;
  box-sizing: border-box;
  padding-right: 1rem;
  padding-left:  1rem;
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  list-style-type: none;
}
</style>
