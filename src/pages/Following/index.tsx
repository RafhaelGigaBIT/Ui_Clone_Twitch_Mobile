import React from 'react';
import { Text, View, FlatList } from 'react-native';

import {Wrapper, Container, Main } from './styles';

import  Header  from '../../components/Header';
import  Heading  from '../../components/Heading';
import  Title  from '../../components/Title';
import  CategoryList  from '../../components/CategoryList';
import  StreamList  from '../../components/StreamList';


interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const following: React.FC = () => {
  const {data, indicies} = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>following</Heading>
      },

      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Folowed Categories</Title>,
        isTitle: true,
      },
      {key: 'C1', render: () => <CategoryList />},

      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },
      {key: 'C2', render: () => <StreamList />},

      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue Watching</Title>,
        isTitle: true,
      },
      {key: 'C3', render: () =>  <StreamList />},

      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offline Channels</Title>,
        isTitle: true,
      },
      // Esta faltando o Channel List
      {key: 'C4', render: () => <View />},
    ]

    const indicies: number[]=[]

    items.forEach((item, index) => item.isTitle && indicies.push(index))

    return {
      data: items,
      indicies,
    }
  }, []);

  return (
    <Wrapper>
      <Container>

        <Header />

        <Main>
          <FlatList<Item>
            data= {data}
            renderItem = {({ item }) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices = {indicies}
            //refresh Effect
            onRefresh={() => {}}
            refreshing = {false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default following;
