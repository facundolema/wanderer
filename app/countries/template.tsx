import NavigationDrawer from '@/components/NavigationDrawer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex'>
      <NavigationDrawer />
      <div className='flex-1 p-16'>{children}</div>
    </main>
  )
}
