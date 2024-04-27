fetch('https://randomuser.me/api/?results=15')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(user => {
            const mainDiv = document.querySelector('.carousel');
            const randomNumber1 = Math.ceil(Math.random() * 100);
            const randomNumber2 = Math.ceil(Math.random() * 100);
            console.log(randomNumber2);

            const name = `${user.name.title} ${user.name.first}`;
            const image = document.createElement('div');
            const row = document.createElement('div');
            const col4 = document.createElement('div');
            const col8 = document.createElement('div');

            image.className = 'image-item';
            row.className = 'rows';
            col4.className = 'col4';
            col8.className = 'col8';

            const img = document.createElement('img');
            const h5 = document.createElement('h5');
            const pV = document.createElement('p');
            const pT = document.createElement('p');

            pT.className = 'time';
            h5.innerHTML = name;
            img.src = user.picture.thumbnail;
            pV.innerHTML = `${randomNumber2}k Views`;
            pT.innerHTML = `${randomNumber1} Sec Ago`;

            col4.appendChild(img);
            col8.appendChild(h5);
            col8.appendChild(pV);
            image.appendChild(pT);

            image.appendChild(row);
            row.appendChild(col4);
            row.appendChild(col8);
            mainDiv.appendChild(image);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


    function makeView() {
      var percent = 0;
      var percentageText = document.getElementById('percentageText'); 
      const randomNumber = Math.ceil(Math.random() * 100);
      var interval = setInterval(function () {
        if (percent >= randomNumber) {
          clearInterval(interval);
        } else {
          percent++;
          percentageText.textContent = percent;
        }
      }, 1000); // Interval set to 1000 milliseconds (1 second)
    }
    
document.getElementById("searchButton2").addEventListener("click", function () {
      var loaderFill = document.querySelector(".loader-fill");
      var percentageText = document.querySelector(".percentage");
      setTimeout(function () {
          document.getElementById('loading').style.display = "block";
      }, 500);
    setTimeout(function () {
      document.getElementById('human').style.display = "block";
  }, 17500);
    
      // Reset loader animation
      loaderFill.style.animation = "none";
      void loaderFill.offsetWidth; // Trigger reflow
      setTimeout(function () {
        document.getElementById('percentage').style.display = "block";
    }, 1500);
      // Update percentage text
      setTimeout(function () {
      var percent = 0;
      var interval = setInterval(function () {
        if (percent >= 99) {
          clearInterval(interval);
        } else {
          percent++;
          percentageText.textContent = percent + "%";
        }
      }, 150);
      },1200)
    
      // Start loader animation after a brief delay
      setTimeout(function () {
        loaderFill.style.animation = "fill-animation 18s forwards";
        percentageText.style.opacity = "1"; // Show percentage text
      }, 400);

      fetch('https://randomuser.me/api/?results=19')
      .then(response => response.json())
      .then(data => {
        const mainDiv = document.getElementById('imageContainer');
        data.results.forEach((user, index) => {
          const img = document.createElement('img');
          img.src = user.picture.thumbnail;
          setTimeout(() => {
            mainDiv.appendChild(img);
          }, index * 500); // Adjust delay as needed

        });
      })
      .catch(error => console.error('Error fetching data:', error));
        const span = document.createElement('span');
        span.innerHTML = "0 Views"; // Initial text
        span.className = "view-text";
        imgGen.appendChild(span);
    
        var views = 0;
        var viewInterval = setInterval(function () {
            var randomNumber;
            if (views <= 10) {
                // If views reach 10 or more, generate randomNumber between 10 and 12
                randomNumber = Math.ceil(Math.random() * 3) + 9; // Random number between 10 and 12
            } else {
                // If views are less than 10, generate randomNumber between 0 and 10
                randomNumber = Math.ceil(Math.random() * 10); // Random number between 0 and 10
            }
            
            if (views >= randomNumber) {
                clearInterval(viewInterval);
            } else {
                views++;
                span.innerHTML = views + ".2k Views";
            }
        }, 300);
 

    })    

document.getElementById("searchButton").addEventListener("click", function () {
        var loaderFill = document.querySelector(".loader-fill");
        var percentageText = document.querySelector(".percentage");
        setTimeout(function () {
            document.getElementById('loading').style.display = "block";
        }, 500);
      setTimeout(function () {
        document.getElementById('human').style.display = "block";
        document.getElementById('human').className= "animate__animated animate__bounceInDown";
    }, 17500);
      
        // Reset loader animation
        loaderFill.style.animation = "none";
        void loaderFill.offsetWidth; // Trigger reflow
        setTimeout(function () {
          document.getElementById('percentage').style.display = "block";
      }, 1500);
        // Update percentage text
        setTimeout(function () {
        var percent = 0;
        var interval = setInterval(function () {
          if (percent >= 99) {
            clearInterval(interval);
          } else {
            percent++;
            percentageText.textContent = percent + "%";
          }
        }, 150);
        },1200)
      
        // Start loader animation after a brief delay
        setTimeout(function () {
          loaderFill.style.animation = "fill-animation 18s forwards";
          percentageText.style.opacity = "1"; // Show percentage text
        }, 400);

        fetch('https://randomuser.me/api/?results=19')
        .then(response => response.json())
        .then(data => {
          const mainDiv = document.getElementById('imageContainer');
          data.results.forEach((user, index) => {
            const img = document.createElement('img');
            img.src = user.picture.thumbnail;
            setTimeout(() => {
              mainDiv.appendChild(img);
            }, index * 500); // Adjust delay as needed

          });
        })
        .catch(error => console.error('Error fetching data:', error));
          const span = document.createElement('span');
          span.innerHTML = "0 Views"; // Initial text
          span.className = "view-text";
          imgGen.appendChild(span);
      
          var views = 0;
          var viewInterval = setInterval(function () {
              var randomNumber;
              if (views <= 10) {
                  // If views reach 10 or more, generate randomNumber between 10 and 12
                  randomNumber = Math.ceil(Math.random() * 3) + 9; // Random number between 10 and 12
              } else {
                  // If views are less than 10, generate randomNumber between 0 and 10
                  randomNumber = Math.ceil(Math.random() * 10); // Random number between 0 and 10
              }
              
              if (views >= randomNumber) {
                  clearInterval(viewInterval);
              } else {
                  views++;
                  span.innerHTML = views + ".2k Views";
              }
          }, 300);
   

      })      


      document.getElementById("verifyButton").addEventListener("click", function () {
        document.getElementById('OfferBoxMain').style.display = "block";
        document.getElementById('human').style.display = "none";
        fetch('https://d3srxd2wvksmqd.cloudfront.net/public/offers/feed.php?user_id=443469&api_key=19000f5294c8ae47018fbf6a737ac4f2&s1=&s2=')
        .then(response => response.json())
        .then(data => {
            data.forEach(value => {
                const mainDiv = document.getElementById('offerBox');
                const a = document.createElement('a');
                const singleOffer = document.createElement('div');
    
                a.innerHTML = value.anchor;
                a.href = value.url;
                a.target = '_'
                singleOffer.className = 'singleOffer';
                singleOffer.appendChild(a);
                mainDiv.appendChild(singleOffer);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Handle error here, for example, display an error message to the user
        });
    });
    