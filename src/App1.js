import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
  SectionList,
} from 'react-native';



const App = props => {
  const [dataNew, setDataNew] = React.useState([]);

  React.useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     console.log(responseJson);
    //   })
    //   .catch(error => console.log(error)); //to catch the errors if any

    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      // console.log(response.data);
      setDataNew(response.data);
    });
  }, []);

  const data = [
    {
      title: 'AccountNo',
      value: 1,
      createdAt: 1646675130,
      type:'one'
    },
    {
      title: 'email',
      value: 2,
      createdAt: 1646761530,
      type:'two'
    },
    {
      title: 'NameofBank',
      value: 3,
      createdAt: 1646243130,
      type:'one'
    },
    {
      title: 'NameofAccountHolder',
      value: 4,
      createdAt: 1614707130,
      type:'three'
    },
    {
      title: 'AccountNoHere',
      value: 5,
      createdAt: 1646675130,
      type:'four'
    },
    {
      title: 'EmailParttwo',
      value: 6,
      createdAt: 1646761530,
      type:'three'
    },
    {
      title: 'NameofBankTwo',
      value: 7,
      createdAt: 1646243130,
      type:'two'
    },
    {
      title: 'NameofAccountHolderPartTwo',
      value: 8,
      createdAt: 1646243130,
      type:'one'
    },
  ];
  const renderData = ({item}) => {
    return(
      <View style={styles.cardObjectConatiner}>
          <Text style={styles.titleStyle}>{item.title}</Text>
          <Text style={styles.valueStyle}>{item.value}</Text>
        </View>
    )
  }

  const renderSeparator = () => <View style={styles.separator} />;

  const renderSectionHeader = ({ section: { date } }) => {
    return (
      <Text style={styles.sectionText}>
        {date}
      </Text>
    );
  };

  let formatData = React.useMemo(() => {
    // this gives an object with dates as keys
    if (data.length == 0) return [];
    console.log('data',data)
    const groups = data.reduce((groups, item) => {
      console.log('groups_item',groups,item)
      const date = item.type;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(item);
      return groups;
    }, {});

    console.log('groups',groups)

    // Edit: to add it in the array format instead
    const groupArrays = Object.keys(groups).map(date => {
      console.log('date',date);
      return {
        date,
        data: groups[date],
      };
    });
    console.log('Here',groupArrays )
    return groupArrays;
  }, [data]);

  return (
    <View style={styles.container}>
      <SectionList
        sections={formatData} //{DATA}
        renderItem={renderData}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => `item-${index}`}

        
        // contentContainerStyle={styles.scroll}
        // ItemSeparatorComponent={renderSeparator}
        // ListFooterComponent={renderSeparator}
        stickySectionHeadersEnabled={false}
        showsVerticalScrollIndicator={false}
        // refreshing={refreshing}
        // onRefresh={() => getMoreData(1, true)}
        // onEndReached={() => {
        //   getMoreData(pageLimit + 1);
        // }}
        // onEndReachedThreshold={0.1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 100,
  },
  shadow: {
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 4.65,
    shadowOpacity: 1,
    // alignSelf:'center',
    position: 'absolute',
    top: 60,
  },
  center: {
    color: 'red',
    height: 20,
    alignSelf: 'center',
    marginVertical: 20,
  },
  flatListColumnStyle: {
    justifyContent: 'space-between',
    marginTop: 16,
    // backgroundColor:'green',
    borderWidth: 2,
  },
  flatlistContainer: {
    paddingHorizontal: 18,
    width: '100%',
    // backgroundColor:'red'
  },
  cardObjectConatiner: {
    width: 160,
    alignSelf:'center',
  },
  titleStyle: {
    color: 'black',
    fontSize: 12,
  },
  valueStyle: {
    fontSize: 13,
    marginTop: 5,
  },
  separator: {
    height: 16,
    backgroundColor:'green'
  },
  sectionText: {
    fontSize: 12,
    paddingVertical: 10,
    alignSelf: 'center',
    backgroundColor:'aqua'
  }
});

export default App;
