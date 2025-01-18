import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/EvilIcons';
import Icon4 from 'react-native-vector-icons/AntDesign';
import Icon5 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
 
const Apphome = ({ route }: any) => {
  const user = useSelector((state: any) => state?.user);
  console.log("User data from Redux:", user); 
  const { userName = 'yegj', } = route.params || {};
  const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Received user data:', route.params);
  }, [route.params]);


  useEffect(() => {
    const unsubscribe = firestore()
      .collection('posts')
      .onSnapshot(
        snapshot => {
          const postList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setPosts(postList);
          setLoading(false);
        },
        error => {
          console.error('Error fetching posts:', error);
          setLoading(false);
        }
      );

    return () => unsubscribe();
  }, []);

  const deletePost = async (postId: any) => {
    Alert.alert(
      "Delete Post",
      "Are you sure you want to delete this post?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await firestore().collection('posts').doc(postId).delete();
              Alert.alert('Success', 'Post deleted successfully!');
            } catch (error) {
              console.error('Error deleting post:', error);
              Alert.alert('Error', 'Failed to delete post.');
            }
          },
        },
      ]
    );
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View>
        <Image
          style={{ width: 90, height: 50, marginLeft: 130, marginTop: 10 }}
          source={require('./../../images/tttt.png')}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Icon1 style={{ marginTop: 15, marginLeft: 10 }} name="account-circle" size={52} color="grey" />
        <Text style={{ color: 'black', marginTop: 30, marginLeft: 5, fontWeight: '700' }}>
          {user.userName} 
        </Text>
       
      </View>
      <ScrollView style={{ marginLeft: 20, marginRight: 10, height: 10 }}>
        {loading ? (
          <Text style={{ textAlign: 'center', marginTop: 20, color: 'grey' }}>Loading...</Text>
        ) : (
          posts.map((post: any) => (
            <View key={post.id} style={styles.post}>
              <View style={styles.header}>
                <Image
                  style={styles.profileImage}
                  source={{
                    uri: `https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100)}.jpg`,
                  }}
                />
                <View style={styles.userInfo}>
                  <Text style={styles.username}>{post.author || userName}</Text>
                  <Text style={styles.handle}>@wonder.2022</Text>
                </View>
                <TouchableOpacity onPress={() => deletePost(post.id)}>
                  <Icon1 name="delete" size={24} color="red" style={styles.deleteIcon} />
                </TouchableOpacity>
              </View>
              <Text style={styles.postText}>{post.content}</Text>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity >
                  <Icon2
                    style={{ marginLeft: 5 }}
                    name="heart"
                    size={27}
                    color="grey"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon3
                    style={{ marginLeft:10 }}
                    name="comment"
                    size={27}
                    color="grey"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon4
                    style={{ marginLeft: 10 }}
                    name="retweet"
                    size={20}
                    color="grey"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon5
                    style={{ marginLeft: 5 }}
                    name="share"
                    size={20}
                    color="grey"
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default Apphome;

const styles = StyleSheet.create({
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
