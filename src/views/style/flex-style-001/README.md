### question

```
.simple-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &-top {
    padding: 10px;
    min-height: 90px;
    background: #fff;
  }

  &-content {
    flex: 1;
    background: #fff;
    //如果内容太长, 会产生滚动条
    //overflow: scroll;

    //如果内容太长, 会
    overflow: visible; //默认
    padding: 10px;
    margin: 0 0 0 0;
  }

  &-bottom {
    padding: 0 20px;
    height: 55px;
    background: #fff;
  }
}
```

when .simple-page-content is too large, why does .simple-page get a scrollbar?

### answer

because the middle flex child (`.simple-page-content`) is letting its **intrinsic content height** grow, and that forces the parent (`.simple-page`) to grow/overflow. In a column flex layout the usual cure is `min-height: 0` on the flex child (so it can shrink) and `overflow: auto` (so the child scrolls internally instead of pushing the parent).

### Why this happens (concise)

- `.simple-page { display:flex; flex-direction:column }` → children are flex items.
- By default flex items use `min-height: auto`, which means **they won't be smaller than their content**.
- If the content inside `.simple-page-content` is taller than the available space, the flex item will expand to fit the content (rather than shrink), so the parent ends up larger and a scrollbar appears on the page/container.
- Also if `.simple-page`'s `height:100%` doesn't resolve to a fixed height (ancestors not sized), the parent may just grow in normal flow and the page scrolls.