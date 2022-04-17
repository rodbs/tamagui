import { MutableRefObject, useEffect, useRef } from 'react'
import { debounce } from 'tamagui'

type DisposeFn = () => void
type IntersectFn = (
  props: IntersectionObserverEntry & { dispose?: DisposeFn | null },
  didResize?: boolean
) => void | DisposeFn

export const useOnIntersecting = (
  ref: MutableRefObject<HTMLElement | null>,
  incomingCb: IntersectFn,
  options: IntersectionObserverInit = {
    threshold: 1,
  },
  mountArgs: any[] = []
) => {
  const cb = useRef<IntersectFn>()

  useEffect(() => {
    cb.current = incomingCb
  }, [incomingCb])

  // arrow keys
  useEffect(() => {
    const node = ref.current
    if (!node) return
    // only when carousel is fully in viewport
    let dispose: DisposeFn | null = null
    let lastEntry: any

    const io = new IntersectionObserver(([entry]) => {
      console.log(entry.isIntersecting)
      if (entry.isIntersecting) {
        lastEntry = new Proxy(entry, {
          get(target, key) {
            if (key === 'dispose') {
              return dispose
            }
            return Reflect.get(target, key)
          },
        })
        dispose?.()
        dispose = cb.current?.(lastEntry) || null
      } else {
        dispose?.()
      }
    }, options)

    const ro = new ResizeObserver(
      debounce(() => {
        if (!lastEntry) {
          return
        }
        dispose = cb.current?.(lastEntry, true) || null
      }, 150)
    )

    ro.observe(document.body)
    io.observe(node)

    return () => {
      dispose?.()
      ro.disconnect()
      io.disconnect()
    }
  }, [ref.current, ...mountArgs])
}
