import CustomButton from '@/components/CustomButton'
import FormField from '@/components/FormField'
import images from '@/constants/images'
import { useGlobalContext } from '@/contexts/GlobalProvider'
import { signIn } from '@/lib/appwrite'
import { isLoading } from 'expo-font'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'

const SignIn = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);  

  const {setIsLoggedIn} = useGlobalContext();


  // form submit
   const handleFormSubmit = async () => {
     setIsSubmitting(true);
     try {
       if ( formValues.email && formValues.password) {
         const result = await signIn({ email: formValues.email, password: formValues.password });
 
         if (!result) throw Error;
         setIsLoggedIn(result);

         router.replace('/home');
       }
     } catch (error) {
       console.error(error);
     } finally {
       setIsSubmitting(false); 
    }
     
   }


  return (
    <SafeAreaView className="bg-primary h-full">
    
      <ScrollView
        // contentContainerStyle={{ height: '100%' }}
      >
        <View className="w-full justify-center min-h-[100vh] px-4 my-6">
          
          <Image
            source={images.logo}
            style={{ width: 115, height: 35 }}
            // className="w-[116px] h-[35px]"
            resizeMode='contain'
          />
         

          <Text className="text-2xl text-white font-bold  mt-10">Log in to Aora</Text>

          <FormField
            title="Email"
            placeholder="Enter your email"
            value={formValues.email}
            handleChange={(value) => setFormValues({ ...formValues, email: value })}
            onBlur={(value) => console.log(value)}
            onFocus={(value) => console.log(value)}
            conatinerStyles="mt-5"
            keyboardType="email-address"
          />

             <FormField
                title="Password"
                placeholder="Enter your password"
                value={formValues.password}
                handleChange={(value) => setFormValues({ ...formValues, password: value })}
                onBlur={(value) => console.log(value)}
                onFocus={() => console.log('focus')}
                conatinerStyles="mt-5"
                keyboardType="password"
                
          />
          

          <CustomButton
            title='Sign in'
            onPress={handleFormSubmit}
            containerStyles='p-3 mt-10'
            textStyles='text-xl font-bold'
            disabled={isSubmitting}
          />

          <View className='justify-center items-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Don't have account?
            </Text>
            <Link href="/sign-up" className='text-lg  text-secondary'>Sign Up</Link>
          </View>



        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default SignIn
