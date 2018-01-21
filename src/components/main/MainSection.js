import React from 'react';

import TodosHead from './TodosHead';
import TodosTasks from './TodosTasks';
import AddTask from './AddTask';

const MainSection = () => (
   <main className="todos">
      <TodosHead />
      <TodosTasks />
      <AddTask />
   </main>
);

export default MainSection;