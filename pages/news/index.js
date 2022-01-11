import Head from 'next/head'
import Footer from '../../components/Footer'
import { Default as DefaultNavbar } from '../../components/Navbar'
const News = () => {
    const items = [
        {
            title: 'LỢI THẾ CỦA NGƯỜI PHỤ NỮ TRONG NGÀNH IT',
            date: '7 THG 11'
        },
        {
            title: 'LỢI THẾ CỦA NGƯỜI PHỤ NỮ TRONG NGÀNH IT',
            date: '7 THG 11'
        }, {
            title: 'LỢI THẾ CỦA NGƯỜI PHỤ NỮ TRONG NGÀNH IT',
            date: '7 THG 11'
        }, {
            title: 'LỢI THẾ CỦA NGƯỜI PHỤ NỮ TRONG NGÀNH IT',
            date: '7 THG 11'
        }, {
            title: 'LỢI THẾ CỦA NGƯỜI PHỤ NỮ TRONG NGÀNH IT',
            date: '7 THG 11'
        },
    ]
    return (
        <div className="bg-white">
            <Head>

            </Head>
            <DefaultNavbar />
            <div className='container mx-auto my-5'>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold'>TIN TỨC</h1>
                    <h2 className='text-lg mt-1'>Những tin tức liên quan về Chủ đề Công Nghệ</h2>
                </div>

                <div className="grid grid-cols-12">
                    {items.map(({ title, date }, index) => {
                        return <NewsItem title={title} date={date} key={index} />
                    })}
                </div>
                <div className='w-max flex justify-center'>
                    <div>
                        <div className="btn-group">
                            <button className="btn btn-sm">1</button>
                            <button className="btn btn-sm">2</button>
                            <button className="btn btn-sm">3</button>
                            <button className="btn btn-sm btn-disabled">...</button>
                            <button className="btn btn-sm">99</button>
                            <button className="btn btn-sm">100</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    )
}

const NewsItem = ({ title, date }) => {
    return (
        <div className="card col-span-6 md:col-span-4 lg:col-span-3">
            <figure className="px-3 pt-3 lg:pt-10 lg:px-10">
                <div className="rounded-xl shadow-lg w-40 h-40 bg-gray-300" />
            </figure>
            <div className="card-body px-3 lg:px-10">
                <p className='font-thin text-xl'>{date}</p>
                <h3 className="card-title mt-2 text-2xl uppercase">{title}</h3>
            </div>
        </div>
    )
}

export default News