import { TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  size?: number;
  color: string;
  style?: TextStyle;
}

const IonIcon = ({ name, size = 20, color, style }: Props) => {
  return (
    <Icon name={name} size={size} color={color} style={style} />
  )
}

export default IonIcon
