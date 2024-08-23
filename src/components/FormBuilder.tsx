import React from 'react';
import Sidebar from './Sidebar';
import FormArea from './FormArea';

const FormBuilder: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <FormArea />
    </div>
  );
};

export default FormBuilder;
