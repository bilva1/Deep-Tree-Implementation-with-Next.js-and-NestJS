// pages/index.js
import { useEffect, useState } from 'react';
import { createTree, getTree } from '../services/treeService';

export default function Home() {
  const [tree, setTree] = useState(null);

  useEffect(() => {
    async function fetchTree() {
      const data = await getTree();
      setTree(data);
    }
    fetchTree();
  }, []);

  const handleCreateTree = async () => {
    await createTree(10); // depth 10
    const data = await getTree();
    setTree(data);
  };

  const renderTree = (node) => {
    if (!node) return null;
    return (
      <ul>
        <li>{node.name}</li>
        {node.children && node.children.map((child) => renderTree(child))}
      </ul>
    );
  };

  return (
    <div>
      <button onClick={handleCreateTree}>Create Tree</button>
      {tree && renderTree(tree)}
    </div>
  );
}
