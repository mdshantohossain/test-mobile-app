import { Image } from "expo-image";
import { ImageProps, Text, View } from "react-native";

interface TabiconProps {
  icon: ImageProps;
  color: string;
  name?: string;
  focused: boolean
}

const TabIcon: React.FC<TabiconProps> = ({icon, color, name, focused}) => {
  return (
    <View className="items-center justify-center w-40 gap-1">
      <Image
        source={icon}
        tintColor={color}
        className='w-6 h-6'
        style={{width: 25, height: 25}}
      />
      <Text
        className={`{ fontFamily: focused ? 'font-psemibold' : 'font-pregular', color: focused ? color : 'gray' }`}
        style={{ color: color}}
      >
        {name}
      </Text>
    </View>
  )
}


export default TabIcon;