import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import { Container } from './styles';

const Checkbox = ({ options = [], onChange, selected, setSelected, multiple = false }) => {
  
  function toggle(id) {
    let index = selected.findIndex((i) => i === id);
    let arrSelecteds = [...selected];

    if (index !== -1) {
      arrSelecteds.splice(index, 1);
    } else {
      multiple ? arrSelecteds.push(id) : (arrSelecteds = [id]);
    }

    setSelected(arrSelecteds);
  } 

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <View style={styles.optionContainer}>
          <TouchableOpacity
            style={[
              styles.touchable,
              {
                backgroundColor:
                  selected.findIndex((i) => i === option.id) !== -1
                    ? '#3EBD93'
                    : '#fff',
              },
            ]}
            onPress={() => toggle(option?.id)}>
            {selected.findIndex((i) => i === option.id) !== -1 ? (
              <Icon name="check-bold" color={'#fff'} size={16} />
            ) : null}
          </TouchableOpacity>
          <Text style={styles.optext}>{option?.id}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
  touchable: {
    height: 20,
    width: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#3EBD93',
    borderWidth: 2,
  },
  optext: {
    marginLeft: 12,
    color: '#555',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Checkbox;
