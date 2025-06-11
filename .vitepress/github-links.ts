const REGEX = /#(\d+)/g;

export default function (md) {
  md.core.ruler.after("linkify", "github-links", (state) => {
    for (const token of state.tokens) {
      if (token.type === "inline" && Array.isArray(token.children)) {
        const newChildren = [];

        for (const child of token.children) {
          if (child.type === "text") {
            let last = 0;
            const text = child.content;

            for (const match of text.matchAll(REGEX)) {
              const [full, number] = match;
              const index = match.index;

              if (index > last) {
                newChildren.push({
                  type: "text",
                  content: text.slice(last, index),
                  level: child.level,
                });
              }

              newChildren.push({
                type: "html_inline",
                content: `<a href="https://github.com/Creators-of-Create/Create/issues/${number}">#${number}</a>`,
                level: child.level,
              });

              last = index + full.length;
            }

            if (last < text.length) {
              newChildren.push({
                type: "text",
                content: text.slice(last),
                level: child.level,
              });
            }
          } else {
            newChildren.push(child);
          }
        }

        token.children = newChildren;
      }
    }
  });
}