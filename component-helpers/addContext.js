import _Object$assign from "babel-runtime/core-js/object/assign";
export default function addContext(Component, contextTypes) {
    Component.contextTypes = Component.contextTypes || {};
    _Object$assign(Component.contextTypes, contextTypes);

    return Component;
}