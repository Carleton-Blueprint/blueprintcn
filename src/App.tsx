import { useState } from 'react';
import { cn } from './lib/utils';

const modules = import.meta.glob(
  [
    './components/**/*.tsx',
    '!./components/ui/**/*.tsx', // exclude everything inside components/ui
  ],
  {
    eager: true,
  }
);

const components = Object.entries(modules).map(([path, module]) => {
  const nameMatch = path.match(/([^/]+)\.tsx$/);
  const name = nameMatch ? nameMatch[1] : 'UnnamedComponent';
  return {
    name,
    Component: (module as { default: React.ComponentType }).default,
  };
});

console.log('components', components);

function App() {
  const [selectedName, setSelectedName] = useState(components[0]?.name || null);
  const SelectedComponent = components.find(
    (c) => c.name === selectedName
  )?.Component;

  return (
    <div className="p-8 flex">
      <div className="w-1/4">
        <h1 className="text-4xl font-bold text-blueprint mb-4">blueprintcn</h1>
        <h2 className="text-lg mb-2">Components</h2>
        <div className="flex flex-col items-start space-y-2 mb-4">
          {components.map(({ name }) => (
            <button
              key={name}
              className={cn(selectedName === name ? 'underline' : '')}
              onClick={() => setSelectedName(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      <div className="w-3/4 flex items-center justify-center">
        {SelectedComponent ? <SelectedComponent /> : <p>Select a component</p>}
      </div>
    </div>
  );
}

export default App;
