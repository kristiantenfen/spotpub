import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/core';


import Restorante from '../../resources/Restorant';
const RestoranteResource = new Restorante();

import { Container } from './styles';
import { Loading } from '../../components/Commons/Loading';
import PubItemView from '../../components/PubItemView';

interface ItemProps {
  id: string
}

interface IPub {
  id: string,
  name: string,
  image: string,
  logo: string,
  description: string,
  opening_hours: string,
  payment_methods: string,
  price_range: string,
  telephone: string,
  website: string,
}

const PubView: React.FC = () => {
  
  const route = useRoute();
  const [pub, setPub] = useState<IPub>();
  const [loading, setLoading] = useState(true);
  const { id } = route.params as ItemProps;
  const getPub = async () => {
    setLoading(true);
    try {
      const { data } = await RestoranteResource.get(id);
      setPub(data);
      
    } catch (err) {
      
    }
    setLoading(false);
  }
  useEffect(() => {

    getPub();
  }, [])
  return (
    <Container>
        {loading ? (<Loading size="large" />) : (
          <PubItemView pub={pub} />
        )}
    </Container>
  );
}

export default PubView;