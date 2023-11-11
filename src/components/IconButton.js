import { Pressable } from "react-native"
import { Entypo } from '@expo/vector-icons';


const IconButton = ({onPress, name}) => {
  return (
    <Pressable onPress={onPress}>
        <Entypo name={name} size={24} color="white" />
    </Pressable>
  )
}

export default IconButton
