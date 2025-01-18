import React, { useCallback, useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Modal, Alert, FlatList, ScrollView, Image } from 'react-native';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/FontAwesome6';
import Icon8 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import FireStore from '@react-native-firebase/firestore';


const Account = () => {
    const navigation = useNavigation<any>();

    const [posts, setPosts] = useState([]); // State to store posts
    const [loading, setLoading] = useState('')

    const user = useSelector((state: any) => state.user);

    // Fetch user posts from Firestore
    useEffect(() => {
        const fetchPosts = async () => {
            if (!user?.email) return;

            try {
                const querySnapshot = await FireStore()
                    .collection('posts')
                    .where('id', '==', user.email)
                    .get();

                const userPosts = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                console.log('Fetched posts:', userPosts);
                setPosts(userPosts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [user?.email]);
    console.log('User email:', user?.email);

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 50, marginLeft: 8 }}>
                        {user?.userName}
                    </Text>
                    <TouchableOpacity>
                        <Icon8 style={{ marginTop: 35, marginLeft: 167 }} name="account-circle-outline" size={100} color="grey" />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: -50 }}>
                    <Text style={{ color: 'black', fontSize: 15, marginLeft: 8 }}>
                        {user?.email || 'user.email@example.com'}
                    </Text>
                    <Text style={{ color: 'grey', marginLeft: 8 }}>{posts.length} posts</Text>
                </View>
            </View>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.postContainer}>
                        <Image
                            style={styles.profileImage}
                            source={{
                                uri: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`,
                            }}
                        />
                        <Text style={styles.postContent}>{item.content || 'No content available'}</Text>
                    </View>
                )}
            />
        </View>
          );
        };
        
        export default Account;
        const styles = StyleSheet.create({
            button: {
              color: 'black',
              borderRadius: 10,
              width: '100%',
              borderWidth: 2,
              borderColor: 'black',
              height: 30,
              marginLeft: 20,
              marginTop: 20,
              fontWeight: '700',
              margin: 10,
              textAlign: 'center',
              paddingTop: 3,
            },
            postContainer: {
              flexDirection: 'row',
              backgroundColor: '#f9f9f9',
              padding: 15,
              margin: 10,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#ccc',
            },
            postTitle: {
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
            },
            postContent: {
              marginTop: 10,
              color: 'black',
            },
            modalContainer: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
            modalContent: {
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 20,
              width: '80%',
              alignItems: 'center',
            },
            modalTitle: {
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 10,
              color: 'black',
            },
            input: {
              borderWidth: 1,
              borderColor: 'grey',
              borderRadius: 10,
              width: '100%',
              padding: 10,
              marginBottom: 20,
              color: 'black',
            },
            modalButtons: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            },
            modalButton: {
              backgroundColor: 'black',
              padding: 10,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              marginHorizontal: 5,
            },
            post: {
              backgroundColor: '#fff',
              marginBottom: 10,
              padding: 10,
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 5,
              elevation: 3,
            },
            header: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            },
            profileImage: {
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 10,
            },
            userInfo: {
              flex: 1,
              justifyContent: 'center',
            },
            username: {
              fontWeight: 'bold',
              fontSize: 13,
              color: 'black',
            },
            handle: {
              color: 'black',
              fontSize: 14,
            },
            postText: {
              fontSize: 16,
              color: '#333',
            },
            deleteIcon: {
              marginLeft: 10,
            },
          });
