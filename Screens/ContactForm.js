import React from 'react';
import { Text, View, TouchableOpacity,  Linking, TextInput, SelectBox} from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash';

function App() {
  const TriggerMail = () => {
    Linking.openURL('mailto:teejaymellowgrind@gmail.com',)
  }

  const K_OPTIONS = [
    {
      item: 'Juventus',
      id: 'JUVE',
    },
    {
      item: 'Real Madrid',
      id: 'RM',
    },
    {
      item: 'Barcelona',
      id: 'BR',
    },
    {
      item: 'PSG',
      id: 'PSG',
    },
    {
      item: 'FC Bayern Munich',
      id: 'FBM',
    },
    {
      item: 'Manchester United FC',
      id: 'MUN',
    },
    {
      item: 'Manchester City FC',
      id: 'MCI',
    },
    {
      item: 'Everton FC',
      id: 'EVE',
    },
    {
      item: 'Tottenham Hotspur FC',
      id: 'TOT',
    },
    {
      item: 'Chelsea FC',
      id: 'CHE',
    },
    {
      item: 'Liverpool FC',
      id: 'LIV',
    },
    {
      item: 'Arsenal FC',
      id: 'ARS',
    },
  
    {
      item: 'Leicester City FC',
      id: 'LEI',
    },
  ]

  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])

  return (
    <View style={{ margin: 30 }}>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, paddingBottom: 20, color: '#ffac2c' }}>Delivery Form</Text>
      </View>

      <Text Text style={{ fontSize: 20, paddingBottom: 10 }}>Select delivery</Text>
     <View>
     <SelectBox
        label="Select single"
        options={K_OPTIONS}
        value={selectedTeam}
        onChange={onChange()}
        hideInputFilter={false}
      />
      <View style={{ height: 40 }} />
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>MultiSelect Demo</Text>
      <SelectBox
        label="Select multiple"
        options={K_OPTIONS}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      />
     </View>


      <View style={{ position: 'fixed', backgroundColor: 'rgba(15, 16, 17, 0.37)', width: '375px', height: '55px', left: '0px', top: '95%', }}>
        <TouchableOpacity style={{ marginTop: '5px', marginLeft: '10px', backgroundColor: '#ffac2c', boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)', marginRight: '10px', borderRadius: '14px', }} onPress={TriggerMail}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Next</Text>
        </TouchableOpacity>
      </View>


    </View>

  )
  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }

  function onChange() {
    return (val) => setSelectedTeam(val)
  }

}

export default App