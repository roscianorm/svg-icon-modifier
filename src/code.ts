figma.showUI(__html__, { width: 300, height: 320 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'modify-icons') {
    const { color, size } = msg;

    const selectedNodes = figma.currentPage.selection;
    if (selectedNodes.length === 0) {
      figma.notify('Please select at least one frame or vector.');
      return;
    }

    // Function to recursively process nodes
    const processNode = (node: SceneNode) => {
      if (node.type === 'VECTOR') {
        // Change color
        if (color) {
          node.fills = [
            {
              type: 'SOLID',
              color: hexToRgb(color),
            },
          ];
        }
      } else if ('children' in node) {
        // If the node has children, process them recursively
        for (const child of node.children) {
          processNode(child);
        }

        // Resize the frame or group to fit its contents
        if (node.type === 'FRAME' || node.type === 'GROUP') {
          // Resize the frame or group
          if (size) {
            node.resize(size, size);
          }
        }
      }
    };

    // Process all selected nodes
    for (const node of selectedNodes) {
      processNode(node);
    }

    figma.notify('Icons updated successfully!');
  }

  if (msg.type === 'close') {
    figma.closePlugin();
  }
};

// Helper function to convert HEX color to RGB
function hexToRgb(hex: string) {
  const bigint = parseInt(hex.replace('#', ''), 16);
  return {
    r: ((bigint >> 16) & 255) / 255,
    g: ((bigint >> 8) & 255) / 255,
    b: (bigint & 255) / 255,
  };
}

// Helper function to calculate the bounding box of children
function getBoundingBox(children: readonly SceneNode[]) {
  let x1 = Infinity,
    y1 = Infinity,
    x2 = -Infinity,
    y2 = -Infinity;

  for (const child of children) {
    const { x, y, width, height } = child;
    x1 = Math.min(x1, x);
    y1 = Math.min(y1, y);
    x2 = Math.max(x2, x + width);
    y2 = Math.max(y2, y + height);
  }

  return {
    width: x2 - x1,
    height: y2 - y1,
  };
}
