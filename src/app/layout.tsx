import '@/app/sass/main/style.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='bg-coffee dark'>
        <div>{children}</div>
      </body>
    </html>
  );
}
