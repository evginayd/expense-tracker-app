import { View } from 'react-native'
import {useSafeAreaInsets } from 'react-native-safe-area-context'
import {COLORS} from '../constants/colors'

const SafeScreen = ({children}) => {
    const intests = useSafeAreaInsets();
  return (
    <View style={{paddingTop: intests.top, flex: 1, backgroundColor: COLORS.background}}>
      {children}
    </View>
  )
}

export default SafeScreen