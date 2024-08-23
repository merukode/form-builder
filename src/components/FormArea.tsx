import React, { useState } from 'react';

const FormArea: React.FC = () => {
  const [components, setComponents] = useState<string[]>([]);

  const handleDrop = (e: React.DragEvent) => {
    const component = e.dataTransfer.getData('component');
    setComponents([...components, component]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="w-3/4 bg-white p-4 min-h-screen border-l-2 border-gray-200"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {components.map((component, index) => {
        if (component === 'input') {
          return <input key={index} type="text" className="border p-2 mb-2 w-full" placeholder="Input" />;
        } else if (component === 'textarea') {
          return <textarea key={index} className="border p-2 mb-2 w-full" placeholder="Textarea" />;
        } else if (component === 'checkbox') {
          return <div key={index} className="mb-2">
            <input type="checkbox" id={`checkbox-${index}`} />
            <label htmlFor={`checkbox-${index}`} className="ml-2">Checkbox</label>
          </div>;
        } else if (component === 'button') {
          return <button key={index} className="bg-blue-500 text-white p-2 rounded">Button</button>;
        }
        return null;
      })}
    </div>
  );
};

export default FormArea;
