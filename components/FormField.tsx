import { NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputFocusEventData, TouchableOpacity, View, Image, KeyboardTypeOptions } from 'react-native'
import React, { useEffect, useState } from 'react'
// import {  } from 'expo-image';
import images from '@/constants/images';
import icons from '@/constants/icons';


interface FormFieldProps {
    title: string,
    placeholder: string,
    value: string,
    handleChange: (value: string) => void,
    onBlur: (value: NativeSyntheticEvent<TextInputFocusEventData>) => void,
    onFocus: (value: NativeSyntheticEvent<TextInputFocusEventData>) => void,
    conatinerStyles: string,
    keyboardType?: KeyboardTypeOptions
}

const FormField: React.FC<FormFieldProps> = ({
    title,
    placeholder,
    value,
    handleChange,
    onBlur,
    onFocus,
    conatinerStyles,
    keyboardType = 'default',
    ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    

  return (
      <View className={`space-y-2 ${conatinerStyles}`}>
          <Text className="text-xl mb-2 text-gray-100 font-pmedium">{title}</Text>
          
          <View className={`w-full h-16 px-4 bg-black-100 bg-opacity-50 border-2 ${!isFocused ? 'border-black-200' : 'border-secondary'}
            rounded-2xl  flex flex-row items-center`}>
              <TextInput
                  keyboardType={keyboardType}
                  className="flex-1 text-white font-psemibold text-xl"
                  value={value}
                  placeholder={placeholder}
                  placeholderTextColor="#7b7b8b"
                  onChangeText={handleChange}
                  onBlur={() => {
                    onBlur
                    setIsFocused(false)
                  }}
                  onFocus={() => {
                    onFocus
                    setIsFocused(true)
                  }}
                  secureTextEntry={title === 'Password' && !showPassword}
                  {...props}
              />
              {title === 'Password' && (
                  <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                  >
                      <Image
                          source={showPassword ? icons.eye : icons.eyeHide}
                          tintColor="#f97316"
                          className='w-6 h-6'
                      />
                  </TouchableOpacity>
              )}
          </View>
    </View>
  )
}

export default FormField
