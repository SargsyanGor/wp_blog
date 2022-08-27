export const pageView = (url:string) => {
    // @ts-ignore
    window.gtag('config', 'G-8YNHDF3B6X', {
        path_url: url,
    })
}