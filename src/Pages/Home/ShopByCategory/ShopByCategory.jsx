import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';

const ShopByCategory = () => {

    const [toys, setToys] = useState([]);
    const [subCategory, setSubCategory] = useState("DC Comics");
    useEffect(() => {
        fetch(`https://action-house-server.vercel.app/findsubcategory/${subCategory}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [subCategory])
    const handleTab = (e) => {
        setSubCategory(e.target.value)
    }
    return (
        <div className='mx-10'>
            <h1 className='text-4xl text-center font-bold my-10 mx-auto '>Buy From Your Favorite Category</h1>
            <Tabs className="mx-auto">
                <TabList>
                    <Tab ><button value="DC Comics" onClick={handleTab}>DC Comics</button></Tab>
                    <Tab ><button value="Marvel Comics" onClick={handleTab}>Marvel Comics</button></Tab>
                    <Tab ><button value="Transformers" onClick={handleTab}>Transformers</button></Tab>
                    <Tab ><button value="Star Wars" onClick={handleTab}>Star Wars</button></Tab>
                    <Tab ><button value="Star Trek" onClick={handleTab}>Star Trek</button></Tab>
                    <Tab ><button value="Others" onClick={handleTab}>Others</button></Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center mx-10'>
                        {
                            toys.map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}
                            ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center mx-10'>
                        {
                            toys.map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}
                            ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center mx-10'>
                        {
                            toys.map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}
                            ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center mx-10'>
                        {
                            toys.map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}
                            ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center mx-10'>
                        {
                            toys.map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}
                            ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center mx-10'>
                        {
                            toys.map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}
                            ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;