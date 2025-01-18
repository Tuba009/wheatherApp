import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Entypo'
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import Icon5 from 'react-native-vector-icons/MaterialIcons';
import Icon6 from 'react-native-vector-icons/Feather';
import Icon7 from 'react-native-vector-icons/Foundation';
import Icon8 from 'react-native-vector-icons/EvilIcons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Post = ({ route }: any) => {
    const navigation = useNavigation<any>();
    const [post, setPost] = useState<any>('');
    const[eamil,setEmail] =useState<any>('');

    const userName = useSelector((state:any) => state.user.userName);
    const userEmail = useSelector((state:any) => state.user. email);

    const savePostToFirestore = async () => {
        if (post.trim().length === 0) {
            Alert.alert('Error', 'Post cannot be empty');
            return;
        }

        try {
            await firestore()
                .collection('posts')
                .add({
                    content: post,
                    author: userName, 
                    id: userEmail,

                });
            Alert.alert('Success', 'Post saved successfully!');
            setPost('');
            navigation.navigate('Home', { post, } as never);
        } catch (error) {
            console.error('Error saving post: ', error);
            Alert.alert('Error', 'Failed to save post');
        }
    };


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.header}>
                <TouchableOpacity
                //  onPress={() => navigation.goBack()} 
                >
                    <Image
                        style={{ marginLeft: 10, marginTop: 5 }}
                        source={require('./../../images/arrow_back.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.headertxt}>New Thread</Text>
                <TouchableOpacity style={{ marginLeft: 215 }}
                >
                    <Image source={require('./../../images/check.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Icon1
                    style={{ marginTop: 15, marginLeft: 10 }}
                    name="account-circle"
                    size={52}
                    color="grey"
                />
                <Text
                    style={{
                        color: 'black',
                        marginTop: 30,
                        marginLeft: 10,
                        fontSize: 17,
                        fontWeight: 'bold',
                    }}>
                    {userName}
                </Text>
            </View>
            <View style={{ marginVertical: 30 }}>
                <TextInput
                    style={styles.inputs}
                    value={post}
                    onChangeText={setPost}
                    placeholder="What's new?"
                    placeholderTextColor={'grey'}
                    multiline={true}
                />
                <View style={{ marginTop: 1,flexDirection:'row',marginLeft:20}}>
                    <Icon2
                        style={{ marginLeft: 20 }}
                        name="images"
                        size={27}
                        color="grey"
                    />
                    <Icon3
                        style={{ marginLeft: 20 }}
                        name="camerao"
                        size={27}
                        color="grey"
                    />
                     <Icon4
                        style={{ marginLeft:20 }}
                        name="gif"
                        size={30}
                        color="grey"
                    />
                     <Icon5
                        style={{ marginLeft:20 }}
                        name="keyboard-voice"
                        size={27}
                        color="grey"
                    />
                    <Icon6
                        style={{ marginLeft:20 }}
                        name="hash"
                        size={25}
                        color="grey"
                    />
                     <Icon7
                        style={{ marginLeft:20 }}
                        name="align-left"
                        size={25}
                        color="grey"
                    />
                     <Icon8
                        style={{ marginLeft:20 }}
                        name="location"
                        size={29}
                        color="grey"
                    />
                </View>
            </View>

            <View style={{ bottom: 10, position: 'absolute', }}>
                <TouchableOpacity onPress={savePostToFirestore}>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: 'white',
                            backgroundColor: 'black',
                            width: 70,
                            height: 40,
                            paddingTop: 7,
                            borderRadius: 40,
                            marginLeft: 280,



                        }}>
                        Post
                    </Text>
                </TouchableOpacity>
                <Text style={{ color: 'grey', marginLeft: 10, marginTop: -24 }}>
                    Your Followers cab reply & quote
                </Text>
            </View>
        </View>
    );
};

export default Post;

const styles = StyleSheet.create({
    header: {
        height: 70,
        alignItems: 'center',
        borderWidth: 1,
        borderBottomColor: 'gray',
        flexDirection: 'row',
    },
    headertxt: {
        color: 'black',
        fontSize: 21,
        fontWeight: '500',
        marginLeft: 30,
    },
    mainnametop: {
        marginLeft: 10,
        marginVertical: 20,
        marginTop: 20,
    },
    inputs: {
        borderWidth: 0.3,
        borderColor: 'gray',
        borderRadius: 10,
        color: 'black',
        marginRight: 5,
        marginTop: -20,
        width: '95%',
        height: '50%',
        marginLeft: 10,
    },
    title2: {
        color: 'black',
        fontSize: 15,
    },
});
