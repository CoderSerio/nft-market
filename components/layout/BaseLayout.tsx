import { FunctionComponent } from 'react';
import FunctionComponentProps from '../type';
import Navbar from '../navbar';

// 为什么使用箭头函数而不是使用function?
// 因为箭头函数可以标注类型

const BaseLayout: FunctionComponent<FunctionComponentProps> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      <div className="py-16 bg-gray-50 overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </>
  );
};

export default BaseLayout;
