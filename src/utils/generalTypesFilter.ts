import uniq from 'lodash/uniq';

export const generalJSTypesRegex = /number|string|null|unknown|undefined|object|blob/;

export const generalTypesFilter = (imports: string[] = []) =>
  uniq(
    imports.filter(
      imp => imp && !generalJSTypesRegex.test(imp.toLocaleLowerCase())
    )
  );
