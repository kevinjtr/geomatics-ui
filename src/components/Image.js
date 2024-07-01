export default function Image({src, ...rest}){
    return <img src={process.env.PUBLIC_URL + src} {...rest}/>
}