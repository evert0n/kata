// Add "parent" links to a tree.
// For the root, parent should be null.
addParentLinks(tree, parent) {
  if (!tree) {
    return;
  }
  tree.parent = parent;
  addParentLinks(tree.left);
  addParentLinks(tree.right);
}

// Clones left, right, value, and parent
clone(tree) {
  if (!tree) {
    return null;
  }
  let leftClone = clone(tree.left);
  let rightClone = clone(tree.right);
  let answer = {
    parent: null,
    value: tree.value,
    left: leftClone,
    right: rightClone,
  };
  if (leftClone) {
    leftClone.parent = answer;
  }
  if (rightClone) {
    rightClone.parent = answer;
  }
  return answer;
}
