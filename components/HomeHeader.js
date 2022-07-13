import { View, Text, Image } from 'react-native'
import { assets, COLORS, SIZES } from '../constants'


const HomeHeader = () => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 99, height: 25 }}
        />
      </View>
    </View>
  )
}

export default HomeHeader