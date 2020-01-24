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

html, body, #__nuxt, #__layout, .wrapper, .index-page {
  display: flex;
  flex-direction: column;
  flex: 1;
}

button {
  cursor: pointer;
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
  margin-right: auto; /* 1 */
  margin-left:  auto; /* 1 */

  max-width: 700px; /* 2 */
  box-sizing: border-box;

  padding-right: 1rem; /* 3 */
  padding-left:  1rem; /* 3 */
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  list-style-type: none;
}
</style>
