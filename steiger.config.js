import fsd from '@feature-sliced/steiger-plugin'
import { defineConfig } from 'steiger'

export default defineConfig([
  ...fsd.configs.recommended,
  {
    rules: {
      // Каждая секция лендинга — отдельный виджет, даже если используется один раз.
      // Это осознанно: так секции делятся между разработчиками без конфликтов.
      'fsd/insignificant-slice': 'off',
    },
  },
])
