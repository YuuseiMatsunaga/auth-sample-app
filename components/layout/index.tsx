type LayoutProps = {
    title: string
    children: JSX.Element | JSX.Element[]
}

export const Layout = (props: LayoutProps) => {
    return (
      <html>
        <head>
            <title>{props.title}</title>
        </head>
        <body>{props.children}</body>
      </html>
    )
}