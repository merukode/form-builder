import React from "react";

const components = [
  { id: 'input', label: 'Input'},
  { id: 'textarea', label: 'Textarea'}, 
  { id: 'checkbox', label: 'Checkbox'}, 
  { id: 'button', label: 'Button'},
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/4 bg-gray-100 p-4">
    <h3 className="text-lg font-bold mb-4">Components</h3>
    {components.map((component) => (
      <div
        key={component.id}
        className="p-2 bg-white mb-2 rounded shadow cursor-pointer"
        draggable
        onDragStart={(e) => e.dataTransfer.setData('component', component.id)}
      >
        {component.label}
      </div>
    ))}
  </div>
  );
};

export default Sidebar;