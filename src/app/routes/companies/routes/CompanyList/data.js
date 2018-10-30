const productData = [
    {
        thumb: 'https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg?width=700&crop=2:1',
        name: 'Google',
        type: 'Software/Hardware',
        sizeOfCompany: '85050',
        rating: 5,
        description: "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware.",
    },
    {
        thumb: 'https://cdn.vox-cdn.com/thumbor/wYOpPpMpf80s2qI1kORzdOIpxFA=/0x0:4500x3000/1200x800/filters:focal(1890x1140:2610x1860)/cdn.vox-cdn.com/uploads/chorus_image/image/59345043/512015968.jpg.0.jpg',
        name: 'Facebook',
        type: 'Software/Hardware',
        sizeOfCompany: '25105',
        rating: 4.9,
        description: "Facebook is an American online social media and social networking service company based in Menlo Park, California. Its website was launched on February 4, 2004, by Mark Zuckerberg, along with fellow Harvard College students and roommates.",
    },
    {
        thumb: 'https://betanews.com/wp-content/uploads/2016/08/twitter-banner.jpg',
        name: 'Twitter',
        type: 'Software/Hardware',
        sizeOfCompany: '3372',
        rating: 4.7,
        description: "Twitter (/ˈtwɪtər/) is an online news and social networking service on which users post and interact with messages known as \"tweets\". but on November 7, 2017, this limit was doubled for all languages except Japanese, Korean, and Chinese.",
    }
];
for (let i = 0; i< 100; i++) {
    productData.push(productData[0]);
}

export default productData;
