import { buttonClassName } from './buttonClassName'

function Content({ leftIcon, rightIcon, children }) {
  return (
    <>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </>
  )
}

/**
 * Кнопка для действий (открыть модалку, переключить слайд, отправить форму).
 * Остальные пропсы (onClick, disabled, aria-*) уходят в <button>.
 *
 * @param {object} props
 * @param {'primary' | 'secondary' | 'outline' | 'outline-light' | 'ghost'} [props.variant='primary']
 * @param {'sm' | 'md' | 'lg'} [props.size='md']
 * @param {boolean} [props.fullWidth]
 * @param {React.ReactNode} [props.leftIcon]
 * @param {React.ReactNode} [props.rightIcon]
 * @param {string} [props.className]
 *
 * @example <Button variant="secondary" onClick={open}>Watch</Button>
 */
export function Button({
  variant,
  size,
  fullWidth,
  className,
  leftIcon,
  rightIcon,
  children,
  type = 'button',
  ...rest
}) {
  return (
    <button
      type={type}
      className={buttonClassName({ variant, size, fullWidth, className })}
      {...rest}
    >
      <Content leftIcon={leftIcon} rightIcon={rightIcon}>
        {children}
      </Content>
    </button>
  )
}

/**
 * Та же кнопка, но это ссылка (<a>). Для навигации всегда используйте её, а не Button.
 * Пропсы — как у Button, плюс обязательный href.
 *
 * @param {object} props
 * @param {string} props.href
 * @param {'primary' | 'secondary' | 'outline' | 'outline-light' | 'ghost'} [props.variant='primary']
 * @param {'sm' | 'md' | 'lg'} [props.size='md']
 * @param {boolean} [props.fullWidth]
 * @param {React.ReactNode} [props.leftIcon]
 * @param {React.ReactNode} [props.rightIcon]
 * @param {string} [props.className]
 *
 * @example <ButtonLink href="#demo" size="lg">Try Oneflow free</ButtonLink>
 */
export function ButtonLink({
  variant,
  size,
  fullWidth,
  className,
  leftIcon,
  rightIcon,
  children,
  ...rest
}) {
  return (
    <a className={buttonClassName({ variant, size, fullWidth, className })} {...rest}>
      <Content leftIcon={leftIcon} rightIcon={rightIcon}>
        {children}
      </Content>
    </a>
  )
}
