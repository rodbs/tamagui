import { onConfiguredOnce } from './conf'
import { getAllSelectors } from './helpers/insertStyleRule'

onConfiguredOnce((conf) => {
  if (globalThis['Tamagui']) {
    return
  }
  globalThis['Tamagui'] = {
    ...conf,
    get allSelectors() {
      return getAllSelectors()
    },
  }
})
