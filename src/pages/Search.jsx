import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

// Giao diện:
// 1. form nhập keyword: input + button
// 2. giao diện để hiện thị kết quả tìm kiếm hoặc ko tìm thấy

const Search = () => {
    const [keyword, setKeyword] = useState("");
    console.log("keyword: ", keyword);

    // state chứa danh sách kết quả tìm được
    const [arrProduct, setArrProduct] = useState([]);

    // useSearchParams: dùng để lưu giá trị người dùng nhập lên url của trình duyệt
    const [search, setSearch] = useSearchParams();

    //Bước 2: lấy param từ url về
    const valueKeyword = search.get("q");
    console.log("valueKeyword: ", valueKeyword);

    const getProductByKeyWord = () => {
        if (valueKeyword) {
            // gọi api
            axios({
                url: `https://apistore.cybersoft.edu.vn/api/Product?keyword=${valueKeyword}`,
                method: "GET",
            })
                .then((response) => {
                    console.log("response: ", response);
                    setArrProduct(response.data.content);
                })
                .catch((error) => {
                    console.log("error: ", error);
                });
        }
    };

    useEffect(() => {
        getProductByKeyWord();
    }, [valueKeyword]);

    const handleSubmit = (e) => {
        console.log("submit e: ", e);

        e.preventDefault(); // chặn sự kiện load trang của form

        //Bước 1: đưa giá trị lên url
        setSearch({
            // key: value
            // tên key: có thể đặt tùy ý nhưng nên có nghĩa
            // value: từ khóa tìm kiếm
            q: keyword,
        });
    };

    return (
        <div>
            <h1 className="text-center">Search</h1>

            <div className="mt-5">
                <form onSubmit={handleSubmit} className="d-flex">
                    <div className="flex-grow-1 me-2">
                        <input
                            type="text"
                            name="keyword"
                            className="form-control"
                            id="exampleInputEmail1"
                            data-type="email"
                            placeholder="nhập từ khóa"
                            onInput={(e) => {
                                console.log("e: ", e.target.value);

                                setKeyword(e.target.value);
                            }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Tìm kiếm
                    </button>
                </form>
            </div>

            <div className="mt-5">
                <h2 className="text-center text-danger">Kết quả tìm kiếm</h2>

                {/* render kết quả tìm kiếm được tại đây:
                B1: cần state để lưu kết quả tìm được => khai báo useState
                B2: setState khi data từ api trả về 
                B3: dùng state render with map để hiển thị lên giao diện */}
                <div className="row">
                    {arrProduct?.map((item) => {
                        return (
                            <div className="col-4 mb-4" key={item.id}>
                                <div className="card">
                                    <img
                                        src={item.image}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {item.name}
                                        </h5>
                                        <p className="card-text">
                                            {item.price}
                                        </p>
                                        <NavLink
                                            to={`/detail/${item.id}`}
                                            className="btn btn-primary"
                                        >
                                            Read more
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Search;
