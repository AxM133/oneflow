import { useId, useRef, useState } from 'react'

import { cn } from '@/shared/lib/cn'

import { DEFAULT_TAB_ID, PRODUCT_TABS } from '../config/tabs'
import { ProductTabPanel } from './ProductTabPanel'
import {
  AnalyzeIcon,
  CollaborateIcon,
  CreateIcon,
  IntegrateIcon,
  ManageIcon,
  SignIcon,
} from './TabIcons'

/** Ключ icon из config/tabs.js → компонент иконки */
const TAB_ICONS = {
  create: CreateIcon,
  collaborate: CollaborateIcon,
  sign: SignIcon,
  manage: ManageIcon,
  analyze: AnalyzeIcon,
  integrate: IntegrateIcon,
}

/** Клавиши для переключения табов с клавиатуры (как требует WAI-ARIA для role="tablist") */
const KEY_TO_INDEX = {
  ArrowRight: (index) => index + 1,
  ArrowLeft: (index) => index - 1,
  Home: () => 0,
  End: (_, length) => length - 1,
}

/**
 * Голубая панель с табами. Макет: 1152 × 600, шапка с табами 121px + линия, контент с отступом 96px.
 * Доступность: role="tablist"/"tab"/"tabpanel", aria-selected, стрелки ← →, Home, End.
 * < lg: табы прокручиваются горизонтально.
 *
 * @param {object} props
 * @param {typeof PRODUCT_TABS} [props.tabs]
 * @param {string} [props.defaultTabId] какой таб открыт сначала
 */
export function ProductTabs({ tabs = PRODUCT_TABS, defaultTabId = DEFAULT_TAB_ID }) {
  const [activeId, setActiveId] = useState(defaultTabId)
  const tabRefs = useRef([])
  const baseId = useId()

  const activeIndex = Math.max(
    0,
    tabs.findIndex((tab) => tab.id === activeId),
  )
  const activeTab = tabs[activeIndex]
  const panelId = `${baseId}-panel`
  const tabId = (tab) => `${baseId}-tab-${tab.id}`

  const handleKeyDown = (event) => {
    const getIndex = KEY_TO_INDEX[event.key]
    if (!getIndex) return

    event.preventDefault()
    const nextIndex = (getIndex(activeIndex, tabs.length) + tabs.length) % tabs.length
    setActiveId(tabs[nextIndex].id)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <div className="overflow-hidden rounded-lg bg-sky-100 text-ink-900">
      <div
        role="tablist"
        aria-label="Oneflow features"
        onKeyDown={handleKeyDown}
        className="flex gap-10 overflow-x-auto border-b border-sky-300 px-6 sm:px-10 lg:justify-between lg:gap-0 lg:px-24"
      >
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTab.id
          const Icon = TAB_ICONS[tab.icon]

          return (
            <button
              key={tab.id}
              ref={(element) => {
                tabRefs.current[index] = element
              }}
              type="button"
              role="tab"
              id={tabId(tab)}
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(tab.id)}
              className="group relative flex shrink-0 flex-col items-center pt-8 pb-[35px]"
            >
              <Icon className="size-6" />
              <span className="mt-1.5 text-[17px] leading-6 tracking-[0.02em]">{tab.label}</span>
              {/* Индикатор активного таба — 2px над линией-разделителем */}
              <span
                aria-hidden
                className={cn(
                  'absolute inset-x-0 bottom-px h-0.5 bg-ink-900 transition-opacity duration-200',
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-30',
                )}
              />
            </button>
          )
        })}
      </div>

      <ProductTabPanel id={panelId} labelledBy={tabId(activeTab)} tab={activeTab} />
    </div>
  )
}
