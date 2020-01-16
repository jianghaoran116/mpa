import rum from './design-patterns';
import liquors from './arith-metic';
export { default as curlyhairWheel } from './wheel';

export default {
  ...rum,
  ...liquors,
}

export const wine = {
  ...rum,
  ...liquors,
}
