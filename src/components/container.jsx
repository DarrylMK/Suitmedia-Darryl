import { useEffect, useState } from "react";
import Card from "./card";

const Container = () => {
    const [pageSize, setPageSize] = useState(10)
    const [pageSort, setPageSort] = useState('-published_at')
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://suitmedia-backend.suitdev.com/api/ideas?page[number]=1&page[size]=${pageSize}&append[]=small_image&append[]=medium_image&sort=${pageSort}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [pageSize, pageSort]);

    const handleSizeChange = (e) => {
        const value = e.target.value;

        setPageSize(value)
        localStorage.setItem('selectedSizeOption', value);
    }

    const handleSortChange = (e) => {
        const value = e.target.value;

        setPageSort(value)
        localStorage.setItem('selectedSortOption', value);
    }

    useEffect(() => {
        const savedSizeValue = localStorage.getItem('selectedSizeOption');
        const savedSortValue = localStorage.getItem('selectedSortOption');

        if (savedSizeValue) {
          setPageSize(savedSizeValue);
        }

        if (savedSortValue){
            setPageSort(savedSortValue);
        }
      }, []);
    
  return (
    <div className="container">
      <div className="tools">
        <div className="tools-info">Showing 1-{pageSize} of 100</div>
        <div className="tools-input">
          <div className="input-group">
            <label htmlFor="page">Show per page:</label>
            <select onChange={handleSizeChange} value={pageSize} id="page">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        <div className="input-group">
            <label htmlFor="sort">Sort by:</label>
            <select onChange={handleSortChange} value={pageSort} id="sort">
                <option value="-published_at">Newest</option>
                <option value="published_at">Latest</option>
            </select>
        </div>
        </div>
      </div>
      <div className="cards">
        <Card image="https://suitmedia.static-assets.id/storage/files/3356/conversions/Kenali-lebih-dalam-serba-serbi-influencer-berdasarkan-jumlah-followers-yang-dimilikinya-medium.jpg" date="5 September 2022" title="Kenali Tingkatan Influencers berdasarkan Jumlah Followers" />
        <Card image="https://suitmedia.static-assets.id/storage/files/3228/conversions/shutterstock_1089891260-medium.jpg" date="5 September 2022" title="Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Marketing yang Tepat" />
        <Card image="https://suitmedia.static-assets.id/storage/files/3356/conversions/Kenali-lebih-dalam-serba-serbi-influencer-berdasarkan-jumlah-followers-yang-dimilikinya-medium.jpg" date="5 September 2022" title="Kenali Tingkatan Influencers berdasarkan Jumlah Followers" />
        <Card image="https://suitmedia.static-assets.id/storage/files/3228/conversions/shutterstock_1089891260-medium.jpg" date="5 September 2022" title="Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Marketing yang Tepat" />
        <Card image="https://suitmedia.static-assets.id/storage/files/3356/conversions/Kenali-lebih-dalam-serba-serbi-influencer-berdasarkan-jumlah-followers-yang-dimilikinya-medium.jpg" date="5 September 2022" title="Kenali Tingkatan Influencers berdasarkan Jumlah Followers" />
        <Card image="https://suitmedia.static-assets.id/storage/files/3228/conversions/shutterstock_1089891260-medium.jpg" date="5 September 2022" title="Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Marketing yang Tepat" />
        <Card image="https://suitmedia.static-assets.id/storage/files/3356/conversions/Kenali-lebih-dalam-serba-serbi-influencer-berdasarkan-jumlah-followers-yang-dimilikinya-medium.jpg" date="5 September 2022" title="Kenali Tingkatan Influencers berdasarkan Jumlah Followers" />
        <Card image="https://suitmedia.static-assets.id/storage/files/3228/conversions/shutterstock_1089891260-medium.jpg" date="5 September 2022" title="Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Marketing yang Tepat" />
      </div>
    </div>
  );
};

export default Container;
