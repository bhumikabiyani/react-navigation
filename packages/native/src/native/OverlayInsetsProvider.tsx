import type { OverlayInsetsProviderProps } from './types';
import { View } from './View';

/**
 * View that provides additional safe area insets to its content.
 *
 * Only supported on iOS and Android.
 */
export function OverlayInsetsProvider({
  children,
  style,
}: OverlayInsetsProviderProps) {
  return <View style={style}>{children}</View>;
}
