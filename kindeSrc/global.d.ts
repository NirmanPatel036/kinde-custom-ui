// Custom type declarations for modules not covered by @types/react-dom@18
// react-dom/server.browser is a browser-optimised subpath export of react-dom
// that @types/react-dom@18 does not include a declaration for.
declare module "react-dom/server.browser" {
    export { renderToString, renderToStaticMarkup } from "react-dom/server";
}
