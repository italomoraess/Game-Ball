import { View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { Ball } from './components/Ball';
import { useEffect, useState } from 'react';

let timer: any;

export default function App() {

  const [gravity, setGravity] = useState(0.98);
  const [upForce, setUpForce] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [posY, setPosY] = useState(0);

  useEffect(() => {
    const applyGravity = () => {
      let newUpforce = upForce - gravity;
      newUpforce = newUpforce < 0 ? 0 : newUpforce;
      setUpForce(newUpforce);

      let newSpeed = speed + (gravity - (newUpforce / 2 ));
      setSpeed(newSpeed);

      let newPosY = posY - newSpeed;
      if (newPosY < 0 ) {
        newPosY = 0;
        setSpeed(0);
      }
      setPosY(newPosY);
    }

    clearTimeout(timer);
    timer = setTimeout(applyGravity, 1);

  }, [gravity, upForce, speed, posY]);

  const handleForceBtn = () => {
    setUpForce(5);
  }

  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Ball posY={posY}/>
      </View>

      <View style={styles.control}>
        <View>
          <Text style={styles.controlText}>Upforce: {upForce.toFixed(2)} </Text>
          <Text style={styles.controlText}>Velocity: {speed.toFixed(2)} </Text>
          <Text style={styles.controlText}>PosY: {posY.toFixed(2)} </Text>
        </View>
        
        <TouchableOpacity style={styles.controlBtn} onPress={handleForceBtn}>
          <Text style={styles.controlText}>Forçar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

