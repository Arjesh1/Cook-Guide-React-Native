import { Pressable } from "react-native"
import { Entypo } from '@expo/vector-icons';


const IconButton = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
        <Entypo name="home" size={24} color="white" />
    </Pressable>
  )
}

export default IconButton
