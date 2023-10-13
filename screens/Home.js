import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';

const Home = ({navigation}) => {
  const [articals, setArticals] = useState([]);

  const onRefresh = () => {
    setsearchquery('');
    getFromApi();
  };
  useEffect(() => {
    getFromApi();
  }, []);

  /// GET /// POST ///  PUT /// PATCH //DELETE //
  const getFromApi = () => {
    fetch(
      'https://newsapi.org/v2/everything?q=tesla&from=2023-09-13&sortBy=publishedAt&apiKey=0f0954e59a0a49569916a35e5b0effd6',
    )
      .then(response => response.json())
      .then(json => {
        console.log('json', json);
        let response = json.articles;
        setArticals(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const [searchquery, setsearchquery] = useState('');
  const [searchedArticals, setSearchedArticals] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  return (
    <View>
      <TextInput
        placeholder="search"
        clearButtonMode="always"
        autoCapitalize="none"
        autoCorrect={false}
        value={searchquery}
        onChangeText={query => {
          let newObj = articals.find(obj => obj.title.includes(query));
          console.log('newObj', newObj);
          setsearchquery(query);
          if (query == '') {
            setSearchedArticals('');
          } else {
            setSearchedArticals([newObj]);
          }
        }}
        style={styles.searchbox}></TextInput>

      <FlatList
        data={searchedArticals ? searchedArticals : articals}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('datailspage', {
                title: item?.title,
                urlToImage: item?.urlToImage,
                description: item?.description,
                content: item?.content,
                author: item?.author,
                publishedAt: item?.publishedAts,
              })
            }
            style={styles.articles}>
            <Text style={{fontSize: 20, fontWeight: 'bold', margin: 16}}>
              {item?.title}
            </Text>
            <View style={{height: 1, backgroundColor: '#ddd'}}></View>
            <Image
              source={{uri: item?.urlToImage}}
              resizeMode="contain"
              style={{width: '100%', height: '70%', borderRadius: 10}}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  searchbox: {
    height: 40,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#ddd',
    width: '80%',
  },
  articles: {
    backgroundColor: '#fff',
    marginTop: 15,
    width: 380,
    borderRadius: 10,
    height: 300,
    fontSize: 20,
    margin: 20,
    elevation: 4,
  },
});
