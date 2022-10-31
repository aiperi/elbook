import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchBooksRequest} from "../../store/actions/bookActions/bookActions";
import Preloader from "../../components/Preloader/Preloader";
import {Grid} from "@mui/material";
import {useTranslation} from "react-i18next";
import SingleBookBox from "../../components/SingleBookBox/SingleBookBox";
import ReactPaginate from "react-paginate";
import "./style.css";


const style={
    maxWidth: "1200px",
    padding: "0 24px",
    margin: "20px auto 10px",

}

const Ebooks = () => {
    window.scroll(0,0);
    const dispatch=useDispatch();
    const {t}= useTranslation();
    const books=useSelector(state => state.books.books.results);
    // const count = useSelector(state => state.books.books.count);
    const booksLoading = useSelector(state => state.books.fetchLoading);
    const pageCount = useSelector(state => state.books.pageCount)
const[currentPage, setCurrentPage] = useState(1);

    const handlePageClick = (data) => {
       const selected = data.selected+1;
       // setCurrentPage(selected)
        console.log('selected page', selected)
    };

    // console.log(books)
    // console.log(pageCount)
    // console.log(count)

    // useEffect(()=>{
    //     dispatch(fetchBooksRequest(`?page=${currentPage}`));
    //     console.log("currentPage", currentPage)
    // },[currentPage])


    //
    // const [response, setResponse] = useState([])

    // const limit = 9
    //
    useEffect(()=>{
        dispatch(fetchBooksRequest());
    },[])


    //
    // useEffect(() => {
    //     getData()
    // },[limit])

    // const paginateData = async (count) => {
    //     const res = await fetch(
    //         `${apiURL}/audio/?page=${count}`
    //     );
    //     const data = await res.json();
    //     return data;
    // };
    //
    // ATBBv52nCeGwpctA5YZvVpE6v33vFDB5972E



    return (
        <>
            {booksLoading ? (
                <Preloader/>
            ):(
                <div style={style}>
                    <Grid container justifyContent={"space-between"} sx={{marginBottom: '12px'}}>
                        <Grid item>
                            <h3>{t("ebooks")}</h3>
                        </Grid>
                    </Grid>
                    <Grid container alignContent={"center"}
                          sx={{
                              flexDirection: {xs: 'column', sm: 'row'},
                              justifyContent: {xs: 'center', sm: 'space-between'},
                          }}
                    >

                        {books && books.map(book=>(
                            <SingleBookBox key={book.id}
                                book={book}
                            />
                        ))}

                        {/*<SingleAudioBox audio={audio && audio[0]}/>*/}
                    </Grid>
                    <div className="paginate">

                            <ReactPaginate
                                nextLabel="❯"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={2}
                                pageCount={pageCount}
                                previousLabel="❮"
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="page-item"
                                previousLinkClassName="page-link"
                                nextClassName="page-item"
                                nextLinkClassName="page-link"
                                containerClassName="pagination"
                                activeClassName="active"
                                renderOnZeroPageCount={null}
                            />

                    </div>
                </div>
            )}
        </>
    );
};

export default Ebooks;