import Head from 'next/head'
import Footer from '../../components/Footer'
import { Default as DefaultNavbar } from '../../components/Navbar'
const Post = () => {
    return (
        <div>
            <Head>

            </Head>
            <DefaultNavbar />
            <div className='container mx-auto my-10'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 lg:col-span-8 px-5 lg:px-10'>

                        <div className='prose max-w-fit'>
                            <h1 className='uppercase'>MI FIT - THEO DÕI SỨC KHỎE VÀ TỐI ƯU HÓA HOẠT ĐỘNG HÀNG NGÀY
                            </h1>

                            <img className='h-80 aspect-auto' src='https://fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/xiaomi-miband-6-1.jpg' />
                            <p>Mi Fit là một ứng dụng chăm sóc sức khỏe được phát triển bởi Huami - công ty đứng sau loạt thiết bị đeo được Amazfit và nhà sản xuất thiết bị đeo của Xiaomi. Thông qua Mi Fit, bạn có thể theo dõi các số liệu sức khỏe được ghi lại bởi Mi Band - vòng theo dõi vận động được sản xuất bởi Xiaomi.
                                Ở bài viết này, Youth+ Tech sẽ giúp các bạn có được cái nhìn tổng quát về những tính năng chính của Mi Fit.</p>

                            <h2>Theo dõi hoạt động thường ngày</h2>
                            <p>Mi Fit theo dõi và thống kê theo ngày/giờ một cách chính xác các hoạt động như đi bộ, chạy bộ, đạp xe,... Các số liệu này được ghi lại thông qua Mi Band, bao gồm thời gian luyện tập, sự thay đổi của nhịp tim, quãng đường di chuyển, lượng calories tiêu thụ,...
                                Đặc biệt, trong thời kỳ dịch bệnh hiện nay, chúng ta phải làm việc tại nhà và ngồi trước máy tính rất nhiều. Thông qua Mi Band, Mi Fit có thể đưa ra cảnh báo nếu bạn đã ngồi quá lâu mà không có hoạt động gì trong khoảng thời gian mà bạn cài đặt từ trước. Việc này có thể góp phần giúp bạn giảm stress và ngăn ngừa các bệnh về xương khớp do thiếu vận động.
                            </p>

                            <h2>Theo dõi các chỉ số sức khỏe
                            </h2>
                            <p>
                                Sau khi kết nối với thiết bị đồng hồ Mi Band, trên ứng dụng sẽ hiển thị tình trạng cân nặng, nhịp tim, huyết áp,... Một trong những chức năng mà tất cả các phiên bản Mi Band trên thị trường hiện nay đều có đó là theo dõi giấc ngủ. Mi Fit phân tích trạng thái giấc ngủ thông qua những yếu tố ảnh hưởng đến giấc ngủ như tổng thời gian ngủ, thời gian ngủ sâu, thời gian ngủ nông và thời gian thức. Bằng việc kết hợp các số liệu này, bạn có thể tìm ra cách để cải thiện giấc ngủ cho bản thân.

                            </p>

                            <h2>Điều chỉnh các thông báo</h2>
                            <p>
                                Bên cạnh các tính năng đa dạng về chăm sóc sức khỏe, Mi Fit có thể kết nối và đồng bộ hóa với thiết bị điện thoại thông minh, thông qua đó tùy chỉnh thông báo hiển thị trên đồng hồ Mi Band. Tuy nhiên, các thông báo mà Mi Fit điều chỉnh được chỉ giới hạn ở cuộc gọi đến và SMS. Nếu muốn nhận thông báo từ các ứng dụng khác, bạn có thể cài đặt thêm ứng dụng của bên thứ ba (ví dụ như Mi Bandage) để thay đổi theo ý mình.

                            </p>

                            <h2>
                                Làm việc với nhiều thiết bị thông minh

                            </h2>
                            <p>
                                Ngoài vòng đeo tay Mi Band, Xiaomi có rất nhiều sản phẩm chăm sóc sức khỏe khác như đồng hồ thông minh, cân, giày thông minh. Các thiết bị này đều có thể kết nối với ứng dụng Mi Fit cùng một lúc, giúp bạn dễ dàng tổng hợp các số liệu để có sự theo dõi đầy đủ nhất đối với mọi chỉ số sức khỏe của mình. Bên cạnh đó, một bước tiến lớn của ứng dụng này chính là chức năng kết nối giữa những người dùng ứng dụng Mi Fit để theo dõi tình trạng sức khỏe cùng nhau. Việc này có thể phục vụ cho các mục đích chung như những cuộc thi trong các hoạt động ngoài trời, qua đó kết nối các mối quan hệ gần nhau hơn, cùng chia sẻ và chăm sóc nhau
                                Nếu bạn đang tìm kiếm một ứng dụng theo dõi sức khỏe, Mi Fit và Mi Band là một sự lựa chọn hoàn hảo, với giao diện đơn giản, dễ sử dụng và lợi thế về giá so với những ông lớn như Apple và Samsung. Hi vọng rằng thông qua bài viết này, bạn có thể nắm được những thông tin cơ bản nhất về ứng dụng Mi Fit.

                            </p>


                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-4 mt-10 lg:mt-0 px-5 lg:px-10'>
                        <h2 className='text-2xl font-bold uppercase'>Các bài viết khác</h2>
                        <div className="text-black py-5 border-b-2 border-gray-300">
                            <div className="mb-3 rounded-box">
                                <img className="rounded-box" src="https://i1-sohoa.vnecdn.net/2021/12/31/pinetwork-7071-1640939310.jpg?w=300&h=180&q=100&dpr=2&fit=crop&s=JfweDi9y8gduMy8INleyFg" />
                            </div>
                            <div>
                                <a className="font-bold text-xl hover:underline">Sự kết hợp hoàn hảo giữa người và máy</a>
                                <p className='font-light text-xs mt-2'>7/11/2021</p>
                            </div>
                        </div>
                        <div className="text-black py-3 border-b-2 border-gray-300">
                            <div>
                                <a className="font-bold text-md hover:underline">Mi Fit - Theo dõi sức khoẻ và tối ưu hoá hoạt động hằng ngày</a>
                                <p className='font-light text-xs mt-2'>7/11/2021</p>
                            </div>
                        </div>
                        <div className="text-black py-3 border-b-2 border-gray-300">
                            <div>
                                <a className="font-bold text-md hover:underline">Mi Fit - Theo dõi sức khoẻ và tối ưu hoá hoạt động hằng ngày</a>
                                <p className='font-light text-xs mt-2'>7/11/2021</p>
                            </div>
                        </div>
                        <div className="text-black py-3 border-b-2 border-gray-300">
                            <div>
                                <a className="font-bold text-md hover:underline">Mi Fit - Theo dõi sức khoẻ và tối ưu hoá hoạt động hằng ngày</a>
                                <p className='font-light text-xs mt-2'>7/11/2021</p>
                            </div>
                        </div>
                        <div className='py-3 flex justify-center'>
                            <button className="btn btn-sm self-center bg-black">Xem thêm</button>

                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>

    )
}


export default Post