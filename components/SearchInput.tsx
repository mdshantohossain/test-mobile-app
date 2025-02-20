import icons from "@/constants/icons";
import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";







const SearchInput = () => {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);


    return (
        <View className="space-y-2">
                  
                  <View className={`w-full h-16 px-4 bg-black-100 bg-opacity-50 border-2 ${!isFocused ? 'border-black-200' : 'border-secondary'}
                    rounded-2xl  flex flex-row items-center`}>
                      <TextInput
                          className="flex-1 text-white font-psemibold text-xl"
                          value={query}
                          placeholder="Search for a movie"
                          placeholderTextColor="#7b7b8b"
                          onChangeText={(text) => setQuery(text)}
                          onBlur={() => {
                            setQuery('')
                            setIsFocused(false)
                          }}
                        onFocus={() => {
                            setQuery('');
                            setIsFocused(true)
                        }}
                />   
                
                <TouchableOpacity>
                            <Image
                            source={query ? icons.cancel : icons.search}
                            tintColor="#f97316"
                            className='w-6 h-6'
                            />
                </TouchableOpacity>

                 </View>

        </View>
    )
}




export default SearchInput;