import { NO_IMAGE } from 'config/constants'

interface IProps{
  thumbnail:string
}

const ImageCategoriesItem = ({thumbnail}:IProps) => {
  return (
    <>
       <img src={thumbnail || NO_IMAGE} width="60" height="60" />
    </>
  )
}

export default ImageCategoriesItem
