
import Image from 'next/image'
import MainLogo from '../../assets/images/iEdge-logo.png'
export const TitleLogo = () => {
  return (
    <Image
    src={MainLogo}
    width={200}
    alt="Logo"
  />
  )
}

export const TitleSm = ({ title }) => {
  return <h1 className='titleSm'>{title}</h1>
}
export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>
}












// export const TitleLogo = ({ title, caption, className }) => {
//   return (
//     <h1 className={`${className}  title-logo`}>
//       <span>{caption}</span>
//       {title}
//     </h1>
//   )
// }

// export const TitleSm = ({ title }) => {
//   return <h1 className='titleSm'>{title}</h1>
// }
// export const Title = ({ title, className }) => {
//   return <h1 className={`${className} title`}>{title}</h1>
// }
