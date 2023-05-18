import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Shonen Anime Action Figures</Tab>
                <Tab>Magical Girl Anime Action Figures</Tab>
                <Tab>Mecha Anime Action Figures</Tab>
            </TabList>

            <TabPanel>
                <p>Naruto Action Figures</p>
                <p>One Piece Action Figures</p>
                <p>Dragon Ball Z Action Figures</p>
            </TabPanel>
            <TabPanel>
                <p>Sailor Moon Action Figures</p>
                <p>Cardcaptor Sakura Action Figures</p>
                <p>Madoka Magica Action Figures</p>
            </TabPanel>
            <TabPanel>
                <p>Gundam Action Figures</p>
                <p>Evangelion Action Figures</p>
                <p>Code Geass Action Figures</p>
            </TabPanel>
        </Tabs>
    );
};

export default ShopByCategory;