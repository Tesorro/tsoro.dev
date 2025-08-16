export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-6 text-center text-sm text-muted-foreground">
      © Zaurbek Tsoroev, {year}
    </footer>
  )
}

