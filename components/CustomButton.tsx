import React from 'react'
import {  ActivityIndicator, Text, TouchableOpacity } from 'react-native'


interface CustomButtonProps {
    title: string,
    onPress: () => void,
    containerStyles?: string,
    textStyles?: string,
    disabled?: boolean
}

const CustomButton: React.FC<CustomButtonProps> = ({title, onPress, containerStyles, textStyles, disabled}) => {
    return (

        <TouchableOpacity
            className={`bg-orange-500 rounded-xl justify-center items-center flex-row ${containerStyles}`}
            onPress={onPress}
            activeOpacity={.7}
            disabled={disabled}
      >
            <Text className={`text-primary ${textStyles}`}>{title}</Text>

            {disabled && (
                <ActivityIndicator size="small" color="black"  />
            )}
       </TouchableOpacity>
     
  )
}

export default CustomButton