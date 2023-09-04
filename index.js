Vue.component('Index', {
    props: {  },

    data() {
        return {
            article: {
                id: 1, 
                img: "./img/news_1.png",
                title: "Let’s Get Solution for Building Construction Work",
                description: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.",
                text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
            },
            articles: [
                {
                    id: 1, 
                    img: "./img/news_1.png",
                    title: "Let’s Get Solution for Building Construction Work",
                    description: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.",
                    text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                },
                {
                    id: 2, 
                    img: "./img/news_2.png",
                    title: "Let’s Get Solution for Kitchen Construction Work",
                    description: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.",
                    text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                },
                {
                    id: 3, 
                    img: "./img/news_3.png",
                    title: "Let’s Get Solution for Bedroom Construction Work",
                    description: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.",
                    text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                },
                {
                    id: 4, 
                    img: "./img/news_4.png",
                    title: "Let’s Get Solution for Architecture Construction Work",
                    description: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.",
                    text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised wofindwhich don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."
                },
            ]
        }
    },
    methods: {
        find(item){
            this.article = {};
            this.articles.forEach(el => {
                console.log(el.title)
                el.title.toLowerCase().includes(item.toLowerCase()) ? this.article = el: console.log('No matches');
            });
        }
    },

    template: `
        <div class="blog-content center">
            <div class="blog-box">
                <div class="blog-details">
                    <h1>{{article.title}}</h1><br>
                    <h4>{{article.id}}</h4>
                    <img :src="article.img" alt="pic"><br>
                    <p>{{article.text}}</p><br><br>
                </div>
                <hr>
                <h3>List of articles</h3>
                <ol class="blog__list">
                    <li class="blog__li" v-for="article in articles">{{article.title}}<br>
                    {{article.description}}</li>
                </ol>
            </div>
            <div class="tags">
                <h2>Tags</h2>
                <div class="buttons">
                    <button @click="find('kitchen')">kitchen</button>
                    <button @click="find('bedroom')">bedroom</button>
                    <button @click="find('building')">building</button>
                    <button @click="find('architecture')">architecture</button>
                    <button @click="find('planing')">planing</button>
                </div>
            </div>
        </div>
    `,
});