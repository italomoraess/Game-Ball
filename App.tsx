import { View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';

export default function App() {

  const handleForceBtn = () => {

  }

  return (
    <View style={styles.container}>
      <View style={styles.area}>

      </View>
      <View style={styles.control}>
        <View>
          <Text style={styles.controlText}>Upforce: </Text>
          <Text style={styles.controlText}>Velocity: </Text>
          <Text style={styles.controlText}>PosY: </Text>
        </View>
        <TouchableOpacity style={styles.controlBtn} onPress={handleForceBtn}>
          <Text style={styles.controlText}>Forçar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

