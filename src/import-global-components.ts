import Vue from 'vue';

export function importGlobalComponents() {
  automaticImport();
}

function automaticImport() {
  const requireComponent = require.context(
    './components-base',
    true,
    /\/app-[-a-z0-9]+.(tsx|vue)/
  );

  for (const fileName of requireComponent.keys()) {
    let baseComponentConfig = requireComponent(fileName);
    baseComponentConfig = baseComponentConfig.default || baseComponentConfig;
    const componentName = baseComponentConfig.extendOptions.name;

    if (!componentName) {
      return;
    }
    const baseComponentName = fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '');

    Vue.component(baseComponentName, baseComponentConfig);
  }
}
