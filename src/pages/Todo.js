import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo} from '../feature/action';
import CircularProgress from '@mui/material/CircularProgress';
import {allData, todoStatus } from '../feature/todoSlice';
import Single from '../components/Single';
import { Pagination } from '@mui/material';

export default function Todo(){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTodo())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const data = useSelector(state => allData(state))
    const status = useSelector(state => todoStatus(state))
    // const [page, setPage] = useState(1)
    const [pageData, setPageData] = useState(data?.todo.slice(0, 25))
    // const handlePageChange = (pre = 25, prePage) => {
    //     setPageData(data?.todo.slice(pre, 25+pre))
    //     setPage(prePage+1)

    // }
    useEffect(() => {
        setPageData(data?.todo.slice(0, 25))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    

    return(
        <>
        {status === 'loading' && <CircularProgress />}

        <Single rows={pageData} />
        <Pagination count={data?.todo?.length/25}/>

        </>
    )
}