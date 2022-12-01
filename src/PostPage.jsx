import React from 'react'
import Img from './Images/bg.jpg'
import ProImg from './Images/profile.jpg'
const PostPage = () => {
   
    const PageProgress = () => {
        const pbar = document.getElementById('pBar');
        document.addEventListener('scroll',(e) => {
            let w = (document.body.scrollTop || document.documentElement.scrollTop)/(document.documentElement.scrollHeight - document.documentElement.clientHeight)*100;
            pbar.style.setProperty('width', w +'%');
            })
    }
   
   
    window.addEventListener('scroll', () => {
        PageProgress()
    })
  return (
    <div className='postPageMain'>
        <div className="progressBar"><div className="progressReader" id='pBar'></div></div>
        <div className="imgContainer">
            <img src={Img} alt="" />
        </div>
        <div className="title"> <h1> How To Gey Away With Murder Review</h1> </div>
        <div className="profile">
            <div className="name">
                <p>Adegoke Stephen Busayo</p>
                <div className="imgCont">
                    <img src={ProImg} alt="" />
                </div>
            </div>
            <div className="pubdets">
                <h4>
                    UPDATED :2nd December 2022
                </h4>
                <h6>
                    PUBLISHED :2nd December 1022
                </h6>
            </div>
        </div>
        <div className="page__content">
           <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ipsam iure porro omnis eligendi earum, veritatis deleniti eum, iste reprehenderit, accusamus a aperiam totam consequatur corporis. Officiis, tempore error accusantium maxime sunt iusto molestiae reiciendis incidunt laborum qui consequuntur perspiciatis porro vitae adipisci. Nemo, debitis odit aliquam asperiores tempore repellendus ab architecto, consequuntur quod rerum quas, at suscipit deserunt. Facilis sit quisquam expedita incidunt ea ex dignissimos adipisci ducimus! Doloribus id, voluptatem dolores voluptates omnis accusamus? Eos pariatur eveniet amet distinctio dolorem eius deleniti debitis ea similique neque, architecto eligendi, nobis, excepturi praesentium. Quis culpa rem cumque recusandae. Illum laudantium soluta, quia, maiores, ex cupiditate in animi nesciunt officiis expedita nobis. Nostrum beatae aspernatur recusandae, inventore numquam, aliquid quo aperiam tempora molestiae eum omnis iusto maiores consequuntur ullam repudiandae quis ipsam. Doloribus, tenetur! Natus est aut recusandae iusto voluptates delectus quia quibusdam consequuntur rerum architecto accusantium placeat rem omnis nesciunt voluptatum sunt adipisci at harum autem, quaerat debitis obcaecati ea vel? Voluptas, tempore! Molestias ex consectetur quas sapiente fugiat voluptas deleniti amet saepe porro maxime assumenda corporis a deserunt, harum modi? Odio vero consequuntur veniam similique debitis fuga, ipsa optio vel enim atque nesciunt consectetur ex illum necessitatibus, saepe ut, sed exercitationem iusto totam voluptatibus eius asperiores! Suscipit vero cumque placeat quasi sunt nesciunt iure quaerat excepturi! Facere numquam, quas mollitia temporibus qui eum odio cum id quo molestiae. Fugiat cupiditate possimus, facere ratione itaque eligendi alias molestias maxime quasi commodi quibusdam deserunt porro sequi ex, iusto cumque quam modi dolor quia. Praesentium, nihil corporis maxime, repellat iusto repellendus rem reprehenderit odit ratione eaque eius odio ea. Totam voluptates, ducimus, quis est porro dolores reiciendis molestiae quas officia quo laborum corrupti aspernatur quisquam, laudantium autem cupiditate nihil nisi delectus illo tempora suscipit possimus. Autem incidunt, quis doloribus maiores voluptatibus maxime dolore facere corrupti, velit est rem, temporibus pariatur! Laboriosam optio perspiciatis ea voluptates dolorem atque sed! Quia odio cum nulla sunt praesentium pariatur autem ad ut. Officiis, itaque minus nemo expedita harum impedit odit exercitationem sapiente eveniet blanditiis illum, corporis, pariatur error voluptas eaque. Labore eligendi fuga eum in odit corporis nulla? Natus recusandae exercitationem voluptate rerum vel eaque minus eligendi optio laborum molestiae perferendis laudantium nulla sequi a, doloremque, laboriosam veniam aperiam aliquam voluptatum velit molestias atque ullam? Commodi itaque magni saepe nisi provident deserunt sequi cupiditate nostrum est placeat perferendis doloremque, tenetur temporibus mollitia! Possimus, ipsa doloribus esse quas quibusdam inventore reprehenderit. Odio odit placeat cumque deserunt quam quasi maxime quo quos, maiores, laborum vero a porro deleniti assumenda quis? Eius aliquam adipisci temporibus. Esse dolores recusandae provident error reiciendis at, dicta sequi distinctio quibusdam illum soluta mollitia dolorem exercitationem explicabo. Tempora odit eligendi rem iure iusto officiis ut. Veritatis pariatur quia sequi repellendus assumenda magnam, neque eligendi maiores rem nam quo aliquam officia voluptatem ipsum error soluta inventore eveniet, dolorum similique. Rerum maiores iusto eius sapiente asperiores recusandae neque accusamus dolore minus optio deleniti esse similique, accusantium, pariatur, dolorum dignissimos cumque maxime fugit unde ullam alias repudiandae.
            </p>
        </div>
    </div>
  )
}

export default PostPage