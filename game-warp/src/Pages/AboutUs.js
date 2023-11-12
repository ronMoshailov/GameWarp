// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import '../CSS/aboutUs.css'

const AboutUs = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchData();
    },[])

    async function fetchData() {
        try {
            const response = await fetch('../json/aboutUsTable.json'); // Replace 'data.json' with the actual path to your JSON file
            const data = await response.json();
            console.log("suscess");
            
            // console.log("The statue: " + response);
            // Access the data
            // const people = data.employees;

            // Example: Log names of people
            // people.forEach(person => {
            //     console.log(person.name);
            // });

        } catch (error) {
            console.error('Error fetching data:', error);
            console.log('error');
        }
    }

    return ( 
        <div>
        <body>    
            <h2 id='title'>About Us</h2>
            <div id='mainDiv'>
                <div id="background-story" className='col-8'>
                    <p>
                    In the heart of the city, where the digital pulse of gaming resonated with the 
                    fervor of enthusiasts, there stood a unique haven named "Game-Warp." 
                    This vibrant computer shop belonged to a passionate gamer named Roni, 
                    who had a dream of creating a space where gaming enthusiasts could gather, 
                    share experiences, and embark on virtual adventures together.
                    </p>
                    <p>
                    The storefront of Game-Warp was a spectacle in itself, adorned with neon lights that 
                    flickered in a mesmerizing rhythm, drawing in gamers from blocks away. 
                    The name "Game-Warp" was emblazoned in bold letters, capturing the essence of the 
                    shop's mission to transport players into immersive gaming realms.
                    </p>
                    <p>
                    Inside, the atmosphere buzzed with excitement, and the air was filled with the sound 
                    of clicking keyboards and the glow of RGB lighting. Rows of high-performance gaming 
                    PCs lined the walls, each equipped with the latest graphics cards and processors. 
                    Shelves were stacked with gaming peripherals, from mechanical keyboards to precision 
                    mice, creating a paradise for those who sought the perfect setup.
                    </p>
                    <p>
                    Roni, the mastermind behind Game-Warp, was a true gaming connoisseur. With an 
                    encyclopedic knowledge of video games and a genuine love for the industry, he 
                    greeted customers with a warm smile and an infectious enthusiasm for the latest 
                    releases. Roni wasn't just a shop owner; he was a fellow gamer who understood the 
                    thrill of a hard-fought victory and the camaraderie forged in virtual battles.
                    </p>
                    <p>
                    Game-Warp wasn't just a retail space; it was a community hub for gamers of all ages. 
                    Roni organized regular gaming tournaments, bringing together local players to compete 
                    in epic showdowns across various titles. The shop's interior featured a dedicated 
                    gaming lounge, where friends could gather, challenge each other, and share tips and 
                    tricks over energy drinks and snacks.
                    </p>
                    <p>
                    One day, a group of aspiring esports players approached Roni, seeking support to 
                    kickstart their competitive journey. Without hesitation, Roni became their mentor, 
                    providing guidance on hardware, strategies, and even hosting charity events to fund 
                    their participation in tournaments. Game-Warp became a springboard for local talent, 
                    a place where dreams of esports glory took root.
                    </p>
                    <p>
                    As the reputation of Game-Warp spread, Roni expanded the business to include an 
                    online store, ensuring that gamers outside the city could experience the magic of 
                    Game-Warp's curated selection. The shop became a pilgrimage site for gamers from 
                    neighboring towns, all drawn by the promise of top-notch gaming gear and a community 
                    that shared their passion.
                    </p>
                    <p>
                    And so, the legend of Game-Warp continued to grow, a testament to Roni's dedication 
                    to the gaming community. It wasn't just a shop; it was a warp zone where gamers 
                    transcended reality, bound together by the joy of gaming and the vision of a 
                    passionate owner who turned a dream into a thriving reality.
                    </p>
                </div>
                <div id='imagesDiv'>
                    <img className='images' id='' src='https://scontent.ftlv7-1.fna.fbcdn.net/v/t1.6435-9/104472558_3125342890842143_4083652902710071377_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=WBcXhHYc1wcAX_ODV_z&_nc_ht=scontent.ftlv7-1.fna&oh=00_AfCcwNnJ1xSn-jERQkpk7hEdWicZr00ld_QS3BmZGccJGg&oe=6577674D'>
                    </img>
                    <img className='images' id='' src='https://media.timeout.com/images/103377921/750/422/image.jpg'>
                    </img>
                    <img className='images' id='' src='https://lh5.googleusercontent.com/p/AF1QipMnH9NQB2KglWMTGFyb99RiFyo18ZhVl-W0Vl_N'>
                    </img>
                    <img className='images' id='' src='https://i.redd.it/up5628xk17v01.jpg'>
                    </img>
                </div>
            </div>

        {/* Table */}
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Activity time</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>

        </body>
        </div>
    );
}
 
export default AboutUs;