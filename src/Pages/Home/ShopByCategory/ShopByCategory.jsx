import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [toys,setToys] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/storedtoydata")
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    
    return (
        <div>
            <h1 className='text-4xl text-center font-bold my-10 mx-auto '>Buy From Your Favourite Category</h1>
            <Tabs>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;