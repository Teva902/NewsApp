import {FlatList} from 'react-native';
import {articalsde} from '../NewsApp/data/dummy-data';
function renderarticalsdeatils(item) {
  return;
}
function articalsdeatils() {
  return (
    <FlatList
      data={articalsde}
      keyExtractor={item => item.articalsdeatils}
      renderItem={renderarticalsdeatils}
    />
  );
}
