import React, { Fragment, useState, useEffect } from 'react';

import {
  ScrollView,
  FlatList
} from 'react-native';

import { Cabecalho } from './src/Components/Cabecalho';

import { Foto } from './src/Components/Foto';

import lerFotos from './src/api/feed';
import { Comentarios } from './src/Components/Comentarios';

const App: () => React$Node = () => {
  const [fotos,setFotos ] = useState([])
    useEffect(() => {

      lerFotos(setFotos);
  }, [])

  return (
    <ScrollView>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho
             nomeUsuario={item.userName}
             urlImage={item.userURL}/>
            <Foto urlFoto={item.url}
            descricao={item.description}
            qntLikes={item.likes}
            />
            <Comentarios comentarios={item.comentarios}/>
          </Fragment>}
      />
    </ScrollView>
  );
};


export default App;
