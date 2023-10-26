interface RootLayoutProps {
  children: React.ReactNode
}
export default function layout({ children }: RootLayoutProps) {
  return <>{children}</>
}
