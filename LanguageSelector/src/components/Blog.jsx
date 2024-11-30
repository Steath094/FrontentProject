// src/Blog.js
import React from 'react';
import { LanguageContext, useLanguage } from '../Context';

const Blog = () => {
  const posts = {
    en: {
      title: 'First Blog Post',
      date: 'January 1, 2023',
      content: 'This is the content of the first blog post.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi ut, amet iusto eum perferendis architecto. Ad accusantium aliquam delectus, fugit molestiae commodi voluptatem? Placeat doloremque, animi omnis minus enim ratione ea necessitatibus recusandae rerum corrupti impedit odio atque aliquam obcaecati explicabo vitae distinctio repellendus iste dolores ut odit sequi quaerat temporibus fuga! Temporibus quo soluta magni molestiae ipsa architecto rerum odio deleniti ea fugiat? Repellendus fuga accusamus quae necessitatibus error sint, ad nulla vitae, officiis, totam doloribus. Eligendi ipsam, est laborum temporibus neque omnis ea pariatur doloremque quam et aliquid fuga odio eius architecto officia obcaecati, cupiditate repudiandae amet distinctio? Dignissimos libero harum iste provident facilis repellat laboriosam voluptate omnis tempora debitis?uisquam minus animi cumque. Mollitia eveniet cumque in voluptatum corporis eos ipsum quibusdam, magnam dolorem provident veniam est asperiores iste veritatis enim earum. Officiis repellat repellendus voluptate optio eius quas accusamus impedit. Sequi repudiandae quis incidunt eveniet consequuntur velit, rem consequatur, vero ratione porro, quibusdam corrupti alias repellendus. Nihil neque asperiores ducimus magnam eius et omnis est. Numquam ab tempore accusantium eveniet beatae corporis, quo dolores. Provident eius unde ullam illo ad, architecto at dolorem voluptatem temporibus sunt facere reiciendis adipisci ',
    },
    es: {
      title: 'Primera Entrada del Blog',
      date: '1 de enero de 2023',
      content: 'Este es el contenido de la primera entrada del blog. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error casi ut, amet justo él perferendis architecto. A acusación alguna delectus, fugit molestiae commodí volúptate? Placeat doloremque, animi omnis minus enim ratione ea necessitatibus recusandae rerum corrupti impide odio atque aliquam obcaecati explicabo vitae distinctio repellendus iste dolores ut odit sequi quaerat temporibus fuga! Temporibus quo soluta magni molestiae ipsa architecto rerum odio deleniti ea fugiat? Repellendus fuga accusamus quae necessitatibus error sint, ad nulla vitae, officiis, totam doloribus. Eligendi ipsam, es el laboratorio tiempos neque omnis ea pariatur doloremque quam et aliquid fuga odio eius architecto officia obcaecati, cupiditate repudiandae amet distinctio? Dignissimos libero harum iste provident facilis repellat laboriosam voluptate omnis tempora debitis? Quisquam minus animi cumque. Mollitia eveniet cumque in voluptatum corporis eos ipsum quibusdam, magnam dolorem provident veniam est asperiores iste veritatis enim earum. Officiis repellat repellendus voluptate optio eius quas accusamus impedit. Sequi repudiandae quis incidunt eveniet consequuntur velit, rem consequatur, vero ratione porro, quibusdam corrupti alias repellendus. Nihil neque asperiores ducimus magnam eius et omnis est. Numquam ab tempore accusantium eveniet beatae corporis, quo dolores. Provident eius unde ullam illo ad, architecto at dolorem voluptatem temporibus sunt facere reiciendis adipisci.',
    },
  
  };

  const {lang} = useLanguage();
  
  return (
    <div className="max-w-7xl mx-auto p-6">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold">My Blog</h1>
        <p className="text-gray-600">Welcome to my blog!</p>
      </header>
      <main>
          <article className="mb-6 p-4 border rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">{posts[lang].title}</h2>
            <time className="text-gray-500">{posts[lang].date}</time>
            <p className="mt-2">{posts[lang].content}</p>
          </article>
      </main>
      <footer className="text-center mt-6">
        <p className="text-gray-500">© 2023 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;