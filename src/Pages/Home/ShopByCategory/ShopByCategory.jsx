import React, {  useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';


const ShopByCategory = () => {
    
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch("https://action-house-server.vercel.app/storedtoydata")
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div>
            <h1 className='text-4xl text-center font-bold my-10 mx-auto '>Buy From Your Favorite Category</h1>
            <Tabs>
                <TabList>

                    <Tab>DC Comics</Tab>
                    <Tab>Marvel Comics</Tab>
                    <Tab>Transformers</Tab>
                    <Tab>Star Wars</Tab>
                    <Tab>Star Trek</Tab>
                    <Tab>Others</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center mx-10'>
                        {

                            toys.filter(toy => toy.subCategory === "DC Comics").map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}
                            ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center mx-10'>
                        {

                            toys.filter(toy => toy.subCategory === "Marvel Comics").map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}
                            ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center mx-10'>
                        {

                            toys.filter(toy => toy.subCategory === "Transformers").map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}
                            ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center mx-10'>
                        {

                            toys.filter(toy => toy.subCategory === "Star Wars").map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}
                            ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center mx-10'>
                        {

                            toys.filter(toy => toy.subCategory === "Star Trek").map(toy => <CategoryCard
                                key={toy._id}
                                toy={toy}
                            ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 justify-center items-center mx-10'>
                        {

                            toys.filter(toy => toy.subCategory === "Others").map(toy => <CategoryCard
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