import type { Sheet } from "./sheet"

export type SheetElement = React.ReactElement<any, typeof Sheet>

export interface SheetStackItem {
  id: string
  element: SheetElement
}
