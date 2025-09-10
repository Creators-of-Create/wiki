import MarkdownIt from "markdown-it";

const DEFAULT_ORG = "Creators-of-Create";
const DEFAULT_REPO = "Create";
const REGEX =
  /([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)#(\d+)|([A-Za-z0-9_.-]+)?#(\d+)/g;

export default function (md: MarkdownIt) {
  md.core.ruler.after("linkify", "github-links", (state) => {
    for (const token of state.tokens) {
      if (token.type === "inline" && Array.isArray(token.children)) {
        const newChildren = [];

        for (const child of token.children) {
          if (child.type === "text") {
            let last = 0;
            const text = child.content;

            for (const match of text.matchAll(REGEX)) {
              const [
                fullMatch,
                matchedOrg1,
                matchedRepo1,
                matchedNum1,
                matchedOrg2,
                matchedNum2,
              ] = match;
              console.log(match);
              const index = match.index;

              if (index > last) {
                newChildren.push({
                  type: "text",
                  content: text.slice(last, index),
                  level: child.level,
                });
              }

              const org = matchedOrg1 ?? matchedOrg2 ?? DEFAULT_ORG;
              const repo = matchedRepo1 ?? DEFAULT_REPO;
              const number = matchedNum1 ?? matchedNum2;

              newChildren.push({
                type: "html_inline",
                content: `<a href="https://github.com/${org}/${repo}/issues/${number}">${fullMatch}</a>`,
                level: child.level,
              });

              last = index + fullMatch.length;
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
