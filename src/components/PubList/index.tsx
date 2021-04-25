import React, { useState, useEffect } from 'react'
import PubListItem from '../PubListItem';

import Restorante from '../../resources/Restorant';
const RestoranteResource = new Restorante();

import { FlatList, Container, EmptyList } from './styles';
import { Loading } from '../../components/Commons/Loading';

interface PubListProps {
    search?: string
}

const PubList: React.FC<PubListProps> = ({search}) => {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [total, setTotal] = useState(0);
    
    const getList = async () => {
        setLoading(true);
        try {
            const response = await RestoranteResource.list({ page, limit, search });
            const { data, ...rest } = response;
            setTotal(rest.pagination.total);
            if (page === 1) {
                setList(data);
            } else {
                setList([...list, ...data]);
            }
        } catch (err) {
            console.log('err', err);
        }
        setLoading(false);
    }

    const addPage = (page) => {
        if (total > list.length) {
            setPage(page);
            getList();
        }
    }

    const getSearch = async () => {
        setList([]);
        setPage(1);
        getList();
    }

    useEffect(() => {
        getSearch();
    }, [search]);

    useEffect(() => {

    }, [list, page]);


    return (
        <Container>
            <FlatList data={list}
            renderItem={({ item }) => <PubListItem pub={item} />}
            keyExtractor={ (item, index) => index }
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            onEndReached={() => addPage(page+1)}
            onEndReachedThreshold={0.1}
            ListFooterComponent={() =>  loading ? <Loading size="large" /> : <></>}
            ListEmptyComponent={() => !loading && <EmptyList>Nenhum registro encontrado.</EmptyList>}
            />
        </Container>
    )
}

export default PubList;
