import { type App, type Plugin } from 'vue';
import { Button } from './components/button';
import { Grid } from './components/grid';
import { Input } from './components/input';
import { Select } from './components/select';
import { Switch } from './components/switch';

export * from './components/button';
export * from './components/grid';
export * from './components/input';
export * from './components/select';
export * from './components/switch';

const install: Plugin = (app: App) => {
  Button(app)
  Grid(app)
  Input(app)
  Select(app)
  Switch(app)
}

export default { install }