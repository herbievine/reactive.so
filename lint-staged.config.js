module.exports = {
    // this will check Typescript files
    "**/*.(ts|tsx)": () => "bun x tsc --noEmit",

    // This will lint and format TypeScript and JavaScript files
    "**/*.(ts|tsx|js)": filenames => [
        `bun x eslint --fix ${filenames.join(" ")}`,
        `bun x prettier --write ${filenames.join(" ")}`,
    ],

    // this will Format MarkDown and JSON
    "**/*.(md|mdx|json)": filenames =>
        `bun x prettier --write ${filenames.join(" ")}`,
};
