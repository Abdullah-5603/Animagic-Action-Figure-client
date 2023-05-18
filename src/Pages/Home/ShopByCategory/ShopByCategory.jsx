import React, { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import ShopByCategoryCard from "./ShopByCategoryCard";

const ShopByCategory = () => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [selectedCard, setSelectedCard] = useState(null);
    const [data, setData] = useState([]);

    const handleTabChange = (event, tabIndex) => {
        setCurrentTabIndex(tabIndex);
        setSelectedCard(null); // Reset the selected card when switching tabs
    };

    useEffect(() => {
        fetch("http://localhost:3000/categoryToyDetails")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const narutoData = data.find((dt) => dt._id === "646684b1ca62f505665a1291");
    const onePieceData = data.find((dt) => dt._id === "646684b1ca62f505665a1292");
    const dragonBallData = data.find((dt) => dt._id === "646684b1ca62f505665a1293");
    const sailorMoonData = data.find((dt) => dt._id === "646684b1ca62f505665a1294");
    const cardCaptorData = data.find((dt) => dt._id === "646684b1ca62f505665a1295");
    const madokaData = data.find((dt) => dt._id === "646684b1ca62f505665a1296");
    const gundamData = data.find((dt) => dt._id === "646684b1ca62f505665a1297");
    const evangelionData = data.find((dt) => dt._id === "646684b1ca62f505665a1298");
    const codeGeassData = data.find((dt) => dt._id === "646684b1ca62f505665a1299");

    return (
        <React.Fragment>
            <Tabs
                sx={{ backgroundColor: "#d2c59d", py: 2, display: "flex", justifyContent: "center" }}
                allowScrollButtonsMobile={true}
                value={currentTabIndex}
                onChange={handleTabChange}
                centered
            >
                <Tab className="tab" label="Shonen Anime Action Figures" />
                <Tab className="tab" label="Magical Girl Anime Action Figures" />
                <Tab className="tab" label="Mecha Anime Action Figures" />
            </Tabs>

            {/* TAB 1 Contents */}
            {currentTabIndex === 0 && (
                <Box sx={{ p: 3, width: "100%", margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div className='border-2 shadow-2xl p-5 mx-5'>
                        <p onClick={() => setSelectedCard(0)} className={`cursor-pointer text-center ${selectedCard === 0 ? "text-2xl font-semibold my-5 ": "text-xl"}`}>Naruto Action Figures</p>
                        {selectedCard === 0 && (
                            <div className="flex flex-col md:flex-row md:space-x-32 justify-center items-center">
                                {narutoData?.toys?.map((toy) => (
                                    <ShopByCategoryCard key={toy._id} data={toy} />
                                ))}
                            </div>
                        )}
                    </div>
                    <div className='border-2 shadow-2xl p-5 mx-5'>
                        <p onClick={() => setSelectedCard(1)} className={`cursor-pointer text-center ${selectedCard === 1 ? "text-2xl font-semibold my-5 ": "text-xl"}`}>One Piece Action Figures</p>
                        {selectedCard === 1 && (
                            <div className="flex flex-col md:flex-row md:space-x-32 justify-center items-center">
                                {onePieceData?.toys?.map((toy) => (
                                    <ShopByCategoryCard key={toy._id} data={toy} />
                                ))}
                            </div>
                        )}
                    </div>
                    <div className='border-2 shadow-2xl p-5 mx-5'>
                        <p onClick={() => setSelectedCard(2)} className={`cursor-pointer text-center ${selectedCard === 2 ? "text-2xl font-semibold my-5 ": "text-xl"}`}>Dragon Ball Z Action Figures</p>
                        {selectedCard === 2 && (
                            <div className="flex flex-col md:flex-row md:space-x-32 justify-center items-center">
                                {dragonBallData?.toys?.map((toy) => (
                                    <ShopByCategoryCard key={toy._id} data={toy} />
                                ))}
                            </div>
                        )}
                    </div>
                </Box>
            )}

            {/* TAB 2 Contents */}
            {currentTabIndex === 1 && (
                <Box sx={{ p: 3, width: "100%", margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div className="border-2 shadow-2xl p-5 mx-5">
                        <p onClick={() => setSelectedCard(0)} className={`cursor-pointer text-center ${selectedCard === 0 ? "text-2xl font-semibold my-5 ": "text-xl"}`}>Sailor Moon Action Figures</p>
                        {selectedCard === 0 && (
                            <div className="flex flex-col md:flex-row md:space-x-32 justify-center items-center">
                                {sailorMoonData?.toys?.map((toy) => (
                                    <ShopByCategoryCard key={toy._id} data={toy} />
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="border-2 shadow-2xl p-5 mx-5">
                        <p onClick={() => setSelectedCard(1)} className={`cursor-pointer text-center ${selectedCard === 1 ? "text-2xl font-semibold my-5 ": "text-xl"}`}>Cardcaptor Sakura Action Figures</p>
                        {selectedCard === 1 && (
                            <div className="flex flex-col md:flex-row md:space-x-32 justify-center items-center">
                                {cardCaptorData?.toys?.map((toy) => (
                                    <ShopByCategoryCard key={toy._id} data={toy} />
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="border-2 shadow-2xl p-5 mx-5">
                        <p onClick={() => setSelectedCard(2)} className={`cursor-pointer text-center ${selectedCard === 2 ? "text-2xl font-semibold my-5 ": "text-xl"}`}>Madoka Magica Action Figures</p>
                        {selectedCard === 2 && (
                            <div className="flex flex-col md:flex-row md:space-x-32 justify-center items-center">
                                {madokaData?.toys?.map((toy) => (
                                    <ShopByCategoryCard key={toy._id} data={toy} />
                                ))}
                            </div>
                        )}
                    </div>
                </Box>
            )}

            {/* TAB 3 Contents */}
            {currentTabIndex === 2 && (
                <Box sx={{ p: 3, width: "100%", margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div className="border-2 shadow-2xl p-5 mx-5">
                        <p onClick={() => setSelectedCard(0)} className={`cursor-pointer text-center ${selectedCard === 0 ? "text-2xl font-semibold my-5 ": "text-xl"}`}>Gundam Action Figures</p>
                        {selectedCard === 0 && (
                            <div className="flex flex-col md:flex-row md:space-x-32 justify-center items-center">
                                {gundamData?.toys?.map((toy) => (
                                    <ShopByCategoryCard key={toy._id} data={toy} />
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="border-2 shadow-2xl p-5 mx-5">
                        <p onClick={() => setSelectedCard(1)} className={`cursor-pointer text-center ${selectedCard === 1 ? "text-2xl font-semibold my-5 ": "text-xl"}`}>Evangelion Action Figures</p>
                        {selectedCard === 1 && (
                            <div className="flex flex-col md:flex-row md:space-x-32 justify-center items-center">
                                {evangelionData?.toys?.map((toy) => (
                                    <ShopByCategoryCard key={toy._id} data={toy} />
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="border-2 shadow-2xl p-5 mx-5">
                        <p onClick={() => setSelectedCard(2)} className={`cursor-pointer text-center ${selectedCard === 2 ? "text-2xl font-semibold my-5 ": "text-xl"}`}>Code Geass Action Figures</p>
                        {selectedCard === 2 && (
                            <div className="flex flex-col md:flex-row md:space-x-32 justify-center items-center">
                                {codeGeassData?.toys?.map((toy) => (
                                    <ShopByCategoryCard key={toy._id} data={toy} />
                                ))}
                            </div>
                        )}
                    </div>
                </Box>
            )}
        </React.Fragment>
    );
};

export default ShopByCategory;
