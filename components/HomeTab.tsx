'use client'

import Wallet from '@/icons/Wallet'
import pixelart_Dark from '@/images/pixelart_Dark.png'
import Community from '@/icons/Community'
import Star from '@/icons/Star'
import ArrowRight from '@/icons/ArrowRight'
import { sparkles } from '@/images'
import Image from 'next/image'
import { useEffect } from 'react'
import Link from 'next/link'

const HomeTab = () => {
    return (
        <>
            <style jsx global>{`
                /* ثابت نگه داشتن متن بالای صفحه */
                .header-text {
                    position: sticky;
                    top: 20px;  /* فاصله از بالای صفحه */
                    z-index: 20;
                }

                /* ثابت نگه داشتن دکمه‌ها در پایین صفحه */
                .task-buttons {
                    position: fixed;
                    bottom: 20px; /* فاصله از پایین صفحه */
                    left: 50%;
                    transform: translateX(-50%);
                    width: 90%;
                    z-index: 10;
                }

                /* برای کانکت ولت که ثابت نباشد */
                .connect-wallet {
                    position: relative; /* بدون position ثابت */
                    top: 0;
                    z-index: 20; /* از سایر بخش‌ها جلوتر نباشد */
                }

                /* فاصله بیشتر بین دکمه‌ها و تسک‌ها */
                .task-buttons button {
                    margin-bottom: 20px;
                }
            `}</style>

            <div className="relative overflow-hidden bg-gradient-to-b from-[#2a004e] to-[#000000] min-h-screen">
                {/* Connect Wallet Button */}
                <div className="connect-wallet mt-8 w-full flex justify-center">
                    <button className="w-full flex justify-center">
                        <div className="bg-[#3c3ce7] text-white px-3 py-0.5 rounded-full flex items-center gap-2">
                            <Wallet className="w-5 h-5" />
                            <span>Connect wallet</span>
                        </div>
                    </button>
                </div>

                {/* PAWS Balance */}
                <div className="header-text flex flex-col items-center mt-8">
                    <div className="image-container mb-4">
                        <Image
                            src="/images/pixelart_Dark.png"
                            alt="Pixel Art Dark"
                            width={140}
                            height={80}
                            style={{
                                transform: 'scale(1.1)',
                                transition: 'transform 0.3s ease',
                            }}
                        />
                    </div>
                    <div className="flex items-center gap-1 text-center">
                        <div className="text-6xl font-bold mb-1">1M</div>
                        <div className="text-[#a3a3a3] text-3xl">Dark</div>
                    </div>
                    <div className="flex items-center gap-1 text-[#a3a3a3] rounded-full px-4 py-1.5 mt-2 cursor-pointer">
                        <span>NEWCOMER</span>
                        <Image src={sparkles} alt="sparkles" width={18} height={18} />
                        <span>RANK</span>
                        <a href="https://www.aparat.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                            <ArrowRight className="w-6 h-6 text-blue-500" />
                        </a>
                    </div>
                </div>

                {/* ثابت نگه داشتن تسک‌ها */}
                <div className="tasks-container space-y-3 px-4 mt-8 mb-8">
                    {/* لینک به صفحه داخلی (Leaderboard) */}
                    <Link
                        href="/leaderboard"
                        className="block shine-effect w-full bg-[#ffffff0d] border-[1px] border-[#797979] rounded-lg px-4 py-2 flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3 font-medium">
                            <Community className="w-8 h-8" />
                            <span>Join our community</span>
                        </div>
                        <ArrowRight className="w-6 h-6 text-gray-500" />
                    </Link>

                    {/* لینک به صفحه داخلی (Friends) */}
                    <Link
                        href="/friends"
                        className="block w-full bg-[#000000] border-[1px] border-[#797979] rounded-lg px-4 py-2 flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3 font-medium">
                            <Star className="w-8 h-8" />
                            <span>Check your rewards</span>
                        </div>
                        <ArrowRight className="w-6 h-6 text-gray-500" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HomeTab
