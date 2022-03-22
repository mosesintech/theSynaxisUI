import NextLink from 'next/link'

// a link component that receives a url, text, and classes
// returns <Link href={url}><a className={...classes}>{text}</a></Link> if app link
// returns <a href={url} classname={...classes}>{text}</a> if external link

export default function Link(props) {
    const { url, text, classes } = props;
    return (
        <>
            <NextLink href={url}><a className={...classes}>{text}</a></NextLink>
        </>
    )
}