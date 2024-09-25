import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Linking } 
from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const profiles = [

  { 
    name: 'Thiago Silva', 
    role: 'Back-End', 
    avatar: require('../../assets/thiago.jpeg'),
    links: {
      linkedin: '',
      github: 'https://github.com/thiago-git1910',
      instagram: 'https://www.instagram.com/tthiago__11/'
    }
  },

  { ///ste
    name: 'Stephany Ramos', 
    role: 'Back-End', 
    avatar: require('../../assets/ste.jpeg'),
    links: {
     linkedin: 'https://linkedin.com/in/depay',
      github: 'https://github.com/sttephany11',
      instagram: 'https://www.instagram.com/ste_rodrigues11/'
    }
  },

  { ///gui
    name: 'Guilherme Mesquita', 
    role: 'Back-End', 
    avatar: require('../../assets/gui.jpg'),
    links: {
     linkedin: 'https://linkedin.com/in/depay',
      github: 'https://github.com/Guilherme-S-Mesquita',
      instagram: 'https://www.instagram.com/gui.mesquitx/'
    }
  },

  { ///felipe
    name: 'Felipe Macedo', 
    role: 'Back-End', 
    avatar: require('../../assets/lipe.jpg'),
    links: {
      linkedin: 'https://linkedin.com/in/depay',
      github: 'https://github.com/Felipe-Macedo-Correia',
      instagram: 'https://www.instagram.com/macedoo.felipe/'
    }
  },

  { ///nicolly
    name: 'Nicolly Terra', 
    role: 'Back-End', 
    avatar: require('../../assets/nic1.jpeg'),
    links: {
     linkedin: 'https://linkedin.com/in/depay',
      github: 'https://github.com/collyterra',
      instagram: 'https://www.instagram.com/collysza/'
    }
  },

  { ///kauanne
    name: 'Kauanne Sandes', 
    role: 'Back-End', 
    avatar: require('../../assets/kakau2.jpg'),
    links: {
      linkedin: '',
      github: 'https://github.com/KauaneBrandao/KauaneBrandao.git',
      instagram: 'https://www.instagram.com/ksandes_/'
    }
  },

  { ///joao
    name: 'João Victor', 
    role: 'Back-End', 
    avatar: require('../../assets/joao.jpeg'),
    links: {
      linkedin: '',
      github: 'https://github.com/JvTorelli',
      instagram: 'https://www.instagram.com/joaovtorellixz/'
    }
  },
  // Adicione mais perfis
];

const ProfileCard = ({ profile }) => (
  <View style={styles.card}>
    <Image source={profile.avatar} style={styles.avatar} />
    <Text style={styles.name}>{profile.name}</Text>
    <Text style={styles.role}>{profile.role}</Text>
    <View style={styles.socialIcons}>
  
      <TouchableOpacity onPress={() => Linking.openURL(profile.links.linkedin)}>
        <Icon name="linkedin" size={20} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL(profile.links.github)}>
        <Icon name="github" size={20} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL(profile.links.instagram)}>
        <Icon name="instagram" size={20} style={styles.icon} />
      </TouchableOpacity>
    </View> 
  </View>
);

const Desenvolvedores = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.header}>Desenvolvedores</Text>
    <View style={styles.cardsContainer}>
      {profiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 50,
    textAlign: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  icon: {
    color: 'black',
  },
});


export default Desenvolvedores;
